# NorAI Official Web — Project Progress & Evolution Context

## 1. Project Overview & Original Legacy Baseline
**NorAI Technologies** is an AI products and enterprise automation startup operating out of its regional hub in **Uttar Pradesh, India**. NorAI builds lightweight micro-SaaS utilities (AI Resume Shortlister, Course Note-Taker, Community Chat Digest, Smart Dainik News) and bespoke enterprise AI pipelines.

### Initial Legacy Architecture & Styling Constraints
* **Framework:** Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4.
* **Legacy Aesthetics:** Deep near-black canvas (`#030712`), generic blue radial glows (`rgba(59,130,246,0.15)`), 3D tilt cards (`TiltCard`), standard framework default colors (`#10B981` Emerald), and legacy placeholders (such as hardware ZK proof badges).

---

## 2. Initial 7-Phase Build Roadmap (Phase 0–7 Infrastructure)
The repository was built through a structured 7-phase architecture:

1. **Phase 1: Project Foundation & Design Tokens** — Established layout landmarks, custom CSS variables, typography tokens, and foundation primitives (`Container`, `Heading`, `Text`, `Section`).
2. **Phase 2: Shared UI Components (Atoms & Molecules)** — Built buttons, card containers, inputs, badges, and icon wrappers.
3. **Phase 3: Organisms & Global Layouts** — Implemented global `Header`, `Footer`, `ProcessFlow`, `ComparisonTable`, and `FAQSection`.
4. **Phase 4: Homepage Assembly** — Assembled primary marketing funnel with hero, stat cards, product showcase, and CTA.
5. **Phase 5: Core Pages Construction** — Created route shells for `/products`, `/services`, `/about`, `/contact`, and `/pricing`.
6. **Phase 6: Content Hub & Support Pages** — Integrated `/blog` MDX templates, `/privacy`, and `/terms`.
7. **Phase 7: Optimization & Audit Phase** — Cleaned up build errors, SEO metadata helpers (`buildMetadata`), and initial component tests.

---

## 3. Current Rebuild Workflow & Token System Baseline

### The Quality Protocol (Loop for Every Page)
To transform the website from generic AI startup tropes into a bespoke, state-of-the-art visual experience, every page undergoes a strict 5-step loop:
`Critique → User Approval → Implementation → Vercel Guidelines Review → Fixes & Visual Verification`.

### Derived Bespoke Design Tokens (Site-Wide Baseline)
* **Canvas Base (`--bg-page`):** `#0B0F17` (Obsidian Slate — pure neutral dark canvas).
* **Elevated Surfaces (`--bg-surface`):** `#131924` (Elevated Slate — 1px hairline border containers `rgba(255,255,255,0.09)`).
* **Primary Accent (`--accent-primary`):** `#0CCAB1` (Electric Viridian — mathematically derived HSL shift off catalog swatches).
* **Mono/Status Accent (`--accent-[#45F7D6]`):** `#45F7D6` (Phosphor Mint — for live indicators, latency badges, and status tags).
* **Typography:** `Bricolage Grotesque` (Display headings), `Inter` (Body prose), `JetBrains Mono` (Technical SLAs and metadata).

---

## 4. Rebuild Status & Execution Log

| Phase / Page | Rebuild Objective | Key Architectural & Design Changes | Status |
| :--- | :--- | :--- | :--- |
| **Homepage (`/`)** | Establish token baseline & hero signature | Added `Bricolage Grotesque`, custom Electric Viridian (`#0CCAB1`), 1px hairline console cards, lightweight Live Console Teaser. | ✅ Complete |
| **Phase 1 (`/pricing`)** | Audit numbers & purge placeholders | Purged fictional "ZK Proofs" for *Custom Model Fine-Tuning & Private Connectors*, added static throughput brackets, audited 5k/50k/unlimited request limits. | ✅ Complete |
| **Phase 2 (`/services`)** | Solve 8-product grid monotony | Transformed flat 2x2 grids into an **Asymmetrical Architecture Matrix** (Featured Flagship Chatbots card + 3-card spec grid) + Solution Architecture Selector Bar. Updated claims to *Strict RAG Context Validation*. | ✅ Complete |
| **Phase 3 (`/about`)** | Human origin story & regional hub | Preserved 100% authentic Uttar Pradesh, India hub facts. Replaced console status telemetry with an **Editorial Location Credit** & **Founding Team Pull-Quote** + connected milestone flow. | ✅ Complete |
| **Phase 4 (`/contact`)** | Interactive form & pre-filled routing | Upgrade form to parse URL query params (`?service=...`), hairline form cards, UP India address block, `< 2 Hours Guaranteed` SLA telemetry badge. | ✅ Complete |
| **Phase 5 (`/team`)** | Team presentation & roles | Clean hierarchy, preserved 100% authentic founder roles & credentials, hairline roster cards, `#0CCAB1` accents. | ✅ Complete |
| **Phase 6 (`/blog`)** | Content hub & article reader | High-contrast typography, reading time badges, stateful category routing (`[ALL]`, `[AI ORCHESTRATION]`, `[SPATIAL]`, `[OPERATIONS]`), high-contrast code snippet reader. | ✅ Complete |
| **Phase 7 (`/privacy` & `/terms`)** | Legal & compliance templates | Structured legal typography, clear section navigation, updated organization metadata. | ⏳ Scheduled |
