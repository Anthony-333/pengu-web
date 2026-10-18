import Link from "next/link";
import { PenguLogo } from "./PenguLogo";
import { HideOnScroll } from "./HideOnScroll";

const links = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Stories", href: "/#reviews" },
];

/**
 * A dark glass pill that floats over everything — legible on the hero
 * photo and on the light sections below it. It slides away on scroll down
 * and back on scroll up (`HideOnScroll`).
 */
export function Nav() {
  return (
    <HideOnScroll className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5">
      <nav className="glass-dark mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full pl-3 pr-2 shadow-[0_10px_40px_-10px_rgb(14_14_18/0.5)]">
        <Link href="/" className="flex items-center gap-2" aria-label="Pengu home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper">
            <PenguLogo size={26} />
          </span>
          <span className="text-lg font-bold tracking-tight text-white">Pengu</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#download"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-deep hover:shadow-[0_8px_24px_-6px_var(--color-accent)]"
        >
          Get Pengu
        </Link>
      </nav>
    </HideOnScroll>
  );
}
