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

const products = [
  {
    name: "Hope Yoga Mat",
    description:
      "Eco-friendly, non-slip yoga mat with optimal cushioning for all styles of practice at The Hope Yoga Wellness Studio. Made from natural tree rubber.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    name: "Organic Essential Oil Kit",
    description:
      "A curated set of five pure essential oils — lavender, eucalyptus, peppermint, frankincense, and cedarwood.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    name: "Mindful Journal",
    description:
      "A guided journal with daily prompts, gratitude pages, and space for reflection to support your mindfulness practice.",
    gradient: "from-primary/30 to-primary/10",
  },
  {
    name: "Meditation Cushion Set",
    description:
      "Supportive floor cushion and matching knee pad for comfortable seated meditation. Filled with organic buckwheat hulls.",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    name: "Ayurvedic Herbal Tea Collection",
    description:
      "Three hand-blended teas — calming, energizing, and detoxifying — made from organic herbs and spices.",
    gradient: "from-primary/25 to-primary/10",
  },
  {
    name: "Wellness Gift Box",
    description:
      "The perfect gift bundle featuring our mat, oil kit, journal, and a handcrafted incense set in a reusable box.",
    gradient: "from-primary/35 to-primary/15",
  },
]

export default function ProductsPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal()
  const { ref: productsRef, isVisible: productsVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[50vh] min-h-[24rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1887&auto=format&fit=crop')",
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
            Curated for You
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="heading-1 text-white max-w-3xl mx-auto"
          >
            Products
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 body-large text-white/80 max-w-xl mx-auto"
          >
            Handpicked wellness essentials curated by The Hope Yoga Wellness Studio to support your practice at home and
            on the go.
          </motion.p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div ref={productsRef}>
          <SectionHeader
            title="Our Collection"
            subtitle="Wellness Essentials"
            description="Explore products thoughtfully chosen to enhance your wellness journey."
            align="center"
          />
        </div>
        <motion.div
          ref={productsRef}
          initial="hidden"
          animate={productsVisible ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product, i) => (
            <motion.div key={product.name} variants={scaleIn} custom={i * 0.1}>
              <Card className="h-full bg-white rounded-xl overflow-hidden group">
                <div
                  className={cn(
                    "h-48 bg-gradient-to-br flex items-center justify-center",
                    product.gradient
                  )}
                >
                  <span className="font-serif text-deep/20 text-lg font-medium">
                    {product.name}
                  </span>
                </div>
                <div className="p-6">
                  <h5 className="heading-5 text-deep mb-2">{product.name}</h5>
                  <p className="body-regular text-text-body mb-6">
                    {product.description}
                  </p>
                  <Link
                    href="#"
                    className={cn(
                      "group/btn inline-flex items-center gap-2 px-5 py-2",
                      "bg-primary text-white rounded-full text-sm font-sans font-medium",
                      "hover:bg-primary-hover transition-all duration-300"
                    )}
                  >
                    Explore
                    <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center transition-colors duration-300 group-hover/btn:bg-white/90">
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </span>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  )
}
