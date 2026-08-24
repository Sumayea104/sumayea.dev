import Image from "next/image"

export function About() {
  return (
    <section id="about" className="px-6 sm:px-6 lg:px-8 py-16 md:py-20 relative overflow-hidden">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-10 " />
      
      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" /> */}
{/* 
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" />  */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            <span className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
              About Me
            </span>
          </h2>
          <p >
            I build software that turns real-world problems into practical, reliable solutions.
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
      I build software with a focus on solving real problems, designing reliable systems, and continuously improving how things work.
    </p>
    
  </div>

  <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
    <p>
      I&apos;m a <span className="text-purple-600 dark:text-purple-400 font-medium">Full-Stack Software Engineer</span> focused on building modern, scalable web applications. I work across the stack with
      <span className="text-purple-900 dark:text-purple-400 font-medium"> TypeScript, React, Next.js, Node.js, PostgreSQL,</span>
      and related backend and cloud technologies.
    </p>

<p>
  I enjoy working beyond just writing features — from designing APIs and database structures
  to implementing authentication, integrating third-party services, debugging complex issues,
  and deploying applications. I care about writing
  <span className="text-purple-600 dark:text-purple-400 font-medium"> clean, maintainable code</span>
  and understanding the systems I build rather than simply making them work.
</p>

<p>
  My background in business and finance also influences how I approach engineering.
  I naturally think about <span className="text-purple-600 dark:text-purple-400 font-medium">problem-solving,
  users, trade-offs, and business value</span> alongside technical decisions.
  I&apos;m continuously deepening my knowledge of software engineering, system design,
  and AI-powered development to build better and more reliable products.
</p>

  </div>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
    <div className="group bg-gradient-to-br from-purple-100/80 to-purple-200/50 dark:from-purple-900/40 dark:to-purple-800/20 p-3 rounded-xl text-center border border-purple-200/50 dark:border-purple-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-purple-500/20">
      <span className="text-2xl block mb-1">💻</span>
      <span className="text-xs text-purple-700 dark:text-purple-300 font-medium">Full-Stack Development</span>
    </div>

<div className="group bg-gradient-to-br from-blue-100/80 to-blue-200/50 dark:from-blue-900/40 dark:to-blue-800/20 p-3 rounded-xl text-center border border-blue-200/50 dark:border-blue-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-blue-500/20">
  <span className="text-2xl block mb-1">⚙️</span>
  <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">Backend & APIs</span>
</div>

<div className="group bg-gradient-to-br from-amber-100/80 to-amber-200/50 dark:from-amber-900/40 dark:to-amber-800/20 p-3 rounded-xl text-center border border-amber-200/50 dark:border-amber-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-amber-500/20">
  <span className="text-2xl block mb-1">🧩</span>
  <span className="text-xs text-amber-700 dark:text-amber-300 font-medium">Problem Solving</span>
</div>

<div className="group bg-gradient-to-br from-pink-100/80 to-pink-200/50 dark:from-pink-900/40 dark:to-pink-800/20 p-3 rounded-xl text-center border border-pink-200/50 dark:border-pink-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-pink-500/20">
  <span className="text-2xl block mb-1">🏗️</span>
  <span className="text-xs text-pink-700 dark:text-pink-300 font-medium">System Thinking</span>
</div>

<div className="group bg-gradient-to-br from-emerald-100/80 to-emerald-200/50 dark:from-emerald-900/40 dark:to-emerald-800/20 p-3 rounded-xl text-center border border-emerald-200/50 dark:border-emerald-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-emerald-500/20">
  <span className="text-2xl block mb-1">🚀</span>
  <span className="text-xs text-emerald-700 dark:text-emerald-300 font-medium">Deployment</span>
</div>

<div className="group bg-gradient-to-br from-teal-100/80 to-teal-200/50 dark:from-teal-900/40 dark:to-teal-800/20 p-3 rounded-xl text-center border border-teal-200/50 dark:border-teal-700/30 hover:scale-105 transition hover:shadow-lg hover:shadow-teal-500/20">
  <span className="text-2xl block mb-1">🤖</span>
  <span className="text-xs text-teal-700 dark:text-teal-300 font-medium">AI Development</span>
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