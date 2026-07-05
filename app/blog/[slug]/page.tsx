import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft, ExternalLink } from "lucide-react"

// ✅ Next.js 15 - Correct params type
type Params = Promise<{ slug: string }>

async function getDevToPost(slug: string) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles/sumayea104/${slug}`,
      { 
        next: { revalidate: 3600 },
        headers: { 'Accept': 'application/json' }
      }
    )
    
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Failed to fetch blog post:", error)
    return null
  }
}

export default async function BlogDetailPage(props: { params: Params }) {
  // ✅ Await params
  const { slug } = await props.params
  
  const post = await getDevToPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50/50 via-white to-purple-50/30 dark:from-gray-950/50 dark:via-gray-950 dark:to-purple-950/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 transition mb-6 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition" />
          Back to Blog
        </Link>

        <article>
          {/* Hero Image */}
          <div className="relative w-full aspect-[2.35/1] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 shadow-xl shadow-purple-500/10 dark:shadow-purple-500/5">
            {post.cover_image ? (
              <>
                <Image
                  src={post.cover_image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-7xl opacity-20">📝</span>
              </div>
            )}
            
            <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full shadow-lg border border-purple-200/50 dark:border-purple-800/30">
                {post.tag_list?.[0] || "Tech"}
              </span>
              <span className="px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/30">
                📌 dev.to
              </span>
            </div>
          </div>

          {/* Title & Meta */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={15} className="text-purple-500" />
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-purple-500" />
                {post.reading_time_minutes || 5} min read
              </span>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 transition ml-auto"
              >
                Read on dev.to <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Blog Content */}
          <div 
            className="prose prose-purple dark:prose-invert max-w-none 
              prose-headings:text-foreground prose-headings:font-bold 
              prose-h2:text-2xl prose-h3:text-xl 
              prose-p:text-muted-foreground prose-p:leading-relaxed
              prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline
              prose-ul:text-muted-foreground prose-li:text-muted-foreground
              prose-strong:text-foreground
              prose-code:text-purple-600 prose-code:bg-purple-50 dark:prose-code:bg-purple-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm
              prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900/50 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-800
              prose-blockquote:border-l-purple-500 prose-blockquote:bg-purple-50/50 dark:prose-blockquote:bg-purple-900/10 prose-blockquote:px-6 prose-blockquote:py-3 prose-blockquote:rounded-r-xl
              prose-img:rounded-xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: post.body_html || post.body_markdown }}
          />

          {/* dev.to CTA */}
          <div className="mt-12 p-6 md:p-8 bg-gradient-to-br from-purple-50/80 to-pink-50/80 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl border border-purple-200/50 dark:border-purple-800/30 text-center backdrop-blur-sm">
            <p className="text-muted-foreground mb-3">
              👋 Enjoyed this article?
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:scale-[1.02] transition shadow-lg shadow-purple-500/30 font-medium"
            >
              Read Full Article on dev.to
              <ExternalLink size={16} />
            </a>
          </div>
        </article>
      </div>
    </main>
  )
}