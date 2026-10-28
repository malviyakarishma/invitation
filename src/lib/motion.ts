"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** Avoid hydration mismatches from prefers-reduced-motion. */
export function useSafeMotion() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return {
    ready,
    reduce: reduce === true,
    /** Use as Framer Motion `initial` — false until mounted. */
    enter: <T extends object>(from: T): T | false =>
      ready && reduce !== true ? from : false,
  };
}
