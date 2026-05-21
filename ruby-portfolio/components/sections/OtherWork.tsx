"use client";

import { motion } from "framer-motion";
import { PageTransition } from "@/components/shared/PageTransition";
import { otherWork } from "@/lib/data";

export function OtherWork() {
  return (
    <section
      id="other-work"
      className="relative w-full overflow-hidden bg-[var(--color-ivory)] px-6 py-20 text-[var(--color-jet)] md:px-12 md:py-32"
    >
      {/* Section meta */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
          07 / 08 — OTHER WORK
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/60">
          ARCHIVE
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

      <PageTransition className="relative z-10 mx-auto mt-12 max-w-7xl md:mt-20">
        <div className="flex items-end justify-between gap-8">
          <h2
            className="font-display font-black leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            OTHER{" "}
            <em className="italic text-[var(--color-ruby)]">WORK</em>
          </h2>
          <p className="font-display max-w-[28ch] pb-3 text-base italic text-[var(--color-jet)]/60 md:text-lg">
            Smaller builds and side experiments — context for the body of work.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherWork.map((work, i) => (
            <motion.article
              key={work.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group relative overflow-hidden border border-transparent bg-[var(--color-jet)] transition-all duration-300 hover:border-[var(--color-champagne)]"
              data-cursor-hover
            >
              <div className="aspect-[16/10] bg-[var(--color-jet-mid)] flex items-center justify-center">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory-dim)]">
                  {work.slug}
                </span>
              </div>

              <div className="p-6">
                <span className="font-mono text-[9px] tracking-[0.18em] text-[var(--color-champagne)]">
                  {work.year}
                </span>
                <h3 className="font-display mt-2 text-2xl font-bold text-[var(--color-ivory)]">
                  {work.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ivory-dim)]">
                  {work.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {work.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[9px] tracking-wide text-[var(--color-ivory-dim)]/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </PageTransition>
    </section>
  );
}
