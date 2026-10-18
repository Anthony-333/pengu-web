export function PenguLogo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Body */}
      <ellipse cx="20" cy="23" rx="12" ry="14" fill="#0E0E12" />
      {/* Belly */}
      <ellipse cx="20" cy="26" rx="7.5" ry="10" fill="#F2F2F5" />
      {/* Left wing */}
      <ellipse
        cx="8"
        cy="26"
        rx="3.5"
        ry="8"
        fill="#0E0E12"
        transform="rotate(-12 8 26)"
      />
      {/* Right wing */}
      <ellipse
        cx="32"
        cy="26"
        rx="3.5"
        ry="8"
        fill="#0E0E12"
        transform="rotate(12 32 26)"
      />
      {/* Left eye white */}
      <circle cx="15.5" cy="18" r="3" fill="white" />
      {/* Right eye white */}
      <circle cx="24.5" cy="18" r="3" fill="white" />
      {/* Left pupil */}
      <circle cx="16" cy="17.5" r="1.6" fill="#0E0E12" />
      {/* Right pupil */}
      <circle cx="25" cy="17.5" r="1.6" fill="#0E0E12" />
      {/* Left eye shine */}
      <circle cx="16.6" cy="16.9" r="0.55" fill="white" />
      <circle cx="25.6" cy="16.9" r="0.55" fill="white" />
      {/* Beak */}
      <path d="M18.5 21.5 L20 24.5 L21.5 21.5 Q20 20.5 18.5 21.5Z" fill="#FF5A3C" />
      {/* Left foot */}
      <ellipse
        cx="14.5"
        cy="37"
        rx="5"
        ry="2.2"
        fill="#FF5A3C"
        transform="rotate(-18 14.5 37)"
      />
      {/* Right foot */}
      <ellipse
        cx="25.5"
        cy="37"
        rx="5"
        ry="2.2"
        fill="#FF5A3C"
        transform="rotate(18 25.5 37)"
      />
    </svg>
  );
}
