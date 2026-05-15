"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X, ChevronDown } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import { Button } from "./Button";
import { EXPENSIVE_EASE } from "@/lib/motion";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-cream-50/95 backdrop-blur-sm transition-all duration-300 ease-expensive ${
          scrolled ? "border-b border-cream-300/60 shadow-[0_1px_0_0_rgba(28,24,20,0.04)]" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-content items-center justify-between gap-6 px-6 py-4 md:px-10 lg:px-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex shrink-0 items-baseline gap-1 font-serif text-lg tracking-wide text-ink-900 md:text-xl"
            aria-label="Jayson Global Roofing — Home"
          >
            <span className="font-medium">JAYSON</span>
            <span className="relative font-medium">
              GLOBAL
              <span
                className="absolute -bottom-1 left-0 h-px w-full bg-clay-500 transition-all duration-300 ease-expensive group-hover:h-0.5"
                aria-hidden
              />
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {NAV.links.map((link) => {
              if (link.label === "Services") {
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`group flex items-center gap-1 py-2 text-sm transition-colors ${
                        pathname.startsWith("/services")
                          ? "text-ink-900"
                          : "text-ink-700 hover:text-ink-900"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="h-3 w-3 text-clay-500" aria-hidden />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.25, ease: EXPENSIVE_EASE }}
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                        >
                          <div className="min-w-[280px] bg-cream-50 p-2 shadow-[0_20px_60px_-20px_rgba(28,24,20,0.25)]">
                            {NAV.servicesDropdown.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className="block px-4 py-3 text-sm text-ink-700 transition hover:bg-cream-100 hover:text-ink-900"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-2 text-sm transition-colors ${
                    active ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href={`tel:${SITE.primaryPhoneTel}`}
              className="hidden items-center gap-2 text-sm text-ink-900 md:inline-flex"
            >
              <Phone className="h-4 w-4 text-clay-500" aria-hidden />
              <span>{SITE.primaryPhone}</span>
            </Link>
            <div className="hidden md:block">
              <Button href="/quote" variant="primary">
                {NAV.ctaLabel}
              </Button>
            </div>
            {/* Mobile phone icon */}
            <Link
              href={`tel:${SITE.primaryPhoneTel}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-clay-500/30 text-ink-900 md:hidden"
              aria-label={`Call ${SITE.primaryPhone}`}
            >
              <Phone className="h-4 w-4" aria-hidden />
            </Link>
            {/* Mobile menu */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center text-ink-900 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>
      </header>
      <div className="h-[68px] md:h-[76px]" aria-hidden />

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-cream-50"
          >
            <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
              <Link href="/" className="font-serif text-lg text-ink-900">
                JAYSON <span className="border-b border-clay-500">GLOBAL</span>
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-ink-900"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" aria-hidden />
              </button>
            </div>
            <motion.nav
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="flex flex-col gap-2 px-6 pb-12 pt-8"
              aria-label="Mobile"
            >
              {NAV.links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EXPENSIVE_EASE },
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-cream-200 py-5 font-serif text-3xl text-ink-900"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: EXPENSIVE_EASE },
                  },
                }}
                className="mt-8 flex flex-col gap-3"
              >
                <Button href="/quote" variant="primary" withArrow>
                  {NAV.ctaLabel}
                </Button>
                <Link
                  href={`tel:${SITE.primaryPhoneTel}`}
                  className="inline-flex items-center gap-2 px-6 py-4 text-sm text-ink-900"
                >
                  <Phone className="h-4 w-4 text-clay-500" aria-hidden />
                  Call {SITE.primaryPhone}
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
