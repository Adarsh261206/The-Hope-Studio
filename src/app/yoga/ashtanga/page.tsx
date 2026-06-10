"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Wind, Layers, BookOpen, CircleDot } from "lucide-react"

const focus = [
  {
    name: "Asanas",
    sanskrit: "Postures",
    meaning: "Physical Practice",
    description: "Steady, comfortable postures held with awareness to build strength, flexibility, and body-mind connection.",
  },
  {
    name: "Pranayama",
    sanskrit: "Breath Control",
    meaning: "Life Force Regulation",
    description: "Breathing techniques that calm the nervous system, increase vitality, and prepare the mind for meditation.",
  },
  {
    name: "Dhyana",
    sanskrit: "Meditation",
    meaning: "Focused Awareness",
    description: "Cultivating inner stillness through seated meditation, guiding the mind toward peace and clarity.",
  },
]

export default function HathaYogaPage() {
  const heroRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const seriesRef = useScrollReveal()

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
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop')",
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
            Balance of Body & Mind
          </motion.span>
            <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Hatha Yoga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            A gentle yet profound practice that unites body, breath, and mind through steady
            postures, conscious breathing, and meditative awareness.
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
          <span className="subtitle-text inline-block mb-4">The Foundational Path</span>
          <h2 className="heading-2 text-deep">What Is Hatha Yoga?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Hatha Yoga is the classical foundation of all yoga traditions. The word &ldquo;Hatha&rdquo;
            translates to &ldquo;force&rdquo; — representing the deliberate practice of holding postures,
            controlling the breath, and focusing the mind to create balance between opposing
            energies.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Our Hatha classes offer a slower-paced, accessible experience with an emphasis on
            proper alignment, conscious breathing, and introspection. Each session is designed
            to meet you wherever you are on your journey.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Core Elements"
          title="The Three Pillars of Hatha"
          description="Hatha Yoga rests on three foundational pillars that support a complete practice."
        />
        <motion.div
          ref={seriesRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={seriesRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {focus.map((s, i) => {
            const icons = [BookOpen, Wind, CircleDot]
            const Icon = icons[i]
            return (
              <motion.div
                key={s.name}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-white rounded-xl p-6 shadow-soft"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={22} />
                </span>
                <h5 className="heading-5 text-deep">{s.name}</h5>
                <p className="text-xs font-sans font-medium uppercase tracking-[0.15em] text-primary mt-1">
                  {s.sanskrit} — {s.meaning}
                </p>
                <p className="mt-3 body-regular text-text-body">{s.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white text-center">
        <span className="subtitle-text inline-block mb-4">Begin Your Practice</span>
        <h2 className="heading-2 text-deep max-w-2xl mx-auto">
          Experience the Foundation of Yoga
        </h2>
        <p className="mt-4 body-large text-text-body max-w-[25rem] mx-auto">
          Join our Hatha Yoga classes to experience the timeless practice of body, breath, and
          mind integration.
        </p>
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
