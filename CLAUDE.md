# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16.4.0** with the App Router — read `node_modules/next/dist/docs/` before making changes, as this version has breaking differences from earlier releases.

Key enabled features in `next.config.ts`:
- `cacheComponents: true` — enables the `use cache` directive for component/function-level caching. Data fetching is dynamic by default; opt into caching explicitly.
- `partialPrefetching: true` — prefetches only static parts of routes by default; use `prefetch={true}` on `<Link>` for full prefetching.

**Tailwind CSS v4** — configuration is CSS-first in `app/globals.css`, not a `tailwind.config.js`. Use `@theme inline { ... }` to define/override design tokens. The import is `@import "tailwindcss"` (not the v3 directives). Turbopack handles CSS via the `@tailwindcss/turbopack` loader configured in `next.config.ts`.

**TypeScript types**: `PageProps<"/path">` and `LayoutProps<"/path">` are global helpers — no import needed. They infer `params` and `searchParams` from the route path.

**Path alias**: `@/` maps to the project root (e.g., `@/app/...`, `@/public/...`).

**ESLint** uses flat config (`eslint.config.mjs`) with `defineConfig` from `eslint/config`.

**Fonts**: Geist Sans and Geist Mono loaded via `next/font/google`, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`, and mapped to `--font-sans` / `--font-mono` in the Tailwind theme.
