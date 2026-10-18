import Image from "next/image";
import reading from "@/public/images/vitaly-gariev-kNzJZSAMaxc-unsplash.jpg";
import { Phone } from "./phone/Phone";
import { HomeScreen } from "./phone/screens";
import { StoreButtons } from "./StoreButtons";

export function Download() {
  return (
    <section id="download" className="scroll-mt-24 px-2 pb-2 pt-24 sm:px-3 sm:pb-3 sm:pt-32">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
        <div className="parallax absolute inset-0">
          <Image src={reading} alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div className="reveal text-center lg:text-left">
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
              Start your nest
              <br />
              tonight.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg leading-relaxed text-white/80 lg:mx-0">
              Download Pengu and invite your co-parent. Your first month of the full app is
              free.
            </p>
            <div className="mt-9 flex justify-center lg:justify-start">
              <StoreButtons tone="onDark" />
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70 lg:justify-start">
              {["1-month free trial", "Cancel anytime", "Private to your nest"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal-scale hidden justify-center lg:flex">
            <div className="float">
              <Phone className="[--s:0.64]">
                <HomeScreen />
              </Phone>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
