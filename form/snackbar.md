# Snackbar

Brief, auto-dismissing notification that appears at the bottom of the screen.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Snackbar` | component_set | Auto-dismissing toast notification |

## Variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Status** | `Informative` (likely also `Success`, `Warning`, `Danger`) | Informative |
| **Action** | `true` / `false` | true |
| **Icon** | `true` / `false` | true |

### Default specs

| | Value |
|---|---|
| Width | `344px` |
| Height | `56px` (auto-hugs content) |
| Padding | `16px` (`space-medium-16`) |
| Gap (icon ↔ text ↔ action) | `12px` (`space-small-12`) |
| Corner radius | **`8px`** |
| Shadow | Elevated-4: `0 1px 3px 0 #0000004D, 0 4px 8px 3px #00000026` |

### Color tokens (Informative status — default)

| Element | Token | Hex |
|---|---|---|
| Background | `Background/primary_muted` | `#E6F4FA` |
| Icon | `Icon/active` | `#1A73E8` |
| Body text | `Text/outstanding` | `#2D2D2D` |
| Action label | `Text/active` | `#1A73E8` |
| Body typography | `Android/bodyLarge` | Roboto Regular 14/1.5 |
| Action typography | `Android/bodyMedium` | Roboto SemiBold 14/1.4 |

> Other `Status` variants (Success, Warning, Danger) likely swap the background to `Background/success_muted`, `Background/cautious`, `Background/danger_muted` — verify variants in Figma if your screen relies on them.

## Usage Rules

- Snackbars are auto-dismissing — they disappear after 3–4 seconds without user interaction
- Use snackbars for brief confirmations: "Application submitted", "Saved to bookmarks", "Link copied"
- A snackbar may include **one optional action** (e.g. "Undo") — never two actions (toggle `action` prop)
- Snackbars appear at the **bottom** of the screen, above the navigation bar
- Do not stack multiple snackbars — if a new one is triggered while one is showing, replace the current one
- Don't override the `8px` corner radius or the elevation shadow — published values are fixed
- For persistent messages that require user acknowledgment, use [Banner](../components/banner.md) or [Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) instead

## When to Use vs. Others

| Scenario | Use |
|---|---|
| Brief confirmation (auto-dismiss) | Snackbar |
| Persistent info message | [Banner](../components/banner.md) |
| Requires user action to dismiss | [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) |
| Field-level error | [Feedback → Inline Error](../feedback/inline-error.md) |

## Related

- [Components → Banner](../components/banner.md) — persistent alternative to snackbar
- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — for messages requiring acknowledgment
- [Tokens → Background](../tokens/background.md) — `primary_muted`, `success_muted`, etc.
