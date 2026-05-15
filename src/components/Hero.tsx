"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { Button } from "./Button";
import { EXPENSIVE_EASE } from "@/lib/motion";
import { SITE } from "@/lib/content";

interface HeroProps {
  variant?: "home" | "page";
  image: string;
  imageAlt: string;
  eyebrow: string;
  headline: string;
  subhead?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string; isPhone?: boolean };
}

export function Hero({
  variant = "page",
  image,
  imageAlt,
  eyebrow,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  if (variant === "home") {
    return (
      <section className="relative isolate overflow-hidden bg-cream-50">
        <div className="relative h-[100svh] min-h-[640px] w-full">
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: EXPENSIVE_EASE }}
            className="absolute inset-0"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-cream-50/40 via-transparent to-cream-50/10"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-cream-50/30 via-transparent to-transparent"
              aria-hidden
            />
          </motion.div>

          <div className="relative z-10 mx-auto flex h-full max-w-content flex-col justify-end px-6 pb-16 md:px-10 lg:px-16 lg:pb-24">
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.0, delay: 0.3, ease: EXPENSIVE_EASE }}
              className="max-w-3xl bg-cream-50/95 p-8 backdrop-blur-sm md:p-12 lg:p-16"
            >
              <Eyebrow>{eyebrow}</Eyebrow>
              <h1 className="headline-display mt-6 text-balance text-[clamp(2.5rem,7vw,5.5rem)] text-ink-900">
                {headline}
              </h1>
              {subhead && (
                <p className="mt-6 max-w-xl text-pretty text-base text-ink-700 md:text-lg">
                  {subhead}
                </p>
              )}
              {(primaryCta || secondaryCta) && (
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  {primaryCta && (
                    <Button href={primaryCta.href} variant="primary" withArrow>
                      {primaryCta.label}
                    </Button>
                  )}
                  {secondaryCta && (
                    <Link
                      href={
                        secondaryCta.isPhone
                          ? `tel:${SITE.primaryPhoneTel}`
                          : secondaryCta.href
                      }
                      className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-ink-900"
                    >
                      <Phone className="h-4 w-4 text-clay-500" aria-hidden />
                      <span className="border-b border-clay-500/40 pb-1 transition group-hover:border-clay-500">
                        {secondaryCta.label}
                      </span>
                    </Link>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-ink-900">
      <div className="relative h-[60vh] min-h-[480px] w-full">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: EXPENSIVE_EASE }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-ink-900/60" aria-hidden />
          <div
            className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent"
            aria-hidden
          />
        </motion.div>

        <div className="relative z-10 mx-auto flex h-full max-w-content flex-col items-center justify-center px-6 text-center md:px-10 lg:px-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EXPENSIVE_EASE }}
            className="max-w-3xl"
          >
            <Eyebrow className="text-clay-400 [&>span]:bg-clay-400">
              {eyebrow}
            </Eyebrow>
            <h1 className="headline-display mt-5 text-balance text-[clamp(2.25rem,5.5vw,4.5rem)] text-cream-50">
              {headline}
            </h1>
            {subhead && (
              <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-cream-50/80 md:text-lg">
                {subhead}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
