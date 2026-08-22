import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { projects } from "@/db/schema/projects";
import { ProjectVisual } from "./project-visual";

type ProjectRow = typeof projects.$inferSelect;

const STATUS_META: Record<string, { label: string; color: string }> = {
  COMPLETED: { label: "Completed", color: "#1F9D6B" },
  IN_PROGRESS: { label: "In progress", color: "#D98E04" },
  ARCHIVED: { label: "Archived", color: "#64748B" },
};

export function ProjectCard({ project, index }: { project: ProjectRow; index: number }) {
  const status = STATUS_META[project.status ?? "COMPLETED"] ?? STATUS_META.COMPLETED;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-[#D8D2C4] bg-[#F7F5EF] transition-shadow hover:shadow-[0_4px_24px_-8px_rgba(11,30,51,0.25)]">
      {/* status indicator bar — reads like a ledger marker, not a floating badge */}
      <div className="absolute left-0 top-0 z-10 h-full w-[3px]" style={{ backgroundColor: status.color }} />

      <div className="relative h-40 w-full overflow-hidden border-b border-[#D8D2C4]">
        <ProjectVisual slug={project.slug} thumbnail={project.thumbnail} title={project.title} />

        {/* hover overlay for external links, kept from the original UX */}
        <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-[#0B1E33]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="rounded-full bg-white p-2.5 transition hover:scale-110"
            >
              <ExternalLink size={18} className="text-[#0B1E33]" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="rounded-full bg-white p-2.5 transition hover:scale-110"
            >
              <Github size={18} className="text-[#0B1E33]" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5 pl-6">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-[#64748B]">
          <span>{String(index + 1).padStart(2, "0")} / LEDGER</span>
          <span className="flex items-center gap-1.5" style={{ color: status.color }}>
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: status.color }} />
            {status.label}
          </span>
        </div>

        <h3 className="font-display text-lg font-semibold leading-snug text-[#1A1F26] line-clamp-1">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-[#3F4650] line-clamp-2">{project.description}</p>

        <p className="font-mono text-[11px] text-[#64748B]">
          {project.techStack.slice(0, 4).join("  /  ")}
          {project.techStack.length > 4 && `  /  +${project.techStack.length - 4}`}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-[#D8D2C4] pt-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-[#0B1E33] underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-[#0B1E33]"
          >
            View details
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="text-[#64748B] transition-colors hover:text-[#0B1E33] md:hidden"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
