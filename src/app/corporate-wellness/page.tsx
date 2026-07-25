"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/section"
import { useScrollReveal, fadeUp, staggerContainer } from "@/hooks/use-scroll-reveal"
import { Building2, Users, Briefcase, Heart, Target, Calendar, Trophy, Leaf, Shield } from "lucide-react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const services = [
  { title: "Corporate Yoga Sessions", icon: Building2 },
  { title: "Desk Yoga for Office Employees", icon: Briefcase },
  { title: "Power Yoga & Fitness Sessions", icon: Target },
  { title: "Stress Management Workshops", icon: Heart },
  { title: "Meditation & Mindfulness Programs", icon: Users },
  { title: "Pranayama (Breathing Techniques)", icon: Leaf },
  { title: "Posture Correction & Back Pain Relief", icon: Shield },
  { title: "Ergonomic Wellness Sessions", icon: Briefcase },
  { title: "Team Building Wellness Activities", icon: Users },
  { title: "International Yoga Day Events", icon: Calendar },
  { title: "Employee Wellness Camps", icon: Trophy },
  { title: "Wellness Seminars & Motivational Sessions", icon: Heart },
]

const benefits = [
  { label: "Reduces workplace stress and burnout" },
  { label: "Improves employee health and fitness" },
  { label: "Enhances focus, productivity, and creativity" },
  { label: "Boosts morale and job satisfaction" },
  { label: "Reduces absenteeism and fatigue" },
  { label: "Encourages teamwork and positive workplace culture" },
  { label: "Improves posture and reduces neck, shoulder, and back pain" },
  { label: "Promotes work-life balance" },
  { label: "Increases employee engagement and retention" },
  { label: "Supports a healthier and more energetic workforce" },
]

export default function CorporateWellnessPage() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <>
      <section className="relative h-[60vh] min-h-[28rem] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1993&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 overlay-hero" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-6"
        >
          <span className="subtitle-text text-white/80 inline-block mb-4">Workplace Wellness</span>
          <h1 className="heading-1 text-white">Corporate Wellness Programs</h1>
          <p className="mt-4 body-large text-white/80 max-w-xl mx-auto">
            Helping organizations build a healthier, happier, and more productive workforce
          </p>
        </motion.div>
      </section>

      <Section className="bg-cream">
        <SectionHeader
          title="Wellness Programs for Organizations"
          subtitle="Our Approach"
          description="At The Hope Yoga Wellness Studio, we offer professionally designed Corporate Wellness Programs to help organizations build a healthier, happier, and more productive workforce."
        />

        <div className="prose prose-lg max-w-3xl mx-auto mb-16">
          <p className="body-large text-text-body leading-relaxed">
            Our customized wellness sessions are conducted at corporate offices, business parks, educational institutions, hotels, event venues, or any preferred location. Our programs are designed to reduce workplace stress, improve employee well-being, and create a positive work environment through yoga, meditation, breathing techniques, and wellness education.
          </p>
        </div>

        <SectionHeader
          title="Our Corporate Wellness Services"
          subtitle="What We Offer"
        />
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
        >
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                custom={i * 0.03}
                className="bg-white rounded-xl p-5 shadow-soft flex items-center gap-4"
              >
                <span className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center flex-shrink-0">
                  <Icon size={20} strokeWidth={1.5} />
                </span>
                <p className="body-regular text-text-body font-medium">{service.title}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </Section>

      <Section className="bg-white">
        <SectionHeader
          title="Benefits for Your Organization"
          subtitle="Why Choose Us"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mt-10">
          {benefits.map((b, i) => (
            <div key={b.label} className="flex items-start gap-3 body-regular text-text-body bg-cream rounded-xl p-5">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
              {b.label}
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-cream">
        <div className="max-w-3xl mx-auto text-center bg-white rounded-2xl p-10 border border-stroke">
          <h3 className="heading-3 text-deep">Why Choose The Hope Yoga Wellness Studio?</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              "Certified and experienced yoga instructors",
              "Customized programs based on your organization's needs",
              "Sessions available at your office or our wellness studio",
              "Flexible scheduling (daily, weekly, monthly, or one-time events)",
              "Suitable for employees of all ages and fitness levels",
              "Professional, engaging, and result-oriented wellness programs",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 body-regular text-text-body">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-stroke">
            <h4 className="heading-4 text-deep">Partner With Us</h4>
            <p className="mt-4 body-large text-text-body max-w-xl mx-auto">
              Invest in your employees&apos; health and create a workplace where people can perform at their best. Whether you&apos;re planning a Corporate Wellness Program, Annual Wellness Event, International Yoga Day Celebration, Team Building Activity, or Employee Health Camp, The Hope Yoga Wellness Studio is your trusted wellness partner.
            </p>
            <p className="mt-4 body-large text-primary font-medium">
              Empower Your Team. Enhance Productivity. Build a Healthier Workplace.
            </p>
            <Link
              href="/contact/book-consultation"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-base font-sans font-medium hover:bg-primary-hover transition-all duration-300 mt-8"
            >
              Book a Consultation
              <span className="w-[2.125rem] h-[2.125rem] rounded-full bg-white text-primary flex items-center justify-center group-hover:bg-white/90 transition-all duration-300">
                <ArrowUpRight size={16} strokeWidth={2} />
              </span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
