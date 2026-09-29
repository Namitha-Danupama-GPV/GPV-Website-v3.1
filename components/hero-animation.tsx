"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative w-[800px] h-[400px] overflow-hidden rounded-xl bg-blue-50">
      <motion.div
        className="absolute w-20 h-20 rounded-lg bg-blue-200"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 100, 100, 0, 0],
          y: [0, 0, 100, 100, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-16 h-16 rounded-full bg-blue-300"
        initial={{ x: 200, y: 200 }}
        animate={{
          x: [200, 100, 200, 300, 200],
          y: [200, 300, 300, 200, 200],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-24 h-24 rounded-lg bg-blue-400"
        initial={{ x: 300, y: 50 }}
        animate={{
          x: [300, 200, 200, 300, 300],
          y: [50, 50, 150, 150, 50],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-32 h-8 rounded-lg bg-blue-500"
        initial={{ x: 150, y: 150 }}
        animate={{
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute w-12 h-12 rounded-full bg-blue-600"
        initial={{ x: 50, y: 250 }}
        animate={{
          scale: [1, 1.5, 1, 0.5, 1],
          x: [50, 100, 150, 100, 50],
          y: [250, 200, 250, 300, 250],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
