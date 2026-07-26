# 02A_Atoms_Specification_v1.0

**Project:** NorAI Technologies Website — Phase 2A: Atoms
**Status:** Immutable implementation contract. Another engineer must be able to build every Atom from this document without making a design decision.
**Authority (highest first):** Design Bible v1.0 → Frontend Masterplan v1.0 → Frontend_Architecture_Specification_v1.0 → Project_Foundation_Specification_v1.0. This document does not contradict, redesign, or invent tokens; where source material is silent it extends consistently and flags the extension.
**Stack (fixed):** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 (mapped to CSS-variable tokens) · Lucide React · Framer Motion · shadcn/ui (primitive foundation only) · ESLint + Prettier · Mobile-first.

> **Token honesty note:** All token names referenced here originate from the source documents (`--primary-50…900`, `--accent-50…700`, `--bg-page/--bg-elevated/--bg-dark`, `--success/--warning/--error`, `--text-display-xl…--text-body-xs`, `--space-1…--space-32`, `--radius-sm/--radius-default(8px)/--radius-lg(12px)/--radius-full`, `--shadow-xs…--shadow-xl/--shadow-accent`, `--duration-fast…--duration-slow`, `--ease-smooth`, `--font-sans/--font-mono`, containers 1280/1120/720). Where a semantic role is implied but a specific numeric token is not defined in the sources (e.g. a dedicated disabled opacity), this document **flags a required token** rather than inventing a value. Missing tokens are listed in §11.1.

---

## 1. Phase Overview

**1.1 Purpose.** Phase 2A delivers the complete Atom layer: the smallest reusable, token-driven, presentation-only UI units. Atoms are the vocabulary from which all Molecules, Organisms, Templates, and Pages are composed. Per Masterplan §5 (Build Order) and Frontend_Architecture_Specification §10, Atoms follow Foundation and precede Molecules.

**1.2 Relationship with Phase 1 (Project Foundation).** Phase 1 established tokens (`styles/tokens/`), Tailwind v4 `@theme` mapping, fonts, providers (`ThemeToken`, `Motion`, `Analytics`, `Toast`), Foundation primitives (`Container`, `Text`, `Heading`, `Grid`, `Stack`, `Section`, `VisuallyHidden`), utilities (`cn`), hooks (`usePrefersReducedMotion`, `useMediaQuery`, `useScrollReveal`, `useLockBodyScroll`), lint/format gates, and a11y base rules (3px focus ring, landmark contract). Phase 2A **consumes** all of this and adds nothing to the token or provider layer.

**1.3 Relationship with Phase 2B (Molecules).** Phase 2B composes Atoms into `FormGroup`, `Accordion`, `Tabs`, `Pagination`, `StatBar`, `CTAGroup`, etc. Atoms must expose the props, states, and composition seams 2B requires (e.g. `Input` accepts external `id`/`aria-describedby` so `FormGroup` can wire Label + Error). Atoms **must not** implement any molecule behavior (no grouping, no orchestration, no validation logic).

**1.4 Deliverables.**

- Specification-complete, token-compliant Atoms listed in §5.
- Per-atom types, tests, and barrel exports (§3).
- Component Matrix (§12), Anti-Patterns (§13), and per-atom Definition of Done (§14).

**1.5 Out of Scope.** Molecules, Organisms, Sections, Pages, Templates, business logic, data fetching, Server Actions, form validation logic, routing, content/MDX, marketing copy, and any new design token or variant not derivable from the sources.

---

## 2. Atomic Design Principles

| #    | Principle                          | Rule                                                                                                                                                               |
| ---- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 2.1  | **Atomic Design philosophy**       | Atoms are indivisible UI units with no dependency on any higher tier. They render appearance and immediate interaction only.                                       |
| 2.2  | **Single Responsibility**          | One atom = one job. `Button` triggers actions; `Link` navigates; `Input` captures text. No atom performs two roles.                                                |
| 2.3  | **Composition over configuration** | Prefer composing (`Button` + `Icon`) over prop-heavy mega-atoms (Masterplan §2). Cap public props; reject variant explosion (§13).                                 |
| 2.4  | **Accessibility-first**            | Semantic element first, ARIA second. Every interactive atom is keyboard operable with a visible 3px accent focus ring. Non-negotiable (Design Bible §7.3).         |
| 2.5  | **Design Token philosophy**        | Zero hardcoded color/space/type/radius/shadow/motion. Every visual value maps to a token (Implementation Rules §1). Missing token → flag, never hardcode.          |
| 2.6  | **Server Component philosophy**    | Atoms are Server Components by default. Static, non-interactive atoms stay server-rendered to protect the JS budget (Foundation §22).                              |
| 2.7  | **Client Component philosophy**    | An atom is a Client Component only if it needs state, refs, event handlers, or Framer Motion. Marked explicitly; kept minimal.                                     |
| 2.8  | **Motion philosophy**              | Motion guides attention/feedback only, `transform`/`opacity` only, gated by `prefers-reduced-motion`, bound to `--duration-*`/`--ease-smooth` (Design Bible §7.2). |
| 2.9  | **Responsive philosophy**          | Mobile-first (375px base), scale up via `min-width`. Touch targets ≥44×44px on mobile. No horizontal scroll.                                                       |
| 2.10 | **No business logic**              | No fetching, no services, no domain rules, no global state. Atoms receive data and callbacks via props.                                                            |
| 2.11 | **Pure presentation**              | Given identical props, an atom renders identically. Side-effect free except local UI state (e.g. tooltip open).                                                    |

---

## 3. Folder Structure

Each atom is a self-contained folder. File responsibilities are identical across atoms.

```
components/
└── atoms/
    ├── Button/
    │   ├── Button.tsx          # Presentation only. Server unless interactive/motion → Client.
    │   ├── Button.types.ts     # Public prop contract + exported unions (variant/size/state).
    │   ├── Button.test.tsx     # Render, variant/size/state, a11y, keyboard tests.
    │   └── index.ts            # Barrel: re-exports component + public types only.
    ├── IconButton/  (same 4 files)
    ├── Link/
    ├── Input/
    ├── Textarea/
    ├── Label/
    ├── Checkbox/
    ├── Radio/
    ├── Switch/
    ├── Select/
    ├── Badge/
    ├── Tag/
    ├── Chip/
    ├── Pill/
    ├── Avatar/
    ├── Icon/
    ├── Divider/
    ├── Spinner/
    ├── Skeleton/
    ├── Tooltip/
    ├── ProgressBar/
    ├── StatusDot/
    ├── FocusRing/
    └── index.ts                # Atoms barrel: re-exports every atom.
```

