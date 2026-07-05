"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ExternalLink, ArrowLeft } from "lucide-react"

async function getDevToPosts() {
  try {
    const res = await fetch(
      "https://dev.to/api/articles?username=sumayea104&per_page=20",
      { 
        next: { revalidate: 3600 },
        headers: { 'Accept': 'application/json' }
      }
    )
    
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.error("Failed to fetch blog posts:", error)
    return []
  }
}

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDevToPosts().then((data) => {
      setPosts(data)
      setLoading(false)
    })
  }, [])

  return (
    <main className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-gray-50/50 via-white to-purple-50/30 dark:from-gray-950/50 dark:via-gray-950 dark:to-purple-950/20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* ✅ Back to Home Button - Fixed with high z-index */}
        <div className="relative z-[999] mb-8">
          <Link
            href="/"
            prefetch
            className="inline-flex items-center gap-2 rounded-lg border border-purple-200 dark:border-purple-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-purple-600 hover:border-purple-500 hover:shadow-lg dark:hover:text-purple-400"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="relative">
            {/* ✅ Decorative Blobs with pointer-events-none */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-purple-500/10 dark:bg-purple-500/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-pink-500/10 dark:bg-pink-500/5 blur-3xl" />
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent relative">
              📝 Blog
            </h1>
            <p className="text-muted-foreground mt-2 relative">
              Thoughts, learnings, and insights from my development journey
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground mt-4">Loading posts...</p>
          </div>
        )}

        {/* No Posts State */}
        {!loading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
          </div>
        )}

        {/* Blog Posts Grid */}
        {!loading && posts.length > 0 && (
          <div className="space-y-8">
            {posts.map((post: any) => (
              <article
                key={post.id}
                className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-800/50 hover:border-purple-300/50 dark:hover:border-purple-700/50 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Image Container */}
                  <div className="relative w-full aspect-[2.35/1] bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/20 overflow-hidden">
                    {post.cover_image ? (
                      <Image
                        src={post.cover_image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl opacity-20">📝</span>
                      </div>
                    )}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent" />
                    
                    {/* Category Badges */}
                    <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-purple-600 dark:text-purple-400 text-xs font-medium rounded-full shadow-lg border border-purple-200/50 dark:border-purple-800/30">
                        {post.tag_list?.[0] || "Tech"}
                      </span>
                      <span className="px-3 py-1.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/30">
                        📌 dev.to
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm md:text-base">
                      {post.description || "Read more on dev.to"}
                    </p>
                    
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
                      <span className="flex items-center gap-1.5 text-purple-600 dark:text-purple-400 ml-auto group-hover:gap-2.5 transition-all">
                        Read Article
                        <ExternalLink size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}

        {/* dev.to Link */}
        <div className="text-center mt-12">
          <a
            href="https://dev.to/sumayea104"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-800/50 text-sm text-muted-foreground hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300/50 dark:hover:border-purple-700/50 hover:shadow-lg transition group"
          >
            📖 Read all articles on dev.to
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition" />
          </a>
        </div>
      </div>
    </main>
  )
}