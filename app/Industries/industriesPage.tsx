"use client";

import { useState, useRef, type RefObject } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Baby,
  Brain,
  Building2,
  CalendarDays,
  ClipboardList,
  Cloud,
  Database,
  GraduationCap,
  HeartPulse,
  Layers,
  Layout,
  MessageSquare,
  Monitor,
  Palette,
  Plane,
  Search,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  UserPlus,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceCard } from "@/components/service-card";

type IndustryAccent = {
  name: string;
  badge: string;
  iconText: string;
  iconBg: string;
  ring: string;
  glow: string;
  textGradient: string;
  buttonBg: string;
  buttonHover: string;
  chipBorder: string;
  chipText: string;
  hexColor: string;
};

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Industry = {
  id: string;
  number: string;
  navLabel: string;
  icon: LucideIcon;
  kicker: string;
  title: string;
  description: string;
  products: string[];
  logos: { src: string; alt: string }[];
  features: Feature[];
  accent: IndustryAccent;
};

const industries: Industry[] = [
  {
    id: "healthcare",
    number: "01",
    navLabel: "Healthcare",
    icon: HeartPulse,
    kicker: "Clinical Intelligence",
    title: "Healthcare",
    description:
      "The healthcare sector demands precision, compliance, and efficiency at every touchpoint. GPV delivers purpose-built solutions that digitalize clinical workflows, enhance diagnostic accuracy, and improve patient outcomes.",
    products: ["Dentax", "Photon XR", "MSO Sequoia"],
    logos: [
      { src: "/dentaxLogo.png", alt: "Dentax" },
      { src: "/photonXRLogo.png", alt: "Photon XR" },
      { src: "/MSOLogo.png", alt: "MSO" },
    ],
    features: [
      {
        title: "Dental Clinic Management",
        description:
          "Dentax streamlines every operational layer of a modern dental clinic — from patient scheduling and treatment planning to billing and compliance — in one unified, role-based platform.",
        icon: ClipboardList,
      },
      {
        title: "Radiology & Medical Imaging",
        description:
          "PhotonXR powers web-based DICOM viewing and RIS capabilities, giving radiologists and clinicians secure, high-fidelity access to medical images from any device, anywhere.",
        icon: Monitor,
      },
      {
        title: "AI-Powered Claims Adjudication",
        description:
          "Automated and rule-based decision-making ensures consistency, reduces processing time, and handles high volumes of claims with precision — while integrated call center tools give support teams better visibility for faster provider and member query resolution.",
        icon: Brain,
      },
    ],
    accent: {
      name: "Healthcare",
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      iconText: "text-emerald-400",
      iconBg: "bg-emerald-500/10",
      ring: "ring-emerald-500/20",
      glow: "from-emerald-500/40 via-emerald-500/0 to-transparent",
      textGradient: "from-emerald-400 to-teal-300",
      buttonBg: "bg-emerald-500",
      buttonHover: "hover:bg-emerald-400",
      chipBorder: "border-emerald-500/30",
      chipText: "text-emerald-300",
      hexColor: "#10b981",
    },
  },
  {
    id: "aviation",
    number: "02",
    navLabel: "Aviation",
    icon: Plane,
    kicker: "Flight Operations",
    title: "Aviation ",
    description:
      "Aviation education requires rigorous coordination between students, instructors, and regulatory requirements. AeroManage brings operational clarity and compliance to flight training institutions of every scale.",
    products: ["AeroManage"],
    logos: [{ src: "/aeromanageLogo.png", alt: "AeroManage" }],
    features: [
      {
        title: "Flight School Administration",
        description:
          "Manage student enrollments, instructor assignments, scheduling, and flight hour tracking through a single integrated platform designed for the unique demands of aviation training.",
        icon: Users,
      },
      {
        title: "Regulatory Compliance & Reporting",
        description:
          "Built-in compliance tooling and accurate reporting give administrators full visibility across finance, course progress, and regulatory requirements — ensuring nothing falls through the cracks.",
        icon: ShieldCheck,
      },
    ],
    accent: {
      name: "Aviation",
      badge: "bg-sky-500/10 text-sky-300 border-sky-500/20",
      iconText: "text-sky-300",
      iconBg: "bg-sky-500/10",
      ring: "ring-sky-500/20",
      glow: "from-sky-500/40 via-sky-500/0 to-transparent",
      textGradient: "from-sky-300 to-cyan-200",
      buttonBg: "bg-sky-500",
      buttonHover: "hover:bg-sky-400",
      chipBorder: "border-sky-500/30",
      chipText: "text-sky-300",
      hexColor: "#0ea5e9",
    },
  },
  {
    id: "education",
    number: "03",
    navLabel: "Early Childhood Education",
    icon: GraduationCap,
    kicker: "Learning Insights",
    title: "Education ",
    description:
      "Supporting a child's developmental journey demands tools that are intuitive for educators and meaningful for families. EduCore brings data-driven insights to early learning environments.",
    products: ["EduCore"],
    logos: [{ src: "/educoreLogo.png", alt: "EduCore" }],
    features: [
      {
        title: "Developmental Milestone Tracking",
        description:
          "Educators can log structured observations, assessments, and developmental indicators, creating a continuous, evidence-based picture of each child's progress over time.",
        icon: Baby,
      },
      {
        title: "Educator–Stakeholder Communication",
        description:
          "Intuitive dashboards enable transparent communication between educators and parents, supporting early intervention and truly personalized learning pathways.",
        icon: MessageSquare,
      },
    ],
    accent: {
      name: "Early Childhood Education",
      badge: "bg-rose-500/10 text-rose-300 border-rose-500/20",
      iconText: "text-rose-300",
      iconBg: "bg-rose-500/10",
      ring: "ring-rose-500/20",
      glow: "from-rose-500/40 via-rose-500/0 to-transparent",
      textGradient: "from-rose-300 to-orange-200",
      buttonBg: "bg-rose-500",
      buttonHover: "hover:bg-rose-400",
      chipBorder: "border-rose-500/30",
      chipText: "text-rose-300",
      hexColor: "#f43f5e",
    },
  },
  {
    id: "services",
    number: "04",
    navLabel: "Local Services & Gig Economy",
    icon: Wrench,
    kicker: "Marketplace Platforms",
    title: "Engineering",
    description:
      "Connecting customers with trusted local professionals requires speed, transparency, and smart matching. Local Professional Direct brings structure and trust to the local services economy.",
    products: ["Local Professional Direct"],
    logos: [
      {
        src: "/localProfessionalDirectLogo.png",
        alt: "Local Professional Direct",
      },
    ],
    features: [
      {
        title: "Smart Professional Matching",
        description:
          "The platform intelligently connects customer service requests with the most relevant verified professionals, enabling efficient quotation exchanges and seamless service negotiations.",
        icon: Search,
      },
      {
        title: "Professional Onboarding & Showcasing",
        description:
          "Service providers can build a credible digital presence, showcase expertise, and manage their offerings — building trust with customers before any engagement begins.",
        icon: UserPlus,
      },
    ],
    accent: {
      name: "Local Services & Gig Economy",
      badge: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      iconText: "text-blue-300",
      iconBg: "bg-blue-500/10",
      ring: "ring-blue-500/20",
      glow: "from-blue-500/40 via-blue-500/0 to-transparent",
      textGradient: "from-blue-300 to-indigo-200",
      buttonBg: "bg-blue-500",
      buttonHover: "hover:bg-blue-400",
      chipBorder: "border-blue-500/30",
      chipText: "text-blue-300",
      hexColor: "#3b82f6",
    },
  },
  {
    id: "enterprise",
    number: "05",
    navLabel: "Enterprise & Service Businesses",
    icon: Building2,
    kicker: "Branded Experiences",
    title: "Enterprise & Service Businesses",
    description:
      "Service-based businesses need digital infrastructure that reflects their brand and scales with their growth. Voxa delivers a white-label appointment booking ecosystem built for long-term enterprise ownership.",
    products: ["Voxa"],
    logos: [{ src: "/voxaLogo.png", alt: "Voxa" }],
    features: [
      {
        title: "Branded Booking Ecosystems",
        description:
          "Businesses configure services, availability, pricing, and brand assets to launch fully owned web and mobile booking experiences — without any technical complexity.",
        icon: CalendarDays,
      },
      {
        title: "Scalable Digital Presence",
        description:
          "Voxa is architected for scale, ensuring operational efficiency, brand consistency, and a seamless cross-device customer experience that grows alongside the business.",
        icon: TrendingUp,
      },
    ],
    accent: {
      name: "Enterprise & Service Businesses",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      iconText: "text-cyan-300",
      iconBg: "bg-cyan-500/10",
      ring: "ring-cyan-500/20",
      glow: "from-cyan-500/40 via-cyan-500/0 to-transparent",
      textGradient: "from-cyan-300 to-teal-200",
      buttonBg: "bg-cyan-500",
      buttonHover: "hover:bg-cyan-400",
      chipBorder: "border-cyan-500/30",
      chipText: "text-cyan-300",
      hexColor: "#06b6d4",
    },
  },
];