**Why each file exists:**

- `*.tsx` — the presentation component; the only file that renders markup.
- `*.types.ts` — isolates the public contract so Molecules import types without importing runtime; keeps prop unions single-sourced.
- `*.test.tsx` — enforces the per-atom DoD (§14) in CI: variants, states, keyboard, ARIA, token compliance (no hardcoded value assertions via lint).
- `index.ts` (folder) — single import surface; prevents deep-path imports.
- `atoms/index.ts` — aggregate barrel consumed by Phase 2B+.

> Storybook stories are required by DoD (§14). Story files live alongside the atom (`Button.stories.tsx`) and are exempt from the "no higher-tier import" rule since they are documentation, not shipped UI.

---

## 4. Dependency Rules

**4.1 Allowed imports for an Atom:**

| Allowed                   | Source                                                                                                                             | Purpose                         |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Foundation                | `@/components/foundation` (`Text`, `Heading`, `VisuallyHidden`)                                                                    | Typography + a11y helpers only  |
| Utilities                 | `@/lib/utils` (`cn`, formatters)                                                                                                   | Class merge, pure helpers       |
| Types                     | `@/types`, sibling `*.types.ts`                                                                                                    | Type contracts                  |
| Design Tokens             | Tailwind utilities backed by `@theme`, or `var(--token)`                                                                           | All styling                     |
| Hooks (motion/media only) | `usePrefersReducedMotion`, `useMediaQuery`                                                                                         | Motion gating, breakpoint reads |
| Icons                     | `lucide-react` via the `Icon` atom                                                                                                 | Iconography                     |
| Primitives                | `@/components/ui` (shadcn/ui) where a primitive genuinely helps (e.g. Switch, Tooltip, Select behavior), re-skinned 100% by tokens | Accessible behavior scaffolding |
| Motion                    | `framer-motion`                                                                                                                    | Client atoms only               |

**4.2 Forbidden imports (hard fail in review/CI):** Molecules, Organisms, Sections, Templates, Pages, `lib/services`, `lib/schemas`, `lib/content`, Server Actions, providers (atoms consume provider context only if unavoidable and read-only), `next/navigation` data hooks, fetch/data fetching, business logic, other atoms **except** the explicitly permitted composition atoms below.

**4.3 Permitted intra-atom composition (whitelist):**

| Atom                    | May compose                    | Reason                                |
| ----------------------- | ------------------------------ | ------------------------------------- |
| Button, IconButton      | `Icon`, `Spinner`, `FocusRing` | Leading/trailing icon, loading, focus |
| Chip, Tag, Pill, Badge  | `Icon`, `StatusDot`            | Optional icon/status                  |
| Avatar                  | `Icon`                         | Fallback glyph                        |
| Input, Textarea, Select | `Icon`, `FocusRing`            | Affordance icon, focus                |
| Tooltip                 | `Icon` (trigger optional)      | —                                     |
| Any interactive atom    | `FocusRing`                    | Uniform focus treatment               |

No other atom-to-atom imports are allowed. Circular dependencies are prohibited (§13).

---

## 5. Component Specifications

Every atom below is specified against the same fixed template. Where a field says "inherits," the rule is defined once in §7 (States), §8 (Accessibility), §9 (Motion), §10 (Responsive), §11 (Tokens) and applies uniformly.

### 5.0 Universal rules (apply to all interactive atoms)

- **Focus:** visible 3px `--accent` focus ring on `:focus-visible` only, via `FocusRing`. Never removed.
- **Disabled:** non-interactive, not focusable (except where ARIA requires focusable-disabled), no hover/press motion, reduced emphasis via flagged `--opacity-disabled` token (§11.1).
- **Touch target:** ≥44×44px on mobile regardless of visual size.
- **Motion:** hover/press use `transform`/`opacity` + `--duration-fast` + `--ease-smooth`; disabled under `prefers-reduced-motion`.
- **Tokens only:** no literal colors, px, ms, or hex anywhere.

---

### 5.1 Button

- **Purpose:** Trigger an action or submit within the current context (not navigation).
- **Responsibilities:** Render label (+ optional leading/trailing `Icon`), expose click, reflect variant/size/state.
- **Visual description:** Rounded rectangle, `--radius-default` (8px), `--font-sans`, weight per typographic token, single-line label, optional icon, min height per size.
- **Anatomy:** `[ leadingIcon? ] [ label ] [ trailingIcon? ]` inside a padded flex row; `Spinner` replaces content region when loading.
- **Props (contract, no code):** `variant`, `size`, `type` (button/submit/reset), `disabled`, `loading`, `fullWidth`, `leadingIcon`, `trailingIcon`, `onClick`, `aria-label` (required when icon-only), `children` (label). No `style`/`className` color overrides; `className` limited to layout composition, lint-guarded.
- **Variants:** Primary, Secondary, Ghost, Dark, Danger (Design Bible §6.4 — exactly 5). _Loading, Disabled, Icon-only are **states/uses**, not new color variants._
- **Sizes:** Small, Medium (default), Large. Size sets height, horizontal padding (`--space-*`), and text token; never invents values.
- **States:** Default, Hover, Focus-visible, Pressed/Active, Disabled, Loading. See §7.
- **Interaction behavior:** Click fires `onClick` unless `disabled`/`loading`. Loading disables interaction and shows `Spinner`, preserving width to avoid CLS.
- **Accessibility:** Native `<button>`. One Primary per viewport (Design Bible §7.1) is a **usage rule**, enforced by review, not by the atom. Icon-only requires `aria-label`.
- **Keyboard:** `Enter`/`Space` activate; `Tab` focus order; focus ring on `:focus-visible`.
- **ARIA:** `aria-disabled` mirrors disabled; `aria-busy` when loading.
- **Motion:** Hover subtle `opacity`/`transform`; press slight scale-down via `transform`; `--duration-fast`. Reduced-motion: instant.
- **Responsive:** Full-width option on mobile; touch target ≥44px.
- **Allowed children:** text, `Icon`, `Spinner`.
- **Forbidden usage:** navigation (use `Link`), two Primaries in one viewport, custom colors, wrapping block content.
- **Dependency rules:** §4.1/§4.3.
- **Token usage:** color = variant → `--primary-*`/`--accent-*`/`--bg-dark`/`--error`; radius `--radius-default`; spacing `--space-*`; text `--text-body-*`; shadow only on variants defined to elevate; motion tokens.
- **Composition rules:** Composes `Icon`, `Spinner`, `FocusRing`.
- **Usage guidelines:** Actions only; label leads with verb/outcome (Design Bible voice §2.3); avoid "Click Here".
- **Common mistakes:** using for links; hardcoding blue; duplicating variants for loading/disabled.
- **DoD:** §14 checklist.

