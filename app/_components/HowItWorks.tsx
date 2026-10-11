import { WaveDivider } from "./WaveDivider";

const steps = [
  {
    number: "01",
    icon: "🐧",
    title: "Create your nest",
    desc: "Sign up and set your name and colour. Your nest is your family's private shared space — no one else can see in.",
  },
  {
    number: "02",
    icon: "✉️",
    title: "Invite your co-parent",
    desc: "Send your co-parent an invite by email or share a join code. They're in the moment they accept — no approval delay.",
  },
  {
    number: "03",
    icon: "🎉",
    title: "Start sharing",
    desc: "Add your children, set the custody pattern, and start logging expenses, uploading memories, and chatting — all in one place.",
  },
];

export function HowItWorks() {
  return (
    <>
      <WaveDivider topColor="#FAFAF4" bottomColor="#EEE8DC" />
      <section id="how-it-works" className="bg-cream-dark py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-amber uppercase tracking-widest mb-3">
              Simple as 1, 2, 3
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal tracking-tight leading-tight mb-4">
              Up and running{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C8893A 0%, #9E6B28 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                in minutes.
              </span>
            </h2>
            <p className="text-charcoal-lighter text-lg max-w-md mx-auto">
              No complicated setup. No IT department required.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px border-t-2 border-dashed border-sage/30 z-0" />

            {steps.map((step, idx) => (
              <div key={step.number} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                {/* Number + icon */}
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-3xl border border-charcoal/5">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-charcoal text-cream text-[11px] font-black flex items-center justify-center leading-none">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal-lighter leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-charcoal text-cream font-semibold text-base hover:bg-charcoal-light transition-all duration-200 shadow-lg shadow-charcoal/20"
            >
              Get started free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <p className="text-sm text-charcoal-lighter mt-3">Free to download · No credit card needed</p>
          </div>
        </div>
      </section>
      <WaveDivider topColor="#EEE8DC" bottomColor="#FAFAF4" />
    </>
  );
}
