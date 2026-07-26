# Frontend_Architecture_Specification_v1.0

**Project:** NorAI Technologies Website
**Status:** Production-ready specification for direct implementation
**Authority:** Subordinate to Design Bible v1.0 (§1) and Frontend Masterplan v1.0 (§2). This document adds no design decisions and invents no tokens.

**Stack (fixed constraint):** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · CSS Custom Properties as single source of truth (Tailwind mapped to variables) · Lucide React · Framer Motion · shadcn/ui (primitive foundation only) · ESLint + Prettier · Mobile-first.

---

## 1. Frontend Folder Structure

```
noraitech-web/
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx                 # Default Layout wrapper (Header + main + Footer)
│   │   ├── page.tsx                   # Homepage
│   │   ├── products/
│   │   │   ├── page.tsx               # Products Hub
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # Product Detail Template
│   │   ├── about/page.tsx
│   │   ├── team/page.tsx
│   │   ├── careers/page.tsx
│   │   └── contact/page.tsx
│   ├── (content)/
│   │   ├── layout.tsx                 # Narrow Layout wrapper (max 720px)
│   │   └── blog/
│   │       ├── page.tsx               # Blog Hub
│   │       └── [slug]/page.tsx        # Blog Post
│   ├── (legal)/
│   │   ├── layout.tsx                 # Narrow Layout wrapper
│   │   └── [policy]/page.tsx
│   ├── actions/                       # Next.js Server Actions
│   ├── layout.tsx                     # Root layout (html, providers, fonts, metadata base)
│   ├── error.tsx                      # Route segment error boundary
│   ├── loading.tsx                    # Route segment loading fallback
│   ├── global-error.tsx               # Root error boundary
│   ├── not-found.tsx                  # 404 (Utility)
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css                    # Token layer + Tailwind v4 @theme mapping
├── components/
│   ├── foundation/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   │   ├── cards/
│   │   └── sections/
│   ├── layouts/
│   ├── templates/
│   └── ui/                            # shadcn/ui primitives (unstyled foundation)
├── hooks/
├── providers/
├── services/                          # API and business logic layer
├── schemas/                           # Zod validation and shared types
├── lib/
│   ├── utils/
│   ├── constants/
│   ├── seo/
│   └── content/                       # MDX/CMS loaders
├── styles/
│   ├── tokens/                        # CSS custom property definitions
│   └── base/
├── content/                           # MDX sources
│   ├── blog/
│   ├── products/
│   ├── legal/
│   └── authors/
├── types/
├── public/
│   ├── images/
│   ├── screenshots/
│   └── team/
├── config/                            # site config, navigation, routes
├── .eslintrc / eslint.config.mjs
├── .prettierrc
├── tailwind (via globals.css @theme)
├── tsconfig.json
└── next.config.ts
```

**Rules:** `app/` holds routing and page composition only. All reusable UI lives in `components/`. `styles/tokens/` is the single source of truth for design tokens; `globals.css` maps them into the Tailwind v4 `@theme`. Route groups (`(marketing)`, `(content)`, `(legal)`) bind pages to the correct Layout wrapper per Masterplan §4.1.

---

## 2. Component Architecture

Atomic composition per Masterplan §2 ("Composition over Configuration") and §4.2.

### Foundation (`components/foundation/`)

Token-consuming primitives that carry no standalone UI meaning. `Container` (Wide 1280 / Default 1120 / Narrow 720), `Grid`, `Stack`, `Section`, `VisuallyHidden`, `Text` (renders the 14-step typographic scale), `Heading`. These wrap tokens so no downstream component reads raw values.

### Atoms (`components/atoms/`)

`Button` (5 variants: Primary, Secondary, Ghost, Dark, Danger), `Badge`, `Tag`, `Input`, `Textarea`, `Label`, `IconBox`, `Icon` (Lucide wrapper enforcing 1.5–2px stroke), `Link`, `FocusRing`. Atoms are stateless and token-driven.

### Molecules (`components/molecules/`)

`Accordion`, `Tabs`, `Pagination`, `FormGroup` (Label + Input/Textarea + inline Error), `StatBar` / `Stat`, `CTAGroup` (enforces one Primary per viewport), `NavItem`, `SocialProofItem`.

### Organisms (`components/organisms/`)

**Cards (`cards/`):** `ProductCard` (interactive — hover elevation + shadow), `FeatureCard` (static — flat), `TeamCard` (circular crop), `BlogCard` (interactive), `PricingCard`, `TestimonialCard`.
**Sections (`sections/`):** `Header` (with mobile hamburger), `Footer`, `HeroTypographic`, `HeroStandard`, `AlertBanner`, `ProductGrid`, `ProcessFlow` (Input → AI → Output), `UseCases`, `Testimonials`, `TeamPreview`, `FinalCTA`, `ContactForm`.

