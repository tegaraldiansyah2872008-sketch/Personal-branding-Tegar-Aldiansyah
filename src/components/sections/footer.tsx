"use client"

import { ArrowUp, Instagram, MessageCircle, Heart } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  { label: "Beranda", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/tegar_a1d?igsh=eHZ5cDRkOGdidGwx" }, 
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/62882005266407" }, 
]

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
            >
              <span className="text-emerald-600 dark:text-emerald-400">Tegar</span>
              <span className="text-foreground">_Aldi</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Creative Developer & Network
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
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
            &copy; {new Date().getFullYear()} Tegar Aldiansyah.{" "}
            <Heart className="size-3 text-red-500 fill-red-500" />Semarang,Jawa Tengah
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
