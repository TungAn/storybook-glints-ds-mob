# Color Tokens — Icon

All icon color styles from Aries App - UI Kit 2.0. Referenced in Figma as `Icon/*`.

> Hex values fetched from Figma file `r20p8eotJkuTxjmSXiYp0n`, node `12975:575`. These are the canonical values — never substitute another hex.

> ⚠️ Icon colors are a **separate namespace** from `Text/*`. Do not reuse text tokens for icons — they have different contrast targets and slightly different hues.

## Tokens

| Token | Hex | Semantic | Usage |
|---|---|---|---|
| `Icon/normal` | `#808080` | Default | Default icon color (matches `Text/supplementary`) |
| `Icon/onDark` | `#FFFFFF` | On dark | Icon on dark surfaces (`Background/dark`, filled brand) |
| `Icon/disabled` | `#DDDDDD` | Disabled | Icon in disabled state |
| `Icon/brandingYellow` | `#FFCB34` | Brand — yellow | Glints yellow brand accent (logos, highlight icons) |
| `Icon/updated` | `#008464` | Info | "New", "Updated" indicators |
| `Icon/success` | `#93BD49` | Success | Confirmation, applied/hired states |
| `Icon/danger` | `#D42327` | Error | Error/warning indicators |
| `Icon/cautious` | `#F5A623` | Warning | Cautionary indicators |
| `Icon/discount` | `#FFD96A` | Discount | Discount/promo indicators (yellow) |
| `Icon/enticing` | `#EC7200` | Promotional | VIP/premium indicators (orange) |

## Background Pairing

| Icon Token | Pairs With |
|---|---|
| `Icon/normal` | `Background/normal`, `Background/supplementary` |
| `Icon/onDark` | `Background/dark`, `Background/action01`, `Background/primary_bright` |
| `Icon/disabled` | Any (with disabled affordance) |
| `Icon/brandingYellow` | `Background/normal`, `Background/dark` |
| `Icon/updated` | `Background/updated_muted`, `Background/normal` |
| `Icon/success` | `Background/success_muted`, `Background/normal` |
| `Icon/danger` | `Background/danger_muted`, `Background/normal` |
| `Icon/cautious` | `Background/normal` |
| `Icon/discount` | `Background/dark` (high contrast) |
| `Icon/enticing` | `Background/enticing_muted`, `Background/normal` |

## Rules

- Icon color is set by **the `Icon/*` token, not the `Text/*` token** of the surrounding text
- For interactive icons (e.g. an icon inside a Tab or Button), the icon color follows the component's active/disabled state — refer to the component's variants, not the raw token
- Custom Glints icons (`glints-logo-fill`, `vip-crown`, `glints-vip`) typically use `Icon/brandingYellow` or `Icon/enticing` — verify per component

## Related

- [icons.md](../icons.md) — icon component catalog (names, sizes, line/fill variants)
- [Tokens → Text](./text.md) — text colors (different namespace from icon colors)
- [Tokens → Background](./background.md) — background colors that icons sit on
