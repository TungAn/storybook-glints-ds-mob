# Keyboard

Platform-specific keyboard mocks (numeric, QWERTY, hashtag) for inputs in a flow that need a keyboard rendered in the design.

> Specs verified against Figma (Aries UI Kit 2.0). iOS numeric inspected; Android variant has same shape but Android-specific layout.

## Components

| Component | Type | Description |
|---|---|---|
| `Numeric Keyboard/iOS` | component_set | iOS numeric keypad (1–9 + 0 + decimal) |
| `Numeric Keyboard/Android` | component | Android numeric keypad (1–9 + letters mapping) |
| `Keyboard/iOS` | component | iOS full QWERTY keyboard |
| `Keyboard/Android` | component | Android full QWERTY keyboard |
| `Hashtag Keyboard` | component | Hashtag-specific keyboard layout |

## Numeric Keyboard / iOS — verified specs

| | Value |
|---|---|
| Width | `390px` (iPhone 13/14 width) |
| Height | `290px` |
| Corner radius | `0` (full-bleed) |
| Background | `#D1D3D9` (iOS system keyboard tint — **system color, not an Aries token**) |
| Properties | `Dark Mode` (false/true), `Predictive` (toggle) |

> ⚠️ The keyboard uses **iOS/Android system colors** (e.g. `#D1D3D9`), not Aries tokens. These are the only place in the design system where non-Aries hex appears — they exist purely as platform mocks for screen design completeness.

## Usage Rules

- Use `Numeric Keyboard` for: salary input, OTP verification, PIN entry — these flows need a guaranteed numeric keypad
- Use `Keyboard` (full QWERTY) only when the design needs to show the keyboard explicitly in a screenshot — the runtime app uses the system keyboard
- Use `Hashtag Keyboard` for tag/topic entry flows
- Render the platform-correct variant: `iOS` for iPhone screens, `Android` for Pixel/Galaxy screens
- The keyboard sits at the bottom of the screen, full-width, overlapping content above
- These components are **system-color exceptions** — don't try to map their fills to Aries tokens

## When to Use

| Input type | Use |
|---|---|
| Salary / compensation | `Numeric Keyboard` |
| OTP / verification code | `Numeric Keyboard` |
| PIN / passcode | `Numeric Keyboard` |
| Name, bio, search query | [Text Field](./text-field.md) + `Keyboard` (QWERTY) for design only |
| Hashtag / topic input | `Hashtag Keyboard` |
| Date / time | [Picker](./picker.md) |

## Related

- [Form → Text Field](./text-field.md) — for text/alphanumeric inputs
- [Form → Picker](./picker.md) — for date, time, and list-based value selection
