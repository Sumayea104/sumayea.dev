import { db } from "@/db"
import { projects, projectImages } from "@/db/schema"
import { eq } from "drizzle-orm"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink, Code2, ArrowLeft } from "lucide-react"

// Status configuration
const statusConfig = {
  COMPLETED: {
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    label: "Completed"
  },
  IN_PROGRESS: {
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    label: "In Progress"
  },
  ARCHIVED: {
    color: "bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-400",
    label: "Archived"
  }
}

export default async function AllProjectsPage() {
  // Fetch all projects
  const allProjects = await db
    .select()
    .from(projects)
    .orderBy(projects.createdAt)

  // Fetch images for each project
  const projectsWithImages = await Promise.all(
    allProjects.map(async (project) => {
      const images = await db
        .select()
        .from(projectImages)
        .where(eq(projectImages.projectId, project.id))
        .orderBy(projectImages.order)
      return { ...project, images }
    })
  )

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-950/50 dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-600 transition mb-4"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-muted-foreground mt-2">
            {projectsWithImages.length} projects built with modern technology
          </p>
        </div>

        {/* Projects Grid */}
        {projectsWithImages.length === 0 ? (
          <div className="text-center py-20">
            <Code2 size={48} className="mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">No projects found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsWithImages.map((project) => {
              const status = project.status as keyof typeof statusConfig
              
              return (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-gray-900/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    {project.images[0] ? (
                      <Image
                        src={project.images[0].imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Code2 size={32} className="text-gray-300 dark:text-gray-600" />
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    {project.status && (
                      <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-medium rounded-full ${statusConfig[status]?.color || "bg-gray-100"}`}>
                        {statusConfig[status]?.label || project.status}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-foreground mb-1.5 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition text-center"
                      >
                        View Details
                      </Link>
                      
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition"
                          aria-label="GitHub"
                        >
                          <Github size={16} className="text-gray-700 dark:text-gray-300" />
                        </a>
                      )}
                      
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={16} className="text-gray-700 dark:text-gray-300" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}