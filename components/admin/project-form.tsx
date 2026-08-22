import type { projects, projectImages } from "@/db/schema";

type ProjectRow = typeof projects.$inferSelect;
type ProjectImageRow = typeof projectImages.$inferSelect;

const inputClass =
  "w-full rounded-sm border border-[#D8D2C4] bg-white px-3 py-2 text-sm text-[#1A1F26] outline-none focus:border-[#0B1E33]";
const labelClass = "mb-1 block font-mono text-xs uppercase tracking-widest text-[#64748B]";
const hintClass = "normal-case text-[#9AA3AF]";

export function ProjectForm({
  project,
  gallery,
  action,
}: {
  project?: ProjectRow;
  gallery?: ProjectImageRow[];
  action: (formData: FormData) => void;
}) {
  return (
    <form action={action} className="mx-auto max-w-2xl space-y-5">
      <div>
        <label className={labelClass} htmlFor="title">Title</label>
        <input id="title" name="title" required defaultValue={project?.title} className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="slug">
          Slug <span className={hintClass}>(leave blank to auto-generate from title)</span>
        </label>
        <input id="slug" name="slug" defaultValue={project?.slug} className={inputClass} placeholder="agentic-finance-beast" />
      </div>

      <div>
        <label className={labelClass} htmlFor="description">Description (card summary, 1-2 lines)</label>
        <textarea id="description" name="description" required rows={2} defaultValue={project?.description} className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="fullDescription">Full description (project detail page)</label>
        <textarea id="fullDescription" name="fullDescription" rows={5} defaultValue={project?.fullDescription ?? ""} className={inputClass} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="challenges">Challenges</label>
          <textarea id="challenges" name="challenges" rows={3} defaultValue={project?.challenges ?? ""} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="improvements">Future improvements</label>
          <textarea id="improvements" name="improvements" rows={3} defaultValue={project?.improvements ?? ""} className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="status">Status</label>
          <select id="status" name="status" defaultValue={project?.status ?? "COMPLETED"} className={inputClass}>
            <option value="IN_PROGRESS">In progress</option>
            <option value="COMPLETED">Completed</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="order">Sort order (lower shows first)</label>
          <input id="order" name="order" type="number" defaultValue={project?.order ?? 0} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="techStack">Tech stack (comma-separated)</label>
        <input
          id="techStack"
          name="techStack"
          defaultValue={project?.techStack?.join(", ")}
          placeholder="Python, LangGraph, Mistral AI"
          className={inputClass}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass} htmlFor="githubUrl">GitHub URL</label>
          <input id="githubUrl" name="githubUrl" defaultValue={project?.githubUrl ?? ""} className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="liveUrl">Live URL</label>
          <input id="liveUrl" name="liveUrl" defaultValue={project?.liveUrl ?? ""} className={inputClass} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="demoVideo">Demo video URL</label>
        <input id="demoVideo" name="demoVideo" defaultValue={project?.demoVideo ?? ""} className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="thumbnail">
          Thumbnail URL <span className={hintClass}>(card image — a generated visual is used if left blank)</span>
        </label>
        <input id="thumbnail" name="thumbnail" defaultValue={project?.thumbnail ?? ""} className={inputClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="gallery">
          Gallery images <span className={hintClass}>(one URL per line, for the project detail page)</span>
        </label>
        <textarea
          id="gallery"
          name="gallery"
          rows={4}
          defaultValue={gallery?.map((img) => img.imageUrl).join("\n")}
          className={inputClass}
        />
      </div>

      <div className="flex items-center gap-6 pt-1">
        <label className="flex items-center gap-2 text-sm text-[#1A1F26]">
          <input name="featured" type="checkbox" defaultChecked={project?.featured ?? true} />
          Featured (shown on homepage)
        </label>
        <label className="flex items-center gap-2 text-sm text-[#1A1F26]">
          <input name="published" type="checkbox" defaultChecked={project?.published ?? true} />
          Published
        </label>
      </div>

      <button
        type="submit"
        className="rounded-sm bg-[#0B1E33] px-5 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        {project ? "Save changes" : "Create project"}
      </button>
    </form>
  );
}
