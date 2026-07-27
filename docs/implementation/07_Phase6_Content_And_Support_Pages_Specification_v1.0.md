# 07_Phase6_Content_And_Support_Pages_Specification_v1.0

**Project:** NorAI Technologies Website — Phase 6: Content & Support Pages
**Status:** Immutable, implementation-ready contract. Ready to freeze.
**Authority (highest first):** Design Bible v1.0 → Frontend Masterplan v1.0 → Frontend_Architecture_Specification_v1.0 → 01_Project_Foundation (frozen) → 02A_Atoms (frozen) → 03_Phase2B_Molecules (frozen) → 04_Phase3_Organisms (frozen) → 05_Phase4_Homepage_Assembly (frozen) → 06_Phase5_Core_Pages (frozen).
**Stack (fixed):** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 (tokens as CSS variables) · Lucide React · Framer Motion · shadcn/ui (primitives only) · ESLint + Prettier · Mobile-first.

> Phase 6 is **pure composition** of frozen components into the remaining public content and utility pages. It MUST NOT create components, tokens, layouts, animations, or flows. The four prerequisite tokens (02A §11.1) and the validated Phase-3 substitution (`IconBox`→`Icon`; media via `next/image` + `Avatar`) are carried forward unchanged.

---

## 0. Scope Reconciliation With the Masterplan (binding)

The Masterplan (§5 Build Order, Phase 6) defines Phase 6 as: **"Blog Hub, MDX/CMS integration, Utility Pages (404, Legal)."** The Frontend_Architecture_Specification §3 route table defines the concrete content/utility routes: `/blog` (Narrow), `/blog/[slug]` (Narrow), `/[policy]` legal (Narrow), and `not-found` (Default).

Applying "higher-level documents override lower-level" and the user's instruction to follow the Masterplan where it excludes pages:

| Requested candidate | Ruling | Basis |
|---|---|---|
| Blog Index (`/blog`) | **INCLUDED** | Masterplan §5, Arch §3 |
| Blog Article (`/blog/[slug]`) | **INCLUDED** | Masterplan §5, Arch §3 |
| Privacy Policy, Terms of Service, Cookie Policy | **INCLUDED** as `/[policy]` legal routes | Masterplan §5 "Legal"; Arch §3 `(legal)/[policy]` |
| 404 / Not Found | **INCLUDED** | Masterplan §5, Arch §3 `not-found` |
| Documentation Landing / Article | **EXCLUDED** | Masterplan §9 Phase 3 explicitly defers docs to `docs.noraitech.com` (separate app). NOT part of this website. |
| FAQ Page (separate) | **EXCLUDED** | FAQ exists only as a homepage/product `FAQSection` Organism (Phase 3/4/5). No standalone FAQ route is defined in any frozen doc. |
| Search | **EXCLUDED as a route** | No `/search` route is defined in any frozen doc. `SearchField` (Molecule) is used **only** for in-page Blog filtering, not a search page. |

**MDX/CMS integration:** The Masterplan lists MDX/CMS under Phase 6, but the user scope explicitly excludes "CMS implementation" and "MDX pipeline." This is a documented boundary, not a contradiction: Phase 6 specifies the **rendering contract and content shape** for blog/legal content; the **MDX/CMS pipeline implementation is OUT OF SCOPE** and flagged in §15.2. Content is assumed provided at the Server Component route boundary via the frozen `lib/content/` loaders (Phase 1), which already exist as contracts.

---

## 1. Architecture Rules

1.1 **Composition order (unchanged):** Layouts → Templates → Organisms → Molecules → Atoms → Foundation. Pages order Templates/Organisms and pass content via props only.

1.2 **Layout binding.** `/blog`, `/blog/[slug]`, and all `/[policy]` legal routes MUST use the **Narrow layout** route groups (`(content)` for blog, `(legal)` for legal), max width 720 (Arch §3, Masterplan §4.1 "Narrow Layout … Blog, Privacy Policy"). `not-found` MUST use `DefaultLayout` (Arch §3).

