"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { EXPENSIVE_EASE } from "@/lib/motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
  priority?: boolean;
  index?: number;
}

export function ProjectCard({ project, onClick, priority, index = 0 }: ProjectCardProps) {
  const aspect =
    project.span === "tall"
      ? "aspect-[4/5]"
      : project.span === "wide"
      ? "aspect-[3/2]"
      : "aspect-[4/5]";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: EXPENSIVE_EASE }}
      className="group block w-full text-left"
    >
      <div className={`relative ${aspect} w-full overflow-hidden bg-cream-200`}>
        <Image
          src={project.image}
          alt={`${project.title} — ${project.location}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-expensive group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
        <div className="absolute inset-0 flex translate-y-2 flex-col justify-end p-6 opacity-0 transition-all duration-500 ease-expensive group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-[11px] uppercase tracking-eyebrow text-clay-400">
            {project.category}
          </span>
          <h3 className="headline-sub mt-2 text-2xl text-cream-50">{project.title}</h3>
          <p className="mt-2 text-sm text-cream-50/80">{project.location}</p>
        </div>
        <div className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center bg-cream-50/0 text-cream-50 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:bg-cream-50/15 group-hover:opacity-100">
          <Plus className="h-4 w-4" aria-hidden />
        </div>
      </div>
      <div className="mt-4">
        <h4 className="font-serif text-lg text-ink-900">{project.title}</h4>
        <p className="mt-1 text-xs uppercase tracking-eyebrow text-ink-500">
          {project.location} · {project.category}
        </p>
      </div>
    </motion.button>
  );
}
