# 03_Phase2B_Molecules_Specification_v1.0

**Project:** NorAI Technologies Website — Phase 2B: Molecules
**Status:** Immutable implementation contract. A Senior Frontend Engineer must build every Molecule from this document without making an architectural decision.
**Authority (highest first):** Design Bible v1.0 → Frontend Masterplan v1.0 → Frontend_Architecture_Specification_v1.0 → 01_Project_Foundation_Specification_v1.0 (frozen) → 02A_Atoms_Specification_v1.0 (frozen).
**Stack (fixed):** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 (mapped to CSS-variable tokens) · Lucide React · Framer Motion · shadcn/ui (primitives only) · ESLint + Prettier · Mobile-first.

> **Constraint honesty:** Molecules compose **only** frozen Foundation primitives and frozen Atoms plus permitted utilities/hooks/providers. No Atom is redefined; no token is invented. Where the source set is silent, this document extends consistently and flags it. The flagged tokens from 02A §11.1 (`--opacity-disabled`, `--focus-ring-width`, `--border-width-default`, `--tooltip-delay`) remain prerequisites and are **not** re-invented here.

---

## 1. Phase Overview

**1.1 Purpose.** Phase 2B assembles frozen Atoms into reusable, presentation-focused Molecules — the composite building blocks (form fields, nav links, card shells, feedback surfaces) that Organisms/Sections (Phase 3) consume. Per Masterplan §5, Molecules follow Atoms and precede Organisms.

**1.2 Relationship to frozen phases.** Molecules consume Foundation (`Container`, `Text`, `Heading`, `Grid`, `Stack`, `Section`, `VisuallyHidden`), Atoms (§02A), utilities (`cn`), hooks (`usePrefersReducedMotion`, `useMediaQuery`, `useScrollReveal`, `useLockBodyScroll`, `useActiveNav`, `useForm`), and providers (`ToastProvider`, `MotionProvider`) — all read-only. They add no tokens and no new providers.

**1.3 Deliverables.** Specification-complete Molecules (§5), per-molecule types/tests/stories (§2), dependency graph (§3.5), Client/Server matrix (§3.7), and per-molecule Definition of Done (§5/§16).

**1.4 Out of scope.** Organisms/Sections (`Header`, `Footer`, `Hero*`, `ProductGrid`, `ProcessFlow`), full cards that are Organisms (`ProductCard`, `BlogCard`, `TeamCard` per Masterplan §4.2 are **Organisms** — see §1.6), pages, templates, data fetching, services, Server Actions bodies, routing, MDX, and marketing copy.

**1.5 Molecule selection (chosen for NorAI; rejected items justified).**

| Included | Rejected | Reason for rejection |
|---|---|---|
| Logo/BrandLogo (one `Logo`) | Two separate components | One `Logo` with variants suffices; avoids duplication (Anti-pattern) |
| NavigationLink, NavigationGroup | — | Required by Header (Phase 3) |
| ButtonGroup, CTAGroup | — | Masterplan §4.2 lists `CTAGroup`; ButtonGroup is its layout base |
| FormField, InputGroup, SearchField, PasswordField | NewsletterForm | Newsletter is Phase 2 "Traction" (Design Bible §9); not in current site |
| FormError, FormHint | — | Required seams for FormField + Server Actions |
| SocialLinks | — | Footer requirement |
| StatItem/StatCard | MetricCard | `StatBar`/`StatCard` already the model (Masterplan §6); MetricCard duplicates |
| FeatureCardBody, PricingCardBody, TestimonialCardBody, TeamMemberCardBody | Full interactive cards | Interactive/full cards (`ProductCard`, `BlogCard`) are **Organisms**; 2B provides only the composable **card content molecules** (see §1.6) |
| Breadcrumb, Pagination, Tabs, Accordion, FAQItem | — | Masterplan §4.2 / §6 dependencies |
| Alert, Toast, EmptyState, LoadingState, ErrorState | — | Foundation §18/§19 + Design Bible §5.3 require them |
| ModalHeader, ModalFooter | Full Modal | Design Bible §8.3 forbids pop-up modals on load; a Modal shell is **not** a marketing-site molecule. Header/Footer molecules included only for future in-page dialogs; **not routed** in current pages |
| ThemeToggle | — **rejected** | Sources define **no** dark/light theme system or theme token; a ThemeToggle would invent design decisions. Excluded per "never invent". Flagged in §7. |

**1.6 Atomic boundary ruling (binding).** Masterplan §4.2 classifies `FeatureCard`, `ProductCard`, `TeamCard`, `BlogCard`, `PricingCard`, `TestimonialCard` as **Organisms**. To honor that without losing composition, Phase 2B ships **card *content* molecules** (`FeatureCardBody`, `PricingCardBody`, `TestimonialCardBody`, `TeamMemberCardBody`, `StatCard`) that render the internal composition of a card but **do not** own the card container, hover-elevation, or navigation. Phase 3 Organisms wrap these bodies in the interactive/flat card shell and apply the hover-elevation rule (interactive cards elevate; informational cards stay flat — Masterplan DDR). This prevents duplicate responsibilities and keeps the frozen atomic hierarchy intact.

---

## 2. Folder Structure, Naming, Exports, Imports

**2.1 Folder structure** (mirrors 02A):

