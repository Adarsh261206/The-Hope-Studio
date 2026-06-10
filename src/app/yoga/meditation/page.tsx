"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Moon, Heart, Brain, Wind, Eye, Sun } from "lucide-react"

const meditationTypes = [
  {
    name: "Mindfulness Meditation",
    description: "Cultivate present-moment awareness by observing thoughts and sensations without judgment. Builds focus and emotional resilience.",
    icon: Eye,
  },
  {
    name: "Loving-Kindness (Metta)",
    description: "A heart-centered practice that extends unconditional love and compassion to yourself and others, dissolving barriers of separation.",
    icon: Heart,
  },
  {
    name: "Breath Awareness",
    description: "Anchor your attention on the natural rhythm of the breath. Simple yet profound, this technique calms the nervous system instantly.",
    icon: Wind,
  },
  {
    name: "Body Scan",
    description: "A guided journey through the body, releasing held tension and deepening the mind-body connection for deep relaxation.",
    icon: Moon,
  },
  {
    name: "Mantra Meditation",
    description: "Repeat a sacred sound or phrase to quiet mental chatter and access deeper states of consciousness and inner peace.",
    icon: Sun,
  },
  {
    name: "Visualization",
    description: "Use guided imagery to evoke healing, manifest intentions, and train the mind for positive outcomes and clarity.",
    icon: Brain,
  },
]

const benefits = [
  { label: "Reduced Stress & Anxiety", icon: Heart },
  { label: "Improved Focus & Clarity", icon: Brain },
  { label: "Emotional Regulation", icon: Wind },
  { label: "Better Sleep Quality", icon: Moon },
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
            Discover the transformative power of stillness. Guided and silent meditation
            practices to calm the mind, open the heart, and awaken inner peace.
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
          <h2 className="heading-2 text-deep">Guided Meditation at The Hope Yoga Wellness Studio</h2>
          <p className="mt-6 body-large text-text-body leading-relaxed">
            Our guided meditation sessions provide a supportive entry point for both beginners
            and experienced practitioners. In a tranquil setting, our instructors lead you
            through techniques that quiet mental chatter, release physical tension, and open
            the door to deeper self-awareness.
          </p>
          <p className="mt-4 body-large text-text-body leading-relaxed">
            Each session is designed to meet you where you are — whether you seek stress relief,
            emotional balance, or a gateway to expanded consciousness. No experience is
            necessary; only a willingness to sit quietly and turn inward.
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {meditationTypes.map((m, i) => {
            const Icon = m.icon
            return (
              <motion.div
                key={m.name}
                variants={fadeUp}
                custom={i * 0.05}
                className="bg-white rounded-xl p-6 shadow-soft"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={20} />
                </span>
                <h5 className="heading-5 text-deep">{m.name}</h5>
                <p className="mt-2 body-regular text-text-body">{m.description}</p>
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {benefits.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.label}
                variants={fadeUp}
                custom={i * 0.1}
                className="text-center"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon size={24} />
                </span>
                <h5 className="heading-5 text-deep">{b.label}</h5>
                <p className="mt-2 body-regular text-text-body">
                  Supported by research and experienced firsthand by practitioners worldwide.
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-cream text-center">
        <span className="subtitle-text inline-block mb-4">Find Inner Peace</span>
        <h2 className="heading-2 text-deep max-w-2xl mx-auto">
          Take a Moment to Simply Be
        </h2>
        <p className="mt-4 body-large text-text-body max-w-[25rem] mx-auto">
          Join us for a guided meditation session and experience the profound rest that comes
          from true stillness.
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
