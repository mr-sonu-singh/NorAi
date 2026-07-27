# 04_Phase3_Organisms_Specification_v1.0

**Project:** NorAI Technologies Website — Phase 3: Organisms
**Status:** Immutable, implementation-ready specification.
**Authority (highest first):** Design Bible v1.0 → Frontend Masterplan v1.0 → Frontend_Architecture_Specification_v1.0 → 01_Project_Foundation_Specification_v1.0 (frozen) → 02_Phase2A_Atoms_Specification_v1.0 (frozen) → 03_Phase2B_Molecules_Specification_v1.0 (frozen).
**Stack (fixed):** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 (mapped to CSS-variable tokens) · Lucide React · Framer Motion · shadcn/ui (primitives only) · ESLint + Prettier · Mobile-first.

---

## 1. Architecture Rules (binding)

Organisms compose frozen Molecules and, where a Molecule does not exist for the need, frozen Atoms and Foundation primitives. Organisms own section-level presentation state only (open/closed, active index, in-view). Organisms never fetch data, never contain business/validation logic, never call services or Server Actions, never introduce providers or architecture, and never duplicate Molecule functionality. All content and callbacks arrive via props. All styling uses only existing tokens; no token is invented. The 4 prerequisite tokens flagged in 02A §11.1 (`--opacity-disabled`, `--focus-ring-width`, `--border-width-default`, `--tooltip-delay`) remain prerequisites and are not re-defined here.

**Folder/file pattern** (identical to prior phases): `components/organisms/<sections | cards>/<Name>/{Name.tsx, Name.types.ts, Name.test.tsx, Name.stories.tsx, index.ts}` with named exports only and a single `components/organisms/index.ts` barrel.

**Scroll reveal (universal):** Every Section Organism reveals once on scroll using `useScrollReveal` (IntersectionObserver, fire-once) via Framer Motion — fade + slight upward translate, `transform`/`opacity` only, `--duration-slow` (500ms), `--ease-smooth`; disabled under `usePrefersReducedMotion` (renders final state instantly). Focus rings never animate.

**Container/rhythm (universal):** Section Organisms render inside Foundation `Section` + `Container` (Default 1120 unless stated Wide 1280 or Narrow 720) with vertical rhythm via `--space-*` only. One `H1` per page — only the Hero Organism used on a page emits `H1`; all other section headings are `H2` and below.

**Client vs Server (universal):** Section Organisms are Server Components unless they own presentation state or motion, in which case the interactive subtree is a Client Component and static content stays server-rendered.

**Card shell rule (binding, from Masterplan DDR + 03 §1.6):** Interactive cards (`ProductCard`, `BlogCard`) are Card Organisms that own their interactive shell and elevate + cast `--shadow-*` on hover. Informational cards (`FeatureCard`, `TeamMemberCard`, `TestimonialCard`, `PricingCard`) are frozen Phase-2B Molecules; Section Organisms compose these Molecules directly inside Foundation layout primitives (`Grid`, `Stack`) with no redundant Organism wrapper.

---

## 2. Organism Inventory

**Section Organisms:** `Header` (Navigation), `Footer`, `HeroTypographic`, `HeroStandard`, `FeatureSection`, `FeatureGrid`, `StatisticsSection`, `SocialProofStrip` (Logo Cloud / Trust Indicators), `TestimonialsSection`, `PricingSection`, `FAQSection`, `CTASection`, `ContactSection`, `TeamSection`, `BlogPreviewSection`, `ComparisonTable`, `Timeline`, `ProcessFlow`, `UseCasesSection`.
**Card Organisms:** `ProductCard`, `BlogCard`.

**Newsletter ruling (deterministic):** Newsletter is Phase-2 "Traction" scope (Design Bible §9) and is not part of the current site. No Newsletter Organism is specified. It is excluded, not deferred within this document.

---

## 3. Section Organisms

