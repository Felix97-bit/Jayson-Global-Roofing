import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { ProcessList } from "@/components/ProcessList";
import { PageMotion } from "@/components/PageMotion";
import { RESIDENTIAL } from "@/lib/content";
import { residentialFaqs } from "@/data/faqs";
import { RESIDENTIAL_HERO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Residential Roofing — Edmonton & Calgary",
  description:
    "Asphalt, metal, cedar, and tile roofing for Alberta homes. Lifetime product warranties, 10-year workmanship warranty, free inspections.",
  alternates: { canonical: "/services/residential-roofing" },
};

export default function ResidentialRoofingPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={RESIDENTIAL_HERO}
        imageAlt="Single-family Edmonton home with new architectural shingles"
        eyebrow={RESIDENTIAL.heroEyebrow}
        headline={RESIDENTIAL.heroHeadline}
        subhead={RESIDENTIAL.heroSubhead}
      />

      {/* Materials */}
      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{RESIDENTIAL.materialsEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {RESIDENTIAL.materialsHeadline}
            </h2>
          </Reveal>
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {RESIDENTIAL.materials.map((m) => (
              <StaggerChild key={m.title}>
                <div className="h-full bg-bone p-8">
                  <h3 className="font-serif text-xl text-ink-900">{m.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-700">{m.body}</p>
                </div>
              </StaggerChild>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* Process */}
      <Section bg="cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{RESIDENTIAL.processEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {RESIDENTIAL.processHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessList steps={RESIDENTIAL.process} />
          </Reveal>
        </div>
      </Section>

      {/* Warranty */}
      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{RESIDENTIAL.warrantyEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {RESIDENTIAL.warrantyHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {RESIDENTIAL.warrantyBody}
            </p>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section bg="cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              The questions homeowners actually ask.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={residentialFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="START HERE"
        headline="Free inspection. Photo report. Written quote."
        subhead="We'll be on your roof when we say we will, and off it the same day."
      />
    </PageMotion>
  );
}
