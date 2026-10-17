/* Stylised Pengu home-screen mockup — no real screenshots needed */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 pb-1">
      <span className="text-[9px] font-semibold text-charcoal/80">9:41</span>
      <div className="flex items-center gap-1">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
          <rect x="0" y="4" width="2" height="4" rx="0.5" fill="#2D2D2D" opacity="0.4"/>
          <rect x="3" y="2.5" width="2" height="5.5" rx="0.5" fill="#2D2D2D" opacity="0.6"/>
          <rect x="6" y="1" width="2" height="7" rx="0.5" fill="#2D2D2D"/>
          <rect x="9" y="0" width="2" height="8" rx="0.5" fill="#2D2D2D"/>
        </svg>
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
          <path d="M5 1.5C6.8 1.5 8.4 2.3 9.5 3.5L10 3C8.7 1.7 6.9 0.9 5 0.9C3.1 0.9 1.3 1.7 0 3L0.5 3.5C1.6 2.3 3.2 1.5 5 1.5Z" fill="#2D2D2D" opacity="0.4"/>
          <path d="M5 3C6.1 3 7.2 3.5 7.9 4.3L8.4 3.8C7.5 2.8 6.3 2.2 5 2.2C3.7 2.2 2.5 2.8 1.6 3.8L2.1 4.3C2.8 3.5 3.9 3 5 3Z" fill="#2D2D2D" opacity="0.7"/>
          <circle cx="5" cy="6" r="1.2" fill="#2D2D2D"/>
        </svg>
        <div className="flex items-center gap-0.5">
          <div className="w-4 h-2 border border-charcoal/70 rounded-sm relative">
            <div className="absolute inset-0.5 right-1.5 bg-charcoal rounded-sm" />
          </div>
          <div className="w-0.5 h-1 bg-charcoal/50 rounded-r-sm" />
        </div>
      </div>
    </div>
  );
}

function DynamicIsland() {
  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-charcoal rounded-full z-10" />
  );
}