1.3 **Templates.** `/blog/[slug]` MUST use the frozen `BlogPostTemplate`; `/[policy]` MUST use the frozen `LegalTemplate`; `/blog` MUST use `HubTemplate`. No new template MUST be created.

1.4 **Server/Client rules.** All route `page.tsx` files MUST be Server Components. Client behavior is confined to frozen interactive Organism/Molecule subtrees (`Header` menu, `BlogPreviewSection` `SearchField`/`Pagination`, `Accordion`). No page-level Client boundary.

1.5 **Dependency rules.** Pages MAY import Layouts, Templates, Organisms, Foundation, and `lib/seo`/`lib/content`. Pages MUST NOT import Atoms/Molecules directly except Foundation wrappers. Pages MUST NOT contain business logic, fetching in presentation, or Server Action bodies.

1.6 **Metadata rules.** Every route MUST export unique metadata via `lib/seo/`. `/blog/[slug]` and `/[policy]` MUST use `generateMetadata` keyed on slug/policy. `generateStaticParams` MUST enumerate known blog slugs and the fixed legal policy set.

1.7 **Routing conventions.** Lowercase segments; dynamic segments `[slug]` (blog) and `[policy]` (legal). The legal `[policy]` set is FIXED to exactly: `privacy-policy`, `terms-of-service`, `cookie-policy`. Unknown blog slugs and unknown policies MUST resolve to `not-found`.

1.8 **Internal linking philosophy.** No dead ends (Design Bible §3.3). Every page MUST link to `/contact` (via `Footer`, minimum) and provide a logical next step.

---

## 2. Route Inventory

| Route | Purpose | Layout | Template | Page ownership | SEO expectation |
|---|---|---|---|---|---|
| `/blog` | Blog Hub — list posts, filter, paginate | Narrow (`(content)`) | `HubTemplate` | Server Component | Unique title/desc; `Blog` + `ItemList` JSON-LD |
| `/blog/[slug]` | Blog Article — long-form reading | Narrow (`(content)`) | `BlogPostTemplate` | Server; `generateStaticParams`+`generateMetadata` | Per-article; `Article`/`BlogPosting` JSON-LD |
| `/privacy-policy` | Privacy Policy | Narrow (`(legal)`) | `LegalTemplate` | Server | Unique title/desc; canonical |
| `/terms-of-service` | Terms of Service | Narrow (`(legal)`) | `LegalTemplate` | Server | Unique title/desc; canonical |
| `/cookie-policy` | Cookie Policy | Narrow (`(legal)`) | `LegalTemplate` | Server | Unique title/desc; canonical |
| `not-found` | 404 utility | Default | — | Server | `noindex`; no canonical |

The three legal routes are one dynamic segment `(legal)/[policy]/page.tsx` with `generateStaticParams` producing exactly the three fixed slugs.

---

## 3. Page Specifications

Organism/Template-internal behavior is defined in earlier frozen phases and MUST NOT be repeated or altered. `(mandatory)`/`(optional)` are binding.

### 3.1 Blog Hub — `/blog`

- **Purpose:** List blog posts; enable in-page search and pagination; route into articles.
- **User intent:** "What has NorAI written; find something relevant to read."
- **Information hierarchy:** H1 (blog headline) → search → post grid → pagination → conversion CTA.
- **Psychological flow:** Orient → filter/scan → select article → (later) convert.
- **Composition tree (deterministic):**

```
NarrowLayout ((content) group)
└── HubTemplate
    ├── HeroStandard              (mandatory, TextOnly, H1)
    ├── BlogPreviewSection        (mandatory — Hub variant)
    │   ├── SearchField           (mandatory — in-page filter)
    │   ├── BlogCard[]            (mandatory — interactive)
    │   └── Pagination            (mandatory when totalPages > 1)
    └── CTASection                (mandatory — to /contact)
```

