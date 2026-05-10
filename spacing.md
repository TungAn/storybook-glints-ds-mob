# Spacing

Source: Figma file `r20p8eotJkuTxjmSXiYp0n`, node `12973:6982` ("Spacing").

> **4-point grid.** Aries uses a 4-point grid for fine granularity. The most common values are `4, 8, 12, 16, 24, 32`. The values `20` and `28` exist as tokens but are **not used** in practice — prefer the canonical scale.

## Tokens

| Token | Value | Bucket | Common usage |
|---|---|---|---|
| `space-small-4` | `4px` | Small | Small and compact pieces of UI |
| `space-small-8` | `8px` | Small | Small and compact pieces of UI |
| `space-small-12` | `12px` | Small | Small and compact pieces of UI |
| `space-medium-16` | `16px` | Medium | Larger and less dense pieces of UI |
| `space-medium-20` | `20px` | Medium *(rarely used)* | Larger and less dense pieces of UI |
| `space-medium-24` | `24px` | Medium | Larger and less dense pieces of UI |
| `space-large-28` | `28px` | Large *(rarely used)* | Largest pieces of UI / layout |
| `space-large-32` | `32px` | Large | Largest pieces of UI / layout |
| `space-large-36` | `36px` | Large | Largest pieces of UI / layout |
| `space-large-40` | `40px` | Large | Largest pieces of UI / layout |

## Rules

- Use the **canonical scale** (`4, 8, 12, 16, 24, 32`) by default — only reach for `20`, `28`, `36`, `40` when a specific layout demands it
- Never use a value off the scale (e.g. `5px`, `15px`, `30px`) — every spacing must map to a token
- Pair tokens with semantic intent: gaps inside a card → `small`/`medium`; section padding → `medium`/`large`; full-screen padding → `large`
- For HTML preview / CSS: expose tokens as CSS variables matching the Figma names — `--space-small-4: 4px;`, `--space-medium-16: 16px;`, etc.

## Suggested defaults

| Context | Default token |
|---|---|
| Inline tag/chip gap | `space-small-4` |
| Tag → tag (in a tag row) | `space-small-8` |
| Form field row gap | `space-small-12` |
| Card inner padding | `space-medium-16` |
| Card → card (in a feed) | `space-medium-12` or `space-medium-16` |
| Section gap (within a screen) | `space-medium-24` |
| Screen edge padding (mobile) | `space-medium-16` (default) or `space-medium-20` |
| Hero / page padding | `space-large-32` or `space-large-40` |

## Related

- [screen-size.md](./screen-size.md) — mobile baseline (360×640)
- [typography.md](./typography.md) — type scale uses these spacing tokens for line-height
