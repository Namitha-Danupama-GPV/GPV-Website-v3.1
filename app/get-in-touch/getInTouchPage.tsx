"use client"

import Head from 'next/head';
import { useState } from 'react';
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { getInTouchMetadata } from '../../metadata/getInTouchMetadata.js';
import emailjs from "emailjs-com";
import { toast } from 'sonner';
import { Loader2, Sparkles, Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function GetInTouchPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    organization: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_46wnwgj";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_sm7vyun";
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "RSYKiGw4dibVK-Rl9";

    try {
      const res = await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "info@globalpearlventures.com",
          title: `New message from ${formData.name}`,
          name: formData.name,
          companyName: formData.organization || "N/A",
          email: formData.email,
          phone: formData.contactNo || "N/A",
          message: formData.message || "N/A",
        },
        userId
      );

      if (res.status === 200 || res.text === "OK") {
        toast.success("Email sent successfully! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          contactNo: "",
          organization: "",
          message: ""
        });
      }
    } catch (err: any) {
      console.error("EmailJS Contact Error:", err);
      const errorMsg = err?.text || err?.message || "Failed to send email.";
      toast.error(`Email Error: ${errorMsg}`);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Head>
        <title>{getInTouchMetadata.title}</title>
        <meta name="description" content={getInTouchMetadata.description} />
        <meta name='keywords' content={getInTouchMetadata.keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ── Hero Section ── */}
      <section className="relative text-center py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-white border-b border-gray-100">
        <BackgroundAnimation />

        <div className="relative max-w-4xl mx-auto z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-4 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            Let's Connect
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4 leading-[1.12]">
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Let's discuss how our software solutions can help you achieve your business goals and drive innovation.
          </p>
        </div>
      </section>

      {/* ── Contact Form Section ── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 flex-grow bg-gradient-to-b from-white via-slate-50/60 to-white">
        <div className="max-w-4xl mx-auto rounded-3xl border border-gray-200/80 bg-white p-8 sm:p-12 shadow-xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700 mb-2">
              <MessageSquare className="h-3.5 w-3.5" />
              Direct Channel
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Fill out the form below, and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Name <span className="text-blue-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Email <span className="text-blue-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/30"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactNo" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Contact No
                </label>
                <input
                  type="text"
                  id="contactNo"
                  name="contactNo"
                  placeholder="Enter Contact Number"
                  value={formData.contactNo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/30"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Organization <span className="text-gray-400 font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="Write your organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/30"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all bg-gray-50/30 resize-y"
              ></textarea>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto px-10 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 min-w-[160px]"
              >
                {isSending ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

