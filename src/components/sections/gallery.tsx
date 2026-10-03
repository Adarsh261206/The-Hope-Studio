"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, Play } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { galleryPhotos, galleryVideos } from "@/lib/gallery-data"

type Filter = "all" | "photos" | "videos"

const filters: { key: Filter; label: string }[] = [
  { key: "all", label: "All Media" },
  { key: "photos", label: "Photos" },
  { key: "videos", label: "Videos" },
]

export function GallerySection() {
  const { ref, isVisible } = useScrollReveal()
  const [filter, setFilter] = useState<Filter>("all")
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const showPhotos = filter !== "videos"
  const showVideos = filter !== "photos"

  return (
    <Section className="bg-white" id="gallery">
      <SectionHeader
        title="A Glimpse of The Hope"
        subtitle="Gallery"
        description="Every class, celebration, session and milestone — straight from our studio."
      />

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-5 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300 ${
              filter === f.key
                ? "bg-deep text-cream"
                : "bg-cream text-deep border border-stroke hover:border-primary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]"
      >
        {showPhotos &&
          galleryPhotos.map((photo) => (
            <motion.button
              key={photo.src}
              variants={fadeUp}
              type="button"
              onClick={() => setLightbox(photo.src)}
              className="mb-4 block w-full break-inside-avoid group relative rounded-lg overflow-hidden cursor-zoom-in"
              aria-label="View photo"
            >
              <Image
                src={photo.src}
                alt=""
                width={photo.w}
                height={photo.h}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-deep/0 group-hover:bg-deep/20 transition-colors duration-400" />
            </motion.button>
          ))}

        {showVideos &&
          galleryVideos.map((video) => (
            <motion.div
              key={video.src}
              variants={fadeUp}
              className="mb-4 break-inside-avoid relative rounded-lg overflow-hidden bg-deep group"
            >
              <video
                controls
                preload="none"
                poster={video.poster}
                className="w-full h-auto block"
                playsInline
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <Play size={11} className="text-white fill-white" />
                <span className="text-[0.6rem] font-sans font-medium uppercase tracking-wider text-white">
                  Video
                </span>
              </span>
            </motion.div>
          ))}
      </motion.div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-300"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt=""
                width={1600}
                height={1067}
                className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