### 3.1 Header (Navigation)
- **Purpose:** Global top navigation and primary conversion entry.
- **Responsibilities:** Present brand, navigation, primary CTA; manage mobile menu open/closed and scrolled state.
- **Composition tree:** `Header` → [`Logo` (mandatory)] + [`NavigationGroup` (mandatory)] + [`Button`/`Link` primary CTA (mandatory)] + [mobile `IconButton` hamburger (mandatory)].
- **Allowed child Molecules:** `Logo`, `NavigationGroup`. **Optional:** none.
- **Allowed child Atoms:** `Button`, `IconButton`, `Icon`, `Divider`, `Link`.
- **Public API:** `navItems`, `logoVariant`, `primaryCta`, `secondaryCta` (optional single), `sticky` (boolean).
- **Required variants:** Default, Sticky. Menu structure fixed: `Logo → Products ▾ → About → Blog → Team → [Get Started →]` (Design Bible §3.2).
- **Responsive:** Horizontal nav ≥tablet; mobile collapses to hamburger opening a vertical `NavigationGroup`; body scroll locked via `useLockBodyScroll` when open.
- **Accessibility:** Root `<nav>` landmark; hamburger `aria-expanded`/`aria-controls`; `aria-current` on active link via `useActiveNav`; focus trapped within open mobile menu; Esc closes.
- **State ownership:** Owns menu open/closed and scrolled state only.
- **Controlled/uncontrolled:** Uncontrolled internally; nav data controlled via props.
- **Required animations:** Mobile menu open/close `transform`/`opacity` moderate (300ms); dropdown fade `--duration-fast`; reduced-motion instant. No scroll-reveal on Header.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Exactly one Header per page; exactly one primary CTA in view.
- **Dependencies:** `Logo`, `NavigationGroup`, `Button`, `IconButton`, `useActiveNav`, `useLockBodyScroll`, `useMediaQuery`, `usePrefersReducedMotion`.
- **Acceptance criteria:** Renders full menu ≥tablet and hamburger on mobile; keyboard-operable menu with focus trap + Esc; active route indicated; zero hardcoded values; Client Component.

### 3.2 Footer
- **Purpose:** Global closing navigation, brand, and social/contact links.
- **Responsibilities:** Present brand, grouped navigation columns, social links, legal line; provide escape hatches (no dead ends).
- **Composition tree:** `Footer` → [`Logo` (mandatory)] + [`NavigationGroup` vertical ×N columns (mandatory)] + [`SocialLinks` (mandatory)] + [`Text` legal line (mandatory)] + [`Divider` (optional)].
- **Allowed child Molecules:** `Logo`, `NavigationGroup`, `SocialLinks`. **Optional:** none beyond stated.
- **Allowed child Atoms:** `Divider`, `Text`, `Link`.
- **Public API:** `columns` (title + links), `socialLinks`, `legalText`, `logoVariant`.
- **Required variants:** Default (multi-column). No other variant.
- **Responsive:** Columns stack single-column on mobile, multi-column grid ≥tablet.
- **Accessibility:** `<footer>` landmark; each column a labeled nav list; social links labeled per platform; contrast on dark surface ≥4.5:1.
- **State ownership:** None.
- **Controlled/uncontrolled:** Fully controlled via props.
- **Required animations:** Scroll-reveal once (universal §1); no other motion.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Exactly one Footer per page; links to Contact mandatory.
- **Dependencies:** `Logo`, `NavigationGroup`, `SocialLinks`, `Divider`, `useScrollReveal`, `usePrefersReducedMotion`.
- **Acceptance criteria:** Landmark present; all columns and social links render and are keyboard operable; stacks correctly on mobile; Server Component; zero hardcoded values.