### 5.2 IconButton

- **Purpose:** Action button whose entire content is a single `Icon` (e.g. menu, close).
- **Responsibilities:** Same as Button, icon-only.
- **Visual:** Square/circular hit area, `--radius-default` or `--radius-full` per usage token, centered `Icon`.
- **Props:** `variant`, `size`, `icon` (required), `aria-label` (**required**), `disabled`, `loading`, `onClick`.
- **Variants:** Primary, Secondary, Ghost, Dark, Danger (reuse Button variant contract).
- **Sizes:** Small, Medium, Large; hit area ≥44×44px on mobile even at Small.
- **States:** inherits Button (§7).
- **Accessibility:** `aria-label` mandatory; fails lint/test without it.
- **Keyboard/ARIA/Motion/Responsive/Tokens:** inherit Button.
- **Forbidden usage:** text labels; navigation (use `Link` with icon).
- **Common mistakes:** missing `aria-label`; sub-44px touch target.
- **DoD:** §14.

### 5.3 Link

- **Purpose:** Navigate to a route/URL.
- **Responsibilities:** Render an anchor; support internal (App Router) and external targets; reflect variant.
- **Visual:** Inline text link in `--accent-*`, or unstyled/`inherit` variant for wrapping cards; underline treatment per state.
- **Props:** `href` (required), `variant` (inline, standalone, quiet, unstyled), `external`, `prefetch` (internal), `aria-label`, `children`.
- **Variants:** Inline, Standalone, Quiet, Unstyled (for wrapping interactive cards).
- **States:** Default, Hover, Focus-visible, Visited (if defined by token), Active, Disabled(rare).
- **Interaction:** Internal links use App Router navigation; external open safely (`rel="noopener noreferrer"`, `target` explicit).
- **Accessibility:** Descriptive text; never "Click Here" (Design Bible §8.3). External links announce new-context when opening a new tab.
- **Keyboard:** `Enter` activates; native focus.
- **ARIA:** `aria-current` for active nav (used by 2B nav).
- **Motion:** underline/color transition `--duration-fast`.
- **Tokens:** color `--accent-*`/`--primary-*`; text tokens; motion tokens.
- **Forbidden usage:** performing actions (use `Button`); bare `<div>` click targets.
- **Common mistakes:** non-descriptive text; missing external rel.
- **DoD:** §14.

### 5.4 Input

- **Purpose:** Single-line text entry.
- **Responsibilities:** Render `<input>`; reflect validation/state visually; expose id/aria hooks for `FormGroup` (2B).
- **Visual:** Rectangle, `--radius-default` (8px), label sits **above** via `FormGroup` (Design Bible §6.4), optional leading/trailing `Icon`, border reflects state.
- **Props:** `type`, `value`/`defaultValue`, `placeholder`, `disabled`, `readOnly`, `required`, `invalid`, `id`, `name`, `aria-describedby`, `leadingIcon`, `trailingIcon`, `onChange`, `onBlur`, `onFocus`. **No inline validation logic** (2B/Server Actions own it).
- **Variants:** Default; with-leading-icon; with-trailing-icon.
- **Sizes:** Small, Medium, Large (height + padding tokens).
- **States:** Default, Hover, Focus-visible, Filled, Empty, Disabled, ReadOnly, Required, Invalid/Error, (optional) Success. See §7.
- **Interaction:** Emits `onChange`; visual error via `invalid` prop only; no internal state beyond controlled/uncontrolled value.
- **Accessibility:** Must have associated `<label>` (provided by `FormGroup` or `Label`); error text linked via `aria-describedby`; `aria-invalid` when `invalid`.
- **Keyboard:** Standard text editing; `Tab` order.
- **Motion:** border/shadow transition on focus `--duration-fast`.
- **Responsive:** full-width within container; touch target ≥44px.
- **Tokens:** border `--primary-*`; focus ring `--accent`; error `--error`; radius `--radius-default`; spacing/text tokens.
- **Forbidden usage:** unlabeled inputs; embedding validation rules; hardcoded widths.
- **Common mistakes:** placeholder-as-label; missing `aria-invalid`.
- **DoD:** §14.

### 5.5 Textarea

- Same contract as Input, multi-line. Adds `rows`/auto-resize (visual only), `resize` behavior. States/tokens/a11y inherit Input. Forbidden: fixed pixel heights; validation logic.

### 5.6 Label

- **Purpose:** Accessible caption bound to a form control.
- **Props:** `htmlFor` (required), `required` (renders required indicator), `disabled`, `children`.
- **Visual:** Sits above control; required indicator uses `--error` or defined token; text token from scale.
- **States:** Default, Disabled, Required, Invalid (color reflects associated control if wired by 2B).
- **Accessibility:** `htmlFor` must match control `id`; clicking focuses control.
- **Tokens:** text `--text-body-*`; color `--primary-*`; required indicator token.
- **Forbidden:** floating labels (Design Bible mandates labels above), decorative-only labels.
- **DoD:** §14.

### 5.7 Checkbox

- **Purpose:** Binary/independent multi-select choice.
- **Anatomy:** Box + check/indeterminate `Icon` + associated `Label`.
- **Props:** `checked`, `defaultChecked`, `indeterminate`, `disabled`, `required`, `invalid`, `id`, `name`, `value`, `aria-describedby`, `onChange`.
- **States:** Unchecked, Checked, Indeterminate, Focus-visible, Hover, Disabled, Invalid, ReadOnly.
- **Accessibility:** Native `<input type=checkbox>` (or shadcn primitive re-skinned); label association mandatory; `aria-checked` incl. `mixed` for indeterminate.
- **Keyboard:** `Space` toggles.
- **Motion:** check mark fade/scale `--duration-fast`; reduced-motion instant.
- **Tokens:** box border `--primary-*`; checked fill `--accent-*`; radius `--radius-sm`; motion tokens.
- **Forbidden:** using for mutually exclusive choices (use Radio); unlabeled.
- **DoD:** §14.

### 5.8 Radio

- **Purpose:** Mutually exclusive single choice within a named group.
- **Props:** `checked`, `disabled`, `required`, `invalid`, `id`, `name` (required for grouping), `value`, `onChange`.
- **States:** as Checkbox minus indeterminate.
- **Accessibility:** Radios share `name`; `role`/native semantics; arrow-key roving within group is a **2B RadioGroup** concern — the atom exposes correct semantics only.
- **Keyboard:** `Space`/arrow (group-level in 2B).
- **Motion/Tokens:** dot scale-in `--duration-fast`; fill `--accent-*`; shape `--radius-full`.
- **Forbidden:** standalone radios without a group name.
- **DoD:** §14.

