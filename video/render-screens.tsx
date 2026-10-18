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
import { readFileSync, writeFileSync } from "node:fs";
import type { ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { HomeIndicator, StatusBar, TabBar } from "../app/_components/phone/Phone";
import { ExpensesScreen, HomeScreen, ScheduleScreen } from "../app/_components/phone/screens";
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
