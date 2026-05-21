"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { Credential } from "@/lib/data";

type CertificateLightboxProps = {
  cert: Credential | null;
  onClose: () => void;
};

export function CertificateLightbox({ cert, onClose }: CertificateLightboxProps) {
  // ESC key closes the modal
  useEffect(() => {
    if (!cert) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    // Lock body scroll while open
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [cert, onClose]);

  return (
    <AnimatePresence>
      {cert && (
        <motion.div
          key="cert-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
          aria-modal
          role="dialog"
        >
          {/* Dark backdrop with subtle blur */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[var(--color-jet)]/90 backdrop-blur-md"
          />

          {/* Modal content */}
          <motion.div
            key="cert-content"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex w-full max-w-5xl flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header — meta + close */}
            <div className="flex items-start justify-between gap-4 pb-4">
              <div>
                <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)]">
                  CERTIFICATE · {cert.date.toUpperCase()}
                  {cert.hours ? ` · ${cert.hours.toUpperCase()}` : ""}
                </span>
                <h3
                  className="font-display mt-2 font-black leading-tight text-[var(--color-ivory)]"
                  style={{ fontSize: "clamp(20px, 2.4vw, 32px)" }}
                >
                  {cert.title}
                </h3>
                <p className="font-mono mt-1 text-xs tracking-[0.12em] text-[var(--color-ivory-dim)]">
                  {cert.issuer}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close certificate"
                className="group flex shrink-0 items-center gap-2 border border-[var(--color-champagne)]/40 px-4 py-2 font-mono text-[10px] tracking-[0.2em] text-[var(--color-champagne)] transition-colors hover:border-[var(--color-ruby-bright)] hover:bg-[var(--color-ruby-bright)] hover:text-[var(--color-ivory)]"
                data-cursor-hover
              >
                CLOSE
                <span className="text-base leading-none">×</span>
              </button>
            </div>

            <div className="champagne-rule" />

            {/* Certificate image */}
            <div className="mt-4 overflow-hidden border border-[var(--color-champagne)]/30 bg-[var(--color-ivory)]">
              {cert.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={cert.image}
                  alt={`${cert.title} — ${cert.issuer}`}
                  className="block h-auto w-full"
                  loading="eager"
                />
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center bg-[var(--color-jet-mid)]">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-ivory-dim)]">
                    No image available
                  </span>
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--color-ivory-dim)]/60">
                ESC · CLICK OUTSIDE TO DISMISS
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--color-champagne)]/60">
                ◆ RUBY ÉDITION · ARSENAL
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
