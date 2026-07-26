# NorAI Frontend Masterplan v1.0

## 1. Executive Overview

The NorAI Frontend Masterplan v1.0 is the definitive engineering roadmap. It translates the _NorAI Website Design Bible v1.0_ into an actionable implementation strategy. Designed for human engineers and AI coding agents, this document enforces strict adherence to design tokens, component reusability, and architectural maintainability.

### 1.1 AI Contributor Guidelines

AI agents generating frontend code for NorAI must operate under the following priority hierarchy:

1. **Design Bible:** The supreme law for all visual and strategic decisions.
2. **Frontend Masterplan (This Document):** The law for component architecture and build order.
3. **Existing Codebase:** Match existing patterns if they comply with 1 & 2.
4. **New Code Generation:** Only as a last resort.

> [!IMPORTANT]
> **Strict Agent Constraints:**
>
> - NEVER invent CSS variables, hex colors, or spacing pixels. Use existing tokens.
> - NEVER duplicate a component (e.g., building a new `<button>` tag with custom classes when `<Button>` exists).
> - ALWAYS build mobile-first.

---

## 2. Development Philosophy & Golden Rules

- **System First, Pages Second:** Build the foundation (tokens, typography, layout wrappers) before components. Build components before pages.
- **Accessibility by Default:** Semantic HTML and ARIA attributes are foundational, not an afterthought.
- **Performance as a Feature:** Stick to strict performance budgets. Heavy client-side JavaScript is prohibited for static content.
- **Composition over Configuration:** Prefer composing small components (e.g., `IconBox` + `CardTitle` + `CardDescription`) over massive components with dozens of props.

---

## 3. Design Token Implementation Setup

Before writing any component styles, the following token ecosystem must be initialized:

| Token Category    | Variables                                                      | Description                                                              |
| ----------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Colors**        | `--primary-50` to `900`, `--accent-50` to `700`, `--bg-page`   | Full semantic mapping for all surfaces and states.                       |
| **Typography**    | `--font-sans`, `--font-mono`, `--text-display-xl` to `body-xs` | Includes font-size, line-height, and weight combinations.                |
| **Spacing**       | `--space-1` (4px) to `--space-32` (128px)                      | Base-8 scale.                                                            |
| **Border Radius** | `--radius-sm` (4px) to `--radius-full` (9999px)                | `radius-lg` (12px) for cards, `radius-default` (8px) for inputs/buttons. |
| **Shadows**       | `--shadow-xs` to `--shadow-xl`, `--shadow-accent`              | For elevation states.                                                    |
| **Motion**        | `--duration-fast` to `slow`, `--ease-smooth`                   | Unified animation timing.                                                |

---

## 4. Component Inventory & Shared Layouts

### 4.1 Shared Layout Wrappers

- **Default Layout:** `Header` + `main.container-default` + `Footer`. Used for 90% of pages.
- **Narrow Layout:** `main.container-narrow` (max 720px). Optimized for reading (Blog, Privacy Policy).
- **Split Layout:** Asymmetric two-column grid (Contact page, Feature showcases).

### 4.2 Component Catalog

- **Atoms:** `Button` (5 variants), `Badge`, `Tag`, `Input`, `Textarea`, `IconBox`.
- **Molecules:** `Accordion`, `Tabs`, `Pagination`, `FormGroup` (Label + Input + Error).
- **Organisms (Cards):** `ProductCard` (interactive), `FeatureCard` (static), `TeamCard`, `BlogCard`, `PricingCard`.
- **Organisms (Sections):** `Header` (with mobile hamburger), `Footer`, `HeroTypographic`, `AlertBanner`.

> **Design Decision Record: Hover Elevations**
>
> - **Why:** Only interactive cards (Product, Blog) receive hover elevation and shadows. Informational cards (Features) remain flat.
> - **Long-term Benefit:** Prevents false affordances and improves overall UX clarity.

---

## 5. Recommended Build Order

The implementation sequence minimizes blockers and prevents refactoring.

1. **Phase 1: Project Foundation & Tokens**
   - Repository setup, linting, global CSS, and design token initialization.
2. **Phase 2: Atoms & Molecules**
   - Buttons, Inputs, Typography wrappers, Badges, and base Card components.
3. **Phase 3: Organisms & Layouts**
   - Header, Footer, SectionWrappers, and Hero components.
4. **Phase 4: Homepage Assembly**
   - Sequential build of homepage sections using established components.
5. **Phase 5: Core Pages**
   - Products Hub, Product Detail Template, About, Contact, Team.
6. **Phase 6: Content Architecture**
   - Blog Hub, MDX/CMS integration, Utility Pages (404, Legal).
7. **Phase 7: Polish & Optimization**
   - Scroll animations (IntersectionObserver), focus rings, performance auditing.

---

## 6. Page Dependencies

| Route              | Required Components                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------ |
| `/` (Homepage)     | `HeroTypographic`, `ProductCard`, `FeatureCard`, `TestimonialCard`, `TeamCard`, `Accordion`, `StatBar` |
| `/products`        | `HeroStandard`, `ProductCard` (Expanded Variant), `SectionWrapper`                                     |
| `/products/[slug]` | `ProcessFlow`, `FeatureCard`, `PricingCard`, `Accordion`                                               |
| `/contact`         | `FormGroup`, `InputText`, `Textarea`, `Button`, `IconBox`                                              |

---

## 7. Quality Standards & Definition of Done

### 7.1 Component Definition of Done (DoD)

- Matches Design Bible visual specifications perfectly using tokens.
- All interactive states (hover, focus, active, disabled) are implemented.
- Renders flawlessly on mobile (375px), tablet, and desktop viewports.
- Fully operable via keyboard (Tab/Enter) with visible focus rings.

### 7.2 Page Definition of Done (DoD)

- Zero horizontal scrolling on mobile viewports.
- Core Web Vitals targets met (LCP < 1.5s, CLS < 0.05).
- SEO metadata (Title, Description, canonical URL) and Open Graph tags populated.
- Proper semantic HTML hierarchy (One `H1`, logical flow).

---

## 8. Implementation Risks & Mitigations

| Risk                       | Impact             | Mitigation Strategy                                                                   |
| -------------------------- | ------------------ | ------------------------------------------------------------------------------------- |
| **Token Divergence**       | Inconsistent UI    | Enforce strict linting. Reject hardcoded hex/pixel values in code reviews.            |
| **Animation Thrashing**    | Poor frame rates   | Animate `transform` and `opacity` only. Wrap scroll events in `IntersectionObserver`. |
| **Accessibility Failures** | Exclusion of users | Integrate automated a11y testing. Require keyboard-only testing workflows.            |

---

## 9. Future Expansion & Scalability

The frontend architecture is designed to support the next 5 years of company growth:

- **Scalable Product Integration:** New products simply require dropping a new `ProductCard` into the Hub and populating the standard `/products/[slug]` template.
- **External Portals:** Future SaaS dashboards (`app.noraitech.com`) and Documentation portals (`docs.noraitech.com`) will exist as separate applications, but will consume this exact UI component library and token system to guarantee unified brand presentation.
