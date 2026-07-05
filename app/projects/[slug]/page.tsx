import { db } from "@/db"
import { projects, projectImages } from "@/db/schema"
import { eq } from "drizzle-orm"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ExternalLink, Code2 } from "lucide-react"

// ✅ Next.js 15 - Correct way to type params
type Params = Promise<{ slug: string }>

export default async function ProjectDetailPage(props: { params: Params }) {
  // ✅ Await the params
  const { slug } = await props.params

  // Fetch project by slug
  const [project] = await db
    .select()
    .from(projects)
    .where(eq(projects.slug, slug))

  if (!project) {
    notFound()
  }

  // Fetch project images
  const images = await db
    .select()
    .from(projectImages)
    .where(eq(projectImages.projectId, project.id))
    .orderBy(projectImages.order)

  // Get first image for thumbnail
  const mainImage = images[0]?.imageUrl || null

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-100 pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        
        {/* ✅ Back Button */}
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-purple-400 transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" /> 
          Back to Projects
        </Link>

        {/* ✅ Project Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          {/* ✅ Status Badge */}
          {project.status && (
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/60 rounded-full border border-gray-700">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-300 font-medium">{project.status.replace("_", " ")}</span>
            </div>
          )}
        </div>

        {/* ✅ Main Image - Using Next.js Image for optimization */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-purple-950/20 mb-12">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={project.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Code2 size={48} className="text-gray-700 animate-pulse" />
            </div>
          )}
        </div>

        {/* ✅ Content Layout - 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 border-t border-gray-800/60 pt-10">
          
          {/* ✅ Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                About This Project
              </h2>
              <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                {project.fullDescription || project.description}
              </p>
            </div>
            
            {/* Challenges */}
            {project.challenges && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-gradient-to-b from-amber-500 to-orange-500 rounded-full" />
                  Challenges Faced
                </h2>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.challenges}
                </p>
              </div>
            )}
            
            {/* Future Improvements */}
            {project.improvements && (
              <div>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-gradient-to-b from-emerald-500 to-teal-500 rounded-full" />
                  Future Improvements
                </h2>
                <p className="text-gray-300 leading-relaxed text-base">
                  {project.improvements}
                </p>
              </div>
            )}
          </div>

          {/* ✅ Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Action Buttons */}
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800/80 backdrop-blur-sm space-y-3">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Project Links
              </h3>
              {project.liveUrl && project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-medium rounded-xl transition-all shadow-lg shadow-purple-900/20"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )} 
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-xl border border-gray-700 transition-colors"
                >
                  <Github size={18} /> Source Code
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-900/30 p-6 rounded-2xl border border-gray-800/60">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-purple-950/40 text-purple-300 text-xs font-medium rounded-lg border border-purple-900/40 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}