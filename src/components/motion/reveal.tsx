import { m } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Starting offset in px; direction picks the axis. */
  from?: "bottom" | "left" | "right";
}

const OFFSET = 28;

/**
 * Fade/slide in once when scrolled into view.
 * Honours `prefers-reduced-motion` through <MotionConfig reducedMotion="user"> in main.tsx.
 */
export function Reveal({ children, className, delay = 0, from = "bottom" }: RevealProps) {
  const initial =
    from === "left"
      ? { opacity: 0, x: -OFFSET }
      : from === "right"
        ? { opacity: 0, x: OFFSET }
        : { opacity: 0, y: OFFSET };
  return (
    <m.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </m.div>
  );
}
