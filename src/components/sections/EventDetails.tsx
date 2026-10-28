"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { Grain } from "@/components/Grain";
import { PaymentQr } from "@/components/PaymentQr";
import { EVENT } from "@/lib/messages";
import { useSafeMotion } from "@/lib/motion";

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  EVENT.mapsQuery,
)}`;

function PassDetails() {
  return (
    <>
      <p className="font-body text-[0.65rem] font-bold uppercase tracking-[0.22em] text-magenta sm:tracking-[0.28em]">
        Admit one · Diwali night
      </p>
      <h3 className="mt-2 font-display text-2xl text-ink sm:text-4xl">
        {EVENT.name}
      </h3>

      <dl className="mt-5 space-y-3 font-body text-sm sm:mt-7 sm:space-y-3.5 sm:text-base">
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
          <dt className="w-24 shrink-0 font-bold uppercase tracking-wider text-ink/45">
            Date
          </dt>
          <dd className="font-semibold text-ink">{EVENT.dateLong}</dd>
        </div>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
          <dt className="w-24 shrink-0 font-bold uppercase tracking-wider text-ink/45">
            Time
          </dt>
          <dd className="font-semibold text-ink">{EVENT.time}</dd>
        </div>
        <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4">
          <dt className="w-24 shrink-0 font-bold uppercase tracking-wider text-ink/45">
            Location
          </dt>
          <dd className="font-semibold text-ink">{EVENT.location}</dd>
        </div>
      </dl>
    </>
  );
}

function Stamp({ show, reduce }: { show: boolean; reduce: boolean }) {
  if (!show) return null;
  return (
    <div
      className={`pointer-events-none absolute right-4 top-4 z-[2] rotate-[-12deg] rounded-full border-[3px] border-magenta px-2.5 py-1.5 font-display text-xs tracking-widest text-magenta md:right-6 md:top-6 ${
        reduce ? "" : "animate-stamp"
      }`}
    >
      SEEN ✦
    </div>
  );
}

/** Desktop: QR on the front right — no flip */
function DesktopPass({ stamped, reduce }: { stamped: boolean; reduce: boolean }) {
  return (
    <article
      className="relative hidden overflow-hidden bg-cream md:block"
      style={{
        border: "3px solid #17121D",
        boxShadow: "8px 8px 0 #17121D",
        borderRadius: "18px 8px 18px 8px",
      }}
    >
      <div className="grid md:grid-cols-[1fr_220px] lg:grid-cols-[1fr_260px]">
        <div className="relative p-8 lg:p-10">
          <PassDetails />
          <p className="mt-6 font-editorial text-sm italic text-ink/55">
            Scan the QR on the right to pay ₹600
          </p>
          <Stamp show={stamped} reduce={reduce} />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 border-l-2 border-dashed border-ink/25 bg-mustard/35 px-5 py-8 lg:px-6">
          <p className="font-display text-xl tracking-wide text-ink">PAY</p>
          <PaymentQr size={152} light showLabel />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t-2 border-ink bg-ink px-8 py-2.5">
        <span className="font-display text-base tracking-wide text-mustard">
          SWIG
        </span>
        <span className="font-body text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cream/60">
          Diwali Night · 08.11.26
        </span>
      </div>
    </article>
  );
}

/** Mobile: flip the pass to reveal QR */
function MobilePass({
  stamped,
  flipped,
  reduce,
  onFlip,
}: {
  stamped: boolean;
  flipped: boolean;
  reduce: boolean;
  onFlip: () => void;
}) {
  return (
    <div className="md:hidden" style={{ perspective: 1200 }}>
      <motion.div
        className="relative w-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
      >
        {/* Front */}
        <div
          className="relative overflow-hidden bg-cream"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            border: "3px solid #17121D",
            boxShadow: "5px 5px 0 #17121D",
            borderRadius: "16px 6px 16px 6px",
          }}
        >
          <button
            type="button"
            className="focus-ring w-full cursor-pointer border-0 bg-transparent p-0 text-left"
            onClick={onFlip}
            aria-label="Flip ticket to payment QR"
          >
            <div className="p-5">
              <PassDetails />
              <p className="mt-4 font-editorial text-sm italic text-ink/60">
                Tap to flip · payment QR on the back
              </p>
            </div>
            <div
              className="flex items-center justify-center border-t-2 border-dashed border-ink/30 bg-mustard/40 px-5 py-4"
              aria-hidden
            >
              <span className="font-display text-4xl text-ink">SWIG</span>
            </div>
          </button>
          <Stamp show={stamped && !flipped} reduce={reduce} />
        </div>

        {/* Back — QR */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-5 text-center"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            border: "3px solid #F4BD35",
            boxShadow: "5px 5px 0 #17121D",
            borderRadius: "16px 6px 16px 6px",
          }}
          aria-hidden={!flipped}
        >
          <p className="font-display text-2xl text-mustard">CONTRIBUTE</p>
          <p className="mt-1 max-w-xs font-editorial text-sm italic text-cream/80">
            Scan to pay ₹600
          </p>
          <div className="mt-4">
            <PaymentQr size={140} light={false} showLabel />
          </div>
          {stamped && (
            <div className="mt-3 rotate-[-8deg] rounded-full border-[3px] border-mustard px-3 py-1.5 font-display text-xs tracking-widest text-mustard">
              VALID ✦ 08.11.26
            </div>
          )}
          <button
            type="button"
            onClick={onFlip}
            className="focus-ring tap-bounce mt-4 inline-flex min-h-10 items-center bg-mustard px-4 py-2 font-display text-sm tracking-wide text-ink"
            style={{
              border: "2.5px solid #17121D",
              boxShadow: "3px 3px 0 #EC1678",
            }}
          >
            ← BACK TO PASS
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export function EventDetails() {
  const [stamped, setStamped] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const { reduce } = useSafeMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setStamped(true), reduce ? 0 : 600);
    return () => window.clearTimeout(t);
  }, [reduce]);

  const flip = () => {
    setFlipped((f) => !f);
    if (!stamped) setStamped(true);
  };

  return (
    <section
      id="details"
      className="relative scroll-mt-4 overflow-x-clip bg-teal section-pad sm:scroll-mt-6"
      aria-labelledby="details-title"
    >
      <Grain light />

      <div className="relative z-[3] mx-auto max-w-4xl">
        <Reveal>
          <p className="text-center font-body text-xs font-bold uppercase tracking-[0.3em] text-ink">
            Pin the night
          </p>
          <h2
            id="details-title"
            className="mt-3 text-center font-display text-[clamp(1.9rem,7vw,3.8rem)] leading-[0.95] text-ink"
          >
            YOUR FESTIVAL PASS
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 sm:mt-12">
          <DesktopPass stamped={stamped} reduce={reduce} />
          <MobilePass
            stamped={stamped}
            flipped={flipped}
            reduce={reduce}
            onFlip={flip}
          />
        </Reveal>

        <Reveal
          delay={0.15}
          className="mt-7 flex flex-col items-center gap-3 sm:mt-10"
        >
          <button
            type="button"
            onClick={flip}
            className="focus-ring tap-bounce inline-flex min-h-11 items-center gap-2 bg-magenta px-5 py-2.5 font-display text-base tracking-wide text-cream md:hidden"
            style={{
              border: "3px solid #17121D",
              boxShadow: "3px 3px 0 #F4BD35",
            }}
          >
            {flipped ? "PAYMENT QR IS UP ✦" : "SHOW PAYMENT QR ✦"}
          </button>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring tap-bounce inline-flex min-h-12 w-full max-w-sm items-center justify-center gap-2 bg-ink px-6 py-3.5 font-display text-lg tracking-wide text-mustard transition-transform active:translate-y-0 sm:w-auto sm:text-xl sm:hover:-translate-y-0.5"
            style={{
              border: "3px solid #17121D",
              boxShadow: "4px 4px 0 #F4BD35",
            }}
          >
            GET DIRECTIONS →
          </a>
          <p className="px-2 text-center font-body text-xs text-ink/70">
            {EVENT.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
