import type { CSSProperties } from "react";

/** Stagger delay for the `.rise` / `.phone-in` / `.float` animations in globals.css. */
export function delay(ms: number): CSSProperties {
  return { "--d": `${ms}ms` } as CSSProperties;
}
