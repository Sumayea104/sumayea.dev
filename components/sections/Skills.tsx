import { db } from "@/db"
import { skills } from "@/db/schema"

// Category configuration - 4 categories only
const categoryConfig = {
  FRONTEND: {
    icon: "⚛️",
    label: "Frontend",
    color: "border-blue-200 dark:border-blue-800/50",
    bg: "bg-blue-50 dark:bg-blue-900/10"
  },
  BACKEND: {
    icon: "⚙️",
    label: "Backend",
    color: "border-green-200 dark:border-green-800/50",
    bg: "bg-green-50 dark:bg-green-900/10"
  },
  DATABASE: {
    icon: "🗄️",
    label: "Database",
    color: "border-yellow-200 dark:border-yellow-800/50",
    bg: "bg-yellow-50 dark:bg-yellow-900/10"
  },
  AI: {
    icon: "🧠",
    label: "AI & ML",
    color: "border-purple-200 dark:border-purple-800/50",
    bg: "bg-purple-50 dark:bg-purple-900/10"
  }
}

export async function Skills() {
  const allSkills = await db.select().from(skills)

  // Filter only 4 categories
  const allowedCategories = ["FRONTEND", "BACKEND", "DATABASE", "AI"]
  
  // Group and filter skills
  const grouped = allSkills
    .filter(skill => allowedCategories.includes(skill.category))
    .reduce((acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, typeof allSkills>)

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              💻 Technical Ecosystem
            </span>
          </h2>
          <p >
            Technologies I work with to build modern applications
          </p>
        </div>

        {/* Skills Grid - 2 columns on all devices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6">
          {Object.entries(grouped).map(([category, items]) => {
            const config = categoryConfig[category as keyof typeof categoryConfig]
            
            return (
              <div
                key={category}
                className={`bg-white dark:bg-gray-900/50 p-5 md:p-6 rounded-xl border ${config?.color || "border-gray-200 dark:border-gray-800"} hover:shadow-lg transition-shadow duration-300`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-xl">{config?.icon || "📦"}</span>
                  <h3 className="text-base md:text-lg font-semibold capitalize">
                    {config?.label || category.replace("_", " ")}
                  </h3>
                  <span className="ml-auto text-xs text-muted-foreground bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 rounded-full font-medium">
                    {items.length}
                  </span>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill.id}
                      className="px-3 py-1.5 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-200 text-xs md:text-sm font-medium rounded-full border border-purple-200 dark:border-purple-800/30 hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-colors duration-200"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Total Skills Count */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-500/50 rounded-full border border-gray-200 dark:border-gray-400">
            🚀 {allSkills.length} technologies • {Object.keys(grouped).length} categories
          </span>
        </div>
      </div>
    </section>
  )
}