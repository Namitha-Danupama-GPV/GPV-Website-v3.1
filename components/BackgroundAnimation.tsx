"use client"
import React, { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"

export default function TechBackgroundAnimation() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Check for mobile device on component mount only
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Set up event listener for window resize (debounced)
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkMobile, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Use useMemo to generate stable items that don't change on every render
  const { items, animations, colors } = useMemo(() => {
    // Mobile specific generation with fewer items and smaller sizes
    const generateMobileItems = (count: number, sizeRange: [number, number]) => {
      return Array(count).fill(0).map((_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        duration: Math.random() * 2 + 6,
        delay: Math.random() * 3,
        isCircle: Math.random() > 0.5,
        colorType: Math.floor(Math.random() * 3),
        // Pre-calculate animation values for consistency
        offsetX: Math.random() > 0.5 ? 15 : -15,
        offsetY: Math.random() > 0.5 ? 15 : -15
      }));
    };

    const generateDesktopItems = (count: number, sizeRange: [number, number]) => {
      return Array(count).fill(0).map((_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        size: Math.random() * (sizeRange[1] - sizeRange[0]) + sizeRange[0],
        duration: Math.random() * 2 + 5,
        delay: Math.random() * 2,
        isCircle: Math.random() > 0.5,
        colorType: Math.floor(Math.random() * 3),
        // Pre-calculate animation values for consistency
        offsetX: Math.random() > 0.5 ? 25 : -25,
        offsetY: Math.random() > 0.5 ? 25 : -25,
        rotation: Math.random() > 0.5 ? 15 : -15
      }));
    };

    // Generate items based on current mobile state
    const currentItems = isMobile ? {
      large: generateMobileItems(3, [40, 80]),
      medium: generateMobileItems(4, [20, 40]),
      small: generateMobileItems(3, [10, 20])
    } : {
      large: generateDesktopItems(8, [60, 120]),
      medium: generateDesktopItems(10, [30, 60]),
      small: generateDesktopItems(5, [15, 30])
    };

    // Colors
    const colorSets = {
      white: isMobile ? [
        'rgba(255, 255, 255, 0.04)',
        'rgba(245, 245, 245, 0.05)',
        'rgba(240, 240, 240, 0.06)'
      ] : [
        'rgba(255, 255, 255, 0.08)',
        'rgba(245, 245, 245, 0.1)',
        'rgba(240, 240, 240, 0.12)'
      ],
      blue: isMobile ? [
        'rgba(100, 149, 237, 0.04)',
        'rgba(65, 105, 225, 0.05)',
        'rgba(30, 144, 255, 0.06)'
      ] : [
        'rgba(100, 149, 237, 0.08)',
        'rgba(65, 105, 225, 0.1)',
        'rgba(30, 144, 255, 0.12)'
      ],
      green: isMobile ? [
        'rgba(144, 238, 144, 0.04)',
        'rgba(60, 179, 113, 0.05)',
        'rgba(46, 139, 87, 0.06)'
      ] : [
        'rgba(144, 238, 144, 0.08)',
        'rgba(60, 179, 113, 0.1)',
        'rgba(46, 139, 87, 0.12)'
      ]
    };

    const getColor = (type: number, intensity: number) => {
      const intensityIndex = Math.min(Math.floor(intensity * 3), 2);
      switch (type) {
        case 0: return colorSets.white[intensityIndex];
        case 1: return colorSets.blue[intensityIndex];
        case 2: return colorSets.green[intensityIndex];
        default: return colorSets.white[intensityIndex];
      }
    };

    // Animations
    const currentAnimations = isMobile ? {
      large: {
        animate: (item: any) => ({
          x: [`0%`, `${item.offsetX}%`, `0%`],
          y: [`0%`, `${item.offsetY}%`, `0%`],
          scale: [1, 1.03, 1]
        }),
        transition: (duration: number, delay: number) => ({
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut"
        })
      },
      medium: {
        animate: (item: any) => ({
          x: [`0%`, `${item.offsetX * 1.3}%`, `0%`],
          y: [`0%`, `${item.offsetY * 1.3}%`, `0%`]
        }),
        transition: (duration: number, delay: number) => ({
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "linear"
        })
      },
      small: {
        animate: (item: any) => ({
          x: [`0%`, `${item.offsetX * 1.6}%`, `0%`],
          y: [`0%`, `${item.offsetY * 1.6}%`, `0%`]
        }),
        transition: (duration: number, delay: number) => ({
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut"
        })
      }
    } : {
      large: {
        animate: (item: any) => ({
          x: [`0%`, `${item.offsetX}%`, `0%`],
          y: [`0%`, `${item.offsetY}%`, `0%`],
          rotate: item.isCircle ? [0, 0] : [0, item.rotation, 0, -item.rotation, 0],
          scale: [1, 1.05, 0.95, 1]
        }),
        transition: (duration: number, delay: number) => ({
          duration: duration,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut"
        })
      },
      medium: {
        animate: (item: any) => ({
          x: [`0%`, `${item.offsetX * 1.4}%`, `0%`],
          y: [`0%`, `${item.offsetY * 1.4}%`, `0%`],
          rotate: item.isCircle ? [0, 0] : [0, item.rotation * 3, 0, -item.rotation * 3, 0]
        }),
        transition: (duration: number, delay: number) => ({
          duration: duration - 1,
          delay: delay,
          repeat: Infinity,
          ease: "linear"
        })
      },
      small: {
        animate: (item: any) => ({
          x: [`0%`, `${item.offsetX * 1.8}%`, `0%`],
          y: [`0%`, `${item.offsetY * 1.8}%`, `0%`],
          scale: [1, item.isCircle ? 1.2 : 0.9, 1]
        }),
        transition: (duration: number, delay: number) => ({
          duration: duration - 1.5,
          delay: delay,
          repeat: Infinity,
          ease: "easeInOut"
        })
      }
    };

    return {
      items: currentItems,
      animations: currentAnimations,
      colors: { getColor }
    };
  }, [isMobile]); // Only regenerate when isMobile changes

  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large background items */}
      {items.large.map(item => (
        <motion.div
          key={`large-${item.id}`}
          className={`absolute ${item.isCircle ? 'rounded-full' : 'rounded-md'}`}
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            top: `${item.startY}%`,
            left: `${item.startX}%`,
            backgroundColor: colors.getColor(item.colorType, 0.7)
          }}
          animate={animations.large.animate(item)}
          transition={animations.large.transition(item.duration, item.delay)}
        />
      ))}

      {/* Medium items */}
      {items.medium.map(item => (
        <motion.div
          key={`medium-${item.id}`}
          className={`absolute ${item.isCircle ? 'rounded-full' : 'rounded-md'}`}
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            top: `${item.startY}%`,
            left: `${item.startX}%`,
            backgroundColor: colors.getColor(item.colorType, 0.8)
          }}
          animate={animations.medium.animate(item)}
          transition={animations.medium.transition(item.duration, item.delay)}
        />
      ))}

      {/* Small items */}
      {items.small.map(item => (
        <motion.div
          key={`small-${item.id}`}
          className={`absolute ${item.isCircle ? 'rounded-full' : ''}`}
          style={{
            width: `${item.size}px`,
            height: `${item.size}px`,
            top: `${item.startY}%`,
            left: `${item.startX}%`,
            backgroundColor: colors.getColor(item.colorType, 0.9)
          }}
          animate={animations.small.animate(item)}
          transition={animations.small.transition(item.duration, item.delay)}
        />
      ))}

      {/* Additional floating elements - simplified or removed for mobile */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute rounded-full"
            style={{ width: "80px", height: "80px", backgroundColor: colors.getColor(1, 0.8) }}
            initial={{ top: "10%", left: "-5%" }}
            animate={{ 
              left: ["-5%", "105%"], 
              top: ["10%", "60%", "30%", "70%", "10%"] 
            }}
            transition={{ 
              left: { duration: 15, repeat: Infinity, ease: "linear" }, 
              top: { duration: 15, repeat: Infinity, ease: "easeInOut" } 
            }}
          />

          <motion.div
            className="absolute rounded-md"
            style={{ width: "100px", height: "100px", backgroundColor: colors.getColor(2, 0.8) }}
            initial={{ top: "70%", left: "105%" }}
            animate={{ 
              left: ["105%", "-5%"], 
              top: ["70%", "20%", "50%", "30%", "70%"] 
            }}
            transition={{ 
              left: { duration: 18, repeat: Infinity, ease: "linear" }, 
              top: { duration: 18, repeat: Infinity, ease: "easeInOut" } 
            }}
          />
        </>
      )}

      {/* Very subtle grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, ${isMobile ? '0.05' : '0.08'}) 1px, transparent 1px)`,
          backgroundSize: isMobile ? "30px 30px" : "40px 40px",
          opacity: isMobile ? 0.2 : 0.3
        }}
      />
    </div>
  )
}