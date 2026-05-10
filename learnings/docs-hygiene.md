# Learnings — Docs Hygiene

Patterns for keeping the `.md` reference files internally consistent and free of stale claims.

---

### 2026-05-09 — "Not found in Aries library" claims rot — re-verify before trusting

**Context:** Verifying `text-field.md`, `chat-bubble.md`, `inline-error.md`.
**Surprise:** All three files contained statements like "No standalone X component was found in the Aries library." All three were wrong — `Text Field` (as `Input Field`), `Chat Bubble`, and `Error` exist as published components. The claims were probably accurate when written but the library evolved.
**Lesson:** Negative existence claims in docs decay fast — design system libraries grow, and "doesn't exist yet" silently becomes "does exist now."
**Rule:**
1. When you see a "X was not found" note in a `.md`, treat it as a **claim to re-verify**, not a fact.
2. Prefer documenting what *does* exist over what *doesn't* — positive claims are more durable.
3. If you must record a gap, include the **date** and a **verification command** (e.g. "as of 2026-05-09, search for `X` in the Aries library returned no results — re-check before relying on this").
**Source:** 2026-05-09 verification pass.

---

### 2026-05-09 — Internal contradictions creep in from piecemeal edits

**Context:** Reviewing `tokens/border.md`.
**Surprise:** The same file said `Border/danger` IS the dedicated error token (lines 14, 36) **and** "no dedicated border token — derive from `Text/danger`" (line 47). Both claims came from different edit passes and never reconciled.
**Lesson:** Each edit pass tends to touch one section. Without an end-of-edit consistency check, contradictions accumulate.
**Rule:** After editing a `.md` file, search the file for keywords related to the change (e.g. `danger`, the changed token name, the changed component name) and read every match — not just the section you edited.
**Source:** 2026-05-09 verification pass.

---

### 2026-05-09 — Component-list tables drift from reality unless re-audited

**Context:** Checking `tokens/background.md` (claimed 13 tokens) and `components/empty-error-state.md` (claimed only `Backdrop`).
**Surprise:** `background.md` was missing **16 tokens** that exist in Figma; `empty-error-state.md` was missing the actual `Empty State` and `Error State` components, listing only the helper `Backdrop`.
**Lesson:** Tables of "all components" or "all tokens" silently go stale as the design system grows. Without a dated audit, they become a partial subset masquerading as a complete list.
**Rule:**
1. Don't claim a list is exhaustive unless you've just audited it.
2. Run a regression check (compare each `.md` list against current Figma) at least quarterly, or after any major design-system release.
3. If listing a subset deliberately, label the table "Common tokens" / "Primary components" — not the unqualified "All".
**Source:** 2026-05-09 verification pass.

---

### 2026-05-09 — When updating a `.md`, update **all** cross-references in the same edit

**Context:** Editing `bottom-sheet-dialog.md` to remove `05. Expanding sheet` (which was later restored).
**Surprise:** Removing the row from the components table left **two other references** in the file (the "When to Use Each" row and a Usage Rule bullet) that I had to clean up in follow-up edits. A duplicate row was also accidentally introduced in one pass.
**Lesson:** A component name typically appears in 3–5 places within its primary `.md` (component table, usage table, rules, anatomy diagram, related links). Touching one without the others creates inconsistency.
**Rule:** Before saving any `.md` edit that adds/removes/renames a component or token, grep the file for the old + new names and inspect every match. Aim to land all changes in one edit pass.
**Source:** 2026-05-09 edit/regression cycle.
