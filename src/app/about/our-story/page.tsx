"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  slideRight,
  slideLeft,
} from "@/hooks/use-scroll-reveal"

const chapters = [
  {
    title: "The Beginning",
    content:
      "The Hope Yoga Wellness Studio began with a vision — Aakash Bora's deep passion for yoga and its power to transform lives. With over 11 years of dedicated practice and teaching, Aakash set out to create a space where authentic yoga could be accessible to everyone, regardless of their experience level.",
  },
  {
    title: "Growing Impact",
    content:
      "Through unwavering commitment and authentic teaching, the studio grew from small, intimate classes to a thriving wellness community. Each session became a stepping stone, impacting over 8,500 lives along the way. Students came not just for asanas, but for the profound sense of peace and purpose they found on the mat.",
  },
  {
    title: "Deepening Roots",
    content:
      "As the community expanded, so did the offerings — from Hatha and Vinyasa to therapeutic yoga, meditation, and holistic wellness practices. The philosophy remained simple: meet every student where they are, guide with compassion, and honor the ancient traditions that form the foundation of yoga.",
  },
  {
    title: "Looking Ahead",
    content:
      "Today, The Hope Yoga Wellness Studio continues to grow — deepening roots while reaching outward. With Aakash Bora's vision at the helm, the studio remains committed to spreading the light of yoga, one breath, one practice, one life at a time.",
  },
]

export default function OurStoryPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop')",
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
            About Us
          </motion.span>
          <motion.h1 variants={fadeUp} className="heading-1 text-white">
            Our Story
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Learn about our philosophy, journey, mission
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={contentRef}>
          <SectionHeader
            title="The Journey of The Hope Yoga Wellness Studio"
            subtitle="Our Timeline"
            description="From a single vision to a thriving community of over 8,500 lives impacted — our story is one of passion, purpose, and the transformative power of yoga."
            align="left"
          />
        </div>
        <motion.div
          ref={contentRef}
          initial="hidden"
          animate={contentVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative space-y-16 mt-12"
        >
          {chapters.map((chapter, i) => (
            <motion.div
              key={chapter.title}
              variants={i % 2 === 0 ? slideRight : slideLeft}
              custom={i * 0.1}
              className="relative pl-10 md:pl-16 border-l-2 border-primary/20"
            >
              <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 rounded-full bg-primary border-4 border-cream" />
              <span className="subtitle-text text-primary mb-2 block">
                Chapter {i + 1}
              </span>
              <h4 className="heading-4 text-deep mb-3">{chapter.title}</h4>
              <p className="body-regular text-text-body max-w-2xl leading-relaxed">
                {chapter.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
