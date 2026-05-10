# Text Field

Text input components for free-form user text entry.

> Specs verified against Figma (Aries UI Kit 2.0, drag-onto-canvas inspect). The Figma page is named "Text Field" but the published component is `Input Field`.

## Components

| Component | Type | Description |
|---|---|---|
| `Input Field` | component_set | Generic text input — primary input for forms (label + box + helper text composite) |
| `Search Box` | component_set | Search input bar with leading search icon |
| `Search header` | component_set | Header-style search input for top-of-screen search experiences |
| `Search box` | component | Lowercase variant of Search Box — used in specific contexts (verify variant in Figma) |
| `OTP Field` | component_set | One-time password / verification code input (use with `NumericKeyboard`) |
| `File Text` | component | File-attachment text-field representation |

## Input Field — variants & specs

`Input Field` is a composite of three stacked elements: **Label** (top) + **Text Field box** (middle) + **Helper Text** (bottom). Each can be toggled on/off.

### Properties

| Property | Values | Default |
|---|---|---|
| **Type** | `Input` (more types likely exist — verify) | Input |
| **State** | `Normal`, `Pressed`, `Active`, `Filled`, `Disabled`, `Error` (likely) | Normal |
| **Populated** | `false` (placeholder shown), `true` (value shown) | false |
| **Label** | `true` / `false` | true |
| **Helper Text** | `true` / `false` | true |

### Default specs (composite)

| Element | Token / Value |
|---|---|
| Composite width | `280px` (default — fluid in screens) |
| Composite stack gap | `4px` (`space-small-4`) |
| Composite padding | `0` (label/box/helper align edge-to-edge) |
| Label typography | `Android/labelSmall` (Roboto Medium 10/1.4, 0.2px tracking) |
| Helper text typography | `Android/titleSmall` (Roboto Regular 12/1.5) |

### Text Field box (the middle element)

| | Value |
|---|---|
| Height | `48px` |
| Padding | `12px` horizontal, `0` vertical |
| Inner gap | `0` |
| Corner radius | **`4px`** |
| Background | `Background/normal` (#FFFFFF) |
| Border | `1px solid Border/inputBox` (#B3B3B3) at default — see state table |
| Placeholder typography | `Android/bodyLarge` (Roboto Regular 14/1.5) |
| Placeholder color | `Text/supplementary` (#808080) |
| Filled value color | `Text/normal` (#666666) |
| Label color | `Text/normal` (#666666) |

## Border & Background Tokens by State

| State | Border Token | Background Token | Hex |
|---|---|---|---|
| Default / resting | `Border/inputBox` | `Background/normal` | border `#B3B3B3` |
| Focused / active | `Border/inputBox_active` | `Background/inputBox_active` | border `#58BFFF`, bg `#C3E8FF` |
| Disabled | `Border/inputBox_disabled` | `Background/inputBox_disabled` | border `#DDDDDD`, bg `#F3F3F3` |
| Error | `Border/danger` | `Background/danger_muted` | border `#D42327`, bg `#FFEEEE` |

## Usage Rules

- Always implement all four states: default, focused, disabled, and error
- Never hardcode border or background colors for input fields — always use the tokens above
- The Text Field box has a fixed `4px` corner radius — never override
- The composite `Input Field` is `Label + Box + Helper`. Toggle Label/Helper via the published variant booleans, never delete sub-elements
- For password fields, use the `Eye-off` icon toggle to show/hide the value
- For search input, use the `Search Box` component — not a plain text field with a search icon
- For OTP / verification codes, use `OTP Field` paired with [Keyboard](./keyboard.md) — not a generic text input
- For numeric input (salary, PIN), use [Keyboard](./keyboard.md) instead of the system keyboard

## Related

- [Form → Keyboard](./keyboard.md) — custom numeric keyboard for salary/OTP/PIN inputs
- [Feedback → Inline Error](../feedback/inline-error.md) — error message shown below a text field
- [Tokens → Border](../tokens/border.md) — input border tokens
- [Tokens → Background](../tokens/background.md) — input background tokens
