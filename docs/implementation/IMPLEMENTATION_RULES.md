# Implementation Rules

This handbook outlines the non-negotiable rules for frontend development on the NorAI website.

## Priority Hierarchy
When resolving conflicts, follow this order of authority:
1. **[Design Bible](../design/Design_Bible_v1.0.md)** (Strategic & Visual Rules)
2. **[Frontend Masterplan](../design/Frontend_Masterplan_v1.0.md)** (Implementation Build Order)
3. **Existing Codebase** (Established Patterns)
4. **New Code** (Only when absolutely necessary)

## Core Development Rules

### 1. Token Strictness
- **Never invent colors.** Use only the semantic scales (e.g., `primary-50`, `accent-600`) defined in the tokens.
- **Never invent spacing.** Use only multiples of the base-8 scale (e.g., `space-4` for 32px).
- **Never hardcode typography.** Always apply the established typographic scale (`body-md`, `display-sm`).

### 2. Component Reusability
- **Reuse components.** If a pattern exists (e.g., a card, a button), do not recreate it.
- **No duplicate components.** A generic `<button class="...">` is unacceptable if `<Button>` exists.
- **No breaking design consistency.** Never deviate from the styling rules to fulfill a layout need.

### 3. Execution Quality
- **Mobile-first.** Write styles for mobile viewports (375px) first, scaling up via `min-width` breakpoints.
- **Accessibility-first.** Semantic HTML is mandatory. Every page must use proper landmarks (`<main>`, `<nav>`).
- **One H1 per page.** Strictly enforced for SEO and screen-reader logic.

> [!WARNING]
> Any pull request or AI generation that introduces hardcoded colors, arbitrary spacing pixels, or fails to meet accessibility guidelines will be immediately rejected.
