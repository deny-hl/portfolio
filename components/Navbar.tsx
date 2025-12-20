"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Resume", href: "/resume" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-200/70 bg-white/80 backdrop-blur dark:border-ink-800/70 dark:bg-ink-900/70">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold tracking-wide text-ink-900 dark:text-ink-50">
          JL
        </Link>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition hover:text-ink-900 dark:hover:text-white",
                  isActive ? "text-ink-900 dark:text-white" : "text-ink-600 dark:text-ink-300",
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <button
            type="button"
            className="inline-flex items-center rounded-full border border-ink-200/70 px-3 py-2 text-xs font-medium text-ink-700 transition hover:text-ink-900 dark:border-ink-700 dark:text-ink-200 dark:hover:text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={cn(
          "border-t border-ink-200/70 bg-white/90 px-6 py-4 transition dark:border-ink-800/70 dark:bg-ink-900/90 md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-3" aria-label="Mobile">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium",
                  isActive ? "text-ink-900 dark:text-white" : "text-ink-600 dark:text-ink-300",
                )}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
