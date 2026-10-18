import Image from "next/image";
import reading from "@/public/images/vitaly-gariev-kNzJZSAMaxc-unsplash.jpg";
import drawing from "@/public/images/vitaly-gariev-inrYL3ffAsQ-unsplash.jpg";
import planner from "@/public/images/estee-janssens-zni0zgb3bkQ-unsplash.jpg";

const steps = [
  {
    title: "Create your nest",
    body: "Sign up, pick your color and add your child. Your nest is a private space only the people you invite can see into.",
    photo: drawing,
    alt: "A mother drawing with her son at home",
    chip: { icon: "🪺", label: "Emma's nest created", bg: "bg-lily-soft" },
  },
  {
    title: "Invite your co-parent",
    body: "Send an invite by email or read out a join code. You choose their role and what they can see.",
    photo: reading,
    alt: "A father reading a book with his son",
    chip: { icon: "✉️", label: "James joined your nest", bg: "bg-james-soft" },
  },
  {
    title: "Share the load",
    body: "Set the custody pattern, then start logging expenses, notes and memories. Both of you see the same thing, as it happens.",
    photo: planner,
    alt: "A hand-drawn monthly calendar in a planner, with a yellow marker",
    chip: { icon: "📅", label: "Schedule approved", bg: "bg-maria-soft" },
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-2 sm:px-3">
      <div className="rounded-[28px] bg-paper py-24 sm:rounded-[36px] sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="reveal mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold text-accent-ink">How it works</p>
              <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl">
                Set up in minutes.
                <br />
                <span className="text-ink-3">Calmer for years.</span>
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-ink-3">
              No complicated setup. Your co-parent joins with one invite, with no separate
              sign-up hoops.
            </p>
          </div>

          <ol className="grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal group">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src={s.photo}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper text-sm font-bold text-ink">
                    {i + 1}
                  </span>
                  <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-2xl bg-paper/95 p-3 shadow-lg backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.chip.bg}`}>
                      {s.chip.icon}
                    </span>
                    <span className="text-sm font-semibold text-ink">{s.chip.label}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold tracking-tight text-ink">{s.title}</h3>
                <p className="leading-relaxed text-ink-3">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
