/**
 * App Store screenshots: ten 1290×2796 shots, the 6.9" iPhone size App Store
 * Connect also scales down for smaller iPhones. Phone shots put the site's
 * phone screens (app/_components/phone) in tilted iPhone frames; photo shots
 * use the site's Unsplash photos (public/images). Real cards are lifted out
 * of the screens as enlarged callouts. All ten sit on one flat canvas so a
 * dashed trail runs through them, then the canvas is sliced.
 *
 *   cd video && npm run appstore    # → renders/appstore/<nn>-<name>.png
 *
 * Bundled with esbuild like render-screens.tsx. Tailwind is compiled locally
 * from the classes the page uses (no CDN), Elms Sans and Gochi Hand load
 * from Google Fonts, then Playwright screenshots each slice.
 *
 * Copy comes from the site's Features section and the app's own wording.
 * Keep it free of claims (ratings, awards, user counts).
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve } from "node:path";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { compile } from "@tailwindcss/node";
import { CalendarIcon } from "@solar-icons/react/line-duotone/calendar";
import { CardIcon } from "@solar-icons/react/line-duotone/card";
import { ChatRoundIcon } from "@solar-icons/react/line-duotone/chat-round";
import { ClipboardIcon } from "@solar-icons/react/line-duotone/clipboard";
import { DocumentTextIcon } from "@solar-icons/react/line-duotone/document-text";
import { GalleryWideIcon } from "@solar-icons/react/line-duotone/gallery-wide";
import { HomeIndicator, SCREEN_H, SCREEN_W, StatusBar } from "../app/_components/phone/Phone";
import { ExpensesScreen, HomeScreen, NotesScreen, ScheduleScreen } from "../app/_components/phone/screens";
import { MemoriesScreen } from "../app/_components/phone/MemoriesScreen";
import { ChatScreen } from "../app/_components/phone/ChatScreen";
import { PrivacyScreen } from "../app/_components/phone/PrivacyScreen";
import { PenguLogo } from "../app/_components/PenguLogo";

const W = 1290;
const H = 2796;

const CORAL = "#FF5A3C";
const AMBER = "#F5A623";
const INK = "#0E0E12";

/**
 * A card lifted out of a screen and enlarged `k` times (the phone is S).
 * `target` selects it. On a phone shot it is centred over the same card in
 * the phone, moved by (dx, dy), so it reads as popping out; on a photo shot
 * it is centred on `at`, and `screen` says which screen to cut it from.
 */
type Callout = {
  target: string;
  k: number;
  tilt: number;
  dx?: number;
  dy?: number;
  at?: [number, number];
  screen?: () => ReactNode;
  /** Corner radius in points, for a target with square corners (a list row). */
  radius?: number;
};

type Shot = {
  name: string;
  /** Plain lines, then the phrase hand-lettered on a highlighter block. */
  lines: string[];
  script: string;
  highlight: string;
  size: number;
  /** The screen callouts are cut from, and the phone shows. */
  screen: () => ReactNode;
  /** Phone centre in slide pixels, and its tilt. */
  phone?: { x: number; y: number; tilt: number };
  /** A photo from public/images in a white-bordered card. */
  photo?: { src: string; x: number; y: number; w: number; h: number; tilt: number; focus?: string };
  callouts: Callout[];
  decor?: ReactNode;
};

// iPhone 16 Pro proportions in points: a titanium band, a black bezel, then the screen.
const S = 2.35;
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
      data-dx={c.dx ?? 0}
      data-dy={c.dy ?? 0}
      data-at={c.at?.join(",")}
      className="absolute drop-shadow-[0_40px_50px_rgb(14_14_18/0.28)]"
      style={{ transform: `rotate(${c.tilt}deg)` }}
    >
      <div data-clip className="overflow-hidden">
        <div style={{ zoom: c.k }}>
          <div data-screen className="relative text-left font-semibold text-ink" style={{ width: SCREEN_W, height: SCREEN_H }}>
            {screen}
          </div>
        </div>
      </div>
    </div>
  );
}

