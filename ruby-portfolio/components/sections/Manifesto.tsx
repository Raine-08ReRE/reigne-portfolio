"use client";

import { motion } from "framer-motion";
import { InteractiveGem } from "@/components/shared/InteractiveGem";
import { PageTransition } from "@/components/shared/PageTransition";

export function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative w-full overflow-hidden bg-[var(--color-jet)] py-24 md:py-32"
    >
      {/* Futuristic dot grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,76,0.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Crosshair lines through center */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.15) 30%, rgba(201,168,76,0.15) 70%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 bottom-0 left-1/2 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(201,168,76,0.1) 30%, rgba(201,168,76,0.1) 70%, transparent)",
        }}
      />

      {/* Section meta */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
          04 / 08 — THE MANIFESTO
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]/60">
          INTERACT · ROTATE
        </span>
      </div>

      <div className="champagne-rule relative z-10 mx-auto mt-4 max-w-7xl px-6 md:px-12">
        <div className="champagne-rule" />
      </div>

      {/* Main content — 3-column grid: text · gem · text */}
      <PageTransition className="relative z-10 mx-auto mt-16 grid max-w-[1500px] grid-cols-1 items-center gap-12 px-6 md:mt-24 md:px-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-20">
        {/* LEFT — Tagline */}
        <div className="lg:text-right">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-champagne)]">
              THE APPROACH
            </span>
            <h2
              className="font-display mt-3 font-black leading-[0.88] tracking-[-0.02em] text-[var(--color-ivory)]"
              style={{ fontSize: "clamp(40px, 5vw, 80px)" }}
            >
              Design.{" "}
              <em className="italic text-[var(--color-ruby-bright)]">
                Build.
              </em>{" "}
              Ship.
            </h2>
            <p className="font-display mt-6 max-w-[40ch] text-base italic leading-relaxed text-[var(--color-ivory-dim)] md:text-lg lg:ml-auto">
              I lead with the design — flows in Figma, tokens defined, intent
              set. Then I code it: components, types, accessible by default.
              One person, both surfaces.
            </p>
          </motion.div>
        </div>

        {/* CENTER — Interactive gem */}
        <div className="relative flex items-center justify-center">
          {/* Coordinate markers (futuristic HUD feel) */}
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.2em] text-[var(--color-champagne)]/50">
            ◇ AXIS · 00
          </span>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.2em] text-[var(--color-champagne)]/50">
            ◇ AXIS · 180
          </span>
          <span className="absolute top-1/2 -left-2 -translate-y-1/2 -rotate-90 font-mono text-[9px] tracking-[0.2em] text-[var(--color-champagne)]/50">
            ◇ AXIS · 270
          </span>
          <span className="absolute top-1/2 -right-2 -translate-y-1/2 rotate-90 font-mono text-[9px] tracking-[0.2em] text-[var(--color-champagne)]/50">
            ◇ AXIS · 90
          </span>

          <InteractiveGem size={360} />

          {/* Reactive tag below */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--color-champagne)]">
              ☉ MOVE YOUR CURSOR
            </span>
          </motion.div>
        </div>

        {/* RIGHT — Application */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-champagne)]">
              THE STANDARD
            </span>
            <h2
              className="font-display mt-3 font-black leading-[0.88] tracking-[-0.02em] text-[var(--color-ivory)]"
              style={{ fontSize: "clamp(40px, 5vw, 80px)" }}
            >
              Pixel-true.{" "}
              <em className="italic text-[var(--color-ruby-bright)]">
                Type-safe.
              </em>{" "}
              Maintained.
            </h2>
            <p className="font-display mt-6 max-w-[40ch] text-base italic leading-relaxed text-[var(--color-ivory-dim)] md:text-lg">
              Frontend is finished when users feel the product, not the markup.
              I keep components small, types tight, and the next dev&apos;s job
              easy.
            </p>
          </motion.div>
        </div>
      </PageTransition>

      {/* Pull quote spanning full width */}
      <div className="relative z-10 mx-auto mt-32 max-w-5xl px-6 text-center md:mt-40 md:px-12">
        <div className="champagne-rule mx-auto w-24" />
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display mt-8 italic leading-[1.3] text-[var(--color-ivory)]"
          style={{ fontSize: "clamp(20px, 2.5vw, 36px)" }}
        >
          &ldquo;Designers think in screens. Engineers think in systems. I work{" "}
          <em className="not-italic font-black text-[var(--color-ruby-bright)]">
            where they meet
          </em>{" "}
          — between Figma and the live URL.&rdquo;
        </motion.blockquote>
        <div className="champagne-rule mx-auto mt-8 w-24" />
        <p className="font-mono mt-6 text-[10px] tracking-[0.3em] text-[var(--color-champagne)]/70">
          ÉDITION RUBY · MANIFESTO N°1
        </p>
      </div>
    </section>
  );
}
