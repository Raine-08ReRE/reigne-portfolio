"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const navItems = [
  { label: "Who", href: "#who-i-am" },
  { label: "Process", href: "#how-i-work" },
  { label: "Work", href: "#featured" },
  { label: "Archive", href: "#other-work" },
  { label: "Contact", href: "#collaborate" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--color-jet)]/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#top"
          className="font-display text-base font-bold tracking-wider text-[var(--color-ivory)] hover:text-[var(--color-ruby-bright)] transition-colors md:text-lg"
          data-cursor-hover
        >
          R<em className="not-italic italic text-[var(--color-champagne)]">.</em>R
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-ivory-dim)] hover:text-[var(--color-champagne)] transition-colors"
                  data-cursor-hover
                >
                  {item.label.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="font-mono text-[10px] tracking-[0.18em] text-[var(--color-champagne)] hover:text-[var(--color-ruby-bright)] transition-colors"
          data-cursor-hover
        >
          GET IN TOUCH →
        </a>
      </div>

      <motion.div
        className="h-px origin-left bg-[var(--color-champagne)]"
        style={{ scaleX: progress }}
      />
      <div className="champagne-rule" />
    </header>
  );
}
