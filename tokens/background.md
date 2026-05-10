# Color Tokens — Background

All background color styles from Aries App - UI Kit 2.0. Referenced in Figma as `Background/*`.

> Hex values fetched from Figma file `r20p8eotJkuTxjmSXiYp0n`, node `12975:575` — these are the canonical values. Never substitute another hex.

## Surface

| Token | Hex | Usage |
|---|---|---|
| `Background/normal` | `#FFFFFF` | Default screen and card background |
| `Background/dark` | `#2D2D2D` | Dark surface — dark headers, dark mode sections |
| `Background/supplementary` | `#F7F9FA` | Supplementary/secondary surface (feed surface, list dividers) |
| `Background/supplementary2` | `#F3F3F3` | Alternate supplementary surface (slightly stronger contrast than `supplementary`) |

## Action / Brand

| Token | Hex | Usage |
|---|---|---|
| `Background/action01` | `#1A73E8` | Primary action fill — Glints brand blue |
| `Background/action01_active` | `#58BFFF` | Pressed/active state of `action01` |
| `Background/action02` | `#FFFFFF` | Secondary action fill (outline-on-white style) |
| `Background/action02_active` | `#E6F4FA` | Pressed/active state of `action02` |
| `Background/action_disabled` | `#F3F3F3` | Disabled state of action button |
| `Background/primary_bright` | `#1A73E8` | Primary brand emphasis — prominent (same hue as action01) |
| `Background/primary_muted` | `#E6F4FA` | Primary brand emphasis — subtle tint |
| `Background/outstanding` | `#C3E8FF` | Premium / VIP / featured highlight background |

## Semantic / Status

| Token | Hex | Semantic | Usage |
|---|---|---|---|
| `Background/danger_bright` | `#D42327` | Error — prominent | Validation highlights, destructive warnings |
| `Background/danger_muted` | `#FFEEEE` | Error — subtle | Soft error banners, inline error hints |
| `Background/success_bright` | `#93BD49` | Success — prominent | Confirmation, applied/hired states |
| `Background/success_muted` | `#DEEBC8` | Success — subtle | Soft success banners |
| `Background/updated_bright` | `#008464` | Info — prominent | "New" / "Updated" badges (deep green) |
| `Background/updated_muted` | `#C3E4DC` | Info — subtle | Soft info banners |
| `Background/cautious` | `#F5A623` | Warning | Incomplete profile, expiring jobs, caution notices |
| `Background/enticing_bright` | `#EC7200` | Promotional — prominent | VIP / premium feature backgrounds (orange) |
| `Background/enticing_muted` | `#FCE9C8` | Promotional — subtle | Soft promotional surfaces |
| `Background/discount_bright` | `#FFD96A` | Discount — prominent | Salary discount / promotional pricing (yellow) |
| `Background/discount_muted` | `#FFEEBE` | Discount — subtle | Soft discount surfaces |

## Input

| Token | Hex | Usage |
|---|---|---|
| `Background/searchBox` | `#E6F4FA` | Search bar background |
| `Background/inputBox_active` | `#C3E8FF` | Text input background when focused (pairs with `Border/inputBox_active`) |
| `Background/inputBox_disabled` | `#F3F3F3` | Text input background when disabled |
| `Background/inputSelect_active` | `#58BFFF` | Dropdown/select background when active |
| `Background/inputSelect_selected01` | `#E6F4FA` | Dropdown/select background — selected variant 1 (light) |
| `Background/inputSelect_selected02` | `#1A73E8` | Dropdown/select background — selected variant 2 (filled brand) |

## Overlay

| Token | Hex | Usage |
|---|---|---|
| `Overlay/normal` | `#666666` | Default overlay/scrim — modal/sheet backdrop |
| `Overlay/active` | `#E6F4FA` | Active overlay tint — hover/press wash on light surfaces |

## Rules

- Never hardcode a background color — always use a `Background/*` token
- Use `_bright` for prominent/high-contrast backgrounds; use `_muted` for subtle/secondary backgrounds
- `action01`/`action02` are for interactive elements only (buttons, active indicators)
- `primary_bright` and `action01` are the same hex (`#1A73E8`) but used in different roles — pick by *intent*, not appearance

## Related

- [Tokens → Text](./text.md) — pair with matching text tokens
- [Tokens → Border](./border.md) — input borders pair with input backgrounds
- [Tokens → Icon](./icon.md) — icon colors
