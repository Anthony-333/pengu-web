import { CameraIcon } from "@solar-icons/react/bold/camera";
import { CardIcon } from "@solar-icons/react/bold/card";
import { ChatRoundIcon } from "@solar-icons/react/bold/chat-round";
import { ClipboardIcon } from "@solar-icons/react/bold/clipboard";
import { DocumentTextIcon } from "@solar-icons/react/linear/document-text";
import { FlashlightIcon } from "@solar-icons/react/bold/flashlight";
import { MapPointIcon } from "@solar-icons/react/linear/map-point";
import { MagnifierIcon } from "@solar-icons/react/linear/magnifier";
import type { ReactNode } from "react";
import { PenguLogo } from "../PenguLogo";
import type { SolarIcon } from "./ui";

/*
 * Web ports of the iOS home screen widgets and the handoff Live Activity
 * (pengu/src/widgets/*.tsx). The copy is what `snapshot.ts` writes for the
 * demo nest: Emma, Sarah ("you", emerald) and James (violet), handing off at
 * the school front gate at 6:00 PM. Widgets draw in the system font, so these
 * use `font-[Inter]` as the stand-in for SF Pro; the app itself is ElmsSans.
 *
 * Sizes are iPhone points on a 390pt-wide screen: small 158, medium 338×158.
 */

const C = {
  hero: "#0E0E12",
  onHeroMuted: "rgba(255,255,255,0.62)",
  onHeroSoft: "rgba(255,255,255,0.12)",
  accent: "#8E86F0",
  good: "#1FAA77",
  james: "#7B61FF",
  lily: "#F5A623",
  sky: "#2F80FF",
  warn: "#F59E0B",
  ink3: "#6B6B76",
};

const SMALL = 158;
const MEDIUM_W = 338;

/** A widget's rounded tile, with the app name iOS prints under it. */
function Tile({ className, w, h, dark, children }: { className: string; w: number; h: number; dark?: boolean; children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-[5px]">
      <div
        className={`${className} relative overflow-hidden rounded-[22px] font-[Inter] shadow-[0_6px_18px_rgb(14_14_18/0.14)] ${
          dark ? "bg-[#0E0E12] text-white" : "bg-paper text-ink"
        }`}
        style={{ width: w, height: h }}
      >
        {children}
      </div>
      <span className="font-[Inter] text-[11px] font-medium text-white">Pengu</span>
    </div>
  );
}

// ── Today (medium) ────────────────────────────────────────────

// Wed 21 → Tue 27 on the 2-2-3 rotation; the 21st is James → you.
const WEEK = [
  { label: "W", date: 21, color: C.good, from: C.james, today: true },
  { label: "Th", date: 22, color: C.good },
  { label: "F", date: 23, color: C.james, from: C.good },
  { label: "Sa", date: 24, color: C.james },
  { label: "Su", date: 25, color: C.james },
  { label: "M", date: 26, color: C.good, from: C.james },
  { label: "Tu", date: 27, color: C.good },
];

