"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // এনিমেশনের সময়কাল (ms)
      once: true,    // স্ক্রল করলে একবারই এনিমেশন হবে
      easing: "ease-out-cubic",
    })
  }, [])

  return <>{children}</>
}