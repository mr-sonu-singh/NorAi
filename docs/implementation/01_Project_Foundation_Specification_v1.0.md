# Project_Foundation_Specification_v1.0.md

**Project:** NorAI Technologies Website — Phase 1: Project Foundation
**Status:** Production-ready. Implement before any UI component (Atoms onward).
**Authority:** Subordinate to Design Bible v1.0, Frontend Masterplan v1.0, Implementation Rules, AI Agent Guide, and Frontend_Architecture_Specification_v1.0. Adds no design decisions and invents no tokens.
**Stack (fixed):** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · CSS Custom Properties as single source of truth · Lucide React · Framer Motion · shadcn/ui (primitives only) · ESLint + Prettier · Mobile-first.

**Phase 1 goal:** Establish repository, routing shell, layouts, providers, configuration, token/style/Tailwind integration, fonts, metadata/SEO, content plumbing, and cross-cutting foundations. No visual UI atoms are built in this phase; only the Foundation-enabling scaffolding.

---

## 1. Repository Structure

```
noraitech-web/
├── app/                    # App Router (routing + group layouts only)
├── components/
│   └── foundation/         # Container, Text, Heading, Grid, Stack, Section, VisuallyHidden
├── providers/              # Root-mounted context providers
├── hooks/                  # Logic-only hooks
├── lib/
│   ├── utils/
│   ├── constants/
│   ├── seo/
│   ├── services/
│   ├── schemas/
│   └── content/
├── styles/
│   ├── tokens/             # CSS custom property definitions (single source of truth)
│   └── base/               # resets, base element rules
├── content/                # MDX sources (blog, products, legal)
├── config/                 # site config, navigation, route constants
├── types/                  # global/shared TypeScript types
├── public/
├── app/globals.css
├── eslint.config.mjs
├── .prettierrc
├── .prettierignore
├── .editorconfig
├── tsconfig.json
├── next.config.ts
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Phase 1 creates all directories above. `components/foundation/` is scaffolded (folder + barrel) but populated only with token-consuming primitives required to prove the token pipeline; styled atoms are deferred to Phase 2.

---

## 2. App Router Structure

Route groups bind pages to the correct Layout wrapper. Only shells and shared files are created in Phase 1; page bodies are stubs.

```
app/
├── layout.tsx              # Root layout: <html>/<body>, fonts, providers, base metadata
├── globals.css             # Token layer import + Tailwind v4 @theme
├── not-found.tsx           # 404 shell (Default layout)
├── error.tsx               # Root error boundary
├── loading.tsx             # Root loading state
├── sitemap.ts
├── robots.ts
├── (marketing)/
│   └── layout.tsx          # DefaultLayout binding
├── (content)/
│   └── layout.tsx          # NarrowLayout binding
└── (legal)/
    └── layout.tsx          # NarrowLayout binding
