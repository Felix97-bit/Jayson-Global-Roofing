import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { PageMotion } from "@/components/PageMotion";
import { SERVICES_OVERVIEW, SERVICES_LIST } from "@/lib/content";
import { SERVICES_HERO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services — Roofing, Siding, Gutters & Insulation",
  description:
    "Full-envelope exterior contractor in Edmonton and Calgary. Residential and commercial roofing, storm restoration, siding, gutters, and attic insulation.",
  alternates: { canonical: "/services" },
};

export default function ServicesOverviewPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={SERVICES_HERO}
        imageAlt="Workers installing shingles on an Alberta roof"
        eyebrow={SERVICES_OVERVIEW.heroEyebrow}
        headline={SERVICES_OVERVIEW.heroHeadline}
        subhead={SERVICES_OVERVIEW.heroSubhead}
      />

      {/* Why one contractor */}
      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{SERVICES_OVERVIEW.introEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {SERVICES_OVERVIEW.introHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {SERVICES_OVERVIEW.introBody}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Service grid */}
      <Section bg="cream-100">
        <Reveal>
          <Eyebrow>WHAT WE DO</Eyebrow>
          <h2 className="headline-section mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
            Six services. One crew.
          </h2>
        </Reveal>
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

      <CtaBand
        eyebrow="GET STARTED"
        headline="Free inspection, written quote, no obligation."
        subhead="We answer the phone Monday to Friday and respond to web requests within one business day."
      />
    </PageMotion>
  );
}
