# Card & Section

Core content unit components — job cards, company cards, profile cards, and section wrappers.

> Specs verified against Figma (Aries UI Kit 2.0). Job Card inspected; Company Card / Profile Card share the same shell pattern.

## Job Cards

| Component | Type | Description |
|---|---|---|
| `Job Card` | component_set | Primary job listing card — Application / Search / Saved variants |
| `Job Card/Job Location` | component_set | Location row sub-component inside a Job Card |
| `Job Card/Company Info` | component_set | Company info row sub-component inside a Job Card |

### Job Card — verified specs

#### Properties

| Property | Values | Default |
|---|---|---|
| **Card Type** | `Application`, likely `Search`, `Saved` | Application |
| **Status** | `Active`, likely `Submitted`, `Closed`, `Expired` | Active |

#### Default specs (Application / Active)

| | Value |
|---|---|
| Width | `320px` (default — fluid in screens) |
| Height | `114px` (auto-hugs content) |
| Padding | `16px` horizontal, `12px` vertical |
| Vertical gap (between rows) | `4px` (`space-small-4`) |
| Horizontal gap (icon ↔ text) | `4px` (`space-small-4`) |
| Corner radius | **`0`** (full-bleed — relies on surrounding list container for visual separation) |
| Background | `Background/normal` (#FFFFFF) |

> ⚠️ **Job Card has no corner radius.** It is designed to be placed inside a list/feed where the surrounding container (or dividers between cards) creates the visual separation. **Don't add `border-radius` to Job Card instances.** If you want a stand-alone rounded card, use [`Section`](#section-wrappers) or wrap the card in a container with the radius.

#### Sub-element structure

| Sub-element | Specs |
|---|---|
| **Tag List** (top) | row of `Tag` instances. Application card shows status tag (e.g. "Applied/Chat Initiated"): `Background/primary_muted` + `Text/active`, padding `6/2`, radius `32` (pill), 10px `Android/labelSmall` |
| **Job Info** | Job Title — `Android/titleMedium` (Roboto SemiBold 16/1.5, 0.15px), `Text/outstanding` (#2D2D2D) |
| **Company Info** + **Job Location** (paired row) | `Job Card/Company Info` left + `Job Card/Job Location` right (each takes 50% via `flex-1`) |
| **Company Info** | 16px icon + 12px Roboto Regular text, `Text/outstanding` |
| **Job Location** | 12px Roboto Regular, `Text/normal` (#666666), right-aligned |
| **Submission Info** | calendar icon (`Icon/normal`) + 12px Roboto Regular text "Submitted on {date}", `Text/supplementary` |

#### Color tokens

| Element | Token |
|---|---|
| Background | `Background/normal` |
| Job title | `Text/outstanding` |
| Company name | `Text/outstanding` |
| Location text | `Text/normal` |
| Submission date | `Text/supplementary` |
| Status tag bg | `Background/primary_muted` |
| Status tag text | `Text/active` |
| Calendar icon | `Icon/normal` (verified `Icon/updated` in some variants) |

## Company Cards

| Component | Type | Description |
|---|---|---|
| `company card` | component_set | Company listing card for employer discovery |

## Profile Cards

| Component | Type | Description |
|---|---|---|
| `Profile card/Basic info` | component_set | Top section: avatar, name, headline, location |
| `Profile card/Profile field` | component | An empty/unfilled profile section row |
| `Profile card/Profile filled field` | component | A completed/filled profile section row |
| `Profile card/Nudge card` | component | Prompt card to encourage profile completion |
| `Profile Nudge` | component | Standalone profile-completion nudge (separate from `Nudge card` — verify variants in Figma before use) |
| `Award` | component | Achievement / award card shown in profile (badges, milestones) |

## Section Wrappers

| Component | Type | Description |
|---|---|---|
| `Section` | component_set | Generic section wrapper with title + sub-title + content slot (top-level) |
| `Section/Content` | component_set | Generic content section block with optional header |
| `Me Page/Activity` | component | Activity summary section (applications, views, saves) |
| `Me Page/Activity/Item` | component | Individual activity metric row |
| `Me Page/Menu` | component | Settings/navigation menu section on the Me page |
| `Me list` | component | Full list wrapper for Me page content |
| `Profile list` | component | Full list wrapper for profile sections |
| `Settings` | component | Settings/preferences section wrapper |
| `Questionnaire` | component | Questionnaire/survey section wrapper |
| `Notification list` | component_set | List of notification items |
| `Completion list` | component_set | Checklist of completed vs. pending profile items |
| `User list` | component_set | List wrapper for user/people rows (e.g. mutual connections, applicants) |
| `Chat List` | component_set | List of chat conversations (employer/recruiter messages) |
| `search-list-title` | component | Section title row in a search result list |
| `search-list-item` | component | Individual row in a search result list |
| `info-card` | component | Compact informational card (tooltip-style content block, also referenced as an icon name) |

## Usage Rules

- `Job Card/Job Location` and `Job Card/Company Info` are sub-components — only use them inside `Job Card`, never standalone
- Swap `Profile card/Profile field` ↔ `Profile card/Profile filled field` based on data state — never show a filled empty field or vice versa
- `Profile card/Nudge card` is conditional — show only when profile completion is below a threshold
- `Section/Content` is the generic fallback wrapper — prefer a named section component if one exists
- `Me Page/Activity/Item` must only be used inside `Me Page/Activity`
- `search-list-title` always precedes a group of `search-list-item` rows — never use items without a title

## Related

- [Avatar](./avatar.md) — profile/company avatars appear in cards
- [Tag](./tag.md) — skill tags, salary tags appear inside cards
- [Divider](./divider.md) — separates card sections and list groups
- [Components → Filter](./filter.md) — filter chips narrow the card feed
- [Tokens → Background](../tokens/background.md) — card surfaces use `Background/normal` or `Background/dark`
