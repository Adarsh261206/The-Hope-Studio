"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, slideLeft, slideRight } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/cn"
import { ArrowUpRight, Heart, Sparkles, Star, Moon, Music } from "lucide-react"
import Link from "next/link"

const sessionTypes = [
  {
    title: "Sound Therapy",
    description:
      "Healing vibrations from singing bowls, gongs, and tuning forks to restore energetic balance, calm the mind, and promote deep relaxation.",
    icon: Music,
  },
  {
    title: "Reflexology",
    description:
      "Therapeutic foot massage that applies pressure to reflex points corresponding to organs and systems throughout the body, promoting natural healing.",
    icon: Sparkles,
  },
  {
    title: "Acupressure",
    description:
      "Ancient healing technique using finger pressure on specific energy points along the body's meridians to release tension and restore energy flow.",
    icon: Star,
  },
  {
    title: "Magnet Therapy",
    description:
      "Non-invasive therapy using static magnetic fields to improve circulation, reduce pain, and support the body's natural healing processes.",
    icon: Moon,
  },
]

const practitioners = [
  {
    name: "Maya Sharma",
    title: "Sound Therapist & Reflexologist",
    description:
      "With over 15 years of experience in vibrational medicine and reflexology, Maya combines sound therapy with acupressure techniques.",
  },
  {
    name: "James Walker",
    title: "Acupressure & Magnet Therapy Specialist",
    description:
      "James brings deep knowledge of traditional Chinese medicine, acupressure, and magnet therapy to support the body's natural healing.",
  },
]

export default function HealingSessionsPage() {
  const { ref, isVisible } = useScrollReveal()
  const { ref: practitionerRef, isVisible: practitionerVisible } = useScrollReveal()

  return (
    <>
      <section className="relative min-h-[55vh] flex items-center bg-deep overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1993&auto=format&fit=crop')",
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
              Healing Sessions
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 max-w-xl">
              Sound therapy, reflexology, acupressure, and magnet therapy sessions
              that restore energetic balance and promote natural healing.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Healing Therapies"
          subtitle="Natural Healing"
          description="Each therapy is designed to restore energetic balance and support the body's innate healing abilities."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {sessionTypes.map((session, i) => {
            const Icon = session.icon
            return (
              <motion.div key={session.title} variants={fadeUp} custom={i * 0.1}>
                <div className="bg-white rounded-xl p-8 md:p-10 h-full border border-stroke/50 transition-all duration-400 hover:shadow-elevated">
                  <div className="w-14 h-14 rounded-xl bg-cream flex items-center justify-center mb-6">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="heading-5 text-deep mb-3">
                    {session.title}
                  </h3>
                  <p className="body-regular text-text-body leading-relaxed">
                    {session.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <div ref={practitionerRef}>
          <SectionHeader
            title="Meet Our Practitioners"
            subtitle="Guided by Experts"
            description="Our healing practitioners bring years of training, intuition, and compassion to every session."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={practitionerVisible ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {practitioners.map((practitioner, i) => (
              <motion.div
                key={practitioner.name}
                variants={i % 2 === 0 ? slideLeft : slideRight}
                custom={i * 0.1}
                className="bg-cream rounded-xl p-8 md:p-10"
              >
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-5">
                  <Heart size={22} className="text-primary" />
                </div>
                <h3 className="heading-5 text-deep mb-1">
                  {practitioner.name}
                </h3>
                <span className="subtitle-text inline-block mb-4">
                  {practitioner.title}
                </span>
                <p className="body-regular text-text-body leading-relaxed">
                  {practitioner.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="text-center">
          <h2 className="heading-2 text-deep mb-4">Book a Healing Session</h2>
          <p className="body-regular text-text-body max-w-md mx-auto mb-8">
            Take time for yourself and experience the transformative power of
            natural healing therapies.
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
