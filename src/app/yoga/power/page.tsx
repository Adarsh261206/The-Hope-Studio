"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Zap, Flame, Target, TrendingUp } from "lucide-react"

const approaches = [
  {
    label: "Gentle Movement",
    description: "Slow, therapeutic stretches and postures to release physical tension held in the body from chronic stress.",
    icon: Target,
  },
  {
    label: "Breathwork Techniques",
    description: "Specific pranayama practices that activate the parasympathetic nervous system and promote deep relaxation.",
    icon: TrendingUp,
  },
  {
    label: "Guided Relaxation",
    description: "Progressive muscle relaxation and Yoga Nidra to calm the mind and restore mental clarity.",
    icon: Flame,
  },
]

export default function StressManagementYogaPage() {
  const heroRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const levelsRef = useScrollReveal()

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
            Release & Restore
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Stress Management Yoga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            A therapeutic approach to yoga that combines gentle movement, conscious breathing,
            and relaxation techniques to release stress and restore inner calm.
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
          <span className="subtitle-text inline-block mb-4">Healing Through Stillness</span>
          <h2 className="heading-2 text-deep">What Is Stress Management Yoga?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Stress Management Yoga is a therapeutic practice designed to counteract the effects of
            chronic stress on the body and mind. Through gentle postures, conscious breathing, and
            guided relaxation, this practice activates the parasympathetic nervous system —
            your body&apos;s natural rest-and-digest response.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Classes move at a calming pace, emphasizing restorative poses and breath awareness.
            You&apos;ll learn practical tools to manage stress both on and off the mat, leaving
            each session feeling lighter, clearer, and more centered.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Our Approach"
          title="How We Help You De-Stress"
          description="We combine three core approaches to help you manage stress and restore balance."
        />
        <motion.div
          ref={levelsRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={levelsRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {approaches.map((l, i) => {
            const Icon = l.icon
            return (
              <motion.div
                key={l.label}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-white rounded-xl p-6 shadow-soft"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={22} />
                </span>
                <h5 className="heading-5 text-deep">{l.label}</h5>
                <p className="mt-3 body-regular text-text-body">{l.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white text-center">
        <span className="subtitle-text inline-block mb-4">Find Your Calm</span>
        <h2 className="heading-2 text-deep max-w-2xl mx-auto">
          Ready to Let Go of Stress?
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
