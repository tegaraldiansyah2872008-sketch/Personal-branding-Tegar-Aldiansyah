"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeading } from "@/components/section-heading"
import {
  Palette,
  Code2,
  FileType,
  Wind,
  Server,
  Figma,
  Sparkles,
  Target,
} from "lucide-react"

const skills = [
  { name: "UI/UX Design", percentage: 95, icon: Palette },
  { name: "React / Next.js", percentage: 90, icon: Code2 },
  { name: "TypeScript", percentage: 88, icon: FileType },
  { name: "Tailwind CSS", percentage: 92, icon: Wind },
  { name: "Node.js", percentage: 82, icon: Server },
  { name: "Figma", percentage: 90, icon: Figma },
  { name: "Motion Design", percentage: 78, icon: Sparkles },
  { name: "Brand Strategy", percentage: 85, icon: Target },
]

function SkillCard({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
      className="p-5 rounded-xl bg-card border shadow-sm transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center size-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
          <skill.icon className="size-5" />
        </div>
        <h3 className="font-semibold text-foreground">{skill.name}</h3>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">Proficiency</span>
        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
          {skill.percentage}%
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="My Skills"
          title="What I Do Best"
          description="A combination of technical expertise and creative vision"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
