import Link from "next/link";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="section-divider">
      <div className="container flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-ink-900 dark:text-ink-50">{profile.name}</p>
          <p className="text-sm text-ink-600 dark:text-ink-300">{profile.shortBio}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {profile.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ink-600 transition hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/privacy"
            className="text-ink-600 transition hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
