"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SparkLines, StarBurst } from "@/components/illustrations/Decor";
import { useSafeMotion } from "@/lib/motion";

type CardKey = "dance" | "food" | "coke" | "games";

const CARDS: {
  key: CardKey;
  num: string;
  title: string;
  copy: string;
  accent: string;
  ink?: string;
}[] = [
  {
    key: "dance",
    num: "01",
    title: "THE DANCE FLOOR",
    copy: "Good music, chaotic moves, and absolutely no judgment.",
    accent: "#08A6B5",
  },
  {
    key: "food",
    num: "02",
    title: "THE FOOD SCENE",
    copy: "Snacks, late-night cravings, and multiple trips to the food table.",
    accent: "#F28C28",
  },
  {
    key: "coke",
    num: "03",
    title: "DIET COKE CLUB",
    copy: "Cold Diet Coke, good conversations, and unofficial hydration breaks.",
    accent: "#EC1678",
  },
  {
    key: "games",
    num: "04",
    title: "GAME ON",
    copy: "Friendly competition, questionable strategies, and bragging rights.",
    accent: "#F4BD35",
    ink: "#17121D",
  },
];

function CardArt({ type, active }: { type: CardKey; active: boolean }) {
  if (type === "dance") {
    return (
      <div className="relative flex h-14 items-end justify-center gap-1.5 sm:h-16 sm:gap-2" aria-hidden>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`w-1.5 rounded-t-full bg-ink sm:w-2 ${active ? "animate-bounce-star" : ""}`}
            style={{
              height: 12 + ((i * 9) % 28),
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        {active && (
          <>
            <StarBurst size={22} className="absolute -left-1 top-0 animate-bounce-star" />
            <StarBurst size={18} className="absolute -right-1 top-2 animate-bounce-star" />
          </>
        )}
      </div>
    );
  }

  if (type === "food") {
    return (
      <div className="relative flex h-14 items-center justify-center gap-3 sm:h-16" aria-hidden>
        <svg viewBox="0 0 40 40" width="36" height="36" className={active ? "animate-float" : ""}>
          <ellipse cx="20" cy="28" rx="16" ry="6" fill="#F5E5C3" stroke="#17121D" strokeWidth="2.5" />
          <path d="M8 28c2-12 8-20 12-20s10 8 12 20" fill="#C0392B" stroke="#17121D" strokeWidth="2.5" />
        </svg>
        <svg
          viewBox="0 0 40 40"
          width="32"
          height="32"
          className={active ? "animate-float" : ""}
          style={{ animationDelay: "0.3s" }}
        >
          <circle cx="20" cy="20" r="14" fill="#F4BD35" stroke="#17121D" strokeWidth="2.5" />
          <circle cx="14" cy="16" r="2" fill="#17121D" />
          <circle cx="22" cy="22" r="2.5" fill="#17121D" />
          <circle cx="26" cy="14" r="1.8" fill="#17121D" />
        </svg>
        {active && (
          <span className="absolute -top-1 right-2 font-editorial text-xs italic text-ink sm:right-4">
            again?
          </span>
        )}
      </div>
    );
  }

  if (type === "coke") {
    return (
      <div className="relative flex h-14 items-center justify-center sm:h-16" aria-hidden>
        <svg viewBox="0 0 48 56" width="40" height="48">
          <path
            d="M14 10h20l3 40c0 2-4 4-13 4s-13-2-13-4l3-40z"
            fill="#F5E5C3"
            stroke="#17121D"
            strokeWidth="2.5"
          />
          <rect x="12" y="6" width="24" height="8" rx="2" fill="#EC1678" stroke="#17121D" strokeWidth="2.5" />
          <text x="24" y="36" textAnchor="middle" fontSize="7" fontWeight="700" fill="#17121D">
            DC
          </text>
        </svg>
        {active &&
          [0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="absolute h-2 w-2 rounded-full bg-cream animate-fizz"
              style={{
                left: `${40 + i * 12}%`,
                bottom: "30%",
                animationDelay: `${i * 0.2}s`,
                border: "1.5px solid #17121D",
              }}
            />
          ))}
      </div>
    );
  }

  return (
    <div className="relative flex h-14 items-center justify-center sm:h-16" aria-hidden>
      <svg viewBox="0 0 64 40" width="64" height="40" className={active ? "animate-float" : ""}>
        <rect x="4" y="8" width="28" height="24" rx="3" fill="#F5E5C3" stroke="#17121D" strokeWidth="2.5" />
        <rect x="32" y="8" width="28" height="24" rx="3" fill="#08A6B5" stroke="#17121D" strokeWidth="2.5" />
        <circle cx="18" cy="20" r="5" fill="#EC1678" stroke="#17121D" strokeWidth="2" />
        <path d="M40 14h12M40 20h12M40 26h8" stroke="#17121D" strokeWidth="2" strokeLinecap="round" />
      </svg>
      {active && (
        <span
          className="absolute -right-1 -top-2 rotate-12 bg-magenta px-2 py-0.5 font-display text-[0.65rem] text-cream sm:-right-2 sm:text-xs"
          style={{ border: "2px solid #17121D" }}
        >
          YOUR MOVE
        </span>
      )}
    </div>
  );
}

export function NightMenu() {
  const [active, setActive] = useState<CardKey | null>(null);
  const { reduce } = useSafeMotion();

  return (
    <section
      className="relative overflow-x-clip bg-ink section-pad"
      aria-labelledby="menu-title"
    >
      <div className="pointer-events-none absolute right-4 top-8 opacity-40 sm:right-10 sm:top-12 sm:opacity-50">
        <SparkLines size={28} className="sm:hidden" />
        <SparkLines size={40} className="hidden sm:block" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-mustard">
            The night menu
          </p>
          <h2
            id="menu-title"
            className="mt-3 max-w-2xl font-display text-[clamp(1.9rem,8vw,4rem)] leading-[0.95] text-cream"
          >
            WHAT ARE WE{" "}
            <span className="text-magenta">GETTING INTO?</span>
          </h2>
          <p className="mt-3 max-w-lg font-body text-sm text-cream/70 sm:text-base">
            Four corners of the night. Tap a card — each one has a little personality.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {CARDS.map((card, i) => {
            const isActive = active === card.key;
            return (
              <Reveal key={card.key} delay={0.08 * i} variant="scale">
                <motion.button
                  type="button"
                  className="focus-ring irregular-frame group relative w-full overflow-hidden p-4 text-left sm:p-6"
                  style={{
                    background: card.accent,
                    color: card.ink ?? "#F5E5C3",
                    WebkitTapHighlightColor: "transparent",
                  }}
                  aria-pressed={isActive}
                  onPointerEnter={(e) => {
                    if (e.pointerType === "mouse" && !reduce) setActive(card.key);
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType === "mouse") setActive(null);
                  }}
                  onClick={() => {
                    setActive((prev) => (prev === card.key ? null : card.key));
                  }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-2xl opacity-40 sm:text-4xl">
                      {card.num}
                    </span>
                    <CardArt type={card.key} active={isActive} />
                  </div>
                  <h3 className="mt-2 font-display text-xl tracking-wide sm:mt-3 sm:text-3xl">
                    {card.title}
                  </h3>
                  <p
                    className="mt-2 max-w-sm font-body text-sm leading-relaxed sm:text-[0.95rem]"
                    style={{ opacity: 0.92 }}
                  >
                    {card.copy}
                  </p>
                  {isActive && (
                    <p className="mt-2 font-editorial text-xs italic opacity-80 sm:hidden">
                      Looking good. Tap again to chill.
                    </p>
                  )}
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
