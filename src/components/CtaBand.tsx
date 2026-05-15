import Link from "next/link";
import { Phone } from "lucide-react";
import { Section } from "./Section";
import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/content";

export function CtaBand({
  eyebrow = "READY WHEN YOU ARE",
  headline = "Storm last night? Shingles in the yard?",
  subhead = "Free, no-pressure inspections — usually within 24 hours. Insurance claims handled in-house, start to finish.",
}: {
  eyebrow?: string;
  headline?: string;
  subhead?: string;
}) {
  return (
    <Section bg="ink" spacing="tight" className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #B8946A 0, transparent 50%), radial-gradient(circle at 80% 50%, #8B6F47 0, transparent 50%)",
        }}
        aria-hidden
      />
      <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
        <Reveal>
          <Eyebrow className="text-clay-400 [&>span]:bg-clay-400">
            {eyebrow}
          </Eyebrow>
          <h2 className="headline-section mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] text-cream-50">
            {headline}
          </h2>
          <p className="mt-5 max-w-lg text-base text-cream-50/70">{subhead}</p>
        </Reveal>
        <Reveal delay={0.1} direction="left">
          <div className="flex flex-col items-start gap-4 md:items-end">
            <Button
              href="/quote"
              variant="primary"
              withArrow
              className="!bg-cream-50 !text-ink-900 !border-cream-50 hover:!bg-cream-100 hover:!border-cream-100 hover:!text-ink-900"
            >
              Get a Free Quote
            </Button>
            <Link
              href={`tel:${SITE.primaryPhoneTel}`}
              className="group inline-flex items-center gap-2 text-cream-50/90 transition hover:text-cream-50"
            >
              <Phone className="h-4 w-4" aria-hidden />
              <span className="border-b border-clay-400/40 pb-1 text-sm tracking-wide group-hover:border-clay-400">
                or call {SITE.primaryPhone}
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
