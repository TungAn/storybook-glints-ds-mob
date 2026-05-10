# Header

Top app bar component present on most screens.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Nav header` | component_set | Top navigation bar with title, back button, and action icons |
| `Search header` | component_set | Header-style search input variant |
| `Header` | component | Composite header used in chat/profile contexts |

## Nav header — verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Type** | `Title only`, likely also `Title + Back`, `Title + Action`, `Avatar + Title` | Title only |
| **Enter title** | string | "Page Title" |
| **Back button** | `true` / `false` | false |
| **Action** | `true` / `false` | true |
| **Select icon** | icon name (e.g. `send-plane`, `notification`, `settings`) | Send-plane |

### Default specs

| | Value |
|---|---|
| Width | `360px` (full mobile width) |
| Height | `56px` (auto-hugs) |
| Padding | `16px` horizontal, `0` vertical (icons sit at full height) |
| Gap (back ↔ title ↔ action) | `16px` (`space-medium-16`) |
| Corner radius | `0` (full-bleed) |
| Background | `Background/normal` (#FFFFFF) |
| Title typography | `Android/titleLarge` (Roboto SemiBold 18/1.5, 0.15px tracking), `Text/outstanding` |
| Action icon size | `24 × 24px`, `Icon/normal` (#808080) — switches to `Icon/active` for active state |
| Back icon size | `24 × 24px`, `Icon/normal` |

> Note: the Aries library also has a separate `Navbar` component which appears to be a **bottom tab bar** (with Jobs/Nearby/Hub/Profile labels), distinct from this top header. Use `Nav header` for the top app bar; use [Navigation Bar](./navigation-bar.md) for the bottom tab bar.

## Common Variants

| Variant | Usage |
|---|---|
| Back + Title | Detail screens (job detail, company profile, settings) |
| Back + Title + Action icon(s) | Screens with top-right actions (share, bookmark, filter) |
| Title only (no back) | Root tab screens (Home, Jobs, Me) |
| Search bar | Screens where search is the primary action |
| Avatar + Title | Chat and profile screens |

## Typical Action Icons in Header

| Icon | Usage context |
|---|---|
| `Notification` | Home / root screens |
| `Settings` | Me / Profile screen |
| `chat` | Job detail (message employer) |
| `upload` | Profile / document screens |

## Usage Rules

- Every screen must have a `Nav header` — do not build a custom top bar
- Use the correct variant for the screen type — do not add a back button to root tab screens
- Action icons in the header should be a maximum of 2 — move additional actions into a menu
- The header is always fixed/sticky at the top — it does not scroll with content

## Related

- [Navigation → Navigation Bar](./navigation-bar.md) — bottom navigation bar (tab bar)
- [Navigation → Tab](./tab.md) — tab strip that may appear below the header
- [Components → Filter](../components/filter.md) — Quick Filters sits directly below the header
- [Icons](../icons.md) — header action icons reference
