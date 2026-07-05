import { db } from "@/db"
import { projects, projectImages } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  Code2,
  CheckCircle,
  Clock,
  Archive,
  ChevronRight,
  Calendar,
  Tag
} from "lucide-react"

// Status configuration
const statusConfig = {
  COMPLETED: {
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800/50",
    label: "Completed"
  },
  IN_PROGRESS: {
    icon: Clock,
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800/50",
    label: "In Progress"
  },
  ARCHIVED: {
    icon: Archive,
    color: "bg-gray-100 text-gray-700 dark:bg-gray-800/50 dark:text-gray-400",
    border: "border-gray-200 dark:border-gray-700/50",
    label: "Archived"
  }
}

// ✅ FIX: Make the component async and await params
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>  // ← params is now a Promise
}) {
  // ✅ FIX: Await params before accessing properties
  const { slug } = await params

  // Fetch project by slug
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, slug))  // ← use slug variable

  if (!project) {
    notFound()
  }

  // Fetch project images
  const images = await db
    .select()
    .from(projectImages)
    .where(eq(projectImages.projectId, project.id))
    .orderBy(projectImages.order)

  const status = project.status as keyof typeof statusConfig
  const StatusIcon = statusConfig[status]?.icon || CheckCircle

  return (
    <main className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-950/50 dark:to-gray-950">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link 
            href="/#projects" 
            className="hover:text-purple-600 dark:hover:text-purple-400 transition flex items-center gap-1"
          >
            Projects
          </Link>
          <ChevronRight size={14} className="text-purple-400" />
          <span className="text-foreground font-medium truncate bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {project.title}
          </span>
        </nav>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Badge */}
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full ${statusConfig[status]?.color || "bg-gray-100"}`}>
              <StatusIcon size={16} />
              {statusConfig[status]?.label || "Unknown"}
            </span>

            {/* Tech Stack Tags */}
            {project.techStack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 text-xs font-medium rounded-full border border-purple-200 dark:border-purple-800/30"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 5 && (
              <span className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700">
                +{project.techStack.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Main Image */}
        <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl overflow-hidden mb-10 shadow-xl shadow-purple-500/10 dark:shadow-purple-500/5 border-2 border-purple-100 dark:border-purple-900/30">
          {images[0] ? (
            <Image
              src={images[0].imageUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Code2 size={64} className="text-purple-300 dark:text-purple-700" />
            </div>
          )}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <span className="w-1.5 h-7 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  About This Project
                </span>
              </h2>
              <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>
            </section>

            {/* Challenges */}
            {project.challenges && (
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
                  <span className="text-amber-700 dark:text-amber-400">
                    Challenges Faced
                  </span>
                </h2>
                <div className="bg-amber-50/50 dark:bg-amber-900/10 p-6 rounded-xl border border-amber-200 dark:border-amber-800/30 shadow-sm">
                  <p className="text-amber-800 dark:text-amber-300 leading-relaxed text-sm">
                    {project.challenges}
                  </p>
                </div>
              </section>
            )}

            {/* Future Improvements */}
            {project.improvements && (
              <section>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-3">
                  <span className="w-1.5 h-7 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                  <span className="text-emerald-700 dark:text-emerald-400">
                    Future Improvements
                  </span>
                </h2>
                <div className="bg-emerald-50/50 dark:bg-emerald-900/10 p-6 rounded-xl border border-emerald-200 dark:border-emerald-800/30 shadow-sm">
                  <p className="text-emerald-800 dark:text-emerald-300 leading-relaxed text-sm">
                    {project.improvements}
                  </p>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info Card */}
            <div className="bg-white dark:bg-gray-900/50 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
                Project Info
              </h3>
              
              <div className="space-y-4 text-sm">
                {project.status && (
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider">Status</span>
                    <p className="font-medium text-foreground mt-0.5 flex items-center gap-1.5">
                      <StatusIcon size={14} className={statusConfig[status]?.color.split(' ')[0]} />
                      {statusConfig[status]?.label || "Unknown"}
                    </p>
                  </div>
                )}
                
                {project.createdAt && (
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider">Created</span>
                    <p className="font-medium text-foreground mt-0.5 flex items-center gap-1.5">
                      <Calendar size={14} className="text-purple-500" />
                      {new Date(project.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}

                {project.techStack.length > 0 && (
                  <div>
                    <span className="text-muted-foreground block text-xs uppercase tracking-wider">Technologies</span>
                    <p className="font-medium text-foreground mt-0.5 flex items-center gap-1.5">
                      <Tag size={14} className="text-purple-500" />
                      {project.techStack.length} tools used
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 text-white rounded-xl hover:scale-[1.02] transition shadow-lg shadow-purple-500/30 font-medium"
                >
                  <ExternalLink size={18} />
                  View Live Project
                </a>
              )}
              
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-400 dark:hover:border-purple-600 transition font-medium"
                >
                  <Github size={18} />
                  View on GitHub
                </a>
              )}

              <Link
                href="/#projects"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition font-medium text-sm group"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition" />
                Back to All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}