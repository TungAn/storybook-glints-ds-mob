# Learnings — Figma MCP

MCP-specific quirks: Asset search behavior, indexing lag, page-vs-component naming, write-tool gotchas.

---

### 2026-05-10 — Chrome-driven selection unblocks the "select first" error

**Context:** Fetching nodes from Aries via the Figma Dev Mode MCP. Three of six nodes (Spacing `11:1688`, Typography `17:210`, Voice & Tone `11181:351`) returned `"You currently have nothing selected. You need to select a layer first before using this tool."` even though I passed an explicit `nodeId`. Other nodes on the same file worked fine.

**Surprise:** I assumed the MCP plugin only listened to the **Figma desktop app**. It actually listens to whichever Figma viewport has focus — including the **web app in Chrome**. Driving Chrome (navigate to URL, click the frame title to select it) made the MCP call succeed against the same nodeId that previously errored. The desktop app didn't need to be touched.

**Lesson:** The "nothing selected" error is about the **active Figma viewport's selection**, not a missing nodeId. Any Figma window the user has open can satisfy it.

**Rule:** When `get_design_context` / `get_variable_defs` returns "nothing selected" for a valid nodeId, drive Chrome:
1. `navigate` to the file URL with `?node-id=X-Y`
2. Click the **frame title** (small text just above the frame on canvas) to select the parent frame — clicking inside selects a child text/shape instead
3. Confirm the URL updates with the new node-id and the right panel shows "Frame" properties
4. Re-fetch via MCP. Use the URL-resolved nodeId if the click landed on a sibling/parent — those are still the right semantic frames.

**Source:** Conversation 2026-05-10. Affected nodes: spacing → resolved as `12973:6982`; typography → `12980:2790` (Android) / `12980:2995` (iOS); voice → `12980:3388` (Voice Qualities) / `12980:4045` (Styling & Formatting).

---

### 2026-05-09 — Figma page name ≠ published component name

**Context:** Documenting the text-input component for `form/text-field.md`.
**Surprise:** The Figma *page* is named "Text Field", but the *published library component* is `Input Field`. Searching the Assets panel for "Text Field" does not return the component — only `Input Field`, `File Text`, and unrelated items.
**Lesson:** Page names are author-facing labels; component names are what designers and the MCP actually consume. Only the published component name matters for code/MCP references.
**Rule:** When documenting a component, always verify the name in **Assets panel search** (or Code panel of an instance), never from the page title in the left sidebar.
**Source:** Regression check, 2026-05-09 conversation.

---

### 2026-05-09 — Two distinct components can share confusingly similar names

**Context:** Updating `navigation/header.md` and `navigation/navigation-bar.md`.
**Surprise:** Aries has both `Navbar` (the bottom tab bar — Jobs / Nearby / Hub / Profile) **and** `Nav header` (the top app bar with title + back button). The .md files used `Navbar` for the top bar, which was wrong.
**Lesson:** "Navbar" in this design system is the bottom navigation, not the top — a naming choice that contradicts most other UI vocabularies.
**Rule:** When a component name sounds generic (`Navbar`, `Header`, `Card`, `Section`), confirm purpose by looking at the thumbnail in the Assets panel before referencing it in docs.
**Source:** Regression check, 2026-05-09 conversation.

---

### 2026-05-09 — Figma Assets search has indexing lag — false negatives are common

**Context:** Verifying whether `05. Expanding sheet` exists in the Aries library.
**Surprise:** A direct search for "Expanding" returned **zero results**, suggesting the component was deleted. Acting on that, I removed it from `bottom-sheet-dialog.md`. A later search for "Expanding sheet" (different query, ~1 minute later) returned it as the first result.
**Lesson:** Single empty-result queries from the Assets panel are not authoritative — the index is asynchronous and warm-cached differently per query.
**Rule:** Before concluding a component doesn't exist:
1. Try at least **two distinct query variants** (e.g. "Expanding" + "Expanding sheet" + "05.").
2. Wait 3–5 seconds after typing — the loading spinner can mask in-flight results.
3. Cross-check against the file's pages list and the Color Usage frame.
4. Never act destructively (delete a doc reference) on a single negative result.
**Source:** Regression check, 2026-05-09 conversation. Cost: one bad doc edit that had to be reverted.

---

### 2026-05-09 — Color Styles are listed top-down in the right panel; categories must be expanded individually

**Context:** Extracting the authoritative list of `Background/*`, `Text/*`, `Border/*` tokens.
**Surprise:** Token names are not exposed in the Variables modal — those are *primitive* variables (Blue-Brand, Blue-S100, etc.). The semantic tokens (`Background/normal`, `Text/danger`) live in the **Color styles** section of the right panel and only show after each category (Text / Icon / Background / Border / Overlay) is clicked open individually.
**Lesson:** Variables ≠ Styles in this Figma file. The .md docs reference styles, not variables.
**Rule:** For token verification, expand the right-panel **Color styles** categories one by one and read off the names. Do not use the Variables modal as a source of truth for semantic tokens.
**Source:** Token regression check, 2026-05-09 conversation.

---

### 2026-05-09 — Figma canvas text is WebGL — not accessible via DOM

**Context:** Trying to read the contents of the Color Usage table (a 1400 × 7246 frame with token-name + description rows).
**Surprise:** `read_page` and `get_page_text` returned only the Figma chrome (sidebar buttons, panel titles), not the canvas text content. Figma renders text on canvas, not as HTML, so accessibility-tree extraction yields nothing useful for design content.
**Lesson:** Don't try to scrape Figma canvas content via DOM tools. Use either screenshots (slow, OCR-required) or the right-panel style/variable lists (fast, structured).
**Rule:** For pulling token/component lists, prefer right-panel categories and Assets-panel search over canvas screenshots.
**Source:** Token verification attempt, 2026-05-09 conversation.

---

### 2026-05-09 — Frame screenshots at 11% zoom are unreadable; zoom-to-selection (`shift+2`) doesn't increase render zoom for very tall frames

**Context:** Trying to read the 7246px-tall Color Usage frame.
**Surprise:** `shift+2` zooms-to-fit, which for a 7246px frame caps at ~11% zoom — text is illegible. Repeated `+` key presses to zoom in were intercepted (zoom didn't change) when no canvas focus was set.
**Lesson:** Tall reference frames require either (a) clicking into a sub-frame first, then zoom-to-selection, or (b) reading from the structured panels rather than the canvas.
**Rule:** For reading long reference tables, navigate into the frame's child rows or use Assets-panel search with the field/token name.
**Source:** Token verification attempt, 2026-05-09 conversation.
