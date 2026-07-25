"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The Hope Yoga Wellness Studio has completely transformed my life. After struggling with chronic stress and anxiety for years, their personalized yoga and meditation programs helped me find peace and balance. I feel stronger, calmer, and more connected to myself than ever before.",
    name: "Priya Sharma",
    role: "Yoga Practitioner",
    rating: 5,
  },
  {
    quote: "The corporate wellness program at our office has been a game-changer. Employee morale, focus, and productivity have all improved significantly. Their approach is practical, engaging, and truly effective. Highly recommend for any organization!",
    name: "Rajesh Mehta",
    role: "HR Director",
    rating: 5,
  },
  {
    quote: "I've tried many massage therapies over the years, but nothing compares to the therapeutic massage at The Hope. The Deep Tissue and Aromatherapy treatments have relieved my chronic back pain in ways I never thought possible.",
    name: "Ananya Patel",
    role: "Wellness Seeker",
    rating: 5,
  },
  {
    quote: "Dr. Imran's Ayurvedic consultation was eye-opening. His deep knowledge of dietetics and lifestyle management helped me address long-standing digestive issues. The personalized plan he created has made a remarkable difference in my daily life.",
    name: "Sneha Deshmukh",
    role: "Ayurvedic Client",
    rating: 5,
  },
  {
    quote: "Ketan Sir's dance classes are incredible! His 25 years of experience shine through in every session. He doesn't just teach steps — he builds confidence. I performed at my sister's wedding and felt like a star. Truly grateful!",
    name: "Rohan Jadhav",
    role: "Dance Student",
    rating: 5,
  },
  {
    quote: "Aakash Bora's approach to holistic wellness is truly unique. The combination of Yogic practices, Naturopathy, and therapeutic treatments creates a complete wellness experience. I have recommended The Hope to my entire family.",
    name: "Vikram Singh",
    role: "Fitness Enthusiast",
    rating: 5,
  },
  {
    quote: "The sound therapy session was a revelation. I felt layers of stress melting away as the vibrations resonated through my body. The Shirodhara treatment left me in a state of deep relaxation I have never experienced before.",
    name: "Neha Gupta",
    role: "Holistic Therapy Client",
    rating: 5,
  },
  {
    quote: "I was dealing with severe burnout and sleep issues when I found The Hope. Through their Stress Management Yoga and personalized wellness plan, I have regained my energy and peace of mind. Aakash is a wonderful guide.",
    name: "Arun Kumar",
    role: "Stress Management Program",
    rating: 5,
  },
  {
    quote: "My daughter has been attending Ketan's Bollywood dance workshops and the transformation in her confidence is amazing. He has a gift for bringing out the best in every student. Thank you for nurturing her talent!",
    name: "Kavita Joshi",
    role: "Parent",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Section className="bg-deep text-white" id="testimonials">
      <div className="text-center mb-12">
        <span className="subtitle-text inline-block mb-4 text-white/50">Testimonials</span>
        <h2 className="heading-2 text-white max-w-[30rem] mx-auto">
          Real Stories from Our Community
        </h2>
        <p className="mt-4 body-regular text-white/60 max-w-lg mx-auto">
          Hear from those who have experienced transformation at The Hope Yoga Wellness Studio.
        </p>
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {testimonials.slice(0, 6).map((t, i) => (
          <motion.div
            key={t.name}
            variants={fadeUp}
            custom={i * 0.05}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={14} className="text-yellow-400" fill="currentColor" />
              ))}
            </div>
            <Quote size={18} className="text-primary/40 mb-2" strokeWidth={1.5} />
            <blockquote className="body-regular text-white/80 flex-1 leading-relaxed italic">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-sm font-sans font-semibold text-white">{t.name}</p>
              <p className="text-xs text-white/50 font-sans">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
