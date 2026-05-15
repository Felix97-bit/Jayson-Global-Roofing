"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { EXPENSIVE_EASE } from "@/lib/motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 1.6,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const ms = duration * 1000;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: EXPENSIVE_EASE }}
      className="border-l border-clay-500/30 pl-6"
    >
      <div className="flex items-baseline font-serif text-[clamp(2.75rem,5vw,4.5rem)] leading-none text-ink-900">
        <span className="headline-section">
          {prefix}
          {display}
          {suffix}
        </span>
      </div>
      <p className="mt-4 text-sm leading-snug text-ink-700">{label}</p>
    </motion.div>
  );
}