- **Required sections:** `HeroStandard`, `BlogPreviewSection` (Hub), `CTASection`.
- **Optional sections:** none.
- **Forbidden sections:** Pricing, Product grid, Team, ProcessFlow, Testimonials.
- **CTA behavior:** Each `BlogCard` is a single `<a>` → `/blog/[slug]`. Final `CTASection` single Primary → `/contact`.
- **Content contracts:** Blog headline ≤10 words; card excerpt ≤25 words; ≥1 post MUST render; empty results (search) MUST render `EmptyState` with a reset/next step; zero posts MUST render `EmptyState` (never empty grid).
- **Responsive:** Narrow reading width; cards 1-up mobile → 2-up within Narrow at desktop.
- **Accessibility:** One H1; `SearchField` `type=search` labeled; cards single accessible name; pagination `<nav aria-label="Pagination">`.
- **SEO:** `Blog` + `ItemList` JSON-LD; canonical `/blog`; paginated views MUST set canonical to the base `/blog` (no invented page params unless the frozen `Pagination` provides query state; if it does, canonical MUST point to page 1). Pagination state is client-side per frozen `Pagination`; SSR list is page 1.
- **Internal links:** → each `/blog/[slug]`; → `/contact`.

### 3.2 Blog Article — `/blog/[slug]`

- **Purpose:** Present a single long-form article optimized for reading.
- **User intent:** "Read this article; understand NorAI's expertise."
- **Information hierarchy:** H1 (article title) → meta → body → related/next → CTA.
- **Psychological flow:** Read → trust expertise → next step (related post or contact).
- **Composition tree (deterministic):**

```
NarrowLayout ((content) group)
└── BlogPostTemplate
    ├── Breadcrumb                (mandatory — Blog / <Article>)
    ├── HeroStandard              (mandatory, TextOnly, H1 = article title)
    │   └── Text meta             (author, date — via Organism content)
    ├── Article body slot         (mandatory — rendered content, headings H2+)
    ├── BlogPreviewSection        (optional — related posts, Preview variant)
    └── CTASection                (mandatory — to /contact)
```

- **Required sections:** `Breadcrumb`, `HeroStandard` (title + meta), article body, `CTASection`.
- **Optional sections:** related posts (`BlogPreviewSection` Preview).
- **Forbidden sections:** Pricing, Product grid, Team, comment systems (no such Organism exists).
- **CTA behavior:** Final `CTASection` single Primary → `/contact`; related cards link to other `/blog/[slug]`.
- **Content contracts:** Article title = single H1; body headings MUST start at H2 with no skipped levels; sentences average 15–18 words; images via `next/image`; no stock photography; code snippets use `--font-mono`.
- **Responsive:** Narrow (720) reading column; images constrained to column width; no horizontal scroll.
- **Accessibility:** One H1; body uses `<article>`; sequential headings; code blocks readable; links descriptive (no "Click Here").
- **SEO:** `generateMetadata(slug)`; `Article`/`BlogPosting` JSON-LD (headline, datePublished, author, image); canonical `/blog/[slug]`; `generateStaticParams` for known slugs.
- **Internal links:** → related `/blog/[slug]`; → `/blog`; → `/contact`.

### 3.3 Legal Pages — `/privacy-policy`, `/terms-of-service`, `/cookie-policy`

- **Purpose:** Present legally required policy content (Vikram/Enterprise trust persona — Design Bible §2.4).
- **User intent:** "Read the legal terms; verify compliance."
- **Information hierarchy:** H1 (policy title) → last-updated → sectioned long-form body.
- **Psychological flow:** Locate → read specific clause → return to site.
- **Composition tree (deterministic):**

```
NarrowLayout ((legal) group)
└── LegalTemplate
    ├── HeroStandard              (mandatory, TextOnly, H1 = policy title)
    │   └── Text last-updated     (mandatory)
    └── Policy body slot          (mandatory — long-form, headings H2+)
```

