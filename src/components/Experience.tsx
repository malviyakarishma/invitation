"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { NightMenu } from "@/components/sections/NightMenu";
import { EventDetails } from "@/components/sections/EventDetails";
import { ChaosCorner } from "@/components/sections/ChaosCorner";
import { Closing } from "@/components/sections/Closing";
import { SparkleBurst } from "@/components/SparkleBurst";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SectionFade } from "@/components/Reveal";
import { useSafeMotion } from "@/lib/motion";

export function Experience() {
  const [mounted, setMounted] = useState(false);
  const [burstTick, setBurstTick] = useState(0);
  const { reduce } = useSafeMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const fireBurst = useCallback(() => setBurstTick((t) => t + 1), []);

  if (!mounted) {
    return (
      <div
        className="flex min-h-dvh items-center justify-center bg-ink-deep"
        aria-busy="true"
        aria-label="Loading SWIG Night"
      >
        <div className="font-display text-4xl tracking-wide text-mustard">
          SWIG
        </div>
      </div>
    );
  }

  return (
    <>
      <SmoothScroll />
      <SparkleBurst trigger={burstTick} />
      <motion.main
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero onDiyaBurst={fireBurst} />
        </motion.div>

        <SectionFade>
          <Manifesto />
        </SectionFade>

        <SectionFade delay={0.05}>
          <NightMenu />
        </SectionFade>

        <SectionFade delay={0.05}>
          <EventDetails />
        </SectionFade>

        <SectionFade delay={0.05}>
          <ChaosCorner externalBurst={burstTick} />
        </SectionFade>

        <SectionFade delay={0.05}>
          <Closing />
        </SectionFade>
      </motion.main>
    </>
  );
}
