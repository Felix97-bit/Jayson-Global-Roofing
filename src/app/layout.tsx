import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "opsz"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jaysonglobal.com"),
  title: {
    default: `${SITE.name} — Edmonton & Calgary Roofing Since 1988`,
    template: `%s | ${SITE.name} — Edmonton & Calgary`,
  },
  description:
    "Second-generation Alberta roofers. Residential, commercial, storm restoration, and full exteriors across Edmonton, Calgary, and central Alberta. Family-owned since 1988.",
  keywords: [
    "Edmonton roofing",
    "Calgary roofing",
    "Alberta roofing contractor",
    "hail damage repair Alberta",
    "insurance claim roofing Edmonton",
    "residential roofing Edmonton",
    "commercial roofing Calgary",
    "Jayson Global Roofing",
  ],
  authors: [{ name: SITE.legalName }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://jaysonglobal.com",
    siteName: SITE.name,
    title: `${SITE.name} — Edmonton & Calgary Roofing Since 1988`,
    description:
      "Family-owned, second-generation Alberta roofing contractor. Edmonton, Calgary, and central Alberta.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Edmonton & Calgary Roofing Since 1988`,
    description:
      "Family-owned, second-generation Alberta roofing contractor.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: SITE.legalName,
  url: "https://jaysonglobal.com",
  email: SITE.email,
  telephone: SITE.primaryPhone,
  image: "https://jaysonglobal.com/og-image.jpg",
  priceRange: "$$",
  foundingDate: SITE.founded,
  areaServed: ["Edmonton", "Calgary", "Central Alberta"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SITE.averageRating.toString(),
    reviewCount: SITE.reviewCount.toString(),
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "9810 62 Ave NW",
      addressLocality: "Edmonton",
      addressRegion: "AB",
      postalCode: "T6E 0E3",
      addressCountry: "CA",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "4546 14th Street NE",
      addressLocality: "Calgary",
      addressRegion: "AB",
      postalCode: "T2E 6L7",
      addressCountry: "CA",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: SITE.phoneEdmonton,
      areaServed: "Edmonton",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: SITE.phoneCalgary,
      areaServed: "Calgary",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream-50 text-ink-900 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-cream-50"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </body>
    </html>
  );
}
