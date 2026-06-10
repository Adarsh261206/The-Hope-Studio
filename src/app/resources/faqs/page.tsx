"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Section, SectionHeader } from "@/components/ui/section"
import {
  useScrollReveal,
  fadeUp,
  staggerContainer,
  scaleIn,
} from "@/hooks/use-scroll-reveal"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/cn"

const categories = ["General", "Yoga", "Treatments", "Booking"] as const

type Category = (typeof categories)[number]

const faqs: Record<Category, { question: string; answer: string }[]> = {
  General: [
    {
      question: "What is The Hope Yoga Wellness Studio?",
      answer:
        "The Hope Yoga Wellness Studio is a sanctuary dedicated to holistic well-being. We offer yoga programs, meditation sessions, therapeutic treatments, and wellness workshops. Our approach blends ancient wisdom with modern practices to support your wellness journey.",
    },
    {
      question: "Where are you located?",
      answer:
        "The Hope Yoga Wellness Studio is located at a peaceful setting designed for healing and relaxation. Our exact address and directions are shared upon booking.",
    },
    {
      question: "What should I bring to the studio?",
      answer:
        "We recommend comfortable clothing for yoga and meditation, a water bottle, a journal, and an open mind. Yoga mats and props are provided.",
    },
  ],
  Yoga: [
    {
      question: "What yoga styles do you offer?",
      answer:
        "We offer a variety of styles including Vinyasa, Hatha, Ashtanga, Restorative, Yin, and Meditation-focused sessions. Each class is designed to accommodate all skill levels, from beginners to advanced practitioners.",
    },
    {
      question: "I'm a beginner — can I join?",
      answer:
        "Absolutely! Our classes are designed to be inclusive and welcoming. Instructors provide modifications and guidance for all levels. We recommend starting with our Foundations of Yoga session.",
    },
    {
      question: "How often are yoga classes held?",
      answer:
        "Daily yoga sessions are held in the morning and evening. The schedule varies by season and retreat package. A full timetable is provided upon check-in.",
    },
  ],
  Treatments: [
    {
      question: "What wellness treatments do you offer?",
      answer:
        "We offer a range of treatments including Ayurvedic massages, aromatherapy, sound healing, acupuncture, herbal steam baths, and guided breathwork sessions. Each treatment is tailored to your individual needs.",
    },
    {
      question: "Do I need to book treatments in advance?",
      answer:
        "Yes, we recommend booking treatments at least 48 hours in advance to ensure availability. You can book during your stay or prior to arrival through our booking portal.",
    },
    {
      question: "Are treatments included in retreat packages?",
      answer:
        "Some packages include a selection of treatments, while others offer them as add-ons. Please check your specific package details or contact us for more information.",
    },
  ],
  Booking: [
    {
      question: "How do I book a session at The Hope Yoga Wellness Studio?",
      answer:
        "You can book directly through our website by selecting your preferred service and time slot. A deposit is required to confirm your booking.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Cancellations made 24 hours or more before your session receive a full refund. Cancellations within 24 hours may be rescheduled to a future date.",
    },
    {
      question: "Can I book for a group or corporate session?",
      answer:
        "Yes! We host group sessions and corporate wellness programs. Please contact us directly to discuss your requirements.",
    },
  ],
}

export default function FAQsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: faqRef, isVisible: faqVisible } = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState<Category>("General")
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (question: string) => {
    setOpenItems((prev) => ({ ...prev, [question]: !prev[question] }))
  }

  const currentFaqs = faqs[activeCategory]

  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop')",
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
            Got Questions?
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            FAQs
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Find answers to the most common questions about The Hope Yoga Wellness Studio, yoga
            programs, treatments, and bookings.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={faqRef}>
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Everything You Need to Know"
            description="Browse by category or search below to find the information you need."
            align="center"
          />
        </div>
        <motion.div
          ref={faqRef}
          initial="hidden"
          animate={faqVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category)
                  setOpenItems({})
                }}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-sans font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-text-body hover:bg-primary/10"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-3"
          >
            {currentFaqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                variants={scaleIn}
                custom={i * 0.1}
                className="bg-white rounded-xl border border-stroke/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.question)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <h5 className="heading-5 text-deep">{faq.question}</h5>
                  <ChevronDown
                    size={20}
                    className={cn(
                      "text-primary flex-shrink-0 transition-transform duration-300",
                      openItems[faq.question] && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {openItems[faq.question] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="body-regular text-text-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="text-center mt-12">
            <p className="body-regular text-text-body mb-4">
              Still have questions? We are here to help.
            </p>
            <Link
              href="/contact"
              className={cn(
                "group inline-flex items-center gap-2 px-6 py-3",
                "bg-primary text-white rounded-full text-base font-sans font-medium",
                "hover:bg-primary-hover transition-all duration-300"
              )}
            >
              Contact Us
              <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-white/90">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </Section>
    </>
  )
}
