import Image from "next/image";
import silhouette from "@/public/images/arifur-rahman-yikKOtj3H94-unsplash.jpg";

const reviews = [
  {
    text: "Pengu changed how we co-parent. No more missed pickups or disputed expenses. Everything is in one place and we both can see it.",
    name: "Alena B.",
    role: "Mother of two",
    initials: "AB",
    color: "bg-maria-deep",
  },
  {
    text: "The custody calendar alone is worth it. My ex and I finally agree on the schedule because we're both looking at exactly the same thing.",
    name: "Marcus T.",
    role: "Co-parent, dad of one",
    initials: "MT",
    color: "bg-james-deep",
  },
  {
    text: "The expense tracker removed so many arguments from our lives. Everything is transparent, fair, and automatically split. I can't imagine going back.",
    name: "Jamie K.",
    role: "Parent of three",
    initials: "JK",
    color: "bg-accent-deep",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 px-2 py-2 sm:px-3 sm:py-3">
      <div className="relative overflow-hidden rounded-[28px] bg-ink py-24 sm:rounded-[36px] sm:py-32">
        <div className="parallax absolute inset-0 opacity-40">
          <Image src={silhouette} alt="" fill sizes="100vw" className="object-cover object-[50%_30%]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold text-accent">Stories from the nest</p>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
              Fewer arguments.
              <br />
              <span className="text-white/60">Happier handovers.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="reveal glass-dark flex flex-col rounded-3xl p-7">
                <div className="mb-5 flex gap-0.5 text-lily" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="flex-1 text-lg leading-relaxed text-white/90">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white ${r.color}`}
                  >
                    {r.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-white">{r.name}</span>
                    <span className="block text-xs text-white/60">{r.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
