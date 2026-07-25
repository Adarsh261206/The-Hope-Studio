"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Heart, Wind, Brain, Flame, Target, Activity, Shield } from "lucide-react"

const benefits = [
  { label: "Improves flexibility and full-body mobility", icon: Activity },
  { label: "Builds muscle strength and endurance", icon: Flame },
  { label: "Enhances balance and coordination", icon: Target },
  { label: "Improves cardiovascular fitness", icon: Heart },
  { label: "Burns calories and supports healthy weight management", icon: Flame },
  { label: "Increases energy and stamina", icon: Wind },
  { label: "Reduces stress and anxiety", icon: Heart },
  { label: "Improves focus, concentration, and mindfulness", icon: Brain },
  { label: "Promotes better posture and core stability", icon: Target },
  { label: "Enhances breathing capacity and overall well-being", icon: Shield },
]

export default function VinyasaYogaPage() {
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
            Flow with Breath
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="heading-1 text-white"
          >
            Vinyasa Yoga
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={heroRef.isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 body-large text-white/80 max-w-[30rem] mx-auto"
          >
            A dynamic and flowing style where each movement is synchronized with the breath for a smooth, meditative practice.
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
          <span className="subtitle-text inline-block mb-4">The Art of Flow</span>
          <h2 className="heading-2 text-deep">What Is Vinyasa Yoga?</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Vinyasa Yoga is a dynamic and flowing style of yoga where each movement is synchronized with the breath. Often called Flow Yoga, Vinyasa creates a smooth transition from one posture to the next, improving strength, flexibility, balance, and mindfulness. Every class may have a different sequence, making the practice engaging and energizing.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Vinyasa Yoga helps develop a strong connection between the body and mind while providing both physical fitness and mental relaxation.
          </p>
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <SectionHeader
          subtitle="Benefits"
          title="Why Practice Vinyasa Yoga?"
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
          Beginners with basic fitness, intermediate practitioners, working professionals, athletes, and anyone who enjoys an active, flowing style of yoga.
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
