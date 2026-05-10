# Divider

Horizontal rule component for separating content sections and list items.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Divider` | component_set | Horizontal separator line between sections or list items |

## Variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Style** | `Normal` (likely also Inset / Full-width) | Normal |

### Default specs

| | Value |
|---|---|
| Width | `455px` (default — fluid to container) |
| Height | `0` (auto-hugs content — the line is `1px`) |
| Padding | `0` |
| Gap | `10px` (vertical breathing room reserved by the wrapper) |
| Corner radius | `0` |
| Line color | `Border/normal` (#DDDDDD) — verify per variant |

### Visual variants

- **Normal / Full-width** — spans the entire container width; used between major content blocks
- **Inset** — indented from the leading edge; used in lists where items have a leading avatar or icon

## Usage Rules

- Use `Divider` between:
  - Profile sections (experience, education, skills)
  - List item groups
  - Menu rows in the Me page
  - Any two distinct content blocks sharing the same surface
- Do **not** add a `Divider` after the last item in a list or section
- Use **inset** variant when list items have a leading avatar or icon
- Use **full-width** variant between major page sections or cards
- Never use a custom `border-bottom` or `hr` element — always use the `Divider` component

## Related

- [Card & Section](./card-section.md) — dividers separate section wrappers
- [Navigation → Navigation Bar](../navigation/navigation-bar.md) — divider may appear below the nav bar
