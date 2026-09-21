#!/usr/bin/env python3
"""Serve the fuyao CIF catalogue through a small Crystal Toolkit viewer.

The catalogue site is intentionally kept as a dependency-free static/API
server.  Crystal Toolkit is a Dash application with a WebGL scene, so it runs
alongside that server on its own local port and is embedded by the material
detail page.  The only input accepted by the viewer is a catalogue record id;
the corresponding CIF is resolved inside ``data/structures`` and is parsed by
``pymatgen`` without changing the supplied structure.
"""

from __future__ import annotations

import argparse
from functools import lru_cache
from pathlib import Path
from urllib.parse import parse_qs, urlparse

from dash import Dash, Input, Output, dcc, html
from flask_caching import Cache
from pymatgen.core import Structure

import crystal_toolkit.components as ctc
from crystal_toolkit import CrystalToolkitPlugin


ROOT = Path(__file__).resolve().parent
STRUCTURES_ROOT = (ROOT / "data" / "structures").resolve()


def _record_id_from_search(search: str | None) -> str | None:
    """Read one record id from Dash's query string."""

    if not search:
        return None
    value = parse_qs(urlparse(search).query).get("record_id", [])
    record_id = value[0].strip() if value else ""
    return record_id or None


def _structure_path(record_id: str) -> Path:
    """Resolve a record id to a CIF below the fixed catalogue directory.

    Record ids are treated as names, rather than paths.  The resolved-parent
    check is kept even though the final suffix is appended here so a future
    change to the filename policy cannot accidentally introduce traversal.
    """

    if not record_id or Path(record_id).name != record_id:
        raise ValueError("材料记录编号无效")
    path = (STRUCTURES_ROOT / f"{record_id}.cif").resolve()
    if path.parent != STRUCTURES_ROOT or not path.is_file():
        raise FileNotFoundError(f"没有找到对应的 CIF：{record_id}")
    return path


@lru_cache(maxsize=512)
def _load_structure(record_id: str) -> Structure:
    """Parse the exact synchronized CIF for one catalogue record."""

    return Structure.from_file(_structure_path(record_id))


def create_app() -> Dash:
    """Create the standalone Crystal Toolkit Dash application."""

    structure_component = ctc.StructureMoleculeComponent(
        id="material-structure",
        struct_or_mol=None,
        bonding_strategy="CrystalNN",
        color_scheme="VESTA",
        radius_strategy="uniform",
        unit_cell_choice="input",
        draw_image_atoms=True,
        bonded_sites_outside_unit_cell=True,
        hide_incomplete_bonds=False,
        show_compass=True,
        show_legend=True,
        show_settings=True,
        show_controls=True,
        show_expand_button=True,
        show_image_button=True,
        show_export_button=True,
        show_position_button=True,
        scene_settings={"zoomToFit2D": True},
    )

    layout = html.Div(
        [
            dcc.Location(id="ctk-location", refresh=False),
            html.Div(id="ctk-status", className="ctk-status", role="status"),
            html.Div(
                structure_component.layout(size="100%"),
                className="ctk-structure-frame",
            ),
        ],
        className="ctk-page",
    )

    app = Dash(
        __name__,
        title="Crystal Toolkit · Synthesis Atlas",
        suppress_callback_exceptions=True,
        external_stylesheets=[],
    )
    app.layout = layout
    app.index_string = """<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        {%metas%}
        <title>{%title%}</title>
        {%favicon%}
        {%css%}
        <style>
            :root { color-scheme: light; font-family: Inter, "Segoe UI", sans-serif; }
            html, body, #react-entry-point, #_dash-app-content { width: 100%; height: 100%; margin: 0; background: #fff; color: #17211f; }
            html, body { overflow: hidden !important; }
            .ctk-page { position: relative; box-sizing: border-box; width: 100%; height: 100%; min-height: 100%; min-width: 0; padding: 0; overflow: hidden !important; background: #fff; }
            .ctk-status { position: absolute; z-index: 5; inset: 14px 16px auto; color: #68746f; font: 12px/1.4 ui-monospace, SFMono-Regular, Consolas, monospace; pointer-events: none; }
            .ctk-structure-frame { box-sizing: border-box; width: 100%; height: 100%; min-height: 100%; min-width: 0; overflow: hidden !important; border: 0; border-radius: 0; background: #fff; }
            .ctk-structure-frame > div, .ctk-structure-frame #CTmaterial-structure_scene { width: 100% !important; height: 100% !important; min-height: 0 !important; min-width: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: #fff !important; }
            .ctk-structure-frame .mpc-scene { width: 100% !important; height: 100% !important; max-height: 100% !important; overflow: hidden !important; }
        </style>
    </head>
    <body>
        {%app_entry%}
        <footer>
            {%config%}
            {%scripts%}
            {%renderer%}
        </footer>
    </body>
</html>"""

    @app.server.get("/health")
    def health():
        response = app.server.json.response({"status": "ok"})
        response.headers["Access-Control-Allow-Origin"] = "*"
        response.headers["Cache-Control"] = "no-store"
        return response

    # Crystal Toolkit registers the scene callbacks and stores through its
    # plugin.  An explicit cache backend keeps this portable across the
    # Flask-Caching versions used by the local scientific environment.
    ctk_cache = Cache(config={"CACHE_TYPE": "SimpleCache"})
    CrystalToolkitPlugin(layout=layout, cache=ctk_cache, use_default_css=True).plug(app)

    @app.callback(
        Output(structure_component.id(), "data"),
        Output("ctk-status", "children"),
        Output("ctk-status", "style"),
        Input("ctk-location", "search"),
    )
    def load_material(search: str | None):
        record_id = _record_id_from_search(search)
        if not record_id:
            return None, "请从材料详情页打开一个材料。", {"display": "block"}
        try:
            structure = _load_structure(record_id)
        except (FileNotFoundError, OSError, ValueError, RuntimeError) as error:
            return None, f"结构加载失败：{error}", {"display": "block"}
        return structure.as_dict(), "", {"display": "none"}

    return app


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--host", default="127.0.0.1", help="监听地址")
    parser.add_argument("--port", type=int, default=8767, help="监听端口")
    args = parser.parse_args()
    app = create_app()
    print(f"Crystal Toolkit viewer: http://{args.host}:{args.port}/?record_id=<record-id>")
    app.run(host=args.host, port=args.port, debug=False, dev_tools_ui=False)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
