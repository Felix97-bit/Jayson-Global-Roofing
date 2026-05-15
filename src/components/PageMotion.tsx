"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function PageMotion({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
    >
      {children}
    </motion.div>
  );
}
