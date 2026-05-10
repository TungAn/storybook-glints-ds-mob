# Color Tokens — Text

All text color styles from Aries App - UI Kit 2.0. Referenced in Figma as `Text/*`.

> Hex values fetched from Figma file `r20p8eotJkuTxjmSXiYp0n`, node `12975:575`. These are the canonical values — never substitute another hex.

## Tokens

| Token | Hex | Semantic | Usage |
|---|---|---|---|
| `Text/normal` | `#666666` | Default | Body copy, labels, descriptions |
| `Text/normal_onDark` | `#FFFFFF` | Default on dark | Text overlaid on dark backgrounds (e.g. dark headers) |
| `Text/supplementary` | `#808080` | Supplementary | Secondary/meta text (timestamps, subtitles, hints) |
| `Text/active` | `#1A73E8` | Active / brand | Selected states, active tab labels, interactive links, **white text on `Background/action01`** |
| `Text/outstanding` | `#2D2D2D` | Outstanding | High-contrast headline text on outstanding/featured surfaces (dark neutral, not orange) |
| `Text/danger` | `#D42327` | Error | Validation errors, destructive warnings, required indicators |
| `Text/success` | `#76973A` | Success | Confirmation messages, positive status |
| `Text/updated` | `#008464` | Info | "New", "Updated", informational labels |
| `Text/cautious` | `#F5A623` | Warning | Expiry notices, incomplete profile prompts |
| `Text/discount` | `#FFD96A` | Discount | Salary discounts, promotional pricing (**yellow** — high contrast on dark only) |
| `Text/enticing` | `#EC7200` | Promotional | VIP labels, premium feature highlights (orange) |

> ⚠️ **Removed/missing tokens:** `Text/brandingBlue` and `Text/brandingYellow` are not present in the current Figma variables. Use `Text/active` (`#1A73E8`) where Glints blue brand is needed, and `Icon/brandingYellow` (`#FFCB34`, see [icon tokens](./icon.md)) for yellow brand emphasis on icon surfaces. Do not use the deprecated `Text/branding*` names.

> ⚠️ **`Text/outstanding` is dark gray, not orange.** This is for high-contrast text on a featured/outstanding card surface. For orange premium accents, use `Text/enticing` (`#EC7200`).

## Background Pairing

| Text Token | Pairs With | Notes |
|---|---|---|
| `Text/normal` | `Background/normal`, `Background/supplementary` | |
| `Text/normal_onDark` | `Background/dark`, `Background/action01`, `Background/primary_bright` | White text on filled brand or dark surfaces |
| `Text/active` | `Background/action02`, `Background/primary_muted` | Brand text on light surfaces |
| `Text/danger` | `Background/danger_muted`, `Background/normal` | |
| `Text/success` | `Background/success_muted`, `Background/normal` | |
| `Text/updated` | `Background/updated_muted`, `Background/normal` | |
| `Text/cautious` | `Background/normal` | Cautious is inline-only on light surfaces |
| `Text/discount` | `Background/dark` (high contrast) — never on `Background/normal` | Yellow on white fails contrast |
| `Text/enticing` | `Background/enticing_muted`, `Background/normal` | |
| `Text/outstanding` | `Background/outstanding` | Dark text on light blue-tinted card |

## Rules

- `Text/normal` is the base — use it for all default body text
- `Text/discount` (yellow) needs a dark background for accessible contrast — never put it on `Background/normal`
- Never hardcode a hex value for text color
- Button text on `Background/action01` (filled blue) is `Text/normal_onDark` (`#FFFFFF`), not `Text/active`
- For "premium / VIP / featured" use cases, the right token is `Text/enticing` (orange `#EC7200`), **not** `Text/outstanding` (which is dark gray for headline text on outstanding cards)

## Related

- [Tokens → Background](./background.md) — matching background tokens
- [Tokens → Icon](./icon.md) — icon colors (separate from text)
