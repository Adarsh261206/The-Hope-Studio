"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, Building2, School, Hospital, Users, Briefcase, UsersRound } from "lucide-react"

const programs = [
  {
    title: "For Corporates",
    description: "Reduce workplace stress, boost productivity, and foster a healthier work environment with tailored corporate wellness programs.",
    icon: Building2,
    link: "/corporate-wellness/programs",
  },
  {
    title: "For Schools & Colleges",
    description: "Empower students and staff with mindful practices that enhance focus, emotional balance, and academic performance.",
    icon: School,
    link: "/corporate-wellness/institutional",
  },
  {
    title: "For Hospitals",
    description: "Complement medical care with holistic therapies that accelerate recovery and promote long-term well-being for patients and staff.",
    icon: Hospital,
    link: "/corporate-wellness/institutional",
  },
  {
    title: "Workshops & Retreats",
    description: "Custom-designed workshops and immersive retreat experiences for teams, organizations, and community groups.",
    icon: Users,
    link: "/corporate-wellness/workshops",
  },
]

export function CorporateWellnessSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Section className="bg-white" id="corporate">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" ref={ref}>
        <div>
          <span className="subtitle-text inline-block mb-4">Corporate Wellness</span>
          <h2 className="heading-2 text-deep">
            Workplace Wellness Programs
          </h2>
          <p className="mt-5 body-large text-text-body leading-relaxed">
            We partner with organizations to create healthier, happier, and more productive workplaces. Our corporate wellness programs are customized to meet the unique needs of your team, reducing stress and improving overall well-being.
          </p>
          <p className="mt-4 body-regular text-text-body leading-relaxed">
            With over 11 years of experience in holistic health, Aakash Bora and our expert team bring proven wellness methodologies to corporates, schools, hospitals, and institutions.
          </p>

          <div className="mt-8 flex items-center gap-4 sm:gap-6">
            <Link
              href="/corporate-wellness"
              className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
            >
              Explore Programs
              <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-all duration-300">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </Link>
            <span className="text-xs text-text-body font-sans">
              Serving 8500+ individuals
            </span>
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                  className="group block p-6 sm:p-8 border border-stroke rounded-xl hover:border-primary/20 hover:shadow-soft-lg transition-all duration-400 h-full"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-400 mb-4">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                  <h5 className="heading-5 text-deep">{prog.title}</h5>
                  <p className="mt-2 body-regular text-text-body">{prog.description}</p>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
