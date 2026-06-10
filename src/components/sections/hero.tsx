"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

const sliderImages = [
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1993&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop",
]

const labels = [
  "Yoga", "Meditation", "Stress Relief", "Naturopathy",
  "Sound Therapy", "Deep Tissue Massage", "Cupping Therapy", "Mud Therapy",
  "Yoga", "Meditation", "Stress Relief", "Naturopathy",
]

const bgImage = "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <section
      ref={ref}
      className="relative h-screen flex flex-col bg-deep overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-[center_30%] sm:bg-center scale-110"
        style={{ y: bgY, backgroundImage: `url('${bgImage}')` }}
      />

      <div className="absolute inset-0 overlay-hero pointer-events-none z-[2]" />

      <div className="absolute inset-0 pointer-events-none z-[3] max-sm:hidden">
        <div className="container-main h-full relative">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-[1px] bg-white/10"
              style={{ left: `${(i / 5) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-[4] flex-1 flex flex-col justify-center container-main pt-16 sm:pt-[7.5rem] pb-28 sm:pb-[18rem]">
        <div className="w-full max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[3rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[4rem] xl:text-[5.125rem] leading-[1.05] sm:leading-[1] font-serif font-medium text-white text-balance"
          >
            Wellness That
            <br />
            <span className="italic font-normal text-white/85">
              Transforms Lives
            </span>
          </motion.h1>



          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.consultation)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-6 sm:py-3 bg-white text-primary rounded-full text-sm font-sans font-medium hover:bg-white/90 transition-all duration-300 active:scale-[0.97]"
            >
              Book Consultation
              <span className="w-8 h-8 sm:w-[2.125rem] sm:h-[2.125rem] rounded-full bg-primary text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-primary-hover">
                <ArrowUpRight size={15} strokeWidth={2} />
              </span>
            </a>
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.enquiry)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-white/15 backdrop-blur-lg text-white border border-white/20 rounded-full text-sm font-sans font-medium hover:bg-white/25 transition-all duration-300"
            >
              Enquire Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-6 sm:mt-8 flex flex-wrap gap-2.5 sm:gap-3"
          >
            {[
              { value: "11+", label: "Years Experience" },
              { value: "8500+", label: "Lives Impacted" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full"
              >
                <span className="text-sm sm:text-base font-serif font-medium text-white">{stat.value}</span>
                <span className="text-[0.55rem] sm:text-[0.6rem] text-white/60 font-sans uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-12 sm:bottom-14 left-0 right-0 z-[4] overflow-hidden pointer-events-none"
      >
        <div className="flex items-center gap-5 sm:gap-6 md:gap-7 animate-scroll-left pointer-events-auto" style={{ animationDuration: "40s" }}>
          {[...sliderImages, ...sliderImages, ...sliderImages].map((img, i) => {
            const floatClass = `sm:animate-float-${(i % 5) + 1}` as const
            return (
              <div key={i} className={`flex-shrink-0 ${floatClass}`}>
                <div className="relative w-[10rem] h-[12.5rem] sm:w-[11rem] sm:h-[13rem] md:w-[11.5rem] md:h-[13.5rem] rounded-full overflow-hidden group cursor-pointer shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:shadow-[0_12px_36px_rgba(0,0,0,0.22)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent sm:from-black/60 sm:via-black/10 sm:to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-2.5 md:gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <span className="w-2.5 h-[1.5px] sm:w-3 bg-white/80" />
                    <span className="text-[0.55rem] sm:text-[0.55rem] text-white/90 font-sans font-medium uppercase tracking-widest whitespace-nowrap">
                      {labels[i % labels.length]}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
