# AI Agent Guide

This document defines the strict operating parameters for AI coding agents contributing to the NorAI frontend repository.

## How to Read the Documentation

Before generating any code, agents must digest context in this specific order:

1. **[Design Bible](../design/Design_Bible_v1.0.md):** The absolute truth for visual/strategic intent.
2. **[Frontend Masterplan](../design/Frontend_Masterplan_v1.0.md):** The rules for architecture.
3. **[Design Token Reference](../architecture/DESIGN_TOKEN_REFERENCE.md):** The only values you are allowed to use for styling.

## Priority Hierarchy

If conflicts arise between instructions:
`Design Bible > Masterplan > Existing Code > Agent Inference`

## Coding Philosophy

- **Do not invent.** Do not generate custom hex colors, margin pixel values, or font sizes. Map everything to existing variables.
- **Do not duplicate.** If a `Button` component exists in `/components`, import it. Never write `<button class="p-4 bg-blue-500 rounded">`.
- **Semantic HTML over DIV soup.** Use `<article>`, `<nav>`, `<aside>`, and `<figure>`.

## Component Reuse Rules

### When to use existing components:

Always. If a layout requires a card, use the closest existing Card variant. Use variant props (e.g., `variant="ghost"`) to modify behavior rather than duplicating the component.

### When to create new components:

Only when a required UX pattern fundamentally does not exist (e.g., a complex data visualization table) AND it is explicitly authorized in the roadmap.

## Accessibility Requirements

- You must add `aria-label` to all icon-only interactive elements.
- You must ensure form inputs have associated `<label>` tags.
- Focus rings are non-negotiable.

## Review Checklist (Definition of Done)

Before submitting code, an AI agent must verify:

- [ ] No hardcoded colors (`#hex`, `rgb()`).
- [ ] No hardcoded spacing pixels (`margin: 24px`).
- [ ] Renders correctly without horizontal scroll on mobile (375px).
- [ ] Keyboard navigable.

## Common Mistakes

- _Mistake:_ Using a generic `<div>` for a clickable card. _Correction:_ Use an `<a>` or `<button>` wrapper for accessibility.
- _Mistake:_ Attaching animation logic directly to a `scroll` event. _Correction:_ Use `IntersectionObserver`.
- _Mistake:_ Using arbitrary dark grays for backgrounds. _Correction:_ Use `var(--primary-800)` or `bg-primary-800`.
