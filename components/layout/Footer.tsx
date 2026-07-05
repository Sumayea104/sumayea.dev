"use client"

import Link from "next/link"
import { Heart, GitHub, Linkedin, Mail, ArrowUp, X as Twitter } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/20 border-t border-border">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold">
              <span className="gradient-text">sumayea</span>
              <span className="text-foreground">.dev</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Full Stack Developer • MBA (Finance) • AI Enthusiast
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://github.com/Sumayea104"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <GitHub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumayea-rahman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://x.com/RahmanSuma22098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="mailto:sumayearahman7@gmail.com"
                className="text-muted-foreground hover:text-primary transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-primary transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-muted-foreground hover:text-primary transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#education" className="text-muted-foreground hover:text-primary transition">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-muted-foreground hover:text-primary transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  Resume
                </a>
              </li>
              <li>
                <a href="https://github.com/Sumayea104" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sumayea-rahman" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Let&apos;s Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Have a project? Let&apos;s build something amazing together.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-primary text-white rounded-lg hover:scale-105 transition shadow-lg shadow-primary/30 text-sm font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500" /> by Sumayea Rahman
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 bg-gradient-primary/10 rounded-full hover:scale-110 transition text-primary"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}