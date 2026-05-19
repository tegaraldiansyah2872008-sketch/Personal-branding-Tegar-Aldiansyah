"use client"

import { Navbar } from "@/components/sections/navbar"
import { Skills } from "@/components/sections/skills"
import { Footer } from "@/components/sections/footer"

export default function SkillsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
