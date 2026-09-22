#!/usr/bin/env python3
"""Expose the catalogue and Crystal Toolkit through one local HTTP origin.

The development site uses two local services: the catalogue on 8766 and the
Crystal Toolkit Dash viewer on 8767.  A Cloudflare Quick Tunnel accepts one
origin, so this small standard-library proxy keeps the public entry point
single-origin while routing the viewer's Dash endpoints to the second service.

The proxy binds to loopback by default and is intended for local publishing;
it does not replace the catalogue or viewer servers.
"""

from __future__ import annotations

import argparse
import http.client
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from typing import Iterable
from urllib.parse import urlsplit


HOP_BY_HOP = {
    "connection",
    "keep-alive",
    "proxy-authenticate",
    "proxy-authorization",
    "te",
    "trailer",
    "transfer-encoding",
    "upgrade",
}
VIEWER_PREFIX = "/__viewer"


def _join_path(path: str, query: str) -> str:
    return path + (f"?{query}" if query else "")


class PublicProxyHandler(BaseHTTPRequestHandler):
    """Forward catalogue requests and viewer/Dash requests to their origins."""

    protocol_version = "HTTP/1.1"
    catalog_host = "127.0.0.1"
    catalog_port = 8766
    viewer_host = "127.0.0.1"
    viewer_port = 8767

    def log_message(self, format: str, *args: object) -> None:
        # Keep the process useful when launched from a terminal without
        # duplicating every static asset request in the console.
        if self.command in {"POST", "OPTIONS"} or self.path.startswith(VIEWER_PREFIX):
            super().log_message(format, *args)

    def do_GET(self) -> None:  # noqa: N802
        self._forward()

    def do_HEAD(self) -> None:  # noqa: N802
        self._forward()

    def do_POST(self) -> None:  # noqa: N802
        self._forward()

    def do_OPTIONS(self) -> None:  # noqa: N802
        self._forward()

    def _route(self) -> tuple[str, int, str]:
        parsed = urlsplit(self.path)
        path = parsed.path or "/"
        query = parsed.query

        # The iframe is loaded from /__viewer/.  Dash then emits absolute
        # requests such as /_dash-layout and /_dash-update-component; route
        # those known viewer endpoints to the same upstream as the iframe.
        if path == VIEWER_PREFIX or path.startswith(VIEWER_PREFIX + "/"):
            viewer_path = path[len(VIEWER_PREFIX) :] or "/"
            if not viewer_path.startswith("/"):
                viewer_path = "/" + viewer_path
            return self.viewer_host, self.viewer_port, _join_path(viewer_path, query)
        if (
            path.startswith("/_dash-")
            or path.startswith("/_dash/")
            or path == "/_favicon.ico"
            or path.startswith("/assets/")
        ):
            return self.viewer_host, self.viewer_port, _join_path(path, query)
        return self.catalog_host, self.catalog_port, _join_path(path, query)

    def _request_body(self) -> bytes | None:
        raw_length = self.headers.get("Content-Length")
        if not raw_length:
            return None
        try:
            length = int(raw_length)
        except ValueError:
            self.send_error(HTTPStatus.BAD_REQUEST, "Invalid Content-Length")
            return None
        if length < 0 or length > 20 * 1024 * 1024:
            self.send_error(HTTPStatus.REQUEST_ENTITY_TOO_LARGE)
            return None
        return self.rfile.read(length)

    def _upstream_headers(self) -> dict[str, str]:
        headers: dict[str, str] = {}
        for name, value in self.headers.items():
            if name.lower() not in HOP_BY_HOP and name.lower() != "host":
                headers[name] = value
        headers["Host"] = "127.0.0.1"
        headers["X-Forwarded-For"] = self.client_address[0]
        headers["X-Forwarded-Proto"] = "https" if self.headers.get("CF-Visitor") else "http"
        return headers

    def _forward(self) -> None:
        body = self._request_body() if self.command in {"POST", "PUT", "PATCH"} else None
        if self.command in {"POST", "PUT", "PATCH"} and body is None and "Content-Length" in self.headers:
            return
        host, port, target = self._route()
        connection: http.client.HTTPConnection | None = None
        try:
            connection = http.client.HTTPConnection(host, port, timeout=45)
            connection.request(self.command, target, body=body, headers=self._upstream_headers())
            response = connection.getresponse()
            payload = response.read()
            self.send_response(response.status, response.reason)
            for name, value in response.getheaders():
                if name.lower() in HOP_BY_HOP or name.lower() == "content-length":
                    continue
                self.send_header(name, value)
            self.send_header("Content-Length", str(len(payload)))
            self.send_header("Connection", "close")
            self.end_headers()
            if self.command != "HEAD":
                self.wfile.write(payload)
        except (ConnectionError, OSError, http.client.HTTPException) as error:
            if not self.wfile.closed:
                self.send_error(HTTPStatus.BAD_GATEWAY, f"Upstream unavailable: {error}")
        finally:
            if connection is not None:
                connection.close()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8768)
    parser.add_argument("--catalog-port", type=int, default=8766)
    parser.add_argument("--viewer-port", type=int, default=8767)
    args = parser.parse_args()

    PublicProxyHandler.catalog_port = args.catalog_port
    PublicProxyHandler.viewer_port = args.viewer_port
    server = ThreadingHTTPServer((args.host, args.port), PublicProxyHandler)
    print(
        f"Public proxy: http://{args.host}:{args.port}/ "
        f"(catalog {args.catalog_port}, viewer {args.viewer_port})"
    )
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
