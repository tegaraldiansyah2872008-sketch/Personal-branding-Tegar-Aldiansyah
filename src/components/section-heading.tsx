"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12 md:mb-16"
    >
      <span className="inline-block text-sm font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
