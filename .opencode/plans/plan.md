# Dark Mode + Theme Toggle Implementation Plan

## Approved: Add Dark Mode + Animated Theme Toggle

---

## New Components

### 1. ThemeProvider
- **Path**: `src/components/ThemeProvider.tsx`
- **Purpose**: React Context + state management for dark/light mode
- **Behavior**:
  - Client component (`"use client"`)
  - Reads `luqman-theme` from localStorage after mount
  - Default: `light` (first visit always light)
  - Does NOT use `prefers-color-scheme`
  - Adds/removes `dark` class on `document.documentElement`
  - Writes to localStorage on every toggle
  - Exposes `isDark`, `toggle()`, `mounted` via context
  - SSR-safe: no hydration mismatch

### 2. ThemeToggle
- **Path**: `src/components/ThemeToggle.tsx`
- **Purpose**: Animated pill toggle (sun/moon visual)
- **Design**: Based on `reference/toggel.jpg`
- **Specs**:
  - Shape: pill (`rounded-full`)
  - Mobile: `w-24 h-12`
  - Desktop: `w-32 h-14`
  - No text inside, only visual
  - `aria-label` for accessibility
  - Light state: sun + sky/soft clouds
  - Dark state: moon + stars
  - Animation: `transform` + `transition-all duration-500 ease-in-out`

---

## Files to Modify

### Core Config
| File | Changes |
|------|---------|
| `tailwind.config.ts` | Add `darkMode: 'class'` |
| `src/app/globals.css` | Add dark mode variables, smooth transitions, toggle keyframes |
| `src/app/layout.tsx` | Wrap with `ThemeProvider` |
| `src/app/page.tsx` | Add `dark` transition class to `<main>` |

### Sections & Components (Dark Mode Colors)
| File | What changes |
|------|-------------|
| `src/components/HeroSection.tsx` | **Add ThemeToggle at bottom center** (below CTA), dark mode colors, floating icon dark variants |
| `src/components/Navbar.tsx` | Dark mode bg/text/border colors |
| `src/components/ProblemSection.tsx` | Dark mode card colors |
| `src/components/FeatureCard.tsx` | Dark mode card colors |
| `src/components/FeaturesGrid.tsx` | Minor text colors |
| `src/components/SolutionSection.tsx` | Dark mode big card colors |
| `src/components/IntegrationsSection.tsx` | Dark mode card + hub icon colors |
| `src/components/IntegrationCard.tsx` | Dark mode card colors |
| `src/components/CTASection.tsx` | Dark mode card colors |
| `src/components/Footer.tsx` | Dark mode card + watermark colors |

---

## Color Mapping

| Light | Dark |
|-------|------|
| `bg-slate-50` | `dark:bg-slate-900` |
| `bg-white` | `dark:bg-slate-800` |
| `text-slate-900` | `dark:text-slate-100` |
| `text-slate-500` | `dark:text-slate-400` |
| `text-slate-600` | `dark:text-slate-300` |
| `border-slate-100` | `dark:border-slate-700` |
| `border-slate-200` | `dark:border-slate-600` |
| Brand/CTA colors | **No change** |

---

## Floating Icon Dark Variants
- Light: `bg-sky-50` / `text-sky-500`
- Dark: `bg-sky-900/30` / `text-sky-300`
- Premium and muted, not loud

---

## Toggle Placement
- Inside HeroSection white card
- Below CTA buttons
- Centered: `<div className="flex justify-center mt-6 md:mt-8">`
- Not too close, not too far

---

## Constraints
- No new dependencies
- No backend changes
- No text/content changes
- No layout/spacing changes
- CTA orange stays same in both modes
- Default always light on first visit
- No `prefers-color-scheme` usage

---

## Verification
After implementation:
1. `npm run lint` - must pass
2. `npm run build` - must pass
3. Report changed files

---

## Status
- [ ] ThemeProvider created
- [ ] ThemeToggle created
- [ ] tailwind.config.ts updated
- [ ] globals.css updated
- [ ] layout.tsx updated
- [ ] page.tsx updated
- [ ] HeroSection.tsx updated
- [ ] Navbar.tsx updated
- [ ] ProblemSection.tsx updated
- [ ] FeatureCard.tsx updated
- [ ] FeaturesGrid.tsx updated
- [ ] SolutionSection.tsx updated
- [ ] IntegrationsSection.tsx updated
- [ ] IntegrationCard.tsx updated
- [ ] CTASection.tsx updated
- [ ] Footer.tsx updated
- [ ] lint passed
- [ ] build passed
