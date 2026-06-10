"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Heart, Sun, Wind, Leaf } from "lucide-react"

const benefits = [
  { label: "Reduced Stress & Anxiety", icon: Wind },
  { label: "Improved Lung Capacity", icon: Sun },
  { label: "Emotional Balance", icon: Heart },
  { label: "Enhanced Focus & Clarity", icon: Leaf },
]

const practices = [
  { name: "Diaphragmatic Breathing", time: "Foundation", benefit: "Activates relaxation response" },
  { name: "Nadi Shodhana (Alternate Nostril)", time: "Balancing", benefit: "Harmonizes left & right brain" },
  { name: "Kapalabhati (Skull Shining)", time: "Energizing", benefit: "Cleanses & invigorates" },
  { name: "Ujjayi (Ocean Breath)", time: "Calming", benefit: "Slows heart rate & soothes nerves" },
]

export default function BreathingPracticesPage() {
  const heroRef = useScrollReveal()
  const contentRef = useScrollReveal()
  const benefitsRef = useScrollReveal()
  const practicesRef = useScrollReveal()

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
            Breath as Foundation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Breathing Practices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            Discover the transformative power of the breath. Pranayama — the practice of breath
            control — calms the mind, energizes the body, and opens the door to deeper awareness.
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
          <span className="subtitle-text inline-block mb-4">The Power of Breath</span>
          <h2 className="heading-2 text-deep">What Are Breathing Practices?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Pranayama — the yogic science of breath control — is one of the most powerful tools
            for regulating the nervous system and calming the mind. By consciously changing the
            rhythm, depth, and pattern of your breath, you can shift from stress to relaxation,
            from distraction to focus.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Our breathing practice sessions teach foundational and advanced pranayama techniques
            in a supportive, guided environment. Whether you are new to breathwork or deepening
            an existing practice, you will leave feeling centered, clear, and refreshed.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Key Benefits"
          title="Why Practice Breathwork?"
        />
        <motion.div
          ref={benefitsRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={benefitsRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.label}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-white rounded-xl p-6 text-center shadow-soft"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={22} />
                </span>
                <h5 className="heading-5 text-deep">{b.label}</h5>
                <p className="mt-2 body-regular text-text-body">
                  Cultivated through consistent, mindful practice that honors the body&apos;s
                  natural rhythms.
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          subtitle="Techniques"
          title="Breathing Practices We Teach"
          description="Learn a range of pranayama techniques guided by experienced instructors in a calm, supportive setting."
        />
        <motion.div
          ref={practicesRef.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={practicesRef.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {practices.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={i * 0.1}
              className="bg-cream rounded-xl p-6"
            >
              <h5 className="heading-5 text-deep">{p.name}</h5>
              <span className="text-xs font-sans font-semibold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full inline-block mt-2">
                {p.time}
              </span>
              <p className="mt-3 body-regular text-text-body">{p.benefit}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white rounded-full text-sm font-sans font-semibold hover:bg-primary-hover transition-all duration-300"
          >
            Book Consultation
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </Section>
    </>
  )
}
