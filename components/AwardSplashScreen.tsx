"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Sparkles, X, Award, Clock } from "lucide-react";
import confetti from "canvas-confetti";
import dynamic from "next/dynamic";
import MatrixRainBackground from "./MatrixRainBackground";

const Trophy3DRenderer = dynamic(() => import("./Trophy3DRenderer"), {
  ssr: false,
});

interface AwardSplashScreenProps {
  /** Optional override to force show modal for testing */
  forceShow?: boolean;
}

// Module-scoped flag: resets on browser refresh / hard load, persists across client SPA navigation
let hasAppLoadedOnceInJS = false;

export default function AwardSplashScreen({ forceShow = false }: AwardSplashScreenProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fireGrandConfetti = () => {
    const count = 180;
    const defaults = {
      origin: { y: 0.6 },
      colors: ["#00FF66", "#F59E0B", "#3B82F6", "#8B5CF6", "#10B981", "#FFFFFF"],
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
        fireGrandConfetti();
      }, 400);

      return () => clearTimeout(openTimer);
    } else {
      setIsMinimized(true);
    }
  }, [forceShow]);

  // 10-second countdown timer
  useEffect(() => {
    if (!isOpen) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    setTimeLeft(10);
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

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isOpen]);

  const handleClose = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsOpen(false);
    setIsMinimized(true);
  };

  const handleOpenFromMinimized = () => {
    setIsMinimized(false);
    setIsOpen(true);
    fireGrandConfetti();
  };

  return (
    <>
      {/* ── Minimized Floating Glowing Award Badge (Bottom Right) ── */}
      <AnimatePresence>
        {isMinimized && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="fixed bottom-20 sm:bottom-24 right-4 sm:right-8 z-[90] max-w-[calc(100vw-2rem)]"
          >
            <button
              onClick={handleOpenFromMinimized}
              className="group relative flex items-center gap-2.5 sm:gap-3 p-2 sm:px-4 sm:py-2.5 rounded-full bg-slate-950/90 border border-emerald-400/70 text-white shadow-[0_0_25px_rgba(0,255,102,0.4)] hover:shadow-[0_0_35px_rgba(0,255,102,0.7)] backdrop-blur-md transition-all duration-300 transform hover:scale-110 cursor-pointer"
              aria-label="View Award Announcement"
            >
              {/* Glowing Green/Gold Pulse Ring */}
              <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-amber-500 opacity-45 blur-md animate-pulse group-hover:opacity-80 transition-opacity" />

              <div className="relative z-10 flex items-center justify-center h-8 w-8 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 font-bold shadow-md">
                <Trophy className="h-4 w-4 animate-bounce" />
              </div>

              {/* Text hidden on mobile (< sm), shown on tablet & desktop (sm:flex) */}
              <div className="relative z-10 hidden sm:flex flex-col text-left pr-1">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest leading-tight">
                  National ICT Award 2026
                </span>
                <span className="text-xs font-extrabold text-white leading-tight">
                  Winner 🏆
                </span>
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full-Screen Matrix Digital Rain Splash Screen ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 text-white overflow-hidden"
          >
            {/* 60fps Matrix Binary Rain Canvas */}
            <MatrixRainBackground color="#00FF66" fontSize={16} speed={30} />

            {/* Dark Vignette Radial Overlay */}
            <div className="absolute inset-0 bg-radial from-transparent via-slate-950/70 to-slate-950/95 pointer-events-none z-10" />

            {/* Skip / Close Top Controls */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2 sm:gap-4">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/40 text-emerald-400 text-[11px] sm:text-xs font-semibold backdrop-blur-md shadow-lg">
                <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400 animate-spin-slow" />
                <span>Auto-continuing in <strong className="text-white font-bold">{timeLeft}s</strong></span>
              </div>

              <button
                onClick={handleClose}
                className="rounded-full p-2 sm:p-2.5 bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors backdrop-blur-md cursor-pointer"
                aria-label="Skip splash screen"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Main 2-Column Split Splash Layout */}
            <div className="relative z-20 container mx-auto px-4 sm:px-12 max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-center min-h-screen py-20 md:py-16 overflow-y-auto no-scrollbar">
              
              {/* Left Column: Award Image with Breathing Motion */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="md:col-span-5 flex justify-center items-center relative"
              >
                <div className="relative w-full flex items-center justify-center">
                  {/* Expanded Glowing Emerald Aura */}
                  <div className="absolute -inset-8 sm:-inset-12 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-amber-500 opacity-35 blur-3xl animate-pulse pointer-events-none" />

                  {/* 3D Rotating Model Canvas (COMMENTED OUT FOR FUTURE USE) */}
                  {/*
                  <Trophy3DRenderer modelPath="/arunangshubanerjee-battery-1795.glb" className="w-full h-[500px] sm:h-[620px] md:h-[700px]" />
                  */}

                  {/* Static Award Splash Screen Image with Breathing Motion */}
                  <motion.img
                    src="/award splash screen 3.png"
                    alt="National ICT Award 2026 Winner"
                    animate={{
                      scale: [1, 1.06, 1],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[480px] md:max-w-[580px] h-auto object-contain relative z-10 filter drop-shadow-[0_0_30px_rgba(0,255,102,0.45)]"
                  />
                </div>
              </motion.div>

              {/* Right Column: Victory Announcement & Details */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="md:col-span-7 flex flex-col text-left space-y-3 sm:space-y-6"
              >
                <div>
                  <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-[10px] sm:text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-2 sm:mb-4 shadow-[0_0_20px_rgba(0,255,102,0.2)]">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                    National ICT Awards Trust 2026
                  </span>

                  <h1 className="text-2xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-snug sm:leading-tight">
                    Winner in{" "}
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                      Health & Well-Being!
                    </span>
                  </h1>
                </div>

                <p className="text-xs sm:text-lg font-semibold text-emerald-400 uppercase tracking-wider sm:tracking-widest">
                  Inclusions and Community Services Category
                </p>

                <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Global Pearl Ventures has been officially awarded Winner by the National ICT Awards Trust 2026 for outstanding innovation in the Health and Well-being in Inclusions and Community Services Category.
                </p>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
