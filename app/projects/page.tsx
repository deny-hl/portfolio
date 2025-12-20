import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ProjectFilters } from "@/components/ProjectFilters";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: profile.copy.projectsPageIntro,
};

export default function ProjectsPage() {
  return (
    <Section>
      <Container className="space-y-8">
        <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
          Projects
        </p>
        <h1 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">
          Project archive
        </h1>
        <p className="text-sm text-ink-600 dark:text-ink-300">{profile.copy.projectsIntro}</p>
      </div>
        <ProjectFilters projects={projects} />
      </Container>
    </Section>
  );
}
