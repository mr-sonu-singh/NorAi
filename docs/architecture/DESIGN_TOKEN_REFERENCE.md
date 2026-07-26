# Design Token Reference

This is a read-only reference of the existing NorAI design system tokens. Do not invent new tokens; map all styles to these variables.

## Colors
| Token Variable | Hex / Description | Usage |
|---|---|---|
| `--bg-page` | `#F8FAFC` (Slate 50) | Main background |
| `--bg-elevated` | `#FFFFFF` (White) | Card surfaces |
| `--bg-dark` | `#0F172A` (Slate 900) | Dark sections |
| `--primary-[50-900]` | Slate scale | Text, borders, structural elements |
| `--accent-[50-700]` | Blue scale (`#2563EB` at 600) | CTAs, interactive states, focus rings |

## Typography (Inter)
| Token Variable | Size | Line Height | Weight |
|---|---|---|---|
| `--text-display-xl` | 56px | 64px | 800 (Bold) |
| `--text-display-lg` | 48px | 56px | 800 (Bold) |
| `--text-heading-xl` | 36px | 44px | 700 (Bold) |
| `--text-heading-md` | 24px | 32px | 600 (Semibold) |
| `--text-body-lg` | 18px | 28px | 400 (Regular) |
| `--text-body-md` | 16px | 24px | 400 (Regular) |
| `--text-body-sm` | 14px | 20px | 400 (Regular) |

## Spacing (Base-8)
| Token Variable | Pixel Value | Rem Value |
|---|---|---|
| `--space-1` | 4px | 0.25rem |
| `--space-2` | 8px | 0.5rem |
| `--space-4` | 16px | 1rem |
| `--space-8` | 32px | 2rem |
| `--space-16` | 64px | 4rem |
| `--space-32` | 128px | 8rem |

## Border Radius
| Token Variable | Pixel Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Badges, Tooltips |
| `--radius-default`| 8px | Buttons, Inputs |
| `--radius-lg` | 12px | Cards |
| `--radius-full` | 9999px | Circular avatars, Pill tags |

## Elevation (Shadows)
| Token Variable | Usage |
|---|---|
| `--shadow-xs` | Subtle definition on borders |
| `--shadow-sm` | Default interactive card state |
| `--shadow-md` | Hover state for interactive cards |
| `--shadow-lg` | Modals and dropdowns |
| `--shadow-accent`| Focus rings (3px solid `--accent-600`) |

## Motion
| Token Variable | Value | Usage |
|---|---|---|
| `--duration-fast` | 150ms | Hover states, color transitions |
| `--duration-normal`| 300ms | Modals, layout shifts |
| `--duration-slow` | 500ms | Scroll reveals |
| `--ease-smooth` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard entrance easing |

## Containers (Max Width)
| Token Variable | Pixel Value | Usage |
|---|---|---|
| `--container-narrow` | 720px | Text-heavy pages, Blog posts |
| `--container-default`| 1120px| Standard layout width |
| `--container-wide` | 1280px| Dense data, large grids |
