#!/usr/bin/env python3
"""Synchronize the material data package used by the fuyao preview.

The public cmsg site keeps the material catalog in a JSON file and stores the
matching CIF/report assets beside it.  This script copies the shared catalog
package without importing unrelated legacy datasets (for example the steel
benchmark files), then writes a small manifest that the local server and
reviewers can use to verify the package.

Run from the repository root with::

    python fuyao/tools/sync_cmsg_data.py

Use ``--check`` after a sync (or in CI) to validate record, report, and CIF
coverage without changing any files.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import shutil
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Iterable


REQUIRED_FIELDS = ("id", "formula", "elements", "spacegroup", "eHull", "score")
MANIFEST_GLOB = "unsynth_*_sync_manifest_*.json"


def sha256_file(path: Path, chunk_size: int = 1024 * 1024) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(chunk_size), b""):
            digest.update(chunk)
    return digest.hexdigest()


def json_hash(path: Path) -> str:
    """Hash the bytes as served, so the value verifies the deployed artifact."""

    return sha256_file(path)


def load_catalog(path: Path) -> list[dict[str, Any]]:
    try:
        payload = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, UnicodeDecodeError, json.JSONDecodeError) as exc:
        raise RuntimeError(f"无法读取材料目录 {path}: {exc}") from exc
    if not isinstance(payload, list):
        raise RuntimeError(f"材料目录必须是 JSON 数组: {path}")
    rows: list[dict[str, Any]] = []
    for index, item in enumerate(payload):
        if not isinstance(item, dict):
            raise RuntimeError(f"材料目录第 {index + 1} 条不是对象")
        rows.append(item)
    return rows


def validate_records(records: Iterable[dict[str, Any]], label: str) -> list[str]:
    errors: list[str] = []
    seen: set[str] = set()
    for index, row in enumerate(records, start=1):
        material_id = str(row.get("id") or "").strip()
        if not material_id:
            errors.append(f"{label} 第 {index} 条缺少 id")
            continue
        if material_id in seen:
            errors.append(f"{label} 存在重复 id: {material_id}")
        seen.add(material_id)
        missing = [field for field in REQUIRED_FIELDS if field not in row]
        if missing:
            errors.append(f"{label} {material_id} 缺少字段: {', '.join(missing)}")
        elements = row.get("elements")
        if not isinstance(elements, list) or not all(isinstance(value, str) for value in elements):
            errors.append(f"{label} {material_id} 的 elements 不是字符串数组")
    return errors


def copy_tree(source: Path, target: Path) -> int:
    if not source.is_dir():
        return 0
    copied = 0
    target.mkdir(parents=True, exist_ok=True)
    for source_file in source.rglob("*"):
        if not source_file.is_file():
            continue
        relative = source_file.relative_to(source)
        target_file = target / relative
        target_file.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_file, target_file)
        copied += 1
    return copied


def copy_matching_files(source: Path, target: Path, pattern: str) -> int:
    target.mkdir(parents=True, exist_ok=True)
    copied = 0
    for source_file in sorted(source.glob(pattern)):
        if not source_file.is_file():
            continue
        target_file = target / source_file.name
        shutil.copy2(source_file, target_file)
        copied += 1
    return copied


def report_paths(records: Iterable[dict[str, Any]]) -> list[str]:
    paths: list[str] = []
    for row in records:
        value = str(row.get("sourcePath") or "").replace("\\", "/").strip()
        if value.startswith("data/"):
            value = value[5:]
        if value:
            paths.append(value)
    return paths


def package_stats(data_root: Path, records: list[dict[str, Any]]) -> dict[str, Any]:
    structure_dir = data_root / "structures"
    structure_files = sorted(structure_dir.glob("*.cif")) if structure_dir.is_dir() else []
    report_files = [data_root / path for path in report_paths(records)]
    missing_structures = [row["id"] for row in records if not (structure_dir / f"{row['id']}.cif").is_file()]
    missing_reports = [path for path in report_files if not path.is_file()]
    return {
        "records": len(records),
        "structures": len(structure_files),
        "reportsReferenced": len(report_files),
        "reportsPresent": len(report_files) - len(missing_reports),
        "missingStructureIds": missing_structures,
        "missingReportPaths": [str(path.relative_to(data_root)).replace("\\", "/") for path in missing_reports],
        "structureBytes": sum(path.stat().st_size for path in structure_files),
        "reportBytes": sum(path.stat().st_size for path in report_files if path.is_file()),
    }


def write_manifest(data_root: Path, source_root: Path, records: list[dict[str, Any]]) -> Path:
    catalog_path = data_root / "mp300_materials.json"
    manifests = []
    for path in sorted(data_root.glob(MANIFEST_GLOB)):
        try:
            payload = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, UnicodeDecodeError, json.JSONDecodeError):
            payload = {"file": path.name, "parseError": True}
        manifests.append({
            "file": path.name,
            "syncedAt": payload.get("syncedAt"),
            "newRecords": payload.get("newRecords"),
            "totalRecords": payload.get("totalRecords"),
            "sourceBatch": payload.get("sourceBatch") or (payload.get("sourceBatchCounts") or {}),
            "sourcePaper": payload.get("sourcePaper") or (payload.get("sourcePaperCounts") or {}),
        })
    payload = {
        "schemaVersion": 1,
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "source": "cmsg/data",
        "sourcePath": "cmsg/data (同步源)",
        "catalog": {
            "file": "mp300_materials.json",
            "sha256": json_hash(catalog_path),
            "records": len(records),
            "requiredFields": list(REQUIRED_FIELDS),
        },
        "assets": package_stats(data_root, records),
        "syncManifests": manifests,
        "excludedLegacyFiles": ["matbench_steels.json.gz", "steels-data.js"],
    }
    destination = data_root / "catalog_manifest.json"
    destination.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return destination


def sync(source_root: Path, target_root: Path, check_only: bool) -> int:
    source_catalog_path = source_root / "mp300_materials.json"
    target_catalog_path = target_root / "mp300_materials.json"
    source_records = load_catalog(source_catalog_path)
    target_records = load_catalog(target_catalog_path) if target_catalog_path.is_file() else []

    errors = validate_records(source_records, "cmsg")
    if target_records:
        errors.extend(validate_records(target_records, "fuyao"))
    if errors:
        for error in errors:
            print(f"ERROR: {error}", file=sys.stderr)
        return 2

    if not check_only:
        target_root.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_catalog_path, target_catalog_path)
        copied_structures = copy_tree(source_root / "structures", target_root / "structures")
        copied_manifests = copy_matching_files(source_root, target_root, MANIFEST_GLOB)
        print(f"同步材料目录: {target_catalog_path}")
        print(f"同步 CIF 结构: {copied_structures} 个")
        print(f"同步批次清单: {copied_manifests} 个")

    stats = package_stats(target_root, source_records)
    if stats["missingStructureIds"] or stats["missingReportPaths"]:
        print("ERROR: 数据包覆盖不完整", file=sys.stderr)
        print(json.dumps(stats, ensure_ascii=False, indent=2), file=sys.stderr)
        return 3

    if not check_only:
        manifest = write_manifest(target_root, source_root, source_records)
        print(f"写入校验清单: {manifest}")
    else:
        print("校验通过")
    print(json.dumps({key: stats[key] for key in ("records", "structures", "reportsReferenced", "reportsPresent", "structureBytes", "reportBytes")}, ensure_ascii=False))
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    here = Path(__file__).resolve()
    parser.add_argument("--source", type=Path, default=here.parents[2] / "cmsg" / "data", help="cmsg data directory")
    parser.add_argument("--target", type=Path, default=here.parents[1] / "data", help="fuyao data directory")
    parser.add_argument("--check", action="store_true", help="只校验，不写入文件")
    args = parser.parse_args()
    return sync(args.source.resolve(), args.target.resolve(), args.check)


if __name__ == "__main__":
    raise SystemExit(main())
