"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type GemFacetProps = {
  size?: number;
  rotation?: number;
  opacity?: number;
  className?: string;
  parallax?: boolean;
};

export function GemFacet({
  size = 140,
  rotation = 15,
  opacity = 0.08,
  className = "",
  parallax = true,
}: GemFacetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? [60, -100] : [0, 0]);
  const r = useTransform(
    scrollYProgress,
    [0, 1],
    parallax ? [rotation, rotation + 8] : [rotation, rotation],
  );

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ y, rotate: r, width: size, height: size, opacity }}
    >
      <svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        stroke="var(--color-ruby)"
        strokeWidth="0.8"
      >
        <polygon
          fill="var(--color-ruby)"
          fillOpacity="0.4"
          points="24,4 40,18 24,44 8,18"
        />
        <polygon points="24,4 40,18 24,44 8,18" />
        <line x1="8" y1="18" x2="40" y2="18" />
        <line x1="24" y1="4" x2="8" y2="18" />
        <line x1="24" y1="4" x2="40" y2="18" />
        <line x1="24" y1="44" x2="8" y2="18" />
        <line x1="24" y1="44" x2="40" y2="18" />
        <line x1="24" y1="4" x2="24" y2="44" />
      </svg>
    </motion.div>
  );
}
