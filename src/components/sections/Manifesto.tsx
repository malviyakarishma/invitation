"use client";

import { Reveal } from "@/components/Reveal";
import { SparkLines, Spiral, StarBurst } from "@/components/illustrations/Decor";

const LINES = [
  "Show up dressed cute.",
  "Dance like the floor owes you money.",
  "Eat first. Dance later. Eat again.",
  "Find your people. Make a memory.",
];

export function Manifesto() {
  return (
    <section
      className="relative overflow-hidden bg-cream text-ink section-pad"
      aria-labelledby="manifesto-title"
    >
      <div className="pointer-events-none absolute left-3 top-8 opacity-50 sm:left-16 sm:top-10 sm:opacity-70">
        <Spiral size={36} className="sm:hidden" />
        <Spiral size={56} className="hidden sm:block" />
      </div>
      <div className="pointer-events-none absolute right-3 top-14 opacity-60 sm:right-20 sm:top-20 sm:opacity-80">
        <StarBurst size={28} className="sm:hidden" />
        <StarBurst size={40} className="hidden sm:block" />
      </div>
      <div className="pointer-events-none absolute bottom-10 left-1/4 hidden opacity-60 sm:block">
        <SparkLines size={36} />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <Reveal>
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-magenta">
            The party manifesto
          </p>
          <h2
            id="manifesto-title"
            className="mt-3 max-w-3xl font-display text-[clamp(1.95rem,8vw,4.6rem)] leading-[0.95] text-ink"
          >
            THE PLAN?{" "}
            <span className="text-magenta">THERE IS NO PLAN.</span>
          </h2>
        </Reveal>

        <ul className="mt-8 space-y-5 sm:mt-14 sm:space-y-7">
          {LINES.map((line, i) => (
            <Reveal key={line} delay={0.1 * i} y={28}>
              <li className="flex items-start gap-3 sm:gap-6">
                <span
                  className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center font-display text-base text-cream sm:h-11 sm:w-11 sm:text-xl"
                  style={{
                    background: i % 2 === 0 ? "var(--teal)" : "var(--saffron)",
                    border: "2.5px solid #17121D",
                    borderRadius: "40% 60% 55% 45% / 55% 40% 60% 45%",
                  }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={`font-editorial text-[clamp(1.35rem,4.2vw,2.35rem)] leading-tight ${
                    i === 1 ? "italic text-magenta" : "text-ink"
                  }`}
                >
                  {line}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2} className="mt-12 sm:mt-16">
          <div
            className="inline-block rotate-[-1.5deg] bg-ink px-5 py-3 text-cream"
            style={{
              border: "3px solid #17121D",
              boxShadow: "5px 5px 0 var(--mustard)",
              borderRadius: "12px 28px 16px 24px",
            }}
          >
            <p className="font-body text-sm font-semibold sm:text-base">
              Wholesome hearts. Chaotic feet. Pretty lighting.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
