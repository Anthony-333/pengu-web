import Link from "next/link";
import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

/**
 * Facts both legal pages state. The bracketed values are placeholders that
 * must be filled in before launch — they render verbatim until then.
 */
export const LEGAL = {
  effectiveDate: "October 18, 2026",
  company: "[Company legal name]",
  address: "[Registered business address]",
  jurisdiction: "[State / country]",
  contactEmail: "hello@penguapp.com",
} as const;

type TocItem = { id: string; label: string };

export function LegalPage({
  title,
  intro,
  toc,
  children,
}: {
  title: string;
  intro: ReactNode;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="bg-canvas pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-xs font-semibold text-accent-ink uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-ink tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-sm text-ink-3 mb-8">
            Effective {LEGAL.effectiveDate}
          </p>
          <div className="text-lg text-ink-2 leading-relaxed mb-10">{intro}</div>

          <nav
            aria-label="On this page"
            className="rounded-2xl bg-paper border border-hairline p-6 mb-14"
          >
            <p className="text-xs font-semibold text-ink uppercase tracking-widest mb-4">
              On this page
            </p>
            <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-2 list-decimal list-inside text-sm text-ink-3">
              {toc.map((item) => (
                <li key={item.id}>
                  <Link href={`#${item.id}`} className="hover:text-ink transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>

          <article className="space-y-12 text-ink-2 leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-4 [&_strong]:text-ink [&_strong]:font-semibold [&_a]:text-accent-ink [&_a]:underline [&_a]:underline-offset-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-3">
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-ink tracking-tight mb-4">{title}</h2>
      {children}
    </section>
  );
}
