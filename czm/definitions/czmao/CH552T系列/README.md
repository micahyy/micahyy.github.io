# CH552T series / CH552T 系列

CZMao CH552T (TSSOP20) keyboard VIA definitions / CZMao CH552T（TSSOP20）系列键盘的 VIA 定义源。

`micahyy.github.io` 的 GitHub Actions 会递归扫描 `czm/` 下所有 `.json`，按
`vpid = vendorId * 65536 + productId` 生成 `definitions/v3/<vpid>.json` 与
`dist/definitions/v3/<vpid>.json`；子目录层级不影响产物文件名。

GitHub Actions in `micahyy.github.io` recursively scans every `.json` under `czm/`, building
`definitions/v3/<vpid>.json` and `dist/definitions/v3/<vpid>.json` from
`vpid = vendorId * 65536 + productId`; the subdirectory level does not affect the output filename.

## USB ID 分配 / USB ID allocation

| Board | VID | PID | vpid | Firmware | VIA definition |
|---|---|---|---|---|---|
| DS22Lite | `0x4A17` | `0x4A50` | `1243040336` | `firmware/keyboards/DS22Lite/` | `czm/definitions/czmao/CH552T系列/DS22Lite_via.json` |

- VID `0x4A17` is CZMao-owned. PID `0x4A50` was allocated after checking all existing VIA definitions: `0x4A5x` was unused and vpid `1243040336` was absent from `supported_kbs.json` / v3 outputs.
- VID `0x4A17` 为 CZMao 自有；PID `0x4A50` 经全量查重后分配：`0x4A5x` 未被占用，vpid `1243040336` 不在 `supported_kbs.json` / v3 成品中。
- Reserved / 预留：`0x4A51..0x4A5F` for future CH552T boards. Run `node tools/check-dup.js` before assigning a new PID.
- 后续 CH552T 板预留 `0x4A51..0x4A5F`；分配新 PID 前先跑 `node tools/check-dup.js`。
- `0x4A17` already-used PIDs: `0x0004`(EC87), `0x4A18`(DS17 R3), `0x4A19`(DS17 R6), `0x4A44`(EC65), `0x4A60`(Rush60).
- `0x4A17` 下已占用 PID：`0x0004`(EC87)、`0x4A18`(DS17 R3)、`0x4A19`(DS17 R6)、`0x4A44`(EC65)、`0x4A60`(Rush60)。
- Old values `0x5262/0x4443` were borrowed from the upstream framework and are abandoned.
- 旧值 `0x5262/0x4443` 是上游框架临时借用值，已弃用。

Sync requirement / 同步要求：firmware `config.h`, this JSON, `DS22Lite_signalrgb.js`, and `firmware/verify.py` must all carry the same VID/PID pair.
同步要求：固件 `config.h`、本 JSON、`DS22Lite_signalrgb.js`、`firmware/verify.py` 四处保持同一对 VID/PID。
