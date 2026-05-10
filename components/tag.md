# Tag

Label and tag components for categorizing, highlighting, and annotating content.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Tag` | component_set | Pill-shaped label tag with Color × Type × Rounded × Icon variants — the **primary tag component** for skills, attributes, statuses |
| `price-tag-3` | icon | Salary / pricing icon (used inside Job Card salary display, not a standalone tag) |
| `vip-crown` | component_set | VIP / premium tier badge (custom Glints icon) |
| `notification-badge` | component_set | Notification count dot/badge |

> ⚠️ **`User attribute` is NOT a tag.** It's a profile-field row component (label + value pair, e.g. "Highest Education Level" → "Bachelor's"). For skill/language/job-preference *pills* on a Job Card or profile, use the published **`Tag`** component (this file).

## Tag — variants & specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Size** | `Default` (more sizes likely) | Default |
| **Color** | `Grey`, plus brand/semantic colors (`Blue`, `Green`, `Red`, `Yellow`, `Orange`) | Grey |
| **Type** | `Muted`, likely also `Bright` | Muted |
| **Rounded** | `true` (pill) / `false` (rectangle, likely radius `4–8px`) | true |
| **Enter label** | string | "Name your label" |
| **Icon-m** | `true` / `false` | true |
| **Select icon** | icon name (e.g. `Check`) | Check |

### Default specs (Grey / Muted / Rounded / with icon)

| | Value |
|---|---|
| Width | `121px` (auto-hugs label) |
| Height | `22px` (auto-hugs) |
| Padding | `8px` horizontal, `2px` vertical |
| Gap (icon ↔ label) | `4px` (`space-small-4`) |
| Corner radius | **`32px`** when `Rounded=true` (pill) — likely smaller (e.g. `4px`) when `Rounded=false` |
| Icon size | `16 × 16px` |
| Label typography | `Android/titleSmall` (Roboto Regular 12/1.5) |

### Color tokens (Grey / Muted — default)

| Element | Token | Hex |
|---|---|---|
| Background | `Background/supplementary` | `#F7F9FA` |
| Label | `Text/normal` | `#666666` |
| Icon | matches `Text/normal` (#666666) |

## Semantic Color Pairing (by Color × Type variant)

> The `Color` × `Type` matrix in Figma maps to background/text token pairs. Verified pair shown for Grey/Muted; the rest follow the Aries semantic-pair convention:

| Color · Type | Background Token | Text Token |
|---|---|---|
| Grey · Muted | `Background/supplementary` | `Text/normal` |
| Blue · Muted | `Background/primary_muted` | `Text/active` |
| Blue · Bright | `Background/action01` | `Text/normal_onDark` |
| Green · Muted | `Background/success_muted` | `Text/success` |
| Green · Bright | `Background/success_bright` | `Text/normal_onDark` |
| Red · Muted | `Background/danger_muted` | `Text/danger` |
| Red · Bright | `Background/danger_bright` | `Text/normal_onDark` |
| Yellow · Muted | `Background/discount_muted` | `Text/discount` (use only on dark) |
| Orange · Muted | `Background/enticing_muted` | `Text/enticing` |
| Outstanding · Muted | `Background/outstanding` | `Text/outstanding` |

## Usage Rules

- Use `Tag` for: skill chips on Job Card, language proficiencies, job preferences, status badges (e.g. "Featured", "New")
- Use the published `Color` × `Type` variants — **never** invent a tag color combination not in the matrix
- Pick `Rounded=true` (pill) for chips on cards / list items — this is the visual default
- Use `Rounded=false` only when explicitly required (e.g. a corner badge in a card thumbnail)
- Use `notification-badge` only on top of icons (e.g. the notification bell in the header) — never standalone
- `vip-crown` is a Glints-exclusive badge for premium/VIP features — only use it in contexts where VIP status is relevant
- `price-tag-3` is an **icon**, not a tag — for salary display, use plain inline text styled with `Text/active` (or the appropriate token), with `price-tag-3` as a leading icon when needed
- Do not create custom tag shapes or colors — use the published variants

## Tag vs. Chip vs. User attribute

| | `Tag` | `Chip` | `User attribute` |
|---|---|---|---|
| Component file | `tag.md` | `form/chip.md` | profile field row |
| Interactive | No (display only) | Yes (tappable, toggleable) | No |
| Shape | Pill (`32px` radius) when Rounded | Rounded rectangle (`8px`) | Stack of label + value |
| Used for | Labeling, status, attributes | Filters, multi-select | Profile data display |

## Related

- [Card & Section](./card-section.md) — tags appear inside job and company cards
- [Form → Chip](../form/chip.md) — interactive variant for filters and selections
- [Tokens → Background](../tokens/background.md) — tag background tokens
- [Tokens → Text](../tokens/text.md) — tag text tokens
