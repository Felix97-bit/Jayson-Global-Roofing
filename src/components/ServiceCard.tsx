"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import { EXPENSIVE_EASE } from "@/lib/motion";

interface ServiceCardProps {
  title: string;
  blurb: string;
  href: string;
  icon: string;
  index?: number;
}

export function ServiceCard({ title, blurb, href, icon, index = 0 }: ServiceCardProps) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[icon] ?? Icons.Hammer;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: EXPENSIVE_EASE }}
    >
      <Link
        href={href}
        className="group block h-full bg-bone p-8 transition-all duration-500 ease-expensive hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(28,24,20,0.2)]"
      >
        <div className="flex items-start justify-between">
          <div className="inline-flex h-12 w-12 items-center justify-center bg-cream-100 text-clay-500 transition-colors duration-500 group-hover:bg-clay-500 group-hover:text-cream-50">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <ArrowUpRight
            className="h-5 w-5 text-clay-500 opacity-40 transition-all duration-500 ease-expensive group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </div>
        <h3 className="headline-sub mt-8 text-2xl text-ink-900">{title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-ink-700">{blurb}</p>
        <div className="mt-8 inline-flex items-center gap-1 text-xs uppercase tracking-eyebrow text-clay-500">
          Learn more
        </div>
      </Link>
    </motion.div>
  );
}
