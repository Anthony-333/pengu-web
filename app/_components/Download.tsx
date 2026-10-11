import { PenguLogo } from "./PenguLogo";

export function Download() {
  return (
    <section id="download" className="bg-charcoal py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Penguin icon */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-3xl bg-cream/10 flex items-center justify-center">
            <PenguLogo size={52} />
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-cream tracking-tight leading-tight mb-6">
          Ready to simplify{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #A8C4AF 0%, #7B9E87 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            co-parenting?
          </span>
        </h2>

        <p className="text-cream/60 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Download Pengu free today. Your co-parent can join with a single invite — no separate signup headaches.
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-cream text-charcoal hover:bg-cream-dark transition-all duration-200 shadow-xl shadow-black/30 min-w-[200px]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[11px] text-charcoal/60">Download on the</div>
              <div className="text-base font-bold">App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl border-2 border-cream/20 text-cream hover:bg-cream/5 transition-all duration-200 min-w-[200px]"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3.18 23.76c.35.19.76.21 1.15.04l11.62-6.57-2.4-2.4-10.37 8.93zM.5 1.77C.19 2.13 0 2.67 0 3.38v17.24c0 .71.19 1.25.5 1.61l.08.08 9.65-9.65v-.22L.58 1.69.5 1.77zM20.37 10.25l-2.6-1.47-2.68 2.68 2.68 2.68 2.63-1.49c.75-.43.75-1.12-.03-1.4zM4.33.2L15.95 6.77l-2.4 2.4L3.18.24C3.57.07 3.98.08 4.33.2z" />
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[11px] text-cream/60">Get it on</div>
              <div className="text-base font-bold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Reassurance pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            "Free to download",
            "No credit card needed",
            "Your data stays private",
            "Cancel anytime",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream/8 border border-cream/10"
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="#A8C4AF" strokeWidth="1.5" />
                <path d="M5 8L7 10L11 6" stroke="#A8C4AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs text-cream/60 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
