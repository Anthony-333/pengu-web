import { AddIcon } from "@solar-icons/react/line-duotone/add";
import { AltArrowLeftIcon } from "@solar-icons/react/line-duotone/alt-arrow-left";
import { AltArrowRightIcon } from "@solar-icons/react/line-duotone/alt-arrow-right";
import { BackpackIcon } from "@solar-icons/react/line-duotone/backpack";
import { BellIcon } from "@solar-icons/react/line-duotone/bell";
import { CalendarIcon } from "@solar-icons/react/line-duotone/calendar";
import { CardIcon } from "@solar-icons/react/line-duotone/card";
import { ChatRoundIcon } from "@solar-icons/react/line-duotone/chat-round";
import { CheckIcon } from "@solar-icons/react/line-duotone/check";
import { CheckCircleIcon } from "@solar-icons/react/line-duotone/check-circle";
import { ClipboardIcon } from "@solar-icons/react/line-duotone/clipboard";
import { ClockCircleIcon } from "@solar-icons/react/line-duotone/clock-circle";
import { DocumentTextIcon } from "@solar-icons/react/line-duotone/document-text";
import { FootballIcon } from "@solar-icons/react/line-duotone/football";
import { GalleryWideIcon } from "@solar-icons/react/line-duotone/gallery-wide";
import { HeartIcon } from "@solar-icons/react/line-duotone/heart";
import { MapPointIcon } from "@solar-icons/react/line-duotone/map-point";
import { MedalRibbonIcon } from "@solar-icons/react/line-duotone/medal-ribbon";
import { MedicalKitIcon } from "@solar-icons/react/line-duotone/medical-kit";
import { MenuDotsCircleIcon } from "@solar-icons/react/line-duotone/menu-dots-circle";
import { SendSquareIcon } from "@solar-icons/react/line-duotone/send-square";
import { SettingsIcon } from "@solar-icons/react/line-duotone/settings";
import { SquareAcademicCapIcon } from "@solar-icons/react/line-duotone/square-academic-cap";
import { TransferHorizontalIcon } from "@solar-icons/react/line-duotone/transfer-horizontal";
import { TabBar, type ScreenProps } from "./Phone";
import {
  BigNumber,
  Card,
  Chip,
  Eyebrow,
  HeroCard,
  IconTile,
  InitialsAvatar,
  RoundButton,
  SectionHeader,
  SegmentBar,
  StatusPill,
  SubScreenHeader,
} from "./ui";

/*
 * Demo nest: Sarah (you, "m" — emerald) and James ("j" — violet) share Emma,
 * 7, on the app's Monday-first 2-2-3 template. "Today" is Wed 21 Oct 2026,
 * so every screen agrees: Emma is with Mom since 6 PM, and the next exchange
 * is Friday, in 2 days.
 */
const TEMPLATE = "AABBAAABBAABBB"; // pengu/src/constants/custodyPresets.ts
const ANCHOR_OFFSET = 2; // Mon 28 Sep 2026 is day 0
export const TODAY = 21;

export function custodyOn(day: number): "m" | "j" {
  return TEMPLATE[(day + ANCHOR_OFFSET) % 14] === "A" ? "m" : "j";
}

const TONE = {
  m: { base: "#1FAA77", soft: "bg-maria-soft", deep: "text-maria-deep" },
  j: { base: "#7B61FF", soft: "bg-james-soft", deep: "text-james-deep" },
};

// ── Home ─────────────────────────────────────────────────────

