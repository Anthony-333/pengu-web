import Image from "next/image";
import heroPhoto from "@/public/images/nathan-dumlao-Wr3comVZJxU-unsplash.jpg";
import { Phone } from "./phone/Phone";
import { HomeScreen } from "./phone/screens";
import { StoreButtons } from "./StoreButtons";
import { delay } from "./motion";

/**
 * The phone plays `public/video/app-tour.*`, rendered from the HyperFrames
 * composition in `video/` (`npm run render` there). The static HomeScreen
 * underneath is its first frame, so the swap is invisible — and it is what
 * reduced-motion visitors see, since the video is hidden for them.
 */
function AppTourVideo() {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/video/app-tour-poster.jpg"
      aria-label="Pengu app tour: home, custody schedule and shared expenses"
    >
      <source src="/video/app-tour.webm" type="video/webm" />
      <source src="/video/app-tour.mp4" type="video/mp4" />
    </video>
  );
}

export function Hero() {
  return (
    <section className="relative px-2 pt-2 sm:px-3 sm:pt-3">
      {/* Photo stage */}
      <div className="absolute inset-x-2 top-2 bottom-[150px] overflow-hidden rounded-[28px] sm:inset-x-3 sm:top-3 sm:bottom-[190px] sm:rounded-[36px] lg:bottom-[230px]">
        <Image
          src={heroPhoto}
          alt="A father laughing with his two young children outdoors"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="ken-burns object-cover object-[50%_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/35 to-ink/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgb(255_90_60/0.28),transparent_60%)]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-28 text-center sm:pt-32">
        <div className="hero-exit flex flex-col items-center">
          <span className="rise glass mb-7 inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-medium text-white sm:text-sm">
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold">New</span>
            Custody schedules both parents approve
          </span>

          <h1
            className="rise max-w-4xl text-[44px] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-7xl lg:text-[80px]"
            style={delay(120)}
          >
            Two homes.
            <br />
            <span className="text-white/70">One calm nest.</span>
          </h1>

          <p
            className="rise mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
            style={delay(240)}
          >
            The custody calendar, shared expenses, handover notes and family memories,
            in one private place you and your co-parent both trust.
          </p>

          <div className="rise mt-9" style={delay(360)}>
            <StoreButtons tone="onDark" />
          </div>
        </div>

        {/* Phone + floating chips */}
        <div className="relative mt-12 sm:mt-14">
          <div className="phone-in" style={delay(450)}>
            <div className="absolute -inset-10 -z-10 rounded-full bg-accent/30 blur-3xl" />
            <Phone className="[--s:0.68] sm:[--s:0.76] lg:[--s:0.8]" overlay={<AppTourVideo />}>
              <HomeScreen />
            </Phone>
          </div>

          <FloatingChip
            className="-left-56 top-24 lg:-left-72"
            delayMs={900}
            icon="🚗"
            iconBg="bg-james-soft"
            title="Handover · Fri 6:00 PM"
            sub="Both calendars updated"
          />
          <FloatingChip
            className="-right-56 top-56 lg:-right-72"
            delayMs={1100}
            icon="✓"
            iconBg="bg-maria-soft text-maria-deep font-bold"
            title="Dentist visit settled"
            sub="$240 · split 50/50"
          />
          <FloatingChip
            className="-left-48 top-[400px] lg:-left-60"
            delayMs={1300}
            icon="📝"
            iconBg="bg-accent-soft"
            title="Note seen by James"
            sub="Antibiotics until Sunday"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingChip({
  className,
  delayMs,
  icon,
  iconBg,
  title,
  sub,
}: {
  className: string;
  delayMs: number;
  icon: string;
  iconBg: string;
  title: string;
  sub: string;
}) {
  return (
    <div
      className={`rise absolute hidden md:block ${className}`}
      style={delay(delayMs)}
    >
      <div className="float" style={delay(delayMs)}>
        <div className="flex items-center gap-3 rounded-2xl bg-paper/95 py-3 pl-3 pr-5 text-left shadow-[0_20px_50px_-12px_rgb(14_14_18/0.35)] backdrop-blur">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl text-base ${iconBg}`}>
            {icon}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{title}</p>
            <p className="text-xs text-ink-3">{sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
