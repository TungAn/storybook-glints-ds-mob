# Loader

Loading state components shown while content is being fetched or an action is processing.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Loader` | component_set | Spinner icon (`loader-4`) — base loading indicator |
| `Loading` | component_set | Inline loading indicator (spinner + label) — for sections, lists, partial refreshes |
| `Full Page Loading` | component | Full-screen blocking loader for initial page loads |

## Loader — verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Size** | `Decorative (32×32)`, `Large (24×24)`, `Medium (18×18)`, `Small (16×16)`, `Extra Small (12×12)` | Decorative |
| **Type** | `Fill`, `Line` | Fill |

### Default specs

| | Value |
|---|---|
| Default size | `32 × 32px` (Decorative) |
| Icon name | `loader-4` |
| Padding | `0` |
| Corner radius | `0` |
| Animation | Continuous rotation (driven at runtime, not a Figma property) |
| Color | `Icon/normal` (#808080) by default; matches surrounding text in context |

## Usage Rules

- Use `Full Page Loading` only for page-level loading — when the entire screen content is pending
- Use `Loading` for inline/section-level loading (e.g. refreshing a list, partial content reload) — non-blocking
- Do not use `Full Page Loading` for inline loading states (inside a button, inside a list item) — use `Loading` or a button spinner instead
- `Full Page Loading` sits above all page content — it is a full-screen overlay
- Once content loads, transition from `Full Page Loading` → actual content (or [Empty & Error State](./empty-error-state.md) if no data)
- For button-level loading (e.g. submitting a form), use a spinner inside the `CTA Button` variant — not `Full Page Loading`

## Loading Flow

```
Screen enters
  └── Show Full Page Loading
        └── Data resolves successfully  → render content
        └── Data is empty               → show Empty State
        └── Data fails                  → show Error State
```

## Related

- [Components → Progress](./progress.md) — for determinate progress (steps, uploads)
- [Components → Empty & Error State](./empty-error-state.md) — shown after loading fails or returns empty
- [Form → Button](../form/button.md) — button-level loading uses a spinner variant inside the button