### 5.9 Switch

- **Purpose:** Immediate on/off toggle for a setting.
- **Anatomy:** Track + thumb.
- **Props:** `checked`, `disabled`, `id`, `name`, `aria-label`/labelled-by, `onChange`.
- **States:** Off, On, Focus-visible, Hover, Disabled.
- **Accessibility:** `role="switch"`, `aria-checked`; label required.
- **Keyboard:** `Space`/`Enter` toggle.
- **Motion:** thumb `transform` translate + track color `--duration-fast`.
- **Tokens:** track off `--primary-*`, on `--accent-*`; thumb `--bg-elevated`; `--radius-full`; motion tokens.
- **Foundation atom justification:** Included because settings toggles are a genuine primitive; behavior sourced from shadcn primitive, fully token-reskinned. **No new visual decisions** beyond token mapping.
- **Forbidden:** using for form submit choices requiring validation (use Checkbox).
- **DoD:** §14.

### 5.10 Select

- **Purpose:** Choose one option from a list.
- **Anatomy:** Trigger (value + chevron `Icon`) + listbox popover + options.
- **Props:** `value`, `defaultValue`, `options`/children, `placeholder`, `disabled`, `required`, `invalid`, `id`, `name`, `aria-describedby`, `onChange`.
- **States:** Closed, Open, Focus-visible, Hover, Selected, Disabled, Invalid, Empty/placeholder.
- **Interaction:** Client Component. Built on shadcn/Radix Select primitive, re-skinned by tokens only. Popover must not cause CLS; opens within viewport.
- **Accessibility:** `role="combobox"`/`listbox` semantics from primitive; full keyboard support; label association.
- **Keyboard:** `Enter`/`Space` open, arrows navigate, `Esc` close, type-ahead.
- **Motion:** popover fade/translate `--duration-fast`→moderate; reduced-motion instant.
- **Tokens:** trigger like Input; menu `--bg-elevated` + `--shadow-*`; radius `--radius-default`; motion tokens.
- **Forbidden:** native unstyled `<select>` where design requires the custom menu; hardcoded menu widths.
- **DoD:** §14.

### 5.11 Badge

- **Purpose:** Non-interactive status/metadata label.
- **Props:** `variant` (semantic), `size`, `children`, optional leading `Icon`/`StatusDot`.
- **Variants:** Neutral (`--primary-*`), Accent (`--accent-*`), Success, Warning, Error (semantic tokens). No invented colors.
- **States:** Static only (Default, Disabled optional). Informational → **flat, no hover elevation** (Masterplan DDR).
- **Accessibility:** Decorative unless conveying status; if status, provide text or `aria-label`.
- **Tokens:** background/text semantic tokens; `--radius-full` or `--radius-sm` per defined shape; text `--text-body-xs`.
- **Forbidden:** click handlers (use Tag/Chip/Button); hover elevation.
- **DoD:** §14.

### 5.12 Tag

- **Purpose:** Categorization label; may be removable.
- **Props:** `children`, `removable`, `onRemove`, `variant`, `leadingIcon`.
- **States:** Default, Hover (only if removable/interactive), Focus-visible (if interactive), Disabled.
- **Accessibility:** Remove control is an `IconButton` with `aria-label`.
- **Tokens:** as Badge; interactive states use motion tokens.
- **Forbidden:** navigation (use Link); mixing with Badge semantics.
- **DoD:** §14.

### 5.13 Chip

- **Purpose:** Compact interactive selection/filter token (selectable).
- **Props:** `selected`, `disabled`, `onSelect`, `leadingIcon`, `removable`, `children`.
- **States:** Default, Selected, Hover, Focus-visible, Disabled.
- **Accessibility:** If selectable, `role` reflects toggle/`aria-pressed`; keyboard operable.
- **Motion:** selection color/transform `--duration-fast`.
- **Tokens:** selected `--accent-*`; unselected `--primary-*`; `--radius-full`.
- **Forbidden:** using as a Button for primary actions.
- **DoD:** §14.

### 5.14 Pill

- **Purpose:** Rounded label/count container (visual sibling of Badge with `--radius-full`).
- **Note (extension flagged):** Sources define Badge/Tag; Pill is a **shape variant** commonly needed. Included as a distinct atom only to standardize the fully-rounded metadata shape; it introduces **no new colors** and reuses Badge semantic variants. If governance prefers, Pill collapses into `Badge shape="pill"`. Documented as an extension, not a redesign.
- **Props/States/Tokens/A11y:** identical to Badge with `--radius-full` fixed.
- **Forbidden:** interactivity.
- **DoD:** §14.

### 5.15 Avatar

- **Purpose:** Represent a person/entity with image or fallback.
- **Anatomy:** Circular crop (Design Bible §5.2) image + fallback (initials/`Icon`) + optional `StatusDot`.
- **Props:** `src`, `alt` (required if meaningful), `size`, `fallback`, `status`.
- **Variants:** Image, Initials, Icon-fallback.
- **Sizes:** Small, Medium, Large (token-driven diameters).
- **States:** Loaded, Loading (Skeleton), Error→fallback.
- **Accessibility:** Meaningful `alt`, or empty `alt` + `aria-hidden` if decorative.
- **Motion:** image fade-in on load `--duration-fast`.
- **Tokens:** `--radius-full`; fallback bg `--primary-*`; text token; `--shadow-*` only if defined.
- **Forbidden:** stock photography; non-circular crop; missing alt for meaningful images.
- **DoD:** §14.

### 5.16 Icon

- **Purpose:** Single Lucide glyph wrapper enforcing stroke and sizing.
- **Responsibilities:** Normalize stroke to 1.5–2px (Design Bible §6.5), size via token, apply `currentColor`, manage a11y.
- **Props:** `name`/imported icon, `size`, `aria-label` (else `aria-hidden`), `strokeWidth` (constrained to 1.5–2).
- **Sizes:** token-mapped (xs–lg) aligned to text scale.
- **States:** inherits color via `currentColor`; no independent interactive states.
- **Accessibility:** Decorative icons `aria-hidden="true"`; meaningful icons require `aria-label` or accompanying text.
- **Tokens:** color `currentColor` (from parent token); size token; stroke fixed range.
- **Forbidden:** non-Lucide icon sets; arbitrary stroke widths; color hardcoding; glowing-brain / cliché AI imagery.
- **DoD:** §14.

