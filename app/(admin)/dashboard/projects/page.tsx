import Link from "next/link";
import { asc } from "drizzle-orm";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { deleteProject } from "./new/actions";

const STATUS_COLOR: Record<string, string> = {
  COMPLETED: "#1F9D6B",
  IN_PROGRESS: "#D98E04",
  ARCHIVED: "#64748B",
};

export default async function ProjectsAdminPage() {
  const allProjects = await db.select().from(projects).orderBy(asc(projects.order));

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-[#1A1F26]">Projects</h1>
        <Link
          href="/dashboard/projects/new"
          className="rounded-sm bg-[#0B1E33] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          + New project
        </Link>
      </div>

      <div className="divide-y divide-[#D8D2C4] rounded-sm border border-[#D8D2C4] bg-[#F7F5EF]">
        {allProjects.length === 0 && (
          <p className="p-6 text-sm text-[#64748B]">No projects yet.</p>
        )}
        {allProjects.map((project) => (
          <div key={project.id} className="flex items-center justify-between gap-4 p-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: STATUS_COLOR[project.status ?? "COMPLETED"] }}
                />
                <p className="truncate font-medium text-[#1A1F26]">{project.title}</p>
                {project.featured && (
                  <span className="shrink-0 rounded-sm bg-[#E4DFD1] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#64748B]">
                    Featured
                  </span>
                )}
                {!project.published && (
                  <span className="shrink-0 rounded-sm bg-[#F3D9D6] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[#B3261E]">
                    Draft
                  </span>
                )}
              </div>
              <p className="truncate text-xs text-[#64748B]">/{project.slug}</p>
            </div>

            <div className="flex shrink-0 items-center gap-3">
              <Link
                href={`/dashboard/projects/${project.id}/edit`}
                className="text-sm font-medium text-[#0B1E33] underline underline-offset-4"
              >
                Edit
              </Link>
              <form
                action={async () => {
                  "use server";
                  await deleteProject(project.id);
                }}
              >
                <button type="submit" className="text-sm font-medium text-[#B3261E]">
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
