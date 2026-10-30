import { AltArrowLeftIcon } from "@solar-icons/react/line-duotone/alt-arrow-left";
import { AltArrowRightIcon } from "@solar-icons/react/line-duotone/alt-arrow-right";
import { LetterIcon } from "@solar-icons/react/line-duotone/letter";
import { LockIcon } from "@solar-icons/react/line-duotone/lock";
import { MagnifierIcon } from "@solar-icons/react/line-duotone/magnifier";
import { UsersGroupRoundedIcon } from "@solar-icons/react/line-duotone/users-group-rounded";
import { TabBar, type ScreenProps } from "./Phone";
import { Card, IconTile, SectionHeader, SubScreenHeader } from "./ui";

/** iOS switch, coral when on (the app's `trackColor`). */
function Switch({ on }: { on: boolean }) {
  return (
    <span className={`relative h-[31px] w-[51px] shrink-0 rounded-full ${on ? "bg-accent" : "bg-frost"}`}>
      <span
        className="absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-[0_3px_8px_rgb(0_0_0/0.15)]"
        style={{ left: on ? 22 : 2 }}
      />
    </span>
  );
}

const TOGGLES = [
  { icon: LetterIcon, title: "Show my email to co-parents", sub: "Shown on your row in Co-parents & family", on: false },
  { icon: MagnifierIcon, title: "Let people find me by email", sub: "Invites still arrive when this is off", on: true },
  { icon: LockIcon, title: "Hide content in notifications", sub: "Keep message text off your lock screen", on: true },
];

// Limited members: roles from convex/family.ts, access text from accessSummary().
const MEMBERS = [
  { initials: "D", name: "Dave", meta: "Step-parent · Calendar, Handoff notes", tone: "bg-sky" },
  { initials: "R", name: "Nana Ruth", meta: "View-only · Calendar, Memories · view-only", tone: "bg-lily" },
];

/** Account › Privacy & sharing (pengu/src/screens/Privacy.tsx). */
export function PrivacyScreen({ tabBar = true }: ScreenProps) {
  return (
    <div className="absolute inset-0 bg-canvas">
      <SubScreenHeader title="Privacy & sharing" subtitle="Control what crosses between homes" back={AltArrowLeftIcon} />
      <SectionHeader title="About you" />
      <Card padding={0} className="privacy-toggles mx-4 overflow-hidden px-4">
        {TOGGLES.map((t, i) => (
          <div key={t.title} className={`toggle-row flex items-center gap-3 py-[13px] ${i > 0 ? "border-t-[0.5px] border-hairline" : ""}`}>
            <IconTile icon={t.icon} tint="#0E0E12" bg="#F4F4F7" size={38} />
            <div className="min-w-0 flex-1">
              <p className="text-[15px] tracking-[-0.2px] text-ink">{t.title}</p>
              <p className="mt-0.5 text-[12px] leading-[17px] text-ink-3">{t.sub}</p>
            </div>
            <Switch on={t.on} />
          </div>
        ))}
      </Card>
      <SectionHeader title="Who can read this nest" />
      <Card className="coparents mx-4" padding={16}>
        <div className="flex gap-3">
          <IconTile icon={UsersGroupRoundedIcon} tint="#0E0E12" bg="#EDEDF1" size={38} />
          <div className="flex-1">
            <p className="text-[15px] tracking-[-0.2px] text-ink">2 co-parents · full access</p>
            <p className="mt-1 text-[13px] leading-[19px] text-ink-3">Sarah and James can see everything in Emma&apos;s nest.</p>
          </div>
        </div>
      </Card>
      <p className="mx-5 mb-2 mt-4 text-[11px] uppercase tracking-[1.4px] text-ink-3">Everyone else</p>
      <Card padding={0} className="members mx-4 overflow-hidden">
        {MEMBERS.map((m, i) => (
          <div key={m.name} className={`member-row flex items-center gap-3 px-4 py-[13px] ${i > 0 ? "border-t-[0.5px] border-hairline" : ""}`}>
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[15px] text-white ${m.tone}`}>{m.initials}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[15px] tracking-[-0.2px] text-ink">{m.name}</p>
              <p className="mt-0.5 truncate text-[12px] text-ink-3">{m.meta}</p>
            </div>
            <AltArrowRightIcon size={12} color="#6B6B76" />
          </div>
        ))}
      </Card>
      {tabBar ? <TabBar active={3} /> : null}
    </div>
  );
}
