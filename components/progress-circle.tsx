// components/progress-circle.tsx
"use client"

import { useState, useEffect } from "react"

export function ProgressCircle() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Calculate scroll progress and visibility
  useEffect(() => {
    const handleScroll = () => {
      // Make progress circle visible after scrolling a bit
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Calculate scroll percentage
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      
      // Calculate scroll percentage, considering visible viewport
      const scrollableHeight = documentHeight - windowHeight
      const currentProgress = scrollTop / scrollableHeight

      // Ensure progress is between 0 and 1
      setScrollProgress(Math.min(Math.max(currentProgress, 0), 1))
    }

    window.addEventListener("scroll", handleScroll)
    // Run once on mount to set initial state
    handleScroll()
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  // Calculate the circle properties
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - scrollProgress)

  return (
    <div
      className={`fixed bottom-8 right-8 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="Scroll to top"
      >
        <div className="relative flex items-center justify-center w-full h-full">
          {/* Background circle (light blue-gray) */}
          <svg
            className="w-10 h-10 absolute text-blue-100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
            />
          </svg>
          
          {/* Progress circle (blue-to-teal gradient) */}
          <svg
            className="w-10 h-10 absolute -rotate-90 transform origin-center"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3366FF" />
                <stop offset="100%" stopColor="#2A9D8F" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="stroke-dashoffset-transition"
            />
          </svg>
          
          {/* Arrow icon */}
          <svg
            className="w-4 h-4 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>
      </button>
    </div>
  )
}