"use client";

import { motion } from "framer-motion";
import { GemFacet } from "@/components/shared/GemFacet";
import { PageTransition } from "@/components/shared/PageTransition";
import { profile } from "@/lib/data";

export function WhoIAm() {
  return (
    <section
      id="who-i-am"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--color-ivory)] px-6 py-20 text-[var(--color-jet)] md:px-12 md:py-32"
    >
      {/* Section meta */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
          02 / 06 — WHO I AM
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/60">
          ÉDITION N°1
        </span>
      </div>

      <div
        className="relative z-10 mx-auto mt-4 max-w-7xl"
        style={{
          height: "0.5px",
          backgroundColor: "var(--color-ruby)",
          opacity: 0.3,
        }}
      />

      {/* Decorative gem facet bottom-right */}
      <div className="absolute bottom-[8%] right-[4%]">
        <GemFacet size={220} rotation={20} opacity={0.08} />
      </div>

      <PageTransition className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-12 md:mt-24 md:grid-cols-2 md:gap-20">
        {/* Left: heading + photo placeholder */}
        <div>
          <h2
            className="font-display font-black leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
          >
            <span className="block">WHO</span>
            <span className="block">
              I{" "}
              <em className="not-italic text-[var(--color-ruby)] italic">
                AM
              </em>
            </span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex h-[280px] w-full max-w-[400px] items-center justify-center border border-[var(--color-ruby)]/15 bg-[var(--color-jet)]"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory-dim)]">
              Photo / illustration
            </span>
          </motion.div>
        </div>

        {/* Right: bio + tags */}
        <div className="md:pt-8">
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
            THE PERSON BEHIND THE WORK
          </span>
          <p className="mt-6 max-w-[52ch] text-lg leading-[1.7] font-light text-[var(--color-jet)]/85 md:text-xl">
            {profile.bio}
          </p>

          <div className="mt-8">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/70">
              CURRENT STACK
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.bioTags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs tracking-wide border border-[var(--color-ruby)] px-3 py-1.5 text-[var(--color-ruby)] hover:bg-[var(--color-ruby)] hover:text-[var(--color-ivory)] transition-colors"
                  data-cursor-hover
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[var(--color-ruby)]/20 pt-8">
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--color-ruby)]/70">
                BASED IN
              </span>
              <p className="font-display mt-1 text-xl font-bold">
                {profile.location}
              </p>
            </div>
            <div>
              <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--color-ruby)]/70">
                AVAILABLE FOR
              </span>
              <p className="font-display mt-1 text-xl font-bold">
                Freelance · Roles
              </p>
            </div>
          </div>
        </div>
      </PageTransition>
    </section>
  );
}
