"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight } from "lucide-react"

const stats = [
  {
    value: "11+",
    title: "Years Experience",
    description: "Over a decade of dedicated practice in Yoga, Naturopathy, and Holistic Wellness.",
  },
  {
    value: "8500+",
    title: "Lives Impacted",
    description: "Thousands of individuals transformed through our wellness programs and therapeutic treatments.",
  },
  {
    value: "100%",
    title: "Holistic Approach",
    description: "Every program integrates mind, body, and soul for complete and lasting wellness.",
  },
]

export function AboutPreviewSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Section className="bg-cream" id="about">
      <SectionHeader
        title="About The Hope Yoga Wellness Studio"
        subtitle="About Us"
        description="Welcome to The Hope Yoga Wellness Studio, where wellness meets transformation."
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative max-w-[50rem] mx-auto mt-12 mb-20"
      >
        {[
          {
            img: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop",
            label: "Yoga",
            dotColor: "bg-primary",
            transform: "translate(2.5rem, 2rem) rotate(-12deg)",
            zIndex: 5,
          },
          {
            img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
            label: "Meditation",
            dotColor: "bg-green-600",
            transform: "none",
            zIndex: 3,
          },
          {
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
            label: "Healing",
            dotColor: "bg-primary-hover",
            transform: "translate(-2.5rem, 2rem) rotate(12deg)",
            zIndex: 1,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i * 0.15}
            className="absolute inset-0 w-full h-[28rem] md:h-[32rem]"
            style={{
              transform: item.transform,
              zIndex: item.zIndex,
            }}
          >
            <div className="w-full h-full rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
            </div>
            <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow-soft flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${item.dotColor}`} />
              <span className="text-xs font-sans font-medium text-deep">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
        <div className="h-[28rem] md:h-[32rem]" />
      </motion.div>

      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="body-large text-text-body leading-relaxed">
          Founded by <strong className="text-deep">Aakash Bora</strong>, our mission is to help individuals achieve healthier, balanced, and stress-free lives through Yoga, Naturopathy, Nutrition, and Holistic Wellness.
        </p>
        <p className="body-large text-text-body leading-relaxed mt-4">
          With over <strong className="text-deep">11 years of experience</strong> and more than <strong className="text-deep">8,500 lives</strong> positively impacted, we have successfully guided individuals toward improved physical health, emotional well-being, mental clarity, and sustainable lifestyle changes.
        </p>
      </div>

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 border-t border-stroke"
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            variants={fadeUp}
            custom={i * 0.1}
            className="py-8 md:py-10 px-6 md:px-8 border-r border-stroke last:border-r-0"
          >
            <span className="heading-2 text-deep">
              {stat.value}
            </span>
            <h5 className="heading-5 text-deep mt-3">
              {stat.title}
            </h5>
            <p className="body-regular text-text-body mt-2">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-12 text-center"
      >
        <Link
          href="/about"
          className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
        >
          Know More
          <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-white/90">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </Link>
      </motion.div>
    </Section>
  )
}
