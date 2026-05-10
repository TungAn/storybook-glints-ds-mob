# Checkbox

Multi-selection form control for choosing one or more options.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Checkbox` | component_set | Standard checkbox control (square, multi-select) |
| `Checkbox-circle` | component_set | Circular checkbox variant (`checkbox-circle` icon-based) |
| `Bottom Sheet/Checkbox` | component | Checkbox row pre-built for use inside a Bottom Sheet |
| `Selection Item` | component_set | Selectable list row with checkbox (used in filter/selection lists) |
| `Bordered Item` | component_set | Selectable item with visible border (card-style checkbox row) |
| `Radio CheckList` | component_set | Grouped list of items that can be used for single or multi-select |

## Checkbox — variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **States** | `Normal`, `Pressed`, `Disabled` (likely) | Normal |
| **Description** | `true` / `false` | true |
| **Checked** | `true` / `false` | false |

### Default specs (composite: icon + label/description)

| | Value |
|---|---|
| Composite width | `264px` (default — fluid in screens) |
| Composite gap (icon ↔ text) | `8px` (`space-small-8`) |
| Composite padding | `0` |
| Label typography | `Android/bodyLarge` (Roboto Regular 14/1.5) |
| Description typography | `Android/titleSmall` (Roboto Regular 12/1.5) |
| Text gap (label ↔ description) | `4px` (`space-small-4`) |

### Checkbox icon (the square indicator)

| | Value |
|---|---|
| Size | `18 × 18px` (within a 22×22 hit area) |
| Border radius | **`2px`** |
| Unchecked border | `1.5px solid Icon/normal` (#808080) |
| Checked fill | `Background/inputSelect_selected02` (#1A73E8) |
| Check mark | `Icon/onDark` (#FFFFFF) |

### Color tokens (composite)

| Element | Token | Hex |
|---|---|---|
| Unchecked border | `Icon/normal` | `#808080` |
| Checked fill | `Background/inputSelect_selected02` | `#1A73E8` |
| Check mark | `Icon/onDark` | `#FFFFFF` |
| Label | `Text/outstanding` | `#2D2D2D` |
| Description | `Text/normal` | `#666666` |

## Usage Rules

- Use Checkbox when the user can select **multiple** options from a list
- Use [Radio](./radio.md) when the user can select only **one** option
- Use [Switch](../components/switch.md) when the selection takes immediate effect (no submit needed)
- Checkboxes always require an explicit confirm action (a submit button) before the selection takes effect
- Never use a checkbox for a binary on/off setting — use `Switches` instead
- The checkbox icon has a **fixed `2px` corner radius** — never override
- Use `Checkbox-circle` only when explicitly required by the design — default is the square `Checkbox`

## States

- Unchecked (default)
- Checked
- Indeterminate (partial selection of a group)
- Disabled

## Related

- [Form → Radio](./radio.md) — single-selection alternative
- [Components → Switch](../components/switch.md) — immediate-effect binary toggle
- [Components → Filter](../components/filter.md) — checkboxes appear inside Full Page Filters
- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — filter sheets containing checkboxes
