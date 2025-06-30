import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { WebsiteLogo } from "@/components/website-logo"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Newsroom - Latest News & Updates",
  description: "Stay informed with the latest news, breaking stories, and in-depth analysis from around the world.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebsiteLogo />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