function ChildSelector() {
  const kids = [
    { name: "Emma", age: 7, initials: "E", who: custodyOn(TODAY), selected: true },
    { name: "Leo", age: 4, initials: "L", who: custodyOn(TODAY), selected: false },
  ];
  return (
    <div className="flex gap-2 px-1 py-1">
      {kids.map((k) => (
        <div
          key={k.name}
          className={`flex min-w-[120px] items-center gap-2.5 rounded-full border-[0.5px] p-1.5 pr-4 shadow-[0_1px_6px_rgb(14_14_18/0.04)] ${
            k.selected ? "border-ink bg-ink" : "border-hairline bg-paper"
          }`}
        >
          <div className={`relative flex h-10 w-10 items-center justify-center rounded-full ${k.selected ? "bg-white/15" : "bg-frost"}`}>
            <InitialsAvatar initials={k.initials} size={34} className={k.selected ? "bg-lily-soft text-lily-deep" : "bg-sky-soft text-sky-deep"} />
            <span
              className={`absolute bottom-0 right-0 h-[11px] w-[11px] rounded-full border-2 ${k.selected ? "border-ink" : "border-paper"}`}
              style={{ background: TONE[k.who].base }}
            />
          </div>
          <div>
            <p className={`text-[14px] leading-[18px] tracking-[-0.2px] ${k.selected ? "text-white" : "text-ink"}`}>{k.name}</p>
            <p className={`text-[11px] ${k.selected ? "text-white/60" : "text-muted"}`}>age {k.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function GreetingHeader() {
  return (
    <div className="px-4 pb-2 pt-[62px]">
      <div className="flex items-center justify-between gap-3 px-1 pb-3 pt-1.5">
        <div className="flex min-w-0 items-center gap-3">
          <InitialsAvatar initials="S" size={46} className="bg-maria-soft text-maria-deep" />
          <div>
            <p className="text-[13px] leading-[18px] text-muted">Good morning</p>
            <p className="text-[24px] leading-[32px] tracking-[-0.7px] text-ink">Sarah 👋</p>
          </div>
        </div>
        <div className="flex gap-2">
          <RoundButton icon={ChatRoundIcon} size={44} />
          <RoundButton icon={BellIcon} size={44} badge />
        </div>
      </div>
      <ChildSelector />
    </div>
  );
}

const SHORTCUTS = [
  { label: "Activities", icon: ClipboardIcon },
  { label: "Memories", icon: GalleryWideIcon, badge: true },
  { label: "Expenses", icon: CardIcon, badge: true },
  { label: "Notes", icon: DocumentTextIcon },
];

function CustodyHero() {
  return (
    <HeroCard className="mx-4 mt-1.5" padding={0}>
      <div className="px-5 pb-1.5 pt-[18px]">
        <div className="flex pr-12">
          <span className="flex items-center gap-[7px] rounded-full bg-white/12 px-3 py-[7px] text-[12px] text-white">
            <span className="h-[7px] w-[7px] rounded-full bg-accent" />
            Emma&apos;s custody
          </span>
        </div>
        <div className="mt-[18px] flex items-center gap-3.5">
          <div className="min-w-0 flex-1 space-y-1">
            <Eyebrow className="text-white/62">Today</Eyebrow>
            <p className="text-[40px] leading-[52px] tracking-[-1.6px] text-white">With Mom</p>
            <p className="text-[13px] text-white/62">Since Oct 21, 6:00 PM</p>
          </div>
          <InitialsAvatar initials="E" size={84} className="bg-lily-soft text-lily-deep" ring="3px solid rgb(255 255 255 / 0.12)" />
        </div>
        <span className="mt-3.5 inline-flex items-center gap-[7px] rounded-full bg-white/12 px-3 py-[7px] text-[12px] text-white">
          <ClockCircleIcon size={12} color="#FF5A3C" />
          Ends Fri, 6:00 PM
        </span>
      </div>
      <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/12">
        <SettingsIcon size={16} color="#FFFFFF" />
      </div>
      <div className="flex px-2.5 pb-[18px] pt-4">
        {SHORTCUTS.map((s) => (
          <div key={s.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="relative flex h-[54px] w-[54px] items-center justify-center rounded-full bg-white/12">
              <s.icon size={20} color="#FFFFFF" />
              {s.badge ? <span className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-ink bg-accent" /> : null}
            </div>
            <span className="text-[11px] tracking-[-0.1px] text-white/62">{s.label}</span>
          </div>
        ))}
      </div>
    </HeroCard>
  );
}

function ExchangeCard() {
  return (
    <Card className="mx-4 mt-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[14px] tracking-[-0.2px] text-accent">Next exchange</p>
        <StatusPill label="In 2 Days" className="bg-maria-soft text-maria-deep" />
      </div>
      <div className="mt-2.5 flex items-baseline gap-2">
        <p className="text-[30px] leading-[40px] tracking-[-1px] text-ink">Friday</p>
        <p className="text-[15px] text-muted">6:00 PM</p>
      </div>
      <div className="mt-2 flex gap-4 text-[12px] leading-4 text-ink-3">
        <span className="flex items-center gap-1.5">
          <CalendarIcon size={13} color="#A0A0AA" />
          October 23
        </span>
        <span className="flex items-center gap-1.5">
          <MapPointIcon size={13} color="#A0A0AA" />
          At School
        </span>
      </div>
    </Card>
  );
}

type EventRow = { title: string; when: string; where: string; icon: typeof HeartIcon; tint: string; bg: string };

const UPCOMING: EventRow[] = [
  { title: "Swim lesson", when: "Wed, Oct 21 · 4:30 PM", where: "At Riverside Pool", icon: FootballIcon, tint: "#F5A623", bg: "#FEF3DF" },
  { title: "Dentist check-up", when: "Thu, Oct 22 · 10:00 AM", where: "At Bright Smiles Dental", icon: HeartIcon, tint: "#1FAA77", bg: "#E3F5EE" },
  { title: "Handover to James", when: "Fri, Oct 23 · 6:00 PM", where: "At School", icon: TransferHorizontalIcon, tint: "#2A2A31", bg: "#EDEDF1" },
];

function UpcomingEvents({ rows = UPCOMING }: { rows?: EventRow[] }) {
  return (
    <div className="up-section">
      <SectionHeader title="Upcoming events" action="See all" />
      <Card padding={0} className="mx-4 overflow-hidden">
        {rows.map((e, i) => (
          <div key={e.title} className={`up-row flex items-center gap-3 px-4 py-3.5 ${i > 0 ? "border-t-[0.5px] border-hairline" : ""}`}>
            <IconTile icon={e.icon} tint={e.tint} bg={e.bg} size={46} />
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-[15px] leading-5 tracking-[-0.2px] text-ink">{e.title}</p>
              <p className="flex items-center gap-1.5 text-[12px] leading-4 text-ink-3">
                <ClockCircleIcon size={12} color="#A0A0AA" />
                {e.when}
              </p>
              <p className="flex items-center gap-1.5 text-[12px] leading-4 text-ink-3">
                <MapPointIcon size={12} color="#A0A0AA" />
                {e.where}
              </p>
            </div>
            <AltArrowRightIcon size={14} color="#A0A0AA" />
          </div>
        ))}
      </Card>
    </div>
  );
}

function HomeFab() {
  return (
    <div data-layout-allow-occlusion className="absolute bottom-[100px] right-5 z-10 flex h-[62px] w-[62px] items-center justify-center rounded-full bg-accent shadow-[0_8px_20px_rgb(255_90_60/0.45)]">
      <AddIcon size={28} color="#FFFFFF" />
    </div>
  );
}

export function HomeScreen({ tabBar = true }: ScreenProps) {
  return (
    <div className="absolute inset-0 bg-canvas">
      <GreetingHeader />
      <CustodyHero />
      <ExchangeCard />
      <UpcomingEvents />
      <HomeFab />
      {tabBar ? <TabBar active={0} /> : null}
    </div>
  );
}

// ── Schedule (Calendar tab) ──────────────────────────────────

const EVENT_DAYS = new Set([21, 22, 23, 27, 30]);

export function ScheduleScreen({ tabBar = true }: ScreenProps) {
  // October 2026, Monday-first: Sep 28–30 lead in, Nov 1 trails.
  const cells = [
    ...[28, 29, 30].map((d) => ({ d, muted: true })),
    ...Array.from({ length: 31 }, (_, i) => ({ d: i + 1, muted: false })),
    { d: 1, muted: true },
  ];
  return (
    <div className="absolute inset-0 bg-canvas">
      <div className="flex items-center justify-between gap-3 px-5 pb-3 pt-[66px]">
        <div className="min-w-0">
          <p className="text-[30px] leading-[38px] tracking-[-0.9px] text-ink">Calendar</p>
          <p className="mt-0.5 text-[13px] text-ink-3">
            2-2-3 · <span className="text-accent">Edit schedule</span>
          </p>
        </div>
        <div className="flex gap-2">
          <RoundButton icon={CalendarIcon} />
          <RoundButton icon={AddIcon} accent />
        </div>
      </div>
      <div className="px-3 pb-2">
        <ChildSelector />
      </div>

      <Card className="mx-4 mt-1" padding={14}>
        <div className="flex items-center justify-between px-1 pb-3.5">
          <p className="text-[20px] tracking-[-0.5px] text-ink">
            October <span className="text-muted">2026</span>
          </p>
          <div className="flex gap-1.5">
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-frost">
              <AltArrowLeftIcon size={13} color="#0E0E12" />
            </span>
            <span className="flex h-[34px] items-center rounded-full bg-frost px-3 text-[12px] text-ink">Today</span>
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-frost">
              <AltArrowRightIcon size={13} color="#0E0E12" />
            </span>
          </div>
        </div>
        <div className="mb-1.5 grid grid-cols-7">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="text-center text-[11px] tracking-[0.5px] text-muted">
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-[5px]">
          {cells.map((c, i) => {
            const who = c.muted ? null : custodyOn(c.d);
            const selected = !c.muted && c.d === TODAY;
            const bg = selected ? "bg-accent" : c.muted ? "" : TONE[who!].soft;
            const fg = selected ? "text-white" : c.muted ? "text-muted" : TONE[who!].deep;
            return (
              <div key={i} className={`cal-day relative flex aspect-square items-center justify-center rounded-full text-[14px] ${bg} ${fg}`}>
                {c.d}
                {!c.muted && EVENT_DAYS.has(c.d) ? (
                  <span className={`absolute bottom-1 h-1 w-1 rounded-full ${selected ? "bg-white" : "bg-ink"}`} />
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-3.5 flex items-center gap-2 border-t-[0.5px] border-hairline pt-3">
          <span className="flex items-center gap-1.5 rounded-full bg-maria-soft px-2.5 py-[5px] text-[12px] text-maria-deep">
            <span className="h-[7px] w-[7px] rounded-full bg-maria" />
            You
          </span>
          <span className="flex items-center gap-1.5 rounded-full bg-james-soft px-2.5 py-[5px] text-[12px] text-james-deep">
            <span className="h-[7px] w-[7px] rounded-full bg-james" />
            James
          </span>
          <span className="ml-auto text-[11px] text-muted">Tap a day</span>
        </div>
      </Card>

      <div className="day-detail mx-4 mt-[22px]">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="text-[18px] tracking-[-0.4px] text-ink">Oct 21</p>
          <StatusPill label="With You" className="bg-maria-soft text-maria-deep" />
        </div>
        <Card padding={0} className="overflow-hidden">
          <div className="flex items-start gap-3 px-4 py-3.5">
            <IconTile icon={FootballIcon} tint="#F5A623" bg="#FEF3DF" />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] tracking-[-0.2px] text-ink">Swim lesson</p>
              <p className="mt-0.5 text-[12px] leading-[17px] text-ink-3">At Riverside Pool · bring goggles</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-[14px] tracking-[-0.2px] text-ink">4:30 PM</p>
              <span className="mt-2 rounded-full bg-lily-soft px-[9px] py-[3px] text-[10px] uppercase tracking-[0.8px] text-warn-deep">
                Activity
              </span>
            </div>
          </div>
        </Card>
      </div>
      {tabBar ? <TabBar active={1} /> : null}
    </div>
  );
}

// ── Records › Expenses ───────────────────────────────────────

type Expense = {
  title: string;
  meta: string;
  amount: number;
  status: "pending" | "settled" | "disputed";
  icon: typeof HeartIcon;
  color: string;
  receipt?: boolean;
};

const EXPENSES: Expense[] = [
  { title: "Dentist visit", meta: "Paid by James · Oct 19", amount: 240, status: "pending", icon: MedicalKitIcon, color: "#FF5A3C" },
  { title: "Swim term fees", meta: "Paid by Sarah · Oct 12", amount: 180, status: "settled", icon: MedalRibbonIcon, color: "#F5A623" },
  { title: "School backpack", meta: "Paid by James · Oct 6", amount: 64.5, status: "settled", icon: BackpackIcon, color: "#2F80FF", receipt: true },
];

const STATUS = {
  pending: "bg-warn-soft text-warn-deep",
  settled: "bg-maria-soft text-maria-deep",
  disputed: "bg-danger-soft text-danger",
};

export function ExpensesScreen({ tabBar = true }: ScreenProps) {
  return (
    <div className="absolute inset-0 bg-canvas">
      <SubScreenHeader
        title="Expenses"
        subtitle="50 / 50 split · 6 expenses"
        back={AltArrowLeftIcon}
        right={<RoundButton icon={AddIcon} accent />}
      />
      <HeroCard className="mx-4">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[7px] rounded-full bg-white/12 px-3 py-[7px] text-[12px] text-white">
            <span className="h-[7px] w-[7px] rounded-full bg-accent" />
            You owe James
          </span>
          <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-white/12">
            <SendSquareIcon size={16} color="#FFFFFF" />
          </span>
        </div>
        <div className="mb-0.5 mt-[18px]">
          <Eyebrow className="text-white/62">Outstanding balance</Eyebrow>
        </div>
        <BigNumber value={120} className="text-white" />
        <p className="mt-0.5 text-[12px] text-white/62">Unsettled expenses · as of October 21</p>
        <div className="mt-4">
          <SegmentBar
            segments={[
              { value: 220.75, color: "#1FAA77" },
              { value: 460.75, color: "#7B61FF" },
            ]}
          />
        </div>
        <div className="mt-4 flex border-t-[0.5px] border-white/12 pt-3.5">
          {[
            ["Sarah paid", "$220.75", "bg-maria"],
            ["James paid", "$460.75", "bg-james"],
          ].map(([k, v, dot]) => (
            <div key={k} className="flex-1">
              <p className="flex items-center gap-1.5 text-[12px] text-white/62">
                <span className={`h-[7px] w-[7px] rounded-full ${dot}`} />
                {k}
              </p>
              <p className="mt-1 text-[19px] tracking-[-0.5px] text-white">{v}</p>
            </div>
          ))}
        </div>
      </HeroCard>

      <div className="flex gap-2 px-4 pb-3.5 pt-[18px]">
        <Chip selected count={6}>All</Chip>
        <Chip count={2}>Pending</Chip>
        <Chip count={3}>Settled</Chip>
        <Chip count={1}>Disputed</Chip>
      </div>

      <Card padding={0} className="mx-4 overflow-hidden">
        {EXPENSES.map((e, i) => (
          <div key={e.title} className={`ex-row flex items-start gap-3 px-4 py-3.5 ${i > 0 ? "border-t-[0.5px] border-hairline" : ""}`}>
            <IconTile icon={e.icon} tint={e.color} bg={`${e.color}22`} size={46} />
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-[15px] tracking-[-0.2px] text-ink">{e.title}</p>
              <p className="mt-0.5 text-[12px] text-ink-3">{e.meta}</p>
              {e.status === "pending" || e.receipt ? (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {e.receipt ? (
                    <span className="flex h-7 items-center gap-1 rounded-full bg-frost px-[11px] text-[11px] text-ink-2">
                      <DocumentTextIcon size={12} color="#2A2A31" />
                      Receipt
                    </span>
                  ) : null}
                  {e.status === "pending" ? (
                    <>
                      <span className="flex h-7 items-center rounded-full bg-maria-soft px-[11px] text-[11px] text-maria-deep">Settle</span>
                      <span className="flex h-7 items-center rounded-full bg-danger-soft px-[11px] text-[11px] text-danger">Dispute</span>
                    </>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col items-end gap-1.5 pt-0.5">
              <p className="text-[16px] tracking-[-0.4px] text-ink">${e.amount.toFixed(2)}</p>
              <span className="relative">
                <span className={`status-${e.status} inline-block rounded-full px-2.5 py-[5px] text-[11px] ${STATUS[e.status]}`}>
                  {e.status}
                </span>
              </span>
            </div>
          </div>
        ))}
      </Card>
      {tabBar ? <TabBar active={2} /> : null}
    </div>
  );
}

// ── Records › Transfer Notes ─────────────────────────────────

const PRIO = {
  urgent: { pill: "bg-danger-soft text-danger", tint: "#F04438", bg: "#FDECEA" },
  important: { pill: "bg-warn-soft text-warn-deep", tint: "#A15C07", bg: "#FEF3E2" },
  fyi: { pill: "bg-sky-soft text-sky-deep", tint: "#1A5BCC", bg: "#E5EFFF" },
};

const NOTES = [
  {
    cat: "Health",
    icon: HeartIcon,
    prio: "urgent" as const,
    title: "Antibiotics until Sunday",
    body: "One spoonful with breakfast and dinner. The bottle is in the front pocket of her backpack.",
    author: { name: "James", initials: "J", tone: "bg-james-soft text-james-deep" },
    when: "2h ago",
    acked: false,
  },
  {
    cat: "School",
    icon: SquareAcademicCapIcon,
    prio: "important" as const,
    title: "Reading log due Friday",
    body: "Two pages a night. She's on chapter 4. The log is in the blue folder.",
    author: { name: "Sarah", initials: "S", tone: "bg-maria-soft text-maria-deep" },
    when: "Yesterday",
    acked: true,
  },
  {
    cat: "Activity",
    icon: FootballIcon,
    prio: "fyi" as const,
    title: "New swim goggles",
    body: "The old pair snapped. New ones are in the swim bag.",
    author: { name: "James", initials: "J", tone: "bg-james-soft text-james-deep" },
    when: "Mon",
    acked: true,
  },
];

export function NotesScreen({ tabBar = true }: ScreenProps) {
  return (
    <div className="absolute inset-0 bg-canvas">
      <SubScreenHeader
        title="Transfer Notes"
        subtitle="Pass-the-iceberg log · 4 notes"
        back={AltArrowLeftIcon}
        right={<RoundButton icon={AddIcon} accent />}
      />
      <div className="flex gap-2 overflow-hidden px-4 pb-3.5">
        <Chip selected count={4}>All notes</Chip>
        <Chip count={1}>Health</Chip>
        <Chip count={1}>School</Chip>
        <Chip count={1}>Activity</Chip>
      </div>
      {NOTES.map((n) => {
        const p = PRIO[n.prio];
        const mine = n.author.name === "Sarah";
        return (
          <Card key={n.title} className="mx-4 mb-3">
            <div className="mb-3 flex items-center gap-2.5">
              <IconTile icon={n.icon} tint={p.tint} bg={p.bg} size={34} />
              <div className="flex-1">
                <Eyebrow>{n.cat}</Eyebrow>
              </div>
              <StatusPill label={n.prio} className={p.pill} />
              {!mine ? <MenuDotsCircleIcon size={18} color="#6B6B76" /> : null}
            </div>
            <p className="mb-1.5 text-[17px] leading-[23px] tracking-[-0.3px] text-ink">{n.title}</p>
            <p className="text-[14px] leading-5 text-ink-3">{n.body}</p>
            <div className="mt-3.5 flex items-center justify-between gap-2 border-t-[0.5px] border-hairline pt-3">
              <div className="flex min-w-0 items-center gap-2">
                <InitialsAvatar initials={n.author.initials} size={24} className={n.author.tone} />
                <span className="truncate text-[12px] text-ink-3">
                  {n.author.name} · {n.when}
                </span>
              </div>
              {n.acked ? (
                <span className="flex h-[30px] items-center gap-1 rounded-full bg-maria-soft px-3 text-[12px] text-maria-deep">
                  <CheckCircleIcon size={12} color="#0D7A52" />
                  Acknowledged
                </span>
              ) : (
                <span className="flex h-[30px] items-center gap-1 rounded-full bg-ink px-3 text-[12px] text-white">
                  <CheckIcon size={12} color="#FFFFFF" />
                  Acknowledge
                </span>
              )}
            </div>
          </Card>
        );
      })}
      {tabBar ? <TabBar active={2} /> : null}
    </div>
  );
}
