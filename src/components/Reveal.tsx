"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { useSafeMotion } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /** fade | up | scale */
  variant?: "fade" | "up" | "scale";
};

const ease = [0.22, 1, 0.36, 1] as const;

function variantsFor(
  variant: RevealProps["variant"],
  y: number,
): Variants {
  if (variant === "fade") {
    return {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  }
  if (variant === "scale") {
    return {
      hidden: { opacity: 0, scale: 0.94, y: y * 0.4 },
      visible: { opacity: 1, scale: 1, y: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  };
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 36,
  once = true,
  variant = "up",
}: RevealProps) {
  const { ready, reduce } = useSafeMotion();

  if (!ready || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={variantsFor(variant, y)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.18, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/** Full-section fade when it enters the viewport */
export function SectionFade({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ready, reduce } = useSafeMotion();

  if (!ready || reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.95, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