```
components/
└── molecules/
    ├── Logo/
    │   ├── Logo.tsx
    │   ├── Logo.types.ts
    │   ├── Logo.test.tsx
    │   ├── Logo.stories.tsx
    │   └── index.ts
    ├── NavigationLink/            (same 5 files — pattern repeats for all)
    ├── NavigationGroup/
    ├── ButtonGroup/
    ├── CTAGroup/
    ├── FormField/
    ├── FormError/
    ├── FormHint/
    ├── InputGroup/
    ├── SearchField/
    ├── PasswordField/
    ├── SocialLinks/
    ├── StatCard/
    ├── FeatureCardBody/
    ├── PricingCardBody/
    ├── TestimonialCardBody/
    ├── TeamMemberCardBody/
    ├── Breadcrumb/
    ├── Pagination/
    ├── Tabs/
    ├── Accordion/
    ├── FAQItem/
    ├── Alert/
    ├── Toast/
    ├── EmptyState/
    ├── LoadingState/
    ├── ErrorState/
    ├── ModalHeader/
    ├── ModalFooter/
    └── index.ts                   # molecules barrel
```

**2.2 File responsibilities:** `*.tsx` presentation only; `*.types.ts` public contract + unions; `*.test.tsx` enforces DoD; `*.stories.tsx` documents variants/states (exempt from higher-tier import ban); `index.ts` single import surface.

**2.3 Naming conventions:** Components `PascalCase`; folders `PascalCase` matching component; props `camelCase`; boolean props positive (`disabled`, not `notEnabled`); event handlers `onX`; type unions exported from `*.types.ts`; test IDs `data-testid="molecule-name"` in kebab-case.

**2.4 Export rules:** Default-free — every `index.ts` uses **named** exports (component + public types only). No deep imports past the folder `index.ts`. The molecules barrel re-exports all molecules. Internal sub-parts are not exported.

**2.5 Import rules:** A Molecule may import **only**: Foundation, Atoms (via `@/components/atoms`), `@/lib/utils`, permitted hooks, `framer-motion` (client only), `lucide-react` **via the `Icon` atom** (never directly), and `ToastProvider` context (Toast/Alert only). Absolute `@/` aliases; ordered external → internal → relative. **Forbidden:** other Molecules **except** the whitelist in §3.6, any Organism/Section/Template/Page, `lib/services`, `lib/schemas`, `lib/content`, Server Actions, data fetching, `next/navigation` data hooks (navigation is passed via props/`Link` atom).

---

## 3. Architecture Rules

**3.1 Atomic Design boundary.** Molecule = 2+ Atoms (or Atom + Foundation) forming a single reusable unit with one job. A Molecule never renders a page region, never owns layout of a full section, never fetches data, never contains business/validation logic (validation results are passed in).

**3.2 Composition-over-configuration.** Prefer composing (`Label` + `Input` + `FormError`) over prop-heavy mega-molecules. Public prop count is capped; slots/children used for extensibility.

**3.3 No duplicate responsibilities.** If an Atom already does it, the Molecule reuses it. No re-implementing `Button`, `Input`, `Icon`, `Spinner`, `FocusRing`, etc.

**3.4 Server-by-default.** Molecules are Server Components unless they need state/refs/handlers/motion/context (see §3.7).

**3.5 Dependency graph (Atoms/Foundation → Molecules).**

```
Foundation: Container, Text, Heading, Stack, Grid, Section, VisuallyHidden
Atoms:      Button, IconButton, Link, Input, Textarea, Label, Checkbox, Radio,
            Switch, Select, Badge, Tag, Chip, Pill, Avatar, Icon, Divider,
            Spinner, Skeleton, Tooltip, ProgressBar, StatusDot, FocusRing

Molecule            → composes
------------------------------------------------------------------
Logo                → Link, Icon/Image, Text
NavigationLink      → Link, Icon?, Badge?
NavigationGroup     → NavigationLink[]  (whitelisted molecule reuse)
ButtonGroup         → Button/IconButton[]
CTAGroup            → Button[], Text?         (extends ButtonGroup)
FormField           → Label, Input, FormError, FormHint  (whitelisted reuse)
FormError           → Text, Icon
FormHint            → Text
InputGroup          → Input, Button/IconButton, Icon
SearchField         → Input, Icon, IconButton  (extends InputGroup)
PasswordField       → Input, IconButton, Icon  (extends InputGroup)
SocialLinks         → Link, Icon (via IconButton semantics)
StatCard            → Text, Heading, Icon?
FeatureCardBody     → IconBox(Icon), Heading, Text
PricingCardBody     → Heading, Text, Badge, Divider, Button, list items
TestimonialCardBody → Text, Avatar, Heading
TeamMemberCardBody  → Avatar, Heading, Text, SocialLinks
Breadcrumb          → Link, Icon, Text
Pagination          → Button/IconButton, Text
Tabs                → Button-like triggers, FocusRing (Radix primitive base)
Accordion           → Button trigger, Icon, Text (Radix primitive base)
FAQItem             → Accordion (whitelisted reuse), Text
Alert               → Icon, Text, IconButton?
Toast               → Icon, Text, IconButton (consumes ToastProvider)
EmptyState          → Icon, Heading, Text, Button?
LoadingState        → Spinner, Skeleton, Text?
ErrorState          → Icon, Heading, Text, Button
ModalHeader         → Heading, IconButton
ModalFooter         → ButtonGroup/CTAGroup
```

**3.6 Whitelisted molecule-to-molecule composition (only these):** `NavigationGroup`→`NavigationLink`; `CTAGroup`→`ButtonGroup`; `FormField`→`FormError`,`FormHint`; `SearchField`/`PasswordField`→`InputGroup`; `FAQItem`→`Accordion`; `TeamMemberCardBody`→`SocialLinks`; `ModalFooter`→`ButtonGroup`. No other molecule imports a molecule. **No circular dependencies** (verified §17).

**3.7 Client vs Server Component matrix.**

