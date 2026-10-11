import { Phone, CalendarScreenMockup, ExpenseScreenMockup, HomeScreenMockup } from "./PhoneMockup";

const showcaseItems = [
  {
    screen: "calendar",
    tag: "Custody Calendar",
    headline: "Always know who has the kids.",
    body: `Set up your co-parenting schedule once — 2-2-3, week-on/off, or custom — and every switch is automatically on both parents' calendars. No more texts asking "is Emma with you?"`,
    bullets: [
      "Visual week and month views",
      "Custody switch reminders",
      "Holiday and exception handling",
    ],
    accent: "sage",
  },
  {
    screen: "expense",
    tag: "Shared Expenses",
    headline: "50/50, down to the cent.",
    body: "Log any shared cost from medical bills to school supplies. Pengu calculates each parent's share, tracks who's paid, and keeps a running ledger both parents can see.",
    bullets: [
      "Snap a receipt photo to attach",
      "Settle or dispute in one tap",
      "Monthly summary report",
    ],
    accent: "amber",
  },
  {
    screen: "home",
    tag: "Family Hub",
    headline: "The one app you'll both actually use.",
    body: "Chat, activity log, handoff notes, and a shared photo wall — all in one place. When everything is in Pengu, neither parent has to wonder what happened while the kids were with the other.",
    bullets: [
      "Shared photo wall, private to co-parents",
      "Activity log — meals, moods, doctors",
      "Transfer notes at every handoff",
    ],
    accent: "sage",
  },
];

function ScreenByType({ type }: { type: string }) {
  if (type === "calendar") return <CalendarScreenMockup />;
  if (type === "expense") return <ExpenseScreenMockup />;
  return <HomeScreenMockup />;
}

function CheckIcon({ accent }: { accent: string }) {
  const color = accent === "sage" ? "#7B9E87" : "#C8893A";
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="8" fill={color} opacity="0.15" />
      <path d="M4.5 8L7 10.5L11.5 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AppShowcase() {
  return (
    <section className="bg-cream py-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {showcaseItems.map((item, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={item.tag}
              className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20 py-20 ${
                idx < showcaseItems.length - 1 ? "border-b border-charcoal/6" : ""
              }`}
            >
              {/* Phone */}
              <div className="relative flex justify-center lg:flex-1">
                {/* Background blob */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-15 pointer-events-none"
                  style={{
                    background:
                      item.accent === "sage"
                        ? "radial-gradient(ellipse, #7B9E87, transparent 70%)"
                        : "radial-gradient(ellipse, #C8893A, transparent 70%)",
                  }}
                />
                <Phone>
                  <ScreenByType type={item.screen} />
                </Phone>
              </div>

              {/* Content */}
              <div className={`flex-1 max-w-lg ${isReversed ? "" : ""}`}>
                {/* Tag */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 tracking-wide"
                  style={{
                    background: item.accent === "sage" ? "#7B9E87" + "22" : "#C8893A" + "22",
                    color: item.accent === "sage" ? "#5A7A66" : "#9E6B28",
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: item.accent === "sage" ? "#7B9E87" : "#C8893A" }}
                  />
                  {item.tag}
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal tracking-tight leading-[1.1] mb-5">
                  {item.headline}
                </h2>
                <p className="text-charcoal-lighter leading-relaxed text-lg mb-8">{item.body}</p>

                <ul className="space-y-3">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <CheckIcon accent={item.accent} />
                      <span className="text-charcoal font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
