#!/usr/bin/env python3
"""Serve the fuyao site and its read-only material catalog API.

The deployment remains file-backed: ``data/mp300_materials.json`` is the
source of truth, while this process adds indexed filtering and record-level
endpoints for the website.  It uses only Python's standard library so the same
entry point can run locally or on the fuyao host.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import threading
from collections import Counter
from datetime import datetime, timezone
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, quote, unquote, urlsplit


ROOT = Path(__file__).resolve().parent
DATA_ROOT = ROOT / "data"
CATALOG_PATH = DATA_ROOT / "mp300_materials.json"
MP_ID_PATTERN = re.compile(r"^mp-\d+$", re.IGNORECASE)


def utc_now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def finite_number(value: Any) -> float | None:
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    return number if math.isfinite(number) else None


def split_values(values: list[str]) -> list[str]:
    result: list[str] = []
    for value in values:
        result.extend(part.strip() for part in value.split(",") if part.strip())
    return result


def record_identity(item: dict[str, Any]) -> tuple[str, str | None, str]:
    """Return the catalog id, an MP id when present, and its id namespace.

    The synchronized source uses ``id`` as the stable record key.  MP-derived
    rows already use the canonical ``mp-<number>`` form, while WBM and other
    batches use their own identifiers.  We expose the distinction at the API
    boundary without rewriting the source JSON or pretending that every row
    came from Materials Project.
    """

    record_id = str(item.get("id") or "").strip()
    explicit_mp_id = str(
        item.get("mpId") or item.get("mp_id") or item.get("mp-id") or ""
    ).strip()
    mp_id = explicit_mp_id if MP_ID_PATTERN.fullmatch(explicit_mp_id) else None
    if mp_id is None and MP_ID_PATTERN.fullmatch(record_id):
        mp_id = record_id
    if mp_id:
        return record_id, mp_id, "materials-project"
    if item.get("wbmMaterialId"):
        return record_id, None, "wbm"
    return record_id, None, "catalog"


class CatalogStore:
    """Thread-safe, automatically reloaded index over the catalog JSON."""

    def __init__(self, catalog_path: Path) -> None:
        self.catalog_path = catalog_path
        self._lock = threading.RLock()
        self._mtime_ns = -1
        self._records: list[dict[str, Any]] = []
        self._by_id: dict[str, dict[str, Any]] = {}
        self._search: dict[str, str] = {}
        self._meta: dict[str, Any] = {}
        self.ensure_loaded()

    def ensure_loaded(self) -> None:
        try:
            mtime_ns = self.catalog_path.stat().st_mtime_ns
        except OSError as exc:
            raise RuntimeError(f"材料目录不存在: {self.catalog_path}") from exc
        if mtime_ns == self._mtime_ns:
            return
        with self._lock:
            if mtime_ns == self._mtime_ns:
                return
            raw = self.catalog_path.read_bytes()
            payload = json.loads(raw.decode("utf-8"))
            if not isinstance(payload, list):
                raise RuntimeError("材料目录必须是 JSON 数组")
            records: list[dict[str, Any]] = []
            by_id: dict[str, dict[str, Any]] = {}
            search: dict[str, str] = {}
            for index, item in enumerate(payload, start=1):
                if not isinstance(item, dict):
                    raise RuntimeError(f"材料目录第 {index} 条不是对象")
                material_id = str(item.get("id") or "").strip()
                if not material_id:
                    raise RuntimeError(f"材料目录第 {index} 条缺少 id")
                if material_id in by_id:
                    raise RuntimeError(f"材料目录存在重复 id: {material_id}")
                records.append(item)
                by_id[material_id] = item
                values = [
                    material_id,
                    item.get("formula"),
                    item.get("spacegroup"),
                    item.get("bestRoute"),
                    item.get("sourcePaper"),
                    item.get("sourceCategory"),
                    item.get("propertySearchText"),
                    " ".join(str(value) for value in item.get("elements") or []),
                    " ".join(str(value) for value in item.get("propertyTags") or []),
                ]
                search[material_id] = " ".join(str(value) for value in values if value).casefold()

            element_counts = Counter(
                str(element)
                for item in records
                for element in (item.get("elements") or [])
                if element
            )
            property_counts = Counter(
                str(tag)
                for item in records
                for tag in (item.get("propertyTags") or [])
                if tag
            )
            score_values = [number for item in records if (number := finite_number(item.get("score"))) is not None]
            id_type_counts = Counter(record_identity(item)[2] for item in records)
            structure_count = sum(1 for item in records if (DATA_ROOT / "structures" / f"{item['id']}.cif").is_file())
            report_count = sum(1 for item in records if self._report_path(item).is_file())
            self._records = records
            self._by_id = by_id
            self._search = search
            self._meta = {
                "records": len(records),
                "catalogSha256": hashlib.sha256(raw).hexdigest(),
                "structures": structure_count,
                "reports": report_count,
                "elements": len(element_counts),
                "propertyTags": len(property_counts),
                "mpRecords": id_type_counts.get("materials-project", 0),
                "recordIdTypes": dict(sorted(id_type_counts.items())),
                "averageScore": round(sum(score_values) / len(score_values), 2) if score_values else None,
                "elementCounts": dict(sorted(element_counts.items())),
                "propertyTagCounts": dict(property_counts.most_common()),
                "loadedAt": utc_now(),
            }
            self._mtime_ns = mtime_ns

    @staticmethod
    def _report_path(item: dict[str, Any]) -> Path:
        source_path = str(item.get("sourcePath") or "").replace("\\", "/").lstrip("/")
        if source_path.startswith("data/"):
            source_path = source_path[5:]
        return DATA_ROOT / source_path

    def meta(self) -> dict[str, Any]:
        self.ensure_loaded()
        return dict(self._meta)

    def get(self, material_id: str) -> dict[str, Any] | None:
        self.ensure_loaded()
        item = self._by_id.get(material_id)
        return self.decorate(item, full=True) if item else None

    @staticmethod
    def decorate(item: dict[str, Any] | None, full: bool) -> dict[str, Any]:
        if item is None:
            return {}
        if full:
            result = dict(item)
        else:
            fields = (
                "id", "formula", "elements", "spacegroup", "numSites", "eHull",
                "score", "propertyTags", "bestRoute", "sourcePaper", "sourceDoi",
                "mpId", "wbmMaterialId",
            )
            result = {field: item.get(field) for field in fields}
        material_id, mp_id, id_type = record_identity(item)
        result["recordId"] = material_id
        result["mpId"] = mp_id
        result["recordIdType"] = id_type
        result["structureUrl"] = f"/data/structures/{quote(material_id, safe='')}.cif"
        source_path = str(item.get("sourcePath") or "").replace("\\", "/").lstrip("/")
        result["reportUrl"] = f"/{quote(source_path, safe='/')}" if source_path else None
        return result

    def query(self, params: dict[str, list[str]]) -> dict[str, Any]:
        self.ensure_loaded()
        query = str(params.get("q", [""])[0]).strip().casefold()
        required_elements = set(split_values(params.get("elements", [])))
        required_properties = set(split_values(params.get("properties", [])))
        score_min = finite_number(params.get("score_min", [None])[0])
        ehull_max_mev = finite_number(params.get("ehull_max_mev", [None])[0])
        sort_mode = str(params.get("sort", ["score-desc"])[0])
        offset = self._bounded_integer(params.get("offset", ["0"])[0], "offset", 0, 1_000_000)
        limit = self._bounded_integer(params.get("limit", ["12"])[0], "limit", 1, 5000)
        include_full = str(params.get("include", ["summary"])[0]).lower() == "full"

        items: list[dict[str, Any]] = []
        for item in self._records:
            material_id = str(item["id"])
            if query and query not in self._search[material_id]:
                continue
            elements = set(str(value) for value in item.get("elements") or [])
            if required_elements and not required_elements.issubset(elements):
                continue
            properties = set(str(value) for value in item.get("propertyTags") or [])
            if required_properties and not required_properties.issubset(properties):
                continue
            score = finite_number(item.get("score"))
            if score_min is not None and (score is None or score < score_min):
                continue
            ehull = finite_number(item.get("eHull"))
            if ehull_max_mev is not None and (ehull is None or ehull * 1000 > ehull_max_mev):
                continue
            items.append(item)

        if sort_mode == "ehull-asc":
            items.sort(key=lambda item: (
                finite_number(item.get("eHull")) if finite_number(item.get("eHull")) is not None else math.inf,
                -(finite_number(item.get("score")) or -1),
                str(item.get("formula") or ""),
            ))
        elif sort_mode == "formula-asc":
            items.sort(key=lambda item: (str(item.get("formula") or "").casefold(), str(item.get("id") or "")))
        elif sort_mode == "score-desc":
            items.sort(key=lambda item: (
                -(finite_number(item.get("score")) or -1),
                finite_number(item.get("eHull")) if finite_number(item.get("eHull")) is not None else math.inf,
                str(item.get("formula") or ""),
            ))
        else:
            raise ValueError("sort 仅支持 score-desc、ehull-asc 或 formula-asc")

        matched = len(items)
        page = items[offset: offset + limit]
        return {
            "data": [self.decorate(item, full=include_full) for item in page],
            "meta": {
                "total": len(self._records),
                "matched": matched,
                "offset": offset,
                "limit": limit,
                "returned": len(page),
                "sort": sort_mode,
            },
        }

    @staticmethod
    def _bounded_integer(value: Any, name: str, minimum: int, maximum: int) -> int:
        try:
            result = int(str(value))
        except (TypeError, ValueError) as exc:
            raise ValueError(f"{name} 必须是整数") from exc
        if result < minimum or result > maximum:
            raise ValueError(f"{name} 必须在 {minimum} 到 {maximum} 之间")
        return result


class CatalogRequestHandler(SimpleHTTPRequestHandler):
    store: CatalogStore
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".cif": "chemical/x-cif; charset=utf-8",
    }

    def do_GET(self) -> None:  # noqa: N802 - method name is defined by http.server
        parsed = urlsplit(self.path)
        if parsed.path == "/":
            self.send_response(HTTPStatus.FOUND)
            self.send_header("Location", "/homepage/")
            self.end_headers()
            return
        if parsed.path.startswith("/api/"):
            self._serve_api(parsed.path, parse_qs(parsed.query, keep_blank_values=False))
            return
        super().do_GET()

    def _serve_api(self, path: str, params: dict[str, list[str]]) -> None:
        try:
            if path == "/api/health":
                meta = self.store.meta()
                healthy = meta["records"] == meta["structures"] == meta["reports"]
                self._json_response({"status": "ok" if healthy else "degraded", "catalog": meta})
                return
            if path == "/api/catalog/meta":
                self._json_response({"data": self.store.meta()})
                return
            if path == "/api/elements":
                meta = self.store.meta()
                self._json_response({"data": meta["elementCounts"], "meta": {"records": meta["records"]}})
                return
            if path == "/api/materials":
                self._json_response(self.store.query(params))
                return
            prefix = "/api/materials/"
            if path.startswith(prefix) and len(path) > len(prefix):
                material_id = unquote(path[len(prefix):]).strip()
                item = self.store.get(material_id)
                if item:
                    self._json_response({"data": item})
                else:
                    self._json_response({"error": "material_not_found", "message": "未找到该材料记录"}, HTTPStatus.NOT_FOUND)
                return
            self._json_response({"error": "not_found", "message": "API 路径不存在"}, HTTPStatus.NOT_FOUND)
        except ValueError as exc:
            self._json_response({"error": "invalid_query", "message": str(exc)}, HTTPStatus.BAD_REQUEST)
        except (OSError, RuntimeError, json.JSONDecodeError) as exc:
            self._json_response({"error": "catalog_unavailable", "message": str(exc)}, HTTPStatus.SERVICE_UNAVAILABLE)

    def _json_response(self, payload: dict[str, Any], status: HTTPStatus = HTTPStatus.OK) -> None:
        encoded = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Cache-Control", "no-store")
        self.send_header("X-Content-Type-Options", "nosniff")
        self.end_headers()
        self.wfile.write(encoded)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", default="127.0.0.1", help="监听地址，远端部署可使用 0.0.0.0")
    parser.add_argument("--port", type=int, default=8766, help="监听端口")
    args = parser.parse_args()

    store = CatalogStore(CATALOG_PATH)
    class BoundCatalogRequestHandler(CatalogRequestHandler):
        pass

    BoundCatalogRequestHandler.store = store
    handler = partial(BoundCatalogRequestHandler, directory=str(ROOT))
    server = ThreadingHTTPServer((args.host, args.port), handler)
    print(f"Synthesis Atlas: http://{args.host}:{args.port}/homepage/")
    print(f"Catalog API:     http://{args.host}:{args.port}/api/health")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
