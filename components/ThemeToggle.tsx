"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-ink-200/80 bg-white/80 px-3 py-2 text-xs font-medium text-ink-700 transition hover:text-ink-900 dark:border-ink-700 dark:bg-ink-900/70 dark:text-ink-200 dark:hover:text-white",
        className,
      )}
      aria-label="Toggle theme"
      onClick={() => setTheme(activeTheme === "dark" ? "light" : "dark")}
    >
      <span aria-hidden>{mounted && activeTheme === "dark" ? "☾" : "☀"}</span>
      <span>{mounted ? (activeTheme === "dark" ? "Dark" : "Light") : "Theme"}</span>
    </button>
  );
}
