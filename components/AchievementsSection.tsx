"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Trophy, Award, Newspaper, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface PressArticle {
  id: string;
  badge: string;
  title: string;
  publisher: string;
  date: string;
  description: string;
  articleUrl: string;
  featured?: boolean;
  image?: string;
  imagePosition?: "left" | "right";
}

const defaultArticles: PressArticle[] = [
  {
    id: "national-ict-bronze-2026",
    badge: "National ICT Awards Trust 2026",
    title: "GLOBAL PEARL VENTURES WINS AT NATIONAL ICT AWARDS 2026",
    publisher: "Health and Well-being in Inclusions & Community Services Category",
    date: "2026",
    description:
      "Global Pearl Ventures achieved a landmark national victory by winning at the prestigious National ICT Awards Trust 2026. Recognized for breakthrough technology innovation in the Health and Well-being in Inclusions and Community Services Category, this honor highlights GPV's commitment to building impactful, enterprise-grade digital solutions for healthcare and community wellness.",
    articleUrl: "https://www.globalpearlventures.com",
    featured: true,
    image: "/Award1.jpeg",
    imagePosition: "left",
  },
  {
    id: "national-ict-startup-2026",
    badge: "Special Recognition Certificate 2026",
    title: "SPECIAL MENTION RECOGNITION IN START-UP OF THE YEAR CATEGORY",
    publisher: "Start-Up of the Year Category • National ICT Awards Trust",
    date: "2026",
    description:
      "In addition to top honors in Health & Well-being, Global Pearl Ventures received an official Special Mention Certificate in the highly competitive Start-Up of the Year Category at the National ICT Awards Trust 2026. This prestigious recognition underscores GPV's rapid organizational scaling, engineering excellence, and pioneering leadership in software development.",
    articleUrl: "https://www.globalpearlventures.com",
    featured: false,
    image: "/Award2.jpeg",
    imagePosition: "right",
  },
];

interface AchievementsSectionProps {
  articles?: PressArticle[];
  className?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
  }),
};

export default function AchievementsSection({
  articles = defaultArticles,
  className = "",
}: AchievementsSectionProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex = Math.abs(page % articles.length);
  const currentArticle = articles[currentIndex];

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  // Auto-play slideshow every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused || articles.length <= 1) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 7000);

    return () => clearInterval(timer);
  }, [page, isPaused, articles.length]);

  const isLeftImage = currentArticle.imagePosition === "left" || currentIndex % 2 === 0;

  return (
    <section className={`w-full py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-slate-800 ${className}`}>
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-4 mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,102,0.15)]">
            <Trophy className="h-3.5 w-3.5 text-emerald-400" />
            Achievements & Recognition
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            National ICT Awards{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
              Trust 2026
            </span>
          </h2>

          <p className="max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Celebrating our official milestone victories and national recognition in technology leadership and innovation.
          </p>
        </div>

        {/* Animated Slide Show Container */}
        <div
          className="relative min-h-[480px] sm:min-h-[440px] flex items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.35 },
              }}
              className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${isLeftImage ? "lg:order-1" : "lg:order-2"}`}
              >
                <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/60 p-3 shadow-2xl group transition-all duration-500 hover:border-emerald-500/40">
                  {currentArticle.image && (
                    <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={currentArticle.image}
                        alt={currentArticle.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-700 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                      {currentArticle.featured ? "Winner 🏆" : "Special Recognition 📜"}
                    </span>
                    <span className="text-xs font-semibold text-slate-300 bg-slate-950/70 px-2.5 py-0.5 rounded-full border border-slate-800">
                      0{currentIndex + 1} / 0{articles.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center space-y-6 text-left ${isLeftImage ? "lg:order-2" : "lg:order-1"
                  }`}
              >
                <div>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
                    <Award className="h-3.5 w-3.5 text-emerald-400" />
                    {currentArticle.badge}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white leading-tight uppercase">
                    {currentArticle.title}
                  </h3>
                </div>

                <div className="pb-2 border-b border-slate-800">
                  <p className="text-sm sm:text-base font-semibold text-emerald-400 flex items-center gap-2">
                    <Newspaper className="h-4 w-4 text-emerald-400" />
                    <span>{currentArticle.publisher}</span>
                  </p>
                </div>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {currentArticle.description}
                </p>

                <div className="pt-2">
                  <a
                    href={currentArticle.articleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-emerald-400 transition-colors group cursor-pointer"
                  >
                    <span>Read more</span>
                    <span className="text-emerald-400 font-bold transition-transform group-hover:translate-x-1.5">
                      »
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Show Controls & Indicators */}
        <div className="flex items-center justify-between pt-8 border-t border-slate-800/80">
          {/* Pagination Dots */}
          <div className="flex items-center gap-3">
            {articles.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const newDir = idx > currentIndex ? 1 : -1;
                  setPage([idx, newDir]);
                }}
                className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${idx === currentIndex
                    ? "w-8 bg-gradient-to-r from-emerald-400 to-teal-400 shadow-[0_0_12px_rgba(0,255,102,0.5)]"
                    : "w-2.5 bg-slate-700 hover:bg-slate-500"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer shadow-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-emerald-500/50 transition-all cursor-pointer shadow-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
