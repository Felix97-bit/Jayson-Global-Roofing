import { type HTMLAttributes, type ReactNode } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  bg?: "cream" | "cream-100" | "ink" | "bone";
  spacing?: "default" | "tight" | "none";
  innerClassName?: string;
  children: ReactNode;
};

const bgMap = {
  cream: "bg-cream-50",
  "cream-100": "bg-cream-100",
  ink: "bg-ink-900 text-cream-50",
  bone: "bg-bone",
};

const spacingMap = {
  default: "py-24 md:py-32 lg:py-40",
  tight: "py-16 md:py-20 lg:py-24",
  none: "",
};

export function Section({
  bg = "cream",
  spacing = "default",
  className = "",
  innerClassName = "",
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={`${bgMap[bg]} ${spacingMap[spacing]} ${className}`} {...rest}>
      <div
        className={`mx-auto w-full max-w-content px-6 md:px-10 lg:px-16 ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
