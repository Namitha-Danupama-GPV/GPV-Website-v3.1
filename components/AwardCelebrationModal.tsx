"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles, X, Award, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import Image from "next/image";

interface AwardCelebrationModalProps {
  /** Optional override to force show modal for testing */
  forceShow?: boolean;
}

const awardShowcaseImages = [
  {
    src: "/Team_collaboration.png",
    alt: "GPV Team Celebration",
    caption: "Team Excellence",
  },
  {
    src: "/about_us_hero.png",
    alt: "Global Pearl Headquarters",
    caption: "Global Headquarters",
  },
  {
    src: "/Five_industries.jpeg",
    alt: "Industry Innovation Showcase",
    caption: "Industry Recognition",
  },
];

// Module-scoped flag: resets on browser refresh / hard load, persists across client SPA navigation
let hasAppLoadedOnceInJS = false;

export default function AwardCelebrationModal({ forceShow = false }: AwardCelebrationModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const confettiIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Random colorful confetti pop generator
  const fireRandomBurst = () => {
    const burstPositions = [
      { x: 0.15, y: 0.25 }, // Top-Left
      { x: 0.85, y: 0.25 }, // Top-Right
      { x: 0.15, y: 0.75 }, // Bottom-Left
      { x: 0.85, y: 0.75 }, // Bottom-Right
      { x: 0.5, y: 0.4 },  // Center
    ];

    const randomPos = burstPositions[Math.floor(Math.random() * burstPositions.length)];

    confetti({
      particleCount: Math.floor(Math.random() * 40) + 30,
      startVelocity: Math.floor(Math.random() * 25) + 30,
      spread: Math.floor(Math.random() * 50) + 60,
      origin: randomPos,
      colors: ["#F59E0B", "#3B82F6", "#8B5CF6", "#10B981", "#EC4899", "#F43F5E", "#FFFFFF"],
      disableForReducedMotion: true,
    });
  };

  const fireInitialGrandConfetti = () => {
    const count = 180;
    const defaults = {
      origin: { y: 0.6 },
      colors: ["#F59E0B", "#3B82F6", "#8B5CF6", "#10B981", "#EC4899", "#FFFFFF"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isInitialOrPageRefresh = !hasAppLoadedOnceInJS;
    hasAppLoadedOnceInJS = true;

    if (isInitialOrPageRefresh || forceShow) {
      const openTimer = setTimeout(() => {
        setIsOpen(true);
        setIsMinimized(false);
        fireInitialGrandConfetti();
      }, 600);

      return () => clearTimeout(openTimer);
    } else {
      // Internal client-side navigation: do not auto-popup, keep minimized glowing badge available
      setIsMinimized(true);
    }
  }, [forceShow]);

  // Setup 30s Countdown and 3s Confetti Loop when modal is open
  useEffect(() => {
    if (!isOpen) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (confettiIntervalRef.current) clearInterval(confettiIntervalRef.current);
      return;
    }

    // Reset countdown to 30s
    setTimeLeft(30);
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsOpen(false);
          setIsMinimized(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // 3-second colorful random confetti burst loop
    confettiIntervalRef.current = setInterval(() => {
      fireRandomBurst();
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (confettiIntervalRef.current) clearInterval(confettiIntervalRef.current);
    };
  }, [isOpen]);

  const handleClose = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (confettiIntervalRef.current) clearInterval(confettiIntervalRef.current);
    setIsOpen(false);
    setIsMinimized(true);
  };

  const handleOpenFromMinimized = () => {
    setIsMinimized(false);
    setIsOpen(true);
    fireInitialGrandConfetti();
  };

  return (
    <>
      {/* ── Floating Glowing Award Badge Icon (Minimized State) ── */}
      <AnimatePresence>
        {isMinimized && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="fixed bottom-24 right-8 z-[90]"
          >
            <button
              onClick={handleOpenFromMinimized}
              className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-950/90 border border-amber-400/80 text-white shadow-[0_0_25px_rgba(245,158,11,0.5)] hover:shadow-[0_0_35px_rgba(245,158,11,0.8)] backdrop-blur-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
              aria-label="View Award Announcement"
            >
              {/* Glowing Pulse Ring */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 opacity-40 blur-md animate-pulse group-hover:opacity-75 transition-opacity" />

              <div className="relative z-10 flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-bold shadow-md">
                <Trophy className="h-4 w-4 animate-bounce" />
              </div>

              <div className="relative z-10 flex flex-col text-left pr-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest leading-tight">
                  Award Winner
                </span>
                <span className="text-xs font-extrabold text-white leading-tight">
                  Global Victory 2026 🎉
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full Award Celebration Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-hidden">
            {/* Dark Glass Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleClose}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-lg"
            />

            {/* Laptop-Optimized Modal Window - Scrollbars Removed Completely */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              className="relative w-full max-w-4xl max-h-[92vh] overflow-x-hidden overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 border border-amber-500/40 p-5 sm:p-8 md:p-10 text-white shadow-[0_0_80px_rgba(245,158,11,0.28)] z-10"
            >
              {/* Vibrant Background Shimmer Accents */}
              <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />

              {/* Top Bar: Countdown Badge & Dismiss Button */}
              <div className="flex items-center justify-between mb-3 relative z-20">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide">
                  <Clock className="h-3.5 w-3.5 text-amber-400" />
                  <span>Auto-closing in <strong className="text-amber-200 font-bold">{timeLeft}s</strong></span>
                </div>

                <button
                  onClick={handleClose}
                  className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Minimize celebration modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Main Header Content */}
              <div className="text-center relative z-10 mb-6">
                {/* Trophy Badge */}
                <div className="mx-auto mb-3 relative inline-flex items-center justify-center">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 opacity-40 blur-lg animate-pulse" />
                  <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 p-1 shadow-2xl flex items-center justify-center">
                    <div className="h-full w-full rounded-full bg-slate-950 flex items-center justify-center">
                      <Trophy className="h-10 w-10 sm:h-12 sm:w-12 text-amber-400 animate-bounce" />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow-xl">
                    <Sparkles className="h-4 w-4 fill-current" />
                  </div>
                </div>

                {/* Tag Header */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-3">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  Official Award Victory
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight">
                  Honored with Global Excellence Award 2026!
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm font-semibold text-amber-400 uppercase tracking-widest mb-3">
                  Recognized for Breakthrough Innovation in AI & Enterprise Software
                </p>

                {/* Main Message */}
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Global Pearl Ventures has officially received top honors for technology leadership, scalable AI integration, and digital transformation. A heartfelt thank you to our team, clients, and partners worldwide!
                </p>
              </div>

              {/* Bottom Gallery Showcase: 3 Real Images */}
              <div className="relative z-10 mb-6">
                <div className="text-center mb-2.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Highlights & Milestone Moments
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {awardShowcaseImages.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-slate-900/60 shadow-md transition-all duration-300 hover:border-amber-400 hover:shadow-amber-500/20"
                    >
                      <div className="relative h-28 sm:h-32 w-full overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                      </div>
                      <div className="absolute bottom-2 left-3 right-3 text-left">
                        <span className="text-[11px] font-bold text-amber-300 drop-shadow-md">
                          {img.caption}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Footer Bar */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Live Celebration Mode Active</span>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-sm hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Explore Site ({timeLeft}s)</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