const techTabs = [
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "backend", label: "Backend", icon: Server },
  { id: "AIML", label: "AI/ML", icon: Layers },
  { id: "mobile", label: "Mobile", icon: Smartphone },
  { id: "database", label: "Database", icon: Database },
  { id: "uiux", label: "UI/UX", icon: Palette },
  { id: "cloud", label:"Cloud", icon: Cloud},
] as const;

type TechTab = (typeof techTabs)[number]["id"];

const techTools: Record<TechTab, { name: string; icon?: string }[]> = {
  frontend: [
    { name: "React", icon: "/React-Logo.png" },
    { name: "Next.js", icon: "/nextjs-black.png" },
    { name: "Flutter", icon: "/flutter-Logo.png" },
    { name: "HTML5 & CSS3", icon: "/html.png" },
    { name: ".NET", icon: "/net-framework.png" },
  ],
  backend: [
    { name: "Node.js", icon: "/nodejs.png" },
    { name: "Python", icon: "/python.png" },
    { name: "Maven", icon: "/maven.png" },
    { name: "PHP", icon: "/php.png" },
    { name: "Java", icon: "/java.png" },
    { name: "Django", icon: "/django.png" },
    { name: "Express.js", icon: "/express-js.png" },
    { name: "Spring Boot", icon: "/spring-boot.png" },
    { name: "C++", icon: "/c++.png" },
  ],
  AIML: [
    { name: "Claude", icon: "/claude.png" },
    { name: "OpenAI Codex", icon: "/codex.png" },
    { name: "Cursor", icon: "/cursor.png" },
    { name: "GitHub Copilot", icon: "/github-copilot.png" },
    { name: "Antigravity", icon: "/antigravity2.png" },
    { name: "Gemini Code Assist", icon: "/gemini-cli.png" },
  ],
  mobile: [
    { name: "iOS", icon: "/ios-logo.png" },
    { name: "Android", icon: "/Android.png" },
    { name: "React Native", icon: "/reactnative.png" },
    { name: "Flutter", icon: "/flutter-logo.png" },
  ],
  database: [
    { name: "MongoDB", icon: "/mongoDB.png" },
    { name: "MySQL", icon: "/Mysql.png" },
    { name: "Firebase", icon: "/firebase.png" },
    { name: "PostgreSQL", icon: "/postgresql.png" },
    { name: "SQLite", icon: "/sqlite.png" },
    { name: "Oracle", icon: "/oracle.png" },
  ],
  uiux: [
    { name: "Adobe XD", icon: "/adobe-xd.png" },
    { name: "Sketch", icon: "/sketchlogo.png" },
    { name: "Figma", icon: "/figmaLogo.png" },
  ],
  cloud: [
    { name: "AWS", icon: "/aws.png"},
    { name: "Azure", icon: "/azure.png"},
    { name: "Google Cloud", icon: "/gcloud.png"},
  ],
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function scrollTo(ref: RefObject<HTMLElement | null>) {
  if (ref.current) {
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function HeroBackdrop() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_85%_30%,rgba(20,184,166,0.18),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 right-[-80px] h-[360px] w-[360px] rounded-full bg-teal-500/20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full border border-white/5"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-260px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-white/5"
      />
    </div>
  );
}

function IndustryHeroAccordion({
  industries,
  sectionRefs,
  scrollTo,
}: {
  industries: Industry[];
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
  scrollTo: (ref: RefObject<HTMLElement | null>) => void;
}) {
  // Index 0 (Healthcare) is expanded by default so container is 100% full width from load!
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="mx-auto mt-16 w-full max-w-7xl overflow-hidden rounded-3xl border border-white/20 bg-slate-900/60 backdrop-blur-xl shadow-2xl flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10 min-h-[380px] sm:min-h-[420px] transition-all duration-500"
    >
      {industries.map((industry, index) => {
        const Icon = industry.icon;
        const isExpanded = hoveredIndex === index;

        return (
          <motion.button
            key={industry.id}
            variants={fadeUp}
            type="button"
            onClick={() => scrollTo(sectionRefs[industry.id])}
            onMouseEnter={() => setHoveredIndex(index)}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden p-6 sm:p-7 text-left transition-all duration-500 ease-out focus:outline-none cursor-pointer",
              isExpanded
                ? "md:flex-[2.5] bg-slate-900/90 shadow-2xl z-10"
                : "md:flex-1 bg-transparent hover:bg-white/5",
            )}
          >
            {/* Signature Accent Glow */}
            <div
              className={cn(
                "pointer-events-none absolute inset-0 bg-gradient-to-b transition-opacity duration-500",
                isExpanded ? "opacity-100" : "opacity-0",
                industry.accent.glow,
              )}
            />

            {/* Watermark Logo/Icon Morphing Effect */}
            <div
              className={cn(
                "pointer-events-none absolute flex items-center justify-center transition-all duration-500 ease-out",
                isExpanded
                  ? "top-6 right-6 h-8 w-8"
                  : "bottom-8 right-4 h-24 w-24",
              )}
            >
              <Icon
                className={cn(
                  "transition-all duration-500 ease-out",
                  isExpanded
                    ? "h-5 w-5 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                    : "h-20 w-20 text-white/10",
                )}
              />
            </div>

            {/* Top Header: Sector Number & Static Icon Badge */}
            <div className="relative z-10 flex items-center justify-between">
              <span
                className="font-mono text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border bg-white/5 backdrop-blur-md shadow-sm"
                style={{
                  borderColor: `${industry.accent.hexColor}40`,
                  color: industry.accent.hexColor,
                }}
              >
                {industry.number}
              </span>

              {/* Static top-right badge (Fades out when expanded) */}
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-opacity duration-300",
                  isExpanded ? "opacity-0" : "opacity-100",
                )}
                style={{ color: industry.accent.hexColor }}
              >
                <Icon className="h-4 w-4" />
              </div>
            </div>

            {/* Center Body: Title & Revealed Description Lines */}
            <div className="relative z-10 my-auto pt-6 pb-2">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white transition-transform duration-300">
                {industry.title}
              </h3>

              {/* Description Lines Revealed on Expand */}
              <p
                className={cn(
                  "mt-3 text-xs sm:text-sm text-white/80 leading-relaxed overflow-hidden transition-all duration-500 ease-out",
                  isExpanded
                    ? "opacity-100 max-h-36 translate-y-0"
                    : "opacity-0 max-h-0 translate-y-4",
                )}
              >
                {industry.description}
              </p>
            </div>

            {/* Bottom Footer: "Explore Sector →" Button */}
            <div className="relative z-10 pt-4 border-t border-white/10 transition-colors">
              <div
                className={cn(
                  "inline-flex items-center gap-2 text-xs font-semibold transition-all duration-500 ease-out",
                  isExpanded ? "text-white opacity-100" : "text-white/40 opacity-70",
                )}
              >
                <span>Explore Sector</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  style={{ color: industry.accent.hexColor }}
                />
              </div>
            </div>
          </motion.button>
        );
      })}
    </motion.div>
  );
}

