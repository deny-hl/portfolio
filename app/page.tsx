import type { Metadata } from "next";
import Image from "next/image";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Tag } from "@/components/Tag";
import { ProjectCard } from "@/components/ProjectCard";
import { personJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Home",
  description: profile.shortBio,
};

export default function HomePage() {
  const featured = projects.find((project) => project.featured) ?? projects[0];

  return (
    <>
      <Section className="pt-16 sm:pt-20">
        <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
              {profile.role}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-ink-900 dark:text-white sm:text-5xl">
              {profile.hero.headline}
            </h1>
            <p className="text-base text-ink-600 dark:text-ink-300 sm:text-lg">
              {profile.hero.subhead}
            </p>
            <div className="flex flex-wrap gap-3">
              {profile.hero.ctas.map((cta) => (
                <Button key={cta.href} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </Button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {profile.hero.stats.map((stat) => (
                <Card key={stat.label} className="p-4 text-center">
                  <p className="text-2xl font-semibold text-ink-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-ink-500 dark:text-ink-300">
                    {stat.label}
                  </p>
                </Card>
              ))}
            </div>
          </div>
          <Card className="relative overflow-hidden p-6">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink-500 dark:text-ink-300">
                Featured Project
              </p>
              <h2 className="text-2xl font-semibold text-ink-900 dark:text-white">
                {featured.title}
              </h2>
              <p className="text-sm text-ink-600 dark:text-ink-300">{featured.summary}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <Button href={`/projects/${featured.slug}`} variant="outline">
                View case study
              </Button>
            </div>
            <div className="relative mt-6 h-48 w-full overflow-hidden rounded-xl">
              <Image
                src={featured.screenshots[0]?.src ?? "/images/projects/placeholder.svg"}
                alt={featured.screenshots[0]?.alt ?? featured.title}
                fill
                className="object-cover"
              />
            </div>
          </Card>
        </Container>
      </Section>

      <Section className="section-divider">
        <Container className="space-y-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <h2 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">
                Featured work
              </h2>
              <p className="text-sm text-ink-600 dark:text-ink-300">{profile.copy.featuredIntro}</p>
            </div>
            <Button href="/projects" variant="ghost">
              View all projects
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-10">
          <div className="space-y-2">
            <h2 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">
              Skills snapshot
            </h2>
            <p className="text-sm text-ink-600 dark:text-ink-300">{profile.copy.skillsIntro}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {profile.skills.map((skillGroup) => (
              <Card key={skillGroup.category} className="p-6">
                <p className="text-sm font-semibold text-ink-900 dark:text-white">
                  {skillGroup.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="section-divider">
        <Container className="space-y-10">
          <div className="space-y-2">
            <h2 className="font-display text-3xl font-semibold text-ink-900 dark:text-white">
              Kind words
            </h2>
            <p className="text-sm text-ink-600 dark:text-ink-300">
              {profile.copy.testimonialsIntro}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {profile.testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <p className="text-sm text-ink-600 dark:text-ink-300">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-ink-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-ink-500 dark:text-ink-400">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(profile)) }}
      />
    </>
  );
}
