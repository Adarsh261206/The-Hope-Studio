"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Heart, Music, Feather, Sparkles } from "lucide-react"

const highlights = [
  {
    label: "Desk-Friendly Poses",
    description: "Simple stretches and postures that can be performed at your desk, relieving tension in the neck, shoulders, and lower back.",
    icon: Feather,
  },
  {
    label: "Breath & Focus",
    description: "Quick breathing exercises to reset the nervous system, improve concentration, and reduce workplace stress in minutes.",
    icon: Sparkles,
  },
  {
    label: "Team Well-Being",
    description: "Group sessions that foster team bonding, boost morale, and create a culture of health and mindfulness at work.",
    icon: Music,
  },
  {
    label: "Flexible Scheduling",
    description: "Sessions designed to fit into busy workdays — from 15-minute desk breaks to full lunch-hour classes.",
    icon: Heart,
  },
]

export default function CorporateYogaPage() {
  const heroRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const highlightsRef = useScrollReveal()

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
            Wellness at Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Corporate Yoga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            Bring yoga to the workplace. Our corporate programs offer accessible, chair-friendly
            practices that reduce stress, improve focus, and enhance team well-being.
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
          <span className="subtitle-text inline-block mb-4">Yoga at Work</span>
          <h2 className="heading-2 text-deep">What Is Corporate Yoga?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Corporate Yoga brings the benefits of yoga directly into the workplace. Our programs
            are designed with office professionals in mind — focusing on desk-friendly stretches,
            breath techniques to manage stress, and mindfulness practices that can be integrated
            into a busy workday.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            From seated poses that relieve desk tension to group breathing exercises that reset
            team energy, each session is tailored to your organization's needs. No special
            equipment or prior experience required — just a willingness to pause and reconnect.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="What We Offer"
          title="Program Highlights"
          description="Our corporate yoga programs are thoughtfully designed to fit your workplace culture."
        />
        <motion.div
          ref={highlightsRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={highlightsRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {highlights.map((h, i) => {
            const Icon = h.icon
            return (
              <motion.div
                key={h.label}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-white rounded-xl p-6 shadow-soft flex items-start gap-4"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary flex-shrink-0 mt-1">
                  <Icon size={20} />
                </span>
                <div>
                  <h5 className="heading-5 text-deep">{h.label}</h5>
                  <p className="mt-2 body-regular text-text-body">{h.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white text-center">
        <span className="subtitle-text inline-block mb-4">Bring Yoga to Your Workplace</span>
        <h2 className="heading-2 text-deep max-w-2xl mx-auto">
          Invest in Your Team's Well-Being
        </h2>
        <Link
          href="/booking"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full text-sm font-sans font-semibold hover:bg-primary-hover transition-all duration-300 group"
        >
          Book Consultation
          <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </Section>
    </>
  )
}
