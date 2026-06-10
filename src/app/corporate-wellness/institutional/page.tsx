"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import Link from "next/link"
import { ArrowUpRight, School, Hospital, GraduationCap, Users, BookOpen, Heart } from "lucide-react"

const institutions = [
  {
    title: "Schools",
    description: "Age-appropriate yoga and mindfulness programs for students that improve focus, reduce anxiety, and support emotional development. Includes teacher training for integrating wellness into the school day.",
    icon: School,
    audiences: ["Primary Students", "Secondary Students", "Teachers & Staff"],
  },
  {
    title: "Colleges & Universities",
    description: "Wellness programs designed for young adults navigating academic pressure, career uncertainty, and lifestyle transitions. Includes meditation, stress management, and holistic health education.",
    icon: GraduationCap,
    audiences: ["Students", "Faculty", "Administrative Staff"],
  },
  {
    title: "Hospitals & Healthcare",
    description: "Complementary wellness programs for healthcare professionals dealing with high-stress environments. Includes therapeutic yoga, breathing techniques, and burnout prevention strategies.",
    icon: Hospital,
    audiences: ["Doctors & Nurses", "Support Staff", "Patients (Rehabilitation)"],
  },
]

export default function InstitutionalPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c7f1?q=80&w=2070&auto=format&fit=crop')",
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
          <h1 className="heading-1 text-white">Institutional Wellness</h1>
          <p className="mt-4 body-large text-white/80 max-w-xl mx-auto">
            Wellness programs for schools, colleges, and hospitals
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Wellness for Educational & Healthcare Institutions"
          subtitle="Institutional Programs"
          description="We partner with schools, colleges, and hospitals to create customized wellness programs that support students, staff, and faculty."
        />

        <div className="space-y-10 mt-10">
          {institutions.map((inst, i) => {
            const Icon = inst.icon
            return (
              <motion.div
                key={inst.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-stroke"
              >
                <div className="flex items-start gap-5">
                  <span className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon size={28} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="heading-4 text-deep">{inst.title}</h4>
                    <p className="mt-3 body-regular text-text-body max-w-2xl">{inst.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {inst.audiences.map((a) => (
                        <span key={a} className="text-xs font-sans font-medium bg-cream text-deep px-3 py-1.5 rounded-full border border-stroke">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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