| Client (state/refs/handlers/motion) | Server (static composition) |
|---|---|
| Tabs, Accordion, FAQItem, PasswordField, SearchField, Pagination, Toast, InputGroup (if it holds handlers), NavigationLink (active state via `useActiveNav`), ThemeToggle (excluded), ModalHeader/Footer (dialog controls) | Logo, NavigationGroup (renders children), ButtonGroup, CTAGroup, FormField (controlled via props), FormError, FormHint, SocialLinks, StatCard, FeatureCardBody, PricingCardBody, TestimonialCardBody, TeamMemberCardBody, Breadcrumb, Alert (static), EmptyState, LoadingState, ErrorState |

Client boundary is placed at the smallest interactive part; static children remain server-rendered where the framework allows.

---

## 4. Cross-cutting Specifications (apply to all Molecules)

**4.1 Design token usage.** Only tokens from Foundation/02A: colors (`--primary-50…900`, `--accent-50…700`, `--bg-page/elevated/dark`, `--success/--warning/--error`), typography (`--font-sans/--font-mono`, `--text-display-xl…--text-body-xs`), spacing (`--space-1…--space-32`), radius (`--radius-sm/--radius-default(8px)/--radius-lg(12px)/--radius-full`), shadow (`--shadow-xs…--shadow-xl/--shadow-accent`), motion (`--duration-fast…--duration-slow`, `--ease-smooth`). Card bodies use `--radius-lg` (12px) container radius when they own the inner surface; the shell radius is applied by the Phase 3 Organism. Zero hardcoded values (lint-enforced).

**4.2 Motion specification.** `transform`/`opacity` only; `--duration-fast` for feedback, moderate (300ms) for open/close transitions (Tabs/Accordion/Toast/Alert), slow (500ms) reserved for scroll reveals (Organisms, not molecules). All motion via Framer Motion in client molecules, gated by `usePrefersReducedMotion`; reduced-motion → instant/no animation. Focus rings appear instantly (no animation).

**4.3 Accessibility (WCAG 2.1 AA).** Semantic HTML first; landmark/role correctness; visible 3px `--accent` focus ring on `:focus-visible` via `FocusRing`; contrast ≥4.5:1 normal / ≥3:1 large & non-text; color never the sole signal; icon-only controls labeled; every form control associated with a `Label`; reduced-motion honored; touch targets ≥44×44px.

**4.4 Responsive.** Mobile-first (375px), scale via `min-width`; no horizontal scroll; molecules reflow (stack on mobile, row on ≥tablet) using Foundation `Stack`/`Grid`; typography only via the 14-step scale; spacing only base-8.

**4.5 Error handling.** Molecules render error **presentation** only (`FormError`, `Alert`, `ErrorState`, `Toast`). They never throw for control flow, never call services, and surface user feedback via `ToastProvider`/in-page UI — never `alert()` (Design Bible §8.3).

**4.6 Performance.** Static molecules stay Server Components; Framer Motion imported only in client molecules; no layout-animating properties; images via `next/image` (Logo/Avatar-backed bodies); no per-molecule global CSS.

---

## 5. Molecule Specifications

Each molecule uses the fixed 17-field template. Cross-cutting rules from §4 apply and are referenced, not repeated.

---

### 5.1 Logo
1. **Purpose:** Brand mark that links to home.
2. **Responsibilities:** Render wordmark/symbol; navigate to `/`; provide accessible brand name.
3. **Composition:** `Link` (unstyled variant) + `next/image` or inline symbol + `VisuallyHidden`/`Text`.
4. **Public API:** `variant` (full | symbol | wordmark), `href` (default `/`), `size` (S|M|L), `aria-label` (default "NorAI, home").
5. **Variants:** Full, Symbol-only, Wordmark-only.
6. **Sizes:** S, M, L (token heights).
7. **States:** Default, Hover (subtle opacity), Focus-visible.
8. **Responsive:** Symbol-only permissible on mobile header; full on ≥tablet.
9. **Motion:** hover opacity `--duration-fast`.
10. **Accessibility:** Anchor with accessible name; image `alt` empty when text present.
11. **Keyboard:** Enter navigates.
12. **Dependency rules:** §2.5.
13. **Styling:** No color hardcode; symbol uses brand asset from `public/`.
14. **Tokens:** size tokens, motion tokens, `--accent`/`--primary` focus.
15. **Usage:** Header left slot; Footer.
16. **Anti-patterns:** multiple logos per view; bitmap logo where SVG exists.
17. **DoD:** §16.

### 5.2 NavigationLink
1. **Purpose:** Single nav destination with active state.
2. **Responsibilities:** Render link, reflect active route, optional icon/badge.
3. **Composition:** `Link` + optional `Icon` + optional `Badge`.
4. **API:** `href`, `label`, `icon?`, `badge?`, `external?`, `aria-current` (managed via `useActiveNav`).
5. **Variants:** Default, WithIcon, WithBadge.
6. **Sizes:** M (single size for nav consistency).
7. **States:** Default, Hover, Focus-visible, Active (current route), Disabled.
8. **Responsive:** Inline on desktop; stacked full-width in mobile menu.
9. **Motion:** underline/color `--duration-fast`.
10. **Accessibility:** `aria-current="page"` when active; descriptive text (no "Click Here").
11. **Keyboard:** Enter activates; part of Tab order.
12. **Dependency:** Client (uses `useActiveNav`).
13. **Styling:** active uses `--accent`; inactive `--primary`.
14. **Tokens:** text scale, `--accent/--primary`, motion.
15. **Usage:** Header nav, Footer nav, mobile menu.
16. **Anti-patterns:** manual active detection duplicating `useActiveNav`; div click targets.
17. **DoD:** §16.

