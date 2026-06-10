"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, slideRight, scaleIn } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/cn"
import { ArrowUpRight, Sparkles, Heart, Sun, Wind, Waves } from "lucide-react"
import Link from "next/link"

const therapyTypes = [
  {
    title: "Therapeutic Massage",
    description:
      "Customized massage therapy targeting specific areas of tension to promote relaxation, improve circulation, and support overall wellness.",
    icon: Sparkles,
  },
  {
    title: "Deep Tissue Massage",
    description:
      "Intensive massage technique that reaches deep muscle layers and connective tissue to release chronic tension and alleviate pain.",
    icon: Wind,
  },
  {
    title: "Aromatherapy Massage",
    description:
      "Soothing massage combined with therapeutic essential oils to enhance physical and emotional well-being through touch and scent.",
    icon: Waves,
  },
  {
    title: "Hot Stone Massage",
    description:
      "Heated basalt stones placed on key points of the body and used during massage to melt tension and promote deep relaxation.",
    icon: Sun,
  },
]

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We begin with a thorough discussion of your health history, concerns, and wellness goals.",
  },
  {
    step: "02",
    title: "Personalized Assessment",
    description:
      "Our therapists assess your physical and energetic condition to determine the ideal therapy combination.",
  },
  {
    step: "03",
    title: "Therapeutic Session",
    description:
      "Experience your tailored therapy in our serene treatment rooms with skilled practitioners.",
  },
  {
    step: "04",
    title: "Aftercare & Integration",
    description:
      "Receive guidance on post-treatment practices to extend and deepen the benefits.",
  },
]

export default function WellnessTherapyPage() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-deep overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop')",
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
              Wellness Therapy
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 max-w-xl">
              Therapeutic massage, deep tissue, aromatherapy massage, hot stone,
              and Swedish massage for complete rejuvenation of body and mind.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Massage & Body Therapies"
          subtitle="Restorative Modalities"
          description="Each therapy is designed to address specific wellness needs while nurturing your overall well-being."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {therapyTypes.map((therapy, i) => {
            const Icon = therapy.icon
            return (
              <motion.div key={therapy.title} variants={fadeUp} custom={i * 0.1}>
                <div className="bg-white rounded-xl p-8 md:p-10 h-full border border-stroke/50 transition-all duration-400 hover:shadow-elevated">
                  <div className="w-14 h-14 rounded-xl bg-cream flex items-center justify-center mb-6">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="heading-5 text-deep mb-3">
                    {therapy.title}
                  </h3>
                  <p className="body-regular text-text-body leading-relaxed">
                    {therapy.description}
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
            title="How It Works"
            subtitle="Your Wellness Journey"
            description="From your first visit to ongoing care, we guide you every step of the way."
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
          <h2 className="heading-2 text-deep mb-4">Experience Wellness Therapy</h2>
          <p className="body-regular text-text-body max-w-md mx-auto mb-8">
            Schedule a session and take the first step toward complete
            rejuvenation.
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
