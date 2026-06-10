"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
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

const certOrgs = [
  { name: "Yoga Alliance International", logo: "YAI" },
  { name: "National Institute of Naturopathy", logo: "NIN" },
  { name: "International Association of Yoga Therapists", logo: "IAYT" },
  { name: "Ayurvedic Medical Association", logo: "AMA" },
]

export default function CertificationsPage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
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
          <h1 className="heading-1 text-white">Certifications</h1>
          <p className="mt-4 body-large text-white/80 max-w-xl mx-auto">
            Our credentials and areas of certified expertise
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Our Certifications & Expertise"
          subtitle="Credentials"
          description="Our founder Aakash Bora and our team bring a wealth of certified expertise across multiple holistic wellness disciplines."
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"
        >
          {certifications.map((cert, i) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                variants={fadeUp}
                custom={i * 0.05}
                className="group bg-white rounded-xl p-6 border border-stroke hover:border-primary/20 hover:shadow-soft-lg transition-all duration-400"
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

        <div className="mt-16 border-t border-stroke pt-12">
          <SectionHeader
            title="Recognized By"
            subtitle="Affiliated Organizations"
            align="left"
          />
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {certOrgs.map((org) => (
              <div
                key={org.name}
                className="bg-white rounded-xl p-6 border border-stroke text-center hover:border-primary/20 transition-all duration-400"
              >
                <div className="w-16 h-16 rounded-full bg-primary/5 text-primary text-lg font-sans font-bold flex items-center justify-center mx-auto">
                  {org.logo}
                </div>
                <p className="mt-4 text-sm font-sans font-medium text-deep">{org.name}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
