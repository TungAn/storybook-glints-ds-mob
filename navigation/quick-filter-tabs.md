# Quick Filter Tabs

Horizontally scrollable filter tabs for quick category filtering — used for job type / shift filtering on the job listing screen.

> Specs sourced from Figma "Quick Filter" frame (Aries App UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `QuickFilterTabs` | component | Horizontal scrollable row of icon+label filter tabs with active underline indicator |

## Verified specs

| | Value |
|---|---|
| Container width | `360px` (full viewport) |
| Container height | `56px` |
| Padding | `16px` left/right, `4px` top |
| Tab size | `58×52px` (min-width) |
| Icon size | `24×24px` |
| Font | `Android/overline` — Roboto Medium 10/1.4, letter-spacing 0.2px |
| Active indicator | `2px` underline, `Border/active` (#1A73E8) |
| Active icon color | `Icon/active` (#1A73E8) |
| Active label color | `Text/active` (#1A73E8) |
| Inactive icon color | `Icon/normal` (#808080) |
| Inactive label color | `Text/supplementary` (#808080) |
| Background | `Background/normal` (#FFFFFF) |
| Right-edge fade | 16px gradient overlay (indicates scrollability) |

## Usage Rules

- Use for filtering job listings by category (For You, Night Shift, Day Shift, Daily Pay, Admin, Hospitality, FnB, Education, Retail)
- The first tab ("For You") is the default active tab
- On selection, update `activeIndex` prop
- The row scrolls horizontally; scrollbar is hidden; right-edge gradient fade signals more tabs

## Related

- [Navigation → Tab](./tab.md) — inline tab strip for content views (not filters)
- [Filter → Quick Filter](../components/filter.md) — full filter panel
