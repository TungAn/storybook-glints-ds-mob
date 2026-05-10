# Learnings — Components

Component selection, sub-component nesting, variant pitfalls, ambiguous names.

---

### 2026-05-09 — `Tab group` is shared between bottom-nav and inline-tabs contexts; verify variant before referencing

**Context:** Reading `navigation/navigation-bar.md` and `navigation/tab.md`.
**Surprise:** Both files claimed `Tab group` as their component, but only one component exists by that name. Aries actually splits this into `Navbar` (bottom tab bar) and `Tab group` (inline screen-level tab strip). The shared name caused confusion.
**Lesson:** When two semantically-different patterns appear to share a component, dig into Figma — the design system probably has two different components with similar-sounding names, not one polymorphic component.
**Rule:** Before referencing a component in two different docs, click into its variants in Figma and confirm whether one component covers both use cases or they are distinct components.
**Source:** 2026-05-09 verification pass.

---

### 2026-05-09 — Sub-component naming in `.md` uses `Parent/Child`, but Figma displays only the leaf

**Context:** Searching for `Stepper/Indicator`, `Bottom Sheet/Header`, `Job Card/Job Location`, etc.
**Surprise:** The `.md` docs use slash-notation to express nesting (`Stepper/Indicator`), but Figma's Assets panel and search results display only the leaf name (`Indicator`, `Header`, `Job Location`). Searching the slash form returns no results.
**Lesson:** Slash-notation in our docs is a *convention for indicating parent context*, not a literal Figma name.
**Rule:** When searching Figma, search the leaf name only. When writing docs, keep the slash form for human readability — but understand it's not the queryable name.
**Source:** 2026-05-09 verification pass.

---

### 2026-05-09 — A "fuzzy" Assets search returns matches outside the queried prefix

**Context:** Searching "Bordered" for `Bordered Item`.
**Surprise:** The result set included `05. Expanding sheet`, `Backdrop`, `Bookmark`, `Toggle`, `Quick Filters`, etc. — clearly a fuzzy, multi-token match.
**Lesson:** Figma Assets search is fuzzy and inclusive; presence in results does not mean the name *contains* the query. Conversely, absence is not conclusive (see `figma-mcp.md` indexing-lag note).
**Rule:** Treat search results as a candidate list, not a filter. Verify the exact name from the result label before quoting it.
**Source:** 2026-05-09 verification pass.

---

### 2026-05-09 — `Profile Nudge` and `Nudge card` may be distinct components — don't assume duplicates

**Context:** Updating `card-section.md`.
**Surprise:** Two components appear in the library with similar names. Without opening both, it's impossible to tell whether one is deprecated, they're duplicates, or they serve different states.
**Lesson:** Apparent duplicates often aren't — design systems accumulate variants for different states or contexts.
**Rule:** When two similar names appear, document both with a note ("verify variants in Figma") rather than picking one. Escalate to the design team for clarification rather than silently consolidating.
**Source:** 2026-05-09 verification pass.

---

### 2026-05-09 — Empty / Error states are real components, not just illustration + custom layout

**Context:** Reading `components/empty-error-state.md`, which listed only `Backdrop`.
**Surprise:** Aries publishes `Empty State`, `Error State`, and `Error Warning` as proper components. Without these listed, implementers would assemble custom layouts each time.
**Lesson:** When a design pattern is common (empty / error / loading / success), the design system almost certainly has a published component for it — the absence in docs is more likely a doc gap than a system gap.
**Rule:** Before authoring custom-built equivalents for "obvious" patterns, search Figma for the pattern name. Add the discovered component to the relevant `.md`.
**Source:** 2026-05-09 verification pass.
