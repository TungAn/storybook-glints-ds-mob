# Radio

Single-selection form control for choosing one option from a list.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Radio Button` | component_set | Standalone radio button control |
| `Radio CheckList` | component_set | Grouped list of radio options (single-select group) |

## Radio Button — variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Selected** | `True` / `False` | True |
| **States** | `Normal`, `Pressed`, `Disabled` (likely) | Normal |
| **Helper Text** | `true` / `false` | true |

### Default specs (composite: radio icon + text/helper)

| | Value |
|---|---|
| Composite width | `270px` (default — fluid in screens) |
| Composite gap (icon ↔ text) | `8px` (`space-small-8`) |
| Composite padding | `0` |
| Radio icon size | `24 × 24px` |
| Label typography | `Android/bodyLarge` (Roboto Regular 14/1.5) |
| Helper text typography | `Android/titleSmall` (Roboto Regular 12/1.5) |
| Text inner gap | `0` |

### Color tokens

| Element | Token | Hex |
|---|---|---|
| Selected ring | `Border/active` | `#1A73E8` |
| Selected dot | `Background/inputSelect_selected02` | `#1A73E8` |
| Label | `Text/outstanding` | `#2D2D2D` |
| Helper text | `Text/normal` | `#666666` |

## Usage Rules

- Use `Radio` when the user can select **one** option from a list
- Use `Radio CheckList` for a grouped set of radio options (e.g. work arrangement: Remote / Hybrid / On-site)
- Use [Checkbox](./checkbox.md) when the user can select **multiple** options
- Use [Dropdown](./dropdown.md) when the option list is long (5+ items)
- Radio selections always require an explicit confirm action before taking effect — unlike [Switch](../components/switch.md)
- Don't override the radio icon size or color — published variants are the answer

## States

- Unselected (default)
- Selected
- Disabled

## Related

- [Form → Checkbox](./checkbox.md) — multi-selection alternative
- [Form → Dropdown](./dropdown.md) — alternative for long option lists
- [Components → Switch](../components/switch.md) — immediate-effect binary alternative
- [Components → Filter](../components/filter.md) — radio groups appear inside Full Page Filters
