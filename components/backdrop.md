# Backdrop

Semi-transparent overlay component placed behind modals, sheets, and dialogs.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Backdrop` | component | Dark semi-transparent layer behind overlaid content |

## Verified specs

| | Value |
|---|---|
| Width | `360px` (full mobile width) |
| Height | `640px` (full mobile height — covers the entire screen baseline) |
| Padding | `0` |
| Corner radius | `0` |
| **Fill** | **`Overlay/normal` (#666666)** with reduced opacity |
| Tap behavior | Dismisses the overlaid sheet/dialog |

> The fill is set via the `Overlay/normal` token, **not** a custom rgba. If implementing in code, reference `Overlay/normal` and apply the opacity via the published variant — never hardcode an rgba scrim.

## Usage Rules

- Always place `Backdrop` behind every `Bottom Sheet`, `Dialog`, and full-screen overlay
- Never show a modal or sheet without a backdrop — the backdrop communicates that the content below is inactive
- `Backdrop` is not interactive content — it should dismiss the overlay when tapped
- Do not use `Backdrop` behind inline components (banners, toasts, inline errors)
- The backdrop opacity is defined in Figma — do not change it
- Don't replace `Backdrop` with a custom `rgba(0,0,0,0.5)` overlay — use the published token

## Related

- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — always paired with Backdrop
- [Components → Empty & Error State](./empty-error-state.md) — Backdrop may be used in full-screen error overlays
- [Tokens → Background](../tokens/background.md) — `Overlay/normal`, `Overlay/active`
