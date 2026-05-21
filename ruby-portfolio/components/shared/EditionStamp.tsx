"use client";

type EditionStampProps = {
  size?: number;
  text?: string;
  className?: string;
};

const DEFAULT_TEXT =
  "ÉDITION RUBY · FRONTEND DEVELOPER · 2025 · ÉDITION RUBY · FRONTEND DEVELOPER · 2025 · ";

export function EditionStamp({
  size = 120,
  text = DEFAULT_TEXT,
  className = "",
}: EditionStampProps) {
  const radius = size / 2 - 10;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <div
      aria-hidden
      className={`group relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        height={size}
        className="animate-[ruby-stamp-spin_20s_linear_infinite] group-hover:[animation-play-state:paused] group-hover:scale-105 transition-transform duration-300"
      >
        <defs>
          <path
            id={`stamp-circle-${size}`}
            d={`M ${cx},${cy} m -${radius},0 a ${radius},${radius} 0 1,1 ${
              radius * 2
            },0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fill="var(--color-champagne)"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9,
            letterSpacing: "0.18em",
          }}
        >
          <textPath href={`#stamp-circle-${size}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <span
          className="text-[var(--color-champagne)] font-black"
          style={{ fontSize: size * 0.18, letterSpacing: "0.04em" }}
        >
          ◆
        </span>
      </div>

      <style jsx>{`
        @keyframes ruby-stamp-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