- **Required sections:** `HeroStandard` (title + last-updated), policy body.
- **Optional sections:** none.
- **Forbidden sections:** CTA sections, Pricing, Product grid, marketing content, Testimonials. Legal pages MUST NOT carry conversion CTAs (they are Tier-4 utility; escape hatch is the global `Footer`).
- **CTA behavior:** None in-page. Navigation via `Header`/`Footer` only.
- **Content contracts:** Single H1 = policy name; "Last updated" date MUST be present; body sectioned with H2/H3; sentences plain and precise; no marketing language.
- **Responsive:** Narrow (720) reading width; no horizontal scroll.
- **Accessibility:** One H1; `<article>`/sectioned semantics; sequential headings; anchor links to sections MUST have visible focus and reachable targets.
- **SEO:** Unique title/desc; canonical per policy; `indexable`. No structured data required (see §11).
- **Internal links:** via `Footer` only (which links to `/contact` and policies) — no dead end because `Footer` provides navigation.

### 3.4 Not Found — `not-found`

- **Purpose:** Handle unknown routes with an escape hatch (no dead ends — Design Bible §3.3, §7.1).
- **User intent:** "I hit a broken/unknown URL; get me somewhere useful."
- **Information hierarchy:** H1 (not-found message) → explanation → recovery actions.
- **Psychological flow:** Recognize error → recover via clear next steps.
- **Composition tree (deterministic):**

```
DefaultLayout
└── ErrorState                    (mandatory — NotFound variant)
    ├── Heading (H1)
    ├── Text (explanation)
    └── CTAGroup                  (mandatory — Home + Products, single Primary)
```

- **Required sections:** `ErrorState` (NotFound variant) with recovery `CTAGroup`.
- **Optional sections:** none.
- **Forbidden sections:** Pricing, Product grid, Team, Testimonials, forms.
- **CTA behavior:** `CTAGroup` MUST offer Home (Primary) and Products (secondary). Exactly one Primary.
- **Content contracts:** Message ≤12 words; explanation ≤25 words; no humor that obscures recovery; no stack traces.
- **Responsive:** Centered, stacked; CTAs full-width on mobile.
- **Accessibility:** One H1; `role="alert"` per `ErrorState`; keyboard-operable recovery links.
- **SEO:** MUST send HTTP 404 status; MUST be `noindex`; MUST NOT set a canonical.
- **Internal links:** → `/` (Home); → `/products`; global `Footer` → `/contact`.

---

## 4. Component Composition Rules

4.1 **Reused Foundation:** `Container`, `Section`, `Grid`, `Stack`, `Heading`, `Text`, `VisuallyHidden`.

4.2 **Reused Layouts/Templates:** `NarrowLayout` (`(content)`, `(legal)`); `DefaultLayout` (`not-found`); `HubTemplate` (`/blog`); `BlogPostTemplate` (`/blog/[slug]`); `LegalTemplate` (legal routes).

4.3 **Reused Organisms:** `Header`, `Footer`, `HeroStandard`, `BlogPreviewSection`, `BlogCard`, `CTASection`, `ErrorState` (Molecule used at page root inside `DefaultLayout`), plus `Breadcrumb` (Molecule).

4.4 **Reused Molecules/Atoms:** `SearchField`, `Pagination`, `Breadcrumb`, `EmptyState`, `CTAGroup`, `Text`, `Tag`/`Badge` (article meta) — only as already composed inside their Organisms/Templates, or where a Template exposes the slot.

4.5 **Explicitly FORBIDDEN:** duplicated components; alternative layouts; unnecessary wrappers around Templates/Organisms; reinvented primitives; new reusable components; a standalone Search Organism; a comment/like Organism; a Documentation template. If a component appears genuinely required, the implementer MUST STOP and document the gap (§15.2), not build it.

---

## 5. Internal Linking Rules (navigation graph)

