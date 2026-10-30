/**
 * App Store screenshots: the site's phone screens (app/_components/phone) in
 * tilted iPhone frames under a script headline, at 1290×2796, the 6.9" iPhone
 * size App Store Connect also scales down for smaller iPhones. The three
 * share one flat background and a ribbon that runs across them.
 *
 *   cd video && npm run appstore    # → renders/appstore/<n>-<name>.png
 *
 * Bundled with esbuild like render-screens.tsx. Tailwind is compiled locally
 * from the classes each page uses (no CDN), Elms Sans and Dancing Script load from Google Fonts,
 * then Playwright screenshots each page.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { compile } from "@tailwindcss/node";
import { HomeIndicator, SCREEN_H, SCREEN_W, StatusBar } from "../app/_components/phone/Phone";
import { ExpensesScreen, ScheduleScreen } from "../app/_components/phone/screens";
import { MemoriesScreen } from "../app/_components/phone/MemoriesScreen";

// Each screenshot is 1290×2796. The three are drawn side by side on one wide
// canvas so the ribbon flows across them, then sliced.
const W = 1290;
const H = 2796;

// Copy matches the Features section, so the store page and the site agree.
const SHOTS: { name: string; title: ReactNode; tilt: number; screen: ReactNode }[] = [
  { name: "calendar", title: <>Always know who<br />has the kids.</>, tilt: -7, screen: <ScheduleScreen /> },
  { name: "expenses", title: <>Money, without<br />the arguments.</>, tilt: 6, screen: <ExpensesScreen /> },
  { name: "memories", title: <>Every milestone,<br />in both homes.</>, tilt: -6, screen: <MemoriesScreen /> },
];

// iPhone 16 Pro proportions in points: a titanium band, a black bezel, then the screen.
const S = 2.28;
const BAND = 3.5;
const BEZEL = 10;
const TITANIUM = "#B9B3A9";

function IPhone({ children }: { children: ReactNode }) {
  const pt = (n: number) => `${n * S}px`;
  const button = (side: "left" | "right", top: number, height: number) => (
    <div
      className="absolute rounded-[2px]"
      style={{ [side]: pt(-2.5), top: pt(top), width: pt(3.5), height: pt(height), background: TITANIUM }}
    />
  );
  return (
    <div className="relative" style={{ borderRadius: pt(68), padding: pt(BAND), background: TITANIUM }}>
      {button("left", 150, 34)}
      {button("left", 215, 62)}
      {button("left", 292, 62)}
      {button("right", 240, 100)}
      <div className="bg-black" style={{ borderRadius: pt(64.5), padding: pt(BEZEL) }}>
        <div className="relative overflow-hidden bg-canvas" style={{ borderRadius: pt(54), width: pt(SCREEN_W), height: pt(SCREEN_H) }}>
          <div className="relative isolate overflow-hidden text-left font-semibold text-ink" style={{ width: SCREEN_W, height: SCREEN_H, zoom: S }}>
            {children}
            <StatusBar />
            <HomeIndicator />
          </div>
        </div>
      </div>
    </div>
  );
}

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

async function page() {
  const body = renderToStaticMarkup(
    <div className="relative h-full w-full overflow-hidden bg-accent-soft font-semibold text-ink">
      <svg className="absolute inset-0" width={W * 3} height={H} aria-hidden="true">
        <path
          d={`M -200 1500 C 500 900, 900 2500, ${W * 1.5} 1850 S ${W * 2.6} 1000, ${W * 3 + 200} 1900`}
          fill="none"
          stroke="#FF5A3C"
          strokeWidth={300}
          strokeLinecap="round"
        />
      </svg>
      {SHOTS.map((s, i) => (
        <div key={s.name} className="absolute top-0 flex h-full flex-col items-center" style={{ left: W * i, width: W }}>
          <h1 className="relative mt-[150px] text-center font-[Dancing_Script] text-[160px] leading-[0.98] font-bold tracking-[-1px]">
            {s.title}
          </h1>
          <div
            className="relative mt-[120px] drop-shadow-[0_50px_60px_rgb(14_14_18/0.3)]"
            style={{ transform: `rotate(${s.tilt}deg)` }}
          >
            <IPhone>{s.screen}</IPhone>
          </div>
        </div>
      ))}
    </div>,
  );
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link href="https://fonts.googleapis.com/css2?family=Elms+Sans:wght@400..800&family=Dancing+Script:wght@700&display=block" rel="stylesheet" />
    <style>${await tailwind(body)}</style>
    <style>
      html, body { width: ${W * 3}px; height: ${H}px; margin: 0; overflow: hidden; }
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
const tab = await browser.newPage({ viewport: { width: W * 3, height: H } });
const file = resolve(`${dir}/flow.html`);
writeFileSync(file, await page());
await tab.goto(`file://${file}`, { waitUntil: "networkidle" });
await tab.evaluate(() => document.fonts.ready);
await tab.waitForFunction(() => [...document.images].every((img) => img.complete));
for (const [i, s] of SHOTS.entries()) {
  // App Store Connect rejects screenshots with an alpha channel.
  await tab.screenshot({ path: `${out}/${i + 1}-${s.name}.png`, clip: { x: W * i, y: 0, width: W, height: H } });
  console.log(`${out}/${i + 1}-${s.name}.png`);
}
await browser.close();
