import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Education } from "@/components/sections/Education"
import { Blog } from "@/components/sections/Blog"
import { Contact } from "@/components/sections/Contact"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function Home() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-foreground selection:bg-purple-500/20">
        
        {/* 🎯 Exact Global Gradient Background (Matches Light & Dark Mode) */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-blue-50/30 dark:from-purple-950/30 dark:via-pink-950/20 dark:to-blue-950/10 pointer-events-none" />

        {/* 🔮 Background Glow Effects (Screen-wide floating ambient blurs) */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl" />
        </div>

        {/* Page Content */}
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Education />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}