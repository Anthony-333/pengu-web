import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import photo from "@/public/images/vitaly-gariev-inrYL3ffAsQ-unsplash.jpg";
import { Nav } from "../_components/Nav";
import { Footer } from "../_components/Footer";
import { Phone } from "../_components/phone/Phone";
import { HomeScreen } from "../_components/phone/screens";
import { AppleIcon } from "../_components/StoreButtons";
import { delay } from "../_components/motion";
import { SITE } from "../_lib/site";

/**
 * Where the App Store button lands until `SITE.appStoreUrl` is set. Kept out
 * of search results: it's a placeholder, not content.
 */
export const metadata: Metadata = {
  title: "Coming soon to the App Store",
  description: "Pengu for iPhone is almost here. Email us and we'll let you know the day it's live.",
  alternates: { canonical: "/coming-soon" },
  robots: { index: false, follow: true },
};

const notify = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Tell me when Pengu is on the App Store",
)}`;

export default function ComingSoonPage() {
  return (
    <>
      <Nav />
      <main className="px-2 pt-2 sm:px-3 sm:pt-3">
        <section className="relative overflow-hidden rounded-[28px] sm:rounded-[36px]">
          <Image
            src={photo}
            alt=""
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="ken-burns object-cover object-[60%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/75 to-ink/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgb(142_134_240/0.32),transparent_60%)]" />

          <div className="relative mx-auto grid min-h-[calc(100svh-1rem)] max-w-6xl items-center gap-12 px-6 pt-32 pb-20 sm:px-10 lg:grid-cols-[1.2fr_1fr] lg:pt-28">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="rise glass mb-7 inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-4 text-xs font-medium text-white sm:text-sm">
                <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-semibold">
                  <AppleIcon size={11} />
                  iPhone
                </span>
                Coming soon
              </span>

              <h1
                className="rise max-w-xl text-[44px] font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[64px]"
                style={delay(120)}
              >
                Almost on the
                <br />
                <span className="text-white/70">App Store.</span>
              </h1>

              <p
                className="rise mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
                style={delay(240)}
              >
                We&rsquo;re putting the finishing touches on Pengu for iPhone. Want a
                heads-up? Email us and we&rsquo;ll write back the day it&rsquo;s ready to
                download.
              </p>

              <div
                className="rise mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
                style={delay(360)}
              >
                <a
                  href={notify}
                  className="rounded-full bg-paper px-6 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-snow"
                >
                  Email me when it&rsquo;s live
                </a>
                <Link
                  href="/"
                  className="glass rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
                >
                  Back to home
                </Link>
              </div>
            </div>

            <div className="relative hidden justify-center lg:flex">
              <div className="phone-in" style={delay(450)}>
                <div className="absolute -inset-10 -z-10 rounded-full bg-accent/30 blur-3xl" />
                <div className="float">
                  <Phone className="[--s:0.64] xl:[--s:0.7]">
                    <HomeScreen />
                  </Phone>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
