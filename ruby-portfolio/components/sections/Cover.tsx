"use client";

import { motion } from "framer-motion";
import { EditionStamp } from "@/components/shared/EditionStamp";
import { GemFacet } from "@/components/shared/GemFacet";
import { RubyAurora } from "@/components/shared/RubyAurora";
import { profile } from "@/lib/data";

const letterVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 } as const,
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

function AnimatedWord({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`inline-flex ${className}`}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.05, delayChildren: delay },
        },
      }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          className="inline-block"
          style={{ minWidth: char === " " ? "0.4em" : undefined }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function Cover() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--color-jet)] px-6 py-8 md:px-12 md:py-12">
      {/* Animated ruby aurora — drifting orbs that pulse */}
      <RubyAurora />

      {/* Ghost RUBY watermark */}
      <div
        aria-hidden
        className="ruby-watermark absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[clamp(200px,40vw,500px)]"
      >
        RUBY
      </div>

      {/* Parallax gem facets */}
      <GemFacet
        size={180}
        rotation={18}
        opacity={0.08}
        className="absolute top-[8%] right-[6%]"
      />
      <GemFacet
        size={120}
        rotation={-12}
        opacity={0.06}
        className="absolute bottom-[12%] left-[4%]"
      />

      {/* Top meta bar */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
          ÉDITION N°1 · {profile.location.toUpperCase()} · {profile.year}
        </span>
        <div className="flex gap-6 font-mono text-[10px] tracking-[0.12em] text-[var(--color-ivory-dim)]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-champagne)] transition-colors"
          >
            GITHUB
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-champagne)] transition-colors"
          >
            LINKEDIN
          </a>
        </div>
      </div>

      <div className="champagne-rule relative z-10 mx-auto mt-3 max-w-7xl" />

      {/* Main cover grid */}
      <div className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-1 items-end gap-8 md:mt-24 md:grid-cols-[auto_1fr_auto] md:gap-12">
        {/* Left tags column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-display flex flex-col gap-1 pb-2"
        >
          {profile.primaryStack.map((tag, i) => (
            <span
              key={tag}
              className="text-lg font-bold leading-tight md:text-2xl"
              style={{
                color:
                  i === 0
                    ? "var(--color-ivory)"
                    : i === 1
                      ? "var(--color-ivory-dim)"
                      : i === 2
                        ? "rgba(237, 232, 220, 0.5)"
                        : "rgba(237, 232, 220, 0.25)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Center: italic label + name + photo */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-display mb-2 text-base italic tracking-wider text-[var(--color-champagne)] md:text-lg"
          >
            Édition Ruby
          </motion.div>

          <motion.h1
            className="font-display font-black leading-[0.85] tracking-[-0.02em]"
            style={{ fontSize: "clamp(64px, 10vw, 140px)" }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-[var(--color-ivory)]">
              <AnimatedWord text={profile.firstName} />
            </div>
            <div className="text-[var(--color-ruby-bright)]">
              <AnimatedWord text={profile.lastName} delay={0.3} />
            </div>
          </motion.h1>

          {/* Photo pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
            className="mx-auto mt-8 flex h-[280px] w-[200px] items-center justify-center rounded-t-full border border-[var(--color-champagne)]/30 bg-[var(--color-jet-mid)] md:mt-12 md:h-[340px] md:w-[240px]"
          >
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory-dim)]">
              Your photo here
            </span>
          </motion.div>
        </div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-display flex flex-col items-end gap-1 pb-2 text-right"
        >
          <span className="text-2xl font-black leading-tight text-[var(--color-ivory)] md:text-3xl">
            FRONT
          </span>
          <span className="text-2xl font-black leading-tight text-[var(--color-ivory)] md:text-3xl">
            END
          </span>
          <span
            className="text-2xl font-black leading-tight md:text-3xl"
            style={{ color: "rgba(237, 232, 220, 0.2)" }}
          >
            DEV
          </span>
        </motion.div>
      </div>

      {/* Bottom rule + footer + stamp */}
      <div className="relative z-10 mx-auto mt-16 max-w-7xl md:mt-24">
        <div className="champagne-rule" />
        <div className="mt-3 flex items-center justify-between">
          <span className="font-display text-xs italic text-[var(--color-ivory-dim)] md:text-sm">
            {profile.tagline} — inspired by Jennie Kim&apos;s Ruby
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
            01 / 06 →
          </span>
        </div>
      </div>

      {/* Floating Édition stamp */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 right-8 z-10 hidden md:block"
      >
        <EditionStamp size={120} />
      </motion.div>
    </section>
  );
}