export function TodayWidget() {
  return (
    <Tile className="w-today" w={MEDIUM_W} h={SMALL} dark>
      <div className="flex h-full gap-3.5 p-4">
        <div className="flex w-[126px] shrink-0 flex-col">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: C.accent }} />
            <span className="text-[12px] font-semibold" style={{ color: C.onHeroMuted }}>Emma</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-1.5">
            <span className="h-[9px] w-[9px] rounded-full" style={{ background: C.good }} />
            <span className="text-[12px]" style={{ color: C.onHeroMuted }}>With you</span>
          </div>
          <p className="mt-0.5 text-[22px] font-bold leading-[28px]">Until Fri</p>
          <div className="my-2 h-px" style={{ background: C.onHeroSoft }} />
          <p className="text-[12px] font-semibold">Handoff 6:00 PM</p>
          <p className="truncate text-[12px]" style={{ color: C.onHeroMuted }}>to James · School front gate</p>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex gap-[3px]">
            {WEEK.map((d) => (
              <div key={d.date} className="flex flex-1 flex-col items-center gap-1">
                <span className="text-[10px]" style={{ color: C.onHeroMuted }}>{d.label}</span>
                <span
                  className="flex h-[22px] w-[22px] items-center justify-center rounded-full text-[12px] font-semibold"
                  style={{ background: d.today ? C.accent : "transparent" }}
                >
                  {d.date}
                </span>
                <span className="flex h-1.5 w-full">
                  {d.from ? <span className="flex-1" style={{ background: d.from }} /> : null}
                  <span className="flex-1" style={{ background: d.color }} />
                </span>
              </div>
            ))}
          </div>
          <div className="flex-1" />
          <div className="space-y-1.5">
            {[
              { when: "Today 4:30 PM", title: "Swim lesson", color: C.lily },
              { when: "Tomorrow 10:00 AM", title: "Dentist", color: C.good },
            ].map((e) => (
              <div key={e.title} className="flex items-center gap-1.5">
                <span className="h-4 w-[3px] shrink-0" style={{ background: e.color }} />
                <span className="shrink-0 text-[11px]" style={{ color: C.onHeroMuted }}>{e.when}</span>
                <span className="truncate text-[12px] font-semibold">{e.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Tile>
  );
}

// ── Quick Add (small) ─────────────────────────────────────────

const QUICK: { label: string; icon: SolarIcon; color: string }[] = [
  { label: "Activity", icon: ClipboardIcon, color: C.good },
  { label: "Expense", icon: CardIcon, color: C.lily },
  { label: "Note", icon: DocumentTextIcon, color: C.sky },
  { label: "Photo", icon: CameraIcon, color: C.james },
];

export function QuickAddWidget() {
  return (
    <Tile className="w-quickadd" w={SMALL} h={SMALL}>
      <div className="grid h-full grid-cols-2 gap-2 p-3">
        {QUICK.map((q) => (
          <div key={q.label} className="flex flex-col items-center justify-center gap-1 rounded-[14px] bg-frost">
            <q.icon size={20} color={q.color} />
            <span className="text-[11px] font-semibold">{q.label}</span>
          </div>
        ))}
      </div>
    </Tile>
  );
}

// ── Balance (small) ───────────────────────────────────────────

export function BalanceWidget() {
  return (
    <Tile className="w-balance" w={SMALL} h={SMALL}>
      <div className="flex h-full flex-col p-4">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-[12px] font-semibold text-ink-3">Expenses · Emma</span>
        </div>
        <div className="flex-1" />
        <span className="text-[12px] text-ink-3">Balance</span>
        <span className="text-[24px] font-bold leading-[30px]">$120.00</span>
        <span className="text-[12px] text-ink-3">to James</span>
        <span className="mt-2 text-[11.5px] font-semibold text-ink-3">2 open expenses</span>
      </div>
    </Tile>
  );
}

// ── Inbox (medium) ────────────────────────────────────────────

const INBOX: { icon: SolarIcon; tint: string; soft: string; title: string; sub: string }[] = [
  { icon: ChatRoundIcon, tint: C.accent, soft: "#ECEAFC", title: "1 new message", sub: "Tap to open chat" },
  { icon: DocumentTextIcon, tint: C.warn, soft: "#FEF3E2", title: "Urgent note: Health", sub: "Tap to read and acknowledge" },
  { icon: CardIcon, tint: C.good, soft: "#E3F5EE", title: "Dentist visit · $240.00", sub: "Waiting for you to settle" },
];

export function InboxWidget() {
  return (
    <Tile className="w-inbox" w={MEDIUM_W} h={SMALL}>
      <div className="flex h-full flex-col gap-1.5 px-3.5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-[12px] font-semibold text-ink-3">Emma · needs you</span>
        </div>
        {INBOX.map((r, i) => (
          <div key={r.title} className={`flex items-center gap-2.5 ${i > 0 ? "border-t border-hairline pt-1.5" : ""}`}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[9px]" style={{ background: r.soft }}>
              <r.icon size={13} color={r.tint} />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12.5px] font-semibold leading-[16px]">{r.title}</p>
              <p className="truncate text-[11.5px] leading-[15px] text-ink-3">{r.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </Tile>
  );
}

/** The iOS home screen with Pengu's widgets, on a deep lavender wallpaper. */
export function WidgetHomeScreen() {
  return (
    <div className="absolute inset-0 bg-accent-deep">
      <div className="flex flex-col items-center gap-[14px] pt-[66px]">
        <TodayWidget />
        <div className="flex gap-[22px]">
          <QuickAddWidget />
          <BalanceWidget />
        </div>
        <InboxWidget />
        <div className="flex w-[338px] flex-col items-start gap-[5px] pl-[2px]">
          <div className="overflow-hidden rounded-[14px] shadow-[0_6px_18px_rgb(14_14_18/0.14)]">
            <PenguLogo size={62} />
          </div>
          <span className="w-[62px] text-center font-[Inter] text-[11px] font-medium text-white">Pengu</span>
        </div>
      </div>
      <div className="absolute bottom-[34px] left-1/2 flex h-[30px] -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/25 px-3.5 font-[Inter] text-[13px] font-medium text-white backdrop-blur-xl">
        <MagnifierIcon size={13} color="#FFFFFF" />
        Search
      </div>
    </div>
  );
}

// ── Lock Screen: Today's accessory widgets + the Live Activity ──

/** Handoff day, Fri 23 at 4:18 PM: the countdown started at 4:00 PM. */
export function LiveActivity() {
  return (
    <div className="w-live overflow-hidden rounded-[24px] bg-[#0E0E12] p-4 font-[Inter] text-white">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-[16px] font-bold">E</span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] font-bold leading-[19px]">Handoff to James</p>
          <p className="text-[12.5px]" style={{ color: C.onHeroMuted }}>Today 6:00 PM</p>
        </div>
        <span className="text-[24px] font-bold tabular-nums" style={{ color: C.good }}>1:42:00</span>
      </div>
      <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/15">
        <div className="h-full w-[15%] rounded-full" style={{ background: C.good }} />
      </div>
      <div className="mt-2.5 flex items-center gap-[5px]">
        <MapPointIcon size={12} color={C.onHeroMuted} />
        <span className="text-[12.5px]" style={{ color: C.onHeroMuted }}>School front gate</span>
      </div>
      <div className="mt-2.5 rounded-[12px] bg-white py-2 text-center text-[13px] font-semibold text-ink">Open handoff</div>
    </div>
  );
}

export function LockScreen({ wallpaper }: { wallpaper: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1C1C22] font-[Inter] text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={wallpaper} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "55% 40%" }} />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative flex flex-col items-center pt-[64px]">
        {/* The inline widget shares the line above the clock with the date. */}
        <p className="w-lock-inline max-w-[330px] truncate text-[17px] font-semibold text-white/85">
          Fri 23 · Emma with you · Handoff today 6:00 PM
        </p>
        <p className="mt-[-6px] text-[96px] font-semibold leading-[110px] tracking-[-2px]">4:18</p>
        <div className="mt-1.5 flex items-center gap-3.5">
          {/* Circular: days until the handoff, as a full ring on the day. */}
          <div className="w-lock-circ relative flex h-[68px] w-[68px] items-center justify-center rounded-full bg-white/18">
            <svg className="absolute inset-0" viewBox="0 0 68 68" aria-hidden="true">
              <circle cx="34" cy="34" r="27" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="5" />
              <circle cx="34" cy="34" r="27" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span className="text-[12px] font-bold">Today</span>
          </div>
          {/* Rectangular: first name and times only, never place or money. */}
          <div className="w-lock-rect w-[172px] leading-[17px]">
            <p className="text-[14px] font-bold">Emma · with you</p>
            <p className="text-[13px]">Handoff today 6:00 PM</p>
            <p className="text-[13px]">to James</p>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-3 bottom-[118px]">
        <LiveActivity />
      </div>
      <div className="absolute inset-x-[46px] bottom-[42px] flex justify-between">
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black/35 backdrop-blur-xl">
          <FlashlightIcon size={22} color="#FFFFFF" />
        </span>
        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-black/35 backdrop-blur-xl">
          <CameraIcon size={22} color="#FFFFFF" />
        </span>
      </div>
    </div>
  );
}