```

Route segments are lowercase; dynamic segments use bracket notation (`[slug]`). No page content is authored in Phase 1 beyond minimal placeholders needed to validate layouts.

---

## 3. Global Layouts

- **Root layout (`app/layout.tsx`):** Renders `<html lang>` / `<body>`, applies self-hosted font variables, mounts all providers (§4), injects base metadata (§10), and establishes `<main>` landmark expectations for child layouts.
- **Default Layout binding (`(marketing)/layout.tsx`):** Wraps children in Header + `Container` (Default 1120) + Footer regions. In Phase 1 the Header/Footer organisms are not built; layout renders semantic `<nav>`/`<main>`/`<footer>` landmark placeholders reserved for Phase 3.
- **Narrow Layout binding (`(content)/`, `(legal)/`):** `Container` Narrow (720) for reading-optimized pages.
- **Split Layout:** Declared as a Foundation composition (`components/foundation`/`layouts`), reserved for Contact/feature showcases; not mounted to a route group in Phase 1.

Layouts consume only Foundation `Container` sizes (Wide 1280 / Default 1120 / Narrow 720). No raw widths.

---

## 4. Providers

All mounted once in the root layout, in a fixed nesting order (outer → inner): `ThemeTokenProvider` → `MotionProvider` → `AnalyticsProvider` → `ToastProvider`.

- **ThemeTokenProvider:** Guarantees the token layer is present and available to the tree. No theme switching or invented values.
- **MotionProvider:** Global Framer Motion configuration; reads `--duration-*` / `--ease-smooth`; gates all motion through `prefers-reduced-motion`.
- **AnalyticsProvider:** Deferred, privacy-safe analytics initialization. No blocking scripts.
- **ToastProvider:** In-page success/error surface. Replaces browser `alert()` entirely (Design Bible §5.3, §8.3).

Providers are client components; the root layout remains a Server Component wrapping them.

---

## 5. Project Configuration

- **TypeScript:** `strict` mode on (`strictNullChecks`, `noImplicitAny`, `noUncheckedIndexedAccess`), `noUnusedLocals`/`noUnusedParameters`, `moduleResolution: bundler`, JSX preserved for Next.js, `isolatedModules`, path aliases (below). No implicit `any` permitted.
- **ESLint (`eslint.config.mjs`, flat config):** Next.js core-web-vitals + TypeScript + React 19 rules + jsx-a11y. Custom-gated rejections: hardcoded hex/`rgb()` color values, arbitrary pixel spacing, `alert()`, non-null assertions on DOM, missing `aria-label` on icon-only interactives, bare `<div>` used as clickable. Import-order enforcement.
- **Prettier (`.prettierrc`):** Single canonical format (quotes, semicolons, trailing commas, print width) shared with ESLint via integration; `.prettierignore` excludes build/content lockfiles.
- **Path aliases:** `@/*` → project root. Subpaths in use: `@/components`, `@/providers`, `@/hooks`, `@/lib`, `@/styles`, `@/config`, `@/types`, `@/content`.
- **Environment variables:** Declared in `.env.example` and validated at boot via the schema layer (§17). Categories: `NEXT_PUBLIC_SITE_URL` (canonical base), analytics keys, contact routing addresses (`sales@`/`careers@`/`press@`), CMS/content source keys. No secrets committed; server-only variables never prefixed `NEXT_PUBLIC_`.

`.editorconfig` and `.gitignore` created; `next.config.ts` sets image formats (WebP), strict mode, and typed routes.

---

## 6. Global Styles Architecture

Layered cascade with a single import chain in `app/globals.css`:

1. **Tokens layer** (`styles/tokens/`) — CSS custom properties (colors, typography, spacing, radius, shadows, motion, containers). Single source of truth.
2. **Tailwind v4 `@theme`** — maps tokens to Tailwind theme keys.
3. **Base layer** (`styles/base/`) — reset/normalize, box-sizing, base element defaults, root focus-ring behavior, `prefers-reduced-motion` global rule.

No component styles in the global layer. No raw values outside `styles/tokens/`. Cascade order is fixed to prevent specificity conflicts.

---

## 7. Design Token Integration

- **Location:** All tokens defined once as CSS custom properties in `styles/tokens/` and organized by category: colors (`--primary-50`→`900`, `--accent-50`→`700`, `--bg-page`/`--bg-elevated`/`--bg-dark`, `--success`/`--warning`/`--error`), typography (`--font-sans`, `--font-mono`, `--text-display-xl`→`--text-body-xs` with paired size/line-height/weight), spacing (`--space-1` 4px → `--space-32` 128px), radius (`--radius-sm` 4px → `--radius-full`; `--radius-default` 8px, `--radius-lg` 12px), shadows (`--shadow-xs`→`--shadow-xl`, `--shadow-accent`), motion (`--duration-fast`→`--duration-slow`, `--ease-smooth`), containers (`--container-wide` 1280 / `--container-default` 1120 / `--container-narrow` 720).
- **Consumption:** Exclusively via Tailwind utilities backed by variables or `var(--token)`. No component reads a raw value.
- **Governance:** Tokens are sacred (Design Bible §1.2). Missing tokens are flagged, never hardcoded. Values here are transcribed from source documents only — none invented.

---

## 8. Tailwind CSS v4 Integration

- Tailwind v4 configured through `@import "tailwindcss"` and an `@theme` block in `globals.css` (CSS-first configuration; no legacy JS config file).
- `@theme` maps every token category to Tailwind namespaces: `--color-*` from color tokens, font families from `--font-sans`/`--font-mono`, `--text-*` from the typographic scale, `--spacing-*` from the base-8 scale, `--radius-*`, `--shadow-*`, and `--breakpoint-*` (mobile-first `min-width` screens).
- Utilities resolve to variables, so tokens remain the single source of truth. Arbitrary-value utilities that bypass tokens are lint-rejected.

---

## 9. Font Architecture

- **Fonts:** Inter (`--font-sans`, UI/headings/body), JetBrains Mono (`--font-mono`, code).
- **Delivery:** Self-hosted via `next/font`, exposing CSS variables consumed by the token layer; preloaded; `display: swap` to protect LCP/CLS.
- **Application:** Font variables attached at `<body>` in the root layout; all usage flows through typographic tokens and the `Text`/`Heading` Foundation components. No inline font-family declarations.

---

## 10. Metadata Architecture

- **Base metadata:** Defined in root layout via the Metadata API — `metadataBase` (from `NEXT_PUBLIC_SITE_URL`), default title template, default description, Open Graph and Twitter defaults, canonical strategy.
- **Per-route:** Each page exports metadata (static or `generateMetadata`) producing unique `<title>`, description, canonical URL, and OG tags (Design Bible §8.2). Phase 1 provides the base and a reusable metadata builder in `lib/seo/`; per-page population occurs as pages are built.
- **Rule:** No page ships without unique title/description/canonical (enforced in Page DoD).

---

## 11. SEO Foundation

- `app/sitemap.ts` and `app/robots.ts` generated from the route/config source.
- `lib/seo/` provides metadata builders, canonical URL resolver, and structured-data (JSON-LD) helpers for Organization/Article/Product.
- Semantic landmark contract established in layouts (`<nav>`, `<main>`, `<article>`, `<footer>`); one `H1` per page enforced downstream.

---

## 12. Public Assets Structure

```
public/
├── images/                 # geometric/abstract brand illustrations
├── screenshots/            # real product screenshots
├── team/                   # authentic team photos (circular-crop source)
├── icons/                  # favicon set, app icons
├── og/                     # Open Graph default images
└── fonts/ (only if not bundled via next/font)
```

WebP is the delivery format for photographic/screenshot assets; all served through `next/image` with explicit dimensions. No stock photography, no cliché AI graphics (Design Bible §6.5).

---

## 13. Content Architecture

- **Sources:** MDX under `content/` split into `blog/`, `products/`, `legal/`.
- **Loaders:** `lib/content/` provides typed readers (list, by-slug), frontmatter parsing, and MDX compilation for the `(content)` and `(legal)` route groups.
- **Contracts:** Each content type has a frontmatter schema (§17) — required fields include title, description, canonical/slug, and OG fields to satisfy metadata.
- Phase 1 establishes loaders, types, and schemas; authored content and rendering templates are Phase 6.

---

## 14. Utility Architecture

`lib/utils/`: `cn` (token-safe class merge), `slugify`, date/number formatters, URL/canonical helpers, environment accessors. Pure, side-effect-free, unit-testable. No visual output, no token values embedded.

---

## 15. Hooks Architecture

`hooks/` (logic only, no markup): `usePrefersReducedMotion`, `useMediaQuery` (reads token breakpoints), `useScrollReveal` (IntersectionObserver, fire-once), `useLockBodyScroll`, `useActiveNav`, `useForm` (Contact, 3-field with inline validation). Phase 1 implements the motion/media/reduced-motion hooks required by providers; interaction hooks are stubbed with typed signatures for later phases.

---

## 16. Service Architecture

`lib/services/`: boundary modules for outbound side effects — contact submission service (routes to `sales@`/`careers@`/`press@`), analytics client, content source client. Services expose typed functions, validate inputs against schemas (§17), and never contain UI or tokens. Called only from Server Actions (§20) or providers, never directly from presentation components.

---

## 17. Schema Architecture

`lib/schemas/`: single source of runtime validation and inferred types — environment-variable schema (validated at boot), contact-form schema (Name, Email, Message — max 3 fields), content frontmatter schemas (blog/product/legal), and SEO metadata schema. TypeScript types are inferred from schemas to keep validation and types in sync.

---

## 18. Error Handling Architecture

- **Route boundaries:** `app/error.tsx` (root) and group-level error boundaries as needed; segment-level boundaries reserved for dynamic content routes.
- **404:** `app/not-found.tsx` with an escape hatch to Home and Products (no dead ends — Design Bible §3.3, §7.1).
- **User-facing feedback:** Surfaced through `ToastProvider` and in-page states; never `alert()`.
- **Service/action errors:** Normalized to typed results; validation failures returned as field-level messages for inline form display.

---

## 19. Loading State Architecture

- `app/loading.tsx` (root) plus segment-level `loading.tsx` for async/content routes, leveraging Suspense.
- Loading placeholders reserve layout space to protect CLS (< 0.05). Token-driven, motion gated by reduced-motion. No spinners that trigger layout shift.

---

## 20. Server Actions Architecture

- Server Actions are the single write path (e.g., contact submission), colocated per feature and invoked from forms.
- Every action validates input against a schema (§17) before calling a service (§16), returns a typed success/error result consumed by `useForm` + `ToastProvider` for in-page success/error states.
- Actions are server-only, never expose secrets, and enforce the frictionless 3-field contract.

---

## 21. Accessibility Foundation

- Global visible **3px accent focus-ring** rule established in the base style layer; never removed.
- Landmark contract (`<nav>`, `<main>`, `<article>`, `<aside>`, `<figure>`, `<footer>`) fixed in layouts; one `H1` per page enforced downstream.
- `lang` set on `<html>`; skip-link + `VisuallyHidden` Foundation utility provided.
- jsx-a11y lint gate active; `aria-label` required on icon-only interactives; inputs bound to labels via the forthcoming `FormGroup`.
- `prefers-reduced-motion` honored globally from Phase 1.

---

## 22. Performance Foundation

- Budgets are hard gates: LCP < 1.5s, CLS < 0.05, INP < 100ms.
- Server Components / SSG default; client components only where interaction requires. Heavy client JS prohibited for static content.
- `next/font` preloading; `next/image` with WebP and explicit dimensions; dynamic import strategy reserved for below-the-fold interactive organisms and Framer Motion.
- Animations restricted to `transform`/`opacity`; scroll work via IntersectionObserver.

---

## 23. Development Conventions

- **Naming:** Components `PascalCase`; hooks `useCamelCase`; utilities/vars `camelCase`; CSS token vars `--kebab-case`; constants `SCREAMING_SNAKE_CASE`; routes/segments lowercase.
- **Imports:** Absolute `@/` alias; ordered external → internal → relative; no duplicate primitives; import shared components rather than recreating.
- **File organization:** One primary export per file, colocated types/tests; tokens isolated to `styles/tokens/`; content to `content/`; config to `config/`.
- **Composition over configuration:** Build Foundation → Atoms → … ; variants via props, never forks.
- **Enforcement:** ESLint + Prettier in CI; violations (hardcoded color/spacing, `alert()`, a11y gaps) reject the change.

---

## 24. File Creation Order

1. `package.json`, `.gitignore`, `.editorconfig`, `next.config.ts`, `tsconfig.json` (with `@/` aliases).
2. `eslint.config.mjs`, `.prettierrc`, `.prettierignore` (lint/format gates active before code).
3. `styles/tokens/` (all token categories) → `styles/base/` → `app/globals.css` (token import + Tailwind v4 `@theme` mapping).
4. `next/font` setup and font-variable wiring.
5. `lib/schemas/` (env schema first) → env validation → `.env.example`.
6. `lib/utils/`, `lib/seo/`, `lib/content/`, `lib/services/`.
7. `providers/` (ThemeToken → Motion → Analytics → Toast).
8. `app/layout.tsx` (root: html/body, fonts, providers, base metadata).
9. Foundation primitives in `components/foundation/` needed to validate tokens (`Container`, `Text`, `Heading`, `Grid`, `Stack`, `Section`, `VisuallyHidden`).
10. Route-group layouts: `(marketing)`, `(content)`, `(legal)`.
11. `app/error.tsx`, `app/not-found.tsx`, `app/loading.tsx`.
12. `app/sitemap.ts`, `app/robots.ts`.
13. `config/` (site config, navigation, routes) and `hooks/` motion/media hooks.

---

## 25. Definition of Done (Phase 1)

- Project builds and type-checks with TypeScript `strict`; zero ESLint/Prettier errors in CI.
- Token layer is the sole styling source; no hardcoded hex/`rgb()` or arbitrary pixel spacing anywhere (lint-verified).
- Tailwind v4 `@theme` resolves every consumed utility to a token; arbitrary-value bypasses are rejected.
- Fonts self-hosted via `next/font`, preloaded, `display: swap`; font variables applied at `<body>`.
- All four providers mount once in the fixed order; `prefers-reduced-motion` honored globally.
- Root + group layouts render correct `Container` sizes with semantic landmarks; skip-link present; `lang` set.
- Base metadata + `metadataBase` present; `sitemap.ts` and `robots.ts` generate; `lib/seo/` builder available.
- Error, 404 (with escape hatch), and loading boundaries render; no `alert()` anywhere; ToastProvider handles feedback.
- Env variables validated at boot via schema; `.env.example` complete; no secrets committed.
- Content loaders, services, schemas, and utilities compile with inferred types and no side effects in pure modules.
- No visual UI atoms shipped beyond token-validating Foundation primitives; no design decisions or tokens invented; any missing token is flagged, not hardcoded.
