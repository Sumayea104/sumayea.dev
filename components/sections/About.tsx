import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-16 md:py-20 bg-gray-50/50 dark:bg-gray-900/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
            My journey from Business Administration to Full Stack Development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ✅ Left Side - Local Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Gradient Border Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-40" />
              
              <div className="relative">
                <Image
                  src="/images/about-profile.png"  
                  alt="Sumayea Rahman - About"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                  priority
                />
                
                {/* Decorative Badge */}
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
              <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                My journey into software engineering didn&apos;t begin with a Computer Science degree—it began with curiosity.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                I studied <span className="text-purple-600 dark:text-purple-400 font-medium">Business Administration (MBA)</span>, 
                where I developed analytical thinking, communication, and problem-solving skills. Over time, I realized 
                that the problems I enjoyed solving most were the ones that involved building systems, understanding how 
                technology works, and creating solutions that people can use every day.
              </p>

              <p>
                Today, I focus on building modern web applications using technologies like 
                <span className="text-purple-600 dark:text-purple-400 font-medium"> Next.js, React, TypeScript, Node.js, PostgreSQL,</span> 
                and AI-powered development tools. I enjoy writing clean, maintainable code and designing applications 
                that balance performance, usability, and scalability.
              </p>

              <p>
                My business background gives me a different perspective. Beyond writing code, I enjoy thinking about 
                users, product decisions, communication, and how technology creates real-world value. I believe strong 
                software is built by understanding both technical challenges and human needs.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                <span className="text-2xl block mb-1">📚</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Reading</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                <span className="text-2xl block mb-1">🧠</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Learning</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                <span className="text-2xl block mb-1">💡</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Problem Solving</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                <span className="text-2xl block mb-1">🎨</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Design Thinking</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                <span className="text-2xl block mb-1">🚀</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Innovation</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-3 rounded-xl text-center border border-gray-100 dark:border-gray-700">
                <span className="text-2xl block mb-1">🌍</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">Exploring</span>
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