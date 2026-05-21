"use client";

import { motion } from "framer-motion";
import { GemFacet } from "@/components/shared/GemFacet";
import { PageTransition } from "@/components/shared/PageTransition";
import { processSteps } from "@/lib/data";

export function HowIWork() {
  return (
    <section
      id="how-i-work"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--color-oxblood)] px-6 py-20 md:px-12 md:py-32"
    >
      {/* Section meta */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
          03 / 06 — HOW I WORK
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]/60">
          PROCESS
        </span>
      </div>

      <div className="champagne-rule relative z-10 mx-auto mt-4 max-w-7xl" />

      <GemFacet
        size={240}
        rotation={22}
        opacity={0.06}
        className="absolute top-[15%] left-[-3%]"
      />
      <GemFacet
        size={160}
        rotation={-15}
        opacity={0.05}
        className="absolute bottom-[10%] right-[5%]"
      />

      <PageTransition className="relative z-10 mx-auto mt-16 max-w-7xl md:mt-24">
        <h2
          className="font-display font-black leading-[0.88] tracking-[-0.02em] text-[var(--color-ivory)]"
          style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
        >
          HOW I <em className="not-italic italic text-[var(--color-champagne)]">WORK</em>
        </h2>
        <p className="font-display mt-4 max-w-[40ch] text-base italic text-[var(--color-ivory-dim)] md:text-lg">
          Four phases. Each one earns the next.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-px bg-[var(--color-champagne)]/15 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="group relative border-l-2 border-[var(--color-champagne)] bg-[var(--color-oxblood)] p-6 md:p-8"
              data-cursor-hover
            >
              <span className="font-mono text-xs tracking-[0.18em] text-[var(--color-ruby-bright)]">
                {step.number} —
              </span>
              <h3 className="font-display mt-2 text-3xl font-black text-[var(--color-ivory)] md:text-4xl">
                {step.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-ivory-dim)] md:text-base">
                {step.description}
              </p>
              <div className="champagne-rule mt-6 w-12 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </PageTransition>
    </section>
  );
}
