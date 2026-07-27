# 08_Phase7_Polish_And_Optimization_Specification_v1.0

**Project:** NorAI Technologies Website — Phase 7: Polish & Optimization
**Status:** Immutable, implementation-ready contract. Ready to freeze.
**Phase name basis:** Frontend Masterplan §5, Phase 7 — *"Polish & Optimization — Scroll animations (IntersectionObserver), focus rings, performance auditing."* (Frontend_Architecture_Specification §10 Phase 7 confirms: "Scroll animations … focus rings, reduced-motion audit, Core Web Vitals + automated a11y verification.")
**Authority (highest first):** Design Bible v1.0 → Frontend Masterplan v1.0 → Frontend_Architecture_Specification_v1.0 → 01_Project_Foundation (frozen) → 02A_Atoms (frozen) → 03_Phase2B_Molecules (frozen) → 04_Phase3_Organisms (frozen) → 05_Phase4_Homepage (frozen) → 06_Phase5_Core_Pages (frozen) → 07_Phase6_Content_And_Support_Pages (frozen).
**Stack (fixed):** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 (tokens as CSS variables) · Lucide React · Framer Motion · shadcn/ui (primitives only) · ESLint + Prettier · Mobile-first.

> **Nature of Phase 7 (binding):** Phase 7 is an **audit, verification, and hardening phase — NOT a feature or page phase.** It introduces **no new routes, no new components, no new tokens, no new layouts, and no new UX flows.** It verifies and finalizes behaviors already specified in frozen phases (scroll reveals, focus rings, reduced motion, Core Web Vitals, accessibility) and permits only the narrow, non-visual corrections enumerated in §14. All frozen APIs and visual outputs remain unchanged. The four prerequisite tokens (02A §11.1) and the validated Phase-3 substitution (`IconBox`→`Icon`; media via `next/image` + `Avatar`) MUST already be in place; their absence is a blocking gap (§15).

---

## 1. Scope

**1.1 Included work (verification + hardening only):**
1. **Scroll animation finalization** — confirm every Section Organism reveals once via `useScrollReveal` (IntersectionObserver, fire-once), `transform`/`opacity` only.
2. **Focus-ring audit** — confirm the visible 3px `--accent` `:focus-visible` ring on every interactive element across all routes.
3. **Reduced-motion audit** — confirm `prefers-reduced-motion` disables all non-essential motion globally.
4. **Performance auditing** — confirm Core Web Vitals budgets (LCP < 1.5s, CLS < 0.05, INP < 100ms) and asset/JS optimization.
5. **Automated accessibility verification** — WCAG 2.1 AA across all routes.
6. **SEO/metadata/structured-data finalization** — confirm completeness across all routes.

