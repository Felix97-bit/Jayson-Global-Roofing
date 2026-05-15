import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/components/FAQ";
import { PageMotion } from "@/components/PageMotion";
import { SIDING } from "@/lib/content";
import { sidingFaqs } from "@/data/faqs";
import { SIDING_HERO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Siding, Gutters & Insulation — Edmonton & Calgary",
  description:
    "Full exterior contractor: vinyl, fibre cement, and engineered wood siding; seamless aluminum gutters; and attic insulation top-ups across Alberta.",
  alternates: { canonical: "/services/siding-and-exteriors" },
};

const subSections = [
  { id: "siding", data: "siding" as const },
  { id: "gutters", data: "gutters" as const },
  { id: "insulation", data: "insulation" as const },
];

export default function SidingPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={SIDING_HERO}
        imageAlt="Modern Alberta home with painted siding and seamless gutters"
        eyebrow={SIDING.heroEyebrow}
        headline={SIDING.heroHeadline}
        subhead={SIDING.heroSubhead}
      />

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{SIDING.whyEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {SIDING.whyHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {SIDING.whyBody}
            </p>
          </Reveal>
        </div>
      </Section>

      {subSections.map((section, i) => {
        const data = SIDING[section.data];
        const bgs = ["cream-100", "cream", "cream-100"] as const;
        return (
          <Section key={section.id} bg={bgs[i]}>
            <div id={section.id} className="-mt-24 pt-24" aria-hidden />
            <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
              <Reveal>
                <Eyebrow>{data.eyebrow}</Eyebrow>
                <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
                  {data.headline}
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
                  {data.body}
                </p>
              </Reveal>
            </div>
          </Section>
        );
      })}

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              The exteriors questions we hear most.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <FAQ items={sidingFaqs} />
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="EXTERIORS"
        headline="One contractor for the whole envelope."
        subhead="Bundle the roof, the siding, and the gutters and you save a mobilization, a warranty conversation, and a leak."
      />
    </PageMotion>
  );
}
