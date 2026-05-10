# Color Tokens — Border

All border color styles from Aries App - UI Kit 2.0. Referenced in Figma as `Border/*`.

> Hex values fetched from Figma file `r20p8eotJkuTxjmSXiYp0n`, node `12975:575`. These are the canonical values — never substitute another hex.

## Tokens

### Input field borders

| Token | Hex | State | Usage |
|---|---|---|---|
| `Border/inputBox` | `#B3B3B3` | Default / resting | Text input field at rest |
| `Border/inputBox_active` | `#58BFFF` | Focused | Text input when focused |
| `Border/inputBox_disabled` | `#DDDDDD` | Disabled | Text input in disabled state |
| `Border/danger` | `#D42327` | Error | Text input in error state — dedicated token, not derived from `Text/danger` |
| `Border/inputSelect` | `#666666` | Select — default | Dropdown/select field at rest |
| `Border/inputSelect_selected` | `#1A73E8` | Select — selected | Dropdown after a value is chosen |

### General / interactive borders

| Token | Hex | Usage |
|---|---|---|
| `Border/normal` | `#DDDDDD` | Default card or divider border |
| `Border/active` | `#1A73E8` | Active/selected element border (Glints brand blue) |
| `Border/action` | `#1A73E8` | Action/CTA element border (e.g. secondary button outline) |
| `Border/action_active` | `#58BFFF` | Pressed state of action border |
| `Border/action_disabled` | `#DDDDDD` | Disabled state of action border |
| `Border/outstanding` | `#B3B3B3` | Premium/featured element border (neutral, not branded) |

## State Mapping

```
Text input:
  resting   →  Border/inputBox             (#B3B3B3)
  focused   →  Border/inputBox_active      (#58BFFF)  +  Background/inputBox_active  (#C3E8FF)
  disabled  →  Border/inputBox_disabled    (#DDDDDD)
  error     →  Border/danger               (#D42327)  — dedicated token, not derived from Text/danger

Dropdown/Select:
  resting   →  Border/inputSelect          (#666666)
  selected  →  Border/inputSelect_selected (#1A73E8)
```

## Rules

- Every input must implement all relevant states — never use a single border for all states
- `Border/inputSelect_selected` has a dark context — verify text contrast when using it
- For error state, use the dedicated `Border/danger` token — do not derive from `Text/danger`
- `Border/outstanding` is a neutral gray (`#B3B3B3`), not a branded accent — pair with `Background/outstanding` for the featured-card look

## Related

- [Tokens → Background](./background.md) — `Background/inputBox_active` pairs with `Border/inputBox_active`
- [Form → Text Field](../form/text-field.md) — applies these tokens
- [Form → Dropdown](../form/dropdown.md) — applies select tokens
