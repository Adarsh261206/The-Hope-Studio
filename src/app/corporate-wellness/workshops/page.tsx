"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import Link from "next/link"
import { ArrowUpRight, Users, Sun, Leaf, Clock, Sparkles, Heart, Coffee } from "lucide-react"

const workshops = [
  {
    title: "Mindful Mornings",
    duration: "Half-Day (3 hrs)",
    description: "Start your team's day with a revitalizing blend of gentle yoga, breathwork, and guided meditation. Perfect for boosting morale and setting a positive tone.",
    icon: Sun,
    bestFor: "Corporate teams, departments",
  },
  {
    title: "Stress Reset Workshop",
    duration: "Half-Day (3 hrs)",
    description: "Practical stress management techniques that participants can immediately apply. Covers breathing exercises, quick desk stretches, and mindfulness practices.",
    icon: Heart,
    bestFor: "High-stress teams, healthcare workers",
  },
  {
    title: "Full-Day Wellness Retreat",
    duration: "Full Day (6 hrs)",
    description: "An immersive wellness experience combining yoga sessions, therapeutic workshops, healthy meals, and guided relaxation. Held at our studio or your chosen venue.",
    icon: Sparkles,
    bestFor: "Company offsites, team building",
  },
  {
    title: "Leadership & Resilience",
    duration: "Half-Day (4 hrs)",
    description: "Executive-level program focusing on stress resilience, emotional intelligence, and sustainable leadership through holistic wellness practices.",
    icon: Leaf,
    bestFor: "Leadership teams, managers",
  },
  {
    title: "Creative Flow Workshop",
    duration: "Half-Day (3 hrs)",
    description: "Combine yoga and creative visualization exercises to unlock creativity, overcome mental blocks, and inspire innovative thinking in your team.",
    icon: Coffee,
    bestFor: "Creative teams, design & marketing",
  },
  {
    title: "Weekend Wellness Intensive",
    duration: "2 Days",
    description: "A comprehensive weekend program covering yoga, meditation, nutrition guidance, and therapeutic treatments. The ultimate team wellness experience.",
    icon: Users,
    bestFor: "Full-team retreats, departments",
  },
]

export default function WorkshopsPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1974&auto=format&fit=crop')",
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
          <h1 className="heading-1 text-white">Workshops & Retreats</h1>
          <p className="mt-4 body-large text-white/80 max-w-xl mx-auto">
            Custom-designed wellness experiences for your team
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Choose Your Experience"
          subtitle="Workshops & Retreats"
          description="From half-day workshops to multi-day retreats, we customize every experience to your organization's culture, goals, and schedule."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {workshops.map((w, i) => {
            const Icon = w.icon
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-white rounded-xl p-6 border border-stroke hover:border-primary/20 hover:shadow-soft-lg transition-all duration-400"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <span className="text-[0.55rem] font-sans font-semibold uppercase text-text-body bg-cream px-3 py-1 rounded-full">
                    {w.duration}
                  </span>
                </div>
                <h5 className="heading-5 text-deep">{w.title}</h5>
                <p className="mt-2 body-regular text-text-body">{w.description}</p>
                <div className="mt-4 pt-4 border-t border-stroke">
                  <span className="text-[0.6rem] font-sans font-medium uppercase tracking-wider text-text-body">
                    Best for: {w.bestFor}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-10 border border-stroke text-center">
          <h3 className="heading-3 text-deep">Custom Workshop Inquiry</h3>
          <p className="mt-4 body-large text-text-body max-w-xl mx-auto">
            Have something specific in mind? We design bespoke workshops and retreats tailored to your organization&apos;s unique needs.
          </p>
          <Link
            href="/contact/book-consultation"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300 mt-8"
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
