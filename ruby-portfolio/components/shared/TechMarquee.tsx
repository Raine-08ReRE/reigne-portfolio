"use client";

import { motion, useReducedMotion } from "framer-motion";

// Map marquee labels → simple-icons slugs (served via Iconify CDN, recolored)
const iconSlugs: Record<string, string> = {
  REACT: "react",
  "NEXT.JS": "nextdotjs",
  TYPESCRIPT: "typescript",
  LARAVEL: "laravel",
  TAILWIND: "tailwindcss",
  FIGMA: "figma",
  MYSQL: "mysql",
  PHP: "php",
  JAVASCRIPT: "javascript",
  "C#": "csharp",
  UNITY: "unity",
  JAVA: "openjdk",
  DOCKER: "docker",
  "FRAMER MOTION": "framer",
  CODEIGNITER: "codeigniter",
  BOOTSTRAP: "bootstrap",
  HTML: "html5",
  CSS: "css3",
  GIT: "git",
  "VS CODE": "visualstudiocode",
};

// champagne #C9A84C → URL-encoded
const ICON_COLOR = "C9A84C";

function getIconUrl(item: string): string | null {
  const slug = iconSlugs[item.toUpperCase()];
  if (!slug) return null;
  return `https://api.iconify.design/simple-icons/${slug}.svg?color=%23${ICON_COLOR}`;
}

type TechMarqueeProps = {
  items: string[];
  speed?: number;
  reverse?: boolean;
  className?: string;
};

export function TechMarquee({
  items,
  speed = 90,
  reverse = false,
  className = "",
}: TechMarqueeProps) {
  const reduce = useReducedMotion();
  const loop = [...items, ...items, ...items];

  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max items-center gap-7 md:gap-10"
        animate={
          reduce
            ? undefined
            : { x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }
        }
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((item, i) => {
          const url = getIconUrl(item);
          return (
            <div
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-3 md:gap-4"
            >
              {url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={url}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-5 w-5 md:h-6 md:w-6 opacity-90"
                />
              )}
              <span
                className="font-display font-black tracking-[-0.02em] whitespace-nowrap text-[var(--color-ivory)]"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 32px)",
                  lineHeight: 1,
                }}
              >
                {item}
              </span>
              <span
                className="text-[var(--color-ruby-bright)] leading-none"
                style={{ fontSize: "clamp(10px, 1vw, 14px)" }}
              >
                ◆
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
