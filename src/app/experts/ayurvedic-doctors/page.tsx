"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Award } from "lucide-react"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "@/hooks/use-scroll-reveal"

const doctors = [
  {
    name: "Dr. Arjun Mehta",
    specialty: "Panchakarma & Lifestyle Medicine",
    bio: "A BAMS graduate with over a decade of experience, Dr. Mehta specializes in detoxification therapies and personalized wellness plans rooted in classical Ayurveda.",
    credentials: ["BAMS, MD (Ayurveda)", "10+ years clinical practice", "Certified Panchakarma Specialist"],
    gradient: "from-emerald-200/60 to-teal-200/60",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Women's Health & Rasayana",
    bio: "Dr. Sharma focuses on women's health, reproductive wellness, and rejuvenation therapies (Rasayana) using a blend of herbs, diet, and lifestyle guidance.",
    credentials: ["BAMS", "Specialist in Stri Roga", "Ayurvedic Nutrition Expert"],
    gradient: "from-rose-200/60 to-pink-200/60",
  },
  {
    name: "Dr. Vikram Nair",
    specialty: "Ayurvedic Orthopedics & Pain Management",
    bio: "Dr. Nair combines traditional Ayurvedic treatments with modern diagnostic methods to address chronic pain, joint disorders, and musculoskeletal conditions.",
    credentials: ["BAMS, MS (Ortho Ayurveda)", "Marma Therapy Specialist", "15+ years experience"],
    gradient: "from-blue-200/60 to-cyan-200/60",
  },
  {
    name: "Dr. Ananya Gupta",
    specialty: "Digestive Health & Detox",
    bio: "Dr. Gupta is an expert in Agni (digestive fire) management and customized detox programs that restore balance from the inside out.",
    credentials: ["BAMS, PhD (Ayurveda)", "Gut Health Specialist", "Published Researcher"],
    gradient: "from-amber-200/60 to-yellow-200/60",
  },
]

const credentialsList = [
  "BAMS — Bachelor of Ayurvedic Medicine & Surgery",
  "MD (Ayurveda) — Postgraduate specialization",
  "Certified Panchakarma Therapists",
  "Registered with Central Council of Indian Medicine (CCIM)",
  "Ongoing continuing education in integrative medicine",
]

export default function AyurvedicDoctorsPage() {
  const heroReveal = useScrollReveal()
  const gridReveal = useScrollReveal()
  const credReveal = useScrollReveal()

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
        <SectionHeader
          title="Ayurveda at The Hope Yoga Wellness Studio"
          subtitle="Our Doctors"
          description=""
        />
        <motion.div
          ref={gridReveal.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={gridReveal.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {doctors.map((doctor, i) => (
            <motion.div key={doctor.name} variants={fadeUp} custom={i * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-400">
                <div
                  className={`h-48 bg-gradient-to-br ${doctor.gradient} flex items-center justify-center`}
                >
                  <span className="w-16 h-16 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <Award size={28} className="text-primary" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="heading-5 text-deep mb-1">{doctor.name}</h3>
                  <span className="subtitle-text text-primary inline-block mb-3">
                    {doctor.specialty}
                  </span>
                  <p className="body-regular text-text-body mb-4">{doctor.bio}</p>
                  <ul className="space-y-1.5">
                    {doctor.credentials.map((cred) => (
                      <li
                        key={cred}
                        className="body-small text-text-body flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <motion.div
          ref={credReveal.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={credReveal.isVisible ? "visible" : "hidden"}
        >
          <SectionHeader
            title="Credentials & Certifications"
            subtitle="Our Standards"
            description="Every doctor in our network meets rigorous educational and professional standards."
          />
          <motion.div
            variants={scaleIn}
            className="max-w-2xl mx-auto bg-cream rounded-xl p-8"
          >
            <ul className="space-y-4">
              {credentialsList.map((cred) => (
                <li
                  key={cred}
                  className="flex items-start gap-3 body-regular text-text-body"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {cred}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
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