```mermaid
graph TD
    Blog[/blog/] --> Article[/blog/slug/]
    Article --> RelatedArticle[/blog/other-slug/]
    Article --> Blog
    Blog --> Contact[/contact/]
    Article --> Contact
    NotFound[not-found] --> Home[/]
    NotFound --> Products[/products/]
    Footer((Footer)) --> Privacy[/privacy-policy/]
    Footer --> Terms[/terms-of-service/]
    Footer --> Cookie[/cookie-policy/]
    Footer --> Contact
    Privacy --> Footer
    Terms --> Footer
    Cookie --> Footer
```

5.1 **No dead ends.** Every page MUST reach `/contact` (in-page CTA for blog; via `Footer` for legal/404).
5.2 **Breadcrumbs.** `/blog/[slug]` MUST render `Breadcrumb` (`Blog / <Article>`). `/blog`, legal, and `not-found` MUST NOT render a breadcrumb.
5.3 **Footer legal links.** The frozen `Footer` MUST link to all three legal routes; legal pages rely on `Footer` for navigation.
5.4 **Related content.** Blog articles SHOULD link to related articles when provided; if none, related section is omitted (not empty).
5.5 **CTA destinations (fixed):** Blog Hub and Article final CTA → `/contact`; 404 Primary → `/`.

---

## 6. Content Contracts

| Rule | Specification |
|---|---|
| Heading limits | One H1 per page; H1 ≤10 words (blog/legal titles MAY exceed only when the title itself is longer, but MUST remain a single H1); body headings H2/H3, no skipped levels |
| Paragraph limits | Body paragraphs SHOULD be ≤4 sentences; sentences average 15–18 words (Design Bible §8.2) |
| CTA wording | Verb-led, outcome-focused; "Click Here" FORBIDDEN |
| Tone of voice | Blog: intelligent, precise, honest; Legal: plain, precise, non-marketing; 404: clear and helpful |
| Prohibited language | Superlatives ("best", "fastest"); hype; "micro-SaaS" |
| AI claim restrictions | Blog claims MUST be substantiated; no fabricated metrics or unverifiable capability claims |
| Legal specifics | "Last updated" date mandatory; no marketing insertions; no CTAs |
| Media | `next/image` WebP only; no stock photography; no cliché AI graphics; code in `--font-mono` |

---

## 7. Responsive Rules

7.1 Mobile-first at 375px, scale via `min-width`; zero horizontal scroll at 375px (hard gate).
7.2 Containers: blog and legal use Narrow (720); `not-found` uses Default (1120) centered.
7.3 Stacking: blog card grid 1-up mobile → 2-up desktop within Narrow; 404 content always single column.
7.4 Grid: `BlogPreviewSection` reflow per frozen Organism; article/legal body is single-column reading measure.
7.5 Spacing: base-8 `--space-*` only; uniform inter-section rhythm.
7.6 Breakpoints: only frozen Foundation `min-width` screens; ultra-wide caps at the Narrow measure for reading pages.

---

## 8. Accessibility (WCAG 2.1 AA)

8.1 Heading hierarchy: exactly one H1 per page; sequential H2/H3; no skipped levels (article/legal bodies included).
8.2 Landmarks: one `<header>`(nav), one `<main>`, one `<footer>`; article uses `<article>`; legal uses sectioned semantics.
8.3 Forms: only `SearchField` on `/blog` — labeled, `type=search`, operable; no other forms in Phase 6.
8.4 Keyboard navigation: search, pagination, blog cards, breadcrumb, and 404 recovery links fully operable via Tab/Enter/Space; in-page anchor links (legal) reachable and focusable.
8.5 Focus visibility: visible 3px `--accent` focus ring on `:focus-visible`; never removed.
8.6 ARIA: pagination `<nav aria-label="Pagination">` with `aria-current`; breadcrumb `aria-current="page"`; 404 `role="alert"`; search `role=searchbox` semantics.
8.7 Screen readers: blog cards expose one accessible name; article meta in text; decorative images empty `alt`.
8.8 Contrast: ≥4.5:1 normal, ≥3:1 large/non-text; color never the sole signal.

