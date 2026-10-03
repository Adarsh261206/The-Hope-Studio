"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { Award, Users, Heart, Quote } from "lucide-react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function FounderPage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/people/founder.jpg')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <span className="subtitle-text text-white/80 inline-block mb-4">About Us</span>
          <h1 className="heading-1 text-white">Our Founder</h1>
          <p className="mt-4 body-large text-white/80 max-w-2xl mx-auto">
            Akash Bora — Yoga &amp; Wellness Professional · Naturopathist · Yoga Trainer ·
            Health &amp; Wellness Coach
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" ref={ref}>
          <div className="relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/people/founder.jpg')",
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-xl p-6 shadow-soft-lg max-w-[12rem]">
              <span className="text-3xl font-serif font-medium">16+</span>
              <p className="text-xs font-sans text-white/80 mt-1">Years of Experience</p>
            </div>
          </div>

          <div>
            <span className="subtitle-text inline-block mb-4">Founder &amp; Lead Practitioner</span>
            <h2 className="heading-2 text-deep">About Akash Bora</h2>
            <p className="mt-4 body-large text-text-body leading-relaxed">
              Akash Bora is a dedicated Yoga &amp; Wellness Professional, Naturopathist and Yoga
              Trainer with 16+ years of experience in the field of Yoga, holistic wellness,
              nutrition and healthy living.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              Over the years, Akash has guided and trained 10,000+ people, helping them
              incorporate Yoga, movement, mindful living and healthier lifestyle practices into
              their daily lives.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              His journey in Yoga began with a simple belief — true health is not only about
              being physically fit, but about creating balance between the body, mind and
              lifestyle.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              With extensive experience in teaching different styles of Yoga, Akash focuses on
              making Yoga practical, accessible and meaningful for people from different age
              groups and backgrounds. His experience also includes working with corporate
              organizations, schools, colleges, hospitals and government-sector groups, bringing
              wellness practices into different environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact/book-consultation"
                className="group inline-flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300"
              >
                Book a Consultation
                <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-colors duration-300">
                  <ArrowUpRight size={16} strokeWidth={2} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: Award,
              title: "Certified Expertise",
              desc: "Professional learning across Naturopathy, Diet & Nutrition, multiple Yoga courses, Train-the-Trainer programs, Leadership & Management and Spiritual Wellness workshops.",
            },
            {
              icon: Users,
              title: "10,000+ People Guided",
              desc: "Trained people across yoga classes, corporate organizations, schools, colleges, hospitals and government-sector groups over 16+ years.",
            },
            {
              icon: Heart,
              title: "Holistic Approach",
              desc: "Yoga, meditation, nutrition and lifestyle guidance combined with naturopathy — wellness tailored to every individual, never one-size-fits-all.",
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i * 0.1}
                className="bg-white rounded-xl p-6 border border-stroke"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-4">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <h5 className="heading-5 text-deep">{item.title}</h5>
                <p className="mt-2 body-regular text-text-body">{item.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <div className="max-w-3xl mx-auto space-y-14">
          <div>
            <span className="subtitle-text inline-block mb-3">Approach</span>
            <h3 className="heading-3 text-deep">A Holistic Approach to Wellness</h3>
            <p className="mt-4 body-large text-text-body leading-relaxed">
              Akash&rsquo;s approach combines Yoga, meditation, nutrition and lifestyle guidance
              with principles of naturopathy and holistic wellness.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              His professional learning includes Naturopathy, Diet &amp; Nutrition, multiple Yoga
              courses, Train-the-Trainer programs, Leadership &amp; Management and Spiritual
              Wellness workshops.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              He believes that every person has different needs, and therefore wellness should
              not be treated as a one-size-fits-all approach.
            </p>
          </div>

          <div>
            <span className="subtitle-text inline-block mb-3">Beyond Practice</span>
            <h3 className="heading-3 text-deep">Beyond the Yoga Mat</h3>
            <p className="mt-4 body-large text-text-body leading-relaxed">
              For Akash, teaching Yoga is more than conducting a class. It is about understanding
              people, building trust and helping them develop sustainable habits.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              Over the years, he has developed strong skills in communication, leadership,
              customer relationship building, creative work, sales and marketing, alongside his
              wellness expertise.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              This combination of wellness knowledge and people skills has helped him build
              long-term relationships with students and create a supportive learning environment.
            </p>
          </div>

          <div>
            <span className="subtitle-text inline-block mb-3">The Studio</span>
            <h3 className="heading-3 text-deep">Founder – The Hope Yoga Wellness Studio</h3>
            <p className="mt-4 body-large text-text-body leading-relaxed">
              Akash Bora is the founder of The Hope Yoga Wellness Studio, created with a vision
              to bring Yoga, wellness and holistic lifestyle practices under one roof.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              His vision is to create a space where people can learn, transform and make health a
              permanent part of their lifestyle.
            </p>
          </div>

          <div>
            <span className="subtitle-text inline-block mb-3">Philosophy</span>
            <h3 className="heading-3 text-deep">His Philosophy</h3>
            <figure className="mt-6 bg-cream rounded-xl p-8 border-l-4 border-primary shadow-soft">
              <Quote size={24} className="text-primary mb-4" />
              <blockquote className="heading-4 italic text-deep leading-snug">
                &ldquo;Yoga is not just an exercise. It is a way of understanding yourself,
                improving your lifestyle and creating balance in everyday life.&rdquo;
              </blockquote>
            </figure>
            <p className="mt-6 body-large text-text-body leading-relaxed">
              With 16+ years of experience and 10,000+ people guided, Akash Bora continues his
              mission of spreading awareness about Yoga, wellness and conscious living.
            </p>
            <p className="mt-4 body-regular text-text-body leading-relaxed">
              His journey is not simply about teaching Yoga — it is about helping people take one
              step closer to a healthier, happier and more balanced life.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
