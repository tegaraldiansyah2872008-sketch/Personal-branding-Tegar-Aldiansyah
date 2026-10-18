"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

// Static data (images and links)
const projectsData = [
  {
    image: "/images/Inasnung.png",
    link: "https://cemalcemil-six.vercel.app/" 
  },
  {
    image: "/images/IOT.png",
    link: "https://drive.google.com/file/d/1cw-aZbZ9FjqNLyQeC4XFTe0rXcr8UPp0/view?usp=drivesdk"
  },
]

function ProjectCard({
  project,
  projectData,
  index,
  onView,
  t,
}: {
  project: { title: string; description: string }
  projectData: { image: string; link: string }
  index: number
  onView: (img: string) => void
  t: any
}) {
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
          src={projectData.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full flex gap-2">
            <Button
              size="sm"
              onClick={() => onView(projectData.image)}
              variant="secondary"
              className="gap-2"
            >
              <ExternalLink className="size-3.5" />
              {t.portfolio.preview}
            </Button>
            {projectData.link && (
              <Button
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(projectData.link, '_blank', 'noopener,noreferrer')
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2"
              >
                <ExternalLink className="size-3.5" />
                {t.portfolio.visit}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
            <Badge
              variant="secondary"
              className="text-xs font-normal bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
            >
            </Badge>
        </div>
      </div>
    </motion.div>
  )
}

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { t } = useLanguage()

  return (
    <>
      <section id="portfolio" className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label={t.portfolio.label}
            title={t.portfolio.title}
            description={t.portfolio.description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.portfolio.projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                projectData={projectsData[i]}
                index={i}
                onView={(img) => setSelectedImage(img)}
                t={t}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Project preview"
            className="max-w-4xl w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
  )
}