### 3.3 HeroTypographic
- **Purpose:** Homepage opening statement ("What is this?").
- **Responsibilities:** Present the primary headline, subhead, and dual CTA; emit page `H1`.
- **Composition tree:** `HeroTypographic` → [`Heading` H1 (mandatory)] + [`Text` subhead (mandatory)] + [`Button`/`Link` primary + secondary CTA pair in Foundation `Stack` (mandatory)] + [`Badge`/`Pill` eyebrow (optional)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`, `Button`, `Link`, `Badge`, `Pill`.
- **Public API:** `eyebrow` (optional), `headline`, `subhead`, `primaryCta`, `secondaryCta` (optional).
- **Required variants:** Default (centered). No decorative background variant.
- **Responsive:** Single column; type scales via the fixed scale only; CTAs stack + full-width on mobile.
- **Accessibility:** Exactly one `H1`; CTA primary is strongest affordance.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once (universal); CTA hover per Atom.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Used once, on the homepage; exactly one primary CTA in view; no two Primary buttons.
- **Dependencies:** `Button`, `Link`, Foundation `Heading`/`Text`/`Stack`, `useScrollReveal`.
- **Acceptance criteria:** Emits single H1; dual CTA with one Primary; reveals once; Server Component; zero hardcoded values.

### 3.4 HeroStandard
- **Purpose:** Interior page hero (Products Hub, Product Detail, About, Team, Blog Hub).
- **Responsibilities:** Present outcome-focused headline, subhead, optional dual CTA, optional supporting media slot; emit page `H1`.
- **Composition tree:** `HeroStandard` → [`Heading` H1 (mandatory)] + [`Text` subhead (mandatory)] + [`Button`/`Link` CTA pair in Foundation `Stack` (optional)] + [`Breadcrumb` (optional)] + [media slot (optional)].
- **Allowed child Molecules:** `Breadcrumb`. **Optional:** yes.
- **Allowed child Atoms:** `Heading`, `Text`, `Button`, `Link`, `Badge`.
- **Public API:** `headline`, `subhead`, `breadcrumb` (optional), `primaryCta` (optional), `secondaryCta` (optional), `media` (optional slot).
- **Required variants:** TextOnly, WithMedia (split alignment).
- **Responsive:** Split collapses to single column on mobile; media below text.
- **Accessibility:** One `H1`; breadcrumb uses its Molecule semantics.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once.
- **Loading/Error/Empty:** Media slot renders `LoadingState` when media absent-and-pending is signaled by prop; otherwise omitted.
- **Usage constraints:** One per page; media is real screenshot/authentic imagery only.
- **Dependencies:** `Breadcrumb`, `Button`, `Link`, Foundation primitives (`Heading`, `Text`, `Stack`), `useScrollReveal`.
- **Acceptance criteria:** Single H1; variants render; split reflows on mobile; Server Component; zero hardcoded values.

### 3.5 FeatureSection
- **Purpose:** Present a single feature theme (Problem/Solution, capability).
- **Responsibilities:** Section heading + supporting copy + one `FeatureCard` Molecule or split media.
- **Composition tree:** `FeatureSection` → [`Heading` H2 (mandatory)] + [`Text` (mandatory)] + [`FeatureCard` Molecule (optional)] + [media slot (optional)] + [`Button`/`Link` CTA (optional)].
- **Allowed child Molecules:** `FeatureCard`. **Optional:** yes.
- **Allowed child Atoms:** `Heading`, `Text`, `Button`, `Link`.
- **Public API:** `heading`, `body`, `feature` (optional), `media` (optional), `cta` (optional), `align` (media left/right).
- **Required variants:** TextLeftMediaRight, MediaLeftTextRight, TextOnly.
- **Responsive:** Split collapses to stacked single column on mobile.
- **Accessibility:** `H2`; media decorative gets `aria-hidden`.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Informational content stays flat (no false hover affordance).
- **Dependencies:** `FeatureCard`, `Button`, `Link`, Foundation, `useScrollReveal`.
- **Acceptance criteria:** Variants reflow correctly; flat presentation; Server Component; zero hardcoded values.

### 3.6 FeatureGrid
- **Purpose:** Grid of 4–6 feature capabilities (Product Detail features grid; Design Bible §5.1).
- **Responsibilities:** Section heading + responsive grid of `FeatureCard` Molecules.
- **Composition tree:** `FeatureGrid` → [`Heading` H2 (mandatory)] + [`Text` intro (optional)] + [`FeatureCard` Molecule ×N (mandatory, 4–6)].
- **Allowed child Molecules:** `FeatureCard` (mandatory). **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`.
- **Public API:** `heading`, `intro` (optional), `features` (4–6 items).
- **Required variants:** ThreeUp, TwoUp.
- **Responsive:** 1-up mobile → 2-up tablet → 2/3-up desktop via Foundation `Grid`.
- **Accessibility:** `H2`; feature cards flat and non-interactive; icons `aria-hidden`.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once (grid, not per-card cascade beyond one reveal).
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** 4–6 items only.
- **Dependencies:** `FeatureCard`, Foundation `Grid`, `useScrollReveal`.
- **Acceptance criteria:** Renders 4–6 flat cards; responsive columns; Server Component; zero hardcoded values.

### 3.7 StatisticsSection
- **Purpose:** Present quantitative proof (StatBar).
- **Responsibilities:** Section heading (optional) + row/grid of `StatCard`s.
- **Composition tree:** `StatisticsSection` → [`Heading` H2 (optional)] + [`StatCard` ×N (mandatory)].
- **Allowed child Molecules:** `StatCard` (mandatory). **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`, `Divider`.
- **Public API:** `heading` (optional), `stats` (items: value, label, icon optional).
- **Required variants:** TwoUp, ThreeUp, FourUp.
- **Responsive:** Stack on mobile; row/grid ≥tablet.
- **Accessibility:** Each stat announces value + label; not color-only.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once; no count-up animation (not defined in sources).
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Informational — flat, no hover elevation.
- **Dependencies:** `StatCard`, Foundation `Grid`, `useScrollReveal`.
- **Acceptance criteria:** Stats render and reflow; flat; Server Component; zero hardcoded values.

### 3.8 SocialProofStrip (Logo Cloud / Trust Indicators)
- **Purpose:** Establish trust early ("Can I trust them?") and carry verifiable trust indicators.
- **Responsibilities:** Present client/partner logos and/or trust indicators (verifiable company details) in a horizontal strip.
- **Composition tree:** `SocialProofStrip` → [`Text` eyebrow (optional)] + [logo items (mandatory)] + [`Badge`/`StatusDot` trust indicator (optional)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Text`, `Icon`, `Badge`, `Divider`, `Link`.
- **Public API:** `eyebrow` (optional), `logos` (image + name + href optional), `trustIndicators` (optional label/value).
- **Required variants:** LogoCloud, TrustIndicators.
- **Responsive:** Wrap/scroll horizontally on mobile; single row ≥desktop.
- **Accessibility:** Each logo has accessible name via `alt`; decorative separators `aria-hidden`; trust values have text.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once; no autoplay marquee.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** No cliché AI graphics; real logos only.
- **Dependencies:** Atoms, Foundation, `useScrollReveal`.
- **Acceptance criteria:** Logos/indicators render with accessible names; reflow on mobile; Server Component; zero hardcoded values.

### 3.9 TestimonialsSection
- **Purpose:** Social proof via quotes ("Has anyone used this?").
- **Responsibilities:** Section heading + set of `TestimonialCard` Molecules.
- **Composition tree:** `TestimonialsSection` → [`Heading` H2 (mandatory)] + [`TestimonialCard` Molecule ×N (mandatory)].
- **Allowed child Molecules:** `TestimonialCard` (mandatory). **Optional:** none.
- **Allowed child Atoms:** `Heading`.
- **Public API:** `heading`, `testimonials` (quote, authorName, authorRole, avatar optional).
- **Required variants:** Grid, Single.
- **Responsive:** 1-up mobile → 2/3-up desktop.
- **Accessibility:** Cards use blockquote/figure semantics; avatars alt = author.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once. No autoplaying carousel.
- **Loading/Error/Empty:** Renders `EmptyState` when `testimonials` is empty.
- **Usage constraints:** Authentic attribution mandatory; no stock avatars.
- **Dependencies:** `TestimonialCard`, `EmptyState`, Foundation `Grid`, `useScrollReveal`.
- **Acceptance criteria:** Renders cards or EmptyState; reflows; Server Component; zero hardcoded values.

### 3.10 PricingSection
- **Purpose:** Present pricing tiers (Product Detail).
- **Responsibilities:** Section heading + grid of `PricingCard` Molecules.
- **Composition tree:** `PricingSection` → [`Heading` H2 (mandatory)] + [`Text` intro (optional)] + [`PricingCard` Molecule ×N (mandatory)].
- **Allowed child Molecules:** `PricingCard` (mandatory). **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`, `Button`.
- **Public API:** `heading`, `intro` (optional), `tiers` (name, price or "Contact Sales", interval optional, features, highlighted optional, cta).
- **Required variants:** TwoTier, ThreeTier.
- **Responsive:** 1-up mobile → up to 3-up desktop.
- **Accessibility:** `H2`; one CTA per tier; feature lists are real lists.
- **State ownership:** None (no billing toggle — not defined in sources).
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once; highlighted emphasis via `--accent` only.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Exactly one CTA per card; "Contact Sales" replaces price for enterprise.
- **Dependencies:** `PricingCard`, `Button`, Foundation `Grid`, `useScrollReveal`.
- **Acceptance criteria:** Tiers render; single CTA each; reflow; Server Component; zero hardcoded values.

### 3.11 FAQSection
- **Purpose:** Answer objections (homepage/product FAQ).
- **Responsibilities:** Section heading + `Accordion` of `FAQItem`s; own expand/collapse state.
- **Composition tree:** `FAQSection` → [`Heading` H2 (mandatory)] + [`Accordion` containing `FAQItem` ×N (mandatory)].
- **Allowed child Molecules:** `Accordion`, `FAQItem` (mandatory). **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`.
- **Public API:** `heading`, `items` (question, answer), `expandMode` (single | multiple).
- **Required variants:** Single-open, Multiple-open.
- **Responsive:** Full-width; content reflows.
- **Accessibility:** Inherits `Accordion` semantics (`aria-expanded`/regions); keyboard operable.
- **State ownership:** Owns which item(s) expanded.
- **Controlled/uncontrolled:** Uncontrolled internally; content via props.
- **Required animations:** Accordion reveal via `transform`/opacity moderate; scroll-reveal once; reduced-motion instant.
- **Loading/Error/Empty:** Renders `EmptyState` when `items` empty.
- **Usage constraints:** No nested accordions.
- **Dependencies:** `Accordion`, `FAQItem`, `EmptyState`, `useScrollReveal`, `usePrefersReducedMotion`.
- **Acceptance criteria:** Expand/collapse works via keyboard; correct ARIA; Client subtree; zero hardcoded values.

### 3.12 CTASection
- **Purpose:** Final conversion prompt ("How do I start?").
- **Responsibilities:** Present closing headline + supporting copy + primary/secondary CTA pair in Foundation `Stack`.
- **Composition tree:** `CTASection` → [`Heading` H2 (mandatory)] + [`Text` (optional)] + [`Button`/`Link` CTA pair in Foundation `Stack` (mandatory)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`, `Button`, `Link`.
- **Public API:** `heading`, `body` (optional), `primaryCta`, `secondaryCta` (optional), `surface` (page | dark).
- **Required variants:** OnLight, OnDark.
- **Responsive:** Centered; CTAs stack + full-width on mobile.
- **Accessibility:** One primary action; contrast maintained on dark surface.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Exactly one primary CTA in view.
- **Dependencies:** `Button`, `Link`, Foundation `Heading`/`Text`/`Stack`, `useScrollReveal`.
- **Acceptance criteria:** Variants render with correct contrast; one Primary; Server Component; zero hardcoded values.

### 3.13 ContactSection
- **Purpose:** Convert via frictionless contact (Contact page).
- **Responsibilities:** Present the 3-field form and direct routing; own local form UI state (values, submitting, success/error presentation); delegate submission to a prop callback. No validation logic beyond passing provided error state to fields.
- **Composition tree:** `ContactSection` → [`Heading` H2 (mandatory)] + [`FormField` ×3 (Name, Email, Message — mandatory)] + [`Button` submit (mandatory)] + [`SocialLinks`/direct-email `Link`s (mandatory)] + [`Alert`/`Toast` feedback (mandatory)] + [`Breadcrumb` (optional)].
- **Allowed child Molecules:** `FormField`, `Alert`, `Toast`, `SocialLinks`, `Breadcrumb` (Breadcrumb optional; rest mandatory). **Optional:** `Breadcrumb`.
- **Allowed child Atoms:** `Heading`, `Text`, `Link`, `Input`, `Textarea`, `Button`.
- **Public API:** `onSubmit` (callback), `fieldErrors` (passed-in), `status` (idle | submitting | success | error), `directEmails` (`sales@`, `careers@`, `press@`).
- **Required variants:** Split (form + contact info), Stacked.
- **Responsive:** Split collapses to stacked single column on mobile.
- **Accessibility:** Each field labeled via `FormField`; success/error announced via live region; no `alert()`; success is in-page UI replacement.
- **State ownership:** Owns controlled field values and submit/success/error presentation state.
- **Controlled/uncontrolled:** Values controlled internally through `useForm`; submission and errors provided/returned via props.
- **Required animations:** Success/error `Alert`/`Toast` fade `--duration-fast`; scroll-reveal once; reduced-motion instant.
- **Loading/Error/Empty:** Submitting → button `loading`; success → in-page success state; error → `Alert`/`Toast`.
- **Usage constraints:** Maximum 3 fields; no browser `alert()`; single primary submit.
- **Dependencies:** `FormField`, `Alert`, `Toast`, `SocialLinks`, `Button`, `Link`, `useForm`, `ToastProvider`, `usePrefersReducedMotion`.
- **Acceptance criteria:** 3 fields, keyboard operable, labeled; in-page success/error; no `alert()`; Client Component; zero hardcoded values.

### 3.14 TeamSection
- **Purpose:** Present the team (Team page, homepage Team preview via variant).
- **Responsibilities:** Section heading + grid of `TeamMemberCard` Molecules + link to Careers.
- **Composition tree:** `TeamSection` → [`Heading` H2 (mandatory)] + [`TeamMemberCard` Molecule ×N (mandatory)] + [`Button`/`Link` to Careers (mandatory)].
- **Allowed child Molecules:** `TeamMemberCard` (mandatory). **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Link`, `Button`.
- **Public API:** `heading`, `members` (name, role, photo, socials optional), `careersLink`, `variant`.
- **Required variants:** FullGrid (Team page), Preview (homepage subset).
- **Responsive:** 1-up mobile → 3/4-up desktop.
- **Accessibility:** `H2`; avatars alt = name; authentic circular photos only.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once.
- **Loading/Error/Empty:** Renders `EmptyState` when `members` empty.
- **Usage constraints:** No stock photography; links to Careers mandatory (no dead end).
- **Dependencies:** `TeamMemberCard`, `Button`, `Link`, `EmptyState`, Foundation `Grid`, `useScrollReveal`.
- **Acceptance criteria:** Members render or EmptyState; Careers link present; reflow; Server Component; zero hardcoded values.

### 3.15 BlogPreviewSection
- **Purpose:** Surface recent posts (homepage preview / Blog Hub listing).
- **Responsibilities:** Section heading + grid of `BlogCard`s + optional `Pagination` (Hub) + optional `SearchField` (Hub).
- **Composition tree:** `BlogPreviewSection` → [`Heading` H2 (mandatory)] + [`SearchField` (optional)] + [`BlogCard` ×N (mandatory)] + [`Pagination` (optional)].
- **Allowed child Molecules:** `SearchField`, `Pagination` (both optional). **Optional:** both.
- **Allowed child Atoms/Organisms:** `Heading`, `BlogCard` (card Organism).
- **Public API:** `heading`, `posts` (title, excerpt, href, image, meta), `showSearch`, `pagination` (currentPage, totalPages, onPageChange).
- **Required variants:** Preview (fixed count, no pagination), Hub (search + pagination).
- **Responsive:** 1-up mobile → 2/3-up desktop.
- **Accessibility:** `H2`; interactive `BlogCard`s wrapped in `<a>`; search/pagination use their Molecule semantics.
- **State ownership:** None (search/pagination state provided via props).
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once; card hover elevation per interactive-card rule.
- **Loading/Error/Empty:** `LoadingState` when `posts` pending flag set; `EmptyState` when empty (Hub search no-results).
- **Usage constraints:** Blog cards are interactive (elevate on hover).
- **Dependencies:** `BlogCard`, `SearchField`, `Pagination`, `EmptyState`, `LoadingState`, Foundation `Grid`, `useScrollReveal`.
- **Acceptance criteria:** Both variants render; empty/loading handled; interactive cards elevate; Server shell with Client subtrees for search/pagination; zero hardcoded values.

### 3.16 ComparisonTable
- **Purpose:** Compare capabilities/plans (Product Detail / Pricing support).
- **Responsibilities:** Present a semantic comparison table of rows × columns with boolean/text cells.
- **Composition tree:** `ComparisonTable` → [`Heading` H2 (optional)] + [table header cells (mandatory)] + [row label + cells with `Icon`/`StatusDot`/`Text` (mandatory)] + [`Badge` highlight (optional)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Icon`, `StatusDot`, `Text`, `Badge`, `Divider`.
- **Public API:** `heading` (optional), `columns` (labels, highlighted optional), `rows` (label + cell values: boolean | text).
- **Required variants:** FeatureComparison, PlanComparison.
- **Responsive:** Horizontal scroll within container on mobile with sticky first column; full table ≥desktop; no page horizontal scroll.
- **Accessibility:** Native `<table>` with `<th scope>`; boolean cells use `Icon` + `VisuallyHidden` text (not color/icon alone); highlighted column labeled in text.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once; no cell animation.
- **Loading/Error/Empty:** `EmptyState` when no rows.
- **Usage constraints:** Boolean cells must carry text-equivalent; no color-only meaning.
- **Dependencies:** Atoms, Foundation, `EmptyState`, `useScrollReveal`.
- **Acceptance criteria:** Semantic table with scopes; accessible boolean cells; mobile scroll without page overflow; Server Component; zero hardcoded values.

### 3.17 Timeline
- **Purpose:** Present ordered milestones (About origin story / roadmap presentation).
- **Responsibilities:** Present a vertical (mobile) / alternating (desktop) ordered list of milestone items.
- **Composition tree:** `Timeline` → [`Heading` H2 (optional)] + [milestone items: `Heading` subhead + `Text` + `Icon`/`StatusDot` marker (mandatory)] + [`Badge` date (optional)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`, `Icon`, `StatusDot`, `Badge`, `Divider`.
- **Public API:** `heading` (optional), `items` (title, description, date optional, icon optional).
- **Required variants:** Vertical, Alternating.
- **Responsive:** Vertical single-rail on mobile; alternating two-side ≥desktop.
- **Accessibility:** Ordered list semantics (`<ol>`); markers decorative (`aria-hidden`); dates in text.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once (single reveal, no per-item cascade beyond one).
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Chronological order preserved as provided.
- **Dependencies:** Atoms, Foundation, `useScrollReveal`.
- **Acceptance criteria:** Ordered semantics; both variants reflow; Server Component; zero hardcoded values.

### 3.18 ProcessFlow
- **Purpose:** Show the unified product model `Input → AI → Output` (homepage showcase, Product Detail 3-step workflow).
- **Responsibilities:** Present an ordered 3-step visual flow with step markers and captions.
- **Composition tree:** `ProcessFlow` → [`Heading` H2 (optional)] + [3 steps: `Icon` (inside Foundation layout if spacing is needed) + `Heading` subhead + `Text` (mandatory)] + [connector `Icon` (mandatory)] + [`Badge` step index (optional)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Icon`, `Heading`, `Text`, `Badge`, `Divider`.
- **Public API:** `heading` (optional), `steps` (exactly 3: icon, title, description).
- **Required variants:** Horizontal (desktop), Vertical (mobile).
- **Responsive:** Horizontal ≥tablet with connectors; vertical stacked on mobile.
- **Accessibility:** Ordered list semantics; connectors decorative (`aria-hidden`); step order announced.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once.
- **Loading/Error/Empty:** Not applicable.
- **Usage constraints:** Exactly 3 steps (Input → AI → Output).
- **Dependencies:** Atoms, Foundation, `useScrollReveal`.
- **Acceptance criteria:** Exactly 3 ordered steps; reflow horizontal/vertical; Server Component; zero hardcoded values.

### 3.19 UseCasesSection
- **Purpose:** Show audience fit ("Who is this for?").
- **Responsibilities:** Section heading + grid of use-case entries built on `FeatureCard` Molecules.
- **Composition tree:** `UseCasesSection` → [`Heading` H2 (mandatory)] + [`FeatureCard` Molecule ×N (mandatory)] + [`Button`/`Link` CTA (optional)].
- **Allowed child Molecules:** `FeatureCard`. **Optional:** yes.
- **Allowed child Atoms:** `Heading`, `Button`, `Link`.
- **Public API:** `heading`, `useCases` (icon, title, description), `cta` (optional).
- **Required variants:** TwoUp, ThreeUp.
- **Responsive:** 1-up mobile → 2/3-up desktop.
- **Accessibility:** `H2`; cards flat, non-interactive.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Scroll-reveal once.
- **Loading/Error/Empty:** `EmptyState` when `useCases` empty.
- **Usage constraints:** Informational — flat cards.
- **Dependencies:** `FeatureCard`, `Button`, `Link`, `EmptyState`, Foundation `Grid`, `useScrollReveal`.
- **Acceptance criteria:** Cards render or EmptyState; flat; reflow; Server Component; zero hardcoded values.

---

## 4. Card Organisms

*Note on image rendering:* Product and blog media are rendered using Next.js `Image`. Person imagery uses the frozen `Avatar` Atom. No `Image` Atom exists.

### 4.1 ProductCard (interactive)
- **Purpose:** Navigable product summary linking to `/products/[slug]`.
- **Responsibilities:** Wrap product content in an interactive, elevating card shell that navigates.
- **Composition tree:** `ProductCard` → shell (`<a>`) → [Next.js `Image`/screenshot (mandatory)] + [`Heading` name (mandatory)] + [`Text` summary (mandatory)] + [`Badge`/`Tag` category (optional)] + [`Link`/`Icon` affordance (mandatory)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`, `Icon`, `Badge`, `Tag`, `Link`.
- **Public API:** `name`, `summary`, `href`, `image` (optional), `category` (optional).
- **Required variants:** Default, Expanded (Products Hub).
- **Responsive:** Full-width mobile → grid cell desktop.
- **Accessibility:** Entire card is a single `<a>`; no nested interactive elements; accessible name from heading.
- **State ownership:** None (hover is CSS state).
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Hover elevation + `--shadow-*` via `transform`/`opacity` `--duration-fast`; reduced-motion disables elevation motion.
- **Loading/Error/Empty:** `Skeleton` shell when `image` pending flag set.
- **Usage constraints:** Interactive card — elevates on hover; single navigation target.
- **Dependencies:** Atoms, `Skeleton`, Foundation, `usePrefersReducedMotion`.
- **Acceptance criteria:** Single anchor; hover elevation; keyboard focus + activate; `--radius-lg`; zero hardcoded values.

### 4.2 BlogCard (interactive)
- **Purpose:** Navigable blog post summary linking to `/blog/[slug]`.
- **Composition tree:** `BlogCard` → shell (`<a>`) → [Next.js `Image`/`Skeleton` (mandatory)] + [`Heading` title (mandatory)] + [`Text` excerpt (mandatory)] + [`Text`/`Badge` meta (mandatory)] + [`Tag` category (optional)].
- **Allowed child Molecules:** none. **Optional:** none.
- **Allowed child Atoms:** `Heading`, `Text`, `Badge`, `Tag`, `Icon`.
- **Public API:** `title`, `excerpt`, `href`, `image`, `meta` (date/author), `category` (optional).
- **Required variants:** Default, Compact.
- **Responsive:** Full-width mobile → grid cell desktop.
- **Accessibility:** Single `<a>` per card; image `alt`; meta in text.
- **State ownership:** None.
- **Controlled/uncontrolled:** Controlled via props.
- **Required animations:** Hover elevation + `--shadow-*` `--duration-fast`; reduced-motion disables.
- **Loading/Error/Empty:** `Skeleton` when pending.
- **Usage constraints:** Interactive — elevates on hover.
- **Dependencies:** Atoms, `Skeleton`, Foundation, `usePrefersReducedMotion`.
- **Acceptance criteria:** Single anchor; hover elevation; keyboard operable; `--radius-lg`; zero hardcoded values.

---

## 5. Global Acceptance Criteria (all Organisms)

Every Organism composes only frozen Molecules/Atoms/Foundation; owns section-level presentation state only; performs no data fetching, business logic, service, or Server Action calls; introduces no provider, architecture, or token. Every Organism renders correctly at 375px/tablet/desktop/ultra-wide with zero horizontal scroll; uses only existing tokens (no hardcoded color/space/type/radius/shadow/motion); animates `transform`/`opacity` only with token timing and honors `prefers-reduced-motion`; satisfies WCAG 2.1 AA (semantic landmarks/roles, one `H1` per page from a single Hero, visible 3px `--accent` focus ring, contrast ≥4.5:1 / ≥3:1, color never the sole signal, keyboard operability); interactive cards elevate on hover while informational cards remain flat; passes lint, type-check, build, unit tests, Storybook stories (all variants and states including loading/error/empty where applicable), and keyboard/a11y verification.

---

*End of 04_Phase3_Organisms_Specification_v1.0. Composed strictly from frozen Foundation, Atom, and Molecule layers; no lower layer redesigned, no token invented, no architecture introduced. Newsletter is excluded as out-of-scope for the current site.*
