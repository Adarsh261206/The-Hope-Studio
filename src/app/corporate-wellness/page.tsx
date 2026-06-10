"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { Building2, School, Hospital, Users, Briefcase, UsersRound, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    title: "Corporate Programs",
    description: "Reduce workplace stress, boost productivity, and foster a healthier work environment with tailored wellness programs for your organization.",
    icon: Building2,
    link: "/corporate-wellness/programs",
    features: ["On-site yoga sessions", "Stress management workshops", "Team building through wellness", "Flexible scheduling"],
  },
  {
    title: "Institutional Wellness",
    description: "Empower students, staff, and faculty with mindful practices that enhance focus, emotional balance, and academic performance.",
    icon: School,
    link: "/corporate-wellness/institutional",
    features: ["School yoga programs", "College wellness initiatives", "Hospital staff wellness", "Faculty training"],
  },
  {
    title: "Workshops & Retreats",
    description: "Custom-designed workshops and immersive retreat experiences for teams, organizations, and community groups.",
    icon: Users,
    link: "/corporate-wellness/workshops",
    features: ["Half-day workshops", "Full-day retreats", "Multi-day intensives", "Custom programs"],
  },
]

const stats = [
  { value: "15+", label: "Corporate Partners" },
  { value: "2000+", label: "Employees Reached" },
  { value: "95%", label: "Satisfaction Rate" },
  { value: "50+", label: "Workshops Delivered" },
]

export default function CorporateWellnessPage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1993&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <span className="subtitle-text text-white/80 inline-block mb-4">Workplace Wellness</span>
          <h1 className="heading-1 text-white">Corporate Wellness</h1>
          <p className="mt-4 body-large text-white/80 max-w-xl mx-auto">
            Transform your workplace into a hub of health, productivity, and well-being
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Wellness Programs for Organizations"
          subtitle="Our Approach"
          description="We partner with organizations to create healthier, happier, and more productive workplaces. Our programs are customized to meet the unique needs of your team."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 border border-stroke text-center">
              <span className="text-3xl font-serif font-medium text-deep">{stat.value}</span>
              <p className="text-xs font-sans text-text-body mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {programs.map((prog, i) => {
            const Icon = prog.icon
            return (
              <motion.div
                key={prog.title}
                variants={fadeUp}
                custom={i * 0.1}
              >
                <Link
                  href={prog.link}
                  className="group block bg-white rounded-xl p-8 border border-stroke hover:border-primary/20 hover:shadow-soft-lg transition-all duration-400 h-full"
                >
                  <span className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-400 mb-5">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <h4 className="heading-4 text-deep">{prog.title}</h4>
                  <p className="mt-3 body-regular text-text-body">{prog.description}</p>
                  <ul className="mt-5 space-y-2">
                    {prog.features.map((f) => (
                      <li key={f} className="text-sm font-sans text-text-body flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="mt-16 text-center bg-white rounded-2xl p-10 border border-stroke">
          <h3 className="heading-3 text-deep">Ready to Transform Your Workplace?</h3>
          <p className="mt-4 body-large text-text-body max-w-xl mx-auto">
            Let us design a custom wellness program that fits your organization&apos;s culture, goals, and schedule.
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
