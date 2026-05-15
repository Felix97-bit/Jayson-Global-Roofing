import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { PageMotion } from "@/components/PageMotion";
import { SERVICE_AREAS } from "@/lib/content";
import { SERVICE_AREAS_HERO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Service Areas — Edmonton, Calgary & Central Alberta",
  description:
    "Roofing across Edmonton, Sherwood Park, St. Albert, Spruce Grove, Stony Plain, Fort Saskatchewan, Leduc, Beaumont, Calgary, Airdrie, Cochrane, Okotoks, Chestermere, and Red Deer.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={SERVICE_AREAS_HERO}
        imageAlt="Aerial view of an Alberta neighbourhood"
        eyebrow={SERVICE_AREAS.heroEyebrow}
        headline={SERVICE_AREAS.heroHeadline}
        subhead={SERVICE_AREAS.heroSubhead}
      />

      {SERVICE_AREAS.groups.map((g, idx) => (
        <Section key={g.name} bg={idx % 2 === 0 ? "cream" : "cream-100"}>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
            <Reveal>
              <Eyebrow>{g.driveTime}</Eyebrow>
              <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
                {g.name}
              </h2>
            </Reveal>
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {g.cities.map((c) => (
                <StaggerChild key={c.name}>
                  <article className="flex h-full items-start gap-4 bg-bone p-6">
                    <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 text-clay-500">
                      <MapPin className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg text-ink-900">{c.name}</h3>
                      <p className="mt-1 text-sm text-ink-700">{c.note}</p>
                    </div>
                  </article>
                </StaggerChild>
              ))}
            </StaggerGroup>
          </div>
        </Section>
      ))}

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{SERVICE_AREAS.climateEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {SERVICE_AREAS.climateHeadline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
              {SERVICE_AREAS.climateBody}
            </p>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="WE COME TO YOU"
        headline="If you're in central Alberta, we're already nearby."
        subhead="Free inspection, no travel charge inside our normal service area."
      />
    </PageMotion>
  );
}
