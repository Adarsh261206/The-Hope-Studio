"use client"

import { useRef, useEffect, useState } from "react"

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
  delay?: number
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -60px 0px",
  once = true,
  delay = 0,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          if (once) observer.unobserve(element)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once, delay])

  return { ref, isVisible }
}

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

const anim = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease },
  }),
}

const animIn = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const scaleAnim = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay, ease },
  }),
}

const slideL = {
  hidden: { opacity: 0, x: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease },
  }),
}

const slideR = {
  hidden: { opacity: 0, x: -40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay, ease },
  }),
}

const clipR = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: (delay: number = 0) => ({
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.8, delay, ease },
  }),
}

export { anim as fadeUp, animIn as fadeIn, stagger as staggerContainer, scaleAnim as scaleIn, slideL as slideLeft, slideR as slideRight, clipR as clipReveal }
