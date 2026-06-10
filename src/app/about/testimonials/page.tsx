"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/hooks/use-scroll-reveal"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The Hope Yoga Wellness Studio completely transformed my relationship with myself. The studio gave me tools I use every day to stay grounded and present, even in the midst of a busy life.",
    name: "Sarah Mitchell",
    title: "Marketing Director",
  },
  {
    quote:
      "I came here seeking relief from chronic stress and left with so much more than I ever imagined. Aakash and the team are deeply knowledgeable, and the atmosphere is nothing short of magical.",
    name: "James Chen",
    title: "Software Engineer",
  },
  {
    quote:
      "The yoga sessions combined with holistic guidance created a profound shift in my wellbeing. I have recommended The Hope Yoga Wellness Studio to everyone I know.",
    name: "Priya Sharma",
    title: "Healthcare Professional",
  },
  {
    quote:
      "As someone who had never done yoga before, I was nervous. But Aakash and the instructors made me feel so welcome. Now yoga is an indispensable part of my life.",
    name: "Michael Torres",
    title: "Teacher",
  },
  {
    quote:
      "The practice at The Hope Yoga Wellness Studio was exactly what my overworked mind needed. The stillness, the guidance, and the supportive community reset my entire nervous system.",
    name: "Emily Watson",
    title: "Graphic Designer",
  },
  {
    quote:
      "The Hope Yoga Wellness Studio is not just a yoga studio — it is a community. The connections I made here with fellow students and teachers continue to inspire me long after I returned home.",
    name: "David Kim",
    title: "Entrepreneur",
  },
  {
    quote:
      "The holistic approach at The Hope Yoga Wellness Studio completely changed how I think about wellness and self-care. I feel more energetic and aligned than I have in years.",
    name: "Amara Okafor",
    title: "Nutritionist",
  },
  {
    quote:
      "I visit The Hope Yoga Wellness Studio every year as a gift to myself. Each time, I discover a new layer of peace and a deeper understanding of what it means to truly rest.",
    name: "Lena Johansson",
    title: "Photographer",
  },
]

export default function TestimonialsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop')",
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
            Testimonials
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Hear from those who have walked the path — real stories of
            transformation from our community.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={gridRef}>
          <SectionHeader
            title="Stories of Transformation"
            subtitle="Guest Experiences"
            description="Every guest who passes through our doors carries a unique story. Here are a few of the voices that inspire us every day."
            align="left"
          />
        </div>
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={t.name} variants={scaleIn} custom={i * 0.05}>
              <Card className="p-8 bg-white rounded-xl h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-primary"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <blockquote className="body-regular text-text-body flex-1 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-6 border-t border-stroke/50">
                  <p className="text-base font-sans font-semibold text-deep">
                    {t.name}
                  </p>
                  <p className="body-small text-text-body">{t.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
