"use client";

import BackgroundAnimation from "@/components/BackgroundAnimation";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Film,
  ArrowDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductsPage() {
  const dentaxRef = useRef<HTMLElement>(null);
  const photonxrRef = useRef<HTMLElement>(null);
  const voxaRef = useRef<HTMLElement>(null);
  const connexaRef = useRef<HTMLElement>(null);
  const localProfessionalRef = useRef<HTMLElement>(null);
  const educoreRef = useRef<HTMLElement>(null);
  const aeromanageRef = useRef<HTMLElement>(null);
  const msoRef = useRef<HTMLElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      const yOffset = -80;
      const y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const productsList = [
    {
      id: "dentax",
      name: "Dentax",
      category: "Healthcare & Clinic Management",
      tagline:
        "Role-based Dental Practice Management System designed to streamline & digitalize modern dental operations.",
      logo: "/dentaxLogo.png",
      ref: dentaxRef,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentBorder: "border-emerald-300 hover:border-emerald-500",
      glowBg: "from-emerald-500/10 via-teal-500/5 to-transparent",
      btnBg: "bg-emerald-600 hover:bg-emerald-700",
    },
    {
      id: "photonxr",
      name: "Photon XR",
      category: "Radiology & Medical Imaging",
      tagline:
        "Next-generation web-based DICOM Viewer & Radiological Information System (RIS) hosted on Microsoft Azure.",
      logo: "/photonXRLogo.png",
      ref: photonxrRef,
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      accentBorder: "border-purple-300 hover:border-purple-500",
      glowBg: "from-purple-500/10 via-indigo-500/5 to-transparent",
      btnBg: "bg-purple-600 hover:bg-purple-700",
    },
    {
      id: "voxa",
      name: "Voxa",
      category: "Voice AI & Communications",
      tagline:
        "Intelligent voice & conversation AI engine optimizing customer support and automated call analytics.",
      logo: "/voxaLogo.png",
      ref: voxaRef,
      badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      accentBorder: "border-cyan-300 hover:border-cyan-500",
      glowBg: "from-cyan-500/10 via-blue-500/5 to-transparent",
      btnBg: "bg-cyan-600 hover:bg-cyan-700",
    },
    {
      id: "localProfessional",
      name: "Local Professional Direct",
      category: "Services Marketplace",
      tagline:
        "Direct marketplace connecting verified local service professionals with clients for seamless booking.",
      logo: "/localProfessionalDirectLogo.png",
      ref: localProfessionalRef,
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accentBorder: "border-indigo-300 hover:border-indigo-500",
      glowBg: "from-indigo-500/10 via-blue-500/5 to-transparent",
      btnBg: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      id: "educore",
      name: "EduCore",
      category: "Education Technology",
      tagline:
        "Unified learning management & campus operations platform empowering students, faculty, and administration.",
      logo: "/educoreLogo.png",
      ref: educoreRef,
      badgeColor: "bg-rose-50 text-rose-700 border-rose-200",
      accentBorder: "border-rose-300 hover:border-rose-500",
      glowBg: "from-rose-500/10 via-pink-500/5 to-transparent",
      btnBg: "bg-rose-600 hover:bg-rose-700",
    },
    {
      id: "connexa",
      name: "Connexa",
      category: "Enterprise Integration",
      tagline:
        "High-performance enterprise integration hub bridging legacy systems with cloud data workflows.",
      logo: "/connexaLogo.png",
      ref: connexaRef,
      badgeColor: "bg-teal-50 text-teal-700 border-teal-200",
      accentBorder: "border-teal-300 hover:border-teal-500",
      glowBg: "from-teal-500/10 via-emerald-500/5 to-transparent",
      btnBg: "bg-teal-600 hover:bg-teal-700",
    },
    {
      id: "mso",
      name: "MSO Sequoia",
      category: "Multi-Specialty Healthcare",
      tagline:
        "Comprehensive multi-specialty healthcare platform optimizing clinical workflows and patient care.",
      logo: "/MSOLogo.png",
      ref: msoRef,
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentBorder: "border-emerald-300 hover:border-emerald-500",
      glowBg: "from-emerald-500/10 via-teal-500/5 to-transparent",
      btnBg: "bg-emerald-700 hover:bg-emerald-800",
    },
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % productsList.length);
  }, [productsList.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + productsList.length) % productsList.length);
  }, [productsList.length]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying, handleNext]);

  const currentProduct = productsList[activeIndex];
  const prevIndex = (activeIndex - 1 + productsList.length) % productsList.length;
  const nextIndex = (activeIndex + 1) % productsList.length;

  const prevProd = productsList[prevIndex];
  const nextProd = productsList[nextIndex];

  return (
    <div className="bg-white text-gray-900">
      {/* ── Our Products Hero Section ── */}
      <section className="relative text-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-gray-100">
        <BackgroundAnimation />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto z-10"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Our Software Products
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-[1.15]">
            Empowering Industries with{" "}
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Innovative Solutions
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            Global Pearl Ventures (GPV) provides innovative, secure, and scalable
            technology solutions tailored to help businesses succeed in the
            digital age.
          </p>

          {/* ── Light Quick Brand Selector Pills ── */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
            {productsList.map((prod, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={prod.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg scale-105 ring-2 ring-blue-400/40"
                      : "bg-white text-gray-700 hover:bg-slate-100 border border-gray-200/80 hover:text-gray-900 shadow-sm"
                  }`}
                >
                  <div className="relative w-4 h-4 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
                    <Image
                      src={prod.logo}
                      alt={prod.name}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                  </div>
                  <span>{prod.name}</span>
                </button>
              );
            })}
          </div>

          {/* ── Clean Light Spotlight Stage Container ── */}
          <div
            className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-blue-50/40 via-slate-50/30 to-white border border-gray-200/80 shadow-xl p-6 sm:p-10 overflow-hidden"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Navigation Button: Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 border border-gray-200/80 text-gray-700 shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 hover:scale-110 active:scale-95 group cursor-pointer"
              aria-label="Previous Product"
            >
              <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Navigation Button: Next */}
            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/90 border border-gray-200/80 text-gray-700 shadow-md hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200 hover:scale-110 active:scale-95 group cursor-pointer"
              aria-label="Next Product"
            >
              <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Cards Stage (3D Coverflow Reel View) */}
            <div className="relative w-full flex items-center justify-center gap-4 sm:gap-8 z-20 min-h-[360px]">
              {/* ── Left Preview Card ── */}
              <motion.div
                key={`prev-${prevProd.id}`}
                onClick={handlePrev}
                initial={{ opacity: 0.5, scale: 0.8, x: -40 }}
                animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="hidden md:flex flex-col items-center justify-between p-5 rounded-2xl bg-white/80 border border-gray-200/80 shadow-sm cursor-pointer hover:opacity-90 hover:scale-90 hover:shadow-md transition-all w-48 h-64 shrink-0 select-none"
              >
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">PREVIOUS</span>
                <div className="h-24 w-full flex items-center justify-center p-2 rounded-xl bg-slate-50/80">
                  <Image
                    src={prevProd.logo}
                    alt={prevProd.name}
                    width={80}
                    height={80}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
                <h4 className="text-gray-800 font-semibold text-sm text-center line-clamp-1">{prevProd.name}</h4>
              </motion.div>

              {/* ── Center Active Spotlight Card ── */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProduct.id}
                  initial={{ opacity: 0, scale: 0.92, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: -12 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200/80 flex flex-col items-center text-center relative z-20"
                >
                  {/* Category Pill */}
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold border ${currentProduct.badgeColor} mb-4`}>
                    <Sparkles className="h-3 w-3" />
                    {currentProduct.category}
                  </span>

                  {/* Logo Spotlight */}
                  <div className="h-28 w-full max-w-xs flex items-center justify-center p-4 rounded-2xl bg-slate-50/80 border border-gray-100 mb-5 shadow-inner">
                    <Image
                      src={currentProduct.logo}
                      alt={currentProduct.name}
                      width={140}
                      height={140}
                      className="object-contain max-h-20 w-auto transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {currentProduct.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mb-6">
                    {currentProduct.tagline}
                  </p>

                  {/* Action Jump Button */}
                  <button
                    onClick={() => scrollToSection(currentProduct.ref)}
                    className={`inline-flex items-center gap-2 ${currentProduct.btnBg} text-white font-semibold text-sm px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer`}
                  >
                    <span>Explore {currentProduct.name}</span>
                    <ArrowDown className="h-4 w-4 animate-bounce" />
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* ── Right Preview Card ── */}
              <motion.div
                key={`next-${nextProd.id}`}
                onClick={handleNext}
                initial={{ opacity: 0.5, scale: 0.8, x: 40 }}
                animate={{ opacity: 0.6, scale: 0.85, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="hidden md:flex flex-col items-center justify-between p-5 rounded-2xl bg-white/80 border border-gray-200/80 shadow-sm cursor-pointer hover:opacity-90 hover:scale-90 hover:shadow-md transition-all w-48 h-64 shrink-0 select-none"
              >
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">NEXT</span>
                <div className="h-24 w-full flex items-center justify-center p-2 rounded-xl bg-slate-50/80">
                  <Image
                    src={nextProd.logo}
                    alt={nextProd.name}
                    width={80}
                    height={80}
                    className="object-contain max-h-16 w-auto"
                  />
                </div>
                <h4 className="text-gray-800 font-semibold text-sm text-center line-clamp-1">{nextProd.name}</h4>
              </motion.div>
            </div>

            {/* Bottom Controls Track */}
            <div className="mt-6 pt-4 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5 text-blue-600" /> : <Play className="h-3.5 w-3.5 text-amber-500" />}
                <span>{isPlaying ? "Autoplay Active (Hover to pause)" : "Autoplay Paused"}</span>
              </button>

              {/* Dot Track */}
              <div className="flex items-center gap-2">
                {productsList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      i === activeIndex ? "w-6 bg-blue-600" : "w-2 bg-gray-200 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Dentax Section ── */}
      <section
        ref={dentaxRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white border-b border-gray-100"
        id="dentax"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex items-center justify-center w-full max-w-xs shadow-inner">
                  <Image
                    src="/dentaxLogo.png"
                    alt="Dentax Logo"
                    width={192}
                    height={192}
                    className="object-contain h-40 w-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-700 mb-3">
                  Healthcare & Clinic Management
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  Dentax
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  <strong>Dentax</strong> is an end-to-end, role-based Dental
                  Clinic Management System designed to streamline and digitalize
                  all operational aspects of a modern dental clinic. Built for
                  efficiency, scalability, and compliance, <strong>Dentax</strong>{" "}
                  empowers clinic administrators, dental professionals, and
                  support staff with an integrated, cloud-enabled platform.
                </p>

                <div className="pt-2">
                  <a
                    href="https://dentax.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white font-medium px-6 py-2.5 rounded-full hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photon XR Section ── */}
      <section
        ref={photonxrRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-purple-50/30 to-white border-b border-gray-100"
        id="photonxr"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-purple-100 bg-purple-50/40 p-6 flex items-center justify-center w-full max-w-xs shadow-inner">
                  <Image
                    src="/photonXRLogo.png"
                    alt="Photon XR Logo"
                    width={192}
                    height={192}
                    className="object-contain h-40 w-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-purple-700 mb-3">
                  Radiology & Medical Imaging
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  Photon XR
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  <strong>PhotonXR</strong> delivers a next-generation, web-based
                  DICOM Viewer and Radiological Information System (RIS) built for
                  speed, mobility, and diagnostic accuracy. Hosted on Microsoft
                  Azure and fully integrated with PhotonXR PACS, our platform
                  empowers healthcare providers to access and interpret medical
                  images securely — anytime, anywhere, on any device.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  <strong>PhotonXR Viewer:</strong> A browser-based diagnostic
                  interface optimized for intuitive image manipulation and
                  high-fidelity rendering of medical images and videos.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  <strong>PhotonXR Application Server:</strong> The middleware
                  layer that handles secure communication with HIS, RIS, PACS,
                  VNA, and EMR systems — ensuring fast, scalable image streaming
                  and data exchange.
                </p>

                <div className="pt-2">
                  <a
                    href="https://green-stone-047680200.1.azurestaticapps.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#9684B7] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#8572a8] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Voxa Section ── */}
      <section
        ref={voxaRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-cyan-50/30 to-white border-b border-gray-100"
        id="voxa"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-cyan-100 bg-cyan-50/40 p-6 flex items-center justify-center w-full max-w-xs shadow-inner">
                  <Image
                    src="/voxaLogo.png"
                    alt="Voxa Logo"
                    width={192}
                    height={192}
                    className="object-contain h-40 w-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-700 mb-3">
                  Enterprise Appointment Booking
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  Voxa
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Voxa is a permanent enterprise-grade appointment booking
                  application built for service-based businesses seeking full
                  brand ownership. The platform delivers a unified web and mobile
                  experience, enabling businesses to launch their own branded
                  booking website and applications without technical complexity.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Users can configure services, availability, pricing, and brand
                  assets to create a fully customized booking ecosystem that
                  operates seamlessly across devices.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Voxa is built to scale, ensuring long-term digital presence,
                  operational efficiency, and brand consistency.
                </p>

                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#5ce1e6] text-gray-900 font-semibold px-6 py-2.5 rounded-full hover:bg-[#3fc7cc] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Local Professional Direct Section ── */}
      <section
        ref={localProfessionalRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-indigo-50/30 to-white border-b border-gray-100"
        id="local-professional-direct"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-indigo-50/40 p-6 flex items-center justify-center w-full max-w-xs shadow-inner">
                  <Image
                    src="/localProfessionalDirectLogo.png"
                    alt="Local Professional Direct Logo"
                    width={192}
                    height={192}
                    className="object-contain h-40 w-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-700 mb-3">
                  Service Matching Platform
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  Local Professional Direct
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Local Professional Direct is a smart service-matching platform
                  that bridges the gap between customers and verified local
                  professionals. Service providers can onboard as professionals,
                  showcase their expertise, and manage service offerings, while
                  customers can submit service requests with specific
                  requirements.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  The platform intelligently connects demand with the most
                  relevant professionals, enabling quotation exchanges, service
                  negotiations, and streamlined engagement.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Local Professional Direct optimizes trust, speed, and
                  transparency in the local services economy.
                </p>

                <div className="pt-2">
                  <a
                    href="https://www.localprofessionalsdirect.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#5865c7] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#4b57af] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EduCore Section ── */}
      <section
        ref={educoreRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-rose-50/30 to-white border-b border-gray-100"
        id="educore"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-rose-100 bg-rose-50/40 p-6 flex items-center justify-center w-full max-w-xs shadow-inner">
                  <Image
                    src="/educoreLogo.png"
                    alt="EduCore Logo"
                    width={192}
                    height={192}
                    className="object-contain h-40 w-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-rose-700 mb-3">
                  Early Childhood Education
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  EduCore
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  EduCore is a purpose-built early childhood education platform
                  designed to monitor, assess, and support a child’s developmental
                  journey.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  The application empowers educators and institutions to track
                  learning milestones, developmental indicators, and progress over
                  time through structured observations and assessments.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  With data-driven insights and intuitive dashboards, EduCore
                  enhances early intervention, personalized learning, and
                  transparent communication between educators and stakeholders,
                  laying a strong foundation for lifelong learning.
                </p>

                <div className="pt-2">
                  <a
                    href="http://careforedu.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#931c17] text-white font-medium px-6 py-2.5 rounded-full hover:bg-[#7a1813] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Connexa Section ── */}
      <section
        ref={connexaRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-teal-50/30 to-white border-b border-gray-100"
        id="connexa"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-teal-100 bg-teal-50/40 p-6 flex items-center justify-center w-full max-w-xs shadow-inner">
                  <Image
                    src="/connexaLogo.png"
                    alt="Connexa Logo"
                    width={192}
                    height={192}
                    className="object-contain h-40 w-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-teal-700 mb-3">
                  Enterprise Connectivity Platform
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  Connexa
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Connexa is a permanent enterprise-grade appointment booking
                  application built for service-based businesses seeking full
                  brand ownership. The platform delivers a unified web and mobile
                  experience, enabling businesses to launch their own branded
                  booking website and applications without technical complexity.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Users can configure services, availability, pricing, and brand
                  assets to create a fully customized booking ecosystem that
                  operates seamlessly across devices.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  Connexa is built to scale, ensuring long-term digital presence,
                  operational efficiency, and brand consistency.
                </p>

                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#5ce1e6] text-gray-900 font-semibold px-6 py-2.5 rounded-full hover:bg-[#3fc7cc] hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <span>Visit Site</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MSO Sequoia Section ── */}
      <section
        ref={msoRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-emerald-50/30 to-white"
        id="MSO"
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 flex items-center justify-center w-full max-w-xs shadow-inner">
                  <Image
                    src="/MSOLogo.png"
                    alt="MSO Logo"
                    width={192}
                    height={192}
                    className="object-contain h-40 w-auto"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/3 text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-800 mb-3">
                  Medical Claims Administration
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                  MSO
                </h2>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  A comprehensive Medical Claims Administration platform that
                  manages the full lifecycle of healthcare claims from submission
                  and adjudication through to payment and reporting.
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  Powered by AI-automated and rule-based decision-making, it
                  handles high volumes of claims with speed and accuracy. The
                  platform brings together claims adjudication, call centre
                  management, utilisation management, and appeals and grievances
                  handling in one place, giving providers, payers, and members
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  A seamless experience. Built-in real-time tracking, reporting,
                  and analytics keep your teams informed and compliant, so you can
                  make data-driven decisions with confidence.
                </p>

                <div className="pt-2">
                  <span
                    className="inline-flex items-center gap-2 bg-[#1e5d27] text-white font-medium px-6 py-2.5 rounded-full shadow cursor-default opacity-90"
                  >
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

