# Progress

Progress indicator components for multi-step flows and completion tracking.

> Specs verified against Figma (Aries UI Kit 2.0).

## Components

| Component | Type | Description |
|---|---|---|
| `Progress Bar` | component_set | Linear progress bar for completion % or upload progress |
| `Stepper` | component_set | Step indicator for multi-step flows (e.g. application, onboarding) |
| `Stepper/Indicator` | component | Individual step marker sub-component inside `Stepper` |
| `Wizard` | component_set | Full multi-step flow wrapper — combines `Stepper` with primary/secondary `CTA Button` for Next/Back navigation |
| `Indicator` | component | Step-position dot/marker (e.g. carousel pagination) |

## Stepper — verified specs

### Properties

| Property | Values | Default |
|---|---|---|
| **Steps** | `2`, `3`, `4`, etc. | 2 |

### Default specs

| | Value |
|---|---|
| Width | `360px` (default — fluid in screens) |
| Height | `6px` (auto-hugs — thin horizontal strip) |
| Padding | `0` |
| Gap (between segments) | `8px` (`space-small-8`) |
| Corner radius | `0` (the segments themselves may be rounded) |
| Active segment | `Background/action01` (#1A73E8) |
| Inactive segment | `Background/supplementary2` (#F3F3F3) |

## Usage Rules

- Use `Stepper` for flows with discrete numbered steps (e.g. "Step 1 of 3: Personal Info")
- Use `Progress Bar` for continuous progress values (profile completion %, file upload, video processing)
- `Stepper/Indicator` is a sub-component — only use it inside `Stepper`, never standalone
- Do not use both `Stepper` and `Progress Bar` for the same flow — pick one based on whether steps are discrete or continuous
- Use `Wizard` when a flow needs the full step-indicator + Next/Back navigation chrome — do not assemble it manually from `Stepper` + buttons

## When to Use Each

| Scenario | Component |
|---|---|
| Multi-step form (apply, onboarding) | `Stepper` |
| Profile completion percentage | `Progress Bar` |
| File / CV upload | `Progress Bar` |
| Questionnaire steps | `Stepper` |

## Related

- [Components → Loader](./loader.md) — for indeterminate loading (no progress value known)
- [Form → Button](../form/button.md) — step navigation uses CTA buttons (Next, Back)
