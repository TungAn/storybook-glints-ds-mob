# Tab

Inline tab strip for switching between content views within a single screen.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Tab group` | component_set | Horizontal tab strip — composite of multiple `Tab` instances |
| `Tab` | component_set | Single tab item with active/inactive state + underline indicator |

## Verified specs (default)

| | Value |
|---|---|
| Tab item width | auto-hugs label text |
| Tab strip height | typically `40px` (auto-hugs the underline + label) |
| Padding | label has horizontal padding of `12–16px` |
| Active indicator | bottom underline (~`2px`), `Border/active` (#1A73E8) |
| Active label | `Text/active` (#1A73E8), `Android/bodyMedium` (Roboto SemiBold 14/1.4) |
| Inactive label | `Text/normal` (#666666), `Android/bodyLarge` (Roboto Regular 14/1.5) |
| Background | `Background/normal` (#FFFFFF) |
| Corner radius | `0` (full-bleed strip) |

## Tab vs. Navigation Bar

| | Tab | Navigation Bar |
|---|---|---|
| Position | Inside a screen, below the Header | Fixed at the bottom of the app |
| Purpose | Switch content views within a screen | Switch between main app sections |
| Appears on | Screens with multiple content categories | All root-level screens |
| Component | `Tab group` | `Navbar` |

## Usage Rules

- Use `Tab` when a single screen has 2–4 distinct content categories (e.g. Jobs / Companies / People on a search screen)
- Do not use `Tab` for navigation between screens — use [Navigation Bar](./navigation-bar.md) for that
- The active tab has an underline indicator and uses `Text/active` — the inactive tab uses `Text/normal`
- Do not use more than 4 tabs in an inline tab strip — if more categories exist, consider a [Dropdown](../form/dropdown.md) or restructuring the screen
- Tabs sit directly below the [Header](./header.md) and above the content area

## Related

- [Navigation → Header](./header.md) — header sits above the tab strip
- [Navigation → Navigation Bar](./navigation-bar.md) — bottom nav bar (app-level navigation)
- [Form → Chip](../form/chip.md) — chips are an alternative for filter-style selection (not navigation)
- [Tokens → Text](../tokens/text.md) — active/normal tab text colors
