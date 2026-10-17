import { WaveDivider } from "./WaveDivider";
import { DemoScreenVideo, Phone } from "./PhoneMockup";


function AppStoreBadge({ store }: { store: "ios" | "android" }) {
  const isIos = store === "ios";
  return (
    <a
      href="#download"
      className={`flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-200 ${
        isIos
          ? "bg-charcoal text-cream hover:bg-charcoal-light shadow-lg shadow-charcoal/20"
          : "bg-cream border-2 border-charcoal/12 text-charcoal hover:bg-cream-dark shadow-md"
      }`}
    >
      {isIos ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.18 23.76c.35.19.76.21 1.15.04l11.62-6.57-2.4-2.4-10.37 8.93zM.5 1.77C.19 2.13 0 2.67 0 3.38v17.24c0 .71.19 1.25.5 1.61l.08.08 9.65-9.65v-.22L.58 1.69.5 1.77zM20.37 10.25l-2.6-1.47-2.68 2.68 2.68 2.68 2.63-1.49c.75-.43.75-1.12-.03-1.4zM4.33.2L15.95 6.77l-2.4 2.4L3.18.24C3.57.07 3.98.08 4.33.2z" />
        </svg>
      )}
      <div className="text-left leading-tight">
        <div className="text-[10px] opacity-70">{isIos ? "Download on the" : "Get it on"}</div>
        <div className="text-sm font-bold">{isIos ? "App Store" : "Google Play"}</div>
      </div>
    </a>
  );
}

/* Decorative SVG doodles */
function Doodles() {
  return (
    <>
      {/* Top-left star */}
      <svg
        className="absolute top-28 left-8 opacity-50 hidden lg:block"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M16 2L18.5 12.5L29 10L21.5 18L29 26L18.5 23.5L16 34L13.5 23.5L3 26L10.5 18L3 10L13.5 12.5L16 2Z"
          stroke="#7B9E87"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
      {/* Top-right blob */}
      <svg
        className="absolute top-24 right-12 opacity-30 hidden lg:block"
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="#C8893A"
        aria-hidden="true"
      >
        <path d="M30 5C44 5 55 16 55 30C55 44 44 55 30 55C16 55 5 44 5 30C5 16 16 5 30 5Z" />
      </svg>
      {/* Bottom-left scatter dots */}
      <svg
        className="absolute bottom-20 left-6 opacity-40 hidden xl:block"
        width="60"
        height="50"
        viewBox="0 0 60 50"
        aria-hidden="true"
      >
        {[
          [8, 8], [20, 18], [5, 32], [30, 8], [42, 22], [15, 44], [48, 38],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#7B9E87" opacity="0.6" />
        ))}
      </svg>
      {/* Right doodle leaf */}
      <svg
        className="absolute top-1/2 right-4 -translate-y-1/2 opacity-25 hidden xl:block"
        width="40"
        height="56"
        viewBox="0 0 40 56"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M20 4C30 14 36 24 36 34C36 46 28 52 20 52C12 52 4 46 4 34C4 24 10 14 20 4Z"
          stroke="#7B9E87"
          strokeWidth="2"
          fill="none"
        />
        <line x1="20" y1="52" x2="20" y2="4" stroke="#7B9E87" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
      {/* Bottom right small star */}
      <svg
        className="absolute bottom-28 right-8 opacity-50 hidden lg:block"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2L13.5 9.5L21 8L15.5 13.5L21 19L13.5 17.5L12 25L10.5 17.5L3 19L8.5 13.5L3 8L10.5 9.5L12 2Z"
          stroke="#C8893A"
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
}

export function Hero() {
  return (
    <section className="relative bg-cream pt-28 pb-0 overflow-hidden min-h-screen flex flex-col">
      <Doodles />

      <div className="flex-1 max-w-6xl mx-auto w-full px-5 sm:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 pb-16">
        {/* Left: Copy */}
        <div className="flex-1 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sage/40 bg-sage/8 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            <span className="text-xs font-semibold text-sage-dark tracking-wide">
              Available on iOS &amp; Android
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-charcoal leading-[1.05] tracking-tight mb-6">
            Co-parenting,{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #7B9E87 0%, #5A7A66 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              made
            </span>{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C8893A 0%, #9E6B28 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              beautiful.
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-charcoal-lighter leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            One nest for the custody calendar, shared expenses, family memories, and everything your children share — designed so both parents always stay on the same page.
          </p>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <AppStoreBadge store="ios" />
            <AppStoreBadge store="android" />
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="relative lg:flex-1 flex justify-center items-center">
          {/* Glow blob behind phone */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #7B9E87 0%, #C8893A 50%, transparent 80%)" }}
          />
          <Phone>
            <DemoScreenVideo />
          </Phone>
        </div>
      </div>

      {/* Wavy divider */}
      <WaveDivider topColor="#FAFAF4" bottomColor="#7B9E87" />
    </section>
  );
}
