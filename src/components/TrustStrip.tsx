import { Award, ShieldCheck, BadgeCheck, Star, Hammer } from "lucide-react";

const items = [
  { icon: Award, label: "BBB A+ Accredited" },
  { icon: BadgeCheck, label: "IKO RoofPro Craftsman Premier" },
  { icon: BadgeCheck, label: "Malarkey Emerald Pro" },
  { icon: Hammer, label: "Haag Certified Inspectors" },
  { icon: ShieldCheck, label: "WCB Insured · $5M Liability" },
  { icon: Star, label: "350+ Five-Star Reviews" },
];

export function TrustStrip({
  variant = "default",
  className = "",
}: {
  variant?: "default" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-4 ${
        isDark ? "text-cream-50/80" : "text-ink-700"
      } ${className}`}
    >
      {items.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2 text-[11px] uppercase tracking-eyebrow"
        >
          <Icon className="h-4 w-4 text-clay-500" aria-hidden />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
