# Icons

Icon system for the Glints Aries App. All icons are Figma `component_set` instances with size and type variants.

> Catalog fetched from Figma file `r20p8eotJkuTxjmSXiYp0n`, node `12973:12748` ("Icons" page).

## Icon Base

Icons are built on the **[Remix Icon](https://remixicon.com/)** open-source library. Glints-specific custom icons are added on top.

## Variant Matrix

Every icon (where applicable) ships in the following variants:

| Size | Pixels | Use cases |
|---|---|---|
| Decorative | 32×32 | Hero illustrations, large empty-state icons |
| Large | 24×24 | Standard nav icons, action icons in lists |
| Medium | 18×18 | Inline icons in body text, secondary CTAs |
| Small | 16×16 | Tag icons, dense tables, inline badges |
| Extra Small | 12×12 | Captions, micro-indicators |

Each size has two **Type** variants:

| Type | Usage |
|---|---|
| `Line` | Default / inactive state |
| `Fill` | Active / selected / emphasized state |

> Some icons (logos, badges) ship only in `Fill`. Verify in Figma before assuming both exist.

## Categories

The Aries icon set is organized into 17 categories on the Icons page:

| Category | Examples |
|---|---|
| Building | building |
| Business | briefcase, money-dollar-circle, copper-coin |
| Communication | chat, mail, message-2, send-plane, customer-service, discuss |
| Custom | glints-logo-fill, glints-vip, vip-crown, info-card, icn-calendar, icn-error, icn-ticket, graduation-hat-line |
| Designs | pencil, tools |
| Device | camera |
| Document | file, file-text, book-open, attachment, copy, download, upload, draggable, ri-delete-bin, ri-screenshot |
| Editor | hashtag, function, equalizer |
| Finance | coupon, discount-percent |
| Health & Medical | heart, thermometer |
| Logos | google, facebook, instagram, linkedin, twitter, tiktok, youtube, whatsapp, behance, codepen, github, vimeo, facebook-circle |
| Map | map, map-pin, navigation, compass, crosshair, direction, relocate |
| Media | gallery, movie |
| System | add, add-circle, alert, arrow-left, arrow-left-s, arrow-right-s, arrow-up-s, arrow-down-s, arrow-up-down, check, checkbox-circle, close, close-circle, error-warning, eye, eye-off, filter-2, flag, forbid, history-line, home, indeterminate-circle, information, loader, more (horizontal), more (vertical), notification, refresh, search, settings, share, time, timer, zoom-in, zoom-out, sparkling, flash-light, alarm, cloud |
| User & Faces | user, user-add, user-follow, user-move, men, women, account-box, profile, contact-book, team, customer-service |
| Others | award, bookmark, calendar, delete-bin, door-open, global, heart, inbox, line-chart, medal-2, nearby, phone, questionnaire, send-plane, shield-check, shield-star, star, thumb-up, trophy, verified, benefit, activity, chat-check, chat-delete, chat-quote, translation |
| Weather | flash-light, sparkling, cloud, alarm |

> This is a flat list of names visible in the metadata. The full size×type matrix lives in Figma — fetch via `get_design_context` on the parent category frame to see every variant.

## Custom Glints Icons (not in Remix)

These icons exist only in Aries — never substitute from a public CDN:

| Component | Usage |
|---|---|
| `glints-logo-fill` | Glints brand logo mark |
| `glints-vip` | Glints VIP badge |
| `vip-crown` | VIP / premium tier indicator |
| `graduation-hat-line` | Education / graduation |
| `notification-badge` | Notification count dot/badge |
| `info-card` | Info / tooltip card icon |
| `icn-calendar` | Calendar (custom variant) |
| `icn-error` | Error (custom variant) |
| `icn-ticket` | Ticket / coupon (custom variant) |

## Functional / Semantic Icons (recurring)

Icons used in repeating roles across the app:

| Component | Remix name | Context |
|---|---|---|
| `notification` | `notification-2` | Header notification bell |
| `settings` | `settings-3` | Me page — settings access |
| `map-pin` | `map-pin` | Job location row |
| `search` | `search` | Search action |
| `chat` | `chat-2-line` | Messaging / chat actions |
| `upload` | `upload-2-line` | File upload |
| `eye` / `eye-off` | `eye` / `eye-off` | Password visibility toggle |
| `refresh` | `refresh` | Pull-to-refresh / retry |
| `arrow-left` | `arrow-left-line` | Back navigation |
| `more (horizontal)` | `more-2-line` | Overflow menu |
| `crosshair` | `crosshair` | Location targeting |
| `price-tag-3` | `price-tag-3` | Salary / pricing |
| `phone` | `phone` | Phone / contact |
| `hashtag` | `hashtag` | Skill/topic tags |

## Color Tokens

Icon color is set by **`Icon/*`** tokens, not `Text/*` tokens. See [tokens/icon.md](./tokens/icon.md) for the full list. Defaults:

- Default state → `Icon/normal` (`#808080`)
- On dark surface → `Icon/onDark` (`#FFFFFF`)
- Disabled → `Icon/disabled` (`#DDDDDD`)
- Brand yellow accent → `Icon/brandingYellow` (`#FFCB34`)

## Rules

- IMPORTANT: Do not install any third-party icon packages — all icons come from the Figma MCP payload
- IMPORTANT: If the MCP returns a `localhost` SVG source, use it directly — never substitute another icon
- Custom Glints icons (`glints-logo-fill`, `glints-vip`, `vip-crown`, `graduation-hat-line`, `info-card`, `icn-*`) do not exist in any public library — always fetch from MCP
- Always pick the right **size variant** for the context — do not scale a 32×32 icon down with CSS
- Pick the right **type variant** for the state: `Line` for default/inactive, `Fill` for active/selected
- Color icons via `Icon/*` tokens — never `Text/*` tokens or raw hex

## Related

- [tokens/icon.md](./tokens/icon.md) — icon color tokens
- [Figma Integration](./figma-integration.md) — how to retrieve icon SVGs from the MCP
- [Navigation → Header](./navigation/header.md) — header action icons
- [Components → Tag](./components/tag.md) — `vip-crown`, `notification-badge`, `price-tag-3` are tag-related
