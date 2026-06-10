"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/hooks/use-scroll-reveal"
import { Card } from "@/components/ui/card"
import { ArrowUpRight, BookOpen, Calendar, Package, HelpCircle } from "lucide-react"
import { cn } from "@/lib/cn"

const sections = [
  {
    title: "Blog",
    description:
      "Explore articles on yoga practices, mindfulness tips, wellness guides, and stories from The Hope Yoga Wellness Studio community.",
    icon: BookOpen,
    href: "/resources/blog",
  },
  {
    title: "Events",
    description:
      "Stay connected with upcoming workshops, classes, and special wellness gatherings at The Hope Yoga Wellness Studio.",
    icon: Calendar,
    href: "/resources/events",
  },
  {
    title: "Products",
    description:
      "Discover handpicked wellness products curated for your practice at The Hope Yoga Wellness Studio.",
    icon: Package,
    href: "/resources/products",
  },
  {
    title: "FAQs",
    description:
      "Find answers to common questions about The Hope Yoga Wellness Studio, bookings, treatments, and yoga programs.",
    icon: HelpCircle,
    href: "/resources/faqs",
  },
]

export default function ResourcesPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[70vh] min-h-[32rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2022&auto=format&fit=crop')",
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
            Wellness Library
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            Resources & Insights
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Discover tools, knowledge, and inspiration to support your wellness
            journey every step of the way.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={cardsRef}>
          <SectionHeader
            title="Explore Our Resources"
            subtitle="What Would You Like to Explore?"
            description="Browse our collection of wellness content designed to inform, inspire, and support your path."
            align="center"
          />
        </div>
        <motion.div
          ref={cardsRef}
          initial="hidden"
          animate={cardsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {sections.map((section, i) => {
            const Icon = section.icon
            return (
              <motion.div key={section.title} variants={scaleIn} custom={i * 0.1}>
                <Link href={section.href} className="block no-underline group">
                  <Card className="p-8 bg-white rounded-xl h-full group-hover:shadow-elevated transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h5 className="heading-5 text-deep mb-2">{section.title}</h5>
                    <p className="body-regular text-text-body mb-6">
                      {section.description}
                    </p>
                    <span
                      className={cn(
                        "group inline-flex items-center gap-2 px-5 py-2",
                        "bg-primary text-white rounded-full text-sm font-sans font-medium",
                        "hover:bg-primary-hover transition-all duration-300"
                      )}
                    >
                      Explore {section.title}
                      <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-white/90">
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </span>
                    </span>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>
    </>
  )
}
