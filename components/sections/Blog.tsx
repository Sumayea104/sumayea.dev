import { Calendar, Clock, ExternalLink, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building My First AI Agent API with FastAPI and Mistral AI",
    excerpt: "Over the last few days, I built and deployed my first AI Agent API: Agentic Finance Beast featuring custom tool reasoning and FastAPI.",
    date: "June 8, 2026",
    readTime: "5 min read",
    category: "AI & API",
    url: "https://dev.to/sumayea104/building-my-first-ai-agent-api-with-fastapi-and-mistral-ai-3ign",
  },
  {
    id: 2,
    title: "Why I Built RAG From Scratch Before Using LangChain",
    excerpt: "Understanding the core architecture, vector embeddings, and retrieval mechanics by implementing RAG from scratch before diving into frameworks.",
    date: "June 15, 2026",
    readTime: "7 min read",
    category: "AI & RAG",
    url: "https://dev.to/sumayea104/why-i-built-rag-from-scratch-before-using-langchain-1fmd",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          📝 Latest Blog
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Sharing my learnings, insights, and experiences in tech and finance
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/80 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border border-purple-200/80 dark:border-purple-800/30 shadow-lg shadow-purple-500/5 dark:shadow-none hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400 mb-3">
                  <span className="px-2.5 py-1 bg-purple-600/10 dark:bg-purple-400/10 font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800/80 pt-4 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
                
                <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium text-sm group-hover:gap-2 transition-all">
                  Read More <ExternalLink size={15} className="ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://dev.to/sumayea104"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:gap-3 transition-all"
          >
            View All Posts on DEV.to <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}