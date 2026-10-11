import { WaveDivider } from "./WaveDivider";

const features = [
  {
    icon: "📅",
    title: "Custody Calendar",
    desc: "See who has the kids at a glance. The 2-2-3, week-on/off, and 5-2-2-5 patterns are built right in.",
    color: "bg-white/20",
  },
  {
    icon: "💰",
    title: "50/50 Expenses",
    desc: "Log any shared cost — medical, school, activities — and split it fairly. Receipt photos included.",
    color: "bg-amber/20",
  },
  {
    icon: "📸",
    title: "Shared Photo Wall",
    desc: "Upload photos and videos to a private wall only co-parents can see. Every milestone, shared.",
    color: "bg-white/20",
  },
  {
    icon: "💬",
    title: "Family Chat",
    desc: "Coordinate drop-offs, school updates, and anything else — without switching between apps.",
    color: "bg-amber/20",
  },
  {
    icon: "📋",
    title: "Activity Log",
    desc: "Every meal, doctor visit, and notable moment logged and visible to both parents in real time.",
    color: "bg-white/20",
  },
  {
    icon: "📝",
    title: "Handoff Notes",
    desc: "Leave a note at every transfer — medication reminders, moods, what they ate. Never forgotten.",
    color: "bg-amber/20",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-sage">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-20">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-2 mb-5">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.6" aria-hidden="true">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
            </svg>
            <span className="text-sm font-semibold text-cream/70 tracking-widest uppercase">Features</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" opacity="0.6" aria-hidden="true">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-cream leading-tight tracking-tight mb-4">
            One nest.{" "}
            <span className="text-amber-light">Everything</span> in it.
          </h2>
          <p className="text-sage-light text-lg max-w-xl mx-auto leading-relaxed">
            You can feel confident leaving your children's world in one place.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={`${f.color} backdrop-blur-sm rounded-2xl p-6 border border-white/15 hover:border-white/30 transition-all duration-200 group`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {f.icon}
              </div>
              <h3 className="text-cream font-bold text-base mb-2">{f.title}</h3>
              <p className="text-sage-light text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider topColor="#7B9E87" bottomColor="#FAFAF4" flip />
    </section>
  );
}
