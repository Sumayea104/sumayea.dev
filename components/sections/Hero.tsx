import Image from "next/image"
import { Github, Linkedin, Twitter, Mail, Download, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/10 rounded-full text-purple-600 text-sm font-medium mb-6">
              <Sparkles size={16} />
              Available for Opportunities
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-purple-600">Sumayea Rahman</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Full Stack Developer | MBA (Finance) | AI Enthusiast
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Building business-driven web applications with financial thinking,
              AI integration, and modern technology.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:scale-105 transition shadow-lg shadow-purple-500/30 flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600/10 transition"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/Sumayea104" target="_blank" className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition hover:scale-110">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sumayea-rahman" target="_blank" className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/RahmanSuma22098" target="_blank" className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="mailto:sumayearahman7@gmail.com" className="p-3 bg-gray-100 rounded-full hover:bg-purple-100 transition hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-2xl" />
              <Image
                src="https://github.com/Sumayea104.png"
                alt="Sumayea Rahman"
                width={320}
                height={320}
                className="rounded-full object-cover border-4 border-purple-500/30 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}