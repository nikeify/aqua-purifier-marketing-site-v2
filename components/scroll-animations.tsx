"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function useScrollAnimation() {
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" },
    )

    // Observe all elements with data-animate attribute
    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return visibleElements
}

export function ScrollAnimations() {
  useEffect(() => {
    // Add smooth scrolling styles to the document
    const style = document.createElement("style")
    style.textContent = `
      [data-animate] {
        will-change: transform, opacity;
      }
      
      .delay-100 { transition-delay: 100ms; }
      .delay-200 { transition-delay: 200ms; }
      .delay-300 { transition-delay: 300ms; }
      .delay-500 { transition-delay: 500ms; }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return null
}

export function ScrollAnimationWrapper({
  children,
  id,
  animation = "fade-up",
  delay = 0,
}: {
  children: React.ReactNode
  id: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right"
  delay?: number
}) {
  const visibleElements = useScrollAnimation()
  const isVisible = visibleElements.has(id)

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-1000 ease-out`
    const delayClass = delay > 0 ? `delay-${delay}` : ""

    switch (animation) {
      case "fade-up":
        return `${baseClasses} ${delayClass} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
      case "fade-in":
        return `${baseClasses} ${delayClass} ${isVisible ? "opacity-100" : "opacity-0"}`
      case "slide-left":
        return `${baseClasses} ${delayClass} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`
      case "slide-right":
        return `${baseClasses} ${delayClass} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`
      default:
        return `${baseClasses} ${delayClass} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
    }
  }

  return (
    <div id={id} data-animate className={getAnimationClasses()}>
      {children}
    </div>
  )
}
