# Routing Structure

This document details every route in the NorAI application.

## Core Routes

| Route | Purpose | Dependencies | Primary CTA | SEO Role | Future Expansion |
|---|---|---|---|---|---|
| `/` | Homepage, brand entry point | `HeroTypographic`, `ProductCard` | Talk to Sales | Brand Authority | Dynamic content based on user cohort |
| `/products` | Catalog of all offerings | `HeroStandard`, `ProductCard` | Explore Product | Keyword targeting | Categorized filters |
| `/products/[slug]` | Deep dive on single product | `ProcessFlow`, `PricingCard` | Request Access | Long-tail keywords | Video embeds, interactive demos |
| `/about` | Company origin, timeline | `Timeline`, `StatBar` | See Open Roles | Employer branding | Subpages for specific teams |
| `/team` | Founder profiles | `TeamCard` | Read Blog | Trust signal | Individual founder pages |
| `/contact` | Lead generation | `FormGroup` | Submit Form | Conversion | Regional routing |

## Content Routes

| Route | Purpose | Dependencies | Primary CTA | SEO Role | Future Expansion |
|---|---|---|---|---|---|
| `/blog` | Insights and engineering updates | `BlogCard`, `Tabs` | Read Article | Organic acquisition | Author profiles, categories |
| `/blog/[slug]` | Individual post | `RichTextRenderer` | Try Product | Niche technical SEO | Related posts, newsletter signup |
| `/careers` | Job openings | `Accordion` | Apply Now | Employer branding | Integration with ATS (e.g., Ashby) |

## Utility Routes

| Route | Purpose | Dependencies | Primary CTA | SEO Role | Future Expansion |
|---|---|---|---|---|---|
| `/privacy` | Legal compliance | `RichTextRenderer` | Contact Support | None (noindex) | Cookie preference center |
| `/terms` | Terms of service | `RichTextRenderer` | Contact Support | None (noindex) | Version history |
| `404` | Error handling | `Button` | Go to Homepage | None (noindex) | Smart search suggestions |
