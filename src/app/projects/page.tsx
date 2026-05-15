"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { ProjectCard } from "@/components/ProjectCard";
import { CtaBand } from "@/components/CtaBand";
import { PageMotion } from "@/components/PageMotion";
import { PROJECTS } from "@/lib/content";
import { projects, type Project } from "@/data/projects";
import { PROJECTS_HERO } from "@/lib/images";
import { EXPENSIVE_EASE } from "@/lib/motion";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <PageMotion>
      <Hero
        variant="page"
        image={PROJECTS_HERO}
        imageAlt="Recently completed Edmonton roof"
        eyebrow={PROJECTS.heroEyebrow}
        headline={PROJECTS.heroHeadline}
        subhead={PROJECTS.heroSubhead}
      />

      <Section bg="cream">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3">
          {PROJECTS.filters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`relative rounded-full border px-5 py-2.5 text-xs uppercase tracking-eyebrow transition-all duration-300 ${
                  active
                    ? "border-ink-900 bg-ink-900 text-cream-50"
                    : "border-cream-300 bg-transparent text-ink-700 hover:border-clay-500 hover:text-ink-900"
                }`}
              >
                {f}
              </button>
            );
          })}
          <span className="ml-auto text-xs uppercase tracking-eyebrow text-ink-500">
            Showing {filtered.length} of {projects.length}
          </span>
        </div>

        {/* Asymmetric grid */}
        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              priority={i < 3}
              onClick={() => setActive(p)}
            />
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="YOUR PROJECT"
        headline="Add your roof to the portfolio."
        subhead="Free inspection, photo report, written quote — same friendly process for every job, big or small."
      />

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-900/85 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: EXPENSIVE_EASE }}
              className="relative grid w-full max-w-5xl grid-cols-1 overflow-hidden bg-cream-50 lg:grid-cols-[1.2fr_1fr]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center bg-cream-50/80 text-ink-900 backdrop-blur-sm transition hover:bg-cream-50"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
              <div className="relative aspect-[4/5] w-full lg:aspect-auto">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col p-8 md:p-10">
                <Eyebrow>{active.category}</Eyebrow>
                <h2 className="headline-section mt-4 text-3xl text-ink-900 md:text-4xl">
                  {active.title}
                </h2>
                <p className="mt-2 text-sm uppercase tracking-eyebrow text-ink-500">
                  {active.location}
                </p>
                <dl className="mt-8 space-y-5 text-sm">
                  <div>
                    <dt className="text-[11px] uppercase tracking-eyebrow text-clay-500">
                      Scope
                    </dt>
                    <dd className="mt-2 text-ink-700">{active.scope}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-eyebrow text-clay-500">
                      Materials
                    </dt>
                    <dd className="mt-2 text-ink-700">{active.materials}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-eyebrow text-clay-500">
                      Notes
                    </dt>
                    <dd className="mt-2 leading-relaxed text-ink-700">
                      {active.details}
                    </dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageMotion>
  );
}
