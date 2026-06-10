"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/hooks/use-scroll-reveal"
import { Heart, Star, Leaf } from "lucide-react"

const pillars = [
  {
    title: "Mind",
    subtitle: "Clarity & Awareness",
    icon: Star,
    description:
      "We cultivate mental clarity through meditation, mindfulness practices, and conscious breathing. Our programs help quiet the mental chatter, allowing you to experience the peace that already exists within. Through guided meditations, mindful movement, and reflective practices, we support you in developing a calm, focused, and resilient mind.",
    practices: [
      "Guided meditation sessions",
      "Mindfulness-based stress reduction",
      "Breathwork & pranayama",
      "Journaling & self-reflection",
    ],
  },
  {
    title: "Body",
    subtitle: "Strength & Vitality",
    icon: Leaf,
    description:
      "Honoring the body as a temple, our physical practices range from gentle restorative yoga to dynamic vinyasa flows. We pair movement with Ayurvedic nutrition, therapeutic massage, and detoxifying treatments to rejuvenate the body at every level. Our approach is compassionate, adaptive, and designed to meet you exactly where you are.",
    practices: [
      "Hatha & Vinyasa yoga",
      "Ayurvedic treatments",
      "Therapeutic massage",
      "Nutritional guidance",
    ],
  },
  {
    title: "Spirit",
    subtitle: "Connection & Purpose",
    icon: Heart,
    description:
      "Beyond technique lies the essence of wellness — a deep connection to self, others, and the natural world. We create space for spiritual exploration through nature immersions, sound healing, ceremony, and community gatherings. Here, you can explore the questions that matter most and reconnect with your sense of purpose.",
    practices: [
      "Nature immersion walks",
      "Sound healing sessions",
      "Community ceremonies",
      "Silent retreats",
    ],
  },
]

export default function PhilosophyPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: pillarsRef, isVisible: pillarsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 text-center px-6"
        >
          <motion.span
            variants={fadeUp}
            className="subtitle-text text-white/80 inline-block mb-4"
          >
            About Us
          </motion.span>
          <motion.h1 variants={fadeUp} className="heading-1 text-white">
            Our Philosophy
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            A holistic approach that nurtures the whole being — mind, body, and
            spirit in harmony.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={pillarsRef}>
          <SectionHeader
            title="The Three Pillars"
            subtitle="Mind · Body · Spirit"
            description="Our philosophy rests on three interconnected pillars, each essential to true and lasting wellness."
            align="left"
          />
        </div>
        <motion.div
          ref={pillarsRef}
          initial="hidden"
          animate={pillarsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-16 mt-8"
        >
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                variants={scaleIn}
                custom={i * 0.15}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <span className="subtitle-text text-primary inline-block mb-2">
                    {pillar.subtitle}
                  </span>
                  <h3 className="heading-3 text-deep mb-4">{pillar.title}</h3>
                  <p className="body-regular text-text-body leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-white rounded-xl p-8 border border-stroke/50">
                    <h5 className="heading-5 text-deep mb-4">Practices</h5>
                    <ul className="space-y-3">
                      {pillar.practices.map((practice) => (
                        <li
                          key={practice}
                          className="flex items-center gap-3 body-regular text-text-body"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          {practice}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>
    </>
  )
}
