"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowUpRight, User, Award, BookOpen } from "lucide-react"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer, scaleIn } from "@/hooks/use-scroll-reveal"

const categories = [
  {
    icon: User,
    title: "Yoga Trainers",
    description:
      "Certified instructors specializing in various yoga traditions — from Hatha to Ashtanga, Yin to Vinyasa.",
    href: "/experts/yoga-trainers",
  },
  {
    icon: Award,
    title: "Ayurvedic Doctors",
    description:
      "Experienced practitioners of Ayurvedic medicine offering personalized wellness consultations and treatments.",
    href: "/experts/ayurvedic-doctors",
  },
  {
    icon: BookOpen,
    title: "Wellness Experts",
    description:
      "Holistic health coaches, nutritionists, and mindfulness guides dedicated to your complete well-being.",
    href: "/experts/wellness-experts",
  },
]

const featuredExperts = [
  {
    name: "Aakash Bora",
    role: "Founder & Lead Yoga Instructor",
    bio: "With deep expertise in traditional yoga practices, Aakash founded The Hope Yoga Wellness Studio to create a sanctuary for holistic healing through Yoga, Naturopathy, and wellness therapies.",
  },
  {
    name: "Dr. Arjun Mehta",
    role: "Senior Ayurvedic Doctor",
    bio: "A BAMS graduate with a decade of clinical experience, Dr. Mehta specializes in Panchakarma and lifestyle medicine at The Hope Yoga Wellness Studio.",
  },
  {
    name: "Maya Chen",
    role: "Wellness & Nutrition Coach",
    bio: "Maya integrates functional nutrition with mindfulness practices to help guests build sustainable, nourishing habits.",
  },
]

export default function ExpertsPage() {
  const heroReveal = useScrollReveal()
  const gridReveal = useScrollReveal()
  const featuredReveal = useScrollReveal()
  const ctaReveal = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[30rem] flex items-center justify-center overflow-hidden bg-deep">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop')",
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
            Meet the Team
          </span>
          <h1 className="heading-1 text-white">Our Experts</h1>
          <p className="mt-4 body-large text-white/80 max-w-lg mx-auto">
            Meet Aakash Bora and the team of wellness practitioners at The Hope Yoga Wellness Studio — experts in Yoga, Naturopathy, Massage Therapy, Sound Healing, and more.
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Expertise That Transforms"
          subtitle="The Hope Yoga Wellness Studio Team"
          description="Every member of our team is handpicked for their depth of knowledge, teaching ability, and compassionate approach."
        />
        <motion.div
          ref={gridReveal.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={gridReveal.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <motion.div key={cat.title} variants={fadeUp}>
                <Link
                  href={cat.href}
                  className="group block bg-white rounded-xl p-8 shadow-soft hover:shadow-medium transition-all duration-400"
                >
                  <span className="w-16 h-16 rounded-full bg-cream flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-400">
                    <Icon
                      size={28}
                      className="text-primary group-hover:text-white transition-colors duration-400"
                    />
                  </span>
                  <h3 className="heading-5 text-deep mb-3">{cat.title}</h3>
                  <p className="body-regular text-text-body mb-6">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-sm font-sans font-medium group-hover:bg-primary-hover transition-all duration-300">
                    View Team
                    <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </span>
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          title="Meet Some of Our Experts"
          subtitle="Featured Practitioners"
          description=""
        />
        <motion.div
          ref={featuredReveal.ref}
          variants={staggerContainer}
          initial="hidden"
          animate={featuredReveal.isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {featuredExperts.map((expert, i) => (
            <motion.div key={expert.name} variants={scaleIn} custom={i * 0.1}>
              <div className="bg-cream rounded-xl p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary mx-auto mb-5 flex items-center justify-center">
                  <span className="heading-4 text-primary font-serif">
                    {expert.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <h4 className="heading-5 text-deep mb-1">{expert.name}</h4>
                <span className="subtitle-text text-primary inline-block mb-3">
                  {expert.role}
                </span>
                <p className="body-regular text-text-body">{expert.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <motion.div
          ref={ctaReveal.ref}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaReveal.isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <h2 className="heading-2 text-deep max-w-xl mx-auto">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="mt-4 body-regular text-text-body max-w-md mx-auto">
            Book a consultation with one of our practitioners and take the first step toward a balanced life.
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
