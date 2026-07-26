# Component Roadmap

This is the canonical checklist of every reusable component required for the NorAI frontend, serving as a progress tracker for implementation.

## Foundation
| Component | Purpose | Dependencies | Priority | Status |
|---|---|---|---|---|
| **Colors** | Semantic variable mapping | None | Critical | ⏳ Pending |
| **Typography** | 14-step type scale setup | None | Critical | ⏳ Pending |
| **Spacing** | Base-8 layout scale | None | Critical | ⏳ Pending |
| **Containers** | Max-width layout wrappers | Spacing | High | ⏳ Pending |
| **Grid System** | CSS Grid / Flexbox utilities | Spacing | High | ⏳ Pending |

## Atoms
| Component | Purpose | Dependencies | Priority | Status |
|---|---|---|---|---|
| **Buttons** | Core interactions (5 variants) | Typography, Colors, Spacing | Critical | ⏳ Pending |
| **Inputs** | Text fields for forms | Typography, Colors, Spacing | High | ⏳ Pending |
| **Badges** | Status indicators | Typography, Colors | Medium | ⏳ Pending |
| **Tags** | Category labels | Typography, Colors | Medium | ⏳ Pending |
| **IconBox** | Standard 48x48 icon container | Colors, Spacing | High | ⏳ Pending |

## Molecules
| Component | Purpose | Dependencies | Priority | Status |
|---|---|---|---|---|
| **FormGroup** | Label + Input + Error state | Inputs, Typography | High | ⏳ Pending |
| **Accordion** | FAQ and expandable sections | Typography, Icons | Medium | ⏳ Pending |
| **Tabs** | Filtering and view switching | Typography, Colors | Medium | ⏳ Pending |
| **StatBar** | Animated count-up metrics | Typography | Low | ⏳ Pending |

## Cards (Organisms)
| Component | Purpose | Dependencies | Priority | Status |
|---|---|---|---|---|
| **ProductCard** | Interactive product gateway | IconBox, Typography, Buttons | Critical | ⏳ Pending |
| **FeatureCard** | Static capability showcase | IconBox, Typography | High | ⏳ Pending |
| **TeamCard** | Founder profiles | Typography, Image | Medium | ⏳ Pending |
| **BlogCard** | Article summary | Tags, Typography | Medium | ⏳ Pending |
| **PricingCard** | Subscription tiers | Typography, Buttons | Low | ⏳ Pending |
| **TestimonialCard**| Social proof | Typography | Medium | ⏳ Pending |

## Page Layouts (Organisms)
| Component | Purpose | Dependencies | Priority | Status |
|---|---|---|---|---|
| **Header** | Sticky navigation | Buttons, Typography | Critical | ⏳ Pending |
| **Footer** | 4-column deep linking | Typography | High | ⏳ Pending |
| **HeroTypographic**| Homepage entrance | Typography, Buttons | Critical | ⏳ Pending |
| **AlertBanner** | Global notifications | Typography, Colors | Low | ⏳ Pending |
