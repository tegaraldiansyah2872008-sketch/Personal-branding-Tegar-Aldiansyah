"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Arga is an exceptional developer who brings both technical excellence and creative vision to every project. His work on our dashboard exceeded all expectations.",
    name: "Sarah Chen",
    role: "CEO, TechVenture",
    initials: "SC",
  },
  {
    quote:
      "Working with Arga was a fantastic experience. He understood our brand vision perfectly and delivered a design system that truly represents our identity.",
    name: "Marcus Rivera",
    role: "Founder, BrandCraft",
    initials: "MR",
  },
  {
    quote:
      "Arga's attention to detail and ability to create intuitive user experiences is remarkable. Our app's user engagement increased by 40% after the redesign.",
    name: "Aisha Patel",
    role: "Product Manager, FitWell",
    initials: "AP",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          description="Hear from the people I've worked with"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border shadow-sm relative"
            >
              <Quote className="size-8 text-emerald-200 dark:text-emerald-900/50 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="size-10 border-2 border-emerald-200 dark:border-emerald-800">
                  <AvatarFallback className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
