import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const educationData = [
  {
    degree: "MBA in Finance",
    institution: "Leading University, Sylhet",
    location: "Sylhet, Bangladesh",
    period: "2022 - 2024",
    description: "Specialized in Financial Management, Investment Analysis, and Corporate Finance. CGPA: 3.72/4.00",
  },
  {
    degree: "Bachelor of Business Administration",
    institution: "Leading University, Sylhet",
    location: "Sylhet, Bangladesh",
    period: "2018 - 2022",
    description: "Major in Finance with minor in Marketing. CGPA: 3.65/4.00",
  },
  {
    degree: "AI-Driven Software Engineering Bootcamp",
    institution: "Ostad",
    location: "Online",
    period: "2025 - 2026",
    description: "Full-stack development with AI integration, including LangChain, RAG, and multi-agent systems.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          🎓 Education
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          My academic journey combining finance, technology, and AI
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg group-hover:scale-110 transition">
                  <GraduationCap className="text-purple-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}