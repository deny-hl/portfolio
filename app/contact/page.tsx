import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss roles, projects, or collaborations.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
            Contact
          </p>
          <h1 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">
            Let us build something together
          </h1>
          <p className="text-sm text-ink-600 dark:text-ink-300">{profile.contact.intro}</p>
          <Card className="p-6">
            <p className="text-sm font-semibold text-ink-900 dark:text-white">Direct email</p>
            <p className="text-sm text-ink-600 dark:text-ink-300">{profile.email}</p>
          </Card>
        </div>
        <Card className="p-6">
          <ContactForm />
        </Card>
      </Container>
    </Section>
  );
}
