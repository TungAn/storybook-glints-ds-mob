# Chip

Interactive tag-like controls used for filtering, selection, and input.

> Specs verified against Figma (Aries UI Kit 2.0, drag-onto-canvas inspect).

## Components

| Component | Type | Description |
|---|---|---|
| `Chip` | component_set | Standard filter/selection chip (tappable, toggleable) |
| `Input Chip` | component_set | Chip used as an input token (e.g. selected tags in a search field) |
| `Filter Section` | component_set | Grouped chip row/grid section inside a filter panel |
| `Quick Filters` | component | Horizontal scrollable chip row (wraps `Chip` instances) |

## Chip — variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Size** | `Default` (likely also Small) | Default |
| **State** | `Default` (Selected, Disabled likely) | Default |
| **Close button** | `true` / `false` | false |
| **Avatar** | `true` / `false` | false |
| **Enter label** | string | "Label" |

### Default specs

| | Value |
|---|---|
| Default size | `58 × 33` (auto-hugs to label width) |
| Padding | `12px` horizontal / `6px` vertical |
| Gap (avatar/icon ↔ label ↔ close) | `4px` (`space-small-4`) |
| Corner radius | **`8px`** (rounded rectangle, not pill) |
| Typography | `Android/bodyLarge` (Roboto Regular 14) |

### Color tokens

| State | Background | Border | Text |
|---|---|---|---|
| Default (unselected) | `Background/normal` (#FFFFFF) | `Border/normal` (#DDDDDD) | `Text/outstanding` (#2D2D2D) |
| Selected | `Background/action01` (#1A73E8) | `Border/active` (#1A73E8) | `Text/normal_onDark` (#FFFFFF) |
| Disabled | `Background/action_disabled` (#F3F3F3) | `Border/action_disabled` (#DDDDDD) | `Text/supplementary` (#808080) |

> Verify the exact Selected/Disabled tokens against the Figma component if a screen relies on them — verified in this audit: Default state only.

## Chip vs. Tag

| | Chip | Tag |
|---|---|---|
| Interactive | Yes — tappable, toggleable | No — display only |
| Used for | Filtering, selection input | Labeling, categorizing |
| Component | `Chip`, `Input Chip` | `User attribute`, `vip-crown` |
| Corner radius | `8px` | varies by tag (see [tag.md](../components/tag.md)) |
| Has avatar/close affordances | Yes (toggle props) | No |

## Usage Rules

- Chips in `Quick Filters` are horizontally scrollable — do not wrap to multiple lines
- A chip has at minimum two states: **unselected** and **selected**
- Selected chips show via the published variant — never customize a chip's fill or border
- Use chips for filters and multi-select input, **not** for navigation (use [Tab](../navigation/tab.md) for navigation)
- Don't override the `8px` corner radius — the published shape is the answer

## Related

- [Components → Filter](../components/filter.md) — chips power the Quick Filters component
- [Components → Tag](../components/tag.md) — non-interactive display labels
- [Navigation → Tab](../navigation/tab.md) — tab is the navigation equivalent
- [Tokens → Background](../tokens/background.md) — chip background tokens
