import type { ComponentType, CSSProperties, ReactNode } from "react";

/**
 * Web ports of the app's layout primitives (pengu/src/components/ui.tsx),
 * in iPhone points: screens are authored at 390×844 and scaled by `Phone`.
 * The app ships a single ElmsSans weight (SemiBold), so every glyph here is
 * `font-semibold` — set once on the screen root.
 */

export type SolarIcon = ComponentType<{ size?: number | string; color?: string; className?: string; style?: CSSProperties }>;

export const GUTTER = 16;
const shadow = "shadow-[0_8px_20px_rgb(14_14_18/0.06)]";

export function Card({
  children,
  className = "",
  padding = 18,
}: {
  children: ReactNode;
  className?: string;
  padding?: number;
}) {
  return (
    <div className={`rounded-[24px] bg-paper ${shadow} ${className}`} style={{ padding }}>
      {children}
    </div>
  );
}

export function HeroCard({
  children,
  className = "",
  padding = 20,
}: {
  children: ReactNode;
  className?: string;
  padding?: number;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-ink shadow-[0_8px_20px_rgb(14_14_18/0.18)] ${className}`}
      style={{ padding }}
    >
      {children}
    </div>
  );
}

/** Small tracked caps label — "TODAY", "OUTSTANDING BALANCE". */
export function Eyebrow({ children, className = "text-muted" }: { children: string; className?: string }) {
  return <p className={`text-[11px] uppercase tracking-[1.4px] ${className}`}>{children}</p>;
}

export function SectionHeader({ title, action }: { title: string; action?: string }) {
  return (
    <div className="mx-5 mb-3 mt-[22px] flex items-baseline justify-between">
      <p className="text-[18px] tracking-[-0.4px] text-ink">{title}</p>
      {action ? <p className="text-[13px] text-accent">{action}</p> : null}
    </div>
  );
}

/** Rounded glyph holder at the start of list rows. */
export function IconTile({
  icon: Icon,
  tint,
  bg,
  size = 44,
  round = true,
}: {
  icon: SolarIcon;
  tint: string;
  bg: string;
  size?: number;
  round?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center"
      style={{ width: size, height: size, borderRadius: round ? size / 2 : Math.round(size * 0.32), background: bg }}
    >
      <Icon size={Math.round(size * 0.42)} color={tint} />
    </div>
  );
}

export function StatusPill({
  label,
  className,
  icon: Icon,
}: {
  label: string;
  /** Text + background utilities, e.g. "bg-maria-soft text-maria-deep". */
  className: string;
  icon?: SolarIcon;
}) {
  return (
    <span className={`inline-flex items-center gap-[5px] self-start rounded-full px-2.5 py-[5px] text-[11px] tracking-[-0.1px] ${className}`}>
      {Icon ? <Icon size={11} /> : null}
      {label}
    </span>
  );
}

/** White circular header button with a hairline — bell, chat, back, plus. */
export function RoundButton({
  icon: Icon,
  size = 42,
  badge,
  accent,
}: {
  icon: SolarIcon;
  size?: number;
  badge?: boolean;
  /** Coral fill with a white glyph — the screen's primary "add" action. */
  accent?: boolean;
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center rounded-full border-[0.5px] border-hairline ${accent ? "bg-accent" : "bg-paper"}`}
      style={{ width: size, height: size }}
    >
      <Icon size={Math.round(size * 0.42)} color={accent ? "#FFFFFF" : "#0E0E12"} />
      {badge ? (
        <span className="absolute right-2 top-[7px] h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent" />
      ) : null}
    </div>
  );
}

/** Filter chip — `ink` when selected, paper with a hairline otherwise. */
export function Chip({
  children,
  selected,
  count,
}: {
  children: ReactNode;
  selected?: boolean;
  count?: number;
}) {
  return (
    <span
      className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full px-3.5 text-[13px] ${
        selected ? "bg-ink text-white" : "border-[0.5px] border-hairline bg-paper text-ink-2"
      }`}
    >
      {children}
      {count != null ? (
        <span className={`rounded-full px-[7px] py-px text-[10px] ${selected ? "bg-white/15 text-white" : "bg-frost text-ink-2"}`}>
          {count}
        </span>
      ) : null}
    </span>
  );
}

/** `$120⁰⁰` — display figure with superscript currency and cents. */
export function BigNumber({ value, size = 52, className = "text-ink" }: { value: number; size?: number; className?: string }) {
  const small = Math.round(size * 0.38);
  const [whole, cents] = value.toFixed(2).split(".");
  return (
    <div className={`flex items-start ${className}`}>
      <span className="mt-1" style={{ fontSize: small, lineHeight: `${small * 1.4}px` }}>$</span>
      <span style={{ fontSize: size, lineHeight: `${Math.ceil(size * 1.2)}px`, letterSpacing: -size * 0.045 }}>
        {Number(whole).toLocaleString("en-US")}
      </span>
      <span className="mt-1" style={{ fontSize: small, lineHeight: `${small * 1.4}px` }}>{cents}</span>
    </div>
  );
}

export function SegmentBar({ segments, height = 8 }: { segments: { value: number; color: string }[]; height?: number }) {
  const total = segments.reduce((s, x) => s + x.value, 0);
  return (
    <div className="flex gap-1" style={{ height }}>
      {segments.map((s, i) => (
        <div key={i} className="rounded-full" style={{ flex: s.value / total, background: s.color }} />
      ))}
    </div>
  );
}

/** Member initials on their soft tone — the app's no-photo avatar. */
export function InitialsAvatar({
  initials,
  size,
  className = "bg-frost text-ink",
  ring,
}: {
  initials: string;
  size: number;
  className?: string;
  /** Border, e.g. the hero's translucent ring. */
  ring?: string;
}) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full ${className}`}
      style={{ width: size, height: size, fontSize: Math.round(size * 0.38), border: ring }}
    >
      {initials}
    </div>
  );
}

/** Back button + 30pt title — screens pushed off a tab (Expenses, Notes…). */
export function SubScreenHeader({
  title,
  subtitle,
  back: Back,
  right,
}: {
  title: string;
  subtitle: string;
  back: SolarIcon;
  right?: ReactNode;
}) {
  return (
    <div className="px-5 pb-3.5 pt-[62px]">
      <div className="flex min-h-[42px] items-center justify-between">
        <RoundButton icon={Back} />
        {right}
      </div>
      <p className="mt-3.5 text-[30px] leading-[38px] tracking-[-0.9px] text-ink">{title}</p>
      <p className="mt-0.5 text-[13px] text-ink-3">{subtitle}</p>
    </div>
  );
}
