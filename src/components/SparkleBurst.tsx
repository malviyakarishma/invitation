"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSafeMotion } from "@/lib/motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
};

const COLORS = ["#F4BD35", "#EC1678", "#08A6B5", "#F28C28", "#F5E5C3"];

type SparkleBurstProps = {
  trigger: number;
};

export function SparkleBurst({ trigger }: SparkleBurstProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { reduce } = useSafeMotion();

  useEffect(() => {
    if (trigger <= 0 || reduce) return;
    const idBase = Date.now();
    const next = Array.from({ length: 22 }, (_, i) => ({
      id: idBase + i,
      x: 50 + (Math.random() - 0.5) * 60,
      y: 35 + (Math.random() - 0.5) * 40,
      color: COLORS[i % COLORS.length],
      size: 6 + Math.random() * 10,
    }));
    setParticles(next);
    const t = window.setTimeout(() => setParticles([]), 1100);
    return () => window.clearTimeout(t);
  }, [trigger, reduce]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[70] overflow-hidden"
      aria-hidden
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              border: "1.5px solid #17121D",
              borderRadius: Math.random() > 0.4 ? "50%" : "2px",
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: 1.2,
              opacity: 0,
              x: (Math.random() - 0.5) * 220,
              y: -60 - Math.random() * 160,
              rotate: Math.random() * 200,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
