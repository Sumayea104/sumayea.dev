import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

// Updated blog posts array (June 28 post removed)
const blogPosts = [
  {
    id: 1,
    title: "Building a Multi-Agent FinTech System with LangGraph",
    excerpt: "Learn how to build a production-ready multi-agent system for financial analysis using LangGraph, Mistral AI, and Gemini API.",
    date: "July 5, 2026",
    readTime: "8 min read",
    category: "AI",
    slug: "multi-agent-fintech-langgraph",
  },
  {
    id: 3,
    title: "RAG Pipeline with pgvector: A Practical Guide",
    excerpt: "Implementing Retrieval-Augmented Generation with PostgreSQL pgvector for production-ready AI applications.",
    date: "June 15, 2026",
    readTime: "10 min read",
    category: "AI",
    slug: "rag-pipeline-pgvector-guide",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          📝 Latest Blog
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Sharing my learnings, insights, and experiences in tech and finance
        </p>

        {/* ✅ Fixed Grid: Mobile-e 1 ta thakbe, Tab (md) ebong PC (lg) dutotei pashapashi 2 ta thakbe perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 mb-3">
                  <span className="px-2 py-1 bg-purple-600/10 rounded-full">{post.category}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                <div className="mt-4 flex items-center text-purple-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-purple-600 font-medium hover:gap-3 transition-all"
          >
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}