# Screen Size — Mobile Baseline

Source: Figma file `r20p8eotJkuTxjmSXiYp0n`, node `12980:3235` ("Screen Size").

## Baseline frame

| | Value |
|---|---|
| **Width** | `360px` |
| **Height** | `640px` |
| **Status bar** | `24px` (top) |
| **Bottom nav (Android system)** | `48px` (bottom) |

> Quote from the Figma frame: *"Our Mobile Design will use a baseline height and width of 360px by 640px to represent the smallest screen size."*

## Implications

- **Always design at 360×640** as the smallest target. Layouts that work here will scale up.
- Plan content for the **safe area** between status bar and Android navbar: `~568px` of vertical space.
- HTML previews should use `width: 360px` for the phone shell, not 390px or 393px (which are iPhone widths used in some other previews).
- Larger devices (390 / 412 / 430+) inherit the same layout; do not design separate phones unless required by a PRD.

## Common phone sizes for reference

| Device | Width | Height | Notes |
|---|---|---|---|
| **Aries baseline** | **360px** | **640px** | Smallest target — design here |
| Pixel 4a | 393px | 851px | Common Android |
| iPhone 13/14 | 390px | 844px | iOS 14pt = 1px in CSS |
| iPhone 14 Pro Max | 430px | 932px | Larger iOS |

## Rules

- Never design below 360px width — content will not be testable on the supported floor
- For HTML previews: `width: 360px` for the phone shell
- Touch targets must be **≥ 44×44px** (iOS) / **≥ 48×48dp** (Android) regardless of phone size

## Related

- [figma-integration.md](./figma-integration.md) — MCP workflow
- [design-generation.md](./design-generation.md) — preview generation rules
