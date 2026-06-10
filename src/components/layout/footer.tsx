import Image from "next/image"
import Link from "next/link"
import { MessageCircle, ArrowUpRight } from "lucide-react"
import { whatsappUrl, WHATSAPP_MESSAGES } from "@/lib/whatsapp"

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Yoga Programs", href: "/yoga" },
  { label: "Treatments", href: "/treatments" },
  { label: "Corporate Wellness", href: "/corporate-wellness" },
  { label: "Contact", href: "/contact" },
]

const resourceLinks = [
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQs", href: "/resources/faqs" },
  { label: "Blog", href: "/resources/blog" },
  { label: "Events", href: "/resources/events" },
]

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Twitter", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-deep text-white overflow-hidden">
      <div className="container-main">
        <div className="pt-20 pb-28 md:pt-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="max-w-[24.375rem]">
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.webp"
                  alt="The Hope Yoga Wellness Studio"
                  width={60}
                  height={60}
                  className="h-[50px] sm:h-[55px] w-auto"
                  priority
                />
              </Link>
              <div className="mt-4 space-y-1">
                <p className="text-sm font-sans font-medium text-white/90">Founded by: Aakash Bora</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/60 font-sans">
                  <span>11+ Years Experience</span>
                  <span>8500+ Lives Impacted</span>
                </div>
              </div>
              <p className="mt-4 body-regular text-white/70 leading-relaxed text-sm">
                Yoga &bull; Wellness &bull; Naturopathy &bull; Holistic Healing
              </p>

              <div className="flex items-center gap-3 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center text-white/80 hover:bg-primary-hover hover:text-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <span className="text-xs font-sans font-medium">{social.label.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="max-w-[28rem]">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-sans font-medium text-sm mb-4">
                    Navigation
                  </h4>
                  <ul className="space-y-3">
                    {navigationLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="body-regular text-white/80 hover:text-primary-hover transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-sans font-medium text-sm mb-4">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    {resourceLinks.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="body-regular text-white/80 hover:text-primary-hover transition-colors duration-300"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="max-w-[20.375rem]">
              <h4 className="text-white font-sans font-medium text-sm mb-4">
                Connect With Us
              </h4>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.enquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-5 py-3.5 bg-[#25D366] text-white rounded-full text-sm font-sans font-medium hover:bg-[#20bd5a] transition-all duration-300 shadow-[0_4px_16px_rgba(37,211,102,0.25)] mb-6"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Us</span>
                <ArrowUpRight
                  size={14}
                  strokeWidth={2}
                  className="ml-auto transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <h4 className="text-white font-sans font-medium text-sm mb-4">
                Newsletter
              </h4>
              <p className="body-regular text-white/80 mb-6">
                Stay connected with the latest wellness insights, workshop updates, and holistic living tips.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-white/80 pb-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-primary-hover transition-colors"
                />
                <button
                  type="button"
                  className="w-full bg-primary text-white rounded-full py-3.5 px-6 text-sm font-sans font-medium overflow-hidden group hover:bg-primary-hover transition-colors duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Subscribe
                    <span className="text-lg">&rarr;</span>
                  </span>
                </button>
              </div>
              <p className="text-[0.625rem] text-white/60 mt-4 leading-relaxed">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-main py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
            <span>&copy; 2026 The Hope Yoga Wellness Studio</span>
            <span className="hidden md:inline">·</span>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={whatsappUrl(WHATSAPP_MESSAGES.appointment)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <MessageCircle size={12} />
              Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
