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
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The Hope Yoga Wellness Studio has completely transformed my relationship with myself. The studio gave me tools I use every day to stay grounded and present, even in the midst of a busy life. Dr. Imran's Ayurvedic guidance has been particularly life-changing for my health.",
    name: "Sarah Mitchell",
    title: "Marketing Director",
    rating: 5,
  },
  {
    quote: "I came here seeking relief from chronic stress and left with so much more than I ever imagined. Aakash and the team are deeply knowledgeable, and the atmosphere is nothing short of magical. The Panchakarma therapy exceeded all my expectations.",
    name: "Rahul Verma",
    title: "Software Engineer",
    rating: 5,
  },
  {
    quote: "The yoga sessions combined with holistic guidance created a profound shift in my wellbeing. I have recommended The Hope Yoga Wellness Studio to everyone I know. Ketan's dance workshops are an absolute bonus — pure joy!",
    name: "Priya Sharma",
    title: "Healthcare Professional",
    rating: 5,
  },
  {
    quote: "As someone who had never done yoga before, I was nervous. But Aakash and the instructors made me feel so welcome. Now yoga is an indispensable part of my life. I've also lost 12 kgs in 4 months through their wellness program!",
    name: "Amit Tiwari",
    title: "Teacher",
    rating: 5,
  },
  {
    quote: "The practice at The Hope Yoga Wellness Studio was exactly what my overworked mind needed. The stillness, the guidance, and the supportive community reset my entire nervous system. The meditation sessions are world-class.",
    name: "Emily Watson",
    title: "Graphic Designer",
    rating: 5,
  },
  {
    quote: "My daughter joined Ketan's Bollywood dance classes and the transformation in her confidence is remarkable. He doesn't just teach dance — he builds character. The Hope is truly a holistic wellness destination for the whole family.",
    name: "Kavita Joshi",
    title: "Parent",
    rating: 5,
  },
  {
    quote: "Dr. Imran's Ayurvedic consultation was a turning point for my health. His expertise in dietetics and lifestyle management helped me overcome years of digestive issues. The personalized diet plan he created is practical and effective.",
    name: "Amara Okafor",
    title: "Nutritionist",
    rating: 5,
  },
  {
    quote: "I visit The Hope Yoga Wellness Studio every year as a gift to myself. Each time, I discover a new layer of peace and a deeper understanding of what it means to truly rest. The Shirodhara treatment is an absolute must-try!",
    name: "Lena Johansson",
    title: "Photographer",
    rating: 5,
  },
  {
    quote: "The corporate wellness program has been a blessing for our team. Employee satisfaction scores have gone up by 40% since we started. Aakash's stress management workshops are practical, engaging, and deliver real results.",
    name: "Rajesh Mehta",
    title: "HR Director",
    rating: 5,
  },
  {
    quote: "Ketan's 25+ years of experience in dance is evident in every class. He trained my daughter who is now pursuing dance professionally. His connections in the Bollywood industry and genuine mentorship make him truly one of a kind.",
    name: "Sunita Patel",
    title: "Parent",
    rating: 5,
  },
  {
    quote: "The therapeutic massage at The Hope is unlike anything I've experienced. The Deep Tissue and Aromatherapy treatments have relieved my chronic back pain completely. The therapists are skilled and deeply attentive to your needs.",
    name: "Vikram Singh",
    title: "Fitness Enthusiast",
    rating: 5,
  },
  {
    quote: "I struggled with infertility for years. Dr. Imran's Ayurvedic approach combined with yoga therapy at The Hope gave me hope when I had almost given up. Today I am a mother, and I will forever be grateful to this wonderful team.",
    name: "Neha Gupta",
    title: "Homemaker",
    rating: 5,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={`${t.name}-${i}`} variants={scaleIn} custom={i * 0.03}>
              <Card className="p-6 bg-white rounded-xl h-full flex flex-col border border-stroke hover:shadow-soft-lg transition-all duration-300">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <Quote size={16} className="text-primary/30 mb-2" strokeWidth={1.5} />
                <blockquote className="body-regular text-text-body flex-1 leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 border-t border-stroke/50">
                  <p className="text-sm font-sans font-semibold text-deep">
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
