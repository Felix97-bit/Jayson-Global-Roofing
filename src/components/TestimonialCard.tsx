"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { EXPENSIVE_EASE } from "@/lib/motion";
import type { Review } from "@/data/reviews";

export function TestimonialCard({
  review,
  index = 0,
}: {
  review: Review;
  index?: number;
}) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: EXPENSIVE_EASE }}
      className="flex h-full flex-col gap-8 bg-bone p-8 lg:p-10"
    >
      <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-clay-500 text-clay-500" aria-hidden />
        ))}
      </div>
      <blockquote className="font-serif text-xl italic leading-snug text-ink-900 md:text-2xl">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex items-end justify-between border-t border-cream-200 pt-6">
        <div>
          <p className="font-medium text-ink-900">{review.name}</p>
          <p className="text-sm text-ink-500">{review.location}</p>
        </div>
        <span className="text-[11px] uppercase tracking-eyebrow text-clay-500">
          via {review.source}
        </span>
      </figcaption>
    </motion.figure>
  );
}