function Photo({ p }: { p: NonNullable<Shot["photo"]> }) {
  return (
    <div
      className="absolute overflow-hidden rounded-[64px] border-[18px] border-paper bg-paper shadow-[0_50px_70px_-10px_rgb(14_14_18/0.3)]"
      style={{ left: p.x, top: p.y, width: p.w, height: p.h, transform: `rotate(${p.tilt}deg)` }}
    >
      <img src={`assets/${p.src}`} alt="" className="h-full w-full rounded-[46px] object-cover" style={{ objectPosition: p.focus ?? "center" }} />
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

// The app's nest modules (pengu/src/lib/nestAccess.ts MODULE_META).
const MODULES = [
  { label: "Calendar", icon: CalendarIcon, tint: "#0D7A52", bg: "#E3F5EE" },
  { label: "Expenses", icon: CardIcon, tint: "#A15C07", bg: "#FEF3DF" },
  { label: "Handoff notes", icon: DocumentTextIcon, tint: "#5236D9", bg: "#EEEAFF" },
  { label: "Memories", icon: GalleryWideIcon, tint: "#D63E20", bg: "#FFECE7" },
  { label: "Chat", icon: ChatRoundIcon, tint: "#1A5BCC", bg: "#E5EFFF" },
  { label: "Activity log", icon: ClipboardIcon, tint: "#2A2A31", bg: "#EDEDF1" },
];

function ModuleChips({ y }: { y: number }) {
  return (
    <div className="absolute inset-x-[70px] flex flex-wrap justify-center gap-[26px]" style={{ top: y }}>
      {MODULES.map((m, i) => (
        <span
          key={m.label}
          className="flex items-center gap-[18px] rounded-full bg-paper py-[18px] pl-[18px] pr-[38px] text-[46px] tracking-[-0.02em] shadow-[0_20px_30px_-8px_rgb(14_14_18/0.18)]"
          style={{ transform: `rotate(${i % 2 ? 2 : -2}deg)` }}
        >
          <span className="flex h-[84px] w-[84px] items-center justify-center rounded-full" style={{ background: m.bg }}>
            <m.icon size={44} color={m.tint} />
          </span>
          {m.label}
        </span>
      ))}
    </div>
  );
}

const SHOTS: Shot[] = [
  {
    name: "calendar",
    lines: ["Always know", "who has"],
    script: "the kids.",
    highlight: "#8EE6C0",
    size: 150,
    screen: () => <ScheduleScreen />,
    phone: { x: 650, y: 1900, tilt: -7 },
    callouts: [
      { target: ".cal-day.bg-accent", k: 5.4, dx: 330, dy: -150, tilt: 8 },
      { target: ".day-detail > :last-child", k: 2.9, dx: -20, dy: -40, tilt: 3 },
    ],
    decor: (
      <>
        <Burst x={1090} y={830} size={300} fill="#1FAA77" ink="#FFFFFF" tilt={10} lines={["2-2-3", "rotation"]} />
        <Sparkle x={140} y={800} size={90} />
      </>
    ),
  },
  {
    name: "expenses",
    lines: ["Money,", "without"],
    script: "the arguments.",
    highlight: "#FFD84D",
    size: 150,
    screen: () => <ExpensesScreen />,
    // Far enough right that its edge crosses into the memories shot.
    phone: { x: 1060, y: 1900, tilt: 6 },
    callouts: [
      { target: '.bg-ink[class*="rounded-[28px]"]', k: 3, dx: -330, dy: -20, tilt: -4 },
      { target: ".ex-row", k: 3.2, dx: -320, dy: 30, tilt: 2, radius: 24 },
    ],
    decor: (
      <>
        <Burst x={250} y={2680} size={320} fill={AMBER} ink={INK} tilt={-12} lines={["Settle in", "one tap"]} />
        <Sparkle x={150} y={860} size={70} color={CORAL} />
      </>
    ),
  },
  {
    name: "memories",
    lines: ["Every", "milestone,"],
    script: "in both homes.",
    highlight: "#FFB8C6",
    size: 150,
    screen: () => <MemoriesScreen />,
    phone: { x: 840, y: 1920, tilt: -6 },
    callouts: [
      { target: ".memory", k: 3.3, dx: 260, dy: -20, tilt: 6 },
      { target: ".react", k: 6, dx: -90, dy: 150, tilt: -10 },
    ],
    decor: (
      <>
        <Burst x={1090} y={2520} size={320} fill="#7B61FF" ink="#FFFFFF" tilt={12} lines={["Photos", "& videos"]} />
        <Sparkle x={1150} y={860} size={90} />
      </>
    ),
  },
  {
    name: "notes",
    lines: ["Nothing gets", "lost at the"],
    script: "handover.",
    highlight: "#A9D5FF",
    size: 150,
    screen: () => <NotesScreen />,
    phone: { x: 640, y: 1900, tilt: -6 },
    callouts: [
      { target: ".note-card", k: 3, dx: 150, dy: -30, tilt: 4 },
      { target: ".note-card ~ .note-card span.rounded-full.bg-maria-soft", k: 5, dx: 20, dy: 10, tilt: -6 },
    ],
    decor: (
      <>
        <Burst x={240} y={2620} size={330} fill="#F04438" ink="#FFFFFF" tilt={-10} lines={["Urgent,", "important", "or FYI"]} />
        <Sparkle x={1160} y={820} size={80} />
      </>
    ),
  },
  {
    name: "chat",
    lines: ["Plans change?", "Sort it"],
    script: "in one chat.",
    highlight: "#CBBEFF",
    size: 150,
    screen: () => <ChatScreen />,
    phone: { x: 650, y: 1900, tilt: 6 },
    callouts: [{ target: ".bubble:has(.voice)", k: 4.2, dx: -170, dy: 10, tilt: -5 }],
    decor: (
      <>
        <Burst x={1060} y={2560} size={320} fill="#2F80FF" ink="#FFFFFF" tilt={10} lines={["Voice", "messages"]} />
        <Sparkle x={130} y={840} size={80} color={CORAL} />
      </>
    ),
  },
  {
    name: "home",
    lines: ["Today,", "at a"],
    script: "glance.",
    highlight: "#FFC59E",
    size: 150,
    screen: () => <HomeScreen />,
    phone: { x: 640, y: 1900, tilt: -6 },
    callouts: [
      { target: ".exchange-card", k: 3.1, dx: 50, dy: -20, tilt: 4 },
    ],
    decor: (
      <>
        <Burst x={1080} y={2620} size={320} fill="#1FAA77" ink="#FFFFFF" tilt={-10} lines={["Handover", "reminders"]} />
        <Sparkle x={150} y={830} size={80} />
      </>
    ),
  },
  {
    name: "together",
    lines: ["Less back-and-forth,"],
    script: "more time together.",
    highlight: "#8EE6C0",
    size: 112,
    screen: () => <HomeScreen />,
    photo: { src: "humphrey-m-Cc-CQTUkbH0-unsplash.jpg", x: 120, y: 760, w: 1050, h: 1560, tilt: -3, focus: "50% 60%" },
    callouts: [
      { target: ".exchange-card", k: 2.6, at: [520, 2210], tilt: -4 },
      { target: ".ex-row + .ex-row", k: 2.7, at: [780, 2520], tilt: 3, radius: 24, screen: () => <ExpensesScreen /> },
    ],
    decor: (
      <>
        <Sparkle x={1170} y={760} size={90} />
        <Sparkle x={110} y={1500} size={60} color={CORAL} />
      </>
    ),
  },
  {
    name: "privacy",
    lines: ["Private to"],
    script: "your nest.",
    highlight: "#FFD84D",
    size: 150,
    screen: () => <PrivacyScreen />,
    phone: { x: 650, y: 1800, tilt: -6 },
    callouts: [
      { target: ".toggle-row:nth-child(3)", k: 2.9, dx: 10, dy: 0, tilt: -2, radius: 24 },
      { target: ".coparents", k: 2.9, dx: -100, dy: 40, tilt: -3 },
    ],
    decor: (
      <>
        <Burst x={1080} y={2600} size={320} fill={INK} ink="#FFFFFF" tilt={10} lines={["Access", "per nest"]} />
        <Sparkle x={140} y={760} size={80} />
      </>
    ),
  },
  {
    name: "family",
    lines: ["Step-parents,", "grandparents,"],
    script: "sitters too.",
    highlight: "#FFB8C6",
    size: 130,
    screen: () => <PrivacyScreen />,
    photo: { src: "vitaly-gariev-kNzJZSAMaxc-unsplash.jpg", x: 110, y: 860, w: 1070, h: 1300, tilt: 3, focus: "40% 50%" },
    callouts: [{ target: ".members", k: 2.7, at: [645, 2300], tilt: -3 }],
    decor: (
      <>
        <Burst x={1060} y={2640} size={320} fill="#7B61FF" ink="#FFFFFF" tilt={-10} lines={["Limited", "access"]} />
        <Sparkle x={150} y={2600} size={80} color={CORAL} />
      </>
    ),
  },
  {
    name: "one-nest",
    lines: ["Two homes."],
    script: "One nest.",
    highlight: "#FFB8C6",
    size: 150,
    screen: () => <HomeScreen />,
    photo: { src: "arifur-rahman-yikKOtj3H94-unsplash.jpg", x: 150, y: 860, w: 990, h: 1180, tilt: -3, focus: "50% 45%" },
    callouts: [],
    decor: (
      <>
        <ModuleChips y={2150} />
        <Sparkle x={1170} y={1000} size={90} />
      </>
    ),
  },
];

const N = SHOTS.length;

// A dashed trail from a pin in the first shot to Pengu in the last, with a
// loop at every seam. Each shot's stretch is the same shape, shifted.
const TRAIL = [
  "M 110 880",
  ...SHOTS.map((_, i) => {
    const x = (n: number) => W * i + n;
    if (i === N - 1) return `C ${x(300)} 690, ${x(560)} 800, ${x(880)} 740`;
    return [
      `C ${x(300)} 690, ${x(520)} 790, ${x(700)} 760`,
      `C ${x(880)} 730, ${x(1000)} 640, ${x(1150)} 720`,
      `C ${x(1300)} 800, ${x(1260)} 980, ${x(1150)} 950`,
      `C ${x(1040)} 920, ${x(1110)} 770, ${x(1330)} 760`,
    ].join(" ");
  }),
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

// Runs in the page once fonts load. Crops each callout to its target: offsets are summed up
// to the unzoomed screen root, so they are in points, then scaled by k. Then
// centres it on `at`, or over the same card in the (tilted) phone.
function placeCallouts() {
  for (const el of document.querySelectorAll<HTMLElement>("[data-callout]")) {
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

    let cx: number;
    let cy: number;
    if (el.dataset.at) {
      [cx, cy] = el.dataset.at.split(",").map(Number);
    } else {
      const slide = el.closest<HTMLElement>("[data-slide]")!;
      const source = slide.querySelector("[data-phone-screen]")!.querySelector(el.dataset.callout!)!.getBoundingClientRect();
      const box = slide.getBoundingClientRect();
      cx = source.x + source.width / 2 - box.x + Number(el.dataset.dx);
      cy = source.y + source.height / 2 - box.y + Number(el.dataset.dy);
    }
    el.style.left = `${cx - w / 2}px`;
    el.style.top = `${cy - h / 2}px`;
  }
}

async function page() {
  const body = renderToStaticMarkup(
    <div className="relative h-full w-full overflow-hidden bg-accent-soft font-semibold text-ink">
      <svg className="absolute inset-0" width={W * N} height={H} aria-hidden="true">
        <path d={TRAIL} fill="none" stroke={INK} strokeWidth={9} strokeDasharray="26 22" strokeLinecap="round" />
        <circle cx={110} cy={880} r={22} fill={CORAL} stroke={INK} strokeWidth={9} />
      </svg>
      {SHOTS.map((s, i) => (
        <div key={s.name} data-slide className="absolute top-0 h-full" style={{ left: W * i, width: W }}>
          {s.photo ? <Photo p={s.photo} /> : null}
          {s.phone ? (
            <div
              className="absolute drop-shadow-[0_60px_70px_rgb(14_14_18/0.3)]"
              style={{ left: s.phone.x, top: s.phone.y, transform: `translate(-50%, -50%) rotate(${s.phone.tilt}deg)` }}
            >
              <IPhone>{s.screen()}</IPhone>
            </div>
          ) : null}
          {s.callouts.map((c) => (
            <Lifted key={c.target} c={c} screen={(c.screen ?? s.screen)()} />
          ))}
          {s.decor}
          <h1 className="absolute inset-x-0 top-[130px] text-center text-ink">
            {s.lines.map((l) => (
              <span key={l} className="block leading-[0.98] font-extrabold tracking-[-0.03em]" style={{ fontSize: s.size }}>
                {l}
              </span>
            ))}
            <span className="relative mt-[0.15em] inline-block px-[0.2em] font-[Gochi_Hand] leading-[1.1] text-ink" style={{ fontSize: s.size * 1.2 }}>
              <span className="absolute inset-x-0 top-[0.12em] bottom-[0.02em] -rotate-2 rounded-[6px]" style={{ background: s.highlight }} />
              <span className="relative">{s.script}</span>
            </span>
          </h1>
        </div>
      ))}
      <div className="absolute" style={{ left: W * (N - 1) + 880, top: 680 }}>
        <PenguLogo size={130} />
      </div>
    </div>,
  );
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link href="https://fonts.googleapis.com/css2?family=Elms+Sans:wght@400..800&family=Gochi+Hand&display=block" rel="stylesheet" />
    <style>${await tailwind(body)}</style>
    <style>
      html, body { width: ${W * N}px; height: ${H}px; margin: 0; overflow: hidden; }
      body { font-family: "Elms Sans", ui-sans-serif, system-ui, sans-serif; -webkit-font-smoothing: antialiased; }
      /* Callouts are cut from a copy of the screen; keep the tab bar off them. */
      [data-screen] .tabbar { display: none; }
    </style>
  </head>
  <body>${body}</body>
</html>`;
}

// Pages live in .hyperframes/appstore with the photos in assets/, where
// next-image.tsx (the Memories screen) and Photo look for them.
const dir = ".hyperframes/appstore";
const out = "renders/appstore";
mkdirSync(`${dir}/assets`, { recursive: true });
mkdirSync(out, { recursive: true });
for (const img of [
  "nathan-dumlao-Wr3comVZJxU-unsplash.jpg",
  "vitaly-gariev-inrYL3ffAsQ-unsplash.jpg",
  "morgan-lane-YZHBeFlEhrg-unsplash.jpg",
  "alan-rodriguez-N17Nkbsc-zY-unsplash.jpg",
  ...SHOTS.flatMap((s) => (s.photo ? [s.photo.src] : [])),
]) {
  copyFileSync(`../public/images/${img}`, `${dir}/assets/${img}`);
}

// Playwright is preinstalled globally (NODE_PATH), not a project dependency.
const { chromium } = createRequire(import.meta.url)("playwright");
const browser = await chromium.launch();
const tab = await browser.newPage({ viewport: { width: W * N, height: H } });
const errors: string[] = [];
tab.on("pageerror", (e: Error) => errors.push(e.message));
const file = resolve(`${dir}/flow.html`);
writeFileSync(file, await page());
await tab.goto(`file://${file}`, { waitUntil: "networkidle" });
await tab.evaluate(() => document.fonts.ready);
await tab.waitForFunction(() => [...document.images].every((img) => img.complete));
if (errors.length) throw new Error(errors.join("\n"));
// Measure only once Elms Sans is in, or cards are cut to their fallback-font size.
await tab.evaluate(placeCallouts);
for (const [i, s] of SHOTS.entries()) {
  // App Store Connect rejects screenshots with an alpha channel.
  const name = `${out}/${String(i + 1).padStart(2, "0")}-${s.name}.png`;
  await tab.screenshot({ path: name, clip: { x: W * i, y: 0, width: W, height: H } });
  console.log(name);
}
await browser.close();
