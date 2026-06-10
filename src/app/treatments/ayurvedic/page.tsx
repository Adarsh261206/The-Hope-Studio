"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, slideLeft, slideRight } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/cn"
import { ArrowUpRight, Sparkles, Heart, Flower2, Sun, Droplets } from "lucide-react"
import Link from "next/link"

const treatments = [
  {
    title: "Shirodhara",
    description:
      "Gentle stream of warm medicated oil poured on the forehead to calm the mind, relieve stress, and enhance mental clarity.",
    icon: Sparkles,
  },
  {
    title: "Nasya",
    description:
      "Ayurvedic nasal therapy that administers medicated oils to cleanse and nourish the nasal passages, supporting respiratory health and mental clarity.",
    icon: Droplets,
  },
  {
    title: "Neti",
    description:
      "Nasal irrigation therapy using warm saline water to cleanse the sinuses, improve breathing, and promote upper respiratory wellness.",
    icon: Sun,
  },
  {
    title: "Garshana",
    description:
      "Ayurvedic dry massage with raw silk gloves that exfoliates the skin, stimulates circulation, and energizes the body.",
    icon: Flower2,
  },
]

const benefits = [
  "Restores doshic balance and harmony",
  "Enhances mental clarity and focus",
  "Supports respiratory health",
  "Promotes deep relaxation",
  "Boosts circulation and vitality",
  "Cleanses and rejuvenates the senses",
]

export default function AyurvedicPage() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-deep overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero pointer-events-none z-[2]" />
        <div className="relative z-[4] container-main pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="subtitle-text text-white/70 inline-block mb-4">Treatments</span>
            <h1 className="heading-1 text-white max-w-3xl">
              Ayurvedic Treatments
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 max-w-xl">
              Traditional Ayurvedic therapies including Shirodhara, Nasya, Neti,
              and Garshana to restore doshic balance and promote holistic wellness.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Ayurvedic Therapies at The Hope"
          subtitle="Ancient Wisdom"
          description="Ayurveda, the science of life, views health as the perfect balance of body, mind, and consciousness. Our treatments are personalized to your dosha type."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {treatments.map((treatment, i) => {
            const Icon = treatment.icon
            return (
              <motion.div key={treatment.title} variants={fadeUp} custom={i * 0.1}>
                <div className="bg-white rounded-xl p-8 md:p-10 h-full border border-stroke/50 transition-all duration-400 hover:shadow-elevated">
                  <div className="w-14 h-14 rounded-xl bg-cream flex items-center justify-center mb-6">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="heading-5 text-deep mb-3">
                    {treatment.title}
                  </h3>
                  <p className="body-regular text-text-body leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <div ref={benefitsRef}>
          <SectionHeader
            title="Benefits of Ayurvedic Therapies"
            subtitle="Holistic Healing"
            align="left"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={benefitsVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                variants={slideLeft}
                custom={i * 0.05}
                className="flex items-center gap-3 p-4 bg-cream rounded-xl"
              >
                <Heart size={18} className="text-primary flex-shrink-0" />
                <span className="body-regular text-deep">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="text-center">
          <h2 className="heading-2 text-deep mb-4">Begin Your Ayurvedic Journey</h2>
          <p className="body-regular text-text-body max-w-md mx-auto mb-8">
            Discover your dosha and receive a personalized treatment plan from
            our expert Ayurvedic practitioners.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full text-sm font-sans font-medium hover:bg-primary-hover transition-all duration-300"
          >
            Book Consultation
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white/20 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-white/30">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </Section>
    </>
  )
}
