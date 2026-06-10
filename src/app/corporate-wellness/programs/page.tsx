"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import Link from "next/link"
import { ArrowUpRight, Building2, Users, TrendingUp, Activity, Briefcase, Heart } from "lucide-react"

const offerings = [
  {
    title: "On-Site Yoga Sessions",
    description: "Regular yoga classes conducted at your workplace, led by certified instructors. Sessions are designed for all fitness levels and focus on reducing physical tension, improving posture, and boosting energy.",
    icon: Activity,
  },
  {
    title: "Stress Management Workshops",
    description: "Interactive workshops that teach practical stress reduction techniques including breathing exercises, meditation, and mindfulness practices employees can use daily.",
    icon: Heart,
  },
  {
    title: "Team Building Through Wellness",
    description: "Unique team-building experiences centered around group yoga, partner exercises, and wellness challenges that foster collaboration and camaraderie.",
    icon: Users,
  },
  {
    title: "Productivity & Focus Programs",
    description: "Targeted programs combining movement, breathwork, and mental clarity techniques to enhance focus, creativity, and overall workplace productivity.",
    icon: TrendingUp,
  },
  {
    title: "Ergonomic & Postural Health",
    description: "Workshops addressing desk-related issues including back pain, neck tension, and eye strain through simple stretches and ergonomic best practices.",
    icon: Briefcase,
  },
  {
    title: "Leadership Wellness Coaching",
    description: "Executive wellness coaching for leadership teams, focusing on stress resilience, energy management, and sustainable high performance.",
    icon: Building2,
  },
]

export default function CorporateProgramsPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <span className="subtitle-text text-white/80 inline-block mb-4">Corporate Wellness</span>
          <h1 className="heading-1 text-white">Corporate Programs</h1>
          <p className="mt-4 body-large text-white/80 max-w-xl mx-auto">
            Tailored wellness solutions for modern workplaces
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Wellness Programs for Your Organization"
          subtitle="Our Offerings"
          description="From on-site yoga to leadership coaching, our corporate programs are designed to improve employee well-being, reduce stress, and boost organizational performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {offerings.map((offering, i) => {
            const Icon = offering.icon
            return (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-stroke hover:border-primary/20 hover:shadow-soft-lg transition-all duration-400"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h5 className="heading-5 text-deep">{offering.title}</h5>
                <p className="mt-2 body-regular text-text-body">{offering.description}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact/book-consultation"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
          >
            Book a Consultation
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-all duration-300">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </Section>
    </>
  )
}
