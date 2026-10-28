"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Diya } from "@/components/illustrations/Diya";
import {
  CobraSilhouette,
  FireworkChakra,
  HandsWithSparks,
  MiniElephant,
  PetalCorner,
  SparkLines,
  Spiral,
  StarBurst,
  TinyTrumpet,
} from "@/components/illustrations/Decor";
import { Grain } from "@/components/Grain";
import { EVENT } from "@/lib/messages";
import { useSafeMotion } from "@/lib/motion";

type HeroProps = {
  onDiyaBurst?: () => void;
};

export function Hero({ onDiyaBurst }: HeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { reduce, enter } = useSafeMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 40]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -28]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 6]);

  return (
    <section
      ref={ref}
      className="relative overflow-x-clip bg-ink-deep section-pad pt-6 sm:pt-14"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="scallop-outer">
          <div className="poster-frame relative overflow-hidden">
            <div className="poster-teal relative px-3 pb-0 pt-14 sm:min-h-[78vh] sm:px-8 sm:pb-0 sm:pt-14 lg:px-12">
              <Grain />

              {/* Interactive diyas — always tappable */}
              <motion.div
                className="absolute left-1 top-2 z-[5] sm:left-6 sm:top-8"
                style={{ y: ySlow }}
              >
                <Diya size={44} className="sm:hidden" interactive onBurst={onDiyaBurst} />
                <Diya
                  size={56}
                  className="hidden sm:inline-flex"
                  interactive
                  onBurst={onDiyaBurst}
                />
              </motion.div>
              <motion.div
                className="absolute right-1 top-2 z-[5] sm:right-6 sm:top-8"
                style={{ y: ySlow }}
              >
                <Diya size={44} className="sm:hidden" interactive onBurst={onDiyaBurst} />
                <Diya
                  size={56}
                  className="hidden sm:inline-flex"
                  interactive
                  onBurst={onDiyaBurst}
                />
              </motion.div>

              {/* Desktop ornaments */}
              <motion.div
                className="absolute left-2 top-28 z-[3] hidden sm:block"
                style={{ y: yFast, rotate }}
              >
                <TinyTrumpet size={64} className="-rotate-12" />
              </motion.div>
              <motion.div
                className="absolute right-2 top-28 z-[3] hidden sm:block"
                style={{ y: yFast }}
              >
                <TinyTrumpet size={64} className="rotate-12 scale-x-[-1]" />
              </motion.div>

              <div className="absolute left-1 top-1/2 z-[3] hidden -translate-y-1/2 lg:block">
                <CobraSilhouette size={120} className="animate-float" />
              </div>
              <div className="absolute right-1 top-1/2 z-[3] hidden -translate-y-1/2 lg:block">
                <CobraSilhouette size={120} flip className="animate-float" />
              </div>

              <div className="absolute bottom-16 left-4 z-[3] hidden md:block">
                <MiniElephant size={78} className="animate-drift" />
              </div>
              <div className="absolute bottom-16 right-4 z-[3] hidden md:block">
                <MiniElephant size={78} className="animate-drift scale-x-[-1]" />
              </div>

              {/* Mobile-safe floating accents — kept clear of the headline */}
              <div className="pointer-events-none absolute left-2 top-[42%] z-[3] opacity-80 sm:left-[18%] sm:top-[18%] sm:opacity-90">
                <Spiral size={28} className="sm:hidden" />
                <Spiral size={44} className="hidden sm:block animate-float" />
              </div>
              <div className="pointer-events-none absolute right-2 top-[46%] z-[3] opacity-80 sm:right-[16%] sm:top-[22%] sm:opacity-90">
                <FireworkChakra size={32} className="sm:hidden" />
                <FireworkChakra
                  size={48}
                  className="hidden sm:block animate-spin-slow"
                />
              </div>
              <div className="pointer-events-none absolute bottom-28 left-3 z-[3] hidden xs:block sm:left-[12%] sm:bottom-[28%] sm:block">
                <StarBurst size={22} className="sm:hidden" />
                <StarBurst size={32} className="hidden animate-drift sm:block" />
              </div>
              <div className="pointer-events-none absolute bottom-24 right-3 z-[3] sm:right-[14%] sm:bottom-[30%]">
                <SparkLines size={24} className="sm:hidden" />
                <div className="hidden animate-float sm:block" style={{ animationDelay: "0.5s" }}>
                  <SparkLines size={34} />
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-10 left-1 z-[3] sm:bottom-2 sm:left-2">
                <PetalCorner size={40} className="sm:hidden" />
                <PetalCorner size={64} className="hidden sm:block" />
              </div>
              <div className="pointer-events-none absolute bottom-10 right-1 z-[3] sm:bottom-2 sm:right-2">
                <PetalCorner size={40} flip className="sm:hidden" />
                <PetalCorner size={64} flip className="hidden sm:block" />
              </div>

              {/* Central composition */}
              <div className="relative z-[4] flex flex-col items-center justify-center px-1 pb-6 pt-2 text-center sm:min-h-[64vh] sm:pb-8 sm:pt-4">
                <motion.div
                  initial={enter({ scale: 0.6, opacity: 0 })}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.1,
                    duration: 0.55,
                    type: "spring",
                    stiffness: 160,
                  }}
                  className="mb-1 sm:mb-2"
                  aria-hidden
                >
                  <SparkLines size={32} className="sm:hidden" />
                  <SparkLines size={42} className="hidden sm:block" />
                </motion.div>

                <motion.p
                  className="font-body text-[0.62rem] font-bold uppercase tracking-[0.22em] text-ink/80 sm:text-xs sm:tracking-[0.32em]"
                  initial={enter({ opacity: 0, y: 12 })}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  A little festive · A little feral
                </motion.p>

                <motion.h1
                  id="hero-title"
                  className="mt-1 font-display text-[clamp(3.4rem,22vw,9.5rem)] leading-[0.82] text-mustard text-outline-thick sm:mt-2"
                  initial={enter({ opacity: 0, y: 30 })}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  SWIG
                </motion.h1>

                <motion.p
                  className="font-display text-[clamp(1.85rem,12vw,4.8rem)] leading-none text-magenta text-outline -mt-0.5 sm:-mt-2"
                  initial={enter({ opacity: 0, x: -20 })}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.55 }}
                >
                  NIGHT
                </motion.p>

                <motion.div
                  className="mt-2 sm:mt-4"
                  initial={enter({ opacity: 0, scale: 0.85 })}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.38 }}
                >
                  <span className="pill-magenta font-editorial text-sm italic sm:text-xl">
                    {EVENT.edition}
                  </span>
                </motion.div>

                <motion.div
                  className="mt-3 sm:mt-6"
                  initial={enter({ opacity: 0, y: 16 })}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <HandsWithSparks
                    size={96}
                    className="mx-auto sm:hidden"
                  />
                  <HandsWithSparks
                    size={160}
                    className="mx-auto hidden sm:block"
                  />
                </motion.div>

                <motion.div
                  className="ribbon mt-3 font-display text-sm tracking-wide sm:mt-4 sm:text-2xl"
                  initial={enter({ opacity: 0, rotate: -8 })}
                  animate={{ opacity: 1, rotate: -2 }}
                  transition={{ delay: 0.52 }}
                >
                  {EVENT.dateShort} · {EVENT.timeShort}
                </motion.div>

                <motion.p
                  className="mt-3 max-w-[16rem] font-body text-xs font-semibold text-ink sm:mt-5 sm:max-w-md sm:text-base"
                  initial={enter({ opacity: 0 })}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.58 }}
                >
                  <span className="inline-block border-b-2 border-ink/30 pb-0.5">
                    {EVENT.location}
                  </span>
                </motion.p>

                <a
                  href="#details"
                  className="focus-ring tap-bounce mt-4 inline-flex min-h-11 items-center gap-2 bg-magenta px-5 py-3 font-display text-base tracking-wide text-cream transition-transform active:translate-y-0 sm:mt-6 sm:text-lg sm:hover:-translate-y-0.5"
                  style={{
                    border: "2.5px solid #17121D",
                    boxShadow: "3px 3px 0 #17121D",
                  }}
                >
                  PIN THE NIGHT ↓
                </a>
              </div>

              <div className="relative z-[4] -mx-3 border-t-[3px] border-ink bg-ink-deep px-3 py-2.5 text-center sm:-mx-8 sm:px-8 sm:py-3 lg:-mx-12">
                <p className="font-body text-[0.58rem] font-bold uppercase tracking-[0.16em] text-mustard sm:text-xs sm:tracking-[0.22em]">
                  Invite only · Bring your people · Leave with a story
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
