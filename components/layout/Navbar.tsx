"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/ThemeProvider"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Education", href: "/#education" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // ✅ Fixed Scroll Handling: Only manage navbar background backdrop transparency
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on screen resize to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  // Freeze background scrolling when overlay mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Dimmed Overlay Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Primary Navigation Fixed Layout Wrapper */}
      <nav className={`fixed top-0 z-[60] w-full transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-800/50" 
          : "bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm border-b border-gray-100/30 dark:border-gray-800/30"
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                sumayea
              </span>
              <span className="text-gray-800 dark:text-white">.dev</span>
            </Link>

            {/* Desktop Links View */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-300 transition ml-2"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Actions Controls Toggles */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-purple-600/10 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 hover:bg-purple-600/20 dark:hover:bg-purple-600/30 transition border border-purple-200/30 dark:border-purple-800/30"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer Panel Sliding View Component */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[300px] sm:w-[350px] bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Layout Internal Section Block Header */}
        <div className="flex items-center justify-between px-6 pt-20 pb-4 border-b border-gray-200 dark:border-gray-800">
          <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Links Navigation Element */}
        <nav className="flex flex-col px-4 py-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 dark:hover:from-purple-900/20 hover:to-pink-50 dark:hover:to-pink-900/10 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200"
              onClick={handleLinkClick}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Footer Container */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Sumayea Rahman
          </p>
        </div>
      </div>
    </>
  )
}