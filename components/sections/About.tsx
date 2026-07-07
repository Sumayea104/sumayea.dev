import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-blue-50/30 dark:from-purple-950/30 dark:via-pink-950/20 dark:to-blue-950/10" />
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" /> 

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p >
            My journey from Business Administration to Full Stack Development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="lg:sticky lg:top-36 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-900 to-pink-900 rounded-2xl blur-xl opacity-40" />
              <div className="relative">
                <Image
                  src="/images/about-profile.png"  
                  alt="Sumayea Rahman - About"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover border-2 border-white dark:border-pink-800 shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                  👩‍💻 Developer
                </div>
              </div>
            </div>
          </div>

               {/* Right Side - Content */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-4xl text-purple-600">&quot;</span>
              <p className="text-lg text-gray-900 dark:text-gray-200 italic leading-relaxed">
                My journey into software engineering didn&apos;t begin with a Computer Science degree—it began with curiosity.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I studied <span className="text-purple-600 dark:text-purple-700 font-medium">Business Administration (MBA)</span>, 
                where I developed analytical thinking, communication, and problem-solving skills. Over time, I realized 
                that the problems I enjoyed solving most were the ones that involved building systems, understanding how 
                technology works, and creating solutions that people can use every day.
              </p>

              <p>
                Today, I focus on building modern web applications using technologies like 
                <span className="text-purple-900 dark:text-purple-700 font-medium"> Next.js, React, TypeScript, Node.js, PostgreSQL,</span> 
                and AI-powered development tools. I enjoy writing clean, maintainable code and designing applications 
                that balance performance, usability, and scalability.
              </p>

              <p>
                My business background gives me a different perspective. Beyond writing code, I enjoy thinking about 
                users, product decisions, communication, and how technology creates real-world value. I believe strong 
                software is built by understanding both technical challenges and human needs.
              </p>
            </div>


            {/* ✅ Fun Facts Cards - Each with unique color theme */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {/* 📚 Reading - Purple */}
              <div className="group bg-gradient-to-br from-purple-100/80 to-purple-200/50 dark:from-purple-900/40 dark:to-purple-800/20 p-3 rounded-xl text-center border border-purple-200/50 dark:border-purple-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-purple-500/20">
                <span className="text-2xl block mb-1">📚</span>
                <span className="text-xs text-purple-700 dark:text-purple-300 font-medium">Reading</span>
              </div>

              {/* 🧠 Learning - Blue */}
              <div className="group bg-gradient-to-br from-blue-100/80 to-blue-200/50 dark:from-blue-900/40 dark:to-blue-800/20 p-3 rounded-xl text-center border border-blue-200/50 dark:border-blue-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-blue-500/20">
                <span className="text-2xl block mb-1">🧠</span>
                <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">Learning</span>
              </div>

              {/* 💡 Problem Solving - Amber */}
              <div className="group bg-gradient-to-br from-amber-100/80 to-amber-200/50 dark:from-amber-900/40 dark:to-amber-800/20 p-3 rounded-xl text-center border border-amber-200/50 dark:border-amber-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-amber-500/20">
                <span className="text-2xl block mb-1">💡</span>
                <span className="text-xs text-amber-700 dark:text-amber-300 font-medium">Problem Solving</span>
              </div>

              {/* 🎨 Design Thinking - Pink */}
              <div className="group bg-gradient-to-br from-pink-100/80 to-pink-200/50 dark:from-pink-900/40 dark:to-pink-800/20 p-3 rounded-xl text-center border border-pink-200/50 dark:border-pink-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-pink-500/20">
                <span className="text-2xl block mb-1">🎨</span>
                <span className="text-xs text-pink-700 dark:text-pink-300 font-medium">Design Thinking</span>
              </div>

              {/* 🚀 Innovation - Emerald */}
              <div className="group bg-gradient-to-br from-emerald-100/80 to-emerald-200/50 dark:from-emerald-900/40 dark:to-emerald-800/20 p-3 rounded-xl text-center border border-emerald-200/50 dark:border-emerald-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-emerald-500/20">
                <span className="text-2xl block mb-1">🚀</span>
                <span className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">Innovation</span>
              </div>

              {/* 🌍 Exploring - Teal */}
              <div className="group bg-gradient-to-br from-teal-100/80 to-teal-200/50 dark:from-teal-900/40 dark:to-teal-800/20 p-3 rounded-xl text-center border border-teal-200/50 dark:border-teal-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-teal-500/20">
                <span className="text-2xl block mb-1">🌍</span>
                <span className="text-xs text-teal-700 dark:text-teal-300 font-medium">Exploring</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:scale-105 transition shadow-lg shadow-purple-500/30 font-medium"
              >
                Let&apos;s Connect →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}