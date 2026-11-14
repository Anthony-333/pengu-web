import { useId } from "react";

/**
 * The app icon: the Pengu family (two parents and a chick) on violet, as a
 * rounded tile. A port of `pengu/assets/images/icon.png`, drawn from
 * `pengu/assets/brand/app-icon.svg`; when the app's icon changes, port it here.
 * Hex is hardcoded because the icon is fixed brand art, not themed UI.
 */
const VIOLET = "#8E86F0";
const INK = "#15132B";
/** iOS-style corner, 229 of 1024 (the radius `AnimatedSplash` uses in the app). */
const RADIUS = 229;

const BODY = "M-100 500L-100 0C-100 -62 -56 -102 0 -102C56 -102 100 -62 100 0L100 500Z";
const FACE =
  "M0 -38C-12 -38 -20 -58 -40 -66C-56 -72 -70 -64 -78 -50C-98 -26 -94 20 -76 46C-58 72 -28 86 0 86C28 86 58 72 76 46C94 20 98 -26 78 -50C70 -64 56 -72 40 -66C20 -58 12 -38 0 -38Z";
const BEAK = "M-26 22Q0 13 26 22Q34 26 28 34L7 58Q0 65 -7 58L-28 34Q-34 26 -26 22Z";
const TUFT = "M2 -104C4 -124 14 -138 30 -146M14 -130C30 -136 46 -134 56 -124";

function Penguin({ transform, chick = false }: { transform: string; chick?: boolean }) {
  return (
    <g transform={transform} strokeLinecap="round" strokeLinejoin="round">
      {chick && <circle r="112" fill={VIOLET} />}
      <path fill={INK} d={BODY} />
      {chick && <path fill="none" stroke={INK} strokeWidth="11" d={TUFT} />}
      <path fill="#FFFFFF" d={FACE} />
      <ellipse fill={INK} cx="-36" cy="-4" rx="8.5" ry="14.5" />
      <ellipse fill={INK} cx="36" cy="-4" rx="8.5" ry="14.5" />
      <path fill="#FF9E7A" stroke={INK} strokeWidth="8" d={BEAK} />
    </g>
  );
}

export function PenguLogo({ size = 36, className }: { size?: number; className?: string }) {
  const clip = useId();
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <clipPath id={clip}>
          <rect width="1024" height="1024" rx={RADIUS} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="1024" height="1024" fill={VIOLET} />
        <Penguin transform="translate(290 610) rotate(6) scale(2.3)" />
        <Penguin transform="translate(734 610) rotate(-6) scale(2.3)" />
        <Penguin transform="translate(512 812) scale(1.62)" chick />
      </g>
    </svg>
  );
}
