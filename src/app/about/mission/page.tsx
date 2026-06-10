"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/hooks/use-scroll-reveal"
import { Card } from "@/components/ui/card"
import { Heart, Star, Leaf, Sun, Moon } from "lucide-react"

const coreValues = [
  {
    title: "Compassion",
    description:
      "We lead with kindness in every interaction, creating a space where all feel safe to explore, heal, and grow at their own pace.",
    icon: Heart,
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in teaching, treatments, and guest experience, continuously learning and refining our craft.",
    icon: Star,
  },
  {
    title: "Sustainability",
    description:
      "Our commitment to the earth is woven into every decision — from locally sourced materials to zero-waste practices in our daily operations.",
    icon: Leaf,
  },
  {
    title: "Authenticity",
    description:
      "We honor the ancient traditions that inspire our work, sharing practices with integrity and respect for their cultural roots.",
    icon: Sun,
  },
  {
    title: "Inclusivity",
    description:
      "Wellness is for every body. We welcome people of all ages, abilities, backgrounds, and experience levels with open arms.",
    icon: Moon,
  },
]

export default function MissionPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: statementRef, isVisible: statementVisible } = useScrollReveal()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop')",
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
            Our Mission
          </motion.h1>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={statementRef}>
          <motion.div
            initial="hidden"
            animate={statementVisible ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center py-12"
          >
            <motion.span
              variants={fadeUp}
              className="subtitle-text text-primary inline-block mb-6"
            >
              Our Purpose
            </motion.span>
            <motion.blockquote
              variants={fadeUp}
              className="heading-3 text-deep font-serif italic leading-[1.4]"
            >
              &ldquo;To create a sanctuary where every person can rediscover
              their innate wholeness — nurturing mind, body, and spirit through
              practices rooted in ancient wisdom and supported by modern
              science.&rdquo;
            </motion.blockquote>
            <motion.p
              variants={fadeUp}
              className="body-regular text-text-body mt-6 max-w-lg mx-auto"
            >
              We believe that wellness is not a destination but a way of being
              — a gentle, ongoing return to balance.
            </motion.p>
          </motion.div>
        </div>
      </Section>

      <Section>
        <div ref={valuesRef}>
          <SectionHeader
            title="Core Values"
            subtitle="What Guides Us"
            description="These five values form the foundation of everything we do at The Hope Yoga Wellness Studio."
            align="left"
          />
        </div>
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {coreValues.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} variants={scaleIn} custom={i * 0.1}>
                <Card className="p-8 bg-cream rounded-xl h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h5 className="heading-5 text-deep mb-2">{value.title}</h5>
                  <p className="body-regular text-text-body">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>
    </>
  )
}
