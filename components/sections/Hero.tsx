import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, Download, Eye, Sparkles } from "lucide-react"

const email = "sumayearahman7" + "@" + "gmail.com"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-24 relative overflow-hidden text-foreground">
      
      {/* 🎯 Premium Gradient Background (Matched with About Section) */}
      <div className="absolute inset-0 -z-10 " />

      {/* Glow Blur Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl" /> 
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
          
          {/* Left Side - Information */}
          <div className="order-last lg:order-first text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-6 border border-purple-500/20">
              <Sparkles size={16} />
              Available for Opportunities
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Sumayea Rahman
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-foreground/80 font-medium mb-6">
              Full-Stack Software Engineer
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transforming ideas into modern, high-performance AI applications with Next.js, React, TypeScript, and Node.js.
            </p>

            {/* Resume Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0 mb-8">
              {/* Preview Button */}
              <a 
                href="/Resume-Sumayea Rahman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap"
              >
                <Eye size={18} className="shrink-0" />
                <span>Preview Resume</span>
              </a>

              {/* Download Button */}
              <a 
                href="/Resume-Sumayea Rahman.pdf"
                download="Sumayea_Rahman_Resume.pdf"
                className="flex-1 px-5 py-3.5 border-2 border-purple-500/40 hover:border-purple-600 bg-purple-50/80 dark:bg-purple-950/40 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-semibold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-purple-500/20 flex items-center justify-center gap-2 text-sm sm:text-base whitespace-nowrap group"
              >
                <Download size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Vibrant Social Icons */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start mb-8 lg:mb-0">
              {[
                { icon: Github, href: "https://github.com/Sumayea104", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sumayea-rahman", label: "LinkedIn" },
                { icon: Twitter, href: "https://x.com/RahmanSuma22098", label: "Twitter" },
                { icon: Mail, href: `mailto:${email}`, label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-110 
                             bg-white/80 dark:bg-gray-800/80
                             text-purple-600 dark:text-purple-300
                             border-2 border-purple-300/60 dark:border-purple-800/60
                             shadow-[0_4px_15px_rgba(168,85,247,0.12)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                             hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 
                             hover:text-white hover:border-transparent
                             hover:shadow-[0_8px_25px_rgba(168,85,247,0.35)] group"
                >
                  <social.icon size={20} className="transition-transform duration-300 group-hover:rotate-6" />
                </a>
              ))}
            </div>

          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last flex justify-center w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <Image
                  src="https://github.com/Sumayea104.png"
                  alt="Sumayea Rahman - Full Stack Software Engineer"
                  width={400}
                  height={400}
                  className="rounded-full object-cover border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20"
                  priority
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 border-4 border-background">
                  <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}