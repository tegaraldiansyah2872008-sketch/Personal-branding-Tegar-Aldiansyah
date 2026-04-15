"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "A real-time analytics dashboard for SaaS platforms with interactive data visualization and smart reporting features.",
    image: "/images/project1.png",
    tags: ["React", "TypeScript", "D3.js", "Next.js"],
  },
  {
    title: "FitTrack App",
    description:
      "A fitness tracking mobile application with personalized workout plans, progress tracking, and social features.",
    image: "/images/project2.png",
    tags: ["React Native", "Node.js", "MongoDB", "Figma"],
  },
  {
    title: "Luxe Commerce",
    description:
      "An e-commerce platform redesign for a luxury fashion brand with an elevated shopping experience and seamless checkout.",
    image: "/images/project3.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
  },
  {
    title: "Brand Studio",
    description:
      "Complete brand identity system for a tech startup including logo, typography, color system, and comprehensive guidelines.",
    image: "/images/project4.png",
    tags: ["Figma", "Illustrator", "Brand Strategy", "Motion"],
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden border bg-card shadow-sm"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
            >
              <ExternalLink className="size-3.5" />
              View Project
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-normal bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          description="A selection of projects that showcase my skills and creativity"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
