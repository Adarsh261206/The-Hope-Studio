"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Award, GraduationCap, HeartPulse, Leaf, Brain, Apple, Sparkles } from "lucide-react"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"

const qualifications = [
  "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
  "Master of Science in Yoga (MSc Yoga)",
  "Ayurvedic Dietetics",
]

const expertise = [
  { label: "Ayurvedic Consultation", icon: Leaf },
  { label: "Yoga Therapy & Meditation", icon: Brain },
  { label: "Lifestyle Disorder Management", icon: HeartPulse },
  { label: "Infertility & Gyne + Obs Disorder", icon: Sparkles },
  { label: "Stress Management", icon: Apple },
  { label: "Wellness Counseling", icon: HeartPulse },
  { label: "Diet & Lifestyle Guidance", icon: Leaf },
  { label: "Holistic Healing Practices", icon: Brain },
]

export default function AyurvedicDoctorsPage() {
  const heroReveal = useScrollReveal()
  const contentReveal = useScrollReveal()
  const expertiseReveal = useScrollReveal()

  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden bg-deep">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          ref={heroReveal.ref}
          initial={{ opacity: 0, y: 30 }}
          animate={heroReveal.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 text-center px-6"
        >
          <span className="subtitle-text inline-block mb-4 text-white/70">
            Our Team
          </span>
          <h1 className="heading-1 text-white">Ayurvedic Doctors</h1>
          <p className="mt-4 body-large text-white/80 max-w-lg mx-auto">
            Highly qualified Ayurvedic practitioners at The Hope Yoga Wellness Studio offering personalized holistic care.
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div className="max-w-4xl mx-auto" ref={contentReveal.ref}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <span className="subtitle-text inline-block mb-4">Senior Ayurvedic Consultant</span>
              <h2 className="heading-2 text-deep">Dr. MD IMRAN WAKEEL AHMAD</h2>
              <p className="mt-2 body-regular text-primary font-medium">BAMS, MSc Yoga, Ayurvedic Dietetics</p>
              <p className="mt-6 body-large text-text-body leading-relaxed">
                Dedicated Ayurvedic Consultant and Yoga Professional with a strong background in holistic wellness, preventive healthcare, Panchakarma support, therapeutic yoga, and lifestyle management.
              </p>
              <p className="mt-4 body-regular text-text-body leading-relaxed">
                Skilled in integrating Ayurveda and Yoga principles for improving physical, mental, and emotional well-being. Passionate about natural healing, patient counseling, stress management, diet and lifestyle correction, and wellness-based therapies.
              </p>

              <div className="mt-8">
                <h4 className="heading-5 text-deep mb-4">Educational Qualifications</h4>
                <ul className="space-y-3">
                  {qualifications.map((q) => (
                    <li key={q} className="flex items-center gap-3 body-regular text-text-body">
                      <GraduationCap size={18} className="text-primary flex-shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact/book-consultation"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
                >
                  Book Consultation
                  <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-all duration-300">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-soft">
              <h4 className="heading-5 text-deep mb-6">Areas of Expertise</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {expertise.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-cream">
                      <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Icon size={18} />
                      </span>
                      <span className="body-regular text-text-body font-medium">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-xl p-8 shadow-soft border border-stroke">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="heading-5 text-deep mb-4">Professional Experience</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 body-regular text-text-body">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Experience in Ayurvedic consultation and wellness guidance
                  </li>
                  <li className="flex items-start gap-3 body-regular text-text-body">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Experience in Yoga therapy sessions and holistic health management
                  </li>
                  <li className="flex items-start gap-3 body-regular text-text-body">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    Knowledge of Ayurvedic dietetics, lifestyle counseling, and preventive healthcare
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
          >
            Book Consultation
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </Section>
    </>
  )
}
