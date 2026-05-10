# Illustration & Imagery

Visual assets used across the Glints app — illustrations, photos, logos, and brand imagery.

> The illustration set is a slotted asset library — each illustration is a published component (not a token-styled shape). Pull the exact illustration from Figma via MCP `get_design_context` for the host component (e.g. Empty State / Error State / Onboarding) — do not create custom illustrations.

## Components

| Component | Type | Description |
|---|---|---|
| `Illustration` | component_set | Illustration slot used inside Empty State, Error State, onboarding screens, and category headers |
| `glints-logo-fill` | component_set | Glints brand logo mark (custom, not in Remix) |
| `Google` | component_set | Google logo for OAuth sign-in (`google-fill`) |
| `gallery` | component_set | Photo/image gallery asset |
| `movie` | component_set | Video content thumbnail |

## Usage Rules

- IMPORTANT: All imagery comes from the Figma MCP payload — do not source images from external CDNs unless explicitly specified
- If the MCP returns a `localhost` URL for an image, use it directly — never replace with a placeholder
- `glints-logo-fill` is a custom Glints asset — it does not exist in any public icon library
- Use `gallery` for photo grid/gallery views (profile photos, company photos)
- Use `movie` for video preview thumbnails in job or company profiles
- For decorative illustration tiles in category headers (e.g. Streamer Jobs hero), pull from the published Illustration set — **don't paint a solid color block with a generic icon** as a substitute
- Illustrations must not be re-tinted with arbitrary colors — they ship with their published palette and may use `Background/primary_bright`, `Icon/brandingYellow`, etc. from the token system

## Usage Rules

- IMPORTANT: All imagery comes from the Figma MCP payload — do not source images from external CDNs unless explicitly specified
- If the MCP returns a `localhost` URL for an image, use it directly — never replace with a placeholder
- `glints-logo-fill` is a custom Glints asset — it does not exist in any public icon library
- Use `gallery` for photo grid/gallery views (profile photos, company photos)
- Use `movie` for video preview thumbnails in job or company profiles

## Related

- [Avatar](./avatar.md) — user/company profile pictures
- [Card & Section](./card-section.md) — imagery is often embedded in cards
- [Figma Integration](../figma-integration.md) — how to retrieve image assets from MCP
