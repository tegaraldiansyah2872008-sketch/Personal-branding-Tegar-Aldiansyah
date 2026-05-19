"use client"

import { Navbar } from "@/components/sections/navbar"
import { About } from "@/components/sections/about"
import { Footer } from "@/components/sections/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <About />
      </main>
      <Footer />
    </div>
  )
}
