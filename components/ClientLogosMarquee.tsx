"use client";

import Image from "next/image";

interface PartnerLogo {
  name: string;
  src: string;
  tag?: string;
}

const partnerLogos: PartnerLogo[] = [
  { name: "GPV Enterprise", src: "/Logo-v6.png", tag: "Global Pearl" },
  { name: "Dentax Health", src: "/dentaxLogo.png", tag: "Healthcare" },
  { name: "AeroManage Systems", src: "/aeromanageLogo.png", tag: "Aviation" },
  { name: "EduCore Learning", src: "/educoreLogo.png", tag: "Education" },
  { name: "Voxa Booking", src: "/voxaLogo.png", tag: "Enterprise" },
  { name: "Photon XR", src: "/photonXRLogo.png", tag: "Imaging" },
  { name: "Local Professional Direct", src: "/localProfessionalDirectLogo.png", tag: "Services" },
  { name: "MSO Sequoia", src: "/MSOLogo.png", tag: "Medical" },
];

export default function ClientLogosMarquee() {
  return (
    <section className="w-full py-10 sm:py-12 bg-slate-50/70 border-y border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6 sm:mb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.22em] text-gray-500 shadow-sm backdrop-blur">
          TRUSTED BY INDUSTRY LEADERS &amp; INNOVATORS WORLDWIDE
        </span>
      </div>

      {/* Infinite Marquee Loop Container */}
      <div className="group/marquee relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        {/* Track 1 */}
        <div className="flex shrink-0 gap-8 sm:gap-14 animate-marquee items-center min-w-full justify-around">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer py-2 px-4 rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-blue-100"
            >
              <div className="relative h-9 w-9 flex items-center justify-center shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={36}
                  height={36}
                  className="object-contain max-h-9"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-gray-800 leading-snug">
                  {logo.name}
                </span>
                {logo.tag && (
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    {logo.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for Seamless Infinite Loop) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 gap-8 sm:gap-14 animate-marquee items-center min-w-full justify-around"
        >
          {partnerLogos.map((logo, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer py-2 px-4 rounded-2xl hover:bg-white hover:shadow-md border border-transparent hover:border-blue-100"
            >
              <div className="relative h-9 w-9 flex items-center justify-center shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={36}
                  height={36}
                  className="object-contain max-h-9"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-gray-800 leading-snug">
                  {logo.name}
                </span>
                {logo.tag && (
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                    {logo.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