### 5.3 NavigationGroup
1. **Purpose:** Ordered set of NavigationLinks (e.g. Products ▾, About, Blog, Team).
2. **Responsibilities:** Layout + optional dropdown grouping (Products ▾).
3. **Composition:** `NavigationLink[]` (whitelisted) + Foundation `Stack` + optional `Icon` chevron; dropdown behavior via Radix primitive if `collapsible`.
4. **API:** `items` (label/href/icon/children), `orientation` (horizontal|vertical), `collapsible?`.
5. **Variants:** Horizontal (desktop), Vertical (mobile), Dropdown (Products).
6. **Sizes:** inherits NavigationLink.
7. **States:** Default; Dropdown Open/Closed; item Active.
8. **Responsive:** Horizontal ≥tablet, vertical stack on mobile.
9. **Motion:** dropdown fade/translate `--duration-fast`→moderate; reduced-motion instant.
10. **Accessibility:** `role="navigation"` provided by Organism `<nav>`; dropdown uses menu semantics + `aria-expanded`.
11. **Keyboard:** Tab through links; dropdown arrow/Esc.
12. **Dependency:** Client if collapsible/dropdown.
13. **Styling:** spacing via `--space-*`.
14. **Tokens:** spacing, motion, shadow (dropdown `--shadow-*`).
15. **Usage:** Header, mobile menu, Footer columns.
16. **Anti-patterns:** nesting non-nav content; more than one dropdown level.
17. **DoD:** §16.

### 5.4 ButtonGroup
1. **Purpose:** Layout wrapper aligning multiple buttons.
2. **Responsibilities:** Spacing/alignment/stacking of `Button`/`IconButton`.
3. **Composition:** `Button`/`IconButton` (children) + Foundation `Stack`.
4. **API:** `align` (start|center|end|between), `orientation`, `gap` (token), `fullWidthOnMobile?`, `children`.
5. **Variants:** Horizontal, Vertical.
6. **Sizes:** inherits buttons.
7. **States:** static.
8. **Responsive:** stacks + full-width on mobile when `fullWidthOnMobile`.
9. **Motion:** none.
10. **Accessibility:** no extra role; preserves button semantics.
11. **Keyboard:** natural Tab order.
12. **Dependency:** Server.
13. **Styling:** gap via `--space-*` only.
14. **Tokens:** spacing.
15. **Usage:** forms, card footers, ModalFooter.
16. **Anti-patterns:** two Primary buttons in one group in one viewport (Design Bible §7.1).
17. **DoD:** §16.

### 5.5 CTAGroup
1. **Purpose:** Marketing call-to-action pairing (primary + secondary).
2. **Responsibilities:** Enforce **one Primary per viewport**; optional supporting `Text`.
3. **Composition:** extends `ButtonGroup`; `Button` (Primary) + `Button` (Secondary/Ghost) + optional `Text`.
4. **API:** `primary` (label/href/onClick), `secondary?`, `supportingText?`, `align`.
5. **Variants:** PrimaryOnly, PrimarySecondary.
6. **Sizes:** L on hero, M elsewhere.
7. **States:** inherits button states.
8. **Responsive:** stack, primary first, full-width on mobile.
9. **Motion:** inherits button.
10. **Accessibility:** primary is the single strongest affordance; supporting text linked if descriptive.
11. **Keyboard:** primary reachable first.
12. **Dependency:** Server (unless onClick handlers → Client).
13. **Styling:** exactly one Primary variant permitted; lint/test guard.
14. **Tokens:** spacing, text.
15. **Usage:** Hero, FinalCTA, Product Detail.
16. **Anti-patterns:** two Primaries; danger variant as CTA.
17. **DoD:** §16.

### 5.6 FormField
1. **Purpose:** Complete labeled form control unit.
2. **Responsibilities:** Bind `Label`+control+hint+error; wire `id`/`aria-describedby`/`aria-invalid`; **no validation logic** (state passed in).
3. **Composition:** `Label` + (`Input`|`Textarea`|`Select`|`Checkbox`|`Radio`|`Switch`) + `FormHint?` + `FormError?` (whitelisted).
4. **API:** `id` (required), `label`, `control` (slot), `hint?`, `error?`, `required?`, `readOnly?`, `disabled?`.
5. **Variants:** Text, Textarea, Select, Checkbox, Radio, Switch.
6. **Sizes:** inherits control (S|M|L).
7. **States:** Default, Filled, Empty, Focused, Required, Invalid/Error, Disabled, ReadOnly, Success (only if design uses it).
8. **Responsive:** full-width; label above (Design Bible §6.4).
9. **Motion:** error/hint fade `--duration-fast`; reduced-motion instant.
10. **Accessibility:** `Label htmlFor`=control `id`; error linked via `aria-describedby`; `aria-invalid` when error; `aria-required`.
11. **Keyboard:** inherits control; clicking label focuses control.
12. **Dependency:** Server (controlled via props); Client only if it holds local UI state.
13. **Styling:** vertical rhythm via `--space-*`.
14. **Tokens:** spacing, text, `--error`, focus `--accent`.
15. **Usage:** Contact form (Name, Email, Message — max 3), future forms.
16. **Anti-patterns:** placeholder-as-label; validation logic inside; floating labels.
17. **DoD:** §16.

