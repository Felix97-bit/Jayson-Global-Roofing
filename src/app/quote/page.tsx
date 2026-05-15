import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { QuoteForm } from "@/components/QuoteForm";
import { TrustStrip } from "@/components/TrustStrip";
import { Reveal } from "@/components/Reveal";
import { PageMotion } from "@/components/PageMotion";
import { QUOTE, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Get a Free Quote — Edmonton & Calgary Roofing",
  description:
    "Free on-site inspection and written roofing quote across Edmonton, Calgary, and central Alberta. We respond within one business day.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <PageMotion>
      {/* Minimal hero */}
      <Section bg="cream" spacing="tight" className="border-b border-cream-200 pt-16 md:pt-24">
        <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-end">
          <Reveal>
            <Eyebrow>{QUOTE.heroEyebrow}</Eyebrow>
            <h1 className="headline-display mt-5 max-w-3xl text-balance text-[clamp(2.5rem,6vw,5rem)] text-ink-900">
              {QUOTE.heroHeadline}
            </h1>
            <p className="mt-6 max-w-xl text-base text-ink-700 md:text-lg">
              {QUOTE.heroSubhead}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href={`tel:${SITE.primaryPhoneTel}`}
              className="group inline-flex items-center gap-3 bg-ink-900 px-6 py-4 text-cream-50 transition hover:bg-ink-700"
            >
              <Phone className="h-4 w-4 text-clay-400" aria-hidden />
              <span className="text-sm font-medium">{SITE.primaryPhone}</span>
            </Link>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Reveal>
              <QuoteForm />
            </Reveal>
          </div>

          <div className="space-y-12 lg:sticky lg:top-28 lg:h-fit">
            <Reveal delay={0.1}>
              <Eyebrow>{QUOTE.whatHappensEyebrow}</Eyebrow>
              <h2 className="headline-section mt-4 text-3xl text-ink-900 md:text-4xl">
                {QUOTE.whatHappensHeadline}
              </h2>
              <ol className="mt-8 space-y-8">
                {QUOTE.steps.map((s) => (
                  <li
                    key={s.step}
                    className="grid grid-cols-[40px_1fr] gap-4 border-t border-cream-300 pt-6"
                  >
                    <span className="font-serif text-2xl text-clay-500">{s.step}</span>
                    <div>
                      <h3 className="font-serif text-lg text-ink-900">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-cream-100 p-8">
                <p className="text-[11px] uppercase tracking-eyebrow text-clay-500">
                  Why us
                </p>
                <div className="mt-6">
                  <TrustStrip />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageMotion>
  );
}
