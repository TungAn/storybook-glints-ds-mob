# Button

Action trigger components. All button types are defined as `component_set` with variants.

> Specs verified against Figma (drag-onto-canvas inspect, Aries UI Kit 2.0). Component keys and shapes documented below — never deviate.

## Components

| Component | Type | Description | Component key |
|---|---|---|---|
| `CTA Button` | component_set | Primary/secondary call-to-action button — **rounded rectangle** | `43792b24fe4450d1d4bbb1c2f2c267082e854c84` |
| `Floating Button` | component_set | Floating action button overlaid on content — **pill / circular** | `d1ea9b480a84393f5f99644df10fe4ecb3aca4d6` |
| `Upload Button` | component_set | Specialized button for file/document upload — **rounded rectangle card** | `f361f88fb49d4c20466377c392ebb02cff821692` |

## Shape — corner radius (CRITICAL)

> ⚠️ **Only `Floating Button` is fully rounded.** `CTA Button` and `Upload Button` are rounded *rectangles* with a fixed small radius — never pill-shaped.

| Component | Corner radius | Shape |
|---|---|---|
| `CTA Button` | **`8px`** | Rounded rectangle |
| `Upload Button` | **`5px`** | Rounded rectangle (slightly tighter than CTA) |
| `Floating Button` | **`99px`** *(effectively full)* | Pill (with label) or circle (icon-only) |

## CTA Button — variants

| Property | Values | Default |
|---|---|---|
| **Size** | `Large`, `Medium`, `Small` | Large |
| **Type** | `Solid`, `Outline`, `Ghost` | Solid |
| **State** | `Normal`, `Pressed`, `Disabled`, `Loading` | Normal |
| **Full Width** | `true` / `false` | false |
| **Icon** | `true` / `false` | false |
| **Intent** | `Primary` (blue), `Danger` (red) | Primary |

### CTA Button — Large size specs (default)

| | Value |
|---|---|
| Width | `328px` (or auto when `Full Width: false`) |
| Height | `48px` |
| Padding | `16px` horizontal, `12px` vertical |
| Gap (icon ↔ label) | `8px` (`space-small-8`) |
| Corner radius | `8px` |

### CTA Button — Color tokens

| Type / State | Background | Border | Text |
|---|---|---|---|
| Solid · Normal · Primary | `Background/action01` (#1A73E8) | — | `Text/normal_onDark` (#FFFFFF) |
| Solid · Pressed · Primary | `Background/action01_active` (#58BFFF) | — | `Text/normal_onDark` |
| Solid · Disabled | `Background/action_disabled` (#F3F3F3) | — | `Text/supplementary` (#808080) |
| Outline · Normal · Primary | `Background/action02` (#FFFFFF) | `Border/action` (#1A73E8) | `Text/active` (#1A73E8) |
| Outline · Pressed · Primary | `Background/action02_active` (#E6F4FA) | `Border/action_active` (#58BFFF) | `Text/active` |
| Outline · Disabled | `Background/action02` | `Border/action_disabled` (#DDDDDD) | `Text/supplementary` |
| Ghost · Normal · Primary | transparent | — | `Text/active` |
| Solid · Normal · Danger | `Background/danger_bright` (#D42327) | — | `Text/normal_onDark` |

## Floating Button — variants

| Property | Values | Default |
|---|---|---|
| **Size** | `Default` (more sizes may exist) | Default |
| **State** | `Normal`, `Pressed`, `Disabled` | Normal |
| **Label** | `true` / `false` | true |
| **Icon** | `true` / `false` | true |

### Floating Button — Default specs

| | Value |
|---|---|
| Width | `103px` (with label) — auto-circles to ~48×48 when icon-only |
| Height | `48px` |
| Padding | `12px` / `12px` |
| Gap | `4px` (`space-small-4`) |
| Corner radius | `99px` (full pill) |
| Fill | `Background/action01` (Blue-S99 / #1A73E8) |

## Upload Button — variants

| Property | Values | Default |
|---|---|---|
| **State** | `Normal`, `Pressed`, `Disabled` | Normal |
| **Populated** | `false` (idle), `true` (file selected) | false |
| **Help Text** | `true` / `false` | true |

### Upload Button — visual

- Pale blue card surface with `Upload` icon (12pt) + label + optional help text.
- Corner radius `5px`.
- Wider footprint than CTA Button (acts as a drop target).

## Usage Rules

- Use `CTA Button` for all primary and secondary page actions — **rounded rectangle, never pill**
- Use `Floating Button` for persistent actions that float above scrollable content (e.g. Apply Now, Start Chat) — **pill/circular**
- Use `Upload Button` exclusively for file upload flows (CV, profile photo, portfolio) — **rounded rectangle**
- A screen should have at most one primary `CTA Button` visible at a time
- **Never set a custom corner radius on a button instance** — the published radius is fixed (`8` / `5` / `99`). Don't use `border-radius: 999px` on a CTA Button to "make it pill" — that's the wrong component.
- Never create a custom button — all variants live within these component sets
- For step navigation (Next / Back in a multi-step flow), use `CTA Button` — not `Floating Button`
- Button label is **ALL CAPS** per [voice-and-tone.md](../voice-and-tone.md) — Aries `labelLarge` style applies `text-transform: uppercase`
- Buttons never carry punctuation in their label

## Anti-patterns

- ❌ `border-radius: 999px` / `border-radius: 50%` on a CTA Button (use `Floating Button` instead)
- ❌ Pill-shaped CTA in a job card or list item
- ❌ Mixing rectangular and pill CTA on the same screen
- ❌ Overriding `corner radius` on a Figma component instance to fake a different shape

## Related

- [Components → Progress](../components/progress.md) — step navigation uses CTA Button
- [Components → Filter](../components/filter.md) — "Apply" action in filter panel uses CTA Button
- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — sheet actions use CTA Button
- [Tokens → Background](../tokens/background.md) — action01/action02 tokens
- [voice-and-tone.md](../voice-and-tone.md) — button copy is ALL CAPS, no punctuation
