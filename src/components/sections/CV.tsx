"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Download } from "lucide-react"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"

const cvItems = [
  {
    title: "Curriculum Vitae",
    description: "Dokumen lengkap berisi profil, pendidikan, pengalaman, dan keterampilan saya",
    image: "/images/CVV Tegar.png",
    pdfUrl: "/cv/CV Tegar Aldiansyah.pdf",
  },
]

export function Testimonials() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleDownload = (pdfUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <section id="cv" className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Curriculum Vitae"
            title="Profil & Pengalaman"
            description="Siap berkontribusi dan memberikan dampak melalui kemampuan yang saya miliki"
          />

          <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
            {cvItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl overflow-hidden border bg-card shadow-sm"
              >
                {/* Image - Aspect ratio lebih kecil */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay with buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full flex gap-3">
                      <Button
                        size="sm"
                        onClick={() => setSelectedImage(item.image)}
                        variant="secondary"
                        className="gap-2 flex-1"
                      >
                        <Eye className="size-4" />
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleDownload(item.pdfUrl, item.title)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 flex-1"
                      >
                        <Download className="size-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  {/* Mobile buttons - visible on small screens */}
                  <div className="flex gap-3 md:hidden">
                    <Button
                      size="sm"
                      onClick={() => setSelectedImage(item.image)}
                      variant="secondary"
                      className="gap-2 flex-1"
                    >
                      <Eye className="size-4" />
                      Preview
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(item.pdfUrl, item.title)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 flex-1"
                    >
                      <Download className="size-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL for Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto">
            <img
              src={selectedImage}
              alt="CV Preview"
              className="w-full rounded-lg shadow-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-black rounded-full p-2 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}