"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Heart, Wind, Brain, Flame, Moon, Activity, Shield } from "lucide-react"

const benefits = [
  { label: "Improves flexibility, balance, and posture", icon: Activity },
  { label: "Increases strength and joint mobility", icon: Flame },
  { label: "Reduces stress, anxiety, and depression", icon: Heart },
  { label: "Enhances concentration and mental clarity", icon: Brain },
  { label: "Improves breathing capacity and lung function", icon: Wind },
  { label: "Supports heart health and healthy blood circulation", icon: Activity },
  { label: "Boosts immunity and overall vitality", icon: Shield },
  { label: "Improves digestion and metabolism", icon: Flame },
  { label: "Promotes better sleep and relaxation", icon: Moon },
  { label: "Encourages emotional stability and inner peace", icon: Heart },
  { label: "Helps manage lifestyle disorders", icon: Brain },
  { label: "Supports spiritual growth and mindfulness", icon: Wind },
]

export default function TraditionalYogaPage() {
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
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop')",
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
            Ancient Wisdom for Modern Wellness
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Traditional Yoga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            An ancient practice that creates harmony between body, mind, and soul through mindful movement, breath, and meditation.
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
          <span className="subtitle-text inline-block mb-4">The Path of Harmony</span>
          <h2 className="heading-2 text-deep">What Is Traditional Yoga?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Traditional Yoga is an ancient practice that originated in India over 5,000 years ago. It is a holistic approach to health that combines physical postures (Asanas), breathing techniques (Pranayama), meditation (Dhyana), relaxation, and yogic philosophy. The goal of Traditional Yoga is to create harmony between the body, mind, and soul, leading to overall physical, mental, and spiritual well-being.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Unlike fast-paced fitness workouts, Traditional Yoga emphasizes mindful movement, proper breathing, inner awareness, and long-term health. It is suitable for people of all ages and fitness levels.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Benefits"
          title="Why Practice Traditional Yoga?"
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
          Beginners, seniors, working professionals, students, and anyone seeking complete physical and mental wellness.
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
