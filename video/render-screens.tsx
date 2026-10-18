/**
 * Builds `index.html` from `composition.tpl`, filling it with the site's own
 * phone screens (app/_components/phone) rendered to static markup and the
 * site's design tokens, so the hero video can never drift from the mockups.
 *
 *   cd video && npm run screens && npm run check
 *
 * It is bundled with esbuild first: @solar-icons/react is ESM-only, and the
 * site's files would otherwise load as CommonJS.
 */
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { HomeIndicator, StatusBar, TabBar } from "../app/_components/phone/Phone";
import { ExpensesScreen, HomeScreen, NotesScreen, ScheduleScreen } from "../app/_components/phone/screens";
import { MemoriesScreen } from "../app/_components/phone/MemoriesScreen";
import { PenguLogo } from "../app/_components/PenguLogo";

// Paths are relative to video/, where `npm run screens` runs.
const here = (p: string) => p;

const css = readFileSync(here("../app/globals.css"), "utf8");
const theme = css.match(/@theme inline \{([\s\S]*?)\n\}/)?.[1];
if (!theme) throw new Error("No @theme block in app/globals.css");
// The page font comes from next/font on the site; here it is loaded by name.
const tokens = theme.replace(/--font-(sans|mono):[^;]*;/g, "");

const html = (node: ReactNode) => renderToStaticMarkup(node);

const out = readFileSync(here("composition.tpl"), "utf8")
  .replace("{{THEME}}", tokens.trim())
  .replace("{{HOME}}", html(<HomeScreen tabBar={false} />))
  .replace("{{SCHEDULE}}", html(<ScheduleScreen tabBar={false} />))
  .replace("{{EXPENSES}}", html(<ExpensesScreen tabBar={false} />))
  .replace("{{TABBAR_0}}", html(<TabBar active={0} />))
  .replace("{{TABBAR_1}}", html(<TabBar active={1} />))
  .replace("{{TABBAR_2}}", html(<TabBar active={2} />))
  .replace("{{STATUS}}", html(<StatusBar />))
  .replace("{{INDICATOR}}", html(<HomeIndicator />))
  .replace("{{LOGO}}", html(<PenguLogo size={30} />));

if (out.includes("{{")) throw new Error("Unfilled placeholder in composition.tpl");
writeFileSync(here("index.html"), out);
console.log("video/index.html written");

// ---- Feature clips: the old way, then the Pengu screen that fixes it ----
// features/shell.tpl holds the shared stage and reveal; each features/<name>.tpl
// supplies the problem markup, an overlay on the solution, and its timeline.
// Render one with `-c feature-<name>.html`.
const FEATURES: { name: string; screen: ReactNode; tab: number }[] = [
  { name: "calendar", screen: <ScheduleScreen tabBar={false} />, tab: 1 },
  { name: "expenses", screen: <ExpensesScreen tabBar={false} />, tab: 2 },
  { name: "notes", screen: <NotesScreen tabBar={false} />, tab: 2 },
  { name: "memories", screen: <MemoriesScreen tabBar={false} />, tab: 2 },
];
// The problem plays this many times slower than it is authored (shell.tpl).
const SLOW = 1.6;
// From the problem giving way to the end: the reveal plus the Pengu beat and a hold.
const RESOLVE = 4;

const shell = readFileSync(here("features/shell.tpl"), "utf8");
for (const f of FEATURES) {
  const src = readFileSync(here(`features/${f.name}.tpl`), "utf8");
  const part = (k: string) => src.match(new RegExp(`<!--@${k}-->([\\s\\S]*?)(?=<!--@|$)`))?.[1]?.trim() ?? "";
  const at = Number(src.match(/\bat: ([\d.]+),/)?.[1]);
  if (!at) throw new Error(`features/${f.name}.tpl has no \`at:\``);
  const duration = Math.round((at * SLOW + RESOLVE) * 100) / 100;
  const filled = shell
    .replaceAll("{{NAME}}", f.name)
    .replaceAll("{{ID}}", `feature-${f.name}`)
    .replaceAll("{{DURATION}}", String(duration))
    .replace("{{SLOW}}", String(SLOW))
    .replace("{{THEME}}", tokens.trim())
    .replace("{{PROBLEM}}", part("problem"))
    .replace("{{SOLUTION}}", html(f.screen))
    .replace("{{OVERLAY}}", part("overlay"))
    .replace("{{TABBAR}}", html(<TabBar active={f.tab} />))
    .replace("{{STATUS}}", html(<StatusBar />))
    .replace("{{INDICATOR}}", html(<HomeIndicator />))
    .replace("{{LOGO}}", html(<PenguLogo size={58} />))
    .replace("{{SCRIPT}}", part("script"));
  if (filled.includes("{{")) throw new Error(`Unfilled placeholder in feature ${f.name}`);
  writeFileSync(here(`feature-${f.name}.html`), filled);
}
console.log(`video/feature-*.html written (${FEATURES.length})`);

// Photos used by the Memories clip, served from video/assets.
mkdirSync(here("assets"), { recursive: true });
for (const img of [
  "nathan-dumlao-Wr3comVZJxU-unsplash.jpg",
  "vitaly-gariev-inrYL3ffAsQ-unsplash.jpg",
  "morgan-lane-YZHBeFlEhrg-unsplash.jpg",
  "alan-rodriguez-N17Nkbsc-zY-unsplash.jpg",
]) {
  copyFileSync(here(`../public/images/${img}`), here(`assets/${img}`));
}