### Layouts (`components/layouts/`)

`DefaultLayout` (Header + `Container` Default + Footer), `NarrowLayout` (Container Narrow, reading-optimized), `SplitLayout` (asymmetric two-column). Consumed by App Router group `layout.tsx` files.

### Templates (`components/templates/`)

Page-shape compositions with slots, no content: `ProductDetailTemplate`, `BlogPostTemplate`, `LegalTemplate`, `HubTemplate`.

### Utilities (`lib/utils/`)

`cn` (class merge), token-safe formatters, `slugify`, metadata builders, MDX/content parsers. No visual output.

### Hooks (`hooks/`)

`useScrollReveal` (IntersectionObserver, fire-once), `usePrefersReducedMotion`, `useMediaQuery` (breakpoint reads), `useLockBodyScroll` (mobile menu), `useActiveNav`, `useForm` (contact, 3-field). Logic only.

### Providers (`providers/`)

`MotionProvider` (Framer Motion config + reduced-motion gating), `ThemeTokenProvider` (guarantees token layer availability), `AnalyticsProvider`, `ToastProvider` (in-page success/error states — no `alert()`). Mounted in root `app/layout.tsx`.

---

## 3. Dependency Rules

To prevent circular dependencies and spaghetti code, the following strict import hierarchy must be enforced. **Upward imports are strictly forbidden.**

- **Foundation** → imports nothing.
- **Atoms** → imports Foundation only.
- **Molecules** → imports Atoms + Foundation.
- **Organisms** → imports Molecules + Atoms + Foundation.
- **Templates** → imports everything below.
- **Pages** → imports Templates only.

---

## 4. Page Architecture

Mapped from Design Bible §3.1 tiers and Masterplan §6 dependencies.

| Route               | Layout  | Template                | Key Organisms                                                                                                                                                                            |
| ------------------- | ------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `/`                 | Default | — (direct assembly)     | `HeroTypographic`, `ProductGrid`→`ProductCard`, `FeatureCard`, `ProcessFlow`, `UseCases`, `Testimonials`→`TestimonialCard`, `TeamPreview`→`TeamCard`, `Accordion`, `StatBar`, `FinalCTA` |
| `/products`         | Default | `HubTemplate`           | `HeroStandard`, `ProductCard` (Expanded), `Section`                                                                                                                                      |
| `/products/[slug]`  | Default | `ProductDetailTemplate` | `HeroStandard`, Problem/Solution, `FeatureCard` grid, `ProcessFlow`, `TestimonialCard`, `PricingCard`, `Accordion`, `FinalCTA`                                                           |
| `/about`            | Default | —                       | Editorial long-form, Trust Elements (CIN/address), link to Team                                                                                                                          |
| `/team`             | Default | —                       | `TeamCard` grid, link to Careers                                                                                                                                                         |
| `/careers`          | Default | —                       | Roles list, link to Contact                                                                                                                                                              |
| `/contact`          | Split   | —                       | `ContactForm` (`FormGroup`, `Input`, `Textarea`, `Button`), direct routing (`sales@`/`careers@`/`press@`), in-page success state                                                         |
| `/blog`             | Narrow  | `HubTemplate`           | `BlogCard`, `Pagination`                                                                                                                                                                 |
| `/blog/[slug]`      | Narrow  | `BlogPostTemplate`      | MDX article, related links                                                                                                                                                               |
| `/[policy]` (legal) | Narrow  | `LegalTemplate`         | MDX content                                                                                                                                                                              |
| `not-found`         | Default | —                       | 404 with escape hatch to Home/Products                                                                                                                                                   |

Every page: one `H1`, links to Contact, no dead ends (Design Bible §3.3, §7.1). Homepage follows the strict 8-step scroll narrative (§4.1).

---

## 5. State Management Philosophy

- **Server Components by default:** All components must be server-rendered unless they strictly require client-side interaction.
- **Client Components carefully:** Opt into `"use client"` only for interactivity, hooks, or event listeners (e.g., forms, toggles, animations). Keep the client boundary as far down the tree as possible.
- **Local state first:** Use `useState` and `useReducer` within components before reaching for anything else.
- **Context only for cross-cutting UI state:** Use React Context (e.g., Providers) for truly global UI concepts (theme, auth, toast notifications).
- **Avoid global state libraries:** Redux, Zustand, or Jotai should only be introduced if deeply justified by complex, highly interactive data requirements (unlikely for a marketing site).

---

## 6. Service & Schema Layers

### Service Layer (`services/`)

- **Responsibility:** Handles all API integrations, external data fetching, and business logic.
- **Contrast with `lib/`:** `lib/` contains reusable, pure utilities (like class mergers or date formatters). `services/` contains logic specifically tied to the NorAI business domain (e.g., submitting contact forms to the CRM, fetching job listings from an ATS).

