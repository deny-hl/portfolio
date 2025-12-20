import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/Tag";
import { Card } from "@/components/Card";
import { formatDate } from "@/lib/utils";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={project.screenshots[0]?.src ?? "/images/projects/placeholder.svg"}
          alt={project.screenshots[0]?.alt ?? project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between text-xs text-ink-500 dark:text-ink-300">
          <span>{formatDate(project.date)}</span>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-ink-900 dark:text-ink-50">{project.title}</h3>
          <p className="text-sm text-ink-600 dark:text-ink-300">{project.description}</p>
        </div>
        <div className="mt-auto">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-ink-900 transition hover:text-accent-600 dark:text-ink-50"
          >
            View case study →
          </Link>
        </div>
      </div>
    </Card>
  );
}
