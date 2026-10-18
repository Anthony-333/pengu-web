# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for **Pengu**, a co-parenting mobile app (custody calendar, shared expenses, family memories). It is a single route: `app/page.tsx` composes the page from section components in order (Nav → Hero → Features → AppShowcase → HowItWorks → Testimonials → Download → Footer).

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16.4.0** with the App Router and React 19.3 — read `node_modules/next/dist/docs/` before making changes, as this version has breaking differences from earlier releases. `AGENTS.md` holds the same warning; `next dev` regenerates it, so leave it in place.

**Components** live in `app/_components/` (the `_` prefix makes it a private folder, not a route) and use named exports. They are all Server Components right now, with no `"use client"`. Add the directive only to a component that actually needs interactivity, and keep it as small as possible. `PhoneMockup.tsx` provides the reusable `Phone` frame and the screen mockups (e.g. `HomeScreenMockup`) used by the Hero and AppShowcase sections. `WaveDivider` is the shared section separator.

**Design tokens**: the Pengu palette is defined in `@theme inline` in `app/globals.css` (`cream`/`cream-dark`, `sage`/`-light`/`-dark`, `amber`/`-light`/`-dark`, `charcoal`/`-light`/`-lighter`). Use these utilities (`bg-sage`, `text-charcoal-lighter`, `shadow-charcoal/20`) rather than raw hex values. Many inline SVG attributes and `style={{...}}` objects (e.g. in `AppShowcase`, `Download`, `Hero`, and `WaveDivider` color props) still hardcode the palette's hex values, such as `#C8893A` for amber. If you change a token, search for its hex value too.

**Design work**: a project subagent, `web-designer` (`.claude/agents/web-designer.md`), handles layout, visual-direction and conversion decisions for landing-page sections.

Key enabled features in `next.config.ts`:
- `cacheComponents: true` — enables the `use cache` directive for component/function-level caching. Data fetching is dynamic by default; opt into caching explicitly. The only current use is `CopyrightYear` in `Footer.tsx` (`"use cache"` + `cacheLife("days")`), which caches the result of `new Date()`.
- `partialPrefetching: true` — prefetches only static parts of routes by default; use `prefetch={true}` on `<Link>` for full prefetching.

**Tailwind CSS v4** — configuration is CSS-first in `app/globals.css`, not a `tailwind.config.js`. Use `@theme inline { ... }` to define/override design tokens. The import is `@import "tailwindcss"` (not the v3 directives). Turbopack handles CSS via the `@tailwindcss/turbopack` loader configured in `next.config.ts`.

**TypeScript types**: `PageProps<"/path">` and `LayoutProps<"/path">` are global helpers — no import needed. They infer `params` and `searchParams` from the route path.

**Path alias**: `@/` maps to the project root (e.g., `@/app/...`, `@/public/...`).

**ESLint** uses flat config (`eslint.config.mjs`) with `defineConfig` from `eslint/config`.

**Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`, and mapped to `--font-sans` / `--font-mono` in the Tailwind theme.

## `video/` subproject

`video/` is a separate HyperFrames video-composition project with its own `package.json`, `CLAUDE.md`, and `AGENTS.md`. Read `video/CLAUDE.md` before working there, because it requires invoking the HyperFrames skills first. Run its commands from `video/`: `npm run dev` (preview), `check`, `render`, `publish`. Each one runs a pinned `npx hyperframes@0.8.162`. `video/.hyperframes/` and `video/renders/` are gitignored. The Next.js app does not import from `video/`.
