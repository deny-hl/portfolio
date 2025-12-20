import { cn } from "@/lib/utils";

type TagProps = {
  children: React.ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "rounded-full border border-ink-200/80 px-3 py-1 text-xs font-medium text-ink-600 dark:border-ink-700 dark:text-ink-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
