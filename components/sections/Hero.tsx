import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, Download, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* ✅ Animated Gradient Background - আপনার আগের মতো */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        
        {/* ✅ Extra Gradient Layer */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            {/* ✅ Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-6 border border-purple-200/30 dark:border-purple-800/30">
              <Sparkles size={16} />
              Available for Opportunities
            </div>

            {/* ✅ Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Sumayea Rahman
              </span>
            </h1>

            {/* ✅ Designation */}
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
              Full Stack Developer | MBA (Finance) | AI Enthusiast
            </h2>

            {/* ✅ Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed">
              Building business-driven web applications with financial thinking,
              AI integration, and modern technology.
            </p>

            {/* ✅ Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:scale-105 transition shadow-lg shadow-purple-500/30 flex items-center gap-2 font-medium"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-600/10 transition font-medium"
              >
                View Projects
              </a>
            </div>

            {/* ✅ Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/Sumayea104"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumayea-rahman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/RahmanSuma22098"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:sumayearahman7@gmail.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-purple-100 dark:hover:bg-purple-900/30 transition hover:scale-110 hover:shadow-lg hover:shadow-purple-500/20"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* ✅ Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl animate-pulse" />
              
              {/* ✅ Profile Image */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <Image
                  src="https://github.com/Sumayea104.png"
                  alt="Sumayea Rahman - Full Stack Developer"
                  width={400}
                  height={400}
                  className="rounded-full object-cover border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20"
                  priority
                />
                
                {/* ✅ Online Status Ring */}
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-white dark:border-gray-900">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}