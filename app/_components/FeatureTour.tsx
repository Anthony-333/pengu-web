"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-spy for the feature tour. Tracks which `[data-step]` child sits in
 * the middle band of the viewport and mirrors its index into `data-active`
 * (which drives the sticky phone's side, tilt and screen crossfade in
 * globals.css) and `data-current` on the step itself. All markup stays
 * server-rendered.
 *
 * It also plays each step's problem -> Pengu clip (`video[data-tour-video]`)
 * from the start when that step becomes active, so scrolling back replays it.
 * Nothing plays until a step has actually been reached.
 */
export function FeatureTour({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [reached, setReached] = useState(false);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const steps = [...root.querySelectorAll<HTMLElement>("[data-step]")];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          setActive(Number((entry.target as HTMLElement).dataset.step));
          setReached(true);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>("[data-step]").forEach((s) => {
      s.dataset.current = String(Number(s.dataset.step) === active);
    });
    if (!reached) return;

    // Only the copies on screen: the mobile or the desktop phone, never both.
    // Reduced motion hides the videos, so they never start either.
    root.querySelectorAll<HTMLVideoElement>("video[data-tour-video]").forEach((v) => {
      const i = Number(v.dataset.tourVideo);
      const shown = v.offsetParent !== null;
      if (shown && i === active) {
        v.preload = "auto";
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
        if (shown && i === active + 1) v.preload = "auto";
      }
    });
  }, [active, reached]);

  return (
    <div ref={ref} data-active={active} className={className}>
      {children}
    </div>
  );
}
