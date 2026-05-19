"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Instagram, MessageCircle } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tegaraldiansyah280708@gmail.com",
    href: "mailto:tegaraldiansyah280708@gmail.com",
  },

  {
    icon: MapPin,
    label: "Location",
    value: "Semarang, Indonesia",
    href: null,
  },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/tegar_a1d?igsh=eHZ5cDRkOGdidGwx" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/62882005266407" },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Get In Touch"
          title="Just Call Me"
          description="Setiap pesan adalah kesempatan untuk berkembang dan berkolaborasi"
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
                Mari mulai kolaborasi yang bermakna
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Jika Anda memiliki ide, proyek, atau kebutuhan pengembangan website, aplikasi, maupun branding, saya siap membantu mewujudkannya.
                Silakan hubungi saya, dan kita diskusikan solusi terbaik sesuai kebutuhan Anda.
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
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="flex items-center justify-center size-11 rounded-xl bg-muted hover:bg-emerald-100 dark:hover:bg-emerald-900/30 text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200"
                  >
                    <link.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Header */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Pilih Cara Terbaik untuk Menghubungi Saya
              </h3>
              <p className="text-muted-foreground">
                Klik salah satu tombol di bawah untuk langsung terhubung
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              {/* Email Button */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText('tegaraldiansyah280708@gmail.com')
                  alert('Email berhasil di-copy! ✅\ntegaraldiansyah280708@gmail.com')
                }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] w-full text-left cursor-pointer"
              >
                <div className="flex items-center justify-center size-14 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Mail className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Email Me</h4>
                  <p className="text-sm text-muted-foreground">tegaraldiansyah280708@gmail.com</p>
                </div>
                <div className="text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  📋
                </div>
              </button>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/62882005266407"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center size-14 rounded-xl bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Chat langsung via WhatsApp</p>
                </div>
                <div className="text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/tegar_a1d?igsh=eHZ5cDRkOGdidGwx"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/30 dark:to-purple-950/30 border border-pink-200 dark:border-pink-800 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center size-14 rounded-xl bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 group-hover:scale-110 transition-transform">
                  <Instagram className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-foreground mb-1">Instagram DM</h4>
                  <p className="text-sm text-muted-foreground">@tegar_a1d</p>
                </div>
                <div className="text-pink-600 dark:text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="p-5 rounded-xl bg-muted/50 border text-center">
              <p className="text-sm text-muted-foreground">
                💡 <strong>Tips:</strong> Untuk respons lebih cepat, hubungi via WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
