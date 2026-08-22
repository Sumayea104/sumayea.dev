import { notFound } from "next/navigation";
import { eq, asc } from "drizzle-orm";
import { db } from "@/db";
import { projects, projectImages } from "@/db/schema";
import { ProjectForm } from "@/components/admin/project-form";
import { updateProject } from "../../new/actions";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const [project] = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
  if (!project) notFound();

  const gallery = await db
    .select()
    .from(projectImages)
    .where(eq(projectImages.projectId, id))
    .orderBy(asc(projectImages.order));

  const updateWithId = updateProject.bind(null, project.id);

  return (
    <div className="px-6 py-10">
      <h1 className="mb-8 text-center font-display text-2xl font-semibold text-[#1A1F26]">
        Edit project
      </h1>
      <ProjectForm project={project} gallery={gallery} action={updateWithId} />
    </div>
  );
}
