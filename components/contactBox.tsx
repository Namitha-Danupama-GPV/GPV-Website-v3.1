"use client";

import Link from 'next/link';
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface ContactBoxProps {
  showServicesButton?: boolean;
}

const ContactBox: React.FC<ContactBoxProps> = ({ showServicesButton = true }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border border-blue-900/40 text-white p-8 sm:p-14 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 mb-4 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          Get Started
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
          Let&apos;s discuss how our software solutions can help you achieve your business goals and drive innovation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/get-in-touch"
            className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold text-base px-8 py-3.5 rounded-full hover:bg-blue-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-4 w-4 text-blue-900" />
          </Link>
          {showServicesButton && (
            <Link
              href="/our-services"
              className="inline-flex items-center gap-2 border border-white/30 bg-white/5 text-white font-medium text-base px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <span>View Our Services</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactBox;



