"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";

import heroImg from "../../public/why_choose_us_hero.png";
import expertImg from "../../public/ex.png";
import clientImg from "../../public/cc.png";
import innovationImg from "../../public/ino.png";
import globalReachImg from "../../public/gr.png";
import provenImg from "../../public/pe.png";
import agileImg from "../../public/Am.png";
import techImg from "../../public/t.png";
import globalStandardsImg from "../../public/gsl.png";
import ContactBox from "@/components/contactBox";
import { motion } from "framer-motion";

export default function WhyChooseUsPage() {
  const features = [
    {
      image: expertImg,
      title: "Expert Team",
      description: "Skilled professionals with industry-leading expertise",
    },
    {
      image: clientImg,
      title: "Client-Centric Approach",
      description: "Solutions tailored to your unique business needs",
    },
    {
      image: innovationImg,
      title: "Innovation-Driven",
      description: "Leveraging the latest technologies for future-ready results",
    },
    {
      image: globalReachImg,
      title: "Global Reach, Local Impact",
      description: "Serving clients across borders with precision and care.",
    },
    {
      image: provenImg,
      title: "Proven Expertise",
      description: "Experienced team with a track record of successful projects.",
    },
    {
      image: agileImg,
      title: "Agile Methodology",
      description: "Flexible, efficient, and client-focused development.",
    },
    {
      image: techImg,
      title: "24/7 Technical Support",
      description: "Reliable maintenance and assistance",
    },
    {
      image: globalStandardsImg,
      title: "Global Standards, Local Relevance",
      description: "Solutions designed for international markets with localized support.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <main className="flex-1">
        {/* ── Key Advantages Section ── */}
        <section className="w-full py-16 md:py-24 lg:py-28 bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 lg:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full order-2 lg:order-1"
              >
                <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-3 shadow-xl">
                  <Image
                    src={heroImg}
                    alt="Team collaboration"
                    width={800}
                    height={600}
                    priority
                    className="mx-auto rounded-2xl object-cover object-center w-full h-72 sm:h-96"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col justify-center space-y-6 text-left order-1 lg:order-2"
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 shadow-sm">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    Why Partner With Us
                  </span>
                  <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.12]">
                    Excellence in{" "}
                    <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                      Every Line of Code
                    </span>
                  </h1>
                </div>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  We combine technical expertise with creative problem-solving to deliver exceptional results.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <li className="flex items-center gap-2.5">
                    <div className="rounded-full bg-blue-50 p-1 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">Custom website development</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="rounded-full bg-blue-50 p-1 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">Progressive Web Apps</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="rounded-full bg-blue-50 p-1 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">E-Commerce solutions</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="rounded-full bg-blue-50 p-1 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">Content management systems</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="rounded-full bg-blue-50 p-1 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">Web application development</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="rounded-full bg-blue-50 p-1 text-blue-600 ring-1 ring-blue-500/20">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 text-sm font-medium">API development & integration</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Expertise Section ── */}
        <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
              Our Competitive Edge
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                Scale & Trust
              </span>
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Discover why organizations around the globe trust Global Pearl Ventures for their mission-critical digital transformation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 text-left">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="relative h-16 w-full mb-5 flex items-center justify-center rounded-2xl bg-blue-50/50 p-2 ring-1 ring-blue-500/10 group-hover:bg-blue-50 transition-colors">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      style={{ objectFit: "contain" }}
                      className="p-1"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ContactBox />
      </main>
    </div>
  );
}
