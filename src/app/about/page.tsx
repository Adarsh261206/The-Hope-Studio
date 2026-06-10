"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  scaleIn,
  slideRight,
  slideLeft,
  clipReveal,
} from "@/hooks/use-scroll-reveal"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, Heart, Star, Leaf } from "lucide-react"
import { cn } from "@/lib/cn"

const stats = [
  { value: "11+", label: "Years of Experience" },
  { value: "8.5K+", label: "Lives Impacted" },
  { value: "50+", label: "Expert Practitioners" },
]

const values = [
  {
    title: "Mindful Living",
    description:
      "We believe in the power of presence. Every practice, every breath is an invitation to return to the now.",
    icon: Heart,
  },
  {
    title: "Holistic Healing",
    description:
      "True wellness addresses the whole person — mind, body, and spirit — through balanced, integrative approaches.",
    icon: Star,
  },
  {
    title: "Sustainable Wellness",
    description:
      "Our practices are designed to nurture both you and the planet, honoring nature in every step.",
    icon: Leaf,
  },
  {
    title: "Community & Belonging",
    description:
      "We cultivate a warm, inclusive space where everyone feels seen, supported, and connected.",
    icon: Heart,
  },
]

const principles = [
  "Presence over perfection",
  "Progress over performance",
  "Connection over competition",
  "Stillness over stimulation",
  "Intention over routine",
]

export default function AboutPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal()
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal()
  const { ref: philosophyRef, isVisible: philosophyVisible } = useScrollReveal()
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[70vh] min-h-[32rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 text-center px-6"
        >
          <motion.span
            variants={fadeUp}
            className="subtitle-text text-white/80 inline-block mb-4"
          >
            Welcome to The Hope Yoga Wellness Studio
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            About The Hope Yoga Wellness Studio
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Founded by Aakash Bora with over 11 years of experience, The Hope Yoga
            Wellness Studio has impacted over 8,500 lives through the power of yoga.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={storyRef}>
          <SectionHeader
            title="Our Story"
            subtitle="How It Began"
            description="A journey rooted in the belief that wellness is not a luxury — it is a return to who we have always been."
            align="left"
          />
        </div>
        <motion.div
          ref={storyRef}
          initial="hidden"
          animate={storyVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={slideRight}>
            <div
              className="w-full h-[20rem] rounded-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop')",
              }}
            />
          </motion.div>
          <motion.div variants={slideLeft}>
            <p className="body-regular text-text-body leading-relaxed">
              The Hope Yoga Wellness Studio was founded by Aakash Bora, who
              brings over 11 years of dedicated experience in yoga and holistic
              wellness. What began as a passion for sharing the transformative
              power of yoga has grown into a sanctuary that has impacted over
              8,500 lives.
            </p>
            <p className="body-regular text-text-body leading-relaxed mt-4">
              Over the years, we have welcomed students from all walks of life,
              offering them a space to pause, breathe, and reconnect with
              what matters most. Our approach blends ancient yoga wisdom with
              modern science, creating practices that are both grounded and
              transformative.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      <Section>
        <div ref={valuesRef}>
          <SectionHeader
            title="Mission & Values"
            subtitle="What We Stand For"
            description="Our mission is to make mindful wellness accessible to all, guided by principles that honor the whole person."
            align="left"
          />
        </div>
        <motion.div
          ref={valuesRef}
          initial="hidden"
          animate={valuesVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} variants={scaleIn} custom={i * 0.1}>
                <Card className="p-8 bg-cream rounded-xl h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <h5 className="heading-5 text-deep mb-2">{value.title}</h5>
                  <p className="body-regular text-text-body">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <div ref={philosophyRef}>
          <SectionHeader
            title="Our Philosophy"
            subtitle="Guiding Beliefs"
            description="Five principles that shape everything we do at The Hope Yoga Wellness Studio."
            align="left"
          />
        </div>
        <motion.div
          ref={philosophyRef}
          initial="hidden"
          animate={philosophyVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-4"
        >
          {principles.map((principle, i) => (
            <motion.div
              key={principle}
              variants={clipReveal}
              custom={i * 0.1}
              className="flex items-center gap-4 px-6 py-5 bg-white rounded-lg border border-stroke/50"
            >
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-sans font-semibold flex-shrink-0">
                {i + 1}
              </span>
              <span className="heading-5 text-deep">{principle}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              custom={i * 0.1}
              className="text-center py-10 px-6 bg-cream rounded-xl"
            >
              <span className="heading-2 text-primary">{stat.value}</span>
              <p className="body-regular text-text-body mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section className="bg-cream">
        <div className="text-center">
          <h3 className="heading-3 text-deep max-w-xl mx-auto">
            Ready to Begin Your Journey?
          </h3>
          <p className="body-regular text-text-body mt-4 max-w-md mx-auto">
            Book a session with us and take the first step toward a more
            balanced, mindful life.
          </p>
          <Link
            href="/contact/book-consultation"
            className={cn(
              "group inline-flex items-center gap-2 px-6 py-3 mt-8",
              "bg-primary text-white rounded-full text-base font-sans font-medium",
              "hover:bg-primary-hover transition-all duration-300"
            )}
          >
            Book Consultation
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-white/90">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </Section>
    </>
  )
}
