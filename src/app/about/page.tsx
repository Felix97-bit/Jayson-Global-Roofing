import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal, StaggerGroup, StaggerChild } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { ABOUT } from "@/lib/content";
import { ABOUT_HERO } from "@/lib/images";
import { PageMotion } from "@/components/PageMotion";

export const metadata: Metadata = {
  title: "About — Four Js, One Roof, Thirty-Seven Years",
  description:
    "From John Bunce's 4 Jay Roofing in 1988 to Jayson Global today. The second-generation Edmonton roofing family.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={ABOUT_HERO}
        imageAlt="Vintage Alberta home with a steep-pitched cedar roof"
        eyebrow={ABOUT.heroEyebrow}
        headline={ABOUT.heroHeadline}
        subhead={ABOUT.heroSubhead}
      />

      {/* Story chapters */}
      <Section bg="cream">
        <div className="grid gap-16 lg:grid-cols-[260px_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              Four chapters.
            </h2>
          </Reveal>
          <div>
            <StaggerGroup className="space-y-16">
              {ABOUT.chapters.map((c) => (
                <StaggerChild key={c.year}>
                  <article className="grid grid-cols-[80px_1fr] gap-8 border-t border-cream-300 pt-10 lg:grid-cols-[120px_1fr]">
                    <div className="font-serif text-2xl text-clay-500 lg:text-3xl">
                      {c.year}
                    </div>
                    <div>
                      <h3 className="headline-sub text-2xl text-ink-900 md:text-3xl">
                        {c.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-700 md:text-lg">
                        {c.body}
                      </p>
                    </div>
                  </article>
                </StaggerChild>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section bg="cream-100">
        <Reveal>
          <Eyebrow>{ABOUT.teamEyebrow}</Eyebrow>
          <h2 className="headline-section mt-5 max-w-2xl text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
            {ABOUT.teamHeadline}
          </h2>
        </Reveal>
        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT.team.map((t) => (
            <StaggerChild key={t.name}>
              <div className="flex h-full flex-col items-start gap-6 bg-bone p-8">
                {/* Silhouette placeholder — swap with real photo via /public when available */}
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-cream-200 font-serif text-2xl text-clay-500">
                  {t.initials}
                </div>
                <div>
                  <p className="font-serif text-xl text-ink-900">{t.name}</p>
                  <p className="mt-2 text-sm text-ink-500">{t.role}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerGroup>
      </Section>

      {/* Certifications */}
      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{ABOUT.certsEyebrow}</Eyebrow>
            <h2 className="headline-section mt-5 text-[clamp(2.25rem,4vw,3.5rem)] text-ink-900">
              {ABOUT.certsHeadline}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-700">
              We invest in the certifications that make a difference on a real roof —
              the ones manufacturers require for the highest warranties, and the ones
              insurance adjusters look for on a damage report.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {ABOUT.certs.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-3 border-t border-cream-300 pt-5 text-sm text-ink-900"
                >
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-clay-500" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="WORK WITH US"
        headline="Three decades of doing it right. Add your roof to the list."
        subhead="Free inspection, written quote, no pressure. We'll be in touch within one business day."
      />
    </PageMotion>
  );
}
