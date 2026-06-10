"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { ArrowUpRight } from "lucide-react"

const experts = [
  {
    name: "Sophia Lee",
    role: "Yin Yoga",
    credentials: "200hr YTT, Reiki Practitioner",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    href: "/experts/yoga-trainers",
  },
  {
    name: "James Smith",
    role: "Power Yoga",
    credentials: "250hr YTT, Strength Training Expert",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1974&auto=format&fit=crop",
    href: "/experts/yoga-trainers",
  },
  {
    name: "Olivia Brown",
    role: "Iyengar Yoga",
    credentials: "200hr YTT, Alignment Specialist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    href: "/experts/yoga-trainers",
  },
]

export function ExpertsPreviewSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Section className="bg-white" id="experts">
      <SectionHeader
        title="Guided by Those Who Practice What They Teach"
        subtitle="Your Teachers"
        description=""
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {experts.map((expert, i) => (
          <motion.div
            key={expert.name}
            variants={fadeUp}
            custom={i * 0.1}
            className="transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.02]"
          >
            <Link href={expert.href} className="group block">
              <div className="bg-white rounded-full overflow-hidden transition-all duration-400 group-hover:bg-primary p-4 pb-8">
                <div className="aspect-square rounded-full overflow-hidden max-w-[80%] mx-auto">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url('${expert.image}')` }}
                  />
                </div>
                <div className="mt-6 text-center px-4">
                  <h5 className="heading-5 text-deep group-hover:text-white transition-colors duration-400">
                    {expert.name}
                  </h5>
                  <p className="body-regular text-text-body group-hover:text-white/80 mt-1 transition-colors duration-400">
                    {expert.role}
                  </p>
                  <p className="text-xs text-text-body group-hover:text-white/70 mt-2 transition-colors duration-400">
                    {expert.credentials}
                  </p>
                </div>
              </div>
            </Link>
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
          href="/experts"
          className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300 hover-scale"
        >
          Meet the Full Team
          <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
            <ArrowUpRight size={16} strokeWidth={2} />
          </span>
        </Link>
      </motion.div>
    </Section>
  )
}
