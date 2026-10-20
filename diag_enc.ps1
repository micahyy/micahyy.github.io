$ErrorActionPreference = "Stop"
$base = "E:/sync/github/via private docs/micahyy.github.io"
$targets = @(
  @{n="dist-v3-1242899552"; p="$base/dist/definitions/v3/1242899552.json"},
  @{n="dist-v3-1243040352"; p="$base/dist/definitions/v3/1243040352.json"},
  @{n="dist-v2-1242899552"; p="$base/dist/definitions/v2/1242899552.json"},
  @{n="source-rush60";      p="$base/czm/definitions/czmao/Rush/rush60.json"}
)
foreach ($t in $targets) {
  Write-Host "=== $($t.n) ==="
  if (-not (Test-Path -LiteralPath $t.p)) { Write-Host "  MISSING: $($t.p)"; continue }
  $b = [System.IO.File]::ReadAllBytes($t.p)
  Write-Host "  bytes=$($b.Length)"
  if ($b.Length -ge 3 -and $b[0] -eq 0xEF -and $b[1] -eq 0xBB -and $b[2] -eq 0xBF) { Write-Host "  BOM: UTF-8 BOM" } else { Write-Host "  BOM: none" }
  $u = [System.Text.Encoding]::UTF8.GetString($b)
  $g = [System.Text.Encoding]::GetEncoding(936).GetString($b)
  Write-Host ("  [UTF8 decode] has 恢(U+6062)=" + $u.Contains([string][char]0x6062) + "  has FFFD=" + $u.Contains([string][char]0xFFFD) + "  has mojibake-ae(U+00E6)=" + $u.Contains([string][char]0x00E6))
  Write-Host ("  [GBK  decode] has 恢(U+6062)=" + $g.Contains([string][char]0x6062))
  $i = $u.IndexOf("Bootloader")
  if ($i -ge 0) {
    $st = [Math]::Max(0, $i - 24)
    $hex = ($b[$st..($i + 9)] | ForEach-Object { $_.ToString("X2") }) -join " "
    Write-Host "  hex before Bootloader: $hex"
  }
}
