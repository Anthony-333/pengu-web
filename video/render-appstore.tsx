/**
 * App Store screenshots: the site's phone screens (app/_components/phone) in
 * tilted iPhone frames, at 1290×2796, the 6.9" iPhone size App Store Connect
 * also scales down for smaller iPhones. The three share one flat background
 * and a ribbon that runs across them; each lifts real cards out of its
 * screen as enlarged callouts.
 *
 *   cd video && npm run appstore    # → renders/appstore/<n>-<name>.png
 *
 * Bundled with esbuild like render-screens.tsx. Tailwind is compiled locally
 * from the classes the page uses (no CDN), Elms Sans and Dancing Script load
 * from Google Fonts, then Playwright screenshots each slice.
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
import { PenguLogo } from "../app/_components/PenguLogo";

// Each screenshot is 1290×2796. The three are drawn side by side on one wide
// canvas so the ribbon flows across them, then sliced.
const W = 1290;
const H = 2796;

/**
 * A card lifted out of the screen and enlarged `k` times (the phone is S).
 * `target` selects it; the page script crops to it and centres it over the
 * same card in the phone, moved by (dx, dy), so it reads as popping out.
 */
type Callout = {
  target: string;
  k: number;
  dx: number;
  dy: number;
  tilt: number;
  /** Corner radius in points, for a target with square corners (a list row). */
  radius?: number;
};

type Shot = {
  name: string;
  /** Plain lines, then the phrase set in script. */
  lines: string[];
  script: string;
  size: number;
  tilt: number;
  /** Phone centre, in slide pixels. */
  phoneX: number;
  phoneY: number;
  screen: () => ReactNode;
  callouts: Callout[];
};

// Copy matches the Features section, so the store page and the site agree.
const SHOTS: Shot[] = [
  {
    name: "calendar",
    lines: ["Always know", "who has"],
    script: "the kids.",
    size: 150,
    tilt: -7,
    phoneX: 650,
    phoneY: 1900,
    screen: () => <ScheduleScreen />,
    callouts: [
      { target: ".cal-day.bg-accent", k: 5.4, dx: 330, dy: -150, tilt: 8 },
      { target: ".day-detail > :last-child", k: 2.9, dx: -20, dy: -40, tilt: 3 },
    ],
  },
  {
    name: "expenses",
    lines: ["Money,", "without"],
    script: "the arguments.",
    size: 150,
    tilt: 6,
    // Far enough right that its edge crosses into the memories shot.
    phoneX: 1060,
    phoneY: 1900,
    screen: () => <ExpensesScreen />,
    callouts: [
      { target: '.bg-ink[class*="rounded-[28px]"]', k: 3, dx: -330, dy: -20, tilt: -4 },
      { target: ".ex-row", k: 3.2, dx: -320, dy: 30, tilt: 2, radius: 24 },
    ],
  },
  {
    name: "memories",
    lines: ["Every", "milestone,"],
    script: "in both homes.",
    size: 150,
    tilt: -6,
    phoneX: 840,
    phoneY: 1920,
    screen: () => <MemoriesScreen />,
    callouts: [
      { target: ".memory", k: 3.3, dx: 260, dy: -20, tilt: 6 },
      { target: ".react", k: 6, dx: -90, dy: 150, tilt: -10 },
    ],
  },
];

// iPhone 16 Pro proportions in points: a titanium band, a black bezel, then the screen.
const S = 2.35;
const BAND = 3.5;
const BEZEL = 10;
const TITANIUM = "#B9B3A9";
const CORAL = "#FF5A3C";
const AMBER = "#F5A623";
const INK = "#0E0E12";

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
          <div data-phone-screen className="relative isolate overflow-hidden text-left font-semibold text-ink" style={{ width: SCREEN_W, height: SCREEN_H, zoom: S }}>
            {children}
            <StatusBar />
            <HomeIndicator />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Sized and placed by the page script once the target is measured. */
