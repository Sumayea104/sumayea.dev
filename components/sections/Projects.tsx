import { db } from "@/db"
import { projects, projectImages } from "@/db/schema"
import { eq } from "drizzle-orm"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"  // ✅ Only these two

const getStatusColor = (status: string) => {
  switch (status) {
    case "COMPLETED":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
    case "IN_PROGRESS":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
    case "ARCHIVED":
      return "bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
    default:
      return "bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-400"
  }
}

export async function Projects() {
  const allProjects = await db.select().from(projects)

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
    <section id="projects" className="py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p >
            Building business-driven applications with modern technology and AI integration
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projectsWithImages.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-pink-200 hover:border-purple-800 dark:hover:border-purple-800/50 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 overflow-hidden">
                {project.images[0] ? (
                  <Image
                    src={project.images[0].imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-4xl">📁</span>
                  </div>
                )}
                
                {project.status && (
                  <span className={`absolute top-3 md:top-4 right-3 md:right-4 px-2.5 md:px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status.replace("_", " ")}
                  </span>
                )}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-3">
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white rounded-full hover:scale-110 transition"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} className="text-gray-800" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 bg-white rounded-full hover:scale-110 transition"
                      aria-label="GitHub repository"
                    >
                      <Github size={18} className="text-gray-800" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-4 md:p-5 lg:p-6">
                <h3 className="text-base md:text-lg lg:text-xl font-semibold  mb-1.5 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-xs md:text-sm  dark:text-gray-400 mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 md:px-2.5 md:py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-[10px] md:text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-0.5 md:px-2.5 md:py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] md:text-xs font-medium rounded-full">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 px-3 md:px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs md:text-sm font-medium rounded-lg hover:opacity-90 transition text-center"
                  >
                    View Details
                  </Link>
                  
                  <div className="flex gap-1.5 md:hidden">
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12 lg:mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 border-2 border-purple-600 text-purple-700 dark:text-purple-700 rounded-lg hover:bg-purple-600 hover:text-white dark:hover:text-white transition font-medium text-sm md:text-base"
          >
            View All Projects
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}