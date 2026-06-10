"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/cn"
import { navigationItems } from "@/lib/navigation-data"

/* ── Mobile Drawer ── */
function MobileDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  const itemAnim = (i: number) => ({
    hidden: { opacity: 0, x: -24 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.6, delay: 0.05 * i } },
  })

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={onClose} />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260, mass: 0.7 }}
            className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-deep/98 backdrop-blur-2xl border-l border-white/5"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/8">
              <div className="rounded-[12px] overflow-hidden border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
                <Image
                  src="/logo.webp"
                  alt="The Hope Yoga Wellness Studio"
                  width={44}
                  height={44}
                  className="h-[40px] w-auto block"
                  priority
                />
              </div>
              <button
                onClick={onClose}
                className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-lg border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 hover:scale-110 active:scale-90 transition-all duration-300"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18" />
                  <path d="M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation items */}
            <div className="px-6 py-2 overflow-y-auto" style={{ maxHeight: "calc(100dvh - 200px)" }}>
              {navigationItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={itemAnim(i)}
                  initial="hidden"
                  animate="visible"
                >
                  {(item.megaMenu || item.dropdown) ? (
                    <div>
                      <button
                        onClick={() => setOpenIdx(openIdx === i ? null : i)}
                        className="flex items-center justify-between w-full py-4 text-base text-white/80 hover:text-white font-sans font-medium transition-colors"
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: openIdx === i ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        >
                          <ChevronDown size={16} className="text-white/40" />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {openIdx === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.6 }}
                            className="overflow-hidden"
                          >
                            <div className="pb-3 space-y-0.5">
                              {(item.megaMenu?.items ?? item.dropdown ?? []).map((drop: { label: string; href: string }, j: number) => (
                                <motion.div
                                  key={drop.label}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ type: "spring", stiffness: 150, damping: 18, delay: 0.03 * j }}
                                >
                                  <Link
                                    href={drop.href}
                                    onClick={onClose}
                                    className="block pl-5 py-3 text-sm text-white/60 hover:text-white border-l border-white/10 hover:border-primary transition-all"
                                  >
                                    {drop.label}
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href} onClick={onClose} className="block py-4 text-base text-white/80 hover:text-white font-sans font-medium transition-colors">
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute bottom-0 left-0 right-0 px-6 pb-10 pt-6 bg-gradient-to-t from-deep via-deep/95 to-transparent"
            >
              <Link
                href="/contact/book-appointment"
                onClick={onClose}
                className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white rounded-full text-sm font-sans font-medium tracking-wide hover:bg-primary-hover hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-lg shadow-primary/20"
              >
                Book Appointment
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* ── Hamburger Icon ── */
function Hamburger({ open }: { open: boolean }) {
  return (
    <div className="relative w-5 h-4">
      <span
        className={cn(
          "absolute left-0 block h-[1.5px] bg-current transition-all duration-500 ease-out",
          open ? "top-1/2 w-full -translate-y-1/2 rotate-45" : "top-0 w-full"
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-1/2 block h-[1.5px] bg-current transition-all duration-500 ease-out",
          open ? "opacity-0 w-0" : "w-[70%]"
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-[1.5px] bg-current transition-all duration-500 ease-out",
          open ? "top-1/2 w-full -translate-y-1/2 -rotate-45" : "bottom-0 w-full"
        )}
      />
    </div>
  )
}

/* ── Navbar ── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href + "/"))

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          scrolled
            ? "bg-white/60 backdrop-blur-2xl shadow-soft"
            : "bg-transparent"
        )}
      >
        <nav className="container-main flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 py-2.5 sm:py-3 flex items-center gap-3">
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={cn(
                "rounded-[14px] overflow-hidden flex-shrink-0 transition-shadow duration-500",
                scrolled
                  ? "shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/5"
                  : "shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-black/5"
              )}
            >
              <Image
                src="/logo.webp"
                alt="The Hope Yoga Wellness Studio"
                width={76}
                height={76}
                className="h-[58px] sm:h-[68px] md:h-[76px] w-auto block"
                priority
              />
            </motion.div>
            <div className="leading-tight">
              <span
                className={cn(
                  "block font-serif text-[0.95rem] sm:text-[1.05rem] md:text-[1.15rem] font-medium tracking-[0.02em] transition-colors duration-500",
                  "text-deep"
                )}
              >
                THE HOPE
              </span>
              <span
                className={cn(
                  "block text-[0.55rem] sm:text-[0.6rem] md:text-[0.65rem] font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-500",
                  "text-text-body"
                )}
              >
                Yoga Wellness Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav — centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 gap-4">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-sans font-medium transition-all duration-300",
                    "backdrop-blur-lg",
                    isActive(item.href)
                      ? scrolled
                        ? "bg-deep text-white border-deep/30 shadow-sm"
                        : "bg-deep text-cream border-deep/30 shadow-sm"
                      : scrolled
                        ? "bg-white/10 text-deep/80 border-white/20 hover:bg-white/20 hover:text-deep"
                        : "bg-deep/5 text-deep/85 border-deep/10 hover:bg-deep/10 hover:text-deep"
                  )}
                >
                  {item.label}
                </Link>

                {item.megaMenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-elevated border border-stroke/40 overflow-hidden min-w-[34rem]">
                      <div className="flex">
                        <div className="w-[13rem] flex-shrink-0 p-7 bg-cream/60">
                          <h4 className="font-serif text-lg font-medium text-deep mb-2">
                            {item.megaMenu.title}
                          </h4>
                          <p className="text-xs text-text-body leading-relaxed">
                            {item.megaMenu.description}
                          </p>
                        </div>
                        <div className="flex-1 p-5">
                          <ul className="space-y-0.5">
                            {item.megaMenu.items.map((drop, j) => (
                              <li key={drop.label}>
                                <Link
                                  href={drop.href}
                                  className="group/menu flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-sans font-medium transition-all duration-300 text-text-body hover:text-deep hover:bg-cream"
                                >
                                  <span>{drop.label}</span>
                                  <ArrowUpRight
                                    size={13}
                                    strokeWidth={1.5}
                                    className="text-primary opacity-0 group-hover/menu:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover/menu:translate-x-0"
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {item.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-400 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/95 backdrop-blur-2xl rounded-2xl shadow-elevated border border-stroke/40 overflow-hidden min-w-[14rem] py-2">
                      {item.dropdown.map((drop, j) => (
                        <Link
                          key={drop.label}
                          href={drop.href}
                          className="group/menu flex items-center justify-between px-5 py-2.5 text-sm font-sans font-medium transition-all duration-300 text-text-body hover:text-deep hover:bg-cream"
                        >
                          <span>{drop.label}</span>
                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.5}
                            className="text-primary opacity-0 group-hover/menu:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover/menu:translate-x-0"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                href="/contact/book-appointment"
                className={cn(
                  "px-7 py-2.5 text-sm font-sans font-medium tracking-wide rounded-full transition-all duration-300 block",
                  scrolled
                    ? "bg-deep text-white hover:bg-deep-800"
                    : "bg-deep text-cream hover:bg-deep-800"
                )}
              >
                Book Appointment
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "relative z-50 lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 active:scale-90",
              mobileOpen
                ? "bg-deep/15 backdrop-blur-lg text-deep border border-deep/20"
                : scrolled
                  ? "bg-deep/10 backdrop-blur-lg text-deep border border-deep/15"
                  : "bg-deep/10 backdrop-blur-lg text-deep border border-deep/15"
            )}
            aria-label="Toggle menu"
          >
            <Hamburger open={mobileOpen} />
          </button>
        </nav>
      </header>

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
