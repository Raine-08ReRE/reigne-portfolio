"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CertificateLightbox } from "@/components/shared/CertificateLightbox";
import { GemFacet } from "@/components/shared/GemFacet";
import { PageTransition } from "@/components/shared/PageTransition";
import {
  affiliations,
  certifications,
  education,
  profile,
  type Credential,
} from "@/lib/data";

export function WhoIAm() {
  const [activeCert, setActiveCert] = useState<Credential | null>(null);

  return (
    <section
      id="who-i-am"
      className="relative w-full overflow-hidden bg-[var(--color-ivory)] px-6 py-20 text-[var(--color-jet)] md:px-12 md:py-32"
    >
      {/* Section meta */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
          02 / 07 — WHO I AM
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

      {/* Decorative gem facet (parallax) */}
      <div className="absolute top-[40%] right-[2%]">
        <GemFacet size={200} rotation={20} opacity={0.06} />
      </div>

      {/* Main bio block */}
      <PageTransition className="relative z-10 mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-12 md:mt-24 md:grid-cols-2 md:gap-20">
        {/* Left: heading + photo */}
        <div>
          <h2
            className="font-display font-black leading-[0.88] tracking-[-0.02em]"
            style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
          >
            <span className="block">WHO</span>
            <span className="block">
              I{" "}
              <em className="italic text-[var(--color-ruby)]">AM</em>
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

      {/* === CREDENTIALS & HONORS BLOCK === */}
      <PageTransition className="relative z-10 mx-auto mt-24 max-w-7xl border-t border-[var(--color-ruby)]/20 pt-12 md:mt-32 md:pt-16">
        {/* Block header */}
        <div className="flex items-end justify-between">
          <div>
            <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
              03 — CREDENTIALS
            </span>
            <h3
              className="font-display mt-3 font-black leading-[0.9] tracking-[-0.02em]"
              style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            >
              The{" "}
              <em className="italic text-[var(--color-ruby)]">paperwork.</em>
            </h3>
          </div>
          <span className="font-mono hidden text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/60 md:block">
            EDUCATION · HONORS · CERTIFICATIONS
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* LEFT — EDUCATION & HONORS */}
          <div>
            <div className="flex items-baseline justify-between border-b border-[var(--color-ruby)]/20 pb-2">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
                EDUCATION · HONORS
              </span>
              <span className="font-mono text-[9px] text-[var(--color-ruby)]/50">
                [{String(education.length).padStart(2, "0")}]
              </span>
            </div>

            <ul className="mt-6 space-y-8">
              {education.map((edu, i) => (
                <li key={edu.institution + edu.degree}>
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-[var(--color-ruby)]/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h4 className="font-display text-lg font-bold leading-tight text-[var(--color-jet)] md:text-xl">
                        {edu.institution}
                      </h4>
                      <p className="font-display mt-1 text-sm italic text-[var(--color-jet)]/70 md:text-base">
                        {edu.degree}
                      </p>
                      <p className="font-mono mt-2 text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/70">
                        {edu.period} · {edu.location}
                      </p>

                      {/* Honors as bullets */}
                      <ul className="mt-3 space-y-1.5">
                        {edu.honors.split(" · ").map((h) => (
                          <li
                            key={h}
                            className="flex items-baseline gap-2 text-sm text-[var(--color-jet)]/80"
                          >
                            <span className="text-[var(--color-ruby)] leading-none">
                              ◆
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Affiliations sub-block */}
            <div className="mt-12 border-t border-[var(--color-ruby)]/15 pt-8">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
                AFFILIATIONS · LEADERSHIP
              </span>
              <ul className="mt-5 space-y-4">
                {affiliations.map((a) => (
                  <li key={a.role + a.org}>
                    <h4 className="font-display text-base font-bold leading-tight text-[var(--color-jet)] md:text-lg">
                      {a.role}
                    </h4>
                    <p className="mt-1 text-sm text-[var(--color-jet)]/70">
                      {a.org}
                    </p>
                    <p className="font-mono mt-1.5 text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/70">
                      {a.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — CERTIFICATIONS */}
          <div>
            <div className="flex items-baseline justify-between border-b border-[var(--color-ruby)]/20 pb-2">
              <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]">
                CERTIFICATIONS
              </span>
              <span className="font-mono text-[9px] text-[var(--color-ruby)]/50">
                [{String(certifications.length).padStart(2, "0")}]
              </span>
            </div>

            <ul className="mt-2">
              {certifications.map((c, i) => {
                const viewable = !!c.image;
                return (
                  <li
                    key={c.title + c.date}
                    onClick={viewable ? () => setActiveCert(c) : undefined}
                    className={`group flex items-baseline gap-3 border-b border-[var(--color-ruby)]/10 py-4 transition-colors ${
                      viewable
                        ? "cursor-pointer hover:bg-[var(--color-ruby)]/5"
                        : ""
                    }`}
                    data-cursor-hover={viewable ? "" : undefined}
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/60 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-base font-bold leading-tight text-[var(--color-jet)] md:text-lg">
                        {c.title}
                      </h4>
                      <p className="mt-1 text-xs text-[var(--color-jet)]/65 md:text-sm">
                        {c.issuer}
                        {c.hours ? ` · ${c.hours}` : ""}
                      </p>
                      {viewable && (
                        <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-[var(--color-ruby)] transition-all group-hover:gap-2.5 group-hover:text-[var(--color-ruby-bright)]">
                          ◇ VIEW CERTIFICATE
                          <span className="transition-transform group-hover:translate-x-0.5">
                            →
                          </span>
                        </span>
                      )}
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby)]/70 shrink-0 whitespace-nowrap">
                      {c.date}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </PageTransition>

      {/* Lightbox modal — only renders when activeCert is set */}
      <CertificateLightbox
        cert={activeCert}
        onClose={() => setActiveCert(null)}
      />
    </section>
  );
}
