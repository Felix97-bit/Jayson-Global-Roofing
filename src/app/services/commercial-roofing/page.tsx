import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { ProcessList } from "@/components/ProcessList";
import { PageMotion } from "@/components/PageMotion";
import { COMMERCIAL } from "@/lib/content";
import { commercialFaqs } from "@/data/faqs";
import { COMMERCIAL_HERO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Commercial & Flat Roofing — Edmonton & Calgary",
  description:
    "PVC, TPO, EPDM, SBS, BUR, and metal commercial roofing systems for retail, multi-family, and industrial buildings across Alberta.",
  alternates: { canonical: "/services/commercial-roofing" },
};

export default function CommercialRoofingPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={COMMERCIAL_HERO}
        imageAlt="Commercial flat roof under installation"
        eyebrow={COMMERCIAL.heroEyebrow}
        headline={COMMERCIAL.heroHeadline}
        subhead={COMMERCIAL.heroSubhead}
      />

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{COMMERCIAL.systemsEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {COMMERCIAL.systemsHeadline}
            </h2>
          </Reveal>
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {COMMERCIAL.systems.map((m) => (
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

      <Section bg="cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{COMMERCIAL.processEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {COMMERCIAL.processHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ProcessList steps={COMMERCIAL.process} />
          </Reveal>
        </div>
      </Section>

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{COMMERCIAL.warrantyEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {COMMERCIAL.warrantyHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {COMMERCIAL.warrantyBody}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream-100">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              Property managers ask us these.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={commercialFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="COMMERCIAL ENQUIRIES"
        headline="Send us your scope. We'll send back a number."
        subhead="Site survey, core test, and engineer-stamped drawings where the spec requires it."
      />
    </PageMotion>
  );
}
