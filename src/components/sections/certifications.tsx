"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { Award, Leaf, Heart, ShieldCheck, Sparkles, Star, Globe, BookOpen } from "lucide-react"

const certifications = [
  {
    title: "Certified Yoga Instructor",
    description: "Advanced certification in Hatha Yoga, Meditation, and Yoga Therapy from recognized institutions.",
    icon: Award,
  },
  {
    title: "Naturopathy Practitioner",
    description: "Certified in drugless therapies including Mud Therapy, Hydrotherapy, and Magnet Therapy.",
    icon: Leaf,
  },
  {
    title: "Holistic Wellness Coach",
    description: "Comprehensive training in mind-body wellness, nutrition counseling, and lifestyle transformation.",
    icon: Heart,
  },
  {
    title: "Therapeutic Massage Expert",
    description: "Specialized certification in Deep Tissue, Swedish, Aromatherapy, and Hot Stone Massage techniques.",
    icon: ShieldCheck,
  },
  {
    title: "Sound & Energy Healing",
    description: "Certified practitioner in Sound Therapy, Reiki, and vibrational healing modalities.",
    icon: Sparkles,
  },
  {
    title: "Ayurvedic Wellness",
    description: "Trained in traditional Ayurvedic practices including Shirodhara, Nasya, and Panchakarma therapies.",
    icon: Star,
  },
  {
    title: "Corporate Wellness Specialist",
    description: "Certified to design and implement workplace wellness programs for organizations of all sizes.",
    icon: Globe,
  },
  {
    title: "Continuing Education",
    description: "Regularly updated training in the latest holistic health research, techniques, and best practices.",
    icon: BookOpen,
  },
]

export function CertificationsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Section className="bg-cream" id="certifications">
      <div className="text-center mb-14" ref={ref}>
        <span className="subtitle-text inline-block mb-4">Our Credentials</span>
        <h2 className="heading-2 text-deep max-w-[30rem] mx-auto">
          Certifications & Expertise
        </h2>
        <p className="mt-4 body-large text-text-body max-w-[35rem] mx-auto">
          Our founder Aakash Bora and our team bring a wealth of certified expertise across multiple holistic wellness disciplines.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {certifications.map((cert, i) => {
          const Icon = cert.icon
          return (
            <motion.div
              key={cert.title}
              variants={fadeUp}
              custom={i * 0.05}
              className="group bg-white rounded-xl p-6 border border-stroke transition-all duration-400 hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-elevated hover:border-primary/30"
            >
              <span className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-400 mb-4">
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <h5 className="heading-5 text-deep">{cert.title}</h5>
              <p className="mt-2 body-regular text-text-body">
                {cert.description}
              </p>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
