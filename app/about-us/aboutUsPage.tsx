"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles, Target, Users } from "lucide-react";

import heroImg from "../../public/About us image 2.jpg";
import innovationImg from "../../public/i.png";
import reliableImg from "../../public/rs.png";
import scalableImg from "../../public/ss.png";
import transformativeImg from "../../public/ts.png";
import ContactBox from "@/components/contactBox";
import AchievementsSection from "@/components/AchievementsSection";
import { motion } from "framer-motion";

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-1">
        {/* ── Hero Section ── */}
        <section className="w-full py-16 md:py-24 lg:py-28 bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full lg:w-[58%] md:w-[54%] shrink-0"
              >
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-xl group hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={heroImg}
                    alt="About Global Pearl Ventures"
                    width={1000}
                    height={750}
                    priority
                    className="mx-auto rounded-2xl object-cover object-[75%_center] w-full h-auto max-h-[520px] md:h-[440px] lg:h-[480px] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full lg:w-[42%] md:w-[46%] flex flex-col justify-center space-y-5 text-left"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    Company Overview
                  </span>
                  <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.12]">
                    What is{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                      Global Pearl Ventures?
                    </span>
                  </h1>
                </div>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Global Pearl Ventures (GPV) is a dynamic software development and technology solutions provider, committed to delivering innovative, scalable, and secure IT services to businesses across industries. With a focus on excellence and customer satisfaction, we empower organizations to harness the power of cutting-edge technology for sustainable growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Pillars Section ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
              <Target className="h-3.5 w-3.5" />
              Our Core Principles
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Innovating Future,{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Today!
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              To be a global leader in technology innovation, enabling businesses to thrive in the digital era through reliable, scalable, and transformative solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left">
              {/* Pillar 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 ring-1 ring-blue-500/20">
                  <Image src={innovationImg} alt="Innovation" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  We constantly explore new technologies and methodologies to stay ahead of the curve and deliver cutting-edge solutions.
                </p>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.13 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 ring-1 ring-teal-500/20">
                  <Image src={reliableImg} alt="Reliable Solutions" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Solutions</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  We are committed to delivering reliable solutions by continuously adapting to your evolving needs and ensuring exceptional quality.
                </p>
              </motion.div>

              {/* Pillar 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.21 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 ring-1 ring-purple-500/20">
                  <Image src={scalableImg} alt="Scalable Solutions" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  We design with scalability in mind, ensuring our solutions grow seamlessly alongside your business and adapt to increasing demands.
                </p>
              </motion.div>

              {/* Pillar 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.29 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 ring-1 ring-emerald-500/20">
                  <Image src={transformativeImg} alt="Transformative Solutions" width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transformative Solutions</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  We constantly explore new technologies and methodologies to stay ahead of the curve and deliver transformative solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Executive Leadership Section ── */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm">
              <Users className="h-3.5 w-3.5 text-blue-600" />
              Executive Leadership
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Meet the Visionaries Behind{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                GPV
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Our leadership team combines deep technical expertise, industry foresight, and a shared commitment to building transformative enterprise software.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-left">
              {/* Leader 1 */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-blue-500/20 shadow-md">
                      <Image
                        src="/Logo-v6.png"
                        alt="Leadership"
                        width={80}
                        height={80}
                        className="object-cover p-2 bg-gradient-to-br from-blue-50 to-white"
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/company/global-pearl-ventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>

                  <span className="inline-block rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700 mb-2">
                    Executive Leadership
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Executive Director & Founder</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-4">Strategic Vision & Enterprise Growth</p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    &ldquo;Our vision is to empower enterprises with digital infrastructure that scales effortlessly while setting new benchmarks for security and clinical accuracy.&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-medium text-gray-500">
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">Enterprise Strategy</span>
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">Global Expansion</span>
                </div>
              </motion.div>

              {/* Leader 2 */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-teal-500/20 shadow-md">
                      <Image
                        src="/Logo-v6.png"
                        alt="Technology Leadership"
                        width={80}
                        height={80}
                        className="object-cover p-2 bg-gradient-to-br from-teal-50 to-white"
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/company/global-pearl-ventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>

                  <span className="inline-block rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-semibold text-teal-700 mb-2">
                    Engineering Leadership
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Chief Technology Officer</h3>
                  <p className="text-sm font-semibold text-teal-600 mb-4">Architecture & Cloud Infrastructure</p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    &ldquo;We engineer every system with resilience at its core — leveraging microservices, AI automation, and zero-footprint web security.&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-medium text-gray-500">
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">Cloud Architecture</span>
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">DICOM & WebGL</span>
                </div>
              </motion.div>

              {/* Leader 3 */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-300 hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative h-20 w-20 overflow-hidden rounded-2xl border-2 border-purple-500/20 shadow-md">
                      <Image
                        src="/Logo-v6.png"
                        alt="Product Leadership"
                        width={80}
                        height={80}
                        className="object-cover p-2 bg-gradient-to-br from-purple-50 to-white"
                      />
                    </div>
                    <a
                      href="https://www.linkedin.com/company/global-pearl-ventures/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-slate-50 text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>

                  <span className="inline-block rounded-full bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-semibold text-purple-700 mb-2">
                    Product & Innovation
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">VP of Product & AI Solutions</h3>
                  <p className="text-sm font-semibold text-purple-600 mb-4">Product Innovation & User Experience</p>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    &ldquo;Great software bridges complex domain challenges with seamless, intuitive design that users love interacting with every day.&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-2 text-xs font-medium text-gray-500">
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">AI & ML Pipelines</span>
                  <span className="bg-gray-100 px-2.5 py-1 rounded-md">UI/UX Excellence</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Achievements & Press Recognition Section ── */}
        <AchievementsSection />

        <ContactBox />
      </main>
    </div>
  );
}
