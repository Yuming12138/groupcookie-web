# fuyao 材料数据包与本地 API

本轮先把 fuyao 的材料数据层与 cmsg 当前公开数据包对齐，再让首页结果区使用同一份记录。同步源是 cmsg 的 `/var/www/steel-yield-explorer/data`，目标是 fuyao 的 `data/`。

当前校验结果：

- `mp300_materials.json`：2,144 条记录，fuyao 与 cmsg 的 SHA-256 都是 `c63517bf094cd535974bd07f7c88de401a1d90ee22b4475169bf19e2dd5a8a44`。
- 结构文件：2,144 个 CIF，每条材料记录都有同名 `data/structures/<id>.cif`。
- 合成报告：2,144 条 `sourcePath` 全部可读。
- 批次清单：已同步 6 份 `unsynth_*_sync_manifest_*.json`。
- `matbench_steels.json.gz` 与 `steels-data.js` 没有纳入材料库；它们是 cmsg 目录中的旧钢材基准页面数据，当前材料检索脚本没有加载它们。

材料记录中的 `eHull` 原始值单位为 `eV/atom`；首页、性质检索和材料详情页统一按 `eV/atom` 展示。历史 API 参数 `ehull_max_mev` 仍保留兼容性，前端页面不再使用该参数。

## 重复同步

在仓库根目录执行：

```powershell
python fuyao/tools/sync_cmsg_data.py
```

脚本只复制材料目录、CIF、合成报告对应的批次清单，并生成 `fuyao/data/catalog_manifest.json`。它不会删除目标目录中已有的文件。同步后可只做校验：

```powershell
python fuyao/tools/sync_cmsg_data.py --check
```

## 本地 API

`fuyao/catalog_server.py` 使用 Python 标准库同时提供静态页面和只读材料 API：

```powershell
python fuyao/catalog_server.py --host 127.0.0.1 --port 8766
```

主要接口：

- `GET /api/health`：记录、CIF、报告覆盖率和目录哈希。
- `GET /api/catalog/meta`：元素计数、性质标签计数、平均评分等元数据。
- `GET /api/elements`：元素出现次数。
- `GET /api/materials?elements=La,Mn&limit=12&sort=score-desc`：按元素、关键词、性质、评分和 E_hull 筛选；`include=full` 返回完整记录。
- `GET /api/materials/<id>`：单条材料记录，同时返回 `structureUrl` 和 `reportUrl`。

### 记录编号与 MP ID

源数据统一使用 `id` 作为记录主键。记录本身不额外伪造一个 MP 编号：

- `id` 为 `mp-数字` 的 130 条记录会在 API 中同时返回 `recordId`、`mpId` 和 `recordIdType: "materials-project"`。
- WBM 扩展记录会保留自己的 `id`，并标记为 `recordIdType: "wbm"`；其他批次标记为 `catalog`。
- `mpId` 对非 MP 记录为 `null`，因此可以明确区分“有 MP ID”和“只有本地目录 ID”。

例如 `/api/materials/mp-675623` 返回的记录中包含：

```json
{"id":"mp-675623","recordId":"mp-675623","mpId":"mp-675623","recordIdType":"materials-project"}
```

`/api/catalog/meta` 和 `/api/health` 还会报告 `mpRecords` 与 `recordIdTypes`，便于同步后核对来源覆盖。

服务会按材料 JSON 的修改时间自动重新载入索引，因此更新数据后不必改前端代码。首页优先请求 API，API 不可用时回退到静态 JSON，便于在暂时只有静态服务器的部署环境中预览。

本地服务的入口是 [http://localhost:8766/homepage/](http://localhost:8766/homepage/)，API 健康检查是 [http://localhost:8766/api/health](http://localhost:8766/api/health)。本轮没有把文件或服务部署回 fuyao、cmsg 远端主机。

## Crystal Toolkit 结构预览

材料详情页会把对应记录的真实 CIF 交给 `pymatgen`，再由 Crystal Toolkit 的 `StructureMoleculeComponent` 渲染交互式 WebGL 预览。查看器只接受记录编号，并且只会读取 `fuyao/data/structures/<记录编号>.cif`，不会按化学式猜测结构。

本地预览需要同时启动目录服务和结构查看服务。目录服务仍使用 8766 端口；Crystal Toolkit 查看器使用 8767 端口：

```powershell
python fuyao/catalog_server.py --host 127.0.0.1 --port 8766
& 'D:\1.Program\1.Anaconda\envs\mattersim\python.exe' fuyao/structure_viewer.py --host 127.0.0.1 --port 8767
```

启动后可以直接打开材料详情，例如：

`http://localhost:8766/material-detail/index.html?id=209_2BiIO-1_Bi2O2I2`

详情页会先检查同名 CIF 是否存在，再将记录编号传给 `http://localhost:8767/?record_id=...`。结构服务不可用时，详情页会显示简洁的错误状态，其他材料字段仍然可读。当前同步的 2,144 个 CIF 已逐个通过 `pymatgen` 解析检查。
