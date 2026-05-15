"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { FAQ as FAQItem } from "@/data/faqs";
import { EXPENSIVE_EASE } from "@/lib/motion";

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-cream-300/60 border-y border-cream-300/60">
      {items.map((item, i) => {
        const isOpen = open === i;
        const id = `faq-${i}`;
        return (
          <li key={item.question}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors hover:bg-cream-100/60 lg:py-8"
            >
              <span className="font-serif text-lg text-ink-900 md:text-xl">
                {item.question}
              </span>
              <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center text-clay-500">
                {isOpen ? (
                  <Minus className="h-4 w-4" aria-hidden />
                ) : (
                  <Plus className="h-4 w-4" aria-hidden />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EXPENSIVE_EASE }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-8 pr-12 text-base leading-relaxed text-ink-700">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
