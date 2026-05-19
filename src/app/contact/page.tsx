"use client"

import { Navbar } from "@/components/sections/navbar"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