### 5.7 FormError
1. **Purpose:** Inline field error message.
2. **Composition:** `Icon` (error) + `Text`.
3. **API:** `message`, `id` (for `aria-describedby`).
4. **States:** Hidden (no message), Visible.
5. **Accessibility:** `role="alert"`/`aria-live="polite"`; referenced by control.
6. **Tokens:** `--error`, `--text-body-xs`, `--space-*`.
7. **Motion:** fade-in `--duration-fast`.
8. **Anti-patterns:** color-only error (must include text/icon).
9. **DoD:** §16. *(Fields 8–14 inherit §4.)*

### 5.8 FormHint
1. **Purpose:** Helper text below a field.
2. **Composition:** `Text`.
3. **API:** `text`, `id`.
4. **Accessibility:** linked via `aria-describedby`.
5. **Tokens:** `--primary-*` low emphasis, `--text-body-xs`.
6. **Anti-patterns:** using hint to carry error meaning.
7. **DoD:** §16.

### 5.9 InputGroup
1. **Purpose:** Input with attached leading/trailing affordance (icon/button).
2. **Composition:** `Input` + `Icon`/`IconButton`.
3. **API:** `leading?`, `trailing?`, `input` props pass-through, `disabled`, `invalid`.
4. **Variants:** LeadingIcon, TrailingIcon, TrailingButton.
5. **States:** inherits Input; focus ring wraps the group.
6. **Accessibility:** trailing button labeled; group does not break input labeling.
7. **Keyboard:** Tab reaches input then trailing button.
8. **Tokens:** `--radius-default`, border/focus tokens.
9. **Anti-patterns:** stacking multiple trailing buttons.
10. **DoD:** §16.

### 5.10 SearchField
1. **Purpose:** Search input (Blog Hub filtering — presentation only).
2. **Composition:** extends `InputGroup` — leading search `Icon` + `Input` + optional clear `IconButton`.
3. **API:** `value`, `placeholder`, `onChange`, `onClear?`, `onSubmit?`.
4. **States:** Empty, Filled, Focused, Disabled, Clearable.
5. **Accessibility:** `type=search`; clear button `aria-label="Clear search"`; `role=searchbox` semantics.
6. **Keyboard:** Enter submits; Esc clears (if clearable).
7. **Dependency:** Client.
8. **Motion:** clear icon fade `--duration-fast`.
9. **Tokens:** as Input.
10. **Anti-patterns:** search performing data fetch inside molecule (handled upstream).
11. **DoD:** §16.

### 5.11 PasswordField
1. **Purpose:** Password entry with visibility toggle.
2. **Note (scope):** No auth exists on the marketing site; included **only** as a form primitive for future app portals (Design Bible §9). **Not routed** in current pages. Flagged as forward-looking, not new design.
3. **Composition:** extends `InputGroup` — `Input(type=password/text)` + trailing `IconButton` (eye/eye-off).
4. **API:** `value`, `onChange`, `showToggle` (default true).
5. **States:** Masked, Revealed, Focused, Disabled, Invalid.
6. **Accessibility:** toggle `aria-label` reflects state ("Show/Hide password"); `aria-pressed`.
7. **Keyboard:** toggle operable via Enter/Space.
8. **Tokens:** as Input.
9. **Anti-patterns:** storing password in component state beyond controlled value.
10. **DoD:** §16.

### 5.12 SocialLinks
1. **Purpose:** Row of external social/contact icon links.
2. **Composition:** `Link`(external) wrapping `Icon` (icon-only → labeled).
3. **API:** `links` (label/href/icon), `size`, `orientation`.
4. **Variants:** Horizontal, Vertical.
5. **States:** Default, Hover, Focus-visible.
6. **Accessibility:** each link `aria-label` (platform name); `rel="noopener noreferrer"`, explicit new-tab announcement.
7. **Keyboard:** Tab/Enter.
8. **Tokens:** `--primary`→`--accent` on hover, spacing, motion.
9. **Anti-patterns:** unlabeled icon links; opening new tab without indication.
10. **DoD:** §16.

### 5.13 StatCard
1. **Purpose:** Single metric display (value + label), used by StatBar (Organism).
2. **Composition:** `Heading` (value) + `Text` (label) + optional `Icon`/`StatusDot`.
3. **API:** `value`, `label`, `icon?`, `emphasis?`.
4. **Variants:** Default, WithIcon.
5. **States:** static (informational → **flat**, no hover).
6. **Accessibility:** value + label read together; if value is decorative number, ensure context text.
7. **Tokens:** display/body text tokens, `--space-*`, `--primary/--accent`.
8. **Responsive:** stack in grid, 2/3-up on ≥tablet.
9. **Anti-patterns:** hover elevation on informational stat; color-only meaning.
10. **DoD:** §16.

### 5.14 FeatureCardBody
1. **Purpose:** Inner content of a (flat, informational) Feature card.
2. **Composition:** `Icon` (in IconBox) + `Heading` + `Text`.
3. **API:** `icon`, `title`, `description`.
4. **Variants:** Default; with/without icon.
5. **States:** static — **flat, no hover elevation** (Masterplan DDR).
6. **Accessibility:** heading level supplied by context; icon decorative (`aria-hidden`).
7. **Tokens:** `--radius-lg` inner if it owns surface, text tokens, `--space-*`.
8. **Responsive:** grid 1-up mobile → 2/3-up desktop.
9. **Anti-patterns:** adding shadow/hover (would falsely imply interactivity).
10. **Boundary:** container/shell owned by Phase 3 `FeatureCard` Organism.
11. **DoD:** §16.

