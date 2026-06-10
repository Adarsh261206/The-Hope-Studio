"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Heart, Sun, Sparkles, Leaf, MessageCircle } from "lucide-react"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

const characteristics = [
  { label: "Certified", icon: Sparkles },
  { label: "Experienced", icon: Leaf },
  { label: "Holistic", icon: Sun },
  { label: "Personalized", icon: Heart },
]

const classes = [
  {
    title: "Hatha Yoga",
    level: "Beginner",
    duration: "60 min",
    levelColor: "bg-[#bb5016]",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    desc: "A gentle introduction to foundational yoga postures and breathing techniques.",
  },
  {
    title: "Meditation Sessions",
    level: "All Levels",
    duration: "40 min",
    levelColor: "bg-[#96672a]",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    desc: "Guided meditation practices to calm the mind and cultivate inner peace.",
  },
  {
    title: "Stress Management Yoga",
    level: "Beginner",
    duration: "45 min",
    levelColor: "bg-[#4f7d00]",
    image:
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1974&auto=format&fit=crop",
    desc: "Therapeutic yoga sequences designed to reduce stress and restore balance.",
  },
  {
    title: "Corporate Yoga Programs",
    level: "All Levels",
    duration: "Flexible",
    levelColor: "bg-[#96672a]",
    image:
      "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1993&auto=format&fit=crop",
    desc: "Tailored wellness sessions for workplaces to boost productivity and well-being.",
  },
]

export function YogaProgramsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Section className="bg-white" id="yoga">
      <div ref={ref} className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
        <div>
          <span className="subtitle-text inline-block mb-4">Find Your Practice</span>
          <h2 className="heading-2 text-deep max-w-[40rem]">
            Yoga Programs Designed for Every Body
          </h2>
          <p className="mt-4 body-large text-text-body max-w-[25rem]">
            From beginners to advanced practitioners, our yoga programs are crafted to support your unique wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {characteristics.map((char) => {
            const Icon = char.icon
            return (
              <div
                key={char.label}
                className="flex items-center gap-3 px-4 py-3 border border-stroke rounded-lg transition-all duration-300 hover:border-primary"
              >
                <Icon size={18} className="text-primary flex-shrink-0" />
                <span className="text-xs font-sans font-medium uppercase tracking-wider text-deep">
                  {char.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {classes.map((cls, i) => (
          <motion.div
            key={cls.title}
            variants={fadeUp}
            custom={i * 0.1}
            className="transition-all duration-400 hover:-translate-y-1 hover:scale-[1.02]"
          >
            <Link href="/yoga" className="group block">
              <div className="aspect-[4/5] rounded-lg overflow-hidden relative">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${cls.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className={`w-[0.625rem] h-[0.625rem] rounded-full ${cls.levelColor}`} />
                    <span className="text-[0.625rem] font-sans font-semibold uppercase text-deep">
                      {cls.level}
                    </span>
                    <span className="text-[0.625rem] text-text-body">·</span>
                    <span className="text-[0.625rem] font-sans text-text-body">
                      {cls.duration}
                    </span>
                  </div>
                </div>
              </div>
              <h5 className="heading-5 text-deep mt-4 group-hover:text-primary transition-colors duration-400">
                {cls.title}
              </h5>
              <p className="body-regular text-text-body mt-2">
                {cls.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 border-t border-dashed border-stroke pt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/yoga"
          className="group inline-flex items-center gap-2 px-5 py-2 bg-white text-primary border border-primary rounded-full text-base font-sans font-medium hover:bg-primary-hover hover:text-white transition-all duration-300 hover-scale"
        >
          View All Programs
          <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-300">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </Link>
        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.yoga)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300 hover-scale"
        >
          <MessageCircle size={16} />
          Enquire via WhatsApp
        </a>
      </div>
    </Section>
  )
}
