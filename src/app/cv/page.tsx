"use client"

import { Navbar } from "@/components/sections/navbar"
import { Testimonials } from "@/components/sections/CV"
import { Footer } from "@/components/sections/footer"

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
