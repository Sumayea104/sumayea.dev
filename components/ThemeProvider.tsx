"use client"

import { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: "light",
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme") as Theme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    
    if (saved) {
      setTheme(saved)
    } else if (prefersDark) {
      setTheme("dark")
    }
  }, [])



  useEffect(() => {
  if (!mounted) return

  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(theme)

  localStorage.setItem("theme", theme)
}, [theme, mounted])



  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)