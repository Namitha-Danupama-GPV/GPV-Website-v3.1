"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  Target, 
  Lightbulb, 
  Award, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2 
} from "lucide-react";
import ContactBox from "@/components/contactBox";

export default function OurVisionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-1">
        {/* ── Hero Section ── */}
        <section className="w-full pt-8 sm:pt-10 md:pt-12 pb-14 md:pb-20 bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Strategic Roadmap & Ethos
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.12]">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  Vision
                </span>
              </h1>
              <p className="max-w-3xl text-gray-600 text-base sm:text-lg leading-relaxed">
                Building the future of technology through innovation, excellence, and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* ── Vision Statement Section ── */}
        <section className="w-full py-16 md:py-24 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="w-full">
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-xl">
                  <Image
                    src="/about_us_hero.png"
                    alt="Global Pearl Ventures Vision"
                    width={600}
                    height={600}
                    className="mx-auto rounded-2xl object-cover object-center w-full h-80 sm:h-96"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-5 text-left">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
                    <Target className="h-3.5 w-3.5" />
                    Vision Statement
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                    Shaping the{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                      Digital Future
                    </span>
                  </h2>
                </div>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium">
                  We envision a world where technology empowers businesses to achieve their full potential and create
                  meaningful impact.
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  Our vision is to be at the forefront of technological innovation, creating software solutions that not
                  only solve today's challenges but anticipate tomorrow's needs. We strive to be a catalyst for digital
                  transformation, helping businesses of all sizes harness the power of technology to grow, innovate, and
                  succeed.
                </p>

                <p className="text-gray-600 text-base leading-relaxed">
                  We believe in a future where technology is accessible, intuitive, and transformative—where businesses
                  can leverage cutting-edge solutions to create exceptional experiences for their customers and drive
                  sustainable growth.
                </p>

                <div className="pt-2">
                  <Link href="/get-in-touch">
                    <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-7 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                      <span>Partner With Us</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values Section ── */}
        <section className="w-full py-20 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3 shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                Core Values
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                What{" "}
                <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                  Drives Us
                </span>
              </h2>
              <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
                Our core values are the foundation of everything we do and guide our approach to software development.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 text-left">
                {/* Value 1 */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20 group-hover:bg-blue-100 transition-colors">
                    <Lightbulb className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We constantly explore new technologies and methodologies to stay ahead of the curve and deliver
                    cutting-edge solutions.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50 text-teal-600 ring-1 ring-teal-500/20 group-hover:bg-teal-100 transition-colors">
                    <Award className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We strive for excellence in every project, delivering high-quality solutions that exceed expectations
                    and stand the test of time.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-500/20 group-hover:bg-indigo-100 transition-colors">
                    <Users className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collaboration</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We believe in working closely with our clients to understand their needs and deliver tailored
                    solutions that drive real business value.
                  </p>
                </div>

                {/* Value 4 */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/20 group-hover:bg-emerald-100 transition-colors">
                    <TrendingUp className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Growth</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We are committed to continuous learning and growth, both for our team and our clients, embracing
                    challenges as opportunities to improve.
                  </p>
                </div>

                {/* Value 5 */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-200 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 ring-1 ring-purple-500/20 group-hover:bg-purple-100 transition-colors">
                    <ShieldCheck className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We operate with honesty, transparency, and ethical business practices, building trust with our clients
                    and partners.
                  </p>
                </div>

                {/* Value 6 */}
                <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-200 hover:shadow-xl">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-500/20 group-hover:bg-amber-100 transition-colors">
                    <RefreshCw className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptability</h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    We embrace change and adapt quickly to new challenges, technologies, and market conditions to deliver
                    the best solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why Choose Us Section ── */}
        <section className="w-full py-20 sm:py-24 bg-white border-b border-gray-100" id="why-choose-us">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm">
                  <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                  Why Choose Us
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Partners in{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                    Your Success
                  </span>
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg leading-relaxed">
                  We're more than just a software development company—we're your strategic technology partner.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Experienced Team</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our team brings years of experience across various industries and technologies, ensuring we deliver
                    solutions that meet your specific needs.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Cutting-Edge Technology</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We stay at the forefront of technological advancements, leveraging the latest tools and frameworks to
                    build modern, scalable solutions.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Agile Methodology</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our agile development approach ensures flexibility, transparency, and faster time-to-market for your
                    projects.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Client-Centric Approach</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We put your needs first, working closely with you to understand your business goals and deliver
                    solutions that help you achieve them.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Quality Assurance</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We implement rigorous testing and quality assurance processes to ensure your software is reliable,
                    secure, and performs optimally.
                  </p>
                </div>

                <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Ongoing Support</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our relationship doesn't end at deployment—we provide ongoing support and maintenance to ensure your
                    software continues to perform at its best.
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-12">
                <Link href="/why-choose-us">
                  <button className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-7 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    <span>Learn More About Our Advantages</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Section ── */}
        <ContactBox />
      </main>
    </div>
  );
}
