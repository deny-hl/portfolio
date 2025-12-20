import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Tag } from "@/components/Tag";
import { Card } from "@/components/Card";
import { projectJsonLd, projectMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) {
    return { title: "Project Not Found" };
  }
  return projectMetadata(project, profile);
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <Section>
      <Container className="space-y-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
            {formatDate(project.date)}
          </p>
          <h1 className="font-display text-4xl font-semibold text-ink-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-base text-ink-600 dark:text-ink-300">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="space-y-6 p-6">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Overview</h2>
              <p className="text-sm text-ink-600 dark:text-ink-300">{project.description}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Problem</h2>
              <p className="text-sm text-ink-600 dark:text-ink-300">{project.problem}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Solution</h2>
              <p className="text-sm text-ink-600 dark:text-ink-300">{project.solution}</p>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">What I learned</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-ink-600 dark:text-ink-300">
                {project.learnings.map((learning) => (
                  <li key={learning}>{learning}</li>
                ))}
              </ul>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
                Tech stack
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
                Highlights
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-ink-600 dark:text-ink-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-ink-500 dark:text-ink-300">
                Links
              </h3>
              <div className="mt-4 space-y-2">
                {project.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm font-semibold text-ink-900 transition hover:text-accent-600 dark:text-ink-50"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {project.screenshots.map((shot) => (
            <Card key={shot.src} className="relative h-56 overflow-hidden">
              <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
            </Card>
          ))}
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project, profile)) }}
      />
    </Section>
  );
}