function FeatureCard({
  feature,
  accent,
}: {
  feature: Feature;
  accent: IndustryAccent;
}) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-xl"
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100",
          accent.glow,
        )}
      />
      <div className="relative">
        <span
          className={cn(
            "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1",
            accent.iconBg,
            accent.iconText,
            accent.ring,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h4 className="mb-2 text-lg font-semibold text-gray-900">
          {feature.title}
        </h4>
        <p className="text-sm leading-relaxed text-gray-600">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

function IndustrySection({
  industry,
  index,
  sectionRef,
}: {
  industry: Industry;
  index: number;
  sectionRef: RefObject<HTMLElement | null>;
}) {
  const Icon = industry.icon;
  const isReversed = index % 2 === 1;

  return (
    <section
      ref={sectionRef}
      id={industry.id}
      className="relative overflow-hidden border-t border-gray-100 bg-white py-24 sm:py-28"
    >
      <div
        className={cn(
          "pointer-events-none absolute h-[480px] w-[480px] rounded-full blur-3xl",
          isReversed ? "-left-32 top-20" : "-right-32 top-20",
        )}
        style={{ backgroundColor: `${industry.accent.hexColor}14` }}
      />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className={cn(
              "grid items-center gap-12 lg:grid-cols-12 lg:gap-16",
              isReversed && "lg:[&>*:first-child]:order-2",
            )}
          >
            {/* Visual panel */}
            <motion.div variants={fadeUp} className="lg:col-span-5">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-[2rem] blur-3xl"
                  style={{ backgroundColor: `${industry.accent.hexColor}1a` }}
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-xl sm:p-10">
                  <div className="grid grid-cols-2 gap-4">
                    {industry.logos.map((logo, idx) => (
                      <motion.div
                        key={logo.alt}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 * idx }}
                        whileHover={{ y: -4, rotate: -1 }}
                        className={cn(
                          "group relative flex aspect-square items-center justify-center rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md",
                          industry.logos.length === 1 &&
                            "col-span-2 aspect-[2/1]",
                          industry.logos.length === 3 &&
                            idx === 2 &&
                            "col-span-2 aspect-[2/1]",
                        )}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={140}
                          height={140}
                          className="max-h-full max-w-full object-contain"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: `${industry.accent.hexColor}1f`,
                          color: industry.accent.hexColor,
                        }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-gray-700">
                        {industry.kicker}
                      </span>
                    </div>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: `${industry.accent.hexColor}14`,
                        color: industry.accent.hexColor,
                      }}
                    >
                      {industry.products.length} product
                      {industry.products.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content panel */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <div className="flex items-baseline gap-4">
                <span
                  className="font-mono text-sm font-medium tracking-widest"
                  style={{ color: industry.accent.hexColor }}
                >
                  {industry.number}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
              </div>
              <p
                className="mt-6 text-sm font-semibold uppercase tracking-[0.18em]"
                style={{ color: industry.accent.hexColor }}
              >
                {industry.kicker}
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {industry.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                {industry.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {industry.products.map((product) => (
                  <span
                    key={product}
                    className="rounded-full border px-4 py-1.5 text-sm font-semibold"
                    style={{
                      borderColor: `${industry.accent.hexColor}40`,
                      color: industry.accent.hexColor,
                    }}
                  >
                    {product}
                  </span>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/our-products"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: industry.accent.hexColor }}
                >
                  View Related Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {industry.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                accent={industry.accent}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function IndustriesPage() {
  const healthcareRef = useRef<HTMLElement | null>(null);
  const aviationRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const enterpriseRef = useRef<HTMLElement | null>(null);

  const [activeTab, setActiveTab] = useState<TechTab>("frontend");

  const sectionRefs: Record<string, RefObject<HTMLElement | null>> = {
    healthcare: healthcareRef,
    aviation: aviationRef,
    education: educationRef,
    services: servicesRef,
    enterprise: enterpriseRef,
  };

  const activeTools = techTools[activeTab];

  return (
    <div className="bg-white text-gray-900">
      {/* ── Cinematic Hero ── */}

      <section className="relative isolate overflow-hidden bg-[#797c79] pt-8 sm:pt-10 md:pt-12 pb-16 sm:pb-20 text-gray-900">
        <HeroBackdrop />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
        <Image
          src="/Five_industries.jpeg"
          alt="Five industries background"
          fill
          priority
          className="object-cover object-center pointer-events-none z-0 opacity-40 blur-sm"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-4xl text-center"
          >
            

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-5xl font-bold text-white leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            >
              Built for the{" "}
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                industries
              </span>{" "}
              we serve
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg"
            >
              Global Pearl Ventures (GPV) builds technology that fits the real
              operational challenges of diverse industries — from healthcare and
              aviation to education and local services. Explore the sectors
              transformed by our product suite.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center justify-center gap-3"
            >
              <Link
                href="/our-products"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#071b16] transition-transform hover:-translate-y-0.5"
              >
                Explore Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                type="button"
                onClick={() => scrollTo(sectionRefs.healthcare)}
                className="group inline-flex items-center gap-2 rounded-full  bg-white px-6 py-3 text-sm font-semibold text-[#071b16]  backdrop-blur transition-colors hover:border-white/30 hover:bg-white/10"
              >
                See Industries
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Full-Width Interactive Flex Accordion */}
          <IndustryHeroAccordion
            industries={industries}
            sectionRefs={sectionRefs}
            scrollTo={scrollTo}
          />
        </div>
      </section>

      {/* ── Industry sections ── */}
      {industries.map((industry, index) => (
        <IndustrySection
          key={industry.id}
          industry={industry}
          index={index}
          sectionRef={sectionRefs[industry.id]}
        />
      ))}

      {/* ── Technologies ── */}
      <section className="relative overflow-hidden border-t border-gray-100 bg-gradient-to-b from-white to-gray-50 py-24 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.06),transparent_50%)]" />

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12"
            >
              <motion.div variants={fadeUp} className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
                  <Layers className="h-3.5 w-3.5" />
                  Tech Stack
                </span>
                <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Technologies Used by Us
                </h2>
              </motion.div>
              <motion.p
                variants={fadeUp}
                className="text-base leading-relaxed text-gray-600 lg:col-span-5"
              >
                We employ the latest tools and tech stack and ensure
                compatibility with various platforms. This versatility allows us
                to build software that seamlessly integrates into your existing
                systems.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 flex flex-wrap gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm"
            >
              {techTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "relative inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors sm:min-w-[140px] sm:flex-none",
                      isActive
                        ? "text-white"
                        : "text-gray-600 hover:text-blue-700",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="tech-tab-active"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 shadow"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <TabIcon className="h-4 w-4" />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>

            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            >
              {activeTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-shadow hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                  {tool.icon ? (
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      width={56}
                      height={56}
                      className="relative h-14 w-14 object-contain transition-transform group-hover:scale-110"
                    />
                  ) : (
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-lg font-bold text-blue-600">
                      {tool.name[0]}
                    </div>
                  )}
                  <span className="relative text-sm font-semibold text-gray-700">
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
