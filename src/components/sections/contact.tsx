"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@argapradipta.com",
    href: "mailto:hello@argapradipta.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jakarta, Indonesia",
    href: null,
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? I'd love to hear about it."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Let&apos;s create something amazing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need a new website, a mobile app, or a complete brand overhaul,
                I&apos;m here to help bring your vision to life. Let&apos;s discuss your project
                and find the best solution together.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                    <item.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow me</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex items-center justify-center size-11 rounded-xl bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
                  >
                    <link.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-card border shadow-sm space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required className="min-h-[44px]" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="min-h-[44px]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input id="subject" placeholder="Project inquiry" required className="min-h-[44px]" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="min-h-[120px] resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white min-h-[44px]"
                disabled={submitted}
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