### Schema Layer (`schemas/`)

- **Responsibility:** The exclusive home for Zod validation schemas and shared TypeScript types that span boundaries (e.g., API payloads, form data).
- Ensures absolute type safety between the frontend and any external services or Server Actions.

---

## 7. Metadata & SEO Architecture

Robust, dynamic metadata is a core requirement for all routes.

- `generateMetadata()`: Utilized dynamically in server components (especially `/products/[slug]` and `/blog/[slug]`) to construct highly contextual page titles and descriptions.
- **OpenGraph & Twitter Cards:** Configured globally in `app/layout.tsx` and overridden dynamically per page to ensure rich social sharing.
- **JSON-LD:** Structured data injected via `<script type="application/ld+json">` for articles, products, and the corporate entity.
- **Canonical URLs:** Explicitly defined for every route to prevent duplicate content indexing.

---

## 8. Testing Architecture

Quality is enforced through a multi-tiered testing strategy prior to deployment.

- **Unit Tests:** For all pure functions in `lib/` and validation logic in `schemas/`.
- **Component Tests:** For critical atoms and molecules (ensuring correct variant rendering and event emission).
- **Accessibility Tests:** Automated `axe-core` checks integrated into the test suite.
- **Visual Regression:** To ensure design tokens and component styling remain strictly aligned across changes.
- **End-to-End Tests:** Covering critical user flows (e.g., Contact form submission, navigation routing).
- **CI Quality Gates:** PRs cannot merge unless they pass all tests, linting, formatting, and performance thresholds.

---

## 9. Design System Implementation Architecture

**Single source of truth:** CSS custom properties in `styles/tokens/`, mapped into Tailwind v4 via `@theme` in `globals.css`. Components consume Tailwind utilities backed by variables (`bg-primary-800`) or `var(--token)` directly. No raw values anywhere.

- **Typography:** `--font-sans` (Inter), `--font-mono` (JetBrains Mono). 14-step scale `--text-display-xl` → `--text-body-xs`, each pairing size/line-height/weight. Headings weight 600–800, body 400. Exposed through `Text`/`Heading` foundation components; never applied ad hoc.
- **Colors:** `--primary-50`→`900`, `--accent-50`→`700`, `--bg-page`/`--bg-elevated`/`--bg-dark`, `--success`/`--warning`/`--error`. Accent reserved for CTAs, active states, focus rings.
- **Spacing:** Base-8 scale `--space-1` (4px) → `--space-32` (128px). All margins/gaps/padding use scale tokens only.
- **Containers:** `--container-wide` (1280), `--container-default` (1120), `--container-narrow` (720), driven through the `Container` foundation component.
- **Responsive system:** Mobile-first `min-width` breakpoints declared as Tailwind v4 theme screens; consumed via `useMediaQuery` when logic is required.
- **Icons:** Lucide React through the `Icon` atom; fixed 1.5–2px stroke; icon-only interactive elements require `aria-label`.
- **Forms:** Labels above inputs, `--radius-default` (8px), inline validation via `FormGroup`; max 3 fields on Contact.
- **Buttons:** `Button` atom, `--radius-default` (8px), 5 variants; all interactive states (hover/focus/active/disabled) implemented; never re-created as raw `<button>`.
- **Cards:** `--radius-lg` (12px). Interactive cards (Product, Blog) elevate + cast `--shadow-*` on hover; informational cards (Feature) stay flat.
- **Motion:** `--duration-fast`→`--duration-slow`, `--ease-smooth`. Framer Motion reads these tokens; `transform`/`opacity` only.

shadcn/ui primitives live in `components/ui/` and are re-skinned exclusively through tokens; they never ship with default styling into production surfaces.

---

## 10. Responsive Architecture

Mobile-first, authored at 375px then scaled up via `min-width` breakpoints (Masterplan §Implementation Rules). Zero horizontal scroll on mobile is a Definition-of-Done gate.

- **Mobile (base, ~375px):** Single-column stacks, `Header` collapses to hamburger (`useLockBodyScroll`), full-width `Container`, `SplitLayout` collapses to one column, card grids single-column.
- **Tablet:** Two-column card grids, `SplitLayout` remains stacked or 2-col per section intent, Default container gains horizontal padding.
- **Desktop:** Default (1120) / Wide (1280) containers active, 3-column product/feature grids, `SplitLayout` asymmetric two-column, full horizontal nav.
- **Ultra-wide:** Content capped at Wide container (1280); surplus viewport becomes balanced side gutters (`bg-page`). No new columns or invented breakpoints beyond the defined scale.

---

## 11. Animation Architecture

Framer Motion, gated globally by `MotionProvider` + `usePrefersReducedMotion`.