---

## 9. Motion

9.1 Reuse frozen motion only. Blog Hub sections and article sections reveal **once** via `useScrollReveal` (fade + slight upward translate). Legal pages and `not-found` SHOULD NOT animate beyond a single subtle reveal; legal reading content MUST NOT stagger.
9.2 Timing: reveals `--duration-slow`; interaction feedback `--duration-fast`; easing `--ease-smooth`.
9.3 Reduced motion: `prefers-reduced-motion` disables reveals and `BlogCard` hover elevation; final state instant.
9.4 Allowed: `transform`/`opacity` only; `BlogCard` hover elevation (interactive card).
9.5 Forbidden: autoplay carousels, parallax, count-up, layout-property animation, scroll-jacking, animation on legal reading content.

---

## 10. SEO

10.1 Metadata: each route unique `title`/`description` via `lib/seo/`; `/blog/[slug]` and `/[policy]` via `generateMetadata`.
10.2 Canonical: absolute per route; `not-found` MUST NOT set canonical and MUST be `noindex` with HTTP 404.
10.3 OpenGraph: `og:title/description/url/image`; blog articles MAY supply article OG image; default from `public/og/`.
10.4 Twitter Cards: summary-large-image with title/description/image.
10.5 Sitemap: `/blog`, all known `/blog/[slug]`, and the three legal routes MUST be in `app/sitemap.ts`; `not-found` MUST NOT be in the sitemap. Blog slug entries generated from the same source as `generateStaticParams`.
10.6 Indexing: blog and legal are indexable; `not-found` is `noindex`.

---

## 11. Structured Data Requirements

| Route | JSON-LD | Required fields |
|---|---|---|
| `/blog` | `Blog` + `ItemList` | blog name/url; list of article URLs |
| `/blog/[slug]` | `Article` or `BlogPosting` | headline, datePublished, dateModified (if available), author, image, mainEntityOfPage |
| Legal routes | none | Structured data MUST NOT be invented for legal pages |
| `not-found` | none | No structured data; `noindex` |

11.1 All JSON-LD MUST be generated via the frozen `lib/seo/` helpers (Phase 1). No new schema helper MUST be created; if a required schema type (e.g. `BlogPosting`) is not present in `lib/seo/`, the implementer MUST document the gap (§15.2), not invent inline JSON-LD.
11.2 No fabricated data (ratings, review counts, fake authors).

---

## 12. Testing Requirements

| Type | Requirement |
|---|---|
| Rendering | Each route renders its exact composition tree; required present, forbidden absent; legal pages render no CTA sections |
| Routing | Blog `generateStaticParams` slugs build; legal `[policy]` builds exactly the 3 fixed slugs; unknown slug/policy → `not-found` with HTTP 404 |
| Composition | Only frozen components used; templates used where mandated; no new component imports |
| Accessibility | axe zero critical violations; single H1 per page; landmark uniqueness; keyboard walkthrough; search/pagination/breadcrumb a11y; reduced-motion assertion |
| Metadata | Unique title/desc/canonical/OG/Twitter per route; blog/legal vary by slug/policy; `not-found` is `noindex`, HTTP 404, no canonical |
| Structured data | `Blog`/`ItemList` on `/blog`; `Article`/`BlogPosting` on article; none on legal/404; JSON-LD validates |
| Responsive | Visual regression at 375px/tablet/desktop/ultra-wide; Narrow measure enforced; zero horizontal scroll at 375px |
| Integration | Blog Hub → Article navigation; search empty-state; pagination; 404 recovery links reach Home/Products; Footer legal links resolve |

---

## 13. Validation

Phase 6 is NOT complete until ALL pass: ESLint (incl. a11y + no-hardcoded-value rules) clean; TypeScript strict type-check clean; production build succeeds (including `generateStaticParams` for blog + legal); full test suite (unit, integration, a11y, visual regression, structured-data) green.

---

## 14. Definition of Done

