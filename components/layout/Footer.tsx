"use client"

import Link from "next/link"
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"

const contactEmail = "sumayearahman7" + "@" + "gmail.com"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t transition-colors duration-300 
      bg-gray-50/80 dark:bg-gray-950/80 
      border-gray-200/60 dark:border-gray-800/60
      backdrop-blur-sm">
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                sumayea
              </span>
              <span className="text-gray-800 dark:text-white">.dev</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Full Stack Developer • MBA (Finance) • AI Enthusiast
            </p>
            <div className="flex gap-3 mt-4">
              <a 
                href="https://github.com/Sumayea104" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sumayea-rahman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://x.com/RahmanSuma22098" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={`mailto:${contactEmail}`}
                className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#projects" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#education" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/Sumayea104" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sumayea-rahman" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-white mb-4">Let's Connect</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Have a project? Let's build something amazing together.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:scale-105 transition shadow-lg shadow-purple-500/30 text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-200/60 dark:border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> by Sumayea Rahman
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button 
            onClick={scrollToTop} 
            className="p-2 rounded-full transition-all duration-300
              bg-gray-200/80 dark:bg-gray-800/80
              text-gray-600 dark:text-gray-400
              hover:bg-purple-100 dark:hover:bg-purple-900/30
              hover:text-purple-600 dark:hover:text-purple-400
              hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}