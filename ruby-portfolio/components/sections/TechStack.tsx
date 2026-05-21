"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TechMarquee } from "@/components/shared/TechMarquee";
import { techCollection, techMarqueeItems } from "@/lib/data";

// Short category code for the right-side TOC list
const categoryCode: Record<string, string> = {
  FRAMEWORK: "FW",
  LANGUAGE: "LG",
  TOOL: "TL",
  DESIGN: "DS",
  DATABASE: "DB",
};

export function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = techCollection[activeIndex];

  return (
    <section
      id="tech-stack"
      className="relative w-full overflow-hidden py-24 md:py-32"
      style={{
        background:
          "linear-gradient(135deg, var(--color-oxblood) 0%, var(--color-ruby-deep) 55%, var(--color-jet) 100%)",
      }}
    >
      {/* Diagonal overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(45deg, transparent 60%, rgba(201,168,76,0.04) 70%, transparent 80%)",
        }}
      />

      {/* Intermission */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 md:px-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--color-champagne)]/70">
          · intermission ·
        </span>
        <div className="champagne-rule mt-3 w-20" />
      </div>

      {/* Hero */}
      <div className="relative z-10 mx-auto mt-12 max-w-[1400px] px-6 md:mt-16 md:px-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-2 hidden md:flex md:items-start md:justify-start">
            <span
              className="font-display font-black leading-[0.85] text-[var(--color-ivory)]/10"
              style={{ fontSize: "clamp(120px, 18vw, 280px)" }}
            >
              05
            </span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
                TOOLS · MATERIALS · CRAFT
              </span>
              <h2
                className="font-display mt-4 font-black leading-[0.82] tracking-[-0.03em] text-[var(--color-ivory)]"
                style={{ fontSize: "clamp(64px, 10vw, 160px)" }}
              >
                THE{" "}
                <em
                  className="italic"
                  style={{ color: "var(--color-champagne)" }}
                >
                  index.
                </em>
              </h2>
              <p className="font-display mt-6 max-w-[58ch] text-base italic text-[var(--color-ivory-dim)] md:text-xl">
                Hover a name on the right — read its history on the left. A
                curator&apos;s tour of twenty specimens.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Curator panel */}
      <div className="relative z-10 mx-auto mt-16 max-w-[1400px] px-6 md:mt-20 md:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* LEFT: Featured specimen card */}
          <div className="relative">
            <div className="relative overflow-hidden border border-[var(--color-champagne)]/30 bg-[var(--color-jet-card)] p-5 sm:p-7 md:p-8 lg:p-10">

              {/* Ruby glow underneath */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 70% 60%, rgba(196,21,48,0.18), transparent 65%)",
                }}
              />

              {/* Top meta */}
              <div className="relative z-10 flex items-start justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
                  SPECIMEN · {String(activeIndex + 1).padStart(2, "0")} /{" "}
                  {String(techCollection.length).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ivory-dim)]/70">
                  SINCE · {active.year}
                </span>
              </div>

              <div className="champagne-rule mt-4" />

              {/* Animated content swap */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative z-10 mt-6 md:mt-8"
                >
                  {/* Big initial */}
                  <div className="flex items-center justify-center py-2 md:py-4">
                    <span
                      className="font-display font-black leading-none text-[var(--color-ivory)]"
                      style={{
                        fontSize: "clamp(96px, 12vw, 180px)",
                        letterSpacing: "-0.06em",
                      }}
                    >
                      {active.initial}
                    </span>
                  </div>

                  {/* Tech name */}
                  <h3
                    className="font-display mt-2 font-black leading-[0.9] tracking-[-0.02em] text-[var(--color-ivory)]"
                    style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
                  >
                    {active.name}
                  </h3>

                  {/* Category line */}
                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-ruby-bright)] md:text-xs">
                      {active.category}
                    </span>
                    <span className="font-mono text-[10px] text-[var(--color-ivory-dim)]/40">
                      ·
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-champagne)] md:text-xs">
                      EST. {active.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-display mt-4 max-w-[52ch] text-sm italic leading-relaxed text-[var(--color-ivory-dim)] md:mt-5 md:text-base">
                    {active.note}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Bottom mark */}
              <div className="champagne-rule mt-6 md:mt-8" />
              <div className="relative z-10 mt-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--color-ivory-dim)]/60">
                  RUBY ÉDITION · ARSENAL
                </span>
                <span className="text-2xl text-[var(--color-ruby-bright)]">
                  ◆
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Magazine TOC list */}
          <div>
            <div className="mb-4 flex items-baseline justify-between">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
                CONTENTS · {String(techCollection.length).padStart(2, "0")}
                {" "}ENTRIES
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ivory-dim)]/50">
                HOVER TO READ
              </span>
            </div>

            <div className="champagne-rule" />

            <ul className="mt-2">
              {techCollection.map((card, i) => {
                const active = i === activeIndex;
                return (
                  <li
                    key={card.name}
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    tabIndex={0}
                    data-cursor-hover
                    className="group relative cursor-pointer outline-none"
                  >
                    <div
                      className={`flex items-center gap-3 border-b border-[var(--color-champagne)]/10 py-2.5 transition-all duration-300 md:py-3 ${
                        active
                          ? "pl-4 text-[var(--color-ivory)]"
                          : "pl-0 text-[var(--color-ivory-dim)]/75 hover:pl-4 hover:text-[var(--color-ivory)]"
                      }`}
                    >
                      {/* Active indicator bar */}
                      <motion.span
                        aria-hidden
                        className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-[var(--color-ruby-bright)]"
                        animate={{ width: active ? 12 : 0 }}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Number */}
                      <span
                        className={`font-mono text-[10px] tracking-[0.18em] tabular-nums transition-colors ${
                          active
                            ? "text-[var(--color-ruby-bright)]"
                            : "text-[var(--color-ivory-dim)]/50"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Name */}
                      <span
                        className={`font-display text-base font-bold leading-none transition-all md:text-lg ${
                          active ? "tracking-wide" : "tracking-normal"
                        }`}
                      >
                        {card.name}
                      </span>

                      {/* Dot leaders */}
                      <span
                        aria-hidden
                        className="flex-1 self-end translate-y-[-4px] overflow-hidden whitespace-nowrap text-[var(--color-champagne)]/30"
                        style={{ letterSpacing: "0.2em" }}
                      >
                        ················································
                      </span>

                      {/* Category code */}
                      <span
                        className={`font-mono text-[10px] tracking-[0.18em] tabular-nums ${
                          active
                            ? "text-[var(--color-champagne)]"
                            : "text-[var(--color-ivory-dim)]/50"
                        }`}
                      >
                        {categoryCode[card.category] ?? card.category}
                      </span>

                      {/* Year */}
                      <span
                        className={`font-mono text-[10px] tracking-[0.18em] tabular-nums w-10 text-right ${
                          active
                            ? "text-[var(--color-champagne)]"
                            : "text-[var(--color-ivory-dim)]/40"
                        }`}
                      >
                        {card.year}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="champagne-rule" />

            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ivory-dim)]/50">
                CATEGORY KEY
              </span>
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ivory-dim)]/50">
                FW · LG · TL · DS · DB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative z-10 mx-auto mt-20 max-w-[1400px] px-6 md:mt-28 md:px-12">
        <div className="champagne-rule" />
        <div className="grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { num: "20", label: "Specimens" },
            { num: "3+", label: "Years building" },
            { num: "07", label: "Languages" },
            { num: "∞", label: "Curiosity" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-display font-black leading-none text-[var(--color-champagne)]"
                style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
              >
                {s.num}
              </div>
              <div className="font-mono mt-2 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory-dim)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="champagne-rule" />
      </div>

      {/* Marquees */}
      <div className="relative z-10 mt-20 flex flex-col gap-6 md:mt-28">
        <TechMarquee items={techMarqueeItems} speed={160} />
        <TechMarquee
          items={[...techMarqueeItems].reverse()}
          speed={200}
          reverse
        />
      </div>
    </section>
  );
}
