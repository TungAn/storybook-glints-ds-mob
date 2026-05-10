# Banner

Inline banner components for non-blocking system messages and promotions.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Banner` | component_set | Full-width banner with variant states for different intents |
| `BannerCompact` | component | Compact inline banner for status messages, tips, and promotions |

## Banner — variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Status** | `Informative`, likely also `Success`, `Warning`, `Danger` | Informative |
| **Border** | `True` / `False` | False |
| **Icon** | `true` / `false` | true |
| **Title** | `true` / `false` | true |
| **Enter title** | string | "Are the results not relevant?" |
| **Enter message** | string | "Update your job interests and preferences in just 1 min..." |
| **Text button** | `true` / `false` | true |
| **Close button** | `true` / `false` | true |

### Default specs (Informative status)

| | Value |
|---|---|
| Width | `360px` (full mobile width) |
| Height | `112px` (auto-hugs content) |
| Padding | `16px` horizontal, `12px` vertical |
| Gap (icon ↔ content ↔ close) | `12px` (`space-small-12`) |
| Content stack gap | `8px` (between text group and text button) |
| Text inner gap (title ↔ message) | `4px` (`space-small-4`) |
| Corner radius | `0` (full-bleed) |
| Leading icon size | `32 × 32px` |
| Trailing close icon size | `18 × 18px` |
| Title typography | `Android/bodyMedium` (Roboto SemiBold 14/1.4) |
| Message typography | `Android/titleSmall` (Roboto Regular 12/1.5) |
| Text button typography | `Android/labelLarge` (Roboto Bold 14/1.5, 0.25px tracking) |

### Color tokens (Informative status — default)

| Element | Token | Hex |
|---|---|---|
| Background | `Background/primary_muted` | `#E6F4FA` |
| Leading icon | `Icon/active` | `#1A73E8` |
| Title text | `Text/outstanding` | `#2D2D2D` |
| Message text | `Text/normal` | `#666666` |
| Text button | `Text/active` | `#1A73E8` |
| Close icon | `Icon/normal` | `#808080` |

## Semantic Color Pairing (by Status variant)

| Status | Background Token | Icon Token | Text Token |
|---|---|---|---|
| Informative | `Background/primary_muted` | `Icon/active` | `Text/outstanding` (title) + `Text/normal` (body) |
| Success | `Background/success_muted` | `Icon/success` | `Text/outstanding` + `Text/normal` |
| Warning | `Background/cautious` | `Icon/cautious` | `Text/outstanding` + `Text/normal` |
| Danger | `Background/danger_muted` | `Icon/danger` | `Text/outstanding` + `Text/normal` |
| Promotional | `Background/outstanding` | `Icon/enticing` | `Text/outstanding` + `Text/normal` |

> The body text always uses neutral `Text/outstanding`/`Text/normal`. Only the **icon** swaps to the semantic color — banner backgrounds carry the visual intent.

## Usage Rules

- Use `BannerCompact` for non-blocking inline messages — it does not interrupt the user flow
- Banners sit inline within the page content, not as a fixed overlay
- Always pair banner background with the matching `Status` variant — never mix semantic colors manually
- For blocking messages that require user action, use [Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) instead
- Banner has **no corner radius** — it's full-bleed within its container
- Toggle `Title`, `Icon`, `Text button`, `Close button` via published props — don't delete sub-elements

## Related

- [Feedback → Inline Error](../feedback/inline-error.md) — for field-level error messages
- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — for blocking messages
- [Tokens → Background](../tokens/background.md) — semantic background tokens
- [Tokens → Text](../tokens/text.md) — semantic text tokens