### 5.15 PricingCardBody
1. **Purpose:** Inner content of a pricing tier.
2. **Composition:** `Heading` (tier) + `Text`/`Heading` (price) + `Badge` (highlight) + `Divider` + feature list (`Icon`+`Text`) + `Button`/`CTAGroup`.
3. **API:** `tierName`, `price`, `interval?`, `features` (list), `highlighted?`, `cta`.
4. **Variants:** Standard, Highlighted, ContactSales (no price → "Contact Sales").
5. **States:** Default, Highlighted (elevated visual only if design defines; otherwise emphasis via `--accent`), Disabled tier.
6. **Accessibility:** feature list is a real `<ul>`; price has accessible text; single CTA per card.
7. **Tokens:** `--radius-lg`, `--accent` highlight, `--shadow-*` only if highlighted defines it, text/spacing tokens.
8. **Responsive:** 1-up mobile → 3-up desktop; highlighted may scale emphasis, not layout break.
9. **Anti-patterns:** two CTAs; inventing a "most popular" color outside tokens.
10. **Boundary:** shell owned by Phase 3 `PricingCard`.
11. **DoD:** §16.

### 5.16 TestimonialCardBody
1. **Purpose:** Quote + attribution content.
2. **Composition:** `Text` (quote) + `Avatar` + `Heading`/`Text` (name/role).
3. **API:** `quote`, `authorName`, `authorRole`, `avatarSrc?`.
4. **Variants:** Default, WithAvatar, Compact.
5. **States:** static.
6. **Accessibility:** use `<blockquote>`/`<figure>`+`<figcaption>`; avatar `alt`=author name.
7. **Tokens:** text tokens, `--radius-full` avatar, spacing.
8. **Responsive:** single column mobile; 2/3-up desktop.
9. **Anti-patterns:** stock avatars; quote without attribution.
10. **DoD:** §16.

### 5.17 TeamMemberCardBody
1. **Purpose:** Team member presentation.
2. **Composition:** `Avatar` (circular) + `Heading` (name) + `Text` (role) + `SocialLinks?` (whitelisted).
3. **API:** `name`, `role`, `photoSrc`, `socials?`, `bio?`.
4. **Variants:** Default, WithSocials, WithBio.
5. **States:** static.
6. **Accessibility:** avatar `alt`=name; authentic photo only (Design Bible §5.2).
7. **Tokens:** `--radius-full` avatar, text/spacing tokens.
8. **Responsive:** grid 1-up mobile → 3/4-up desktop.
9. **Anti-patterns:** non-circular crop; stock photography.
10. **Boundary:** shell owned by Phase 3 `TeamCard`.
11. **DoD:** §16.

### 5.18 Breadcrumb
1. **Purpose:** Show hierarchical location + parent navigation.
2. **Composition:** `Link[]` + separator `Icon` + `Text` (current).
3. **API:** `items` (label/href), `separator?`.
4. **Variants:** Default.
5. **States:** Default, Hover, Focus-visible; current is non-link.
6. **Accessibility:** `<nav aria-label="Breadcrumb">` + ordered list; current has `aria-current="page"`.
7. **Keyboard:** Tab/Enter across links.
8. **Responsive:** collapse middle items on mobile (show first + current) — presentation rule fixed here.
9. **Tokens:** text, `--primary/--accent`, spacing.
10. **Anti-patterns:** linking the current page; using for non-hierarchical nav.
11. **DoD:** §16.

### 5.19 Pagination
1. **Purpose:** Navigate paged lists (Blog Hub).
2. **Composition:** `IconButton` (prev/next) + `Button`/`Text` (page numbers).
3. **API:** `currentPage`, `totalPages`, `onPageChange`, `siblingCount?`.
4. **Variants:** Numbered, PrevNextOnly.
5. **States:** Default, Active page, Disabled (first/last), Hover, Focus-visible.
6. **Accessibility:** `<nav aria-label="Pagination">`; current `aria-current="page"`; disabled controls `aria-disabled`.
7. **Keyboard:** Tab/Enter; arrow optional.
8. **Responsive:** PrevNext + current-of-total on mobile; full numbers desktop.
9. **Dependency:** Client.
10. **Tokens:** button tokens, spacing.
11. **Anti-patterns:** hidden disabled affordance; fetching inside.
12. **DoD:** §16.

### 5.20 Tabs
1. **Purpose:** Switch between related panels.
2. **Composition:** Radix Tabs primitive (re-skinned) + `FocusRing` + `Text`.
3. **API:** `tabs` (id/label/content), `defaultTab`, `onChange?`, `orientation`.
4. **Variants:** Line (underline), Horizontal, Vertical.
5. **States:** Default, Selected, Hover, Focus-visible, Disabled tab.
6. **Accessibility:** `role="tablist/tab/tabpanel"`, `aria-selected`, `aria-controls`; one active panel.
7. **Keyboard:** Arrow keys move, Home/End, Enter/Space activate (Radix).
8. **Responsive:** scrollable/stacked on mobile.
9. **Dependency:** Client.
10. **Motion:** panel/indicator `transform`/`opacity` moderate; reduced-motion instant.
11. **Tokens:** `--accent` indicator, text, motion, spacing.
12. **Anti-patterns:** tabs for sequential steps (use ProcessFlow Organism).
13. **DoD:** §16.

### 5.21 Accordion
1. **Purpose:** Expand/collapse stacked content.
2. **Composition:** Radix Accordion primitive + `Button` trigger + chevron `Icon` + `Text`.
3. **API:** `items` (id/title/content), `type` (single|multiple), `defaultOpen?`.
4. **Variants:** Single, Multiple, Bordered/Flat.
5. **States:** Collapsed, Expanded, Hover, Focus-visible, Disabled.
6. **Accessibility:** header `<button aria-expanded aria-controls>`; region labeled.
7. **Keyboard:** Enter/Space toggle; arrows between headers.
8. **Responsive:** full-width; content reflows.
9. **Dependency:** Client.
10. **Motion:** height reveal via `transform`/opacity technique (no layout thrash); reduced-motion instant.
11. **Tokens:** text, `--primary` borders, motion, spacing.
12. **Anti-patterns:** animating raw `height` (thrash); nesting accordions deeply.
13. **DoD:** §16.

