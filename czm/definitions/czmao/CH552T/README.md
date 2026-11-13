# CH552T series / CH552T 系列

VIA definition sources for CZMao keyboards based on the WCH CH552T (TSSOP20).
CZMao 基于 WCH CH552T（TSSOP20）的键盘 VIA 定义源。

`micahyy.github.io` 的 GitHub Actions 会递归扫描 `czm/` 下所有 `.json`，按
`vpid = vendorId * 65536 + productId` 生成 `definitions/v3/<vpid>.json` 与
`dist/definitions/v3/<vpid>.json`；子目录层级不影响产物文件名。

GitHub Actions in `micahyy.github.io` recursively scans every `.json` under `czm/`, building
`definitions/v3/<vpid>.json` and `dist/definitions/v3/<vpid>.json` from
`vpid = vendorId * 65536 + productId`; the subdirectory level does not affect the output filename.

## Boards / 板卡

Each board keeps its definition in its own subfolder.
每块板卡的定义放在各自的子目录中。

| Board | VID | PID | vpid | VIA definition |
|---|---|---|---|---|
| DS22Lite | `0x4A17` | `0x4A50` | `1243040336` | `czm/definitions/czmao/CH552T/DS22Lite/DS22Lite_via.json` |

Load the JSON in the VIA Design tab to use the board.
在 VIA 的 Design 页导入对应 JSON 即可使用。

## Note / 说明

The firmware and the VIA definition should use the same VID/PID pair.
固件与 VIA 定义需使用同一对 VID/PID。