**1.2 Included routes (verification targets — the complete frozen site):** `/`, `/products`, `/products/[slug]`, `/about`, `/team`, `/careers`, `/contact`, `/blog`, `/blog/[slug]`, `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, `not-found`. Phase 7 audits **all** of them. It creates **none** of them.

**1.3 Excluded routes/work:** No new routes. No CMS/MDX pipeline. No authentication, dashboard, admin, analytics product features, or user accounts. No visual redesign. No component/token/layout creation. No refactor of frozen component internals beyond the corrections permitted in §14.2.

**1.4 Future phases (out of scope):** Masterplan §9 Phase 2 (Careers expansion, Pricing, Documentation) and Phase 3 (`app.noraitech.com`, `docs.noraitech.com`) are explicitly future and MUST NOT be started.

**1.5 Dependencies on previous phases:** Phase 7 REQUIRES Phases 1–6 to be implemented and green. Phase 7 MUST NOT begin until all Phase 1–6 Definitions of Done are satisfied. If any prior DoD item is unmet, Phase 7 MUST halt and record it as a blocking gap (§15).

---

## 2. Routing

2.1 Phase 7 MUST NOT add, rename, remove, or restructure any route, route group, or dynamic segment. The frozen route set (§1.2) is final.

2.2 **Loading boundaries.** Phase 7 MUST verify that route/segment `loading.tsx` boundaries (Phase 1 §19) render layout-stable placeholders (no CLS). Phase 7 MAY add a missing segment-level `loading.tsx` **only** where a route performs async work and lacks one, using the frozen `LoadingState` molecule. No new loading UI design is permitted.

2.3 **Error boundaries.** Phase 7 MUST verify `app/error.tsx` and `not-found` behavior (HTTP 404, `noindex`, recovery via `ErrorState`). Phase 7 MAY add a missing segment-level `error.tsx` **only** where a route can throw and lacks one, using the frozen `ErrorState` molecule. No new error UI design is permitted.

2.4 **Metadata generation.** Phase 7 MUST verify every route exports metadata via `lib/seo/`; `generateMetadata` present for `/products/[slug]`, `/blog/[slug]`, `/[policy]`. Phase 7 MUST NOT change metadata content, only correct missing/incorrect fields to match the frozen SEO specs.

2.5 **Static vs dynamic rendering.** All frozen routes MUST remain statically generated (SSG) or Server-Component-rendered as specified. `generateStaticParams` MUST enumerate known product slugs, known blog slugs, and exactly the three legal policies. Phase 7 MUST NOT convert any route to client-side rendering or introduce runtime data fetching in presentation.

---

## 3. Page Specifications (audit contract per route)

Phase 7 does not compose pages; it verifies them. For each route the composition tree is **frozen** as defined in Phases 4–6 and MUST NOT change. Each route below states its Phase-7 responsibilities, required checks, forbidden changes, SEO, accessibility, and responsive verification.

### 3.1 `/` (Homepage)
- **Purpose:** Verify the 8-section narrative renders in exact order with all Phase-7 behaviors.
- **Responsibilities:** Confirm one reveal per section; hero LCP image `priority`; single H1; one Primary CTA per viewport; interactive `ProductCard` elevation; reduced-motion fallback.
- **Composition tree:** Frozen per 05_Phase4 §2.2. MUST NOT change.
- **Required sections:** All 8 (Hero → SocialProof → FeatureSection → ProcessFlow → UseCases → Testimonials → TeamPreview → CTASection).
- **Optional sections:** None (gated only by content availability as already specified).
- **Forbidden sections:** Any addition/reorder.
- **SEO:** `Organization` JSON-LD; unique metadata; canonical `/`.
- **Accessibility:** Single H1; landmark uniqueness; focus order = visual order; mobile menu focus trap.
- **Responsive:** No horizontal scroll at 375px; grids reflow 1→2/3-up.

### 3.2 `/products` (Products Hub)
- **Purpose:** Verify hub + interactive product grid.
- **Responsibilities:** `ItemList` JSON-LD; product cards single-anchor + hover elevation; final CTA → `/contact`.
- **Composition tree:** Frozen per 06_Phase5 §3.1. MUST NOT change.
- **Required/Optional/Forbidden:** Per frozen spec; no changes.
- **SEO/Accessibility/Responsive:** `ItemList`; single H1; 1→2/3-up grid; no horizontal scroll.

### 3.3 `/products/[slug]` (Product Detail)
- **Purpose:** Verify fixed-order detail template + per-slug metadata.
- **Responsibilities:** `generateStaticParams`+`generateMetadata`; `Product` JSON-LD; breadcrumb; `FeatureGrid` 4–6; `ProcessFlow` exactly 3 steps; one CTA per pricing tier.
- **Composition tree:** Frozen per 06_Phase5 §3.2. MUST NOT change.
- **SEO/Accessibility/Responsive:** Per-product canonical; single H1; hero split reflow.

### 3.4 `/about`
- **Purpose:** Verify origin story, verifiable trust indicators, team preview link.
- **Responsibilities:** `AboutPage`/`Organization` JSON-LD; Narrow reading measure for origin story; trust indicators (CIN, address) present.
- **Composition tree:** Frozen per 06_Phase5 §3.3. MUST NOT change.

### 3.5 `/team`
- **Purpose:** Verify full team grid + Careers CTA.
- **Responsibilities:** Authentic circular avatars; `EmptyState` if none; Primary CTA → `/careers`.
- **Composition tree:** Frozen per 06_Phase5 §3.4. MUST NOT change.

### 3.6 `/careers`
- **Purpose:** Verify roles list + no-dead-end recovery.
- **Responsibilities:** Roles or `EmptyState` with next step; `JobPosting` remains OUT OF SCOPE (documented gap 06_Phase5 §14.2) — MUST NOT be invented.
- **Composition tree:** Frozen per 06_Phase5 §3.5. MUST NOT change.

### 3.7 `/contact`
- **Purpose:** Verify 3-field form, direct routing, in-page success, no `alert()`.
- **Responsibilities:** `ContactPage`/`Organization` JSON-LD; live-region success/error; labeled fields; single Primary submit; INP budget on submit interaction.
- **Composition tree:** Frozen per 06_Phase5 §3.6. MUST NOT change.

### 3.8 `/blog`
- **Purpose:** Verify hub, search empty-state, pagination, Narrow layout.
- **Responsibilities:** `Blog`+`ItemList` JSON-LD; `SearchField` labeled; pagination `<nav>`; `EmptyState` on no results.
- **Composition tree:** Frozen per 07_Phase6 §3.1. MUST NOT change.

### 3.9 `/blog/[slug]`
- **Purpose:** Verify article reading experience + per-slug metadata.
- **Responsibilities:** `Article`/`BlogPosting` JSON-LD; breadcrumb; body headings H2+ no skips; images `next/image`; code `--font-mono`.
- **Composition tree:** Frozen per 07_Phase6 §3.2. MUST NOT change.

### 3.10 `/privacy-policy`, `/terms-of-service`, `/cookie-policy`
- **Purpose:** Verify legal reading pages.
- **Responsibilities:** "Last updated" present; no CTA sections; no structured data; Narrow measure; no non-essential motion on reading content.
- **Composition tree:** Frozen per 07_Phase6 §3.3. MUST NOT change.

### 3.11 `not-found`
- **Purpose:** Verify 404 utility.
- **Responsibilities:** HTTP 404; `noindex`; no canonical; not in sitemap; recovery `CTAGroup` (Home Primary + Products); `role="alert"`.
- **Composition tree:** Frozen per 07_Phase6 §3.4. MUST NOT change.

---

## 4. Layout Architecture

4.1 **No new layouts or templates.** Phase 7 MUST reuse the frozen `DefaultLayout`, `NarrowLayout`, `SplitLayout` (in-section), `HubTemplate`, `ProductDetailTemplate`, `BlogPostTemplate`, `LegalTemplate`.

4.2 **Container sizes (unchanged):** Wide 1280, Default 1120, Narrow 720. Phase 7 MUST verify each route uses the container mandated by its frozen spec; it MUST NOT change container assignments.

4.3 **Composition hierarchy (unchanged):** Layouts → Templates → Organisms → Molecules → Atoms → Foundation.

4.4 **Allowed imports (audit tooling):** Phase 7 MAY add repository-level, non-shipping configuration and test/audit assets: ESLint rule config, Lighthouse/CWV CI config, axe test setup, Playwright/E2E config, Storybook a11y addon config. These MUST NOT alter runtime UI. No new runtime module may be imported into shipped components.

---

## 5. Component Reuse

5.1 **All components are frozen.** Phase 7 reuses the entire library as-is:
- **Foundation:** `Container`, `Section`, `Grid`, `Stack`, `Heading`, `Text`, `VisuallyHidden`.
- **Atoms:** all 02A atoms, notably `FocusRing`, `Icon`, `Spinner`, `Skeleton`, `Button`, `Link`.
- **Molecules:** all 2B molecules, notably `LoadingState`, `ErrorState`, `EmptyState`, `Alert`, `Toast`.
- **Organisms:** all Phase-3 organisms and card organisms.
- **Templates/Layouts:** all Phase-1/Architecture templates and layouts.

5.2 **New reusable components:** **NOT PERMITTED.** Phase 7 MUST NOT create any component. If a verification reveals a genuinely missing primitive, it MUST be recorded as a gap (§15) and escalated, not built.

5.3 **Permitted non-component additions (non-visual only):** hooks already frozen (`useScrollReveal`, `usePrefersReducedMotion`) MUST be reused, not duplicated. No new hook may be created except a test-only utility that does not ship to production.

---

## 6. Navigation

6.1 **No new navigation.** The navigation graph is frozen (Homepage §7, Core Pages §5, Content Pages §5). Phase 7 MUST verify:
- No dead ends: every route reaches `/contact` (in-page CTA or `Footer`).
- Breadcrumbs present exactly where mandated (`/products/[slug]`, `/blog/[slug]`) and absent elsewhere.
- Recovery paths: `not-found` → Home (Primary) + Products; `error.tsx` → recovery action.
- CTA destinations resolve (no 404 links); `mailto:` routes (`sales@`, `careers@`, `press@`) correct.

6.2 **Navigation graph (verification target):**

```mermaid
graph TD
    Home[/] --> Products[/products/]
    Home --> About[/about/]
    Home --> Contact[/contact/]
    Products --> Detail[/products/slug/]
    Detail --> Contact
    Detail --> Products
    About --> Team[/team/]
    Team --> Careers[/careers/]
    Careers --> Contact
    Blog[/blog/] --> Article[/blog/slug/]
    Article --> Blog
    Article --> Contact
    NotFound[not-found] --> Home
    NotFound --> Products
    Footer((Footer)) --> Privacy[/privacy-policy/]
    Footer --> Terms[/terms-of-service/]
    Footer --> Cookie[/cookie-policy/]
    Footer --> Contact
