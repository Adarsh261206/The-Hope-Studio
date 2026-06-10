"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, User } from "lucide-react"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"

const trainers = [
  {
    name: "Aakash Bora",
    specialty: "Hatha & Vinyasa Yoga",
    bio: "Founder of The Hope Yoga Wellness Studio, Aakash brings deep traditional yoga knowledge and a passion for holistic healing to every session.",
    gradient: "from-rose-200/60 to-amber-200/60",
  },
  {
    name: "James Smith",
    specialty: "Power Yoga",
    bio: "James combines strength training principles with dynamic vinyasa to build resilience, both on and off the mat.",
    gradient: "from-blue-200/60 to-teal-200/60",
  },
  {
    name: "Olivia Brown",
    specialty: "Iyengar Yoga",
    bio: "Olivia's precision-oriented teaching emphasizes alignment and therapeutic application, making yoga accessible to all bodies.",
    gradient: "from-purple-200/60 to-pink-200/60",
  },
  {
    name: "Raj Patel",
    specialty: "Ashtanga Yoga",
    bio: "Raj has studied Ashtanga extensively in Mysore and brings authentic, disciplined practice to every session.",
    gradient: "from-green-200/60 to-emerald-200/60",
  },
  {
    name: "Elena Rossi",
    specialty: "Hatha Yoga",
    bio: "Elena's grounding Hatha classes blend breathwork, postures, and meditation for a holistic practice.",
    gradient: "from-yellow-200/60 to-orange-200/60",
  },
  {
    name: "David Kim",
    specialty: "Restorative Yoga",
    bio: "David specializes in restorative practices using props and gentle sequencing to support deep relaxation and healing.",
    gradient: "from-indigo-200/60 to-violet-200/60",
  },
]

export default function YogaTrainersPage() {
  const heroReveal = useScrollReveal()
  const gridReveal = useScrollReveal()

  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden bg-deep">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop')",
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
          <h1 className="heading-1 text-white">Yoga Trainers</h1>
          <p className="mt-4 body-large text-white/80 max-w-lg mx-auto">
            Certified yoga instructors at The Hope Yoga Wellness Studio dedicated to guiding your practice with wisdom and care.
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Yoga Practitioners of The Hope Yoga Wellness Studio"
          subtitle="Meet the Trainers"
          description=""
        />
        <motion.div
          ref={gridReveal.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={gridReveal.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {trainers.map((trainer, i) => (
            <motion.div key={trainer.name} variants={fadeUp} custom={i * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-400">
                <div
                  className={`h-48 bg-gradient-to-br ${trainer.gradient} flex items-center justify-center`}
                >
                  <span className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <User size={28} className="text-primary" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="heading-5 text-deep mb-1">{trainer.name}</h3>
                  <span className="subtitle-text text-primary inline-block mb-3">
                    {trainer.specialty}
                  </span>
                  <p className="body-regular text-text-body">{trainer.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white">
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