### 5.17 Divider

- **Purpose:** Optional visual separation — used sparingly ("whitespace, not dividers", Design Bible §1.1).
- **Props:** `orientation` (horizontal/vertical), `decorative`.
- **Accessibility:** `role="separator"` when semantic; `aria-hidden` when decorative.
- **Tokens:** color `--primary-*` (low emphasis); spacing `--space-*`.
- **Forbidden:** default divider between every section (prefer whitespace).
- **DoD:** §14.

### 5.18 Spinner

- **Purpose:** Indeterminate loading indicator.
- **Props:** `size`, `aria-label` (e.g. "Loading").
- **States:** Animating; hidden when idle.
- **Accessibility:** `role="status"`, `aria-live="polite"`, accessible label.
- **Motion:** continuous rotation via `transform`; respects reduced-motion by reducing/pausing to a non-animated indicator.
- **Tokens:** color `--accent-*`/`currentColor`; size token; duration token.
- **Forbidden:** layout-shifting spinners; color hardcoding.
- **DoD:** §14.

### 5.19 Skeleton

- **Purpose:** Placeholder preserving layout during load (protects CLS < 0.05).
- **Props:** `width`/`height` via tokens or fluid, `shape` (text/rect/circle).
- **Motion:** subtle shimmer via `opacity`/`transform`; disabled under reduced-motion (static block).
- **Accessibility:** `aria-hidden` (decorative); announce loading via a sibling `Spinner`/status if needed.
- **Tokens:** bg `--primary-*`/`--bg-elevated`; radius matches target atom; motion tokens.
- **Forbidden:** fixed pixel sizes that break responsiveness; shimmer without reduced-motion fallback.
- **DoD:** §14.

### 5.20 Tooltip

- **Purpose:** Supplemental label on hover/focus.
- **Anatomy:** Trigger + floating content.
- **Props:** `content`, `side`, `delay`, `disabled`.
- **States:** Hidden, Visible (hover/focus), Dismissed.
- **Interaction:** Client Component (shadcn/Radix Tooltip primitive, token-reskinned). Opens on hover **and** keyboard focus; dismiss on `Esc`/blur.
- **Accessibility:** `role="tooltip"`, wired via `aria-describedby`; never the sole carrier of essential info; not focus-trapping.
- **Motion:** fade/translate `--duration-fast`; reduced-motion instant.
- **Tokens:** bg `--bg-dark`/`--primary-*`; text token; `--radius-default`; `--shadow-*`; motion tokens.
- **Forbidden:** tooltips on touch-only critical info; essential content hidden behind hover.
- **DoD:** §14.

### 5.21 ProgressBar

- **Purpose:** Determinate progress indication.
- **Props:** `value` (0–100), `max`, `label`, `size`.
- **States:** 0%, partial, complete, indeterminate (optional).
- **Accessibility:** `role="progressbar"`, `aria-valuenow/min/max`, accessible label.
- **Motion:** width via `transform`/scaleX transition `--duration-*`; reduced-motion → instant jump.
- **Tokens:** track `--primary-*`; fill `--accent-*`; `--radius-full`; motion tokens.
- **Forbidden:** using for indeterminate loading where Spinner fits; hardcoded widths.
- **DoD:** §14.

### 5.22 StatusDot

- **Purpose:** Compact semantic status indicator (online/success/warning/error/neutral).
- **Props:** `status` (semantic), `size`, `pulse` (optional), `aria-label`.
- **States:** Static per semantic token; optional pulse.
- **Accessibility:** `aria-label` or adjacent text (color is not the sole signal — WCAG).
- **Motion:** optional pulse via `opacity`/`transform`; reduced-motion disables pulse.
- **Tokens:** `--success/--warning/--error/--primary-*/--accent-*`; `--radius-full`.
- **Forbidden:** color as only meaning; hardcoded hues.
- **DoD:** §14.

### 5.23 FocusRing

- **Purpose:** Single source of the mandated visible 3px accent focus indicator (Design Bible §7.3).
- **Responsibilities:** Apply consistent `:focus-visible` ring to any interactive atom; never render on mouse-only focus.
- **Props:** `inset`/`offset` (token-bound), `radius` (matches host atom).
- **Accessibility:** Guarantees WCAG focus-visible; 3px width fixed; `--accent` color fixed.
- **Motion:** none required; instant appearance (no animated focus that delays visibility).
- **Tokens:** color `--accent`; width fixed 3px per Design Bible; offset via `--space-*`.
- **Forbidden:** removing outlines without replacement; animating ring in; non-accent color.
- **Justification as atom:** Centralizes the single most-repeated a11y requirement so no interactive atom re-implements it — prevents divergence.
- **DoD:** §14.

**Additional foundational atoms justified & included:** `Icon`, `FocusRing`, `Spinner`, `Skeleton`, `StatusDot` (all above) are required by existing architecture (Button loading, Avatar fallback, form focus, loading states from Foundation §19). No other atoms are added.

---

## 6. Variants (consolidated)

| Component   | Color/semantic variants                  | Shape/other variants                | Sizes         | Notes                                                                              |
| ----------- | ---------------------------------------- | ----------------------------------- | ------------- | ---------------------------------------------------------------------------------- |
| Button      | Primary, Secondary, Ghost, Dark, Danger  | fullWidth                           | S, M, L       | Exactly 5 (Design Bible §6.4). Loading/Disabled/Icon-only are states, not variants |
| IconButton  | Primary, Secondary, Ghost, Dark, Danger  | round / square                      | S, M, L       | `aria-label` required                                                              |
| Link        | —                                        | Inline, Standalone, Quiet, Unstyled | inherits text | Unstyled wraps interactive cards                                                   |
| Input       | —                                        | leading-icon, trailing-icon         | S, M, L       | Invalid is a state                                                                 |
| Textarea    | —                                        | auto-resize / fixed-rows            | S, M, L       | —                                                                                  |
| Label       | —                                        | required indicator                  | inherits      | —                                                                                  |
| Checkbox    | —                                        | —                                   | S, M          | Indeterminate = state                                                              |
| Radio       | —                                        | —                                   | S, M          | Group behavior in 2B                                                               |
| Switch      | —                                        | —                                   | S, M          | role=switch                                                                        |
| Select      | —                                        | single                              | S, M, L       | Radix-based                                                                        |
| Badge       | Neutral, Accent, Success, Warning, Error | —                                   | S, M          | Flat, static                                                                       |
| Tag         | Neutral, Accent, Success, Warning, Error | removable                           | S, M          | —                                                                                  |
| Chip        | Neutral, Accent                          | selectable, removable               | S, M          | Selected state                                                                     |
| Pill        | (reuses Badge semantics)                 | fully-rounded                       | S, M          | Extension of Badge shape                                                           |
| Avatar      | —                                        | Image, Initials, Icon               | S, M, L       | Circular only                                                                      |
| Icon        | —                                        | —                                   | xs–lg         | stroke 1.5–2                                                                       |
| Divider     | —                                        | horizontal, vertical                | —             | Use sparingly                                                                      |
| Spinner     | —                                        | —                                   | S, M, L       | role=status                                                                        |
| Skeleton    | —                                        | text, rect, circle                  | fluid         | reduced-motion static                                                              |
| Tooltip     | —                                        | side: top/right/bottom/left         | —             | Radix-based                                                                        |
| ProgressBar | —                                        | determinate, indeterminate          | S, M          | —                                                                                  |
| StatusDot   | Success, Warning, Error, Neutral, Accent | pulse                               | S, M          | not color-only                                                                     |
| FocusRing   | Accent (fixed)                           | offset/inset                        | matches host  | 3px fixed                                                                          |

