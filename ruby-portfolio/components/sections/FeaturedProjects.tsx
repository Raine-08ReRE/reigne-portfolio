"use client";

import { motion } from "framer-motion";
import { GemFacet } from "@/components/shared/GemFacet";
import { PageTransition } from "@/components/shared/PageTransition";
import { featuredProjects, type Project } from "@/lib/data";

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const reversed = index % 2 === 1;
  return (
    <PageTransition className="relative w-full overflow-hidden bg-[var(--color-jet)] px-6 py-20 md:px-12 md:py-28">
      {/* Ghost diamond on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[5%] -translate-y-1/2 font-display font-black select-none"
        style={{
          fontSize: "clamp(120px, 18vw, 280px)",
          color: "var(--color-ruby)",
          opacity: 0.05,
          lineHeight: 1,
        }}
      >
        ◆
      </div>

      <GemFacet
        size={160}
        rotation={index % 2 === 0 ? 12 : -18}
        opacity={0.06}
        className={`absolute ${index % 2 === 0 ? "top-[10%] right-[12%]" : "bottom-[15%] left-[8%]"}`}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
          04 / 06 — FEATURED · {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]/60">
          {project.year}
        </span>
      </div>

      <div className="champagne-rule relative z-10 mx-auto mt-4 max-w-7xl" />

      <div
        className={`relative z-10 mx-auto mt-12 grid max-w-7xl grid-cols-1 items-center gap-12 md:mt-16 md:gap-16 lg:grid-cols-2 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Text column */}
        <div>
          <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ruby-bright)]">
            CASE STUDY · {String(index + 1).padStart(2, "0")}
          </span>
          <h3
            className="font-display mt-3 font-black leading-[0.9] tracking-[-0.02em] text-[var(--color-ivory)] transition-colors hover:text-[var(--color-ruby-bright)]"
            style={{ fontSize: "clamp(40px, 5vw, 72px)" }}
            data-cursor-hover
          >
            {project.title}
          </h3>

          <p className="mt-6 max-w-[52ch] text-base leading-[1.75] text-[var(--color-ivory-dim)] md:text-lg">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-wide bg-[var(--color-ruby-deep)] px-3 py-1.5 text-[var(--color-ivory)]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex gap-6 font-mono text-xs tracking-[0.12em]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[var(--color-champagne)] hover:text-[var(--color-ruby-bright)] transition-colors"
                data-cursor-hover
              >
                LIVE
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[var(--color-champagne)] hover:text-[var(--color-ruby-bright)] transition-colors"
                data-cursor-hover
              >
                GITHUB
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Screenshot column — no border, no shadow, floats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="aspect-[4/3] w-full bg-[var(--color-jet-mid)] flex items-center justify-center"
          data-cursor-hover
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-ivory-dim)]">
            {project.slug}.webp
          </span>
        </motion.div>
      </div>
    </PageTransition>
  );
}

export function FeaturedProjects() {
  return (
    <div id="featured">
      {featuredProjects.map((project, i) => (
        <FeaturedProject key={project.slug} project={project} index={i} />
      ))}
    </div>
  );
}
