# Dropdown

Select/dropdown input for choosing a single value from a predefined list.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Input Dropdown` | component_set | Form field dropdown — single option selection inside a form (composite: Label + Box + Helper Text) |
| `Filter Dropdown` | component_set | Compact dropdown used inside filter bars and Quick Filters |

## Input Dropdown — variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **State** | `Normal`, `Pressed`, `Selected`, `Disabled`, `Error` (likely) | Normal |
| **Populated** | `false` (placeholder), `true` (value selected) | false |
| **Icon** | `true` / `false` | true |
| **Label** | `true` / `false` | true |
| **Helper Text** | `true` / `false` | true |

### Default specs (composite: label + box + helper)

| | Value |
|---|---|
| Composite width | `360px` (default — fluid in screens) |
| Composite stack gap | `4px` (`space-small-4`) |
| Composite padding | `0` |
| Label typography | `Android/labelSmall` (Roboto Medium 10/1.4, 0.2px tracking) |
| Helper text typography | `Android/titleSmall` (Roboto Regular 12/1.5) |
| Label & Helper color | `Text/normal` (#666666) |

### Dropdown Field box (the middle element)

| | Value |
|---|---|
| Height | `48px` |
| Padding | `12px` horizontal, `12px` vertical |
| Inner gap (icon ↔ space ↔ placeholder ↔ space ↔ arrow) | `0` (sized via Space sub-elements) |
| Corner radius | **`4px`** |
| Background | `Background/normal` (#FFFFFF) |
| Border | `1px solid Border/inputSelect` (#666666) at default |
| Leading icon size | `18 × 18px` (`Icon/normal` #808080) |
| Trailing arrow size | `18 × 18px` (`arrow-down-s`, `Icon/normal`) |
| Placeholder typography | `Android/bodyLarge` (Roboto Regular 14/1.5) |
| Placeholder color | `Text/supplementary` (#808080) |
| Selected value color | `Text/normal` (#666666) |

## Border / Background Tokens by State

| State | Border | Background |
|---|---|---|
| Default / resting | `Border/inputSelect` (#666666) | `Background/normal` (#FFFFFF) |
| Selected (value chosen) | `Border/inputSelect_selected` (#1A73E8) | `Background/normal` |
| Active (open) | `Border/inputBox_active` (#58BFFF) | `Background/inputSelect_active` (#58BFFF) — verify |
| Disabled | `Border/inputBox_disabled` (#DDDDDD) | `Background/inputBox_disabled` (#F3F3F3) |
| Error | `Border/danger` (#D42327) | `Background/danger_muted` (#FFEEEE) |

## Usage Rules

- Use `Input Dropdown` when the user must pick from a predefined list of options (location, industry, salary range, job type)
- Do not use a dropdown when the list has fewer than 3 options — use [Radio](./radio.md) instead
- Do not use a dropdown when the user can select multiple values — use [Checkbox](./checkbox.md) instead
- The dropdown opens as a bottom sheet or inline picker — check Figma for the specific interaction pattern
- Always apply `Border/inputSelect_selected` once a value is selected — never keep the default border after selection
- The Dropdown Field box has a fixed `4px` corner radius — never override
- Use `arrow-down-s` icon (Remix `arrow-down-s`) as the trailing affordance — published default

## Related

- [Form → Radio](./radio.md) — better for short option lists (< 3 options)
- [Form → Picker](./picker.md) — alternative for date/time/numeric value selection
- [Components → Filter](../components/filter.md) — dropdowns are used inside Full Page Filters
- [Tokens → Border](../tokens/border.md) — input border tokens