**Variant governance:** No variant may be added that introduces a color/space/type value not already tokenized. Loading/disabled/selected/invalid are **states**, never duplicated as color variants (anti-pattern §13).

---

## 7. States (behavior definitions)

| State          | Applies to                    | Behavior                                                                                            |
| -------------- | ----------------------------- | --------------------------------------------------------------------------------------------------- |
| Default        | all                           | Base token appearance                                                                               |
| Hover          | interactive                   | Subtle `--primary`/`--accent` shift + optional `transform`; `--duration-fast`; pointer devices only |
| Focus          | interactive                   | Programmatic focus; no ring on mouse-only                                                           |
| Focus-visible  | interactive                   | 3px `--accent` `FocusRing`; keyboard/AT focus                                                       |
| Pressed/Active | Button/IconButton/Chip        | Slight scale-down `transform`; `--duration-fast`                                                    |
| Disabled       | interactive                   | Not operable, flagged `--opacity-disabled`, no motion, `aria-disabled`                              |
| Loading        | Button/IconButton/ProgressBar | `Spinner`/animation, `aria-busy`, interaction blocked, width preserved                              |
| Success        | Input/form atoms              | `--success` border/icon (only if design uses it)                                                    |
| Error/Invalid  | form atoms                    | `--error` border, `aria-invalid`, linked message via 2B                                             |
| Active         | Link/nav                      | `aria-current`                                                                                      |
| Selected       | Chip                          | `--accent` fill, `aria-pressed`/selected semantics                                                  |
| Checked        | Checkbox/Radio/Switch         | filled `--accent`, `aria-checked`                                                                   |
| Indeterminate  | Checkbox                      | mixed glyph, `aria-checked="mixed"`                                                                 |
| ReadOnly       | Input/Textarea                | Non-editable, focusable, `readonly`                                                                 |
| Empty          | Input/Select                  | Placeholder token styling                                                                           |
| Filled         | Input                         | Value present styling                                                                               |
| Required       | Label/inputs                  | Required indicator + `required`/`aria-required`                                                     |

Every applicable state must be visually distinct **using tokens only** and verified in tests (§14).

---

## 8. Accessibility Specification

| Component      | Role/Element     | Key ARIA                                            | Keyboard                          | Screen reader                | Touch/Contrast     |
| -------------- | ---------------- | --------------------------------------------------- | --------------------------------- | ---------------------------- | ------------------ |
| Button         | `<button>`       | `aria-disabled`, `aria-busy`                        | Enter/Space                       | Announces label + state      | ≥44px; text ≥4.5:1 |
| IconButton     | `<button>`       | `aria-label` (req)                                  | Enter/Space                       | Announces label              | ≥44px              |
| Link           | `<a>`            | `aria-current`, rel for external                    | Enter                             | Announces link + destination | text ≥4.5:1        |
| Input          | `<input>`        | `aria-invalid`, `aria-describedby`, `aria-required` | text editing, Tab                 | Label + error announced      | ≥44px              |
| Textarea       | `<textarea>`     | as Input                                            | as Input                          | as Input                     | ≥44px              |
| Label          | `<label>`        | `for`                                               | click → focus control             | Associates name              | —                  |
| Checkbox       | native/primitive | `aria-checked` (incl mixed)                         | Space                             | Checked state                | ≥44px              |
| Radio          | native/primitive | grouped `name`                                      | Space/arrows (2B group)           | Group + selection            | ≥44px              |
| Switch         | primitive        | `role=switch`, `aria-checked`                       | Space/Enter                       | On/off                       | ≥44px              |
| Select         | Radix combobox   | `role=combobox/listbox`                             | Enter/Space/arrows/Esc/type-ahead | Options + selection          | ≥44px              |
| Badge/Tag/Pill | span             | status via label if meaningful                      | n/a (Tag remove focusable)        | Reads text                   | text contrast      |
| Chip           | button/toggle    | `aria-pressed`                                      | Enter/Space                       | Selected state               | ≥44px              |
| Avatar         | img/span         | `alt` or `aria-hidden`                              | n/a                               | Name or hidden               | —                  |
| Icon           | svg              | `aria-hidden` or `aria-label`                       | n/a                               | Hidden or labeled            | stroke visible     |
| Divider        | hr/span          | `role=separator`/hidden                             | n/a                               | Optional                     | 3:1 if meaningful  |
| Spinner        | span             | `role=status`, `aria-live=polite`                   | n/a                               | "Loading"                    | —                  |
| Skeleton       | span             | `aria-hidden`                                       | n/a                               | Silent                       | —                  |
| Tooltip        | Radix            | `role=tooltip`, `aria-describedby`                  | focus shows, Esc hides            | Describes trigger            | not sole info      |
| ProgressBar    | span             | `role=progressbar`, `aria-valuenow/min/max`         | n/a                               | Percent                      | 3:1 fill           |
| StatusDot      | span             | `aria-label`                                        | n/a                               | Status text                  | not color-only     |
| FocusRing      | —                | ensures focus-visible                               | —                                 | —                            | 3px accent, 3:1    |

**Universal a11y rules:** WCAG 2.1 AA; contrast ≥4.5:1 normal / ≥3:1 large & non-text; logical Tab order; visible 3px focus ring on `:focus-visible`; `prefers-reduced-motion` honored; color never the only signal; icon-only interactives always labeled.

---

## 9. Motion Specification