- [ ] `/blog`, `/blog/[slug]`, `/privacy-policy`, `/terms-of-service`, `/cookie-policy`, and `not-found` implemented.
- [ ] Blog/legal use Narrow layout groups; `not-found` uses `DefaultLayout`; mandated Templates used.
- [ ] Composition trees match §3 exactly; required present, forbidden absent, optional gated by content.
- [ ] No component/token/layout/animation/flow invented; no frozen API modified.
- [ ] Exactly one H1 per page; sequential headings; no skipped levels in article/legal bodies.
- [ ] Blog cards are interactive single-anchor links; hover elevation honored; informational content flat.
- [ ] Blog Hub search renders `EmptyState` on no results; zero posts → `EmptyState`; pagination present when >1 page.
- [ ] Blog article renders `Breadcrumb` (Blog / Article), meta, body (H2+), optional related, final CTA → `/contact`.
- [ ] Legal pages carry a "Last updated" date, contain no CTA sections, and rely on `Footer` navigation.
- [ ] `not-found` returns HTTP 404, is `noindex`, has no canonical, and provides Home + Products recovery (single Primary).
- [ ] No dead ends; every page reaches `/contact` (in-page or via `Footer`).
- [ ] Zero hardcoded color/space/type/radius/shadow/motion values; four prerequisite tokens (02A §11.1) defined beforehand.
- [ ] Reveals fire once; `transform`/`opacity` only; `prefers-reduced-motion` honored; legal reading content not animated.
- [ ] All imagery via `next/image` (WebP, dimensions); code in `--font-mono`; no stock photography; no cliché AI graphics.
- [ ] Visible 3px `--accent` focus ring; keyboard operable; contrast ≥4.5:1 / ≥3:1; color not sole signal; touch ≥44px.
- [ ] Unique metadata/canonical/OG/Twitter per indexable route; sitemap includes blog + legal, excludes `not-found`.
- [ ] Structured data per §11; validated; none fabricated.
- [ ] ESLint, TypeScript, production build, and full test suite all pass.

---

## 15. AI Agent Constraints

15.1 **No contradiction found.** This specification composes frozen components without altering them. The Masterplan/scope reconciliation (§0) is documented, not resolved by invention. Any future contradiction MUST be documented here, not silently resolved.

15.2 **Documented gaps (MUST be flagged, not invented):**
- **MDX/CMS pipeline** — excluded by user scope though listed in Masterplan §5. Phase 6 assumes blog/legal content is provided at the Server Component boundary via frozen `lib/content/` loaders. If loaders or content are absent, the implementer MUST flag it, not build a pipeline.
- **`BlogPostTemplate` / `LegalTemplate` internals** — referenced as frozen Templates (Frontend_Architecture_Specification §2/§3). If either Template is not present in the codebase, the implementer MUST document the gap rather than invent a template.
- **`BlogPosting`/`Article`/`ItemList`/`Blog` JSON-LD helpers** — if not present in `lib/seo/`, flag as a gap; do not inline invented schema.
- **Documentation, standalone FAQ, and Search routes** — EXCLUDED (§0). MUST NOT be implemented in Phase 6.
- **Blog author/tag/category taxonomy pages** — no such route is defined in any frozen doc; MUST NOT be invented.

15.3 **Future implementation agents MUST NOT:** redesign previous phases; modify frozen APIs; invent components, layouts, or tokens; duplicate functionality; redefine existing layouts; introduce speculative features; begin Phase 7 (app/docs portals, auth, dashboards). If the specification is insufficient, the agent MUST document the missing requirement rather than invent behavior.

---

*End of 07_Phase6_Content_And_Support_Pages_Specification_v1.0. Composed strictly from frozen phases, the Masterplan build order, and the Architecture route table; no design decision, token, component, layout, animation, or flow invented. Scope reconciliation (§0) and documented gaps (§15.2) are flagged, not resolved. Carries forward the four prerequisite tokens (02A §11.1) and the validated Phase-3 substitution.*
