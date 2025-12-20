import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for the contact form.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
            Privacy
          </p>
          <h1 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">
            Privacy policy
          </h1>
          <p className="text-sm text-ink-600 dark:text-ink-300">Updated {profile.privacy.updated}</p>
        </div>
        <Card className="p-6">
          <p className="text-sm text-ink-600 dark:text-ink-300">{profile.privacy.summary}</p>
        </Card>
        <div className="grid gap-6 md:grid-cols-3">
          {profile.privacy.items.map((item) => (
            <Card key={item.title} className="p-6">
              <h2 className="text-base font-semibold text-ink-900 dark:text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-ink-600 dark:text-ink-300">{item.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
