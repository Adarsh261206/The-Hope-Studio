"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Zap, Wind, Heart, Sun, Moon } from "lucide-react"
import { cn } from "@/lib/cn"

const styles = [
  {
    label: "Breathing Practices",
    slug: "traditional",
    tagline: "Breath as foundation",
    description: "Master the art of pranayama and breath awareness to calm the nervous system, increase lung capacity, and cultivate inner peace.",
    image: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop",
    icon: Sun,
  },
  {
    label: "Stress Management Yoga",
    slug: "power",
    tagline: "Release & restore",
    description: "A therapeutic practice combining gentle movement, breathwork, and relaxation techniques to reduce stress and restore balance.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
    icon: Zap,
  },
  {
    label: "Hatha Yoga",
    slug: "ashtanga",
    tagline: "Balance of body & mind",
    description: "A classical approach combining postures, breath control, and meditation to harmonize body, mind, and spirit.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
    icon: Wind,
  },
  {
    label: "Corporate Yoga",
    slug: "vinyasa",
    tagline: "Wellness at work",
    description: "Chair and desk-friendly yoga sessions designed to reduce workplace stress, improve posture, and boost team well-being.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1974&auto=format&fit=crop",
    icon: Heart,
  },
  {
    label: "Meditation",
    slug: "meditation",
    tagline: "Stillness within",
    description: "Guided and silent meditation practices to calm the mind, reduce stress, and deepen your connection to the present moment.",
    image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1993&auto=format&fit=crop",
    icon: Moon,
  },
]

export default function YogaPage() {
  const heroRef = useScrollReveal()
  const gridRef = useScrollReveal()
  const ctaRef = useScrollReveal()

  return (
    <>
      <motion.section
        ref={heroRef.ref}
        initial={{ opacity: 0 }}
        animate={heroRef.isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] min-h-[32rem] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="subtitle-text text-white/80 inline-block mb-4"
          >
            Find Your Practice
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Yoga Practices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            Discover a range of yoga practices designed to meet you where you are — from
            breathwork to meditation, each path leads toward greater balance and well-being.
          </motion.p>
        </div>
      </motion.section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Our Offerings"
          title="A Style for Every Seeker"
          description="Whether you are new to the mat or deepening an existing practice, our diverse yoga programs invite you to explore, grow, and restore."
        />

        <motion.div
          ref={gridRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={gridRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {styles.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div key={s.slug} variants={fadeUp} custom={i * 0.1}>
                <Link href={`/yoga/${s.slug}`} className="group block">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${s.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5 text-[0.625rem] font-sans font-semibold uppercase tracking-wider text-white">
                        <Icon size={12} />
                        {s.label}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-white/70">
                        {s.tagline}
                      </span>
                      <p className="mt-2 body-regular text-white/90 line-clamp-2">
                        {s.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-wider text-white group-hover:text-primary-hover transition-colors duration-300">
                        Learn More
                        <ArrowUpRight size={14} strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <motion.section
        ref={ctaRef.ref}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaRef.isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-deep relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="container-main relative z-10 py-20 md:py-28 text-center">
          <span className="subtitle-text text-white/70 inline-block mb-4">
            Begin Your Journey
          </span>
          <h2 className="heading-2 text-white max-w-2xl mx-auto">
            Ready to Step Onto the Mat?
          </h2>
          <p className="mt-4 body-large text-white/70 max-w-[25rem] mx-auto">
            Book a class or private session and take the first step toward a more centered,
            vibrant you.
          </p>
          <Link
            href="/booking"
            className="mt-10 inline-flex items-center gap-2 px-6 py-3.5 bg-white text-deep rounded-full text-sm font-sans font-semibold hover:bg-primary-hover hover:text-white transition-all duration-300 group"
          >
            Book Consultation
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-deep text-white flex items-center justify-center group-hover:bg-white group-hover:text-deep transition-all duration-300">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </motion.section>
    </>
  )
}
