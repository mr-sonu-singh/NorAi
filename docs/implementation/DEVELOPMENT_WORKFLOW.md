# Development Workflow

This document outlines the end-to-end lifecycle for building frontend features at NorAI.

## Workflow Phases

### 1. Planning

Review the [Design Bible](../design/Design_Bible_v1.0.md) and [Component Roadmap](./COMPONENT_ROADMAP.md). Ensure the architecture is mapped before writing code.

- _Responsibility:_ Product / Core Architect

### 2. Design System & Tokens

Initialize or verify that the global CSS variables and design tokens are in place. This serves as the foundation.

- _Responsibility:_ Lead Engineer / Core Architect

### 3. Shared Components

Build reusable UI elements (Atoms and Molecules). Follow strict token usage. Handle all states (hover, focus, disabled).

- _Responsibility:_ Frontend Engineers / AI Agents

### 4. Pages & Layouts

Assemble components into full layouts using established `SectionWrappers`.

- _Responsibility:_ Frontend Engineers / AI Agents

### 5. Testing & Accessibility

Conduct keyboard navigation testing. Verify focus rings. Check Lighthouse scores. Ensure zero horizontal scroll on mobile.

- _Responsibility:_ QA / Engineers

### 6. Optimization

Implement native lazy-loading for images, check bundle sizes, and verify Core Web Vitals (LCP < 1.5s).

- _Responsibility:_ Performance Engineers

### 7. Launch

Final review against the [Frontend Masterplan Definition of Done](../design/Frontend_Masterplan_v1.0.md). Deployment to production.

- _Responsibility:_ Product Owner
