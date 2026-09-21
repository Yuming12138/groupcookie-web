# groupcookie.com design snapshots

Fetched from fuyao (`ssh fuyao:/home/gmchen/sites/synthesis-atlas-preview-20260827-r1`, served at `http://10.10.58.87:8188/`) and cmsg (`ssh cmsg:/var/www/steel-yield-explorer`, served at `https://groupcookie.com/`).

- `fuyao/`: multi-page Synthesis Atlas design with homepage, properties, predict, members, material-detail, images, and source data.
- `cmsg/`: PIRAG Materials single-page design with search, properties, prediction, auth, members, and 3Dmol viewer.

This is a read-only snapshot of live HTTP responses; dynamic API data and auth/job state are not included.

The local `fuyao/` copy now also contains the synchronized cmsg CIF/report data package and a standard-library catalog API for preview work. See [DATA_BACKEND.md](DATA_BACKEND.md) for the source hash, sync command, and endpoints. Remote hosts remain unchanged until a deployment is explicitly requested.

Material detail pages now include the synchronized CIF through a local Crystal Toolkit WebGL viewer. Start the catalogue server on `8766` and `fuyao/structure_viewer.py` on `8767` with the scientific Python environment described in [DATA_BACKEND.md](DATA_BACKEND.md).

The completion-alignment rules are documented in [COMPLETION_BASELINE.md](COMPLETION_BASELINE.md), and the later comparison rubric is in [COMPARISON_FRAMEWORK.md](COMPARISON_FRAMEWORK.md).
