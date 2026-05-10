# Chat Box

Message composition input field at the bottom of the chat screen.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Chat Box` | component_set | Message input bar with state variants |

## Verified specs (Default state)

| | Value |
|---|---|
| Width | `360px` (full mobile width) |
| Height | `52px` (auto-hugs — taller in Populated state) |
| Padding | `4px` |
| Gap | `0` (sub-elements use their own spacing) |
| Corner radius | `0` (full-bleed bar at bottom of screen) |
| Background | `Background/normal` (#FFFFFF) |
| Inner input | rounded-rectangle text field (radius `4px`, like `Input Field`) |
| Leading | attachment / icon affordance |
| Placeholder | "Write your message..." |
| Trailing | info / send icon |

## States

| State | Dimensions (w × h) | Notes |
|---|---|---|
| Default | 360 × 52 | Empty, unfocused |
| Focus | 360 × 52 | Keyboard visible, cursor active |
| Populated | 360 × 87 | Multiline text entered — taller |
| Disabled | 360 × 52 | Input locked |

## Usage Rules

- `Chat Box` is the **message input field** — not a full chat screen container
- Place it at the bottom of the chat screen, above the system navigation bar
- Use the correct state variant — do not manually resize the input; let the Populated state handle multiline expansion
- The send button is part of the input area — check Figma for exact placement relative to `Chat Box`
- For the full chat screen layout, compose: `Navbar` (header) + message list of [Chat Bubble](./chat-bubble.md) + `Chat Box` (input)

## Screen Anatomy

```
Chat Screen (custom layout)
  └── Navbar               ← [Navigation → Header](../navigation/header.md)
  └── Message list
        └── Chat Bubble (×N)
  └── Chat Box             ← THIS component (message input, bottom)
```

## Related

- [Chat → Chat Bubble](./chat-bubble.md) — individual message bubbles in the message list
- [Navigation → Header](../navigation/header.md) — top navbar with employer name + avatar
- [Form → Text Field](../form/text-field.md) — generic text input (Chat Box is a specialized variant)