| Aspect                | Rule                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interaction hierarchy | Instant (100–200ms, `--duration-fast`) UI feedback → Moderate (300ms) transitions → Slow (500ms) reveals (Design Bible §7.2). Atoms use **fast** almost exclusively |
| Hover                 | `transform`/`opacity` only, `--duration-fast`, `--ease-smooth`; pointer devices                                                                                     |
| Focus                 | Ring appears **instantly** (no animation that delays visibility)                                                                                                    |
| Press                 | Slight scale-down via `transform`, `--duration-fast`                                                                                                                |
| Loading               | Spinner rotation, ProgressBar fill, Skeleton shimmer — `transform`/`opacity` only                                                                                   |
| Disabled              | No motion                                                                                                                                                           |
| Reduced motion        | `usePrefersReducedMotion` disables non-essential animation; Spinner degrades to static/paused indicator; Skeleton becomes static; transitions become instant        |
| Properties            | **Only `transform` and `opacity`** (GPU) — never width/height/top/left/color-layout that thrash                                                                     |
| Tokens                | All durations/easing from `--duration-*`/`--ease-smooth`; no literal ms                                                                                             |
| Library               | Framer Motion in client atoms only; server atoms use CSS token transitions                                                                                          |

No motion may be authored with a hardcoded duration, easing, or animatable layout property.

---

## 10. Responsive Behaviour

| Breakpoint           | Strategy                                                                                                               |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Mobile (base ~375px) | Mobile-first authored here; touch targets ≥44×44px; Button `fullWidth` common; inputs full-width; no horizontal scroll |
| Tablet               | Scale spacing/size tokens up via `min-width`; atoms unchanged structurally                                             |
| Desktop              | Default sizing; hover states active; inline links resume inline width                                                  |
| Large / Ultra-wide   | Atoms cap with their container; no new sizes; no invented breakpoints beyond Foundation screens                        |

**Resizing strategy:** Sizes (S/M/L) are token-driven and fixed; responsiveness comes from container context and `min-width` utilities, not per-atom media queries where avoidable. **Typography** scales only through the fixed 14-step token scale — atoms never set raw font sizes. **Spacing** always base-8 (`--space-*`); atoms never introduce arbitrary responsive padding.

---

## 11. Token Usage

Every atom draws **only** from these categories. Hardcoded values fail lint/CI (§13, Masterplan §8).

| Category   | Tokens                                                                                          | Applies to                          |
| ---------- | ----------------------------------------------------------------------------------------------- | ----------------------------------- |
| Colors     | `--primary-50…900`, `--accent-50…700`, `--bg-page/elevated/dark`, `--success/--warning/--error` | fills, borders, text, states        |
| Typography | `--font-sans`, `--font-mono`, `--text-display-xl…--text-body-xs`                                | all text                            |
| Spacing    | `--space-1…--space-32` (base-8)                                                                 | padding, gaps, offsets              |
| Radius     | `--radius-sm`, `--radius-default`(8px), `--radius-lg`(12px), `--radius-full`                    | corners                             |
| Border     | width via defined border tokens; color from `--primary/--accent/semantic`                       | inputs, dividers                    |
| Shadow     | `--shadow-xs…--shadow-xl`, `--shadow-accent`                                                    | Select menu, Tooltip, elevated only |
| Motion     | `--duration-fast…--duration-slow`, `--ease-smooth`                                              | all animation                       |
| Opacity    | **flagged** disabled opacity token (§11.1)                                                      | disabled states                     |

**Per-atom token map (summary):** Button/IconButton → variant color + `--radius-default` + `--space-*` + text + motion; Input/Textarea/Select → `--primary` border, `--accent` focus, `--error` invalid, `--radius-default`; Badge/Tag/Chip/Pill/StatusDot → semantic colors + `--radius-full/sm`; Avatar → `--radius-full`; Icon → `currentColor` + size token + stroke 1.5–2; Spinner/Skeleton/ProgressBar → `--accent`/`--primary` + motion; Tooltip → `--bg-dark` + `--shadow-*`; FocusRing → `--accent` + 3px + `--space-*` offset.

**11.1 Flagged missing tokens (must be defined in Phase 1 token layer before build; do not hardcode):**

1. `--opacity-disabled` — a disabled-state opacity is implied by "Disabled" states but no numeric opacity token appears in the sources.
2. `--focus-ring-width` — Design Bible fixes **3px**; recommend encoding as a token for single-sourcing (value is not invented — it is the stated 3px).
3. `--border-width-default` — input/border width is implied but no explicit width token is defined.
4. `--tooltip-delay` / interaction delay token — Tooltip needs a delay value; none tokenized.

These are **flagged, not invented** (per Design Bible §1.3 warning). Implementation is blocked on their definition; values 2 comes directly from the Design Bible (3px) and must be transcribed, not chosen.

---

## 12. Component Matrix

