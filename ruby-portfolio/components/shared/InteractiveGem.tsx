"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type InteractiveGemProps = {
  size?: number;
  className?: string;
};

export function InteractiveGem({
  size = 360,
  className = "",
}: InteractiveGemProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [hovering, setHovering] = useState(false);

  // Raw mouse position (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Map to rotation angles
  const targetRotateY = useTransform(mouseX, [-1, 1], [-45, 45]);
  const targetRotateX = useTransform(mouseY, [-1, 1], [30, -30]);

  // Spring-smoothed
  const rotateY = useSpring(targetRotateY, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });
  const rotateX = useSpring(targetRotateX, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });

  // Subtle scale on hover
  const scale = useSpring(1, { stiffness: 140, damping: 18 });

  useEffect(() => {
    scale.set(hovering ? 1.06 : 1);
  }, [hovering, scale]);

  useEffect(() => {
    if (reduce) return;
    const handleMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const maxDist = 700;
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / maxDist));
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / maxDist));
      mouseX.set(dx);
      mouseY.set(dy);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, reduce]);

  return (
    <div
      ref={wrapperRef}
      className={`relative ${className}`}
      style={{ width: size, height: size, perspective: "1400px" }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      data-cursor-hover
    >
      {/* Outer halo / glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(196,21,48,0.5), transparent 65%)",
          filter: "blur(40px)",
        }}
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.6, 0.85, 0.6] }
        }
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating up-down idle motion */}
      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative h-full w-full"
          style={{
            rotateX: reduce ? 0 : rotateX,
            rotateY: reduce ? 0 : rotateY,
            scale: reduce ? 1 : scale,
            transformStyle: "preserve-3d",
          }}
        >
          <svg
            viewBox="-100 -100 200 200"
            className="h-full w-full drop-shadow-[0_30px_60px_rgba(156,17,35,0.4)]"
          >
            <defs>
              {/* Face gradients — alternating ruby tones */}
              <linearGradient id="gem-f1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C41530" />
                <stop offset="100%" stopColor="#6B0A17" />
              </linearGradient>
              <linearGradient id="gem-f2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9C1123" />
                <stop offset="100%" stopColor="#2A0509" />
              </linearGradient>
              <linearGradient id="gem-f3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C41530" />
                <stop offset="100%" stopColor="#9C1123" />
              </linearGradient>
              <linearGradient id="gem-f4" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#6B0A17" />
                <stop offset="100%" stopColor="#2A0509" />
              </linearGradient>
              <radialGradient id="gem-shine" cx="35%" cy="25%" r="40%">
                <stop offset="0%" stopColor="#EDE8DC" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#EDE8DC" stopOpacity="0" />
              </radialGradient>
              <filter id="gem-shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* Outer hexagonal silhouette */}
            <polygon
              points="0,-86 75,-43 75,43 0,86 -75,43 -75,-43"
              fill="url(#gem-f4)"
              stroke="#C9A84C"
              strokeWidth="1"
              strokeOpacity="0.7"
            />

            {/* Top half — 4 triangular crown facets */}
            <polygon
              points="0,-86 -38,-43 0,-22"
              fill="url(#gem-f1)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="0,-86 38,-43 0,-22"
              fill="url(#gem-f2)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="0,-86 -75,-43 -38,-43"
              fill="url(#gem-f3)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="0,-86 75,-43 38,-43"
              fill="url(#gem-f3)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />

            {/* Middle band — 4 trapezoidal facets */}
            <polygon
              points="-75,-43 -38,-43 0,-22 -55,15"
              fill="url(#gem-f2)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="75,-43 38,-43 0,-22 55,15"
              fill="url(#gem-f1)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="-75,-43 -75,43 -55,15"
              fill="url(#gem-f4)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="75,-43 75,43 55,15"
              fill="url(#gem-f4)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />

            {/* Bottom half — pavilion facets */}
            <polygon
              points="-55,15 0,-22 55,15 0,86"
              fill="url(#gem-f3)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="-75,43 -55,15 0,86"
              fill="url(#gem-f1)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />
            <polygon
              points="75,43 55,15 0,86"
              fill="url(#gem-f2)"
              stroke="#C9A84C"
              strokeWidth="0.6"
              strokeOpacity="0.55"
            />

            {/* Specular highlight (sits on top, makes it look glassy) */}
            <ellipse cx="-15" cy="-50" rx="22" ry="14" fill="url(#gem-shine)" />
            <circle cx="-25" cy="-58" r="3" fill="#EDE8DC" opacity="0.8" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Floor reflection / glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse, rgba(196,21,48,0.4), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}