/* Home screen */
export function HomeScreenMockup() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const custody = [true, true, false, false, true, false, false]; // sage=you, cream=other

  return (
    <div className="relative bg-[#F7F3ED] rounded-[2.6rem] overflow-hidden" style={{ height: "580px" }}>
      <DynamicIsland />
      <StatusBar />

      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2">
        <div>
          <p className="text-[10px] text-charcoal/50 font-medium">Good morning</p>
          <p className="text-sm font-bold text-charcoal">Sarah 🐧</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-amber-light flex items-center justify-center">
            <span className="text-xs">🔔</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-sage-light flex items-center justify-center text-white text-[11px] font-bold">
            S
          </div>
        </div>
      </div>

      {/* Custody Card */}
      <div className="mx-4 mb-3 rounded-2xl bg-charcoal p-3.5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-sage/20 -translate-y-1/2 translate-x-1/2" />
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-1.5 mb-0.5">
              <div className="w-2 h-2 rounded-full bg-sage" />
              <span className="text-[10px] text-cream/60 font-medium">Emma&apos;s week</span>
            </div>
            <p className="text-cream text-xs font-semibold">With you · 3 days left</p>
          </div>
          <div className="text-base">👧</div>
        </div>
        {/* Week strip */}
        <div className="flex gap-1 mt-2">
          {days.map((d, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <span className="text-[8px] text-cream/40 font-medium">{d}</span>
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  i === 2
                    ? "ring-1 ring-amber ring-offset-1 ring-offset-charcoal"
                    : ""
                } ${custody[i] ? "bg-sage" : "bg-cream/15"}`}
              >
                {i === 2 && <div className="w-1.5 h-1.5 rounded-full bg-amber" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick actions row */}
      <div className="flex gap-2 px-4 mb-4">
        {[
          { icon: "💰", label: "Expense" },
          { icon: "📸", label: "Memory" },
          { icon: "💬", label: "Chat" },
          { icon: "📋", label: "Log" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex-1 bg-white rounded-xl py-2 flex flex-col items-center gap-0.5 shadow-sm"
          >
            <span className="text-sm">{item.icon}</span>
            <span className="text-[8px] text-charcoal/60 font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Upcoming */}
      <div className="px-4">
        <p className="text-[10px] font-semibold text-charcoal/50 uppercase tracking-wider mb-2">
          Upcoming
        </p>
        <div className="space-y-1.5">
          {[
            { emoji: "🦷", title: "Dentist appt", sub: "Tue · 10:00 am" },
            { emoji: "💃", title: "Dance class", sub: "Wed · 4:00 pm" },
            { emoji: "🎂", title: "Emma's birthday", sub: "Fri · All day" },
          ].map((ev) => (
            <div
              key={ev.title}
              className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2 shadow-sm"
            >
              <div className="w-7 h-7 rounded-lg bg-sage-light/30 flex items-center justify-center text-xs shrink-0">
                {ev.emoji}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold text-charcoal truncate">{ev.title}</p>
                <p className="text-[9px] text-charcoal/50">{ev.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-charcoal/5 flex items-center justify-around px-4 py-2">
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "📅", label: "Schedule" },
          { icon: "📁", label: "Records" },
          { icon: "👤", label: "Account" },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5 py-1">
            <span className="text-sm">{tab.icon}</span>
            <span
              className={`text-[8px] font-medium ${
                tab.active ? "text-sage-dark" : "text-charcoal/40"
              }`}
            >
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Calendar screen */
export function CalendarScreenMockup() {
  const cells = Array.from({ length: 31 }, (_, i) => i + 1);
  // Simulate custody pattern: 2-2-3 alternating
  const sageDays = new Set([1,2,5,6,7,12,13,16,17,18,23,24,27,28,29]);

  return (
    <div className="relative bg-[#F7F3ED] rounded-[2.6rem] overflow-hidden" style={{ height: "560px" }}>
      <DynamicIsland />
      <StatusBar />

      <div className="px-4 pt-2 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-charcoal/50 font-medium">October 2026</p>
          <p className="text-sm font-bold text-charcoal">Emma&apos;s Schedule</p>
        </div>
        <div className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-xs">
          ＋
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-3 px-4 mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-sage" />
          <span className="text-[9px] text-charcoal/60">Sarah</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-amber-light" />
          <span className="text-[9px] text-charcoal/60">James</span>
        </div>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-px px-4 mb-1">
        {["M","T","W","T","F","S","S"].map((d, i) => (
          <div key={i} className="text-center text-[9px] font-semibold text-charcoal/40">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 px-4">
        {/* offset */}
        {[0,1,2].map(i => <div key={`off-${i}`} />)}
        {cells.map((day) => (
          <div
            key={day}
            className={`aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium ${
              day === 7 /* today */
                ? "bg-charcoal text-cream"
                : sageDays.has(day)
                ? "bg-sage text-white"
                : "bg-amber-light text-charcoal/70"
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* Upcoming event */}
      <div className="mx-4 mt-4 bg-white rounded-2xl p-3 shadow-sm">
        <p className="text-[9px] text-charcoal/50 font-medium mb-1.5">This week</p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-sage-light/30 flex items-center justify-center text-xs">📅</div>
          <div>
            <p className="text-[10px] font-semibold text-charcoal">Custody switch</p>
            <p className="text-[9px] text-charcoal/50">Wed 7 Oct · 6:00 pm</p>
          </div>
        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-charcoal/5 flex items-center justify-around px-4 py-2">
        {[
          { icon: "🏠", label: "Home" },
          { icon: "📅", label: "Schedule", active: true },
          { icon: "📁", label: "Records" },
          { icon: "👤", label: "Account" },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5 py-1">
            <span className="text-sm">{tab.icon}</span>
            <span className={`text-[8px] font-medium ${tab.active ? "text-sage-dark" : "text-charcoal/40"}`}>
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Expense screen */
export function ExpenseScreenMockup() {
  const expenses = [
    { emoji: "🏥", name: "Dentist visit", date: "Oct 3", total: "$240.00", share: "$120.00", status: "pending" },
    { emoji: "👟", name: "New sneakers", date: "Oct 1", total: "$65.00", share: "$32.50", status: "settled" },
    { emoji: "📚", name: "School supplies", date: "Sep 28", total: "$48.50", share: "$24.25", status: "settled" },
  ];

  return (
    <div className="relative bg-[#F7F3ED] rounded-[2.6rem] overflow-hidden" style={{ height: "560px" }}>
      <DynamicIsland />
      <StatusBar />

      <div className="px-4 pt-2 pb-3">
        <p className="text-[10px] text-charcoal/50 font-medium">This month</p>
        <p className="text-sm font-bold text-charcoal">Shared Expenses</p>
      </div>

      {/* Summary card */}
      <div className="mx-4 mb-4 rounded-2xl bg-charcoal p-4">
        <p className="text-[9px] text-cream/50 mb-0.5">Total shared</p>
        <p className="text-xl font-black text-cream mb-3">$353.50</p>
        {/* Split bar */}
        <div className="flex gap-1 mb-2">
          <div className="h-2 rounded-full bg-sage flex-1" />
          <div className="h-2 rounded-full bg-amber" style={{ width: "50%" }} />
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-[8px] text-cream/40">Sarah (you)</p>
            <p className="text-[11px] font-bold text-sage-light">$176.75</p>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-cream/40">James</p>
            <p className="text-[11px] font-bold text-amber-light">$176.75</p>
          </div>
        </div>
      </div>

      {/* Expense list */}
      <div className="px-4 space-y-2">
        <p className="text-[9px] font-semibold text-charcoal/50 uppercase tracking-wider">Recent</p>
        {expenses.map((ex) => (
          <div key={ex.name} className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-cream flex items-center justify-center text-sm shrink-0">
              {ex.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-charcoal">{ex.name}</p>
              <p className="text-[9px] text-charcoal/50">{ex.date} · Your share: {ex.share}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] font-bold text-charcoal">{ex.total}</p>
              <span className={`text-[8px] font-medium px-1.5 py-0.5 rounded-full ${
                ex.status === "settled" ? "bg-sage/20 text-sage-dark" : "bg-amber-light text-amber-dark"
              }`}>
                {ex.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom tab bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-charcoal/5 flex items-center justify-around px-4 py-2">
        {[
          { icon: "🏠", label: "Home" },
          { icon: "📅", label: "Schedule" },
          { icon: "📁", label: "Records", active: true },
          { icon: "👤", label: "Account" },
        ].map((tab) => (
          <div key={tab.label} className="flex flex-col items-center gap-0.5 py-1">
            <span className="text-sm">{tab.icon}</span>
            <span className={`text-[8px] font-medium ${tab.active ? "text-sage-dark" : "text-charcoal/40"}`}>
              {tab.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Animated app tour, rendered from video/index.html with HyperFrames.
   Falls back to the static home screen for reduced-motion users. */
export function DemoScreenVideo() {
  return (
    <>
      <video
        className="block motion-reduce:hidden rounded-[2.6rem] bg-[#F7F3ED]"
        width={260}
        height={580}
        src="/videos/pengu-demo.mp4"
        poster="/videos/pengu-demo-poster.webp"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-label="Pengu app tour: a co-parent's expense notification, the shared custody calendar, and a 50/50 expense split"
      />
      <div className="hidden motion-reduce:block">
        <HomeScreenMockup />
      </div>
    </>
  );
}

/* Phone frame wrapper */
export function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto shrink-0" style={{ width: "280px" }}>
      {/* Outer frame */}
      <div className="relative bg-charcoal rounded-[3rem] p-2.5 shadow-2xl">
        {/* Side buttons */}
        <div className="absolute -left-1 top-24 w-1 h-8 bg-charcoal-light rounded-l-sm" />
        <div className="absolute -left-1 top-36 w-1 h-12 bg-charcoal-light rounded-l-sm" />
        <div className="absolute -left-1 top-52 w-1 h-12 bg-charcoal-light rounded-l-sm" />
        <div className="absolute -right-1 top-32 w-1 h-16 bg-charcoal-light rounded-r-sm" />
        {/* Inner frame / screen bezel */}
        <div className="bg-charcoal rounded-[2.6rem] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
