"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

type ProjectFiltersProps = {
  projects: Project[];
};

export function ProjectFilters({ projects }: ProjectFiltersProps) {
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tags.add(tag)));
    return ["All", ...Array.from(tags).sort()];
  }, [projects]);

  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-medium transition",
              activeTag === tag
                ? "border-ink-900 bg-ink-900 text-white dark:border-ink-50 dark:bg-ink-50 dark:text-ink-900"
                : "border-ink-200 bg-white/70 text-ink-600 hover:border-ink-500 hover:text-ink-900 dark:border-ink-700 dark:bg-ink-900/50 dark:text-ink-300 dark:hover:text-white",
            )}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-sm text-ink-600 dark:text-ink-300">
          No projects match this filter yet.
        </p>
      )}
    </div>
  );
}
