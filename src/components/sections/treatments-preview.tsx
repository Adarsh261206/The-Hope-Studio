"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Sparkles, Sun, Wind, Heart, Droplets, Brain, MessageCircle } from "lucide-react"
import Link from "next/link"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

const featured = [
  { name: "Therapeutic Massage", duration: "60 mins", tag: "Popular", icon: Sparkles },
  { name: "Deep Tissue Massage", duration: "60 mins", tag: "Therapeutic", icon: Sun },
  { name: "Sound Therapy", duration: "45 mins", tag: "Holistic", icon: Wind },
  { name: "Shirodhara", duration: "45 mins", tag: "Signature", icon: Droplets },
  { name: "Cupping Therapy", duration: "45 mins", tag: "Therapeutic", icon: Heart },
  { name: "Stress Management", duration: "Flexible", tag: "Program", icon: Brain },
]

export function TreatmentsPreviewSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Section className="bg-cream" id="treatments">
      <div ref={ref} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
        <div>
          <span className="subtitle-text inline-block mb-4">Holistic Therapies</span>
          <h2 className="heading-2 text-deep max-w-[30rem]">
            Featured Treatments
          </h2>
          <p className="mt-3 body-regular text-text-body max-w-md">
            A curated selection of our most transformative therapies.
          </p>
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
      >
        {featured.map((therapy, i) => {
          const Icon = therapy.icon
          return (
            <motion.div
              key={therapy.name}
              variants={fadeUp}
              custom={i * 0.1}
              className="group relative bg-white rounded-xl p-6 border border-stroke hover:border-primary/20 hover:shadow-soft-lg transition-all duration-400"
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
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.treatment(therapy.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-sans font-medium text-primary hover:text-primary-hover transition-colors duration-300"
              >
                <MessageCircle size={13} />
                Enquire on WhatsApp
              </a>
            </motion.div>
          )
        })}
      </motion.div>

      <div className="mt-12 text-center">
        <Link
          href="/treatments"
          className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
        >
          View All Treatments
          <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-all duration-300">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </Link>
      </div>
    </Section>
  )
}
