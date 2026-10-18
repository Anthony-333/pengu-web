import type { ReactNode } from "react";
import { HomeIcon } from "@solar-icons/react/line-duotone/home";
import { CalendarIcon } from "@solar-icons/react/line-duotone/calendar";
import { FolderIcon } from "@solar-icons/react/line-duotone/folder";
import { UserCircleIcon } from "@solar-icons/react/line-duotone/user-circle";
import { HomeIcon as HomeBold } from "@solar-icons/react/bold-duotone/home";
import { CalendarIcon as CalendarBold } from "@solar-icons/react/bold-duotone/calendar";
import { FolderIcon as FolderBold } from "@solar-icons/react/bold-duotone/folder";
import { UserCircleIcon as UserCircleBold } from "@solar-icons/react/bold-duotone/user-circle";

export type ScreenProps = {
  /** Off when a shared tab bar is drawn over several screens (the hero video). */
  tabBar?: boolean;
};

/** Screen size in iPhone points — the app's own layout units. */
export const SCREEN_W = 390;
export const SCREEN_H = 844;

/**
 * An iPhone frame. Screens are authored at 390×844 pt and scaled with
 * `zoom`, so app measurements (16pt gutters, 30pt titles) carry over 1:1.
 * Size it with `--s`, the fraction of real size: `className="[--s:0.7]"`.
 */
export function Phone({
  children,
  className = "",
  overlay,
}: {
  children: ReactNode;
  className?: string;
  /** Rendered over the screen at full size, outside the zoom (e.g. a video). */
  overlay?: ReactNode;
}) {
  return (
    <div
      data-phone
      className={`relative rounded-[calc(64px*var(--s,1))] bg-ink p-[calc(12px*var(--s,1))] shadow-[0_40px_80px_-20px_rgb(14_14_18/0.45),inset_0_0_0_1.5px_rgb(255_255_255/0.14)] ${className}`}
    >
      <div
        className="relative overflow-hidden rounded-[calc(52px*var(--s,1))] bg-canvas"
        style={{ width: `calc(${SCREEN_W}px * var(--s, 1))`, height: `calc(${SCREEN_H}px * var(--s, 1))` }}
      >
        <div
          className="relative isolate overflow-hidden text-left font-semibold text-ink"
          style={{ width: SCREEN_W, height: SCREEN_H, zoom: "var(--s, 1)" }}
        >
          {/* `isolate` keeps these z-indexed layers below `overlay` (the hero video). */}
          {children}
          <StatusBar />
          <HomeIndicator />
        </div>
        {overlay}
      </div>
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-[54px]">
      <div className="absolute left-1/2 top-[11px] h-[37px] w-[125px] -translate-x-1/2 rounded-full bg-black" />
      <span className="absolute left-[52px] top-[18px] text-[17px] tracking-[-0.4px] text-ink">9:41</span>
      <div className="absolute right-[34px] top-[22px] flex items-center gap-[6px] text-ink">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-hidden="true">
          <path d="M8 2.6c2.2 0 4.2.85 5.7 2.25l1.1-1.13A9.6 9.6 0 0 0 8 1C5.4 1 3 2 1.2 3.72l1.1 1.13A8 8 0 0 1 8 2.6Zm0 3.2c1.3 0 2.5.5 3.4 1.33l1.1-1.13A6.4 6.4 0 0 0 8 4.2c-1.75 0-3.33.68-4.5 1.8l1.1 1.13A4.8 4.8 0 0 1 8 5.8Zm0 3.2c.45 0 .87.17 1.18.45L8 10.66 6.82 9.45C7.13 9.17 7.55 9 8 9Z" />
        </svg>
        <div className="relative flex h-[13px] w-[27px] items-center rounded-[4px] border border-ink/40 p-[1.5px]">
          <div className="h-full w-[78%] rounded-[2px] bg-ink" />
          <div className="absolute -right-[3px] top-1/2 h-[4px] w-[1.5px] -translate-y-1/2 rounded-r bg-ink/40" />
        </div>
      </div>
    </div>
  );
}

export function HomeIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-2 left-1/2 z-30 h-[5px] w-[134px] -translate-x-1/2 rounded-full bg-ink" />
  );
}

const TABS = [
  { label: "Home", icon: HomeIcon, selected: HomeBold },
  { label: "Schedule", icon: CalendarIcon, selected: CalendarBold },
  { label: "Records", icon: FolderIcon, selected: FolderBold },
  { label: "Account", icon: UserCircleIcon, selected: UserCircleBold },
];

/**
 * iOS 26 native tab bar (NativeTabs): a floating Liquid Glass capsule with
 * Solar icons — line-duotone at rest, bold-duotone and coral when selected.
 */
export function TabBar({ active }: { active: number }) {
  return (
    <div data-layout-allow-occlusion className="tabbar absolute inset-x-[20px] bottom-[22px] z-20 flex h-[62px] items-center rounded-full border-[0.5px] border-white/70 bg-white/75 px-1 shadow-[0_10px_30px_rgb(14_14_18/0.12)] backdrop-blur-xl">
      {TABS.map((t, i) => {
        const on = i === active;
        const Icon = on ? t.selected : t.icon;
        return (
          <div
            key={t.label}
            data-tab={i}
            className={`tab flex h-[54px] flex-1 flex-col items-center justify-center gap-[3px] rounded-full ${on ? "bg-ink/[0.06]" : ""}`}
          >
            <Icon size={26} color={on ? "#FF5A3C" : "#8E8E99"} />
            <span className={`text-[10px] tracking-[0.1px] ${on ? "text-accent" : "text-[#8E8E99]"}`}>{t.label}</span>
          </div>
        );
      })}
    </div>
  );
}
