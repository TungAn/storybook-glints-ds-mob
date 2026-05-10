# Avatar

User and company profile picture components.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Single Avatar` | component_set | Single user or company avatar |
| `Multiple Avatars` | component_set | Stacked/grouped avatar display (e.g. mutual connections) |

## Single Avatar — variants

### Properties

| Property | Values | Default |
|---|---|---|
| **Size** | `20x20` (default smallest), likely also `24`, `32`, `40`, `48`, `64` | `20x20` |
| **Border** | `True` / `False` | `False` |

### Specs

| | Value |
|---|---|
| Smallest size | `20 × 20px` |
| Shape | Circular (the avatar image is pre-cropped to a circle) |
| Wrapper corner radius | `0` (the image carries the circle, not the wrapper) |
| Border (when `True`) | `1px` ring around the avatar |

## Usage Rules

- Avatars appear inside profile cards, job cards, notification rows, and chat bubbles
- Always use the published `Single Avatar` / `Multiple Avatars` component — **do not create custom CSS circles** with `border-radius: 50%` and a hex fill
- Fallback state (no photo) is handled by the published variants — verify in Figma which variant to use for empty/initials state
- Company avatars and user avatars are distinct variants — do not swap them
- Pick the right published `Size` for the context (small list rows: `20–24`, card avatars: `32–40`, profile hero: `48–64`)
- The avatar image itself is pre-circular — the wrapper does NOT need `border-radius` styling

## Related

- [Card & Section](./card-section.md) — avatars appear inside job and profile cards
- [Chat → Chat Bubble](../chat/chat-bubble.md) — avatars appear alongside chat messages
- [Navigation → Header](../navigation/header.md) — avatar may appear in the app header
