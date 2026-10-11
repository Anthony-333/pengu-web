interface WaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}

export function WaveDivider({ topColor, bottomColor, flip = false }: WaveDividerProps) {
  return (
    <div className="relative -mb-px overflow-hidden" style={{ background: topColor }}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: "56px", transform: flip ? "scaleX(-1)" : undefined }}
      >
        <path
          d="M0,36 Q90,0 180,36 Q270,72 360,36 Q450,0 540,36 Q630,72 720,36 Q810,0 900,36 Q990,72 1080,36 Q1170,0 1260,36 Q1350,72 1440,36 L1440,72 L0,72 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
}
