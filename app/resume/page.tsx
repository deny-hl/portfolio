import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content/profile";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume highlights and a downloadable PDF.",
};

export default function ResumePage() {
  return (
    <Section>
      <Container className="space-y-10">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
            Resume
          </p>
          <h1 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">
            Snapshot of experience
          </h1>
          <p className="text-sm text-ink-600 dark:text-ink-300">{profile.resume.intro}</p>
        </div>
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-ink-900 dark:text-white">Highlights</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.resume.highlights.map((highlight) => (
              <Tag key={highlight}>{highlight}</Tag>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/resume.pdf"
              className="inline-flex items-center rounded-full border border-ink-300 px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-ink-500 hover:text-ink-900 dark:border-ink-700 dark:text-ink-200"
            >
              Download PDF
            </Link>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
