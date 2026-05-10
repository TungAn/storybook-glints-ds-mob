# Typography

Source: Figma file `r20p8eotJkuTxjmSXiYp0n`, node `17:210` (Type Scale — Android & iOS).

> Aries uses **Roboto** on Android and **SF Pro Text** on iOS. The scale categories are the same on both platforms; the font family, weight, and tracking differ.

## Type Faces

| Platform | Family |
|---|---|
| Android | Roboto |
| iOS | SF Pro Text (with Poppins SemiBold for H5) |

## Scale (Android — `Android/*` text styles)

| Scale category | Token | Family | Weight | Size | Line height | Letter spacing | Usage |
|---|---|---|---|---|---|---|---|
| H1 | `Android/displayLarge` | Roboto | Bold (700) | 96 | 150% | 0 | Headlines |
| H2 | `Android/displayMedium` | Roboto | Medium (500) | 60 | 150% | 0 | Headlines |
| H3 | `Android/displaySmall` | Roboto | Regular (400) | 48 | 150% | 0 | Headlines |
| H4 | `Android/headlineMedium` | Roboto | Regular (400) | 34 | 150% | 0 | Headlines |
| H5 | `Android/headlineSmall` | Roboto | SemiBold (600) | 24 | 150% | 0 | Headlines |
| H6 | `Android/titleLarge` | Roboto | SemiBold (600) | 18 | 150% | 0.15px | Page Title |
| Subtitle 1 | `Android/titleMedium` | Roboto | SemiBold (600) | 16 | 150% | 0.15px | Section / Content Box Header |
| Subtitle 2 | `Android/titleSmall` | Roboto | Regular (400) | 12 | 150% | 0 | Error placeholder, Help text |
| Body 1 | `Android/bodyLarge` | Roboto | Regular (400) | 14 | 150% | 0 | Sentence, Paragraph, Chips |
| Body 2 | `Android/bodyMedium` | Roboto | SemiBold (600) | 14 | 140% | 0 | Emphasis, Inline Links, Tab Labels, Tags |
| Button | `Android/labelLarge` | Roboto | Bold (700) | 14 | 150% | 0.25px | Full-width, text, outlined, contained buttons |
| Caption | `Android/bodySmall` | Roboto | Medium (500) | 12 | 140% | 0.2px | Text Field Labels |
| Overline | `Android/labelSmall` | Roboto | Medium (500) | 10 | 140% | 0.2px | Nav Bar Labels |

## Scale (iOS — `iOS/*` text styles)

| Scale category | Token | Family | Weight | Size | Line height | Letter spacing | Usage |
|---|---|---|---|---|---|---|---|
| H1 | `iOS/displayLarge` | SF Pro Text | Bold (700) | 96 | 150% | 0 | Headlines |
| H2 | `iOS/displayMedium` | SF Pro Text | Medium (500) | 60 | 150% | 0 | Headlines |
| H3 | `iOS/displaySmall` | SF Pro Text | Regular (400) | 48 | 150% | 0 | Headlines |
| H4 | `iOS/headlineMedium` | SF Pro Text | Regular (400) | 34 | 150% | 0 | Headlines |
| H5 | `iOS/headlineSmall` | **Poppins** | SemiBold (600) | 24 | 150% | 0 | Headlines |
| H6 | `Android/titleLarge` (shared) | Roboto | SemiBold (600) | 18 | 150% | 0.15px | Page Title |
| Subtitle 1 | `iOS/titleMedium` | SF Pro Text | Semibold (600) | 16 | 150% | -0.41px | Section / Content Box Header |
| Subtitle 2 | `iOS/titleSmall` | SF Pro Text | Regular (400) | 13 | 140% | -0.08px | Error placeholder, Input label, Help text |
| Body 1 | `iOS/bodyLarge` | SF Pro Text | Regular (400) | 15 | 140% | -0.24px | Sentence, Paragraph |
| Body 2 | `iOS/bodyMedium` | SF Pro Text | Semibold (600) | 15 | 130% | -0.24px | Emphasis, Inline Links, Tab Labels |
| Button | `iOS/labelLarge` | SF Pro Text | Bold (700) | 15 | 140% | 0 | Buttons |
| Caption | `iOS/bodySmall` | SF Pro Text | Medium (500) | 13 | 130% | -0.08px | Text Field Labels, Tags |
| Overline | `iOS/labelSmall` | SF Pro Text | Medium (500) | 11 | 130% | -0.08px | Nav Bar Labels |

## Cross-platform mapping

If you're authoring a single platform-agnostic component (e.g. an HTML preview, a React Native app), pick the **scale category** (H1, Subtitle 1, Body 1, etc.) — not the platform token. The renderer should swap to the right `Android/*` or `iOS/*` token at runtime.

## Rules

- Never hardcode a font size, weight, family, or line-height — use a published text style token
- Headings/H1–H5 are for full-bleed marketing or empty-state hero copy. **In product UI** the most-used styles are: H6 (page titles), Subtitle 1 (section headers), Body 1/2 (paragraphs), Button (buttons), Caption (form labels), Overline (nav bar labels)
- iOS H5 uses **Poppins** (not SF Pro) — this is intentional, not a typo
- iOS H6 reuses `Android/titleLarge` — there is no separate `iOS/titleLarge` token
- Buttons are ALL CAPS on both platforms (see [voice-and-tone.md](./voice-and-tone.md))
- Letter spacing is significant on iOS — most styles have negative tracking. Don't drop it.

## HTML preview helpers

Map the most-used categories to CSS:

```css
/* H6 — Page Title */
.text-page-title { font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 18px; line-height: 1.5; letter-spacing: 0.15px; }

/* Subtitle 1 — Section header */
.text-subtitle-1 { font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 16px; line-height: 1.5; letter-spacing: 0.15px; }

/* Body 1 — Sentence, paragraph, chips */
.text-body-1 { font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 14px; line-height: 1.5; }

/* Body 2 — Emphasis, inline link, tab label, tag */
.text-body-2 { font-family: 'Roboto', sans-serif; font-weight: 600; font-size: 14px; line-height: 1.4; }

/* Button — All caps */
.text-button { font-family: 'Roboto', sans-serif; font-weight: 700; font-size: 14px; line-height: 1.5; letter-spacing: 0.25px; text-transform: uppercase; }

/* Caption — Field labels */
.text-caption { font-family: 'Roboto', sans-serif; font-weight: 500; font-size: 12px; line-height: 1.4; letter-spacing: 0.2px; }

/* Overline — Nav bar labels */
.text-overline { font-family: 'Roboto', sans-serif; font-weight: 500; font-size: 10px; line-height: 1.4; letter-spacing: 0.2px; }
```

## Related

- [voice-and-tone.md](./voice-and-tone.md) — copy rules (sentence case, button caps, ampersand)
- [tokens/text.md](./tokens/text.md) — text colors (separate from typography)
- [spacing.md](./spacing.md) — spacing scale (used for line-heights via `space-medium-*`)
