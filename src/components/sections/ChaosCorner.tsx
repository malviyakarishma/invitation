"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Eye } from "@/components/illustrations/Eye";
import { Diya } from "@/components/illustrations/Diya";
import { StarBurst } from "@/components/illustrations/Decor";
import { CHAOS_MESSAGES } from "@/lib/messages";
import { useSafeMotion } from "@/lib/motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  rot: number;
  dx: number;
  dy: number;
};

const COLORS = ["#F4BD35", "#EC1678", "#08A6B5", "#F28C28", "#F5E5C3"];

type ChaosCornerProps = {
  externalBurst?: number;
};

export function ChaosCorner({ externalBurst = 0 }: ChaosCornerProps) {
  const [message, setMessage] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const { reduce } = useSafeMotion();

  const pickMessage = () =>
    CHAOS_MESSAGES[Math.floor(Math.random() * CHAOS_MESSAGES.length)];

  const burst = useCallback(
    (originX = 50, originY = 50) => {
      setMessage(pickMessage());
      if (reduce) return;

      const idBase = Date.now();
      const next: Particle[] = Array.from({ length: 16 }, (_, i) => ({
        id: idBase + i,
        x: originX + (Math.random() - 0.5) * 40,
        y: originY + (Math.random() - 0.5) * 30,
        color: COLORS[i % COLORS.length],
        rot: Math.random() * 360,
        dx: (Math.random() - 0.5) * 160,
        dy: -80 - Math.random() * 100,
      }));
      setParticles((prev) => [...prev, ...next]);
      window.setTimeout(() => {
        setParticles((prev) =>
          prev.filter((p) => p.id < idBase || p.id > idBase + 40),
        );
      }, 1200);
    },
    [reduce],
  );

  useEffect(() => {
    if (externalBurst > 0) burst(50, 40);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only react to new burst ticks
  }, [externalBurst]);

  return (
    <section
      className="relative overflow-x-clip bg-cream-soft text-ink section-pad"
      aria-labelledby="chaos-title"
    >
      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-teal-deep">
            Chaos corner
          </p>
          <h2
            id="chaos-title"
            className="mt-3 font-display text-[clamp(1.85rem,7vw,3.6rem)] leading-[0.95]"
          >
            TAP FOR A LITTLE{" "}
            <span className="text-magenta">TROUBLE.</span>
          </h2>
          <p className="mt-3 max-w-md font-body text-sm text-ink/70 sm:text-base">
            Optional. Delightful. Slightly unnecessary — just like the best nights.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 sm:mt-10">
          <div
            className="relative overflow-hidden p-5 sm:p-10"
            style={{
              background: "var(--ink)",
              border: "3px solid #17121D",
              boxShadow: "5px 5px 0 var(--mustard)",
              borderRadius: "24px 40px 28px 36px / 36px 24px 40px 28px",
            }}
          >
            <div className="relative z-[2] flex flex-col items-center gap-5">
              <div className="flex w-full items-center justify-center gap-2 sm:gap-6">
                <Diya size={52} interactive onBurst={() => burst(30, 45)} />
                <Eye size={72} className="sm:hidden" />
                <Eye size={96} className="hidden sm:inline-flex" />
                <button
                  type="button"
                  className="focus-ring touch-target tap-bounce inline-flex cursor-pointer items-center justify-center border-0 bg-transparent p-2"
                  aria-label="Tap the star for a party message"
                  onClick={() => burst(70, 40)}
                >
                  <StarBurst
                    size={44}
                    className="transition-transform active:scale-110 sm:hover:scale-110"
                  />
                </button>
              </div>

              <button
                type="button"
                onClick={() => burst(50, 50)}
                className="focus-ring tap-bounce w-full max-w-xs font-display text-lg tracking-wide text-cream sm:w-auto sm:text-xl"
                style={{
                  background: "var(--magenta)",
                  border: "3px solid #17121D",
                  boxShadow: "4px 4px 0 #F4BD35",
                  padding: "0.85rem 1.4rem",
                  transform: "rotate(-2deg)",
                }}
              >
                TAP FOR CHAOS ✦
              </button>
            </div>

            <div className="relative z-[2] mt-6 min-h-[4rem] px-1 text-center sm:mt-8 sm:min-h-[3.5rem]">
              <AnimatePresence mode="wait">
                {message && (
                  <motion.p
                    key={message}
                    className="font-editorial text-lg italic text-cream sm:text-2xl"
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  >
                    “{message}”
                  </motion.p>
                )}
              </AnimatePresence>
              {!message && (
                <p className="font-body text-xs text-cream/40 sm:text-sm">
                  Tap a diya, the eye, the star, or the big button.
                </p>
              )}
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[3] overflow-hidden"
              aria-hidden
            >
              <AnimatePresence>
                {particles.map((p) => (
                  <motion.span
                    key={p.id}
                    className="absolute h-2.5 w-2.5 sm:h-3 sm:w-3"
                    style={{
                      left: `${p.x}%`,
                      top: `${p.y}%`,
                      background: p.color,
                      border: "1.5px solid #17121D",
                      borderRadius: "50%",
                    }}
                    initial={{ scale: 0, opacity: 1, rotate: 0 }}
                    animate={{
                      scale: 1,
                      opacity: 0,
                      x: p.dx,
                      y: p.dy,
                      rotate: p.rot,
                    }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
