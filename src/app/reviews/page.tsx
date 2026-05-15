"use client";

import { useState, useMemo } from "react";
import { Star } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { PageMotion } from "@/components/PageMotion";
import { REVIEWS, SITE } from "@/lib/content";
import { reviews } from "@/data/reviews";
import { REVIEWS_HERO } from "@/lib/images";

export default function ReviewsPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return reviews;
    return reviews.filter((r) => r.source === filter);
  }, [filter]);

  return (
    <PageMotion>
      <Hero
        variant="page"
        image={REVIEWS_HERO}
        imageAlt="Smiling Alberta family in front of their home"
        eyebrow={REVIEWS.heroEyebrow}
        headline={REVIEWS.heroHeadline}
        subhead={REVIEWS.heroSubhead}
      />

      {/* Stats */}
      <Section bg="cream" spacing="tight" className="border-b border-cream-200">
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-3">
            <div className="md:border-r md:border-cream-300">
              <p className="font-serif text-6xl text-ink-900">{SITE.averageRating}</p>
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-clay-500 text-clay-500" aria-hidden />
                ))}
              </div>
              <p className="mt-3 text-sm text-ink-500">Average across all sources</p>
            </div>
            <div className="md:border-r md:border-cream-300">
              <p className="font-serif text-6xl text-ink-900">{SITE.reviewCount}+</p>
              <p className="mt-6 text-sm text-ink-500">Verified reviews</p>
            </div>
            <div className="space-y-3">
              <p className="text-[11px] uppercase tracking-eyebrow text-clay-500">
                Where homeowners review us
              </p>
              <ul className="space-y-2 text-base text-ink-900">
                <li className="flex items-center justify-between">
                  <span>Google</span>
                  <span className="text-ink-500">4.7 ★</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>HomeStars</span>
                  <span className="text-ink-500">4.8 ★</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>BBB</span>
                  <span className="text-ink-500">A+</span>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Picture report explainer */}
      <Section bg="cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{REVIEWS.pictureReportEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {REVIEWS.pictureReportHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {REVIEWS.pictureReportBody}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Filter + reviews grid */}
      <Section bg="cream">
        <div className="flex flex-wrap items-center gap-3">
          {REVIEWS.filters.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-eyebrow transition-all duration-300 ${
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
            {filtered.length} reviews
          </span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <TestimonialCard key={r.name + i} review={r} index={i} />
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="JOIN THE LIST"
        headline="Be the next five-star review."
        subhead="Free inspection, written quote, and the kind of work that gets written about a year later."
      />
    </PageMotion>
  );
}
