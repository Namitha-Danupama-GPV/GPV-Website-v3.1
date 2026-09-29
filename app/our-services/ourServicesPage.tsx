"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import ContactBox from "@/components/contactBox";
import { motion } from "framer-motion";

interface ServiceDetailProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition: "left" | "right";
}

const ServiceDetail = ({
  title,
  description,
  features,
  image,
  imagePosition,
}: ServiceDetailProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-6xl mx-auto rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div
        className={`flex flex-col gap-8 md:gap-12 items-center ${
          imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-gray-100 bg-gradient-to-br from-blue-50/50 via-slate-50 to-teal-50/30 p-4 shadow-inner">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 w-fit mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Service Capability
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">{description}</p>

          <div className="grid grid-cols-1 gap-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-0.5 shrink-0 rounded-full bg-teal-50 p-1 text-teal-600 border border-teal-200/60">
                  <CheckCircle2 className="h-4 w-4 text-teal-600" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const servicesData = [
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "We create responsive user-friendly websites and Web applications that deliver exceptional user experiences.",
    features: [
      "Custom website development",
      "Progressive Web Apps (PWAs)",
      "E-commerce solutions",
      "Content Management Systems",
      "Web application development",
      "API development and integration",
    ],
    image: "/web_dev.png",
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description:
      "We build native and cross-platform mobile applications that engage users and drive business growth.",
    features: [
      "iOS app development",
      "Android app development",
      "Cross-platform development",
      "Mobile app UI/UX design",
      "App maintenance and support",
      "App store optimization",
    ],
    image: "/mobile_app_dev.png",
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "Tailored software solutions designed to address your unique business challenges and requirements.",
    features: [
      "Enterprise software development",
      "Software integration services",
      "Legacy system modernization",
      "Quality assurance & testing",
      "Software maintenance & support",
      "Agile development methodologies",
    ],
    image: "/custom_se.png",
  },
  {
    id: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    description:
      "Streamline your infrastructure with modern cloud solutions and DevOps practices for enhanced efficiency.",
    features: [
      "Cloud migration & hosting",
      "Infrastructure as code",
      "CI/CD pipeline implementation",
      "Cloud architecture design",
      "Containerization & orchestration",
      "DevOps automation",
    ],
    image: "/cloud_and_devops.png",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning Solutions",
    description:
      "Leverage the power of artificial intelligence to transform your data into actionable insights and automated processes.",
    features: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision systems",
      "Machine learning models",
      "AI integration services",
      "Data analytics solutions",
    ],
    image: "/ai_ml.png",
  },
  {
    id: "cybersecurity",
    title: "Cyber Security Services",
    description:
      "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
    features: [
      "Security assessments & audits",
      "Penetration testing",
      "Security architecture design",
      "Compliance management",
      "Incident response planning",
      "Security training & awareness",
    ],
    image: "/cybersecurity.png",
  },
  {
    id: "consulting",
    title: "IT Consulting & Digital Transformation",
    description:
      "Strategic guidance to help your business navigate the digital landscape and drive successful transformation.",
    features: [
      "Digital strategy development",
      "Technology roadmapping",
      "Business process optimization",
      "IT governance & compliance",
      "Change management",
      "Digital maturity assessment",
    ],
    image: "/it.png",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences that delight customers and increase conversion rates.",
    features: [
      "User research & testing",
      "Wireframing & prototyping",
      "Interface design",
      "Usability analysis",
      "Responsive design",
      "Design systems development",
    ],
    image: "/ui_ux.png",
  },
  {
    id: "big-data",
    title: "Big Data",
    description:
      "Harness the power of your data through advanced analytics and processing solutions.",
    features: [
      "Data warehouse implementation",
      "Big data processing",
      "Data visualization",
      "ETL pipelines",
      "Real-time analytics",
      "Data governance strategy",
    ],
    image: "/big_data.png",
  },
];

export default function OurServices() {
  const iconContainerRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const autoScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if we should display scroll buttons
  const checkScrollButtons = () => {
    if (iconContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = iconContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    if (typeof window !== "undefined") {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    }
    
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  // Auto-scroll effect for mobile
  useEffect(() => {
    if (!isMobile || !mobileScrollRef.current || autoScrollPaused || reachedEnd) return;

    const scrollContainer = mobileScrollRef.current;
    let animationFrameId: number;
    
    const scrollSpeed = 0.5; // Pixels per frame
    let currentScrollPosition = scrollContainer.scrollLeft;
    
    const scroll = () => {
      if (!scrollContainer) return;
      
      currentScrollPosition += scrollSpeed;
      
      // Check if we've reached the end
      if (currentScrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
        setReachedEnd(true);
        return;
      }
      
      scrollContainer.scrollLeft = currentScrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    animationFrameId = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, autoScrollPaused, reachedEnd]);

  // Handle user interaction
  const pauseAutoScroll = () => {
    setAutoScrollPaused(true);
    
    // Clear any existing timeout
    if (autoScrollTimeoutRef.current) {
      clearTimeout(autoScrollTimeoutRef.current);
    }
    
    // Resume auto-scroll after 3 seconds of inactivity
    autoScrollTimeoutRef.current = setTimeout(() => {
      setAutoScrollPaused(false);
    }, 3000);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (autoScrollTimeoutRef.current) {
        clearTimeout(autoScrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      checkScrollButtons();
    };

    if (typeof window !== "undefined") {
      checkScrollButtons();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollLeft = () => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
      pauseAutoScroll();
      // If we scroll left, we're not at the end anymore
      setReachedEnd(false);
    }
  };

  const scrollRight = () => {
    if (mobileScrollRef.current) {
      mobileScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
      pauseAutoScroll();
    }
  };

  const serviceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [activeService, setActiveService] = useState<string>("web-dev");

  // Scrollspy: Automatically highlight the current service tab when scrolling down the page
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveService(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: 0.2,
      }
    );

    servicesData.forEach((s) => {
      const el = serviceRefs.current[s.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToService = (id: string) => {
    const el = serviceRefs.current[id];
    if (el) {
      const yOffset = -330; // Clear sticky navbar (~70px) + Capabilities dock (~170px) + extra breathing room (~90px)
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    }
  };

  // Auto scroll active item in mobile scrollable dock when activeService changes
  useEffect(() => {
    if (activeService && mobileScrollRef.current) {
      const activeEl = mobileScrollRef.current.querySelector(`[data-service-id="${activeService}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeService]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ── Hero Section ── */}
      <section className="relative text-center pt-16 md:pt-20 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white">
        <BackgroundAnimation />

        <div className="relative max-w-5xl mx-auto z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Comprehensive IT Capabilities
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-5 leading-[1.15]">
            Our <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
            Global Pearl Ventures (GPV) provides innovative, secure, and
            scalable technology solutions tailored to help businesses succeed in
            the digital age driving efficiency, growth, and a competitive edge.
          </p>
        </div>
      </section>

      {/* ── STICKY Capsule Navigation Dock (Stays in place when scrolling) ── */}
      <div className="sticky top-16 md:top-20 z-40 bg-white/95 backdrop-blur-2xl border-y border-blue-100/90 shadow-xl py-3 sm:py-4 transition-all duration-300">
        <div className="max-w-7xl lg:max-w-[1400px] mx-auto px-2 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-blue-200/90 bg-gradient-to-r from-slate-50 via-blue-50/40 to-slate-50 backdrop-blur-xl p-3 sm:p-5 md:p-6 shadow-2xl shadow-blue-950/10">
            
            {/* Capsule Dock Header Bar */}
            <div className="flex items-center justify-between px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200/80 pb-2.5">
              <span className="flex items-center gap-2.5 text-blue-700 font-extrabold text-xs sm:text-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
                </span>
                Capabilities Dock
              </span>
              <span className="hidden sm:inline-block text-xs text-gray-500 normal-case font-semibold">
                Select any icon to jump • Syncs automatically as you scroll
              </span>
            </div>

            {/* Mobile Arrows & Scrollable Dock */}
            <div className="relative">
              <button
                className={`absolute -left-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 hover:bg-blue-50 rounded-full p-2.5 z-20 shadow-md md:hidden ${
                  !showLeftArrow ? 'opacity-40' : 'opacity-100'
                }`}
                onClick={scrollLeft}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-5 w-5 text-blue-600" />
              </button>

              {/* Mobile scrollable dock */}
              <div 
                ref={mobileScrollRef} 
                className="flex md:hidden overflow-x-auto scrollbar-hide snap-x space-x-3 px-1 py-1 no-scrollbar mobile-scroll-container"
                onTouchStart={pauseAutoScroll}
                onMouseDown={pauseAutoScroll}
                onScroll={(e) => {
                  pauseAutoScroll();
                  const target = e.currentTarget;
                  if (target.scrollLeft >= target.scrollWidth - target.clientWidth - 10) {
                    setReachedEnd(true);
                  }
                }}
                style={{ 
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {servicesData.map((service) => {
                  const isActive = activeService === service.id;
                  return (
                    <div
                      key={service.id}
                      data-service-id={service.id}
                      className={`relative cursor-pointer p-3.5 rounded-2xl flex-shrink-0 snap-center active:scale-95 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-blue-600 via-teal-600 to-emerald-600 text-white shadow-lg shadow-teal-500/30 ring-2 ring-teal-400/80 scale-105"
                          : "bg-white border border-gray-200/90 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50"
                      }`}
                      style={{ minWidth: '125px' }}
                      onClick={() => {
                        scrollToService(service.id);
                        pauseAutoScroll();
                      }}
                    >
                      {isActive && (
                        <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-300 border-2 border-white"></span>
                        </span>
                      )}
                      <div className={`w-12 h-12 relative mx-auto mb-2 rounded-xl flex items-center justify-center p-1.5 transition-colors ${
                        isActive ? "bg-white/25 backdrop-blur-md shadow-inner" : "bg-slate-50 border border-gray-100"
                      }`}>
                        <Image
                          src={`/${service.id}-icon.png`}
                          alt={service.title}
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <p className={`text-xs font-extrabold text-center line-clamp-2 leading-tight ${
                        isActive ? "text-white" : "text-gray-800"
                      }`}>
                        {service.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Desktop Grid inside Capsule Dock */}
              <div className="hidden md:grid grid-cols-9 gap-3 sm:gap-4 px-1 py-1">
                {servicesData.map((service) => {
                  const isActive = activeService === service.id;
                  return (
                    <div
                      key={service.id}
                      data-service-id={service.id}
                      className={`relative cursor-pointer p-3 sm:p-4 rounded-2xl text-center active:scale-95 transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-br from-blue-600 via-teal-600 to-emerald-600 text-white shadow-xl shadow-teal-500/35 ring-2 ring-teal-400/80 scale-[1.08] z-10"
                          : "bg-white border border-gray-200/90 text-gray-700 hover:border-blue-400 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                      }`}
                      onClick={() => scrollToService(service.id)}
                    >
                      {isActive && (
                        <span className="absolute -top-1.5 -right-1.5 flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-teal-300 border-2 border-white"></span>
                        </span>
                      )}
                      <div className={`w-11 h-11 sm:w-12 sm:h-12 relative mx-auto mb-2 rounded-xl flex items-center justify-center p-1.5 transition-colors ${
                        isActive ? "bg-white/25 backdrop-blur-md shadow-inner" : "bg-slate-50 border border-slate-100"
                      }`}>
                        <Image
                          src={`/${service.id}-icon.png`}
                          alt={service.title}
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <p className={`text-xs font-extrabold leading-tight ${
                        isActive ? "text-white" : "text-gray-800"
                      }`}>
                        {service.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <button
                className={`absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 hover:bg-blue-50 rounded-full p-2.5 z-20 shadow-md md:hidden ${
                  !showRightArrow ? 'opacity-40' : 'opacity-100'
                }`}
                onClick={scrollRight}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-5 w-5 text-blue-600" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* ── Service Details List ── */}
      <div className="space-y-12 md:space-y-16 py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50/50 to-white">
        {servicesData.map((service, index) => (
          <div
            ref={(el) => { serviceRefs.current[service.id] = el; }}
            key={service.id}
            id={service.id}
            className="scroll-mt-[330px]"
          >
            <ServiceDetail
              title={service.title}
              description={service.description}
              features={service.features}
              image={service.image}
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          </div>
        ))}
      </div>

      {/* ── Call to Action Banner ── */}
      <ContactBox showServicesButton={false} />

      {/* CSS for scrolling behavior */}
      <style jsx global>{`
      /* Hide scrollbars but maintain functionality */
      .no-scrollbar {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;     /* Firefox */
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;             /* Chrome, Safari and Opera */
      }

      /* Smooth scroll behavior for auto/manual scrolling */
      .mobile-scroll-container {
        scroll-behavior: smooth;
      }
    `}</style>
    </div>
  );
}