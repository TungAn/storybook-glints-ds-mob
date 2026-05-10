# Bottom Sheet & Dialog

Overlay components for user decisions, detail views, and filter panels.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Bottom Sheet` | component_set | Sheet that slides up from the bottom of the screen |
| `Bottom Sheet/Header` | component | Header row (drag handle + title + optional close) |
| `Bottom Sheet/Footer` | component_set | Footer row with primary/secondary action buttons |
| `Bottom Sheet/Action Item` | component | Single tappable action row inside a sheet |
| `Bottom Sheet/Selection Item` | component_set | Selectable list row inside a sheet (with checkbox/radio) |
| `Bottom Sheet/Info` | component_set | Informational content row inside a sheet |
| `Bottom Sheet/Toggle` | component | Toggle (switch) row inside a Bottom Sheet |
| `Bottom Sheet/Checkbox` | component | Checkbox row inside a Bottom Sheet |
| `05. Expanding sheet` | component_set | Expandable sheet with collapsed peek + full expanded state |
| `Dialog` | component_set | Modal dialog for confirmations and blocking decisions |

## Bottom Sheet — verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Full Page** | `true` / `false` | false |
| **Header** | `true` / `false` | true |
| **Footer** | `true` / `false` | true |
| **Body** | `Default`, likely `Custom` | Default |

### Default specs (full overlay)

| | Value |
|---|---|
| Width | `360px` (full mobile width) |
| Height | `640px` (full mobile height — wrapper covers entire screen including backdrop area) |
| Padding | `0` (sub-elements have own padding) |
| Gap | `0` |
| Wrapper corner radius | `0` (full-bleed) |
| Sheet card corner radius | rounded **top** corners (typically `16px`); bottom flush with screen |
| Sheet card background | `Background/normal` (#FFFFFF) |
| Backdrop above | uses `Backdrop` component (`Overlay/normal` with reduced opacity) |

### Anatomy (when Header + Footer = true)

| Region | Content |
|---|---|
| **Header** | Drag handle + Title + optional close icon. Close icon at left, "ACTION" link at right when needed |
| **Body** | Scrollable content area (rows, form, picker, etc.) |
| **Footer** | Primary `CTA Button` (filled) + Secondary `CTA Button` (text-only) — stacked or side-by-side per variant |

## When to Use Each

| Scenario | Component |
|---|---|
| Filter panel (Quick → Full) | `Bottom Sheet` |
| Multi-option selection | `Bottom Sheet` |
| Job description / detail preview | `05. Expanding sheet` |
| Confirm destructive action | `Dialog` |
| 2-option decision (confirm/cancel) | `Dialog` |
| Settings toggles | `Bottom Sheet` + `Bottom Sheet/Toggle` |
| Date / value picker | `Bottom Sheet` + [Picker](../form/picker.md) |

## Anatomy

```
Bottom Sheet
  └── Bottom Sheet/Header      ← always first (drag handle + title + optional close)
  └── [content]                ← list items, toggles, form fields, filter controls
  └── CTA Button (optional)    ← primary action pinned at the bottom
```

## Usage Rules

- `Bottom Sheet/Header` must always be the **first child** inside every Bottom Sheet instance
- Always include [Backdrop](../components/backdrop.md) behind every Bottom Sheet and Dialog
- Use `Bottom Sheet` for content-heavy or multi-option interactions; use `Dialog` only for short 2-action confirmations
- Do not nest a `Dialog` inside a `Bottom Sheet`
- `05. Expanding sheet` is for content with a peek/collapsed state (e.g. salary details, job description preview) — not for filter panels

## Related

- [Components → Backdrop](../components/backdrop.md) — always paired with Bottom Sheet and Dialog
- [Components → Filter](../components/filter.md) — Full Page Filters live inside a Bottom Sheet
- [Form → Button](../form/button.md) — CTA Button is the primary action inside sheets
- [Components → Switch](../components/switch.md) — `Bottom Sheet/Toggle` wraps a Switch
- [Form → Picker](../form/picker.md) — Picker opens inside a Bottom Sheet
