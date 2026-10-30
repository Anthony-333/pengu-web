/**
 * App Store screenshots: the site's phone screens (app/_components/phone),
 * framed with a headline at 1290×2796, the 6.9" iPhone size App Store
 * Connect also scales down for smaller iPhones.
 *
 *   cd video && npm run appstore    # → renders/appstore/<n>-<name>.png
 *
 * Bundled with esbuild like render-screens.tsx. Tailwind is compiled locally
 * from the classes each page uses (no CDN), Elms Sans loads from Google Fonts,
 * then Playwright screenshots each page.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { compile } from "@tailwindcss/node";
import { Phone } from "../app/_components/phone/Phone";
import { ExpensesScreen, ScheduleScreen } from "../app/_components/phone/screens";
import { MemoriesScreen } from "../app/_components/phone/MemoriesScreen";

const W = 1290;
const H = 2796;

// Copy matches the Features section, so the store page and the site agree.
const SHOTS: { name: string; eyebrow: string; title: ReactNode; bg: string; pill: string; glow: string; screen: ReactNode }[] = [
  {
    name: "calendar",
    eyebrow: "Custody calendar",
    title: <>Always know who<br />has the kids.</>,
    bg: "bg-maria-soft",
    pill: "bg-maria text-paper",
    glow: "#1FAA77",
    screen: <ScheduleScreen />,
  },
  {
    name: "expenses",
    eyebrow: "Shared expenses",
    title: <>Money, without<br />the arguments.</>,
    bg: "bg-lily-soft",
    pill: "bg-lily-deep text-paper",
    glow: "#F5A623",
    screen: <ExpensesScreen />,
  },
  {
    name: "memories",
    eyebrow: "Memories",
    title: <>Every milestone,<br />in both homes.</>,
    bg: "bg-accent-soft",
    pill: "bg-accent-deep text-paper",
    glow: "#FF5A3C",
    screen: <MemoriesScreen />,
  },
];

const css = readFileSync("../app/globals.css", "utf8");
const theme = css.match(/@theme inline \{([\s\S]*?)\n\}/)?.[1];
if (!theme) throw new Error("No @theme block in app/globals.css");
const tokens = theme.replace(/--font-(sans|mono):[^;]*;/g, "").trim();

async function tailwind(html: string) {
  const classes = new Set([...html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)));
  const input = `@import "tailwindcss";\n@theme {\n${tokens}\n}`;
  const compiler = await compile(input, { base: resolve(".."), onDependency: () => {} });
  return compiler.build([...classes]);
}

async function page(s: (typeof SHOTS)[number]) {
  const body = renderToStaticMarkup(
    <div className={`relative flex h-full w-full flex-col items-center overflow-hidden font-semibold text-ink ${s.bg}`}>
      <div
        className="absolute left-1/2 top-[1500px] h-[1500px] w-[1500px] -translate-x-1/2 rounded-full opacity-25 blur-[160px]"
        style={{ background: s.glow }}
      />
      <span className={`relative mt-[170px] rounded-full px-[34px] py-[14px] text-[40px] tracking-[-0.4px] ${s.pill}`}>{s.eyebrow}</span>
      <h1 className="relative mt-[44px] text-center text-[112px] leading-[1.05] tracking-[-3.5px]">{s.title}</h1>
      <div className="relative mt-[96px] drop-shadow-[0_60px_80px_rgb(14_14_18/0.28)]">
        <Phone className="[--s:2.3]">{s.screen}</Phone>
      </div>
    </div>,
  );
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link href="https://fonts.googleapis.com/css2?family=Elms+Sans:wght@400..800&display=block" rel="stylesheet" />
    <style>${await tailwind(body)}</style>
    <style>
      html, body { width: ${W}px; height: ${H}px; margin: 0; overflow: hidden; }
      body { font-family: "Elms Sans", ui-sans-serif, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
    </style>
  </head>
  <body>${body}</body>
</html>`;
}

// Pages live in .hyperframes/appstore with the photos next-image.tsx expects in assets/.
const dir = ".hyperframes/appstore";
const out = "renders/appstore";
mkdirSync(`${dir}/assets`, { recursive: true });
mkdirSync(out, { recursive: true });
for (const img of [
  "nathan-dumlao-Wr3comVZJxU-unsplash.jpg",
  "vitaly-gariev-inrYL3ffAsQ-unsplash.jpg",
  "morgan-lane-YZHBeFlEhrg-unsplash.jpg",
  "alan-rodriguez-N17Nkbsc-zY-unsplash.jpg",
]) {
  copyFileSync(`../public/images/${img}`, `${dir}/assets/${img}`);
}

// Playwright is preinstalled globally (NODE_PATH), not a project dependency.
const { chromium } = createRequire(import.meta.url)("playwright");
const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: W, height: H } });
for (const [i, s] of SHOTS.entries()) {
  const file = resolve(`${dir}/${s.name}.html`);
  writeFileSync(file, await page(s));
  await tab.goto(`file://${file}`, { waitUntil: "networkidle" });
  await tab.evaluate(() => document.fonts.ready);
  await tab.waitForFunction(() => [...document.images].every((img) => img.complete));
  // App Store Connect rejects screenshots with an alpha channel.
  await tab.screenshot({ path: `${out}/${i + 1}-${s.name}.png`, omitBackground: false });
  console.log(`${out}/${i + 1}-${s.name}.png`);
}
await browser.close();
