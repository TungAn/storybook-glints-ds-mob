# Glints Design System — Aries App UI Kit 2.0

Reference documentation for the Glints Aries App UI Kit 2.0. Load files based on the task at hand.

**Figma:** https://www.figma.com/design/r20p8eotJkuTxjmSXiYp0n/Aries-App---UI-Kit-2.0

---

## Always load for any Figma implementation task

- [`figma-integration.md`](./figma-integration.md) — MCP workflow, scoped search, token mapping
- [`design-generation.md`](./design-generation.md) — rules for generating designs from PRD / wireframe / mockup / screenshot, HTML-preview-first workflow, audit checklist, Figma-push confirmation gate
- [`learnings/README.md`](./learnings/README.md) — continuous-learning index. Skim the topic files relevant to your task before starting; append new learnings when something surprises you

---

## Components

> Sub-sections of the Figma Components page, separated by Divider.

| Task involves… | Load |
|---|---|
| Illustrations, logos, photos | [`components/illustration-imagery.md`](./components/illustration-imagery.md) |
| User or company profile pictures | [`components/avatar.md`](./components/avatar.md) |
| Inline status/promo messages | [`components/banner.md`](./components/banner.md) |
| Skill tags, salary tags, VIP/badge labels | [`components/tag.md`](./components/tag.md) |
| Job cards, company cards, profile cards, section wrappers, lists | [`components/card-section.md`](./components/card-section.md) |
| Horizontal separators between sections | [`components/divider.md`](./components/divider.md) |
| Zero-data screens, load failure screens | [`components/empty-error-state.md`](./components/empty-error-state.md) |
| Full-screen loading state | [`components/loader.md`](./components/loader.md) |
| Multi-step flow indicators, progress bars | [`components/progress.md`](./components/progress.md) |
| On/off toggle settings | [`components/switch.md`](./components/switch.md) |
| Quick filter chips, full-page filter panel | [`components/filter.md`](./components/filter.md) |
| Background overlay behind modals/sheets | [`components/backdrop.md`](./components/backdrop.md) |

---

## Form

> Glints Figma Form section.

| Task involves… | Load |
|---|---|
| CTA, floating, or upload buttons | [`form/button.md`](./form/button.md) |
| Auto-dismissing confirmation toasts | [`form/snackbar.md`](./form/snackbar.md) |
| Multi-select form controls | [`form/checkbox.md`](./form/checkbox.md) |
| Interactive filter/selection tags | [`form/chip.md`](./form/chip.md) |
| Single-value selection from a list | [`form/dropdown.md`](./form/dropdown.md) |
| Single-select option group | [`form/radio.md`](./form/radio.md) |
| Free-text or search input | [`form/text-field.md`](./form/text-field.md) |
| Numeric input (salary, OTP, PIN) | [`form/keyboard.md`](./form/keyboard.md) |
| Date, year, or list-value picker | [`form/picker.md`](./form/picker.md) |

---

## Feedback

> Glints Figma Feedback section.

| Task involves… | Load |
|---|---|
| Bottom sheets, expanding sheets, modal dialogs | [`feedback/bottom-sheet-dialog.md`](./feedback/bottom-sheet-dialog.md) |
| Field-level validation error messages | [`feedback/inline-error.md`](./feedback/inline-error.md) |

---

## Chat

> Glints Figma Chat section.

| Task involves… | Load |
|---|---|
| Chat message input field (bottom of chat screen) | [`chat/chat-box.md`](./chat/chat-box.md) |
| Individual message bubbles | [`chat/chat-bubble.md`](./chat/chat-bubble.md) |

---

## Navigation

> Glints Figma Navigation section.

| Task involves… | Load |
|---|---|
| Top app bar / navbar | [`navigation/header.md`](./navigation/header.md) |
| Bottom tab bar (app-level nav) | [`navigation/navigation-bar.md`](./navigation/navigation-bar.md) |
| Inline tab strip (within a screen) | [`navigation/tab.md`](./navigation/tab.md) |

---

## Tokens & Icons

| Task involves… | Load |
|---|---|
| Background fill colors | [`tokens/background.md`](./tokens/background.md) |
| Text / label colors | [`tokens/text.md`](./tokens/text.md) |
| Input / card border colors | [`tokens/border.md`](./tokens/border.md) |
| Icon colors (separate namespace from text colors) | [`tokens/icon.md`](./tokens/icon.md) |
| Any icon asset (catalog of names + sizes) | [`icons.md`](./icons.md) |

---

## Layout & Voice

| Task involves… | Load |
|---|---|
| Mobile frame size, viewport, safe areas | [`screen-size.md`](./screen-size.md) |
| Spacing / padding scale (4-point grid) | [`spacing.md`](./spacing.md) |
| Typography scale (family, size, weight, line-height) | [`typography.md`](./typography.md) |
| Copy / voice & tone (capitalization, punctuation, emoji) | [`voice-and-tone.md`](./voice-and-tone.md) |

---

## Core Rules

1. Never hardcode colors — use `Background/*`, `Text/*`, `Border/*`, `Icon/*` tokens. Hex values are listed in each `tokens/*.md` file; never substitute another hex.
2. **Input is reference, not target.** When mocking from a screenshot, copy structure and intent — never the source's exact colors. A teal-CTA source becomes a `Background/action01` (#1A73E8) blue CTA in Aries.
3. Always search the Aries library before building anything custom. Components first, tokens first, typography first, icons first — see `design-generation.md`.
4. Never install icon packages — icons come from the Figma MCP payload.
5. Use `localhost` asset URLs from MCP directly — never replace with placeholders.
6. Sub-components (e.g. `Bottom Sheet/Header`, `Stepper/Indicator`) only go inside their parent — never standalone.
7. Follow the MCP flow in `figma-integration.md` for every implementation task.
8. For design generation (PRD / wireframe / mockup / screenshot → new design), follow `design-generation.md`: HTML preview first, audit against the input, **ask the user before pushing to Figma**, then push.
9. After any non-trivial run, append to `learnings/` if something surprised you — see `learnings/README.md` for the format and promotion path.
