"use client"

import { Navbar } from "@/components/sections/navbar"
import { Portfolio } from "@/components/sections/portfolio"
import { Footer } from "@/components/sections/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}
