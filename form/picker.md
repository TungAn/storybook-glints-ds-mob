# Picker

Scroll-wheel or list-based selector for date, time, and structured value input.

> Specs verified against Figma (Aries UI Kit 2.0). Date Picker inspected; DoB / Salary Pickers share the same shell + spin pattern.

## Components

| Component | Type | Description |
|---|---|---|
| `Picker/Spin` | component_set | Base spin-wheel picker — the core scroll-wheel interaction |
| `Spin` | component | Single-column spin wheel (used inside Date / DoB / Salary pickers) |
| `Date Picker` | component | General date selection picker (Month + Year columns) |
| `DoB Picker` | component | Date of birth picker (day / month / year wheels) |
| `Salary Picker` | component | Salary range picker (min / max value wheels) |
| `Relocate` | component | Picker variant for relocation/location preferences |

## Date Picker — verified specs

### Default specs

| | Value |
|---|---|
| Width | `280px` |
| Height | `408px` (auto-hugs based on content) |
| Corner radius | **`8px`** |
| Background | `Background/normal` (#FFFFFF) |
| Shadow | Elevated-2: `0 1px 10px 0 #9999994D` |
| Padding | `0` (sub-elements have own padding) |
| Gap | `0` |

### Sub-element structure

| Sub-element | Specs |
|---|---|
| **Header** (`Date` title bar) | h:`56px`, padding `16px` h, gap `8px`. Title typography: `Android/titleMedium` (Roboto SemiBold 16/1.5, 0.15px), `Text/outstanding` (#2D2D2D) |
| **Body** (Spin columns) | padding `16px`, gap `8px` between columns |
| **Spin** (single column) | gap `8px`, label typography `Android/bodyMedium` (Roboto SemiBold 14/1.4, `Text/normal`), item typography `Android/bodyLarge` (Roboto Regular 14/1.5, `Text/supplementary`) |
| **Selection highlight** | item between two `Border/action` (#1A73E8) horizontal dividers, label color switches to `Text/active` (#1A73E8) with SemiBold weight |
| **Non-selection dividers** | `Border/normal` (#DDDDDD) horizontal lines |
| **Footer** | padding `16px` h, top `8px`, bottom `12px`. Two stacked `CTA Button` instances: Primary (filled action01) + Secondary (text-only `Text/active`) |

### Color tokens

| Element | Token |
|---|---|
| Background | `Background/normal` (#FFFFFF) |
| Title text | `Text/outstanding` (#2D2D2D) |
| Spin column label | `Text/normal` (#666666) |
| Spin item (unselected) | `Text/supplementary` (#808080) |
| Spin item (selected) | `Text/active` (#1A73E8) |
| Selection divider | `Border/action` (#1A73E8) |
| Non-selection divider | `Border/normal` (#DDDDDD) |
| Primary CTA bg | `Background/primary_bright` (#1A73E8) |
| Primary CTA text | `Text/normal_onDark` (#FFFFFF) |
| Secondary CTA text | `Text/active` (#1A73E8) |

## Usage Rules

- Use `Picker` for: date of birth, graduation year, start/end date of experience, expected salary range
- Picker typically opens inside a [Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — never standalone in a screen flow
- Do not use a plain text field for date or year input — always use `Picker`
- Do not use `Picker` for selecting from a long unstructured list — use [Dropdown](./dropdown.md) instead
- Footer always has **two CTA Buttons**: Primary (Confirm) + Secondary (Cancel) — both use the published `CTA Button` component (`8px` radius, ALL CAPS label)
- Don't override the `8px` corner radius or the elevation shadow

## When to Use vs. Others

| Input type | Use |
|---|---|
| Date / year / month | Picker |
| Long option list (location, industry) | [Dropdown](./dropdown.md) |
| Short option list (≤ 4 options) | [Radio](./radio.md) |
| Salary numeric value | [Keyboard](./keyboard.md) |

## Related

- [Form → Dropdown](./dropdown.md) — for list-based selection
- [Form → Keyboard](./keyboard.md) — for numeric value input
- [Form → Button](./button.md) — Picker footer uses `CTA Button` Primary + Secondary
- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — picker opens inside a bottom sheet