### 5.22 FAQItem
1. **Purpose:** Single FAQ question/answer (homepage FAQ, Product FAQ).
2. **Composition:** `Accordion` (single item, whitelisted) + `Text`.
3. **API:** `question`, `answer`.
4. **Variants:** Default.
5. **States:** as Accordion.
6. **Accessibility:** question is the trigger; answer is the region.
7. **Dependency:** Client (inherits Accordion).
8. **Tokens/Motion/Responsive:** inherit Accordion.
9. **Anti-patterns:** re-implementing Accordion logic.
10. **DoD:** §16.

### 5.23 Alert
1. **Purpose:** Inline contextual message (info/success/warning/error).
2. **Composition:** `Icon` + `Text`/`Heading` + optional dismiss `IconButton`.
3. **API:** `severity` (info|success|warning|error), `title?`, `message`, `dismissible?`, `onDismiss?`.
4. **Variants:** Info, Success, Warning, Error.
5. **States:** Static, Dismissible, Dismissed.
6. **Accessibility:** `role="status"` (info/success) / `role="alert"` (warning/error); dismiss labeled; not color-only (icon + text).
7. **Keyboard:** dismiss operable via Enter/Space.
8. **Responsive:** full-width; text wraps.
9. **Motion:** enter/exit fade `--duration-fast`; reduced-motion instant.
10. **Tokens:** semantic colors, `--radius-default`, spacing, text, motion.
11. **Anti-patterns:** auto-dismiss critical errors; color-only severity.
12. **DoD:** §16.

### 5.24 Toast
1. **Purpose:** Transient global feedback (form success/error) — **replaces `alert()`** (Design Bible §5.3/§8.3).
2. **Composition:** consumes `ToastProvider` (Phase 1) + `Icon` + `Text` + dismiss `IconButton`.
3. **API:** `severity`, `title?`, `message`, `duration?`, `action?`.
4. **Variants:** Info, Success, Warning, Error.
5. **States:** Entering, Visible, Exiting, Dismissed.
6. **Accessibility:** live region (`role="status"`/`alert`), focus not stolen; dismiss labeled; sufficient timeout or manual dismiss.
7. **Keyboard:** focusable dismiss; Esc dismiss when focused.
8. **Responsive:** bottom/top per provider config; full-width on mobile.
9. **Motion:** slide/fade via `transform`/opacity `--duration-fast`→moderate; reduced-motion → fade/instant.
10. **Dependency:** Client (consumes provider).
11. **Tokens:** semantic colors, `--shadow-*`, `--radius-default`, motion.
12. **Anti-patterns:** using browser `alert()`; toast for essential persistent info.
13. **DoD:** §16.

### 5.25 EmptyState
1. **Purpose:** Communicate "no content" with an escape hatch (no dead ends — Design Bible §3.3).
2. **Composition:** `Icon`/illustration + `Heading` + `Text` + optional `Button`/`CTAGroup`.
3. **API:** `icon?`, `title`, `description`, `action?`.
4. **Variants:** Default, WithAction.
5. **States:** static.
6. **Accessibility:** meaningful heading; action clearly labeled.
7. **Responsive:** centered, stacked.
8. **Tokens:** text, spacing, `--primary/--accent`.
9. **Anti-patterns:** dead-end empty states without next step.
10. **DoD:** §16.

### 5.26 LoadingState
1. **Purpose:** Communicate in-progress loading while protecting CLS (Foundation §19).
2. **Composition:** `Spinner` and/or `Skeleton` + optional `Text`.
3. **API:** `variant` (spinner|skeleton), `label?`, `skeletonShape?`.
4. **Variants:** Spinner, Skeleton.
5. **States:** Loading (only).
6. **Accessibility:** `role="status"`, `aria-live="polite"`, accessible label; Skeleton `aria-hidden` with sibling status.
7. **Responsive:** placeholder matches target layout dimensions.
8. **Motion:** inherits Spinner/Skeleton; reduced-motion static.
9. **Tokens:** `--accent`, `--primary`, motion.
10. **Anti-patterns:** layout-shifting loaders; spinner where skeleton preserves layout better.
11. **DoD:** §16.

### 5.27 ErrorState
1. **Purpose:** In-page error presentation with recovery action (route `error.tsx`, failed content).
2. **Composition:** `Icon` + `Heading` + `Text` + `Button`/`CTAGroup` (retry/home).
3. **API:** `title`, `description`, `primaryAction`, `secondaryAction?`.
4. **Variants:** Inline, FullSection, NotFound(404).
5. **States:** static.
6. **Accessibility:** `role="alert"` for critical; clear recovery path; heading hierarchy correct.
7. **Responsive:** centered/stacked.
8. **Tokens:** `--error`/`--primary`, text, spacing.
9. **Anti-patterns:** dead-end errors; exposing stack traces to users; `alert()`.
10. **DoD:** §16.

