# Switch

Toggle switch component for binary on/off settings.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Switches` | component_set | Composite row: label + toggle — use this at the screen level |
| `Switches/Switch` | component_set | The standalone toggle control (no label) |
| `Toggle` | component_set | Alternate toggle styling |
| `Bottom Sheet/Toggle` | component | Toggle row pre-built for use inside a Bottom Sheet |

## Switches — variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Label Position** | `Prefix` (label before toggle) / `Suffix` | Prefix |
| **Label** | `true` / `false` | true |
| **State** | (likely `On`, `Off`, `Disabled`) | On |

### Default specs (composite: label + toggle)

| | Value |
|---|---|
| Composite width | `84px` (auto-hugs label) |
| Composite height | `24px` (auto-hugs to toggle height) |
| Composite gap | `8px` (`space-small-8`) |
| Composite padding | `0` |
| Toggle pill width | typically `40–44px` (verify per variant) |
| Toggle pill height | `24px` |
| Toggle corner radius | full pill (toggle thumb is circular) |

## Usage Rules

- Use `Switches` only for settings and preferences — not for form selections or filter options
- `Bottom Sheet/Toggle` is a pre-built row that combines a label + `Switches` for use inside a Bottom Sheet — do not build this manually
- A switch should produce an immediate effect when toggled (no submit button needed)
- Use [Form → Radio](../form/radio.md) or [Form → Checkbox](../form/checkbox.md) instead of a switch when the user needs to confirm a selection before it takes effect

## Related

- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — `Bottom Sheet/Toggle` lives inside bottom sheets
- [Form → Radio](../form/radio.md) — alternative for exclusive selections
- [Form → Checkbox](../form/checkbox.md) — alternative for multi-selections
