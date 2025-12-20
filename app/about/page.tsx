import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, values, and experience.",
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="space-y-12">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
            About
          </p>
          <h1 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">
            {profile.name}
          </h1>
          <div className="space-y-4 text-sm text-ink-600 dark:text-ink-300">
            {profile.about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {profile.about.values.map((value) => (
            <Card key={value.title} className="p-6">
              <h3 className="text-base font-semibold text-ink-900 dark:text-white">{value.title}</h3>
              <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{value.description}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="font-display text-2xl font-semibold text-ink-900 dark:text-white">
            Timeline
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <Card key={item.role} className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-ink-900 dark:text-white">
                  {item.role}
                </h3>
                <p className="text-sm text-ink-600 dark:text-ink-300">{item.company}</p>
                <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{item.summary}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-600 dark:text-ink-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
