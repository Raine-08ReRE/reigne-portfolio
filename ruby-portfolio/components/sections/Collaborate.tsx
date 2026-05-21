"use client";

import { motion } from "framer-motion";
import { EditionStamp } from "@/components/shared/EditionStamp";
import { GemFacet } from "@/components/shared/GemFacet";
import { PageTransition } from "@/components/shared/PageTransition";
import { profile } from "@/lib/data";

export function Collaborate() {
  const socials = [
    { label: "Email", href: `mailto:${profile.email}`, display: profile.email },
    {
      label: "GitHub",
      href: profile.github,
      display: profile.github.replace("https://", ""),
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      display: profile.linkedin.replace("https://www.", ""),
    },
  ];

  return (
    <section
      id="collaborate"
      className="relative min-h-screen w-full overflow-hidden bg-[var(--color-jet)] px-6 py-20 md:px-12 md:py-32"
    >
      {/* Section meta */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
          07 / 07 — LET&apos;S COLLABORATE
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]/60">
          FIN
        </span>
      </div>

      <div className="champagne-rule relative z-10 mx-auto mt-4 max-w-7xl" />

      <GemFacet
        size={200}
        rotation={-20}
        opacity={0.07}
        className="absolute top-[20%] left-[3%]"
      />

      <PageTransition className="relative z-10 mx-auto mt-16 max-w-7xl md:mt-24">
        <div className="rounded-none bg-[var(--color-jet-card)] p-8 md:p-16 lg:p-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Left: title + CTA */}
            <div>
              <h2
                className="font-display font-black leading-[0.85] tracking-[-0.02em]"
                style={{ fontSize: "clamp(56px, 8vw, 120px)" }}
              >
                <span className="block text-[var(--color-ivory)]">LET&apos;S</span>
                <span className="block text-[var(--color-ivory)]">BUILD</span>
                <span className="block">
                  <em className="italic text-[var(--color-ruby-bright)]">
                    TOGETHER.
                  </em>
                </span>
              </h2>

              <p className="mt-8 max-w-[48ch] text-base leading-[1.7] text-[var(--color-ivory-dim)] md:text-lg">
                Want a unique site from scratch, a redesign of an existing
                project, or a frontend hire who cares as much about the type as
                the build? Let&apos;s make something memorable.
              </p>

              <motion.a
                href={`mailto:${profile.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 inline-flex items-center gap-3 bg-[var(--color-ruby)] px-8 py-4 font-display text-base font-bold tracking-wider text-[var(--color-ivory)] transition-colors hover:bg-[var(--color-ruby-bright)] md:text-lg"
                data-cursor-hover
              >
                <span>◆</span>
                GET IN TOUCH
                <span>→</span>
              </motion.a>
            </div>

            {/* Right: social links + stamp */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.label === "Email" ? undefined : "_blank"}
                    rel={s.label === "Email" ? undefined : "noopener noreferrer"}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                    className="group flex items-center justify-between border border-[var(--color-champagne)]/30 px-5 py-4 transition-colors hover:border-[var(--color-champagne)] hover:bg-[var(--color-champagne)]/5"
                    data-cursor-hover
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
                      {s.label.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-[var(--color-ivory-dim)] group-hover:text-[var(--color-ivory)] transition-colors">
                      {s.display}
                      <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">
                        →
                      </span>
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <EditionStamp size={140} />
              </div>
            </div>
          </div>
        </div>
      </PageTransition>

      {/* Footer */}
      <div className="relative z-10 mx-auto mt-16 max-w-7xl md:mt-24">
        <div className="champagne-rule" />
        <div className="mt-4 flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ivory-dim)]">
            © {profile.year} {profile.name.toUpperCase()} · RUBY ÉDITION N°1
          </span>
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]/70">
            BUILT WITH NEXT.JS · FRAMER MOTION · TAILWIND
          </span>
        </div>
      </div>
    </section>
  );
}
