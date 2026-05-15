"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
  ariaLabel?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface RealButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = LinkButtonProps | RealButtonProps;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink-900 text-cream-50 hover:bg-ink-700 border border-ink-900 hover:border-ink-700",
  secondary:
    "bg-transparent text-ink-900 border border-clay-500 hover:bg-clay-500 hover:text-cream-50",
  ghost:
    "bg-transparent text-ink-900 border-0 px-0 py-0 underline-offset-8 decoration-clay-500 hover:underline",
};

const sizeBase =
  "inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium tracking-wide transition-all duration-300 ease-expensive whitespace-nowrap";

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    children,
    className = "",
    withArrow = false,
    ariaLabel,
  } = props;

  const isGhost = variant === "ghost";
  const fullClass = `${isGhost ? "" : sizeBase} ${variantClasses[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-expensive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <motion.span
        whileHover={variant === "primary" ? { y: -2 } : undefined}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        <Link
          href={props.href}
          aria-label={ariaLabel}
          className={`${fullClass} group`}
        >
          {inner}
        </Link>
      </motion.span>
    );
  }

  return (
    <motion.button
      type={props.type ?? "button"}
      onClick={props.onClick}
      whileHover={variant === "primary" ? { y: -2 } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      aria-label={ariaLabel}
      className={`${fullClass} group`}
    >
      {inner}
    </motion.button>
  );
}
