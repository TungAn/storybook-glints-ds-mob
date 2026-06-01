# Product Psychology Skill

Reusable product-design guidance distilled from the psychology cheat sheet provided in `/Users/user/Downloads/psychology-cheat-sheet.pdf`.

Use this when a design task needs better product logic, suggestion behavior, decision structure, onboarding, search, form completion, or user motivation. The goal is to apply psychology ethically: reduce effort, increase clarity, and help users make better decisions. Do not use these patterns to pressure, deceive, or hide tradeoffs.

## Core Lens

Before designing a flow, identify the user decision:

| Question | Why it matters |
|---|---|
| What is the user trying to decide? | Prevents visual work from drifting away from the actual behavior. |
| What can be recognized instead of recalled? | Recognition is easier than memory recall. |
| What can be delayed until needed? | Progressive disclosure reduces cognitive load. |
| What default helps without trapping the user? | Defaults reduce effort, but must remain reversible. |
| What feedback confirms the action? | Users need to know what changed after they act. |
| What should be removed? | Too many choices increase decision friction. |

## Design Rules

### 1. Reduce choice overload

Use when a screen has too many options, filters, CTAs, or categories.

- Show the smallest useful set first.
- Prefer 3-7 high-confidence suggestions over long undifferentiated lists.
- Group related options together.
- Hide advanced controls until the user shows intent.
- Remove duplicate sections that do the same job.

Applied examples:

- Search default state should not show both `Try searching for` and `Popular searches` if both start a query.
- Filter panels should group fields by decision, not by database schema.
- Form steps should reveal later complexity only after earlier intent is clear.

Related principles: Hick's Law, Miller's Law, Cognitive Load, Progressive Disclosure, Chunking.

### 2. Prefer recognition over recall

Use when the user has to remember a keyword, company, skill, or previous filter setup.

- Show recent searches as recognizable items.
- Keep recent search labels simple; restore attached filters in behavior, not as competing visible chips.
- Use autocomplete after typing starts.
- Include entity type labels when the same keyword can mean different things.

Applied examples:

- Empty search: show recent searches and smart starter keywords.
- Typing state: replace default suggestions with autocomplete.
- Autocomplete rows can distinguish `Position`, `Skill`, and `Company`.
- Recent search rows can auto-restore the latest filter context without showing every filter.

Related principles: Recognition Over Recall, Availability Heuristic, Internal Trigger, Commitment and Consistency.

### 3. Make intent visible before action

Use when users may be unsure what tapping does.

- Add clear signifiers: icons, labels, active states, and button copy.
- Use feedforward: show the likely outcome before the action.
- Use feedback: confirm the result after the action.
- Make destructive or broad actions explicit.

Applied examples:

- Autocomplete rows should show the entity type so the user knows whether they are searching a job title, skill, or company.
- A selected filter chip should visibly differ from an unselected chip.
- A submit CTA should appear only when the screen is in an actionable state.

Related principles: Signifiers, Feedforward, Feedback Loop, External Trigger, Visual Hierarchy.

### 4. Anchor attention deliberately

Use when important content is being missed or sections compete visually.

- Put the highest-value option first.
- Keep the ending of a list useful because users remember first and last items better.
- Use contrast sparingly for the next best action.
- Avoid making every item visually loud.
- Use separators only when they clarify grouping; remove them when they create clutter.

Applied examples:

- Put exact or high-confidence matches above broader suggestions.
- In autocomplete, place `Position` matches before `Skill`, then `Company`, unless product data proves another order.
- Remove list dividers if spacing and alignment already communicate row boundaries.

Related principles: Anchoring Bias, Visual Hierarchy, Contrast, Serial Position Effect, Von Restorff Effect.

### 5. Personalize without over-explaining

Use when the product has useful history, preferences, or filters.

- Let prior user behavior reduce effort.
- Do not expose every personalization rule in the UI.
- Keep the visible label focused on the user's mental model.
- Make personalization reversible.

Applied examples:

- Recent searches can restore the latest matching filters automatically.
- A resume/profile completion nudge should reflect the user's missing fields, not a generic checklist.
- Location-aware suggestions should be clear enough to trust but not noisy.

Related principles: Familiarity Bias, Endowment Effect, Self-Initiated Triggers, Default Bias.

### 6. Avoid dark-pattern pressure

Use this as a guardrail whenever applying motivation or urgency.

- Use scarcity only when supply is real and relevant.
- Do not create false urgency.
- Do not overuse loss framing.
- Do not make defaults hard to undo.
- Avoid nudges that trap users into low-quality actions.

Related principles: Scarcity, Loss Aversion, Reactance, Backfire Effect, Confirmation Bias.

## Search Pattern

Use this pattern for job search or candidate search screens.

### Empty state

Show:

1. `Recent searches`
   - plain keyword rows
   - no visible filter chips
   - restore latest filter context automatically on tap
2. `Try searching for`
   - keyword/category starters only
   - no filter values mixed into this cluster

Avoid:

- duplicated `Popular searches` if `Try searching for` already covers discovery
- showing filter chips as search keywords
- showing autocomplete before the user types

### Typing state

Replace the empty state with autocomplete rows.

Recommended row structure:

| Left | Main text | Right |
|---|---|---|
| icon | matched suggestion | entity type |

Entity types:

- `Position`
- `Skill`
- `Company`

Suggested ordering:

1. exact or high-confidence position match
2. related position match
3. exact skill match
4. related skill match
5. company match

Use no more than 5-7 rows unless the user scrolls.

### Result handoff

When the user selects:

- `Position`: search jobs by title intent.
- `Skill`: search jobs where the skill is relevant.
- `Company`: search company/employer result first, then jobs at that company.
- recent search: restore its latest filter context silently.

## Audit Checklist

Before finalizing a design:

- Does every visible section have a distinct job?
- Can the user recognize good options without remembering exact terms?
- Are filters visually separate from keyword suggestions?
- Are defaults helpful and reversible?
- Is the strongest suggestion first?
- Is the screen using fewer choices than before?
- Does every action provide feedback or a clear next state?
- Is any urgency/scarcity claim factual?

## Source Notes

The source PDF is a compact reference of 106 psychology principles grouped around information, meaning, time, and memory. This file intentionally summarizes and operationalizes the ideas for Glints product/design work instead of reproducing the cheat sheet.
