"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Scroll-spy for the feature tour. Tracks which `[data-step]` child sits in
 * the middle band of the viewport and mirrors its index into `data-active`
 * (which drives the sticky phone's screen crossfade in globals.css) and
 * `data-current` on the step itself. All markup stays server-rendered.
 */
export function FeatureTour({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const steps = [...root.querySelectorAll<HTMLElement>("[data-step]")];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    steps.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    ref.current?.querySelectorAll<HTMLElement>("[data-step]").forEach((s) => {
      s.dataset.current = String(Number(s.dataset.step) === active);
    });
  }, [active]);

  return (
    <div ref={ref} data-active={active} className={className}>
      {children}
    </div>
  );
}
