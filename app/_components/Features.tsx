import type { ReactNode } from "react";
import { FeatureTour } from "./FeatureTour";
import { Phone } from "./phone/Phone";
import { ExpensesScreen, NotesScreen, ScheduleScreen } from "./phone/screens";
import { MemoriesScreen } from "./phone/MemoriesScreen";

type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  dot: string;
  screen: ReactNode;
};

const features: Feature[] = [
  {
    eyebrow: "Custody calendar",
    title: "Always know who has the kids.",
    body: "Set the pattern once (2-2-3, week on/week off, or your own) and every handover lands on both calendars. When plans change, one parent proposes and the other approves.",
    points: ["Built-in rotation patterns", "Handover reminders", "Syncs to your phone's calendar"],
    dot: "bg-maria",
    screen: <ScheduleScreen />,
  },
  {
    eyebrow: "Shared expenses",
    title: "Money, without the arguments.",
    body: "Log any shared cost, snap the receipt, and Pengu works out each parent's share. Settle or dispute in one tap, with a running ledger you both see.",
    points: ["Receipt photos attached", "Settle or dispute in one tap", "A balance that's always up to date"],
    dot: "bg-lily",
    screen: <ExpensesScreen />,
  },
  {
    eyebrow: "Transfer notes",
    title: "Nothing gets lost at the handover.",
    body: "Leave a note at every handover, like medication, homework or what they ate, and see when your co-parent has acknowledged it. Chat and voice messages live right beside it.",
    points: ["Urgent, important or FYI", "Acknowledged when read", "Health, school and activity filters"],
    dot: "bg-james",
    screen: <NotesScreen />,
  },
  {
    eyebrow: "Memories",
    title: "Every milestone, in both homes.",
    body: "A private photo wall only your nest can see. First steps, school plays, Sunday at the park, kept together no matter whose weekend it was.",
    points: ["Photos and videos", "Tags and reactions", "Private to your nest"],
    dot: "bg-accent",
    screen: <MemoriesScreen />,
  },
];

export function Features() {
  return (
    <section id="features" className="relative pt-24 sm:pt-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold text-accent-ink">Everything in one nest</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
            Built for the space
            <br />
            between two homes.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-3">
            Four tools that replace the group texts, spreadsheets and shoebox of receipts.
          </p>
        </div>
      </div>

      <FeatureTour className="mx-auto mt-10 grid max-w-6xl gap-x-16 px-5 sm:px-8 lg:mt-0 lg:grid-cols-2">
        {/* Steps */}
        <div>
          {features.map((f, i) => (
            <div
              key={f.eyebrow}
              data-step={i}
              className="tour-step flex flex-col justify-center py-14 lg:min-h-[80vh] lg:py-0"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper text-xs font-bold text-ink shadow-sm">
                  0{i + 1}
                </span>
                <span className={`h-2 w-2 rounded-full ${f.dot}`} />
                <span className="text-sm font-semibold text-ink-2">{f.eyebrow}</span>
              </div>
              <h3 className="text-3xl font-bold leading-tight tracking-[-0.025em] text-ink sm:text-[44px]">
                {f.title}
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-3">{f.body}</p>
              <ul className="mt-7 space-y-3">
                {f.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-[15px] font-medium text-ink-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] text-white">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Small screens: each step carries its own phone */}
              <div className="reveal-scale relative mt-12 flex justify-center lg:hidden">
                <div className={`absolute top-1/4 h-64 w-64 rounded-full opacity-25 blur-3xl ${f.dot}`} />
                <Phone className="[--s:0.68]">{f.screen}</Phone>
              </div>
            </div>
          ))}
        </div>

        {/* Large screens: one sticky phone that swaps screens */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center justify-center">
            <div className="tour-glow absolute h-[420px] w-[420px] rounded-full opacity-25 blur-[100px]" />
            <Phone className="[--s:0.78]">
              {features.map((f, i) => (
                <div key={f.eyebrow} data-screen={i} className="tour-screen absolute inset-0">
                  {f.screen}
                </div>
              ))}
            </Phone>
          </div>
        </div>
      </FeatureTour>
    </section>
  );
}
