"use client"

import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="text-3xl md:text-4xl font-bold text-emerald-600 dark:text-emerald-400">
      {count}
      {suffix}
    </span>
  )
}

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentSlide, setCurrentSlide] = useState(0)
  const { t } = useLanguage()
  
  const slides = t.about.slides.map((slide, index) => ({
    ...slide,
    color: [
      "from-emerald-500/10 to-teal-500/10",
      "from-blue-500/10 to-cyan-500/10",
      "from-purple-500/10 to-pink-500/10",
      "from-amber-500/10 to-orange-500/10"
    ][index]
  }))

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-amber-200 dark:from-emerald-900/30 dark:to-amber-900/30 rounded-2xl blur-2xl opacity-30" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/tegar 1 mpk.jpeg"
                alt="Tegar Aldiansyah portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Slider Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted/30 border border-border p-8 min-h-[400px]">
              {/* Background Color */}
              <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} -z-10 rounded-2xl`} />
              
              {/* Slide Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {slides[currentSlide].content}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-background/80 hover:bg-background border border-border shadow-lg transition-all hover:scale-110 active:scale-95"
                  aria-label="Previous slide"
                  type="button"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-background/80 hover:bg-background border border-border shadow-lg transition-all hover:scale-110 active:scale-95"
                  aria-label="Next slide"
                  type="button"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "bg-emerald-600 dark:bg-emerald-400 w-8"
                        : "bg-muted-foreground/30 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    type="button"
                  />
                ))}
              </div>
            </div>

            {/* Slide Counter */}
            <div className="mt-4 text-center text-sm text-muted-foreground">
              {currentSlide + 1} / {slides.length}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
