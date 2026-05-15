import { type ReactNode } from "react";

export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-eyebrow text-clay-500 ${className}`}
    >
      <span className="h-px w-8 bg-clay-500" aria-hidden />
      {children}
    </span>
  );
}
