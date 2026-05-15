"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { EXPENSIVE_EASE, viewportOnce } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right";

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.8,
}: {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  duration?: number;
}) {
  const offset = 40;
  const initial =
    direction === "up"
      ? { opacity: 0, y: offset }
      : direction === "down"
      ? { opacity: 0, y: -offset }
      : direction === "left"
      ? { opacity: 0, x: offset }
      : { opacity: 0, x: -offset };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={viewportOnce}
      transition={{
        duration,
        delay,
        ease: EXPENSIVE_EASE,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className = "",
  staggerChildren = 0.08,
}: {
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: EXPENSIVE_EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