function Lifted({ c, screen }: { c: Callout; screen: ReactNode }) {
  return (
    <div
      data-callout={c.target}
      data-k={c.k}
      data-radius={c.radius}
      data-dx={c.dx}
      data-dy={c.dy}
      className="absolute drop-shadow-[0_40px_50px_rgb(14_14_18/0.28)]"
      style={{ transform: `rotate(${c.tilt}deg)` }}
    >
      <div data-clip className="overflow-hidden">
        <div style={{ zoom: c.k }}>
          <div data-screen className="relative overflow-hidden text-left font-semibold text-ink" style={{ width: SCREEN_W, height: SCREEN_H }}>
            {screen}
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkle({ x, y, size, color = AMBER }: { x: number; y: number; size: number; color?: string }) {
  return (
    <svg className="absolute" style={{ left: x - size / 2, top: y - size / 2 }} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c.8 6.4 5.6 11.2 12 12-6.4.8-11.2 5.6-12 12-.8-6.4-5.6-11.2-12-12C6.4 11.2 11.2 6.4 12 0Z" fill={color} />
    </svg>
  );
}

/** A starburst sticker with app wording on it (never a claim). */
function Burst({ x, y, size, fill, ink, tilt, lines }: { x: number; y: number; size: number; fill: string; ink: string; tilt: number; lines: string[] }) {
  const points = Array.from({ length: 32 }, (_, i) => {
    const r = i % 2 ? 0.86 : 1;
    const a = (i / 32) * Math.PI * 2;
    return `${50 + 50 * r * Math.cos(a)},${50 + 50 * r * Math.sin(a)}`;
  }).join(" ");
  return (
    <div
      className="absolute flex items-center justify-center drop-shadow-[0_20px_30px_rgb(14_14_18/0.22)]"
      style={{ left: x - size / 2, top: y - size / 2, width: size, height: size, transform: `rotate(${tilt}deg)` }}
    >
      <svg className="absolute inset-0" viewBox="0 0 100 100" aria-hidden="true">
        <polygon points={points} fill={fill} />
      </svg>
      <span className="relative text-center font-extrabold leading-[1.02] tracking-[-0.02em]" style={{ color: ink, fontSize: size * 0.15 }}>
        {lines.map((l) => (
          <span key={l} className="block">{l}</span>
        ))}
      </span>
    </div>
  );
}

const DECOR: ReactNode[] = [
  <>
    <Burst x={1090} y={830} size={300} fill="#1FAA77" ink="#FFFFFF" tilt={10} lines={["2-2-3", "rotation"]} />
    <Sparkle x={140} y={800} size={90} />
  </>,
  <>
    <Burst x={250} y={2680} size={320} fill={AMBER} ink={INK} tilt={-12} lines={["Settle in", "one tap"]} />
    <Sparkle x={150} y={860} size={70} color={CORAL} />
  </>,
  <>
    <Burst x={1090} y={2520} size={320} fill="#7B61FF" ink="#FFFFFF" tilt={12} lines={["Private", "to your", "nest"]} />
    <Sparkle x={1150} y={860} size={90} />
  </>,
];

/** A hand-drawn wavy underline across the script phrase. */
function Wave() {
  const d = Array.from({ length: 12 }, (_, i) => `Q ${i * 50 + 12.5} ${i % 2 ? 26 : 4} ${i * 50 + 25} 15 T ${i * 50 + 50} 15`).join(" ");
  return (
    <svg className="absolute inset-x-[2%] -bottom-[0.12em] h-[0.22em] w-[96%] overflow-visible" viewBox="0 0 600 30" preserveAspectRatio="none" aria-hidden="true">
      <path d={`M 0 15 ${d}`} fill="none" stroke={AMBER} strokeWidth={9} strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

// A dashed trail that loops through all three shots, from a pin to Pengu.
const TRAIL = [
  "M 110 880",
  "C 300 690, 520 790, 700 760",
  "C 880 730, 1000 640, 1150 720",
  "C 1300 800, 1260 980, 1150 950",
  "C 1040 920, 1110 770, 1330 760",
  "C 1600 745, 1800 820, 2000 760",
  "C 2200 700, 2330 700, 2470 760",
  "C 2620 830, 2600 1000, 2500 975",
  "C 2400 950, 2470 790, 2680 760",
  "C 2950 720, 3300 820, 3560 740",
].join(" ");

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

// Runs in the page. Crops each callout to its target: offsets are summed up
// to the unzoomed screen root, so they are in points, then scaled by k. Then
// centres it over the same card in the (tilted) phone.
function placeCallouts() {
  for (const el of document.querySelectorAll<HTMLElement>("[data-callout]")) {
    const slide = el.closest<HTMLElement>("[data-slide]")!;
    const source = slide.querySelector("[data-phone-screen]")!.querySelector(el.dataset.callout!)!.getBoundingClientRect();
    const box = slide.getBoundingClientRect();
    const root = el.querySelector<HTMLElement>("[data-screen]")!;
    const target = root.querySelector<HTMLElement>(el.dataset.callout!);
    if (!target) throw new Error(`No callout target ${el.dataset.callout}`);
    let x = 0;
    let y = 0;
    for (let n: HTMLElement | null = target; n && n !== root; n = n.offsetParent as HTMLElement | null) {
      x += n.offsetLeft;
      y += n.offsetTop;
    }
    const k = Number(el.dataset.k);
    const w = target.offsetWidth * k;
    const h = target.offsetHeight * k;
    const clip = el.querySelector<HTMLElement>("[data-clip]")!;
    clip.style.width = `${w}px`;
    clip.style.height = `${h}px`;
    clip.style.borderRadius = `${Number(el.dataset.radius ?? parseFloat(getComputedStyle(target).borderRadius)) * k}px`;
    root.style.transform = `translate(${-x}px, ${-y}px)`;
    el.style.left = `${source.x + source.width / 2 - box.x + Number(el.dataset.dx) - w / 2}px`;
    el.style.top = `${source.y + source.height / 2 - box.y + Number(el.dataset.dy) - h / 2}px`;
  }
}

async function page() {
  const body = renderToStaticMarkup(
    <div className="relative h-full w-full overflow-hidden bg-accent-soft font-semibold text-ink">
      <svg className="absolute inset-0" width={W * 3} height={H} aria-hidden="true">
        <path d={TRAIL} fill="none" stroke={INK} strokeWidth={9} strokeDasharray="26 22" strokeLinecap="round" />
        <circle cx={110} cy={880} r={22} fill={CORAL} stroke={INK} strokeWidth={9} />
      </svg>
      <div className="absolute" style={{ left: 3560, top: 680 }}>
        <PenguLogo size={130} />
      </div>
      {SHOTS.map((s, i) => (
        <div key={s.name} data-slide className="absolute top-0 h-full" style={{ left: W * i, width: W }}>
          <div
            className="absolute drop-shadow-[0_60px_70px_rgb(14_14_18/0.3)]"
            style={{ left: s.phoneX, top: s.phoneY, transform: `translate(-50%, -50%) rotate(${s.tilt}deg)` }}
          >
            <IPhone>{s.screen()}</IPhone>
          </div>
          {s.callouts.map((c) => (
            <Lifted key={c.target} c={c} screen={s.screen()} />
          ))}
          {DECOR[i]}
          <h1 className="absolute inset-x-0 top-[130px] text-center text-ink">
            {s.lines.map((l) => (
              <span key={l} className="block leading-[0.98] font-extrabold tracking-[-0.03em]" style={{ fontSize: s.size }}>
                {l}
              </span>
            ))}
            <span className="relative inline-block font-[Dancing_Script] font-bold leading-[1.05] text-accent-deep" style={{ fontSize: s.size * 1.35 }}>
              {s.script}
              <Wave />
            </span>
          </h1>
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
  <body>${body}<script>(${placeCallouts.toString()})()</script></body>
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
const errors: string[] = [];
tab.on("pageerror", (e: Error) => errors.push(e.message));
const file = resolve(`${dir}/flow.html`);
writeFileSync(file, await page());
await tab.goto(`file://${file}`, { waitUntil: "networkidle" });
await tab.evaluate(() => document.fonts.ready);
await tab.waitForFunction(() => [...document.images].every((img) => img.complete));
if (errors.length) throw new Error(errors.join("\n"));
for (const [i, s] of SHOTS.entries()) {
  // App Store Connect rejects screenshots with an alpha channel.
  await tab.screenshot({ path: `${out}/${i + 1}-${s.name}.png`, clip: { x: W * i, y: 0, width: W, height: H } });
  console.log(`${out}/${i + 1}-${s.name}.png`);
}
await browser.close();
