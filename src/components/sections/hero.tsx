"use client"

import { motion } from "framer-motion"
import { ArrowDown, FileText, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Creative workspace background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background dark:from-background/95 dark:via-background/90 dark:to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full blur-lg opacity-40" />
            <div className="relative size-32 md:size-40 rounded-full overflow-hidden border-4 border-emerald-500/30 shadow-2xl">
              <Image
                src="/images/avatar.png"
                alt="Arga Pradipta"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
        >
          Arga{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700 dark:from-emerald-400 dark:to-emerald-600">
            Pradipta
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-emerald-600 dark:text-emerald-400 font-medium"
        >
          Creative Developer & UI/UX Designer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Crafting Digital Experiences That Inspire
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 min-h-[44px]"
            onClick={() => handleScroll("#portfolio")}
          >
            <FileText className="size-4" />
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 min-h-[44px]"
            onClick={() => handleScroll("#contact")}
          >
            <Mail className="size-4" />
            Get In Touch
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => handleScroll("#about")}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="size-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
