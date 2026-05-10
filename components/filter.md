# Filter

Filter components for narrowing job search results and listings.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Quick Filters` | component | Horizontal scrollable chip row for fast inline filtering |
| `Filter Dropdown` | component_set | Single dropdown chip used inside Quick Filters |
| `Filter Section` | component_set | Grouped section inside a Full Page Filters panel |
| `Full Page Filters` | component | Full-screen filter panel for advanced filtering |

## Quick Filters — verified specs

| | Value |
|---|---|
| Width | `1076px` (long horizontal — fluid in screens, scrolls horizontally) |
| Height | `57px` (auto-hugs) |
| Padding | `16px` horizontal, `12px` vertical |
| Gap (between Filter Dropdown chips) | `8px` (`space-small-8`) |
| Corner radius | `0` (full-bleed bar) |
| Background | `Background/normal` (#FFFFFF) |
| Children | `Filter Dropdown` instances + leading `filter-2` icon |

## Filter Dropdown — verified specs (single chip)

| | Value |
|---|---|
| Default size | `162 × 32` |
| Padding | `8px` horizontal, `0` vertical |
| Gap (icon ↔ label ↔ arrow) | `4px` (`space-small-4`) |
| Corner radius | **`8px`** (rounded rectangle, NOT pill) |
| Properties | `State`, `Size` (Default), `Border` (toggle), `Prefix Icon` (toggle), `Suffix icon` (toggle) |

## Filter Flow

```
Navbar / Search bar
  └── Quick Filters              ← fast chips (location, job type, salary range)
        └── tap chip             → applies filter inline, OR
        └── tap "All Filters"   → opens Full Page Filters in a Bottom Sheet
              └── Dropdown / Radio / Checkbox  ← filter controls inside
              └── CTA Button (Apply)           ← confirms filter selection
```

## Usage Rules

- `Quick Filters` always appears directly below the search bar or navbar on listing screens
- `Full Page Filters` always opens inside a [Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md)
- A chip in `Quick Filters` can either apply the filter immediately (single-value filters) or open `Full Page Filters` (multi-option filters)
- Use [Form → Dropdown](../form/dropdown.md) for location, industry, and salary range inside `Full Page Filters`
- Use [Form → Radio](../form/radio.md) for job type and work arrangement inside `Full Page Filters`
- Use [Form → Chip](../form/chip.md) for individual selectable filter values

## Related

- [Form → Chip](../form/chip.md) — chips are the individual items inside `Quick Filters`
- [Form → Dropdown](../form/dropdown.md) — used inside `Full Page Filters`
- [Form → Radio](../form/radio.md) — used inside `Full Page Filters`
- [Feedback → Bottom Sheet & Dialog](../feedback/bottom-sheet-dialog.md) — `Full Page Filters` lives inside a bottom sheet
- [Navigation → Header](../navigation/header.md) — `Quick Filters` is visually connected to the header area
