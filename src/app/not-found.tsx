import Link from "next/link";
import { Section } from "@/components/Section";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { NOT_FOUND } from "@/lib/content";

export default function NotFound() {
  return (
    <Section bg="cream" className="min-h-[70vh] grid place-items-center">
      <div className="text-center">
        <Eyebrow>{NOT_FOUND.eyebrow}</Eyebrow>
        <h1 className="headline-display mt-6 text-balance text-[clamp(2.5rem,6vw,5rem)] text-ink-900">
          {NOT_FOUND.headline}
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-ink-700">{NOT_FOUND.body}</p>
        <div className="mt-10 inline-flex">
          <Button href="/" variant="primary" withArrow>
            {NOT_FOUND.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}
