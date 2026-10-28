"use client";

import { Reveal } from "@/components/Reveal";
import { Grain } from "@/components/Grain";
import { Diya } from "@/components/illustrations/Diya";
import {
  FireworkChakra,
  PetalCorner,
  Spiral,
  StarBurst,
} from "@/components/illustrations/Decor";
import { EVENT } from "@/lib/messages";

export function Closing() {
  return (
    <section
      className="relative overflow-hidden bg-ink-deep section-pad pb-8"
      aria-labelledby="closing-title"
    >
      <div className="mx-auto max-w-5xl">
        <div className="scallop-outer">
          <div className="poster-frame relative overflow-hidden">
            <div className="relative bg-ink px-4 py-12 text-center sm:px-10 sm:py-20">
              <Grain light />

              <div className="pointer-events-none absolute left-2 top-4 opacity-70 sm:left-8 sm:top-6 sm:opacity-80">
                <Diya size={36} className="sm:hidden" />
                <Diya size={48} className="hidden sm:inline-flex" />
              </div>
              <div className="pointer-events-none absolute right-2 top-4 opacity-70 sm:right-8 sm:top-6 sm:opacity-80">
                <Diya size={36} className="sm:hidden" />
                <Diya size={48} className="hidden sm:inline-flex" />
              </div>
              <div className="pointer-events-none absolute bottom-16 left-3 hidden opacity-70 sm:left-8 sm:bottom-20 sm:block">
                <Spiral size={48} />
              </div>
              <div className="pointer-events-none absolute bottom-20 right-3 hidden opacity-80 sm:right-8 sm:bottom-24 sm:block">
                <FireworkChakra size={52} />
              </div>
              <div className="pointer-events-none absolute bottom-1 left-1 sm:bottom-2 sm:left-2">
                <PetalCorner size={40} className="sm:hidden" />
                <PetalCorner size={56} className="hidden sm:block" />
              </div>
              <div className="pointer-events-none absolute bottom-1 right-1 sm:bottom-2 sm:right-2">
                <PetalCorner size={40} flip className="sm:hidden" />
                <PetalCorner size={56} flip className="hidden sm:block" />
              </div>

              <div className="relative z-[3]">
                <Reveal>
                  <StarBurst size={28} className="mx-auto mb-3 sm:mb-4 sm:hidden" />
                  <StarBurst size={36} className="mx-auto mb-4 hidden sm:block" />
                  <h2
                    id="closing-title"
                    className="mx-auto max-w-3xl font-display text-[clamp(1.75rem,7.5vw,4.2rem)] leading-[0.95] text-cream"
                  >
                    ONE NIGHT.{" "}
                    <span className="text-mustard">ALL YOUR PEOPLE.</span>{" "}
                    <span className="text-magenta">A LITTLE BIT OF MAGIC.</span>
                  </h2>
                </Reveal>

                <Reveal delay={0.1}>
                  <p className="mx-auto mt-4 max-w-md font-editorial text-base italic text-cream/80 sm:mt-5 sm:text-xl">
                    Save the date. Bring the energy. We&apos;ll handle the chaos.
                  </p>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="ribbon mt-6 font-display text-sm sm:mt-8 sm:text-xl">
                    {EVENT.dateShort} · {EVENT.timeShort}
                  </div>
                  <p className="mt-3 font-body text-xs font-semibold text-cream/70 sm:mt-4 sm:text-sm">
                    {EVENT.location}
                  </p>
                </Reveal>

                <Reveal delay={0.2}>
                  <a
                    href="#details"
                    className="focus-ring tap-bounce mt-6 inline-flex min-h-12 w-full max-w-xs items-center justify-center gap-2 bg-magenta px-6 py-3.5 font-display text-lg tracking-wide text-cream transition-transform active:translate-y-0 sm:mt-8 sm:w-auto sm:text-xl sm:hover:-translate-y-0.5"
                    style={{
                      border: "3px solid #F4BD35",
                      boxShadow: "4px 4px 0 #17121D",
                    }}
                  >
                    SEE YOU AT SWIG ✦
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center gap-2 pb-4 text-center">
          <p className="font-editorial text-sm italic text-cream/50">
            — printed for the night, not the algorithm —
          </p>
          <p className="font-body text-[0.65rem] font-bold uppercase tracking-[0.28em] text-mustard/70">
            SWIG · Diwali Night · 2026
          </p>
        </footer>
      </div>
    </section>
  );
}
