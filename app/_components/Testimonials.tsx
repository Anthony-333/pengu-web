import { WaveDivider } from "./WaveDivider";

const reviews = [
  {
    text: "Pengu changed how we co-parent. No more missed pickups or disputed expenses. Everything is in one place and we both can see it.",
    name: "Alena B.",
    role: "Mother of two",
    initials: "AB",
    color: "bg-sage",
    rating: 5,
  },
  {
    text: "The custody calendar alone is worth it. My ex and I finally agree on the schedule because we're both looking at exactly the same thing.",
    name: "Marcus T.",
    role: "Co-parent, dad of one",
    initials: "MT",
    color: "bg-amber",
    rating: 5,
  },
  {
    text: "The expense tracker removed so many arguments from our lives. Everything is transparent, fair, and automatically split. I can't imagine going back.",
    name: "Jamie K.",
    role: "Parent of three",
    initials: "JK",
    color: "bg-sage-dark",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#C8893A" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <>
      <WaveDivider topColor="#FAFAF4" bottomColor="#F2E0C4" />
      <section id="reviews" className="bg-amber-light py-20">
        {/* Scatter doodle */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-charcoal tracking-tight leading-tight mb-4">
              Kind words{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #C8893A 0%, #9E6B28 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                from families.
              </span>
            </h2>
            <p className="text-charcoal-lighter text-lg max-w-md mx-auto">
              Nothing means more than the trust families place in Pengu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="bg-white rounded-3xl p-7 shadow-sm border border-amber/10 flex flex-col gap-5"
              >
                <Stars count={r.rating} />
                <p className="text-charcoal leading-relaxed flex-1">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-charcoal/5">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-cream text-sm font-bold shrink-0`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm">{r.name}</p>
                    <p className="text-xs text-charcoal-lighter">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* App Store aggregate */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-black text-charcoal">4.9</p>
              <div className="flex gap-0.5 justify-center my-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C8893A" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-charcoal-lighter">App Store</p>
            </div>
            <div className="w-px h-12 bg-charcoal/10" />
            <div>
              <p className="text-3xl font-black text-charcoal">4.8</p>
              <div className="flex gap-0.5 justify-center my-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#C8893A" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-charcoal-lighter">Google Play</p>
            </div>
            <div className="w-px h-12 bg-charcoal/10" />
            <div>
              <p className="text-3xl font-black text-charcoal">2,400+</p>
              <p className="text-xs text-charcoal-lighter mt-2">Families using Pengu</p>
            </div>
          </div>
        </div>
      </section>
      <WaveDivider topColor="#F2E0C4" bottomColor="#2D2D2D" />
    </>
  );
}