```

6.3 Any broken or missing link discovered MUST be corrected only by pointing to the already-defined destination; no new destination MAY be introduced.

---

## 7. Responsive Design

7.1 Phase 7 MUST verify, across all 13 routes, at **375px (mobile), tablet, desktop, and ultra-wide**:
- Zero horizontal scroll at 375px (hard gate).
- Grids reflow per frozen specs (1→2/3-up; team 1→3/4-up; pricing 1→3).
- Reading measures: Narrow 720 for blog/legal; Default 1120 elsewhere; ultra-wide caps at 1280 (or Narrow measure for reading pages) with balanced gutters.
- Spacing base-8 `--space-*` only; no arbitrary values introduced during any permitted correction.
- Typography uses only the 14-step scale; no raw font sizes.
- Touch targets ≥44×44px on mobile.

7.2 Phase 7 MUST NOT introduce new breakpoints; only the frozen Foundation `min-width` screens exist.

---

## 8. Accessibility (WCAG 2.1 AA — primary Phase-7 deliverable)

8.1 **Automated verification:** axe (or equivalent) MUST run on every route and report **zero critical/serious violations**.

8.2 **Landmarks:** exactly one `<header>`(nav), one `<main>`, one `<footer>` per route; article/legal semantics correct.

8.3 **Heading hierarchy:** exactly one H1 per route; sequential H2/H3; no skipped levels (article/legal bodies included).

8.4 **Keyboard navigation:** every interactive element operable via Tab/Enter/Space (and Arrow/Esc where the Organism defines it); logical Tab order = visual order; skip-link present and functional.

8.5 **Focus management (core Phase-7 task):** visible **3px `--accent` focus ring** on `:focus-visible` for **every** interactive element on **every** route; ring MUST NOT be removed or replaced with a non-accent color; mobile menu MUST trap focus when open and restore focus to the trigger on close; dialogs (if any future in-page use) restore focus. `--focus-ring-width` token (02A §11.1) MUST be defined; if absent, gap (§15).

8.6 **ARIA:** `aria-current` on active nav and breadcrumb; `aria-expanded` on mobile menu; `role="alert"`/live regions on `Alert`/`Toast`/`ErrorState`/form feedback; icon-only controls labeled.

8.7 **Screen reader behavior:** whole-card links expose one accessible name; decorative icons/logos/connectors `aria-hidden` or empty `alt`; testimonials use blockquote/figure; form errors announced.

8.8 **Contrast:** ≥4.5:1 normal, ≥3:1 large/non-text across `--bg-page`/`--bg-elevated`/`--bg-dark`; color never the sole signal. Contrast MUST be validated against the actual token values.

---

## 9. Motion (core Phase-7 task)

9.1 **Scroll reveal finalization:** every Section Organism MUST reveal **once** via `useScrollReveal` (IntersectionObserver, fire-once): fade + slight upward translate. Reveals MUST NOT re-trigger on scroll-up. No per-child staggered cascade beyond the single section reveal.

9.2 **Allowed animations:** `transform` and `opacity` only; interactive card hover elevation (`ProductCard`, `BlogCard`); button hover/press; menu/dropdown/accordion transitions as frozen.

9.3 **Forbidden animations:** autoplay carousels, parallax, count-up numbers, scroll-jacking, layout-property animation (width/height/top/left/margin), animated focus rings, motion on legal reading content.

9.4 **Timing:** reveals `--duration-slow`; feedback `--duration-fast`; transitions moderate (300ms); easing `--ease-smooth`. No hardcoded durations/easing.

9.5 **Reduced-motion audit (core Phase-7 task):** with `prefers-reduced-motion: reduce`, all reveals, hover elevations, spinners-as-motion, and skeleton shimmer MUST degrade to instant/static final state; essential feedback remains but without non-essential animation. This MUST be verified on every route.

---

## 10. SEO

10.1 **Metadata:** every indexable route MUST have unique `title`/`description` via `lib/seo/`; dynamic routes via `generateMetadata`. Phase 7 verifies and corrects only to match frozen specs.

10.2 **Canonical URLs:** absolute per route from `NEXT_PUBLIC_SITE_URL`; `not-found` MUST NOT set canonical.

10.3 **OpenGraph / Twitter:** `og:title/description/url/image` and Twitter summary-large-image present on all indexable routes; product/article OG images where provided; default from `public/og/`.

10.4 **Robots:** indexable routes `index,follow`; `not-found` `noindex`. `app/robots.ts` MUST be present and correct.

10.5 **Sitemap:** `app/sitemap.ts` MUST include all indexable routes (all pages + known product/blog slugs + three legal routes) and MUST exclude `not-found`. Slug enumeration MUST match `generateStaticParams`.

10.6 **Structured data:** `Organization`/`WebSite` (home), `ItemList` (`/products`), `Product` (`/products/[slug]`), `AboutPage`/`Organization` (`/about`), `ContactPage`/`Organization` (`/contact`), `Blog`+`ItemList` (`/blog`), `Article`/`BlogPosting` (`/blog/[slug]`); none on legal/404. All via `lib/seo/` helpers; none fabricated. Missing helper types are gaps (§15), not to be inlined.

---

## 11. Testing

| Type | Requirement |
|---|---|
| Rendering | Every route renders its frozen composition tree unchanged; required present, forbidden absent |
| Routing | All routes resolve; `generateStaticParams` builds product/blog/legal slugs; unknown → `not-found` (HTTP 404) |
| Accessibility | Automated axe on all 13 routes: zero critical/serious; keyboard walkthrough per route; focus-ring presence assertion on all interactive elements; reduced-motion assertion per route; single-H1 and landmark-uniqueness assertions |
| Metadata | Unique title/desc/canonical/OG/Twitter per indexable route; `not-found` noindex + HTTP 404 + no canonical; JSON-LD present and valid per §10.6 |
| Responsive | Visual regression at 375px/tablet/desktop/ultra-wide for every route; zero horizontal scroll at 375px |
| Integration | Full navigation graph (§6.2) link resolution; contact submit success/error in-page (no `alert()`); blog search empty-state + pagination; 404 recovery |
| Performance | Automated Core Web Vitals (lab) per route: LCP < 1.5s, CLS < 0.05, INP < 100ms; bundle/JS budget check; image-format (WebP) and `next/image` dimension check |
| Snapshot | Structured-data JSON-LD snapshots per applicable route |

11.1 The Phase-7 test suite MUST cover **every route**; partial coverage is a failure.

---

## 12. Validation

Phase 7 is NOT complete until ALL of the following pass with zero errors:
1. `npm run lint` — ESLint (incl. jsx-a11y + no-hardcoded color/spacing rules) clean.
2. `npx tsc --noEmit` — strict TypeScript, zero errors.
3. `npm run build` — production build succeeds, including `generateStaticParams` for all dynamic routes.
4. Unit tests — green.
5. Integration/E2E tests — green (navigation, contact, blog, 404).
6. Accessibility checks — axe zero critical/serious on all routes; keyboard + reduced-motion assertions pass.
7. Performance checks — CWV budgets met on all routes in the lab/CI run.

Any failure blocks the phase. No waivers.

---

## 13. Definition of Done

- [ ] No new route, component, token, layout, template, hook (non-test), animation, or UX flow introduced.
- [ ] Every Section Organism reveals once via `useScrollReveal`; no re-trigger; `transform`/`opacity` only.
- [ ] Visible 3px `--accent` `:focus-visible` ring verified on every interactive element on every route; never removed/recolored.
- [ ] Mobile menu focus trap + focus restore verified.
- [ ] `prefers-reduced-motion` disables all non-essential motion on every route (final state instant); verified.
- [ ] LCP < 1.5s, CLS < 0.05, INP < 100ms met on every route (lab/CI); above-the-fold LCP image `priority`; below-the-fold lazy.
- [ ] All imagery via `next/image` (WebP, explicit dimensions); no layout shift; no stock photography; no cliché AI graphics.
- [ ] Client JS confined to `Header` + interactive Organism subtrees + motion wrappers; static sections ship zero client JS.
- [ ] axe zero critical/serious on all 13 routes; single H1 per route; landmark uniqueness; sequential headings.
- [ ] Contrast ≥4.5:1 / ≥3:1 validated against token values; color never sole signal; touch targets ≥44px.
- [ ] Unique metadata/canonical/OG/Twitter per indexable route; `robots.ts` correct; `sitemap.ts` includes all indexable routes and excludes `not-found`.
- [ ] Structured data present and valid per §10.6; none on legal/404; none fabricated.
- [ ] Full navigation graph verified; no dead ends; breadcrumbs exactly where mandated; all links resolve.
- [ ] Zero hardcoded color/space/type/radius/shadow/motion values anywhere; four prerequisite tokens (02A §11.1) defined.
- [ ] Segment `loading.tsx`/`error.tsx` present wherever async/throwing routes require them, using frozen `LoadingState`/`ErrorState`.
- [ ] `npm run lint`, `npx tsc --noEmit`, `npm run build`, unit, integration, a11y, and CWV checks all pass.
- [ ] All documented gaps (§15) recorded; none resolved by invention.

---

## 14. AI Implementation Constraints

**14.1 What MAY be created (strictly limited, non-visual):**
- Test files, E2E specs, and audit/CI configuration (Lighthouse/CWV, axe, Playwright, Storybook a11y).
- Missing segment-level `loading.tsx`/`error.tsx` **only** where a route requires one, composed solely from frozen `LoadingState`/`ErrorState`.
- Lint/CI rule configuration that enforces existing constraints.
- `robots.ts`/`sitemap.ts` entries **only** to complete the frozen route set if missing.

**14.2 What MAY be corrected (only to satisfy frozen specs, no visual/API change):**
- Missing/incorrect `aria-*`, `alt`, `role`, `htmlFor`, `aria-current`, `aria-expanded`, focus-ring application, `next/image` dimensions, `priority`/lazy flags, `noindex` on 404, canonical correctness, JSON-LD field completeness via `lib/seo/`.
- Such corrections MUST NOT change component public APIs, visual output, or token values.

**14.3 What MUST NOT be modified:**
- Any frozen component's public API, props, variants, or rendered visual output.
- Any design token value; no new token (except defining the already-flagged prerequisite tokens from 02A §11.1, whose values are transcribed, not chosen — the 3px focus ring value is mandated by the Design Bible).
- Route structure, layouts, templates, navigation graph, or narrative order.

**14.4 Prohibited:** architectural changes; refactors of frozen internals beyond §14.2 corrections; redesigns; new features; speculative improvements; performance "optimizations" that alter visual output or component APIs; converting SSG routes to client rendering; adding runtime data fetching to presentation; beginning any future phase (Masterplan §9).

**14.5 Escalation rule:** If satisfying a Phase-7 requirement would require any action outside §14.1/§14.2, the agent MUST STOP and record it in §15 rather than act.

---

## 15. Documented Gaps / Specification Conflicts

**15.1 No specification conflict introduced.** Phase 7 is verification/hardening and contradicts no frozen spec. Phase name and scope derive directly from Masterplan §5 Phase 7 and Frontend_Architecture_Specification §10 Phase 7.

**15.2 Carried-forward prerequisites (MUST exist before Phase 7 can pass — blocking if absent):**
- The four flagged tokens from 02A §11.1: `--opacity-disabled`, `--focus-ring-width`, `--border-width-default`, `--tooltip-delay`. Phase 7 MUST verify these are defined in the Phase-1 token layer. If absent, Phase 7 halts and records a blocking gap; the agent MUST NOT invent values (the `--focus-ring-width` value 3px is transcribed from the Design Bible, not chosen).

**15.3 Carried-forward documented gaps (MUST remain flagged, not resolved in Phase 7):**
- `JobPosting` structured data for `/careers` (no role schema/CMS frozen) — remains excluded.
- Contact submission transport / Server Action + email routing — an owning-boundary concern; Phase 7 verifies presentation and INP only, MUST NOT implement business logic.
- MDX/CMS pipeline and `BlogPostTemplate`/`LegalTemplate` internals — if content loaders or templates are absent, Phase 7 records a blocking gap; MUST NOT build a pipeline or template.
- `Blog`/`BlogPosting`/`Article`/`ItemList`/`Product` JSON-LD helpers — if not present in `lib/seo/`, Phase 7 records a gap; MUST NOT inline invented schema.

**15.4 Verification-reveals-missing-primitive rule:** If Phase-7 auditing reveals a genuinely required primitive/behavior that no frozen component provides, it MUST be recorded here as a gap and escalated for a governed spec change; it MUST NOT be built inside Phase 7.

---

*End of 08_Phase7_Polish_And_Optimization_Specification_v1.0.*
