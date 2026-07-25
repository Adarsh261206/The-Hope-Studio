"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Zap, Flame, Target, Heart, Brain, Wind, Shield, Trophy } from "lucide-react"

const benefits = [
  { label: "Burns calories and supports healthy weight loss", icon: Flame },
  { label: "Builds lean muscle strength and endurance", icon: Zap },
  { label: "Improves flexibility and body balance", icon: Target },
  { label: "Enhances cardiovascular fitness", icon: Heart },
  { label: "Increases energy levels throughout the day", icon: Zap },
  { label: "Improves posture and core strength", icon: Target },
  { label: "Boosts metabolism and fat burning", icon: Flame },
  { label: "Reduces stress while improving mental focus", icon: Brain },
  { label: "Enhances body coordination and athletic performance", icon: Trophy },
  { label: "Increases confidence and overall physical fitness", icon: Shield },
  { label: "Promotes better circulation and detoxification", icon: Wind },
  { label: "Helps develop discipline and mental resilience", icon: Brain },
]

export default function PowerYogaPage() {
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
              "url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1974&auto=format&fit=crop')",
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
            Dynamic & Energizing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Power Yoga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            A modern, dynamic style combining flowing sequences with strength training, flexibility, and cardiovascular exercise.
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
          <span className="subtitle-text inline-block mb-4">Strength Meets Flow</span>
          <h2 className="heading-2 text-deep">What Is Power Yoga?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Power Yoga is a modern, dynamic style of yoga inspired by traditional Ashtanga Yoga. It combines flowing sequences of yoga postures with strength training, flexibility, balance, and cardiovascular exercise. Power Yoga is energetic, challenging, and designed to build endurance while improving overall fitness.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            This style of yoga is ideal for individuals who want to lose weight, tone their bodies, increase stamina, and enjoy a more active yoga practice.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Benefits"
          title="Why Practice Power Yoga?"
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
          Fitness enthusiasts, athletes, busy professionals, and anyone looking for an intense, full-body workout with the benefits of yoga.
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
