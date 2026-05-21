"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function RubyCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const springConfig = { stiffness: 280, damping: 30, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover)").matches;
    setEnabled(canHover);
    if (!canHover) return;

    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], [data-cursor-hover]",
      );
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full bg-[var(--color-ruby)]"
          style={{ mixBlendMode: "difference" }}
          animate={{
            width: hovering ? 36 : 12,
            height: hovering ? 36 : 12,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          className="rounded-full border border-[var(--color-champagne)]"
          animate={{
            width: hovering ? 56 : 0,
            height: hovering ? 56 : 0,
            opacity: hovering ? 0.3 : 0,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        />
      </motion.div>
    </>
  );
}
