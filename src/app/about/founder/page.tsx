"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { Award, Users, Heart, Quote } from "lucide-react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const milestones = [
  { year: "2014", event: "Began personal yoga and wellness journey" },
  { year: "2016", event: "Started teaching yoga to small community groups" },
  { year: "2018", event: "Expanded into Naturopathy and Therapeutic treatments" },
  { year: "2020", event: "Launched online wellness programs reaching 1000+ individuals" },
  { year: "2023", event: "Surpassed 8,500 lives impacted through holistic wellness" },
  { year: "2025", event: "Founded The Hope Yoga Wellness Studio" },
]

export default function FounderPage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <span className="subtitle-text text-white/80 inline-block mb-4">About Us</span>
          <h1 className="heading-1 text-white">Our Founder</h1>
          <p className="mt-4 body-large text-white/80 max-w-xl mx-auto">
            Meet Aakash Bora — the visionary behind The Hope Yoga Wellness Studio
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-xl p-6 shadow-soft-lg max-w-[12rem]">
              <span className="text-3xl font-serif font-medium">11+</span>
              <p className="text-xs font-sans text-white/80 mt-1">Years of Experience</p>
            </div>
          </div>

          <div>
            <span className="subtitle-text inline-block mb-4">Founder & Lead Practitioner</span>
            <h2 className="heading-2 text-deep">Aakash Bora</h2>
            <p className="mt-4 body-large text-text-body leading-relaxed">
              Aakash Bora is the founder of The Hope Yoga Wellness Studio, bringing over 11 years of dedicated experience in Yoga, Naturopathy, and Holistic Wellness. With a deep passion for transforming lives, Aakash has personally impacted over 8,500 individuals through his unique approach that integrates ancient yogic wisdom with modern therapeutic practices.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              His journey began with a personal quest for health and inner peace, which evolved into a lifelong mission to help others achieve the same. Certified across multiple wellness disciplines — including Hatha Yoga, Meditation, Naturopathy, Therapeutic Massage, Sound Therapy, and Ayurvedic practices — Aakash brings comprehensive expertise to every consultation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/book-consultation"
                className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
              >
                Book a Consultation
                <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-all duration-300">
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Award,
              title: "Certified Expertise",
              desc: "Multiple certifications in Yoga, Naturopathy, Sound Therapy, Ayurveda, and Corporate Wellness.",
            },
            {
              icon: Users,
              title: "8500+ Lives Impacted",
              desc: "Proven track record of transforming lives through personalized holistic wellness programs.",
            },
            {
              icon: Heart,
              title: "Holistic Approach",
              desc: "Integrating mind, body, and soul for complete and lasting wellness transformation.",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-white rounded-xl p-6 border border-stroke"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h5 className="heading-5 text-deep">{item.title}</h5>
                <p className="mt-2 body-regular text-text-body">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-20 border-t border-stroke pt-12" ref={ref}>
          <SectionHeader
            title="Journey Milestones"
            subtitle="Timeline"
            align="left"
          />
          <div className="mt-8 space-y-4">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex items-start gap-4">
                <span className="text-sm font-sans font-bold text-primary w-16 flex-shrink-0 pt-0.5">
                  {m.year}
                </span>
                <div className="flex-1 pb-4 border-b border-stroke">
                  <p className="body-regular text-text-body">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
