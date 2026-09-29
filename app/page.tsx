"use client";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Brain,
  Globe,
  Layers,
  Users,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import BackgroundAnimation from "@/components/BackgroundAnimation";
import Image from "next/image";
import ContactBox from "@/components/contactBox";
import { VideoEmbed } from "@/components/video-embed";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import AwardSplashScreen from "@/components/AwardSplashScreen";

const images = [
  "/Team_collaboration.png",
  "/about_us_hero.png",
  "/ai_ml.png",
  "/web_dev.png",
  "/mobile_app_dev.png",
  "/cloud_and_devops.png",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev: any) => (prev + 1) % images.length);
    }, 5000); // 5s delay

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <AwardSplashScreen />
      {/* ── Cinematic Hero Section ── */}
      <section className="relative z-0 w-full py-20 md:py-32 bg-gradient-to-b from-blue-50/80 via-white to-white overflow-hidden border-b border-gray-100">
        <BackgroundAnimation />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center space-y-6 text-center max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Global Pearl Ventures
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl leading-[1.08]">
                Innovating Tomorrow,{" "}
                <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  Today!
                </span>
              </h1>

              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Empowering your digital journey with Global Pearl Ventures — where innovation meets excellence.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-2">
                <Link
                  href="/get-in-touch"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/our-services"
                  className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700 hover:-translate-y-0.5"
                >
                  Learn More
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Client Logos Marquee ("Trusted By") ── */}
      <ClientLogosMarquee />

      {/* ── Services Carousel / Showcase Section ── */}
      <section
        className="w-full py-16 sm:py-20 md:py-24 bg-cover bg-center transition-all duration-1000 ease-in-out relative border-b border-gray-100"
        id="services"
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-md z-0" />

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300 backdrop-blur">
              <Layers className="h-3.5 w-3.5" />
              Core Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Comprehensive Software Solutions
            </h2>
            <p className="max-w-[900px] text-base sm:text-lg text-white/90 leading-relaxed">
              We offer a wide range of services to help your business succeed in the digital world.
            </p>
          </div>

          <div className="mx-auto grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
            {/* Web Dev Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/20 shadow-xl"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/30">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Web Development</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Custom websites and web applications built with the latest technologies.
              </p>
            </motion.div>

            {/* Mobile Apps Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.13 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/20 shadow-xl"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Mobile Apps</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </motion.div>

            {/* AI & ML Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.21 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/20 shadow-xl"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300 ring-1 ring-purple-400/30">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI & Machine Learning</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Intelligent automation and data-driven insights to power smart decisions.
              </p>
            </motion.div>

            {/* Staff Augmentation Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.29 }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/20 shadow-xl"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Staff Augmentation</h3>
              <p className="text-sm leading-relaxed text-white/80">
                Scale your team with skilled tech professionals on demand.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center mt-10">
            <Link
              href="/our-services"
              className="group inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-500 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="w-full py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-12 items-center">
            {/* Image card (Slides in from Left - Larger 7-col ratio) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-xl group hover:shadow-2xl transition-all duration-300">
                <Image
                  src="/Team_collaboration.png"
                  alt="Team collaboration"
                  width={1000}
                  height={750}
                  className="w-full h-auto min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] max-h-[540px] object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* Content panel (Slides in from Right - 5-col ratio) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 flex flex-col justify-center space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Why Partner With Us
                </span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                  Why Choose Global Pearl Ventures?
                </h2>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
                  At Global Pearl Ventures (GPV), we don’t just deliver technology — we deliver value.
                  Our approach combines technical excellence with strategic thinking. Here’s why businesses choose us:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 ring-1 ring-blue-500/20 text-blue-600">
                    <Image src="/ex.png" alt="Expert Team" width={28} height={28} />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">Expert Team</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 ring-1 ring-teal-500/20 text-teal-600">
                    <Image src="/cc.png" alt="Client-Centric" width={28} height={28} />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">Client-Centric Approach</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 ring-1 ring-purple-500/20 text-purple-600">
                    <Image src="/ino.png" alt="Innovation-Driven" width={28} height={28} />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">Innovation-Driven</span>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-500/20 text-emerald-600">
                    <Image src="/gr.png" alt="Global Reach" width={28} height={28} />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm">Global Reach, Local Impact</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/why-choose-us"
                  className="group inline-flex items-center gap-2 rounded-full bg-gray-900 hover:bg-gray-800 px-7 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:-translate-y-0.5"
                >
                  Learn More About Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Video Embed Section ── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
              Watch Our Story
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Discover Global Pearl Ventures
            </h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-3 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <VideoEmbed videoId="fzuS2P_ytiE" title="Global Pearl Ventures" />
          </div>
        </motion.div>
      </section>

      {/* Preload slider images */}
      <div className="hidden">
        {images.map((img, index) => (
          <Image key={index} src={img} alt={`Preload ${index}`} width={100} height={100} priority />
        ))}
      </div>

      <ContactBox />
    </div>
  );
}

