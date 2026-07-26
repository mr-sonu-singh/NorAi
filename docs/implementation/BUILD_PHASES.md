# Build Phases

An actionable engineering roadmap derived from the Frontend Masterplan.

## Phase 1: Project Foundation & Design System Tokens

- **Status:** ✅ Complete
- **Completed:** 27 July 2026
- **Reviewed:** Architecture Review ✅ | Code Review ✅ | Build Verification ✅ | Lint Verification ✅
- **Frozen:** Yes
- **Objective:** Establish repository structure, Next.js 15 App Router shell, layout landmarks, providers, and codify the visual design token system.
- **Deliverables:** Compile-clean Next.js 15 repository shell with custom CSS variables, Tailwind CSS v4 `@theme` mappings, foundation primitives (`Container`, `Heading`, `Text`, `Section`, `Grid`, `Stack`, `VisuallyHidden`), SEO metadata helpers, and strict TypeScript/ESLint setups.
- **Definition of Done:** All tokens from the Design Reference are accessible as CSS variables and Tailwind utilities; builds & lints clean with zero errors or warnings.

## Phase 2: Shared UI Components

- **Objective:** Build the reusable building blocks.
- **Tasks:** Build Buttons, Cards, Inputs, Typography wrappers, and Icons.
- **Deliverables:** A functioning component library.
- **Dependencies:** Phase 1.
- **Definition of Done:** Components render flawlessly across all states (hover/focus/active).

## Phase 3: Layouts & Routing

- **Objective:** Establish global structure.
- **Tasks:** Build `Header`, `Footer`, and `SectionWrapper`. Setup route structure.
- **Deliverables:** Global layout templates.
- **Dependencies:** Phase 2.
- **Definition of Done:** Navigation works; responsive layout wrappers function correctly.

## Phase 4: Homepage Assembly

- **Objective:** Launch the primary conversion funnel.
- **Tasks:** Assemble homepage sections (Hero, Showcase, Proof, CTA).
- **Deliverables:** Functional Homepage.
- **Dependencies:** Phase 3.
- **Definition of Done:** Animations fire on scroll, responsive down to 375px.

## Phase 5: Core Pages (Products, About, Contact)

- **Objective:** Build primary site content.
- **Tasks:** Implement `/products` hub, Product detail template, About timeline, Contact form logic.
- **Deliverables:** 4 primary pages.
- **Dependencies:** Phase 4.
- **Definition of Done:** Forms submit properly; product cards expand/link correctly.

## Phase 6: Content Hub (Blog & Utility)

- **Objective:** Implement content architecture.
- **Tasks:** MDX/CMS integration, Blog Hub, 404, Privacy pages.
- **Deliverables:** Blog ecosystem.
- **Dependencies:** Phase 3.
- **Definition of Done:** Markdown renders correctly using design tokens.

## Phase 7: Optimization & Launch

- **Objective:** Production readiness.
- **Tasks:** SEO metadata, image optimization, Lighthouse audits.
- **Deliverables:** A 90+ Lighthouse-scoring website.
- **Dependencies:** Phase 6.
- **Definition of Done:** Final approval against Masterplan DoD.
