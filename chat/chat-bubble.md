# Chat Bubble

Individual message bubble component displayed inside the chat conversation list.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Chat Bubble` | component_set | Individual message bubble — supports sent/received alignment and multiple content types |

## Verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **User Type** | `Sender` (right) / `Receiver` (left) | Sender |
| **Bubble Type** | `Text`, likely also `Link`, `File`, `Image` | Text |

### Default specs (Sender / Text)

| | Value |
|---|---|
| Width | `126px` (auto-hugs message text — fluid up to ~70% of screen width) |
| Height | `63px` (auto-hugs) |
| Padding | `0` (composite — bubble itself has internal padding) |
| Gap (avatar ↔ bubble) | `12px` (`space-small-12`) |
| Composite corner radius | `0` |
| Bubble inner corner radius | typically `12–16px` (rounded corners on bubble shape) |
| Bubble (Sender) background | `Background/action01` (#1A73E8) |
| Bubble (Receiver) background | `Background/normal` (#FFFFFF) with `Border/normal` |
| Sender text | `Text/normal_onDark` (#FFFFFF) |
| Receiver text | `Text/outstanding` (#2D2D2D) |
| Timestamp typography | `Android/labelSmall` (Roboto Medium 10/1.4, 0.2px), `Text/supplementary` |

## Content Types

The `Chat Bubble` component supports the following content variants:

| Variant | Description |
|---|---|
| Text | Plain text message |
| Link / URL | URL preview message (e.g. YouTube link) |
| File | File attachment (e.g. PDF with name + size) |
| Image | Image attachment with timestamp |

## Bubble Types

| Type | Alignment | Background |
|---|---|---|
| Sent (user) | Right-aligned | `Background/action01` (primary blue) |
| Received (employer) | Left-aligned | `Background/normal` |
| System message | Center-aligned | — (text only) |

## Usage Rules

- Sent bubbles align to the **right**; received bubbles align to the **left** — never swap alignment
- Use the correct bubble variant based on sender — do not manually position bubbles
- Avatar appears next to received bubbles — not next to sent bubbles
- Timestamps appear below a bubble or at the boundary of a time group — check Figma for the exact placement
- System messages (e.g. "Today", "Interview scheduled") are center-aligned and use a distinct style from message bubbles

## Related

- [Chat → Chat Box](./chat-box.md) — Chat Bubble is always used inside Chat Box
- [Components → Avatar](../components/avatar.md) — avatar appears alongside received bubbles
