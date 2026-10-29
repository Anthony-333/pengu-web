# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing landing page for **Pengu**, a co-parenting mobile app (custody calendar, shared expenses, family memories). It is a single route: `app/page.tsx` composes the page from section components in order (Nav → Hero → Features → Moments → HowItWorks → FAQ → Download → Footer). `Testimonials` is built but hidden until there are real quotes. `/privacy` and `/terms` share the `LegalPage` shell; the operator details they print live in its `LEGAL` object.

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

No test suite is configured.

## Architecture

**Next.js 16.4.3** with the App Router and React 19.3 — read `node_modules/next/dist/docs/` before making changes, as this version has breaking differences from earlier releases. `AGENTS.md` holds the same warning; `next dev` regenerates it, so leave it in place.

**Components** live in `app/_components/` (the `_` prefix makes it a private folder, not a route) and use named exports. Everything is a Server Component except `FeatureTour` and `HideOnScroll` (the nav). `FeatureTour` is a scroll-spy that writes the in-view step index to `data-active`; the sticky phone's screen crossfade, and its left/right side are plain CSS keyed off that attribute (`.tour-screen`, `.tour-phone` in `globals.css`). It also restarts the active step's problem → Pengu clip (`video[data-tour-video]`). Keep any new `"use client"` that small.

**Phone mockups** live in `app/_components/phone/` and are web ports of the real app's UI (`pengu/src/screens`, `pengu/src/components/ui.tsx`). When the app's UI changes, port the change here. `ui.tsx` mirrors the app primitives (`Card`, `HeroCard`, `RoundButton`, `Chip`, `BigNumber`…). `Phone.tsx` draws the frame, the iOS status bar and the floating Liquid Glass `TabBar`. The screens are in `screens.tsx` and `MemoriesScreen.tsx`; Memories is separate because it imports photos. Screens are authored in iPhone points (390×844, the app's own units) and scaled with `zoom`. Size a phone with `--s`, the fraction of real size (`className="[--s:0.68] lg:[--s:0.8]"`). Every glyph is `font-semibold`, because the app ships only ElmsSans SemiBold. Icons come from `@solar-icons/react` and follow the app's SF-to-Solar map in `pengu/src/components/Icon.tsx`: line-duotone everywhere, plus bold-duotone for selected tabs. The demo data (Sarah and James, Emma, a 2-2-3 rotation, "today" = Wed 21 Oct 2026) comes from `custodyOn()`, so all the screens agree.

**Design tokens**: `@theme inline` in `app/globals.css` mirrors the app's palette in `pengu/src/constants/colors.ts`: `ink`/`ink-2`/`ink-3`, `muted`, `hairline`, `canvas`, `paper`, `accent` (coral), and the parent/category colors `maria` (emerald), `james` (violet), `lily` (amber), `sky` (blue), each with `-soft`/`-deep`. Use the utilities rather than raw hex. For small coral text on light surfaces, use `accent-ink`, because plain `accent` fails WCAG AA there. `PenguLogo` and the `video/` composition still hardcode hex.

**Motion** is CSS in `globals.css`, all inside `prefers-reduced-motion: no-preference`: `.rise`/`.phone-in`/`.float` for load (stagger with `style={delay(ms)}` from `_components/motion.ts`), infinite `.marquee-left/right` for the Moments rows, and scroll-driven `.reveal`, `.reveal-scale`, `.parallax`, `.hero-exit` behind `@supports (animation-timeline: view())`. Unsupported browsers just render content in place.

**Design work**: a project subagent, `web-designer` (`.claude/agents/web-designer.md`), handles layout, visual-direction and conversion decisions for landing-page sections.

Key enabled features in `next.config.ts`:
- `cacheComponents: true` — enables the `use cache` directive for component/function-level caching. Data fetching is dynamic by default; opt into caching explicitly. The only current use is `CopyrightYear` in `Footer.tsx` (`"use cache"` + `cacheLife("days")`), which caches the result of `new Date()`.
- `partialPrefetching: true` — prefetches only static parts of routes by default; use `prefetch={true}` on `<Link>` for full prefetching.

**Tailwind CSS v4** — configuration is CSS-first in `app/globals.css`, not a `tailwind.config.js`. Use `@theme inline { ... }` to define/override design tokens. The import is `@import "tailwindcss"` (not the v3 directives). Turbopack handles CSS via the `@tailwindcss/turbopack` loader configured in `next.config.ts`.

**TypeScript types**: `PageProps<"/path">` and `LayoutProps<"/path">` are global helpers — no import needed. They infer `params` and `searchParams` from the route path.

**Path alias**: `@/` maps to the project root (e.g., `@/app/...`, `@/public/...`).

**ESLint** uses flat config (`eslint.config.mjs`) with `defineConfig` from `eslint/config`.

**Fonts**: Elms Sans (the app's typeface) via `next/font/google` as `--font-elms`, mapped to `--font-sans`; Geist Mono as `--font-mono`. The build warns that Elms Sans has no fallback metrics. That warning is expected.

## `video/` subproject

`video/` is a separate HyperFrames video-composition project with its own `package.json`, `CLAUDE.md`, and `AGENTS.md`. Read `video/CLAUDE.md` before working there, because it requires invoking the HyperFrames skills first. Run its commands from `video/`: `npm run dev` (preview), `check`, `render`, `publish`. Each one runs a pinned `npx hyperframes@0.8.162`. `video/.hyperframes/` and `video/renders/` are gitignored. The composition is the hero's app tour. `index.html` is generated, so don't edit it. Edit `composition.tpl` (layout and GSAP timeline) or the phone screens, then run from `video/`:

```bash
npm run screens   # renders app/_components/phone screens + globals.css tokens into index.html
npm run check
npx --yes hyperframes@0.8.162 render -q delivery -o ../public/video/app-tour.mp4
npx --yes hyperframes@0.8.162 render --format webm -q delivery -o ../public/video/app-tour.webm
ffmpeg -y -i ../public/video/app-tour.mp4 -frames:v 1 ../public/video/app-tour-poster.jpg
```

The project also builds four **feature clips**, one per Features step. Each opens on the old way (group texts, receipts, a buried message, scattered photos), then the Pengu badge opens into the real screen. `features/shell.tpl` holds the shared stage and reveal, and `features/<name>.tpl` holds each clip's problem markup, overlay and timeline. `npm run screens` writes them to `video/feature-<name>.html` (generated, like `index.html`) and copies the Memories photos into `video/assets/`. `check` only reads `index.html`, so to check a clip, copy it as `index.html` into a scratch folder together with `assets/`. Render each clip with `-c`:

```bash
npx --yes hyperframes@0.8.162 render -c feature-calendar.html -q delivery -o ../public/video/feature-calendar.mp4
npx --yes hyperframes@0.8.162 render -c feature-calendar.html --format webm -q delivery -o ../public/video/feature-calendar.webm
ffmpeg -y -i ../public/video/feature-calendar.mp4 -frames:v 1 ../public/video/feature-calendar-poster.jpg
```

`npm run screens` bundles `render-screens.tsx` with esbuild into `.hyperframes/`, because `@solar-icons/react` is ESM-only. It aliases `next/image` to `video/next-image.tsx` so `MemoriesScreen` renders as plain `<img>`. The video is 780×1688, which is 2× the phone screen. The hero plays it over a static `HomeScreen`, and the frame's `isolate` keeps that screen's z-indexed status bar and tab bar underneath the video. Re-render after any screen change, or the hero will show stale UI.
