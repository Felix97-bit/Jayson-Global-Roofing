import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { ProcessList } from "@/components/ProcessList";
import { PageMotion } from "@/components/PageMotion";
import { STORM, SITE } from "@/lib/content";
import { stormFaqs } from "@/data/faqs";
import { STORM_HERO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Storm Damage & Insurance Claims — Edmonton & Calgary",
  description:
    "Free Haag-certified hail and wind damage inspections. We handle insurance claims start to finish so you don't have to.",
  alternates: { canonical: "/services/storm-and-insurance" },
};

export default function StormPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={STORM_HERO}
        imageAlt="Stormy Alberta sky over a residential roofline"
        eyebrow={STORM.heroEyebrow}
        headline={STORM.heroHeadline}
        subhead={STORM.heroSubhead}
      />

      {/* Emergency CTA */}
      <Section bg="cream" spacing="tight" className="border-b border-cream-200">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="max-w-xl text-base text-ink-700">
              <span className="font-medium text-ink-900">Emergency tarping?</span>{" "}
              Call us before the next system rolls in. We answer the phone.
            </p>
            <Link
              href={`tel:${SITE.primaryPhoneTel}`}
              className="group inline-flex items-center gap-3 bg-ink-900 px-6 py-4 text-cream-50 transition hover:bg-ink-700"
            >
              <Phone className="h-4 w-4 text-clay-400" aria-hidden />
              <span className="text-sm font-medium">{SITE.primaryPhone}</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* First 24 hours */}
      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{STORM.firstStepsEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {STORM.firstStepsHeadline}
            </h2>
          </Reveal>
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {STORM.firstSteps.map((s) => (
              <StaggerChild key={s.title}>
                <div className="h-full bg-bone p-8">
                  <h3 className="font-serif text-xl text-ink-900">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">{s.body}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Claims process */}
      <Section bg="cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{STORM.claimsEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {STORM.claimsHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessList steps={STORM.claims} />
          </Reveal>
        </div>
      </Section>

      {/* Haag */}
      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{STORM.warrantyEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {STORM.warrantyHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {STORM.warrantyBody}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              Insurance, deductibles, and what comes next.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={stormFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="POST-STORM"
        headline="Free Haag-certified inspection. No claim required."
        subhead="If there's no real damage we'll tell you so. If there is, we'll handle the claim."
      />
    </PageMotion>
  );
}
