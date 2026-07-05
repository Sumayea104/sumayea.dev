import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Education } from "@/components/sections/Education"
import { Blog } from "@/components/sections/Blog"
import { Contact } from "@/components/sections/Contact"
import { ThemeProvider } from "@/components/ThemeProvider"

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Blog />
      <Contact />
      <Footer />
    </ThemeProvider>
  )
}