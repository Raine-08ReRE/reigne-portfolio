"use client";

import { motion, useReducedMotion } from "framer-motion";

type Orb = {
  size: number;
  color: string;
  top: string;
  left?: string;
  right?: string;
  duration: number;
  drift: { x: number[]; y: number[]; scale: number[]; opacity: number[] };
  blur: number;
};

const orbs: Orb[] = [
  {
    size: 700,
    color: "rgba(196, 21, 48, 0.85)",
    top: "10%",
    right: "5%",
    duration: 12,
    blur: 80,
    drift: {
      x: [0, -200, 150, 0],
      y: [0, 150, -100, 0],
      scale: [1, 1.4, 0.7, 1],
      opacity: [0.7, 1, 0.5, 0.7],
    },
  },
  {
    size: 600,
    color: "rgba(107, 10, 23, 0.9)",
    top: "40%",
    left: "5%",
    duration: 15,
    blur: 90,
    drift: {
      x: [0, 220, -150, 0],
      y: [0, -120, 180, 0],
      scale: [1, 0.7, 1.35, 1],
      opacity: [0.6, 0.95, 0.45, 0.6],
    },
  },
  {
    size: 500,
    color: "rgba(156, 17, 35, 0.8)",
    top: "60%",
    left: "40%",
    duration: 10,
    blur: 70,
    drift: {
      x: [0, -150, 200, 0],
      y: [0, 100, -150, 0],
      scale: [0.8, 1.3, 0.85, 0.8],
      opacity: [0.55, 0.9, 0.4, 0.55],
    },
  },
];

type RubyAuroraProps = {
  className?: string;
};

export function RubyAurora({ className = "" }: RubyAuroraProps) {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
            willChange: "transform, opacity",
          }}
          animate={
            reduce
              ? undefined
              : {
                  x: orb.drift.x,
                  y: orb.drift.y,
                  scale: orb.drift.scale,
                  opacity: orb.drift.opacity,
                }
          }
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.33, 0.66, 1],
          }}
        />
      ))}

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(10,6,7,0.45) 100%)",
        }}
      />
    </div>
  );
}
