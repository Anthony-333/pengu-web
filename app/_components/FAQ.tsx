import { SITE, faqs } from "../_lib/site";

/** Same `faqs` as the FAQPage JSON-LD, so the markup always matches what's shown. */
export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 pt-24 sm:pt-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div className="reveal">
          <p className="mb-4 text-sm font-semibold text-accent-ink">Questions</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
            Co-parenting,
            <br />
            <span className="text-ink-3">answered.</span>
          </h2>
          <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink-3">
            Still wondering? Write to{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent-ink underline underline-offset-2">
              {SITE.email}
            </a>
            .
          </p>
        </div>

        <div className="reveal divide-y divide-hairline rounded-3xl bg-paper px-6 sm:px-8">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                <h3>{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-canvas text-ink-3 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl leading-relaxed text-ink-3">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
