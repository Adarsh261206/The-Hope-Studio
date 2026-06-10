"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/cn"
import { ArrowUpRight, Heart, Sparkles, Star, Sun, Activity } from "lucide-react"
import Link from "next/link"

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We connect to understand your health history, lifestyle, goals, and what brings you to this journey.",
  },
  {
    step: "02",
    title: "In-Depth Assessment",
    description:
      "Comprehensive evaluation including wellness questionnaires, body analysis, and consultations with our expert therapists.",
  },
  {
    step: "03",
    title: "Custom Program Design",
    description:
      "Your dedicated wellness architect creates a tailored program blending treatments, practices, and daily recommendations.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "Regular check-ins, adjustments, and guidance to ensure your program evolves with you.",
  },
]

const focusAreas = [
  {
    title: "Stress Management",
    description:
      "Comprehensive programs combining therapeutic massage, Shirodhara, and sound therapy to calm the nervous system and restore balance.",
    icon: Sun,
  },
  {
    title: "Detox Therapy",
    description:
      "Cleansing programs using hydrotherapy, mud therapy, Neti, and Garshana to support the body's natural detoxification pathways.",
    icon: Sparkles,
  },
  {
    title: "Therapeutic Bodywork",
    description:
      "Personalized sessions combining deep tissue massage, cupping therapy, acupressure, and reflexology for targeted relief.",
    icon: Star,
  },
  {
    title: "Holistic Rejuvenation",
    description:
      "Integrative wellness plans blending aromatherapy massage, magnet therapy, and Ayurvedic treatments for complete renewal.",
    icon: Activity,
  },
]

export default function PersonalizedProgramsPage() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-deep overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2070&auto=format&fit=crop')",
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
              Personalized Programs
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 max-w-xl">
              Custom-designed wellness journeys crafted by our experts to address
              your unique needs and guide you toward optimal well-being.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="A Program Built for You"
          subtitle="Your Unique Journey"
          description="No two wellness journeys are alike. Our personalized programs honor your individuality, goals, and lifestyle."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {focusAreas.map((area, i) => {
            const Icon = area.icon
            return (
              <motion.div key={area.title} variants={fadeUp} custom={i * 0.1}>
                <div className="bg-white rounded-xl p-8 md:p-10 h-full border border-stroke/50 transition-all duration-400 hover:shadow-elevated">
                  <div className="w-14 h-14 rounded-xl bg-cream flex items-center justify-center mb-6">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="heading-5 text-deep mb-3">
                    {area.title}
                  </h3>
                  <p className="body-regular text-text-body leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <div ref={stepsRef}>
          <SectionHeader
            title="How to Get Started"
            subtitle="Simple Steps"
            description="Your path to a personalized wellness program begins here."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={stepsVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={scaleIn}
                custom={i * 0.1}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mx-auto mb-5">
                  <span className="font-serif text-xl font-medium text-primary">
                    {step.step}
                  </span>
                </div>
                <h4 className="heading-5 text-deep mb-2">{step.title}</h4>
                <p className="body-regular text-text-body leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="text-center">
          <h2 className="heading-2 text-deep mb-4">Start Your Custom Program</h2>
          <p className="body-regular text-text-body max-w-md mx-auto mb-8">
            Reach out today and let us design a wellness journey that is as
            unique as you are.
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
