import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { PageMotion } from "@/components/PageMotion";
import { CONTACT, SITE } from "@/lib/content";
import { CONTACT_HERO } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact — Edmonton & Calgary Offices",
  description:
    "Two Alberta locations: 9810 62 Ave NW, Edmonton and 4546 14th Street NE, Calgary. Phone, email, and a quick contact form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <PageMotion>
      <Hero
        variant="page"
        image={CONTACT_HERO}
        imageAlt="Front entry of the Jayson Global Edmonton office"
        eyebrow={CONTACT.heroEyebrow}
        headline={CONTACT.heroHeadline}
        subhead={CONTACT.heroSubhead}
      />

      <Section bg="cream">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          {/* Left: contact info */}
          <div className="space-y-16">
            <Reveal>
              <Eyebrow>{CONTACT.edmontonEyebrow}</Eyebrow>
              <h2 className="headline-section mt-4 text-[clamp(2rem,3.5vw,3rem)] text-ink-900">
                Edmonton headquarters
              </h2>
              <ContactBlock
                address={SITE.addressEdmonton}
                phones={[SITE.phoneEdmonton, SITE.phoneEdmontonAlt]}
                email={SITE.email}
                hours={SITE.hours}
              />
              <MapEmbed
                src="https://www.google.com/maps?q=9810+62+Ave+NW+Edmonton+AB&output=embed"
                title="Map of the Jayson Global Edmonton office"
              />
            </Reveal>

            <Reveal delay={0.1}>
              <Eyebrow>{CONTACT.calgaryEyebrow}</Eyebrow>
              <h2 className="headline-section mt-4 text-[clamp(2rem,3.5vw,3rem)] text-ink-900">
                Calgary location
              </h2>
              <ContactBlock
                address={SITE.addressCalgary}
                phones={[SITE.phoneCalgary, SITE.phoneCalgaryAlt]}
                email={SITE.email}
                hours={SITE.hours}
              />
              <MapEmbed
                src="https://www.google.com/maps?q=4546+14th+Street+NE+Calgary+AB&output=embed"
                title="Map of the Jayson Global Calgary office"
              />
            </Reveal>
          </div>

          {/* Right: sticky mini-form */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Reveal delay={0.15}>
              <div className="bg-bone p-8 md:p-10">
                <Eyebrow>QUICK REQUEST</Eyebrow>
                <h2 className="headline-section mt-4 text-3xl text-ink-900 md:text-4xl">
                  {CONTACT.miniFormHeadline}
                </h2>
                <p className="mt-4 text-sm text-ink-700">{CONTACT.miniFormSubhead}</p>

                <div className="mt-8">
                  <Link
                    href="/quote"
                    className="group inline-flex items-center justify-center gap-2 bg-ink-900 px-8 py-4 text-sm font-medium text-cream-50 transition-all duration-300 ease-expensive hover:-translate-y-0.5 hover:bg-ink-700"
                  >
                    Open the full quote form
                  </Link>
                </div>

                <div className="mt-8 border-t border-cream-200 pt-8">
                  <p className="text-[11px] uppercase tracking-eyebrow text-clay-500">
                    Or reach out directly
                  </p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-clay-500" aria-hidden />
                      <Link
                        href={`tel:${SITE.primaryPhoneTel}`}
                        className="text-ink-900 hover:underline"
                      >
                        {SITE.primaryPhone}
                      </Link>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-clay-500" aria-hidden />
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-ink-900 hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </PageMotion>
  );
}

function ContactBlock({
  address,
  phones,
  email,
  hours,
}: {
  address: string;
  phones: string[];
  email: string;
  hours: string;
}) {
  const tel = (n: string) => `tel:+1${n.replace(/\D/g, "")}`;
  return (
    <ul className="mt-8 space-y-4 text-base text-ink-900">
      <li className="flex items-start gap-3">
        <MapPin className="mt-1 h-4 w-4 shrink-0 text-clay-500" aria-hidden />
        <span>{address}</span>
      </li>
      <li className="flex items-start gap-3">
        <Phone className="mt-1 h-4 w-4 shrink-0 text-clay-500" aria-hidden />
        <span className="space-x-2">
          {phones.map((p, i) => (
            <span key={p}>
              <a href={tel(p)} className="hover:underline">
                {p}
              </a>
              {i < phones.length - 1 && <span className="text-ink-500"> ·</span>}
            </span>
          ))}
        </span>
      </li>
      <li className="flex items-start gap-3">
        <Mail className="mt-1 h-4 w-4 shrink-0 text-clay-500" aria-hidden />
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
      </li>
      <li className="flex items-start gap-3">
        <Clock className="mt-1 h-4 w-4 shrink-0 text-clay-500" aria-hidden />
        <span>{hours}</span>
      </li>
    </ul>
  );
}

function MapEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="mt-8 overflow-hidden border border-cream-200">
      <iframe
        title={title}
        src={src}
        className="h-72 w-full border-0 grayscale-[20%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
