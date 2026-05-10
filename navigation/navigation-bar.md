# Navigation Bar

Bottom tab bar for switching between the app's main sections.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Navbar` | component_set | Bottom navigation bar with tab items (Jobs / Nearby / Chats / Profile) |
| `Nav item` | component | Individual tab item (icon + label) used inside Navbar |

> Note: `Tab group` exists as a separate component for **inline tab strips** within a screen — see [Tab](./tab.md). Do not confuse the two: `Navbar` is app-level bottom navigation; `Tab group` is in-screen content switching.

## Verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Country** | `Indonesia`, likely also `Singapore`, `Vietnam`, `Taiwan` (region-specific tab order/labels) | Indonesia |
| **OS** | `Android` / `iOS` | Android |

### Default specs

| | Value |
|---|---|
| Width | `360px` (full mobile width) |
| Height | `56px` |
| Padding | `0` horizontal, `12px` vertical |
| Gap (between Nav items) | `0` (items use flex to distribute evenly) |
| Corner radius | `0` (full-bleed bottom bar) |
| Background | `Background/normal` (#FFFFFF) |
| Items | 4 `Nav item` instances: Jobs / Nearby / Chats / Profile (Indonesia) — verify per `Country` |

## Tab Structure (Glints App)

| Tab | Icon | Screen |
|---|---|---|
| Home | — | Personalized job feed |
| Jobs | — | Job search and listing |
| — | — | (check Figma for full tab list) |
| Me | avatar / profile | User profile and settings |

## Usage Rules

- The Navigation Bar is always fixed at the **bottom** of the screen
- It is present on all root-level screens — hidden on detail/sub-screens
- Active tab uses `Text/active` and `Background/action01` (or the active indicator style in Figma)
- Inactive tabs use `Text/normal`
- Do not add more than 5 tabs — check Figma for the exact tab count
- Never build a custom bottom nav — always use `Navbar`

## Related

- [Navigation → Header](./header.md) — top bar, always paired with the bottom Navigation Bar on root screens
- [Navigation → Tab](./tab.md) — inline tab strip within a screen (different from the bottom nav bar)
- [Tokens → Text](../tokens/text.md) — active/inactive tab text colors
