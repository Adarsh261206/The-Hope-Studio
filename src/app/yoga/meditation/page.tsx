"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Heart, Brain, Wind, Moon, Eye, Sun, Sparkles, Shield, HeartPulse, Bird } from "lucide-react"

const meditationTypes = [
  { name: "Guided Meditation", icon: Eye },
  { name: "Mindfulness Meditation", icon: Brain },
  { name: "Breath Awareness Meditation", icon: Wind },
  { name: "Mantra Meditation", icon: Sun },
  { name: "Yoga Nidra (Deep Relaxation)", icon: Moon },
  { name: "Chakra Meditation", icon: Sparkles },
  { name: "Om Chanting Meditation", icon: Bird },
]

const benefits = [
  { label: "Reduces stress, anxiety, and mental fatigue", icon: Heart },
  { label: "Improves concentration, focus, and memory", icon: Brain },
  { label: "Promotes emotional balance and inner peace", icon: HeartPulse },
  { label: "Enhances self-awareness and mindfulness", icon: Eye },
  { label: "Improves the quality of sleep", icon: Moon },
  { label: "Lowers blood pressure and supports heart health", icon: HeartPulse },
  { label: "Boosts immunity and overall wellness", icon: Shield },
  { label: "Increases mental clarity and decision-making ability", icon: Brain },
  { label: "Helps manage anger, fear, and negative emotions", icon: Wind },
  { label: "Promotes relaxation and reduces muscle tension", icon: Moon },
  { label: "Increases positivity, confidence, and emotional resilience", icon: Sun },
  { label: "Supports spiritual growth and personal development", icon: Sparkles },
]

export default function MeditationPage() {
  const heroRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const typesRef = useScrollReveal()
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
              "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1993&auto=format&fit=crop')",
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
            Stillness Within
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Meditation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            A powerful mind-body practice that trains the mind to develop greater awareness, focus, and inner calm.
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
          <span className="subtitle-text inline-block mb-4">The Art of Stillness</span>
          <h2 className="heading-2 text-deep">What Is Meditation?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Meditation is a powerful mind-body practice that involves training the mind to develop greater awareness, focus, and inner calm. Rooted in ancient yogic traditions, meditation helps reduce mental distractions, improve emotional balance, and create a deep sense of peace. Through regular practice, meditation enhances overall well-being by harmonizing the body, mind, and spirit.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Whether you are a beginner or an experienced practitioner, meditation can become a valuable part of a healthy lifestyle.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Approaches to Stillness"
          title="Types of Meditation We Offer"
          description="Explore a range of meditation styles to find the practice that resonates with you."
        />
        <motion.div
          ref={typesRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={typesRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {meditationTypes.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.name}
                variants={fadeUp}
                custom={i * 0.05}
                className="bg-white rounded-xl p-6 shadow-soft text-center"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={22} />
                </span>
                <h5 className="heading-5 text-deep">{m.name}</h5>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          subtitle="Proven Benefits"
          title="Why Meditate?"
          description="Regular meditation practice yields profound benefits for mind, body, and spirit."
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
                className="bg-cream rounded-xl p-5 flex items-center gap-4"
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

      <Section className="bg-cream text-center">
        <span className="subtitle-text inline-block mb-4">Best For</span>
        <h2 className="heading-2 text-deep max-w-2xl mx-auto">
          Students, working professionals, senior citizens, homemakers, athletes, and anyone seeking mental peace, stress relief, emotional balance, and a healthier lifestyle.
        </h2>
        <p className="mt-4 body-large text-text-body max-w-[25rem] mx-auto">
          Join us for a guided meditation session and experience the profound rest that comes from true stillness.
        </p>
        <Link
          href="/contact/book-consultation"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full text-sm font-sans font-semibold hover:bg-primary-hover transition-all duration-300 group"
        >
          Book a Session
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </Section>
    </>
  )
}
