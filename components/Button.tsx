import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink-900 text-white hover:bg-ink-700 dark:bg-ink-50 dark:text-ink-900 dark:hover:bg-ink-100",
  ghost:
    "bg-transparent text-ink-700 hover:text-ink-900 dark:text-ink-200 dark:hover:text-white",
  outline:
    "border border-ink-300 text-ink-700 hover:border-ink-500 hover:text-ink-900 dark:border-ink-700 dark:text-ink-200 dark:hover:text-white",
};

type ButtonProps = {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

export function Button({ href, variant = "primary", className, children }: ButtonProps) {
  const classes = cn(baseClasses, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
