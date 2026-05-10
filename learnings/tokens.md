# Learnings — Tokens

Color/typography/spacing token mapping, missing tokens, naming conventions.

---

### 2026-05-09 — `Background/inputBox_active` exists despite past docs claiming it doesn't

**Context:** `tokens/background.md` claimed *"`Background/inputBox_active` was not found in the Aries App library search. Do not use it."*
**Surprise:** The token exists. The .md was written when search returned no result (probably indexing lag, see `figma-mcp.md`), and the false claim then leaked across files: `tokens/border.md` referenced `Background/inputBox_active` correctly while `tokens/background.md` told readers not to use it. Internal contradiction across files.
**Lesson:** Negative claims about token existence rot fast and propagate inconsistency across files. One stale "doesn't exist" claim creates many downstream conflicts.
**Rule:**
1. Never document a token as nonexistent — either it exists (document it) or you skip it.
2. If you genuinely can't find a token, ask before writing "doesn't exist" — and date the search so the next reader knows when to re-verify.
**Source:** 2026-05-09 token regression check.

---

### 2026-05-09 — Background tokens have a richer category structure than the original docs reflected

**Context:** Auditing `tokens/background.md`.
**Surprise:** The file documented 13 tokens. Figma actually has 29. Missing groups included supplementary surfaces (`supplementary`, `supplementary2`), `_muted` variants of every semantic color (`success_muted`, `enticing_muted`, `discount_muted`), input states (`inputBox_active`, `inputBox_disabled`, `inputSelect_*`), and `action_disabled`. Plus `primary_*` is a separate axis from `action01/02`.
**Lesson:** Token taxonomies are usually richer than what's listed in early docs — `_bright/_muted` pairs and `_active/_disabled` state suffixes are common patterns to look for.
**Rule:** When auditing tokens, expect every semantic color to have at least `_bright` + `_muted` variants, every interactive surface to have `_active` + `_disabled` states, and brand colors to have `primary_*` separate from numeric `action0N`.
**Source:** 2026-05-09 token regression check.

---

### 2026-05-09 — Variables panel ≠ Color Styles panel — semantic tokens live in Styles

**Context:** Looking for the authoritative list of `Background/*` tokens.
**Surprise:** The Variables modal (Colors collection) shows 43 *primitive* color variables (Blue-Brand, Blue-S100, Yellow-S97, etc.) — NOT the semantic tokens. Semantic tokens (`Background/normal`, `Text/danger`) live in **Color styles** in the right panel.
**Lesson:** Variables = primitives (raw color values, theming axis). Styles = semantic tokens (consumable by components and code). They're indexed separately.
**Rule:** For semantic-token verification, use the right-panel **Color styles** categories. For primitive-color verification (e.g. checking the underlying hex of a brand color), use the Variables modal. Don't conflate the two.
**Source:** 2026-05-09 token regression check.

---

### 2026-05-09 — Token-to-CSS naming convention should remain stable across `.md` edits

**Context:** Mapping Figma `Background/action01` → `--color-bg-action-primary` per `figma-integration.md`.
**Surprise:** No surprise here — the convention is solid. Recording it as a positive reinforcement: the prefix-by-category + kebab-case + role-name pattern (`bg-action-primary`, `text-danger`, `border-input-focus`) reads cleanly in code and round-trips back to the Figma name.
**Lesson:** Stable mapping conventions are worth their weight. Don't re-invent them per file or per project.
**Rule:** All HTML previews, generated CSS, and code references must use the naming pattern in `figma-integration.md`. If a new token category appears, extend the convention rather than introducing a new pattern.
**Source:** Reinforcement from 2026-05-09 token regression check.
