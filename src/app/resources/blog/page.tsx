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
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/cn"

const posts = [
  {
    title: "Morning Yoga Rituals to Start Your Day",
    category: "Yoga",
    excerpt:
      "Discover five simple yoga poses that energize the body and calm the mind, setting a peaceful tone for the day ahead.",
    date: "May 28, 2026",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "The Power of Breath: A Guide to Pranayama",
    category: "Mindfulness",
    excerpt:
      "Learn how ancient breathing techniques can reduce stress, improve focus, and deepen your yoga practice.",
    date: "May 21, 2026",
    gradient: "from-primary/30 to-primary/10",
  },
  {
    title: "Eating for Energy: Nutrition Tips for Yogis",
    category: "Wellness",
    excerpt:
      "Explore how whole foods and mindful eating habits can elevate your energy and support your wellness journey.",
    date: "May 14, 2026",
    gradient: "from-primary/20 to-cream-dark",
  },
  {
    title: "Finding Stillness: A Guide to Meditation",
    category: "Meditation",
    excerpt:
      "Simple meditation techniques for beginners to cultivate inner peace and presence in everyday life.",
    date: "May 7, 2026",
    gradient: "from-primary/40 to-primary/15",
  },
  {
    title: "Ayurvedic Self-Care Routines for Balance",
    category: "Ayurveda",
    excerpt:
      "Incorporate ancient Ayurvedic practices into your daily rhythm to maintain harmony between mind, body, and spirit.",
    date: "April 30, 2026",
    gradient: "from-primary/25 to-primary/5",
  },
  {
    title: "The Benefits of Restorative Yoga",
    category: "Yoga",
    excerpt:
      "Unwind deeply with restorative yoga poses that activate the parasympathetic nervous system and promote healing.",
    date: "April 23, 2026",
    gradient: "from-primary/35 to-primary/10",
  },
]

export default function BlogPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: postsRef, isVisible: postsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504711434969-e33886168d8c?q=80&w=2070&auto=format&fit=crop')",
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
            The Hope Yoga Journal
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            Blog
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Insights, guides, and stories from The Hope Yoga Wellness Studio to inspire your wellness path.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={postsRef}>
          <SectionHeader
            title="Latest Articles"
            subtitle="Recent Posts"
            align="center"
          />
        </div>
        <motion.div
          ref={postsRef}
          initial="hidden"
          animate={postsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post, i) => (
            <motion.div key={post.title} variants={scaleIn} custom={i * 0.1}>
              <Card className="h-full bg-white rounded-xl overflow-hidden group">
                <div
                  className={cn(
                    "h-48 bg-gradient-to-br flex items-center justify-center",
                    post.gradient
                  )}
                >
                  <span className="subtitle-text text-primary/40">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="subtitle-text text-primary inline-block mb-3">
                    {post.category}
                  </span>
                  <h5 className="heading-5 text-deep mb-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h5>
                  <p className="body-regular text-text-body mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="body-small text-text-body/60">
                      {post.date}
                    </span>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 text-sm font-sans font-medium text-primary",
                        "group-hover:gap-2 transition-all duration-300"
                      )}
                    >
                      Read More <ArrowUpRight size={14} strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Link
            href="/resources/blog"
            className={cn(
              "group inline-flex items-center gap-2 px-6 py-3",
              "bg-primary text-white rounded-full text-base font-sans font-medium",
              "hover:bg-primary-hover transition-all duration-300"
            )}
          >
            Load More Articles
            <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-white/90">
              <ArrowUpRight size={16} strokeWidth={2} />
            </span>
          </Link>
        </div>
      </Section>
    </>
  )
}
