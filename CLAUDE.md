# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

HermesAI — an Arabic (RTL) marketing landing page for a WhatsApp AI-employee product, plus an interactive chat demo. Single-page marketing site at `/` with a separate demo experience at `/demo`.

## Commands

- `npm run dev` — start the dev server (Next.js, http://localhost:3000)
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — ESLint over `src` (config extends `next/core-web-vitals` + `next/typescript`)

There is no test runner or `typecheck` script configured; type errors surface via `npm run build`. Prefer `npm run lint` and `npm run build` as the quality gates after changes.

## Architecture

- **Next.js 15 App Router + React 19 + TypeScript + Tailwind CSS 3.** Import alias `@/*` → `src/*` (see `tsconfig.json`).
- **`src/app/layout.tsx`** sets `lang="ar" dir="rtl"` globally and loads the Cairo Google font (Arabic + Latin). All page content is Arabic RTL by default — preserve direction and natural Arabic copy when editing.
- **`src/app/page.tsx`** is the landing page: a flat composition of section components from `src/components/` in fixed order (Navbar → Hero → Problem → Solution → Benefits → Features → Integrations → Industries → Testimonials → FAQ → CTA → Booking → Footer → ScrollToTop). Sections are largely self-contained presentational components.
- **Dark mode** is class-based (`darkMode: 'class'`). `ThemeProvider` (client component wrapping the app in layout) toggles the `dark` class on `<html>` and persists to `localStorage` under the key `luqman-theme`. Use the `useTheme()` hook and Tailwind `dark:` variants; guard against hydration via the `mounted` flag.
- **Demo flow** lives under `src/components/demo/` and `src/app/demo/`. `DemoClient` holds the selected `BusinessType` state; selecting a business reveals `ChatSimulator`.
- **Demo chat API** (`src/app/api/demo-chat/route.ts`, Node runtime) forwards chat messages to an n8n webhook at `N8N_DEMO_WEBHOOK_URL`. If the env var is missing or the webhook fails/times out (15s) or returns no `reply`, it returns a per-`BusinessType` Arabic fallback reply — the demo always degrades gracefully. The shared `BusinessType` union is exported from this route file and imported by demo components.

## Design tokens (tailwind.config.ts)

- `brand` (sky-blue scale) is the primary color; `cta` (orange `#f97316`) is reserved for primary call-to-action emphasis. Don't introduce ad-hoc colors.
- Custom animations (`float`, `fade-in-up`, `scale-in`, `swing`, `message-in`, etc.) are defined here — reuse these rather than adding new keyframes.

## Conventions & project guidance

`agent.md` and `design.md` at the repo root contain detailed working agreements from the user. Key points:

- **Plan before implementing.** For meaningful changes, inspect files, ask clarifying questions, propose a plan, and wait for explicit approval (e.g. "approved", "ابدأ", "نفذ") before editing. Do not assume business details, copy, pricing, colors, or sections the user hasn't provided.
- **Arabic RTL is a hard requirement** — keep `dir="rtl"`, right-aligned natural Arabic copy (not literal translations), and RTL-friendly layouts. Communicate with the user in simple Arabic unless they ask for English.
- **Design** should follow the `.opencode/skills/ui-ux-pro-max` skill — premium, conversion-focused, mobile-first, not generic-template. Avoid fake testimonials/logos/numbers.
- Don't install new UI libraries without asking. Don't remove existing code or redesign without explicit approval.

## Notes

- `improvment/` and `reference/` hold an alternate component draft and design reference images; they are not part of the built app (`src/`).
- `.opencode/` contains the ui-ux-pro-max design skill (CSV knowledge bases + Python search scripts).
