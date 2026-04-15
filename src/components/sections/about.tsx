"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { SectionHeading } from "@/components/section-heading"
import Image from "next/image"

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Awards" },
]

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

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Get To Know Me"
          description="A passionate creative developer from Jakarta, Indonesia"
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
                src="/images/avatar.png"
                alt="Arga Pradipta portrait"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Hi! I&apos;m <strong className="text-foreground">Arga Pradipta</strong>, a passionate creative
              developer based in Jakarta, Indonesia with 5+ years of experience in building beautiful,
              functional digital products.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              I combine technical expertise with design thinking to create experiences that users love.
              My approach blends clean code with intuitive design, resulting in digital products that
              not only look great but also perform exceptionally well.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
              When I&apos;m not coding or designing, you&apos;ll find me exploring new creative tools,
              contributing to open-source projects, or sharing knowledge through workshops and articles.
            </p>

            {/* Stats Grid */}
            <div ref={ref} className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center p-4 rounded-xl bg-card border shadow-sm"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
