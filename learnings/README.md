# Learnings — Continuous Knowledge Base

A growing record of patterns, gotchas, and best practices discovered while working with the Glints Aries Design System and the Figma MCP. Read this before starting non-trivial work; append to it whenever something surprises you.

## How it's organized

One file per topic. Inside each file, **append-only** entries in reverse-chronological order (newest at top), so the most recent learnings are read first.

Topics:

| File | Scope |
|---|---|
| [`figma-mcp.md`](./figma-mcp.md) | MCP quirks: Asset search behavior, indexing lag, page-vs-component naming, write-tool gotchas |
| [`tokens.md`](./tokens.md) | Color/typography/spacing token mapping, missing tokens, naming conventions |
| [`components.md`](./components.md) | Component selection, sub-component nesting, variant pitfalls, ambiguous names |
| [`audit.md`](./audit.md) | Audit-step misses, false-positive completions, screenshot-vs-PRD comparison tricks |
| [`design-generation.md`](./design-generation.md) | HTML-preview pipeline, state coverage, copy / data realism |
| [`docs-hygiene.md`](./docs-hygiene.md) | Keeping `.md` docs consistent — internal contradictions, stale "not found" claims, etc. |

## Entry format

Every entry uses this template:

```markdown
### YYYY-MM-DD — Short imperative title

**Context:** What was happening / what task triggered the discovery.
**Surprise:** What turned out to be different from the assumption.
**Lesson:** The generalized takeaway in one sentence.
**Rule:** Concrete behavior change going forward.
**Source:** PR / conversation / user feedback / agent run.
```

### Why this format

- **Surprise** forces you to write down what was *non-obvious* — if there was no surprise, there's no learning
- **Lesson** is the portable, reusable insight (one sentence so it can be quoted)
- **Rule** is the actionable change — without it the learning is a museum piece
- **Source** anchors the entry in time and lets future you reconstruct context

## When to write a learning

Trigger words from a session that suggest a learning is due:
- "I assumed X but it was Y"
- "the search returned nothing but the thing exists"
- "the doc said X doesn't exist but it does"
- "the user pointed out I missed Z"
- "the second time I tried it worked, the first time it silently failed"
- "two components have confusingly similar names"

## When NOT to write a learning

- Routine successful runs — no surprise, no learning
- One-off bugs in unrelated tools (file in the appropriate repo's issue tracker, not here)
- Personal preferences — only general, transferable rules belong here
- Things already in `CLAUDE.md`, the component `.md` files, or `figma-integration.md` — don't duplicate

## How to consume

- **At session start** for any non-trivial design task: skim the topic files relevant to your task. The newest entries (top of each file) are usually the most load-bearing.
- **When stuck**: search across `learnings/` for the symptom you're hitting before re-deriving the fix.
- **When updating a `.md` doc**: check `docs-hygiene.md` first to avoid repeating known mistakes.

## How to grow

- Append to the right topic file. Don't create new files unless a genuinely new topic emerges.
- If an entry becomes obsolete (component renamed, MCP behavior changed), don't delete — strike it through and add a follow-up entry pointing to the change. The history is the value.
- If two entries say the same thing, merge them and update the date to the most recent.

## Promotion path

When a learning has fired more than ~3 times across runs, promote it from `learnings/` into the canonical doc (`CLAUDE.md`, `figma-integration.md`, `design-generation.md`, or the relevant component `.md`). Leave a back-reference in the learning entry: `**Promoted to:** path/to/doc.md#section`.
