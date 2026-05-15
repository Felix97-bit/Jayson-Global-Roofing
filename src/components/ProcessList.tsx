import { StaggerGroup, StaggerChild } from "./Reveal";

interface Step {
  step: string;
  title: string;
  body: string;
}

export function ProcessList({ steps }: { steps: Step[] }) {
  return (
    <StaggerGroup className="space-y-8">
      {steps.map((s) => (
        <StaggerChild key={s.step}>
          <article className="grid grid-cols-[60px_1fr] gap-6 border-t border-cream-300 pt-8 md:grid-cols-[80px_1fr] md:gap-10">
            <div className="font-serif text-3xl text-clay-500 md:text-4xl">
              {s.step}
            </div>
            <div>
              <h3 className="headline-sub text-xl text-ink-900 md:text-2xl">
                {s.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-700">
                {s.body}
              </p>
            </div>
          </article>
        </StaggerChild>
      ))}
    </StaggerGroup>
  );
}
