import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AOSProvider } from "@/components/AOSProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sumayea Rahman - Portfolio",
  description: "Full Stack Software Engineer",
  keywords: "portfolio, developer, finance, AI, full-stack",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  )
}