"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Heart, Wind, Brain, Flame, Target, Activity, Shield, BookOpen } from "lucide-react"

const benefits = [
  { label: "Builds exceptional strength, flexibility, and endurance", icon: Flame },
  { label: "Improves posture, balance, and body alignment", icon: Target },
  { label: "Increases stamina and cardiovascular health", icon: Heart },
  { label: "Enhances concentration and mental discipline", icon: Brain },
  { label: "Promotes detoxification through movement and controlled breathing", icon: Wind },
  { label: "Improves joint mobility and muscle tone", icon: Activity },
  { label: "Supports healthy weight management", icon: Shield },
  { label: "Reduces stress and enhances emotional stability", icon: Heart },
  { label: "Boosts energy levels and overall vitality", icon: Flame },
  { label: "Develops self-discipline, patience, and mindfulness", icon: BookOpen },
  { label: "Encourages deeper connection between body, breath, and mind", icon: Wind },
]

export default function AshtangaYogaPage() {
  const heroRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const benefitsRef = useScrollReveal()

  return (
    <>
      <motion.section
        ref={heroRef.ref}
        initial={{ opacity: 0 }}
        animate={heroRef.isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop')",
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
            Discipline & Tradition
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Ashtanga Yoga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            A traditional and disciplined practice following a fixed sequence of postures to build strength, mental discipline, and inner awareness.
          </motion.p>
        </div>
      </motion.section>

      <Section className="bg-white">
        <motion.div
          ref={contentRef.ref}
          initial={{ opacity: 0, y: 40 }}
          animate={contentRef.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl mx-auto"
        >
          <span className="subtitle-text inline-block mb-4">The Eight-Limbed Path</span>
          <h2 className="heading-2 text-deep">What Is Ashtanga Yoga?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Ashtanga Yoga is a traditional and disciplined style of yoga developed from ancient yogic teachings. It follows a fixed sequence of postures performed in a specific order while coordinating movement with breath (Ujjayi Pranayama), energy locks (Bandhas), and focused gaze (Drishti). This method builds physical strength, mental discipline, and inner awareness.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Ashtanga Yoga is one of the most structured forms of yoga and is ideal for those seeking a consistent and progressive practice.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Benefits"
          title="Why Practice Ashtanga Yoga?"
        />
        <motion.div
          ref={benefitsRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={benefitsRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.label}
                variants={fadeUp}
                custom={i * 0.03}
                className="bg-white rounded-xl p-5 shadow-soft flex items-center gap-4"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <Icon size={18} />
                </span>
                <p className="body-regular text-text-body">{b.label}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white text-center">
        <span className="subtitle-text inline-block mb-4">Best For</span>
        <h2 className="heading-2 text-deep max-w-2xl mx-auto">
          Intermediate to advanced practitioners, fitness enthusiasts, athletes, and individuals looking for a structured and challenging yoga practice.
        </h2>
        <Link
          href="/contact/book-consultation"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full text-sm font-sans font-semibold hover:bg-primary-hover transition-all duration-300 group"
        >
          Join a Session
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </Section>
    </>
  )
}
