import Link from "next/link";
import { PenguLogo } from "./PenguLogo";

function AppleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3.18 23.76c.35.19.76.21 1.15.04l11.62-6.57-2.4-2.4-10.37 8.93zM.5 1.77C.19 2.13 0 2.67 0 3.38v17.24c0 .71.19 1.25.5 1.61l.08.08 9.65-9.65v-.22L.58 1.69.5 1.77zM20.37 10.25l-2.6-1.47-2.68 2.68 2.68 2.68 2.63-1.49c.75-.43.75-1.12-.03-1.4zM4.33.2L15.95 6.77l-2.4 2.4L3.18.24C3.57.07 3.98.08 4.33.2z" />
    </svg>
  );
}

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-sage/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Pengu home">
          <PenguLogo size={34} />
          <span className="text-xl font-bold text-charcoal tracking-tight">Pengu</span>
        </Link>

        <div className="hidden md:flex items-center gap-7">
          <Link
            href="/#features"
            className="text-sm font-medium text-charcoal-lighter hover:text-charcoal transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-charcoal-lighter hover:text-charcoal transition-colors"
          >
            How it works
          </Link>
          <Link
            href="/#reviews"
            className="text-sm font-medium text-charcoal-lighter hover:text-charcoal transition-colors"
          >
            Reviews
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#download"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal text-cream text-sm font-medium hover:bg-charcoal-light transition-all duration-200"
          >
            <AppleIcon />
            App Store
          </Link>
          <Link
            href="/#download"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-charcoal/20 text-charcoal text-sm font-medium hover:bg-charcoal/5 transition-all duration-200"
          >
            <PlayIcon />
            <span className="hidden sm:inline">Google </span>Play
          </Link>
        </div>
      </div>
    </nav>
  );
}
