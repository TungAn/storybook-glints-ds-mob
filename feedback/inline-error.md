# Inline Error

Field-level error messages shown directly below form inputs.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Inline Error` | component_set | Inline error message (icon + text) shown directly below an input field |

## Verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Type** | `Normal` (likely also `Significant`) | Normal |
| **Icon** | `true` / `false` | true |

### Default specs

| | Value |
|---|---|
| Width | `156px` (auto-hugs message text) |
| Height | `18px` (auto-hugs) |
| Padding | `0` |
| Gap (icon ↔ message) | `4px` (`space-small-4`) |
| Corner radius | `0` |
| Icon | `icn-error` (12×12), `Icon/danger` (#D42327) |
| Message typography | 12px Roboto Regular (Android/titleSmall), `Text/danger` (#D42327) |

## Variants

| Variant | Usage |
|---|---|
| Normal | Default — used in forms with multiple potential error messages where overemphasis would be noisy |
| Significant | High-emphasis — used when the error message must stand out, typically due to lack of proximity between message and the associated input |

## Anatomy

| Part | Required? |
|---|---|
| Message text | Required |
| Warning icon | Optional |

## Color Tokens

| Element | Token |
|---|---|
| Error text | `Text/danger` |
| Error border (input) | `Border/danger` (dedicated token) |
| Error background (if present) | `Background/danger_muted` |

## Usage Rules

- Inline errors appear **directly below** the input field that caused the error — not at the top of the form
- Show inline errors only after the user has interacted with a field (on blur or on submit) — not on initial render
- Inline error text uses `Text/danger` — never hardcode a red hex color
- The input field border also changes to the error state when an inline error is shown — update `Border/inputBox` to the error color
- For page-level errors (network failure, server error), use [Components → Empty & Error State](../components/empty-error-state.md) instead
- For non-blocking status messages, use [Components → Banner](../components/banner.md)

## Error Anatomy

```
[Text Field]  ← Border changes to error state
[Error icon] [Error message text]  ← shown below, using Text/danger
```

## Related

- [Form → Text Field](../form/text-field.md) — inline errors always accompany a text field
- [Components → Empty & Error State](../components/empty-error-state.md) — page-level error states
- [Components → Banner](../components/banner.md) — non-blocking alternative for broader messages
- [Tokens → Text](../tokens/text.md) — `Text/danger` token
- [Tokens → Background](../tokens/background.md) — `Background/danger_muted` token