### 5.28 ModalHeader
1. **Purpose:** Title bar for an in-page dialog (future use; **not routed** in current marketing pages — see §1.5).
2. **Composition:** `Heading` (title) + dismiss `IconButton`.
3. **API:** `title`, `onClose`, `id` (for `aria-labelledby`).
4. **States:** Default, Focus-visible on close.
5. **Accessibility:** provides dialog title for `aria-labelledby`; close `aria-label="Close"`.
6. **Keyboard:** close via Enter/Space; Esc handled by dialog container (Phase 3+).
7. **Tokens:** heading token, spacing, `--divider` optional.
8. **Dependency:** Client.
9. **Anti-patterns:** modal auto-opening on page load (Design Bible §8.3).
10. **DoD:** §16.

### 5.29 ModalFooter
1. **Purpose:** Action bar for an in-page dialog (future use).
2. **Composition:** `ButtonGroup`/`CTAGroup` (whitelisted).
3. **API:** `primaryAction`, `secondaryAction?`, `align`.
4. **States:** inherits buttons.
5. **Accessibility:** one primary action; logical Tab order.
6. **Tokens/Responsive/Motion:** inherit ButtonGroup.
7. **Anti-patterns:** two primaries; destructive default.
8. **DoD:** §16.

---

## 6. Component Hierarchy & Composition Examples (structural, no code)

- **Header (Phase 3)** = `Logo` + `NavigationGroup`(→`NavigationLink`) + `CTAGroup` + mobile `IconButton`.
- **Contact form (Contact page)** = `FormField`(Name) + `FormField`(Email) + `FormField`(Message/Textarea) + `CTAGroup`; success/error via `Toast`/`Alert`.
- **Footer** = `Logo` + `NavigationGroup`(vertical) + `SocialLinks`.
- **FAQ section** = `Accordion` of `FAQItem`s.
- **Pricing section** = `Grid` of Phase 3 `PricingCard`(shell) wrapping `PricingCardBody`.
- **Blog Hub** = `SearchField` + `Grid` of `BlogCard`(Organism) + `Pagination` + `EmptyState` (no results).

---

## 7. Validation Results (required pre-finish checks)

| Check | Result |
|---|---|
| No undefined design tokens | ✓ All tokens trace to Foundation/02A; **prerequisite tokens** from 02A §11.1 still required (`--opacity-disabled`, `--focus-ring-width`, `--border-width-default`, `--tooltip-delay`) — not re-invented |
| No undefined atoms | ✓ Every composed atom exists in frozen 02A |
| No undefined utilities | ✓ Only `cn`/formatters from `lib/utils` |
| No undefined hooks | ✓ `usePrefersReducedMotion`, `useMediaQuery`, `useActiveNav`, `useLockBodyScroll`, `useForm` all defined in Phase 1 |
| No undefined providers | ✓ Only `ToastProvider`/`MotionProvider` (Phase 1) |
| No circular dependencies | ✓ Molecule reuse limited to acyclic whitelist §3.6 |
| No duplicate responsibilities | ✓ Card *bodies* vs Organism *shells* separated (§1.6); single `Logo`; `FAQItem` reuses `Accordion` |
| No architectural violations | ✓ Atomic boundaries respected; no fetching/services/logic |
| No implementation blockers | ✓ except the 4 prerequisite tokens (must exist before build) |
| Flagged exclusions | `ThemeToggle` excluded (no theme system/token in sources); `PasswordField`/Modal parts included as forward-looking primitives, **not routed** in current pages |

---

## 8. Testing, Storybook & Checklists

**8.1 Testing requirements (per molecule):** render test; every variant/size/state; keyboard walkthrough (Tab/Enter/Space/Arrow/Esc where applicable); ARIA/role assertions; reduced-motion behavior; no-hardcoded-value assertion (lint + snapshot of token classes); Client/Server boundary correctness; controlled-prop behavior (no internal business state).

**8.2 Storybook requirements:** a story per molecule covering all variants, sizes, and states including hover/focus/disabled/loading/error/empty and reduced-motion; interaction stories for Tabs/Accordion/Pagination/SearchField/PasswordField/Toast; a11y addon must pass.

**8.3 Accessibility checklist:** semantic element/role correct; visible 3px `--accent` focus ring; keyboard operable; labels/`aria-*` wired; contrast ≥4.5:1 / ≥3:1; color not sole signal; reduced-motion honored; touch ≥44px; live regions correct for Alert/Toast/Loading/Error.

**8.4 Responsive checklist:** renders 375px/tablet/desktop/ultra-wide; no horizontal scroll; mobile stacking + full-width where specified; typography via scale only; spacing base-8 only.

**8.5 Motion checklist:** `transform`/`opacity` only; token durations/easing; Framer Motion in client molecules only; reduced-motion fallback verified; focus ring not animated.

---

## 9. Definition of Done (per molecule — §16 reference)

A molecule is **Done** only when all are verified in CI/review:

- [ ] Composed exclusively from Foundation + frozen Atoms (+ whitelisted molecule reuse §3.6).
- [ ] Every variant, size, and state from its spec implemented and visually distinct via tokens.
- [ ] Accessibility complete (roles/ARIA/keyboard/focus ring/contrast/live regions/touch).
- [ ] Responsive complete (375px→ultra-wide, no horizontal scroll, correct stacking).
- [ ] Motion complete (`transform`/`opacity`, token timing, reduced-motion fallback).
- [ ] Zero hardcoded color/space/type/radius/shadow/motion values (lint-verified).
- [ ] Correct Client/Server boundary per §3.7; Framer Motion only in client molecules.
- [ ] No forbidden imports; no circular dependencies; no business logic/fetching.
- [ ] Type-safe (strict TS), public contract in `*.types.ts`, no `any`.
- [ ] Tests (§8.1) and Storybook (§8.2) complete and passing; lint + build clean.
- [ ] Error/feedback presentation only; no `alert()`; feedback via Toast/in-page UI.
