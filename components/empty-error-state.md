# Empty & Error State

Placeholder states shown when content is unavailable, empty, or failed to load.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Empty State` | component_set | Standard zero-data placeholder — illustration + title + description + optional CTA buttons |
| `Error State` | component_set | Standard load-failure placeholder — error illustration/icon + message + retry action |
| `Error Warning` | component | Inline warning element used inside error states or alerts |
| `Backdrop` | component | Semi-transparent overlay behind modals/sheets; also used as empty state backdrop |

## Empty State — verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Type** | `Full Page`, likely also `Inline` / `Section` | Full Page |
| **Illustration** | `true` / `false` | true |
| **Description** | `true` / `false` | true |
| **Primary Button** | `true` / `false` | true |
| **Secondary Button** | `true` / `false` | true |

### Default specs (Full Page variant)

| | Value |
|---|---|
| Width | `281px` (default — fluid in screens) |
| Height | `362px` (auto-hugs content) |
| Padding | `16px` (`space-medium-16`) |
| Gap (between illustration / title / description / buttons) | `16px` |
| Corner radius | `0` |
| Background | `Background/normal` (#FFFFFF) |
| Layout | Centered vertically: illustration → title → description → primary button → secondary button |
| Illustration size | comes from `Illustration & Imagery` slot |
| Title typography | `Android/titleMedium` (Roboto SemiBold 16/1.5, 0.15px), `Text/outstanding` |
| Description typography | `Android/titleSmall` (Roboto Regular 12/1.5), `Text/normal`, centered |
| Primary button | `CTA Button` Solid (filled, `Background/action01`, ALL CAPS, `8px` radius) |
| Secondary button | `CTA Button` Ghost / text-only |

## Usage Rules

- Every screen that can have zero data must use the `Empty State` component — never show a blank white screen and never assemble a custom empty layout
- Every screen that can fail to load must use the `Error State` component — never leave the user with no feedback
- `Empty State` includes an illustration slot, a title, a description, and (where appropriate) a CTA button — slot in the appropriate `Illustration & Imagery` asset
- `Error State` includes an error illustration/icon slot, a message, and a retry action — pair with `Text/danger` for the message
- Do not reuse the same illustration for empty and error states — they communicate different things
- Check Figma for the exact illustration asset for each specific empty/error context (no jobs found, no notifications, network error, etc.)

## Semantic Colors for Error States

| Element | Token |
|---|---|
| Error text | `Text/danger` |
| Error background (if needed) | `Background/danger_muted` |

## Related

- [Illustration & Imagery](./illustration-imagery.md) — illustrations used in empty states come from here
- [Form → Button](../form/button.md) — CTA button for retry/action in empty states
- [Components → Loader](./loader.md) — shown before empty/error state is determined
- [Feedback → Inline Error](../feedback/inline-error.md) — for field-level errors, not page-level
