"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { projects, projectImages, users } from "@/db/schema";
import { slugify } from "@/lib/slugify";

async function requireAdmin(): Promise<{ id: string | null }> {
  const [user] = await db.select().from(users).where(eq(users.email, "sumayearahman7@gmail.com"));
  return { id: user?.id ?? null };
}

function parseFormData(formData: FormData) {
  const techStackRaw = String(formData.get("techStack") ?? "");
  const galleryRaw = String(formData.get("gallery") ?? "");

  return {
    values: {
      title: String(formData.get("title") ?? "").trim(),
      slug: slugify(String(formData.get("slug") || formData.get("title") || "")),
      description: String(formData.get("description") ?? "").trim(),
      fullDescription: String(formData.get("fullDescription") ?? "").trim() || null,
      thumbnail: String(formData.get("thumbnail") ?? "").trim(),
      techStack: techStackRaw.split(",").map((t) => t.trim()).filter(Boolean),
      liveUrl: String(formData.get("liveUrl") ?? "").trim() || null,
      githubUrl: String(formData.get("githubUrl") ?? "").trim() || null,
      challenges: String(formData.get("challenges") ?? "").trim() || null,
      improvements: String(formData.get("improvements") ?? "").trim() || null,
      demoVideo: String(formData.get("demoVideo") ?? "").trim() || null,
      status: String(formData.get("status") ?? "COMPLETED") as "COMPLETED" | "IN_PROGRESS" | "ARCHIVED",
      featured: formData.get("featured") === "on",
      order: Number(formData.get("order") ?? 0),
      published: formData.get("published") === "on",
    },
    gallery: galleryRaw
      .split("\n")
      .map((url) => url.trim())
      .filter(Boolean),
  };
}

async function syncGalleryImages(projectId: string, urls: string[]) {
  // Simplest correct approach for a small admin panel: wipe and re-insert
  // in the submitted order. Fine at this scale; swap for a diff if the
  // gallery grows large.
  await db.delete(projectImages).where(eq(projectImages.projectId, projectId));
  if (urls.length > 0) {
    await db.insert(projectImages).values(
      urls.map((imageUrl, i) => ({ projectId, imageUrl, order: i }))
    );
  }
}

export async function createProject(formData: FormData) {
  const user = await requireAdmin();
  const { values, gallery } = parseFormData(formData);

  const [created] = await db
    .insert(projects)
    .values({ ...values, userId: user.id ?? null })
    .returning({ id: projects.id });

  await syncGalleryImages(created.id, gallery);

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
}

export async function updateProject(id: string, formData: FormData) {
  await requireAdmin();
  const { values, gallery } = parseFormData(formData);

  await db
    .update(projects)
    .set({ ...values, updatedAt: new Date() })
    .where(eq(projects.id, id));

  await syncGalleryImages(id, gallery);

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath(`/projects/${values.slug}`);
  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
}

export async function deleteProject(id: string) {
  await requireAdmin();
  // project_images has onDelete: "cascade" on projectId, so this is enough.
  await db.delete(projects).where(eq(projects.id, id));

  revalidatePath("/");
  revalidatePath("/projects");
  revalidatePath("/dashboard/projects");
}
