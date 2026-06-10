"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { ArrowUpRight, Sparkles, Sun, Wind, Heart, Droplets, Brain, Ear, Footprints, Flame, TreePine, Moon, Scissors, FlameKindling, Fingerprint, Waves, Ribbon, Star } from "lucide-react"

const therapyIcons = [
  Sparkles, Sun, Wind, Heart, Droplets, Brain,
  Ear, Footprints, Flame, TreePine, Moon, Scissors,
  FlameKindling, Fingerprint, Waves, Ribbon, Star,
] as const

const therapies = [
  { name: "Therapeutic Massage", duration: "60 mins", tag: "Popular" },
  { name: "Deep Tissue Massage", duration: "60 mins", tag: "Therapeutic" },
  { name: "Aromatherapy Massage", duration: "60 mins", tag: "Relaxing" },
  { name: "Hot Stone Massage", duration: "75 mins", tag: "Therapeutic" },
  { name: "Swedish Massage", duration: "60 mins", tag: "Relaxing" },
  { name: "Cupping Therapy", duration: "45 mins", tag: "Therapeutic" },
  { name: "Garshana (Silk Glove)", duration: "45 mins", tag: "Unique" },
  { name: "Sound Therapy", duration: "45 mins", tag: "Holistic" },
  { name: "Shirodhara", duration: "45 mins", tag: "Signature" },
  { name: "Nasya", duration: "30 mins", tag: "Ayurveda" },
  { name: "Neti", duration: "30 mins", tag: "Ayurveda" },
  { name: "Mud Therapy", duration: "45 mins", tag: "Naturopathy" },
  { name: "Hydrotherapy", duration: "45 mins", tag: "Naturopathy" },
  { name: "Magnet Therapy", duration: "30 mins", tag: "Alternative" },
  { name: "Acupressure", duration: "45 mins", tag: "Alternative" },
  { name: "Reflexology", duration: "45 mins", tag: "Therapeutic" },
  { name: "Detox Therapy", duration: "60 mins", tag: "Wellness" },
  { name: "Stress Management", duration: "Flexible", tag: "Program" },
]

const allTags = Array.from(new Set(therapies.map((t) => t.tag)))

export default function TreatmentsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? therapies.filter((t) => t.tag === activeTag)
    : therapies

  return (
    <>
      <section className="relative min-h-[60vh] flex items-center bg-deep overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
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
              Complete Treatments Catalog
            </h1>
            <p className="mt-6 text-base leading-relaxed text-white/70 max-w-xl">
              Discover our full range of therapeutic treatments — from massage and sound healing to Ayurveda and naturopathy.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-cream">
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
              activeTag === null
                ? "bg-primary text-white"
                : "bg-white text-text-body hover:bg-primary/10 hover:text-primary"
            }`}
          >
            All Treatments
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                activeTag === tag
                  ? "bg-primary text-white"
                  : "bg-white text-text-body hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          key={activeTag ?? "all"}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((therapy, i) => {
              const Icon = therapyIcons[i % therapyIcons.length]
              return (
                <motion.div
                  key={therapy.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="group relative bg-white rounded-xl p-6 border border-stroke hover:border-primary/20 hover:shadow-soft-lg transition-all duration-400 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-400">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <span className="text-[0.55rem] font-sans font-semibold uppercase text-text-body bg-cream px-3 py-1 rounded-full">
                      {therapy.duration}
                    </span>
                  </div>
                  <h5 className="heading-5 text-deep">{therapy.name}</h5>
                  <div className="mt-3 flex items-center gap-2 text-text-body">
                    <span className="text-xs font-sans">{therapy.tag}</span>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </Section>

      <Section className="bg-white">
        <div className="text-center">
          <h2 className="heading-2 text-deep mb-4">Ready to Begin Your Journey?</h2>
          <p className="body-regular text-text-body max-w-md mx-auto mb-8">
            Book a consultation with our wellness experts and discover the treatment that resonates with you.
          </p>
          <Link
            href="/contact/book-consultation"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full text-sm font-sans font-medium hover:bg-primary-hover transition-all duration-300"
          >
            Book a Consultation
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white/20 text-white flex items-center justify-center transition-colors duration-300 group-hover:bg-white/30">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </Section>
    </>
  )
}
