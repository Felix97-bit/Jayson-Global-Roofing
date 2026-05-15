"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import {
  quoteFormSchema,
  type QuoteFormValues,
  SERVICE_OPTIONS,
  URGENCY_OPTIONS,
} from "@/lib/schema";
import { EXPENSIVE_EASE } from "@/lib/motion";

type Status = "idle" | "submitting" | "success" | "error";

const labelClass = "text-[11px] font-medium uppercase tracking-eyebrow text-ink-500";
const fieldClass =
  "mt-2 w-full border-0 border-b border-cream-300 bg-transparent px-0 py-3 text-base text-ink-900 placeholder-ink-500/50 transition-colors focus:border-clay-500 focus:ring-0 focus:outline-none";
const errorClass = "mt-2 text-xs text-clay-700";

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { website: "" },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again or call us directly.");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unknown error.");
    }
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: EXPENSIVE_EASE }}
            className="bg-bone p-10 text-center md:p-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.6,
                ease: EXPENSIVE_EASE,
                delay: 0.1,
              }}
              className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-clay-500/15 text-clay-500"
            >
              <Check className="h-7 w-7" aria-hidden />
            </motion.div>
            <h3 className="headline-section mt-8 text-3xl text-ink-900 md:text-4xl">
              Got it. We&apos;ll be in touch.
            </h3>
            <p className="mx-auto mt-4 max-w-md text-base text-ink-700">
              A real person from our office will call you within one business day to
              schedule a free inspection. Talk soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm uppercase tracking-eyebrow text-clay-500 underline-offset-4 hover:underline"
            >
              Send another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-bone p-8 md:p-12"
            noValidate
          >
            {/* Honeypot */}
            <div className="absolute -z-10 opacity-0" aria-hidden>
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
              <div className="md:col-span-1">
                <label htmlFor="name" className={labelClass}>
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className={fieldClass}
                  placeholder="Jane Doe"
                  aria-invalid={errors.name ? "true" : undefined}
                  {...register("name")}
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className={fieldClass}
                  placeholder="(780) 555-0100"
                  aria-invalid={errors.phone ? "true" : undefined}
                  {...register("phone")}
                />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={fieldClass}
                  placeholder="you@example.com"
                  aria-invalid={errors.email ? "true" : undefined}
                  {...register("email")}
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="address" className={labelClass}>
                  Property address
                </label>
                <input
                  id="address"
                  type="text"
                  autoComplete="street-address"
                  className={fieldClass}
                  placeholder="9810 62 Ave NW, Edmonton"
                  aria-invalid={errors.address ? "true" : undefined}
                  {...register("address")}
                />
                {errors.address && (
                  <p className={errorClass}>{errors.address.message}</p>
                )}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="service" className={labelClass}>
                  Service needed
                </label>
                <select
                  id="service"
                  className={`${fieldClass} appearance-none bg-[length:12px] bg-[right_4px_center] bg-no-repeat`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M2 4 l4 4 4-4' stroke='%238B6F47' stroke-width='1.5' fill='none'/></svg>\")",
                  }}
                  defaultValue=""
                  aria-invalid={errors.service ? "true" : undefined}
                  {...register("service")}
                >
                  <option value="" disabled>
                    Select one…
                  </option>
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorClass}>{errors.service.message}</p>
                )}
              </div>

              <div className="md:col-span-1">
                <label htmlFor="urgency" className={labelClass}>
                  How soon
                </label>
                <select
                  id="urgency"
                  className={`${fieldClass} appearance-none bg-[length:12px] bg-[right_4px_center] bg-no-repeat`}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'><path d='M2 4 l4 4 4-4' stroke='%238B6F47' stroke-width='1.5' fill='none'/></svg>\")",
                  }}
                  defaultValue=""
                  aria-invalid={errors.urgency ? "true" : undefined}
                  {...register("urgency")}
                >
                  <option value="" disabled>
                    Select one…
                  </option>
                  {URGENCY_OPTIONS.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
                {errors.urgency && (
                  <p className={errorClass}>{errors.urgency.message}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className={labelClass}>
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${fieldClass} resize-none`}
                  placeholder="Age of roof, recent storm damage, prior repairs, photos coming separately, etc."
                  {...register("message")}
                />
                {errors.message && (
                  <p className={errorClass}>{errors.message.message}</p>
                )}
              </div>
            </div>

            {status === "error" && errorMsg && (
              <div className="mt-6 border border-clay-500/40 bg-clay-500/5 px-4 py-3 text-sm text-clay-700">
                {errorMsg}
              </div>
            )}

            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center justify-center gap-2 bg-ink-900 px-8 py-4 text-sm font-medium text-cream-50 transition-all duration-300 ease-expensive hover:-translate-y-0.5 hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                    Sending…
                  </>
                ) : (
                  <>
                    Send my request
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </>
                )}
              </button>
              <p className="text-xs text-ink-500">
                We respond within one business day. No spam, ever.
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