- **Timing hierarchy (Design Bible §7.2):** Instant 100–200ms UI feedback → Moderate 300ms transitions → Slow 500ms scroll reveals, all bound to `--duration-*` / `--ease-smooth`.
- **Scroll reveals:** `useScrollReveal` via IntersectionObserver, **fire once**; elements fade in + translate upward slightly. Never attached to raw `scroll` events (mitigates animation thrashing, Masterplan §8).
- **Performance:** `transform` and `opacity` only (GPU-accelerated). No layout-affecting animation.
- **Reduced motion:** `prefers-reduced-motion` disables all non-essential motion; essential feedback degrades to instant.

---

## 12. Accessibility Architecture (WCAG 2.1 AA)

- **Semantics:** Native landmarks (`<nav>`, `<main>`, `<article>`, `<aside>`, `<figure>`); one `H1` per page; logical heading order.
- **Keyboard:** Every interactive element fully operable (Tab/Enter) with a visible **3px accent focus ring** (`FocusRing`/token-driven), non-negotiable.
- **Contrast:** ≥4.5:1 normal text, ≥3:1 large text — enforced through the fixed token palette only.
- **Labels:** Icon-only interactive elements require `aria-label`; all form inputs bound to `<label>` via `FormGroup`.
- **Clickable cards:** wrapped in `<a>`/`<button>`, never bare `<div>`.
- **Testing gate:** Automated a11y checks + keyboard-only walkthrough in Definition of Done.

---

## 13. Performance Architecture

- **Budgets (hard gates):** LCP < 1.5s, CLS < 0.05, INP < 100ms.
- **Rendering:** Prefer Server Components / SSG for static marketing and content; client components only where interaction requires (Header menu, forms, motion). Heavy client-side JS prohibited for static content.
- **Assets:** WebP via `next/image` with explicit dimensions (protects CLS); real screenshots/team photos only.
- **Fonts:** Inter + JetBrains Mono self-hosted via `next/font`, preloaded, `display: swap`.
- **JS:** Deferred/dynamic imports for below-the-fold interactive organisms; Framer Motion loaded only where used.
- **Animation:** `transform`/`opacity` only; IntersectionObserver for reveals.

---

## 14. Development Conventions

- **Naming:** Components `PascalCase` (`ProductCard.tsx`); hooks `useCamelCase`; utilities/vars `camelCase`; token CSS vars `--kebab-case`; constants `SCREAMING_SNAKE_CASE`; routes/segments lowercase (`[slug]`).
- **Imports:** Absolute via `@/` alias; ordered external → internal (`@/components`, `@/hooks`, `@/lib`) → relative; import shared components, never duplicate primitives (a raw styled `<button>` is a rejected violation).
- **File organization:** One primary component per file, co-located with its variants/types and test; folders grouped by atomic tier (§2); tokens isolated in `styles/tokens/`; content in `content/`.
- **Component organization:** Composition over configuration — build from Foundation → Atoms → Molecules → Organisms; variants via props (`variant="ghost"`), never forks; logic in hooks, cross-cutting state in providers, presentation in components.
- **Lint/format:** ESLint + Prettier enforced; CI rejects hardcoded hex/`rgb()`, arbitrary pixel spacing, `alert()`, and missing focus/label a11y.

---

## 15. Recommended Implementation Order

Follows Masterplan §5 build order (system first, pages second).

1. **Phase 1 — Foundation & Tokens:** Repo, TypeScript, ESLint + Prettier, `globals.css` token layer + Tailwind v4 `@theme` mapping, `next/font`, root layout + providers, Foundation components (`Container`, `Text`, `Heading`, `Grid`, `Stack`, `Section`).
2. **Phase 2 — Atoms & Molecules:** `Button`, `Input`, `Textarea`, `Label`, `Badge`, `Tag`, `IconBox`, `Icon`; then `FormGroup`, `Accordion`, `Tabs`, `Pagination`, `StatBar`, base card shells.
3. **Phase 3 — Organisms & Layouts:** `Header` (+ mobile hamburger), `Footer`, `HeroTypographic`/`HeroStandard`, `AlertBanner`, card organisms, `DefaultLayout` / `NarrowLayout` / `SplitLayout`.
4. **Phase 4 — Homepage Assembly:** Sequential 8-step scroll narrative using established components.
5. **Phase 5 — Core Pages:** Products Hub, `ProductDetailTemplate`, About, Team, Careers, Contact.
6. **Phase 6 — Content Architecture:** Blog Hub, `BlogPostTemplate`, MDX/CMS integration, 404 + Legal.
7. **Phase 7 — Polish & Optimization:** Scroll animations (IntersectionObserver + Framer Motion), focus rings, reduced-motion audit, Core Web Vitals + automated a11y verification.