| Component   | Variants      | Sizes | Interactive | Client? | Foundation deps              | Used by (2B+)                         | A11y required  | Responsive | Motion              | DoD |
| ----------- | ------------- | ----- | ----------- | ------- | ---------------------------- | ------------------------------------- | -------------- | ---------- | ------------------- | --- |
| Button      | 5             | S/M/L | Yes         | Yes     | cn, Icon, Spinner, FocusRing | CTAGroup, FormGroup, Header, all CTAs | Yes            | Yes        | Hover/press/loading | §14 |
| IconButton  | 5             | S/M/L | Yes         | Yes     | Icon, Spinner, FocusRing     | Header, Tag, Select                   | Yes (label)    | Yes        | Hover/press         | §14 |
| Link        | 4             | text  | Yes         | No*     | cn, Icon                     | Nav, Cards, Footer                    | Yes            | Yes        | Underline/color     | §14 |
| Input       | icon variants | S/M/L | Yes         | Yes     | cn, Icon, FocusRing          | FormGroup, ContactForm                | Yes            | Yes        | Focus               | §14 |
| Textarea    | resize        | S/M/L | Yes         | Yes     | cn, FocusRing                | FormGroup, ContactForm                | Yes            | Yes        | Focus               | §14 |
| Label       | required      | —     | No          | No      | Text                         | FormGroup                             | Yes            | Yes        | None                | §14 |
| Checkbox    | —             | S/M   | Yes         | Yes     | Icon, FocusRing              | FormGroup                             | Yes            | Yes        | Check               | §14 |
| Radio       | —             | S/M   | Yes         | Yes     | FocusRing                    | RadioGroup(2B)                        | Yes            | Yes        | Dot                 | §14 |
| Switch      | —             | S/M   | Yes         | Yes     | FocusRing                    | Settings forms                        | Yes            | Yes        | Thumb               | §14 |
| Select      | single        | S/M/L | Yes         | Yes     | Icon, FocusRing, ui/select   | FormGroup                             | Yes            | Yes        | Popover             | §14 |
| Badge       | 5             | S/M   | No          | No      | Icon?, StatusDot?            | Cards, Product                        | If status      | Yes        | None                | §14 |
| Tag         | 5             | S/M   | Partly      | No/Yes  | Icon, IconButton             | Blog, Filters(2B)                     | If interactive | Yes        | Remove              | §14 |
| Chip        | 2             | S/M   | Yes         | Yes     | Icon, FocusRing              | Filters(2B)                           | Yes            | Yes        | Select              | §14 |
| Pill        | (Badge)       | S/M   | No          | No      | —                            | Counts, meta                          | If status      | Yes        | None                | §14 |
| Avatar      | 3             | S/M/L | No          | No*     | Icon, Skeleton, StatusDot    | TeamCard, Testimonials                | alt            | Yes        | Fade-in             | §14 |
| Icon        | —             | xs–lg | No          | No      | lucide-react                 | Everywhere                            | hidden/label   | Yes        | None                | §14 |
| Divider     | 2             | —     | No          | No      | —                            | Layouts sparingly                     | role           | Yes        | None                | §14 |
| Spinner     | —             | S/M/L | No          | Yes     | —                            | Button, loading.tsx                   | status         | Yes        | Rotate              | §14 |
| Skeleton    | 3             | fluid | No          | No/Yes  | —                            | loading states                        | hidden         | Yes        | Shimmer             | §14 |
| Tooltip     | side          | —     | Yes         | Yes     | Icon, ui/tooltip             | Icons, forms                          | describedby    | Yes        | Fade                | §14 |
| ProgressBar | 2             | S/M   | No          | Yes     | —                            | Product, onboarding                   | progressbar    | Yes        | Fill                | §14 |
| StatusDot   | 5             | S/M   | No          | No/Yes  | —                            | Avatar, Badge, status                 | label          | Yes        | Pulse opt           | §14 |
| FocusRing   | accent        | host  | —           | No      | —                            | all interactive atoms                 | focus-visible  | Yes        | None                | §14 |

\* Client only if it uses handlers/motion; otherwise Server Component.

---

## 13. Anti-Patterns (forbidden — CI/review reject)

| #   | Anti-pattern                                            | Why forbidden         | Correct approach                  |
| --- | ------------------------------------------------------- | --------------------- | --------------------------------- |
| 1   | Hardcoded colors (`#hex`, `rgb()`)                      | Token divergence      | Use `--primary/--accent/semantic` |
| 2   | Inline styles for design values                         | Bypasses tokens       | Token utilities                   |
| 3   | Arbitrary spacing px / magic numbers                    | Breaks base-8         | `--space-*`                       |
| 4   | Business logic / validation in atoms                    | Violates purity       | Props + 2B/Server Actions         |
| 5   | Network requests / data fetching                        | Not an atom concern   | Services (higher tier)            |
| 6   | Direct DOM manipulation                                 | Non-React, unsafe     | Refs/props                        |
| 7   | Component-specific spacing hacks                        | Inconsistency         | Container/Foundation              |
| 8   | Duplicate variants (loading/disabled as color variants) | Variant explosion     | Model as state                    |
| 9   | Circular dependencies                                   | Build/maintain risk   | Whitelist §4.3 only               |
| 10  | Page-specific styling in atoms                          | Breaks reuse          | Keep atoms context-agnostic       |
| 11  | Overloaded props / mega-atoms                           | Violates composition  | Compose smaller atoms             |
| 12  | State duplication (mirroring same state twice)          | Drift/bugs            | Single source per state           |
| 13  | Bare `<div>` as clickable                               | A11y failure          | `<button>`/`<a>`                  |
| 14  | Removing focus outline without replacement              | WCAG failure          | `FocusRing`                       |
| 15  | Animating layout props (width/top/color-shift)          | Thrash, misses budget | `transform`/`opacity` only        |
| 16  | Non-Lucide icons / arbitrary stroke                     | Brand inconsistency   | `Icon` atom, 1.5–2px              |
| 17  | Placeholder as label                                    | A11y failure          | `Label`/`FormGroup`               |
| 18  | Two Primary buttons in one viewport                     | UX rule               | One primary action                |
| 19  | Motion without reduced-motion fallback                  | Accessibility         | Gate via hook                     |
| 20  | Hardcoded durations/easing (ms)                         | Token divergence      | `--duration-*`/`--ease-smooth`    |

---

## 14. Definition of Done (per atom)

An atom is **Done** only when **every** box is satisfied and verified in CI/review:

- [ ] **Accessibility complete** — correct semantic element/ARIA, keyboard operable, `:focus-visible` 3px accent ring, labels present, contrast ≥4.5:1 (≥3:1 large/non-text), color not sole signal, reduced-motion honored.
- [ ] **Responsive complete** — renders at 375px/tablet/desktop/ultra-wide, no horizontal scroll, touch targets ≥44×44px.
- [ ] **Variants complete** — every variant in §6 implemented, no undocumented variants.
- [ ] **States complete** — every applicable §7 state implemented and visually distinct via tokens.
- [ ] **Token compliant** — zero hardcoded color/space/type/radius/shadow/motion; all from `@theme`/`var(--token)`; any missing token flagged (§11.1), not hardcoded.
- [ ] **Lint clean** — ESLint (incl. a11y + no-hardcoded rules) passes.
- [ ] **Build clean** — Next.js build passes; Server/Client boundary correct and minimal.
- [ ] **Type safe** — strict TypeScript, public contract in `*.types.ts`, no `any`.
- [ ] **Story complete** — Storybook covers all variants/sizes/states incl. disabled/loading/error/reduced-motion.
- [ ] **Zero hardcoded values** — verified by lint + test assertions.
- [ ] **Composition verified** — only whitelisted deps (§4); no forbidden imports; no circular deps.
- [ ] **Motion verified** — `transform`/`opacity` only, token durations/easing, reduced-motion fallback tested.
- [ ] **Keyboard verified** — full keyboard walkthrough passes; correct Tab order; Esc/arrow where applicable.

---

_End of 02A_Atoms_Specification_v1.0. Derived strictly from Design Bible v1.0, Frontend Masterplan v1.0, Frontend_Architecture_Specification_v1.0, and Project_Foundation_Specification_v1.0. No architecture changed and no design decision or token invented; all extensions (Pill as Badge shape, `FocusRing`/`Icon`/`Spinner`/`Skeleton`/`StatusDot` inclusion) and all missing tokens (§11.1) are explicitly flagged for governance approval._
