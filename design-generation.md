# Design Generation Rules

Rules for generating new designs from PRDs, wireframes, mockups, or screenshots — always grounded in the Glints Aries Design System.

---

## The whole point — read this first

**The job is to map intent and logic to Aries — never to copy the source's visual style.**

The user can replicate any visual themselves with a hex picker; that's not what design generation is for. The value of using Glints DS generation is that the output is a *correct Aries rendering of the same product intent*. If the input is a streamer-jobs category page in a Chinese app, the output is "what does Aries say a category landing page looks like, populated with this content?" — **not** "make Aries look like this image."

Concretely:

- **Don't copy:** colors, gradients, shadows, exact button shapes, custom illustration styles, source-app brand identity.
- **Do copy:** what kind of screen this is, what user task it serves, what content fields appear (title, salary, tags, location, recruiter, CTA), what the navigation sequence is, what states must exist (empty / loading / error).
- **Always render with:** Aries components as published, Aries tokens, Aries typography, Aries shapes (e.g. `CTA Button` is rounded rectangle `8px`, never pill — see [form/button.md](./form/button.md)).

If you find yourself thinking *"the source has a teal CTA, let me find a teal token"* or *"the source has a pill button, let me round the CTA all the way"* — you've drifted. The right thought is *"the source has a primary action — Aries' primary action is `CTA Button` Solid Primary, which is `Background/action01` (#1A73E8) at radius `8px`. Use that."*

Use the **existing component as published**. If the DS already defines states, sizes, intents — use them. Don't invent a new shape, a new variant, or a new token to "make it look more like the source." The component is the answer; the source is just the brief.

---

## Input Types

| Input | Description | What you copy from it |
|---|---|---|
| **PRD** | Plain-text product requirements / feature spec | Intent, content, flows, states |
| **Wireframe** | Low-fidelity sketch or block layout | Layout structure, hierarchy |
| **Mockup** | Mid-/high-fidelity visual draft (any tool) | Section ordering, content fields |
| **Real screen design** | Existing production UI screenshot | Same as mockup — never the visual style |

Detect the input type before starting — the audit step changes based on it (see Step 4).

> Across all four input types, the **visual style** of the output is determined by Aries — never by the source. The source contributes intent, content, and structure only.

---

## Core Rule — Always Use the Aries Design System

Every generated design **must** be expressed in terms of Aries components, tokens, and typography. Never invent a one-off color, custom button shape, or ad-hoc spacing.

### The input is a reference, not a target

When the input is a mockup or screenshot, treat it as a **structural and intent reference only** — copy the *layout, hierarchy, content types, and component roles*, never the *exact colors, gradients, shadows, or pixel values*. If the source uses a teal CTA and Aries' `Background/action01` is blue, render blue. If the source uses a lavender hero background, map it to the closest semantic Aries token (e.g. `Background/enticing_muted`) — do **not** sample the source hex.

A faithful Aries rendering that diverges visually from a non-Aries source is a **success**, not a regression.

### Mandatory references (load on every design task)

- **Components:** [components/](./components/), [form/](./form/), [feedback/](./feedback/), [chat/](./chat/), [navigation/](./navigation/) — search [`CLAUDE.md`](./CLAUDE.md) by task to load the right files
- **Tokens:** [tokens/background.md](./tokens/background.md), [tokens/text.md](./tokens/text.md), [tokens/border.md](./tokens/border.md)
- **Typography:** Aries text styles (Android / iOS) — see Figma "Text styles" in the right panel
- **Icons:** [icons.md](./icons.md)
- **Product psychology:** [learnings/product-psychology-skill.md](./learnings/product-psychology-skill.md) — use for UI decisions, search/suggestion logic, defaults, nudges, and reducing cognitive load
- **MCP workflow:** [figma-integration.md](./figma-integration.md)

### Rules of substitution (in priority order)

1. **Component first — always check Glints first, AS PUBLISHED.** Before drawing anything, search the relevant `.md` files (and Figma library via MCP) for an existing Aries component that fits the role. Use the existing component **with its published variants exactly as they exist** — including its shape, size, padding, and corner radius. Don't add a new shape (e.g. pill CTA), a new state, or a new size that the DS doesn't already define. The DS is the answer, not a starting point. **Only build something custom when no Aries component covers the role at all** — and in that case, still compose it from Aries tokens and primitives, never from raw hex.
2. **Token first — zero non-token colors.** No hardcoded hex, rgb, hsl, or named CSS color anywhere — including:
   - Decorative surfaces (hero backgrounds, banners, illustration tiles)
   - Avatar fallbacks and gradients
   - Floating buttons, overlays, scrims
   - Shadows and outlines
   Every color must map to a `Background/*`, `Text/*`, or `Border/*` token. If no semantic token fits, **stop and ask** — do not improvise a hex.
3. **Typography first.** No custom font sizes — use the Android/iOS text styles defined in Aries.
4. **Icons first.** No external icon libraries. Use names from [icons.md](./icons.md). Custom Glints icons (`glints-logo-fill`, `vip-crown`, `graduation-hat-line`, `notification-badge`) come from MCP, never from public CDNs.
5. **No mid-component customization.** Variants (size, state, intent) must come from the component's published variants — do not override fills, borders, or spacing on an instance.
6. **New components, when unavoidable, still inherit the system.** If you must create a net-new component (no Aries equivalent exists), it must:
   - Use only `Background/*`, `Text/*`, `Border/*` tokens for color
   - Reuse Aries spacing, radius, and typography scale
   - Be flagged in the audit output as `🆕 New component: <name> — reason: <why no Aries fit>` so the user can review it before any Figma push

### Anti-pattern audit gate (run before Step 4)

Grep the HTML preview for any of these — every hit is a violation:

- `#[0-9a-fA-F]{3,8}` outside the `:root` token map
- `rgb(`, `rgba(`, `hsl(` outside the `:root` token map
- CSS named colors (`white`, `black`, `red`, etc.) anywhere
- `linear-gradient(` / `radial-gradient(` with raw color stops (gradients must reference token CSS variables, or be removed if no token-based equivalent exists)
- Inline style `color:` / `background:` with literal values
- `border-radius: 999px`, `border-radius: 50%`, or any radius that overrides a published component's shape (e.g. CTA Button is `8px` — pillifying it is wrong, use `Floating Button` instead)

If the grep is non-empty, fix every hit before producing the audit.

---

## Step 1 — Read the input & list intents

Before drawing anything:

1. Identify the input type (PRD / wireframe / mockup / screenshot).
2. Extract a concrete list of **screens**, **flows**, and **states** the design must cover (empty / loading / error / success / disabled).
3. List every **piece of content** required (titles, body copy, CTAs, microcopy, error messages).
4. List every **interaction** (taps, navigations, form submissions, dismissals).
5. Identify the key **user decision** on each screen and apply [`learnings/product-psychology-skill.md`](./learnings/product-psychology-skill.md): reduce choices, prefer recognition over recall, delay complexity, make defaults reversible, and keep every visible section distinct.
6. Resolve ambiguities by asking — do **not** fill gaps with assumed copy or behavior.

> If the input is a screenshot, also capture the screen's **section ordering** and **visual hierarchy** at this stage so the audit step has a baseline.

---

## Step 2 — Map intents to Aries components & tokens

For each intent from Step 1:

1. Find the matching component in [`CLAUDE.md`](./CLAUDE.md)'s task index.
2. Load that component's `.md` file and read its variants, sub-components, and usage rules.
3. Pick the correct semantic tokens (background / text / border) — pair them per the .md "Color Pairing" tables.
4. Pick the correct typography tier (heading / body / caption) per Aries Text styles.
5. Note any required Backdrop, Header, or wrapper component (e.g. Bottom Sheet always needs Backdrop).
6. Map product-psychology decisions to UI behavior before styling:
   - default state vs. typing / active state
   - autocomplete vs. recent history vs. discovery suggestions
   - keyword suggestions vs. filter values
   - recognition cues such as entity labels (`Position`, `Skill`, `Company`)
7. Flag anything that has **no Aries equivalent** — escalate before improvising.

---

## Step 3 — Generate HTML Preview First (before Figma)

**Always render an HTML preview before committing the design to Figma.** HTML is faster to iterate on, easier to audit visually, and keeps the Figma file clean of throwaway exploration.

### HTML preview rules

- Use **semantic tokens as CSS custom properties** matching the naming in [figma-integration.md](./figma-integration.md):
  - `Background/action01` → `--color-bg-action-primary`
  - `Text/danger` → `--color-text-danger`
  - `Border/inputBox_active` → `--color-border-input-focus`
- Match Aries typography sizes and line-heights from the Figma text styles.
- Match Aries spacing/sizing — no arbitrary `margin: 17px`.
- Mark every node with a `data-component="..."` attribute naming the Aries component it represents (e.g. `data-component="Job Card"`, `data-component="CTA Button"`). This makes the audit step trivially mappable back to Figma.
- Render **all required states** for each component (default / hover / focus / disabled / loading / error / empty) — not just the happy path.
- Mobile viewport by default (Aries is mobile-first); add desktop only when the PRD requires it.
- Use real-looking content (job titles, names, salaries) — never `lorem ipsum`. Stick to copy from the PRD where given.

### What the preview must show

1. Each screen at full mobile width (390 × dynamic height).
2. Every interactive state side-by-side, labeled.
3. Every empty / error / loading variant.
4. Print-style: stack screens vertically with screen titles, so the whole flow is auditable in one scroll.

**Output location: always `previews/`** (project root). One file per screen, named after the screen (e.g. `previews/nearby-jobs.html`, `previews/job-detail.html`). Create the folder if it doesn't exist. Keep each file self-contained — inline CSS, no build step. Never write the preview to the project root or any other directory.

---

## Step 4 — Audit the Generated Design

Audit the HTML preview **before** any Figma push. Two paths depending on input type:

### Path A — Input is text-based (PRD / wireframe)

1. Re-read the PRD/wireframe.
2. Capture the generated HTML preview (`preview.html` rendered → screenshot per screen).
3. Build a checklist: **every requirement → did the preview cover it?**
   - Every screen present? ✅ / ❌
   - Every state present (empty/loading/error)? ✅ / ❌
   - Every CTA wired? ✅ / ❌
   - Every piece of copy from the PRD present (or asked-about)? ✅ / ❌
   - Every interaction reachable? ✅ / ❌
4. **List gaps explicitly** — do not silently fix them. Each gap = either (a) an item to add, or (b) a question for the user.
5. Cross-check token usage: grep the HTML for hardcoded hex, raw px, or non-Aries class names. Zero tolerance.

### Path B — Input is visual (mockup / screenshot)

1. Capture the generated HTML preview as an image.
2. Place it side-by-side with the input image.
3. Compare structurally:
   - Same screen sections, in the same order?
   - Same component types in each section (e.g. card vs list vs banner)?
   - Same hierarchy (heading sizes, emphasis)?
   - Same icons in the same positions?
   - Same states represented?
4. Compare tonally — colors should match the **semantic intent** of the original (e.g. red error → `Text/danger`), not the original's exact hex.
5. **Note every visual divergence** as either:
   - **Intentional** (Aries forces a different but equivalent component — fine)
   - **Unintentional** (drift / missed element — fix before proceeding)
6. If the input was a real production screen and the original visibly violates Aries (e.g. custom hex), keep the Aries-correct rendering and flag the divergence as an upgrade, not a regression.

### Output of the audit

A short audit report:

```
# Audit — <screen name>
Input type:    PRD | Wireframe | Mockup | Screenshot
Source ref:    <path or PRD section>

✅ Covered:
- <bullet>

❌ Missing / divergent:
- <bullet>  → action: add | ask | flag-as-upgrade

🟡 Token / component drift:
- <bullet>  → action: fix
```

Only after this audit shows zero ❌ and zero unresolved 🟡 should the design be pushed to Figma via the MCP write tools.

### Product-psychology audit

Also check the design against [`learnings/product-psychology-skill.md`](./learnings/product-psychology-skill.md):

- Does every visible section have a distinct job?
- Can the user recognize good options without remembering exact terms?
- Are filters visually separate from keyword suggestions?
- Are defaults helpful and reversible?
- Is the strongest suggestion first?
- Is the screen using fewer choices than before?
- Does every action provide feedback or a clear next state?

---

## Step 5 — Confirm with the user, then push to Figma

Pushing to Figma is a write to a shared design file — always require explicit user confirmation first.

1. **Show the audit summary** (✅ / ❌ / 🟡 from Step 4) and the HTML preview path.
2. **Ask the user** in the chat: *"Audit passes. Push these N screens / M components to Figma file `<file key>` under page `<page name>`? (yes / no)"*. List exactly what will be created or modified — frame names, parent page, component instances.
3. **Wait for an explicit affirmative** ("yes", "go", "push", "confirmed") in the chat. Silence, partial replies, or "looks good" without instruction = do not push.
4. Only then use the Figma MCP write tools per [figma-integration.md](./figma-integration.md):
   - Map every `data-component` attribute → Aries component instance
   - Use existing components — never paste raw styles
5. Verify the Figma render with `get_screenshot` and re-audit (cheap second pass).
6. Report back: link to the new node, screenshot, and any divergences from the HTML preview.

> A user approving one push does **not** authorize subsequent pushes. Re-confirm for each new screen, edit, or batch.

---

## Step 6 — Capture learnings (continuous learning loop)

If anything *surprised* you during this task — a component that didn't exist where you expected, a token mismatch, an MCP quirk, an audit miss that slipped through — record it in [`learnings/`](./learnings/) so the next run benefits.

See [`learnings/README.md`](./learnings/README.md) for the format. Trigger to write a learning:

- A search returned a false negative or false positive
- A `.md` claim turned out to be stale or contradictory
- An audit step missed something that the user later flagged
- A new pattern emerged that would have helped earlier
- The design system itself changed (component renamed, token added)

Skip if the run was unremarkable — learnings are signal, not journal.

---

## Anti-patterns — never do these

- ❌ Push to Figma before HTML preview + audit
- ❌ Hardcode a color "just for now"
- ❌ Build a "custom card" because the existing Job Card "doesn't quite fit"
- ❌ Skip empty/loading/error states on the assumption they'll be designed later
- ❌ Use Lorem ipsum or placeholder names — they hide hierarchy bugs
- ❌ Substitute a similar-looking component without checking the Aries .md (e.g. `Tag` vs `Chip`, `Bottom Sheet` vs `Dialog`, `Stepper` vs `Progress Bar`)
- ❌ Match a screenshot's exact hex when Aries has a semantic token for that role
- ❌ Silently fill in PRD gaps — always surface them as questions

---

## Related

- [CLAUDE.md](./CLAUDE.md) — task-to-file routing for Aries components
- [figma-integration.md](./figma-integration.md) — MCP workflow + token mapping conventions
- [tokens/background.md](./tokens/background.md), [tokens/text.md](./tokens/text.md), [tokens/border.md](./tokens/border.md) — semantic color tokens
- [icons.md](./icons.md) — icon system
