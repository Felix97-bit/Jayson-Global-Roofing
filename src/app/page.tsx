"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { TrustStrip } from "@/components/TrustStrip";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatCounter } from "@/components/StatCounter";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { HOME, SERVICES_LIST } from "@/lib/content";
import { reviews } from "@/data/reviews";
import {
  HERO_HOME,
  FEATURE_PROJECT_1,
  FEATURE_PROJECT_2,
  FEATURE_PROJECT_3,
} from "@/lib/images";

const featuredProjects = [
  {
    image: FEATURE_PROJECT_1,
    title: "Sherwood Park Re-Roof",
    description: "IKO Dynasty Architectural Shingles",
  },
  {
    image: FEATURE_PROJECT_2,
    title: "Calgary Hail Restoration",
    description: "Insurance Claim, 4-Day Turnaround",
  },
  {
    image: FEATURE_PROJECT_3,
    title: "Edmonton Custom Build",
    description: "Standing Seam Metal Roof",
  },
];

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
    >
      <Hero
        variant="home"
        image={HERO_HOME}
        imageAlt="Cream-toned suburban Alberta home with a high-quality asphalt shingle roof"
        eyebrow={HOME.heroEyebrow}
        headline={HOME.heroHeadline}
        subhead={HOME.heroSubhead}
        primaryCta={{ label: HOME.heroPrimaryCta, href: "/quote" }}
        secondaryCta={{ label: HOME.heroSecondaryCta, href: "tel:", isPhone: true }}
      />

      {/* Trust strip */}
      <Section bg="cream" spacing="tight" className="border-b border-cream-200">
        <Reveal>
          <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-ink-700">
            A+ BBB · IKO RoofPro Craftsman Premier · Malarkey Emerald Pro · Haag Certified Inspectors · 350+ five-star reviews
          </p>
          <div className="mt-8">
            <TrustStrip />
          </div>
        </Reveal>
      </Section>

      {/* Intro / Why us */}
      <Section bg="cream">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{HOME.introEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 max-w-2xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] text-ink-900">
              {HOME.introHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-ink-700 md:text-lg">
              <p>{HOME.introBody1}</p>
              <p>{HOME.introBody2}</p>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 pt-4 text-sm uppercase tracking-eyebrow text-clay-500"
              >
                Read the full story
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {HOME.stats.map((s) => (
            <StatCounter
              key={s.label}
              value={s.value}
              prefix={s.prefix}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>
      </Section>

      {/* Services preview */}
      <Section bg="cream-100">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <Eyebrow>{HOME.servicesEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 max-w-2xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] text-ink-900">
              {HOME.servicesHeadline}
            </h2>
            <p className="mt-6 max-w-xl text-base text-ink-700">
              {HOME.servicesSubhead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-eyebrow text-clay-500"
            >
              All services
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_LIST.map((s, i) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              blurb={s.blurb}
              href={s.href}
              icon={s.icon}
              index={i}
            />
          ))}
        </div>
      </Section>

      {/* Featured projects */}
      <Section bg="cream">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <Eyebrow>{HOME.projectsEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 max-w-2xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] text-ink-900">
              {HOME.projectsHeadline}
            </h2>
            <p className="mt-6 max-w-xl text-base text-ink-700">
              {HOME.projectsSubhead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-eyebrow text-clay-500"
            >
              See all projects
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>

        {/* Asymmetric 3-image gallery */}
        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <Reveal className="md:col-span-7 md:row-span-2">
            <FeaturedImage
              image={featuredProjects[0].image}
              title={featuredProjects[0].title}
              description={featuredProjects[0].description}
              ratio="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-5">
            <FeaturedImage
              image={featuredProjects[1].image}
              title={featuredProjects[1].title}
              description={featuredProjects[1].description}
              ratio="aspect-[4/3]"
            />
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5">
            <FeaturedImage
              image={featuredProjects[2].image}
              title={featuredProjects[2].title}
              description={featuredProjects[2].description}
              ratio="aspect-[4/3]"
            />
          </Reveal>
        </div>
      </Section>

      {/* Reviews */}
      <Section bg="cream-100">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal>
            <Eyebrow>{HOME.reviewsEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 max-w-2xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] text-ink-900">
              {HOME.reviewsHeadline}
            </h2>
            <p className="mt-6 max-w-xl text-base text-ink-700">
              {HOME.reviewsSubhead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-eyebrow text-clay-500"
            >
              Read all reviews
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <TestimonialCard key={r.name + i} review={r} index={i} />
          ))}
        </div>
      </Section>

      {/* Service areas teaser */}
      <Section bg="cream">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
          <Reveal>
            <Eyebrow>{HOME.areasEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 max-w-2xl text-balance text-[clamp(2.5rem,5vw,4.5rem)] text-ink-900">
              {HOME.areasHeadline}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-700">
              {HOME.areasBody}
            </p>
            <Link
              href="/service-areas"
              className="group mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-eyebrow text-clay-500"
            >
              Full list of service areas
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <AlbertaMap />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="WHEN THE SKY OPENS UP"
        headline={HOME.ctaHeadline}
        subhead={HOME.ctaSubhead}
      />
    </motion.div>
  );
}

function FeaturedImage({
  image,
  title,
  description,
  ratio,
}: {
  image: string;
  title: string;
  description: string;
  ratio: string;
}) {
  return (
    <Link href="/projects" className="group block w-full">
      <div className={`relative ${ratio} w-full overflow-hidden bg-cream-200`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-expensive group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-serif text-xl text-ink-900">{title}</h3>
          <p className="mt-1 text-xs uppercase tracking-eyebrow text-ink-500">
            {description}
          </p>
        </div>
        <ArrowUpRight
          className="h-4 w-4 text-clay-500 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </div>
    </Link>
  );
}

function AlbertaMap() {
  // Hand-drawn-feeling SVG outline of Alberta with two pin markers.
  return (
    <div className="relative aspect-[4/5] w-full bg-cream-100 p-8">
      <svg
        viewBox="0 0 320 400"
        className="h-full w-full"
        role="img"
        aria-label="Map of Alberta showing Edmonton and Calgary office locations"
      >
        {/* Stylized Alberta outline */}
        <path
          d="M70 30 L240 30 L240 360 L70 360 Z M75 30 L75 360"
          stroke="#D9CBA8"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M80 50 Q100 45 120 50 T220 60 L220 350 Q190 360 160 355 T80 350 Z"
          fill="#FBF8F1"
          stroke="#B8946A"
          strokeWidth="1.5"
          opacity="0.6"
        />
        {/* Edmonton pin */}
        <g>
          <circle cx="155" cy="160" r="6" fill="#1C1814" />
          <circle cx="155" cy="160" r="14" fill="none" stroke="#1C1814" strokeWidth="1" opacity="0.3" />
          <circle cx="155" cy="160" r="22" fill="none" stroke="#1C1814" strokeWidth="0.5" opacity="0.15" />
          <text x="170" y="158" className="text-[11px]" fontFamily="Inter, sans-serif" fontSize="11" fill="#1C1814" fontWeight="500">
            EDMONTON
          </text>
          <text x="170" y="172" fontFamily="Inter, sans-serif" fontSize="9" fill="#6B6157">
            HQ — 1988
          </text>
        </g>
        {/* Calgary pin */}
        <g>
          <circle cx="145" cy="280" r="6" fill="#8B6F47" />
          <circle cx="145" cy="280" r="14" fill="none" stroke="#8B6F47" strokeWidth="1" opacity="0.3" />
          <circle cx="145" cy="280" r="22" fill="none" stroke="#8B6F47" strokeWidth="0.5" opacity="0.15" />
          <text x="160" y="278" fontFamily="Inter, sans-serif" fontSize="11" fill="#1C1814" fontWeight="500">
            CALGARY
          </text>
          <text x="160" y="292" fontFamily="Inter, sans-serif" fontSize="9" fill="#6B6157">
            Yard — 2011
          </text>
        </g>
        {/* Connecting line */}
        <line
          x1="155"
          y1="160"
          x2="145"
          y2="280"
          stroke="#8B6F47"
          strokeWidth="1"
          strokeDasharray="3 4"
          opacity="0.5"
        />
        <text x="80" y="385" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="1.5" fill="#6B6157">
          ALBERTA · CANADA
        </text>
      </svg>
    </div>
  );
}
