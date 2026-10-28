"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Diya } from "@/components/illustrations/Diya";
import {
  FireworkChakra,
  SparkLines,
  Spiral,
  StarBurst,
} from "@/components/illustrations/Decor";
import { Grain } from "@/components/Grain";
import { EVENT } from "@/lib/messages";
import { useSafeMotion } from "@/lib/motion";

type IntroProps = {
  open: boolean;
  onEnter: () => void;
};

export function Intro({ open, onEnter }: IntroProps) {
  const { reduce, enter } = useSafeMotion();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-ink-deep px-3 py-4 sm:px-4 sm:py-6"
          initial={{ opacity: 1 }}
          exit={
            reduce
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  scale: 1.04,
                  filter: "blur(8px)",
                  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                }
          }
          role="dialog"
          aria-modal="true"
          aria-label="Enter SWIG Night"
        >
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div className="absolute -left-10 top-16 animate-drift opacity-70">
              <Spiral size={64} />
            </div>
            <div className="absolute right-8 top-24 animate-float opacity-80">
              <StarBurst size={40} />
            </div>
            <div
              className="absolute bottom-24 left-10 animate-float opacity-70"
              style={{ animationDelay: "1s" }}
            >
              <FireworkChakra size={52} />
            </div>
            <div
              className="absolute bottom-32 right-12 animate-drift opacity-75"
              style={{ animationDelay: "0.6s" }}
            >
              <SparkLines size={36} />
            </div>
          </div>

          <motion.div
            className="scallop-outer relative my-auto w-full max-w-lg shrink-0"
            initial={enter({ scale: 0.92, opacity: 0, y: 24 })}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={
              reduce
                ? { opacity: 0 }
                : {
                    scale: 1.08,
                    rotate: -1.5,
                    y: -40,
                    opacity: 0,
                    transition: { duration: 0.55 },
                  }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="poster-frame relative overflow-hidden">
              <div className="poster-teal relative px-5 py-7 text-center sm:px-10 sm:py-11">
                <Grain />
                <div className="relative z-[3] flex flex-col items-center gap-2.5 sm:gap-4">
                  <Diya size={52} className="sm:hidden" />
                  <Diya size={64} className="hidden sm:inline-flex" />

                  <p className="font-body text-[0.65rem] font-bold uppercase tracking-[0.28em] text-ink sm:text-[0.7rem]">
                    You&apos;re invited
                  </p>

                  <div>
                    <h1 className="font-display text-[clamp(3rem,14vw,5.2rem)] leading-[0.85] text-mustard text-outline-thick">
                      SWIG
                    </h1>
                    <p className="font-display text-[clamp(1.6rem,8vw,2.6rem)] leading-none text-magenta text-outline -mt-0.5">
                      NIGHT
                    </p>
                  </div>

                  <span className="pill-magenta font-editorial text-sm italic sm:text-lg">
                    {EVENT.edition}
                  </span>

                  <p className="font-body text-xs font-bold tracking-wide text-ink sm:text-base">
                    {EVENT.dateShort} · {EVENT.timeShort}
                  </p>

                  <p className="max-w-xs font-editorial text-base leading-snug text-ink/90 sm:text-xl">
                    Good people. Loud music. Questionable dance moves.
                  </p>

                  <button
                    type="button"
                    onClick={onEnter}
                    className="focus-ring mt-1 inline-flex items-center gap-2 bg-ink px-5 py-2.5 font-display text-lg tracking-wide text-mustard transition-transform hover:-translate-y-0.5 hover:bg-ink-deep active:translate-y-0 sm:mt-2 sm:px-6 sm:py-3 sm:text-xl"
                    style={{
                      border: "3px solid #17121D",
                      boxShadow: "4px 4px 0 #17121D",
                    }}
                  >
                    ENTER THE NIGHT →
                  </button>

                  <button
                    type="button"
                    onClick={onEnter}
                    className="focus-ring font-body text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink/60 underline-offset-4 hover:text-ink hover:underline sm:text-xs"
                  >
                    Skip intro
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
