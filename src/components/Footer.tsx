import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE, NAV } from "@/lib/content";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
  { label: "Get a Free Quote", href: "/quote" },
];

const badges = [
  "BBB A+",
  "IKO RoofPro Craftsman Premier",
  "Malarkey Emerald Pro",
  "Haag Certified",
];

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-50/80">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-baseline gap-1 font-serif text-2xl text-cream-50">
              <span>Jayson</span>
              <span className="border-b border-clay-400 pb-0.5">Global</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-50/70">
              {SITE.tagline}. Edmonton, Calgary, and central Alberta&apos;s second-generation roofing family.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-eyebrow text-cream-50/60"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-clay-400" aria-hidden />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[11px] uppercase tracking-eyebrow text-clay-400">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream-50/80 transition hover:text-cream-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] uppercase tracking-eyebrow text-clay-400">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV.servicesDropdown.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream-50/80 transition hover:text-cream-50"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] uppercase tracking-eyebrow text-clay-400">
              Two Locations
            </h3>
            <div className="mt-5 space-y-6 text-sm">
              <div>
                <p className="font-serif text-base text-cream-50">Edmonton</p>
                <p className="mt-2 flex items-start gap-2 text-cream-50/80">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay-400" aria-hidden />
                  {SITE.addressEdmonton}
                </p>
                <p className="mt-2 flex items-center gap-2 text-cream-50/80">
                  <Phone className="h-3.5 w-3.5 text-clay-400" aria-hidden />
                  <a href={`tel:+1${SITE.phoneEdmonton.replace(/\D/g, "")}`} className="hover:text-cream-50">
                    {SITE.phoneEdmonton}
                  </a>
                  <span className="text-cream-50/40">·</span>
                  <a href={`tel:+1${SITE.phoneEdmontonAlt.replace(/\D/g, "")}`} className="hover:text-cream-50">
                    {SITE.phoneEdmontonAlt}
                  </a>
                </p>
              </div>
              <div>
                <p className="font-serif text-base text-cream-50">Calgary</p>
                <p className="mt-2 flex items-start gap-2 text-cream-50/80">
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-clay-400" aria-hidden />
                  {SITE.addressCalgary}
                </p>
                <p className="mt-2 flex items-center gap-2 text-cream-50/80">
                  <Phone className="h-3.5 w-3.5 text-clay-400" aria-hidden />
                  <a href={`tel:+1${SITE.phoneCalgary.replace(/\D/g, "")}`} className="hover:text-cream-50">
                    {SITE.phoneCalgary}
                  </a>
                  <span className="text-cream-50/40">·</span>
                  <a href={`tel:+1${SITE.phoneCalgaryAlt.replace(/\D/g, "")}`} className="hover:text-cream-50">
                    {SITE.phoneCalgaryAlt}
                  </a>
                </p>
              </div>
              <div className="space-y-2 text-cream-50/80">
                <p className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-clay-400" aria-hidden />
                  <a href={`mailto:${SITE.email}`} className="hover:text-cream-50">
                    {SITE.email}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-clay-400" aria-hidden />
                  {SITE.hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream-50/10 pt-8 text-xs text-cream-50/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}. {SITE.tagline}.
          </p>
          <p className="uppercase tracking-eyebrow text-cream-50/40">
            {SITE.footerNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
