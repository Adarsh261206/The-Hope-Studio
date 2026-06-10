"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen } from "lucide-react"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "@/hooks/use-scroll-reveal"

const experts = [
  {
    name: "Maya Chen",
    role: "Wellness & Nutrition Coach",
    specialties: ["Functional Nutrition", "Mindful Eating", "Gut Health"],
    bio: "Maya integrates functional nutrition with mindfulness practices to help guests build sustainable, nourishing habits that last a lifetime.",
    gradient: "from-green-200/60 to-lime-200/60",
  },
  {
    name: "Liam O'Brien",
    role: "Meditation & Breathwork Guide",
    specialties: ["Guided Meditation", "Pranayama", "Stress Management"],
    bio: "Liam's calm presence and deep knowledge of breathwork techniques empower guests to find stillness and clarity.",
    gradient: "from-sky-200/60 to-blue-200/60",
  },
  {
    name: "Dr. Priya Sharma",
    role: "Naturopathy Practitioner",
    specialties: ["Herbal Medicine", "Detox Therapies", "Lifestyle Counseling"],
    bio: "Dr. Sharma combines naturopathic principles with modern wellness science to support the body's natural healing abilities.",
    gradient: "from-violet-200/60 to-purple-200/60",
  },
  {
    name: "Sofia Reyes",
    role: "Massage Therapist",
    specialties: ["Deep Tissue Massage", "Aromatherapy", "Myofascial Release"],
    bio: "Sofia's skilled hands and intuitive approach help release tension, improve circulation, and restore balance to the body.",
    gradient: "from-orange-200/60 to-amber-200/60",
  },
  {
    name: "Ravi Kapoor",
    role: "Sound Healing Practitioner",
    specialties: ["Crystal Singing Bowls", "Gong Therapy", "Vibrational Healing"],
    bio: "Ravi uses the therapeutic power of sound and vibration to guide guests into deep states of relaxation and inner harmony.",
    gradient: "from-pink-200/60 to-rose-200/60",
  },
  {
    name: "Anika Joshi",
    role: "Yoga & Wellness Coach",
    specialties: ["Hatha Yoga", "Pranayama", "Stress Management"],
    bio: "Anika integrates yoga postures, breathwork, and mindfulness to help clients build resilience and find balance in daily life.",
    gradient: "from-teal-200/60 to-cyan-200/60",
  },
]

export default function WellnessExpertsPage() {
  const heroReveal = useScrollReveal()
  const gridReveal = useScrollReveal()

  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden bg-deep">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
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
          <h1 className="heading-1 text-white">Wellness Experts</h1>
          <p className="mt-4 body-large text-white/80 max-w-lg mx-auto">
            Holistic practitioners at The Hope Yoga Wellness Studio specializing in Yoga, Naturopathy, Massage Therapy, Sound Healing, and more.
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Holistic Wellness at The Hope Yoga Wellness Studio"
          subtitle="Meet the Experts"
          description=""
        />
        <motion.div
          ref={gridReveal.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={gridReveal.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experts.map((expert, i) => (
            <motion.div key={expert.name} variants={fadeUp} custom={i * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-400">
                <div
                  className={`h-48 bg-gradient-to-br ${expert.gradient} flex items-center justify-center`}
                >
                  <span className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <BookOpen size={28} className="text-primary" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="heading-5 text-deep mb-1">{expert.name}</h3>
                  <span className="subtitle-text text-primary inline-block mb-3">
                    {expert.role}
                  </span>
                  <p className="body-regular text-text-body mb-4">{expert.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {expert.specialties.map((s) => (
                      <span
                        key={s}
                        className="body-small px-3 py-1 rounded-full bg-cream text-primary font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <h2 className="heading-2 text-deep max-w-xl mx-auto">
            Let Us Guide You Toward Balance
          </h2>
          <p className="mt-4 body-regular text-text-body max-w-md mx-auto">
            Our wellness experts are here to support you every step of the way.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300 mt-8"
          >
            Book Consultation
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </motion.div>
      </Section>
    </>
  )
}
