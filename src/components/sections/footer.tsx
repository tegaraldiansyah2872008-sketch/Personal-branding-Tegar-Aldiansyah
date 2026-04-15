"use client"

import { ArrowUp, Github, Linkedin, Twitter, Heart } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
]

export function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="mt-auto border-t bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              className="text-xl font-bold tracking-tight"
            >
              <span className="text-emerald-600 dark:text-emerald-400">A</span>
              <span className="text-foreground">P</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Creative Developer & UI/UX Designer
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex items-center justify-center size-9 rounded-lg bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
              >
                <link.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            &copy; {new Date().getFullYear()} Arga Pradipta. Made with{" "}
            <Heart className="size-3 text-red-500 fill-red-500" /> in Jakarta
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors group"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
