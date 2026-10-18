"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Header shell that slides away while scrolling down and returns on scroll up.
 * It only writes `data-hidden`; the motion is the Tailwind transition below.
 */
export function HideOnScroll({ className, children }: { className: string; children: ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY;
        // Ignore tiny jitters (trackpads, iOS bounce) so it doesn't flicker.
        if (Math.abs(delta) < 6) return;
        setHidden(delta > 0 && y > 80);
        lastY = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header
      data-hidden={hidden}
      className={`transition-[translate,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] data-[hidden=true]:-translate-y-[calc(100%+2rem)] data-[hidden=true]:opacity-0 has-focus-visible:translate-y-0 has-focus-visible:opacity-100 motion-reduce:transition-none ${className}`}
    >
      {children}
    </header>
  );
}
