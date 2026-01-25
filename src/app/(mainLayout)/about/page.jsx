"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FiArrowDown,
  FiCheck,
  FiUsers,
  FiTarget,
  FiAward,
  FiGlobe,
  FiZap,
  FiPlay // Added Play Icon
} from 'react-icons/fi';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import WhatWeProvide from '@/components/Home/WhatWeProvide';

// ==================== ANIMATIONS ====================
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const SectionLabel = ({ text }) => (
  <motion.div
    variants={fadeInUp}
    className="inline-flex items-center gap-3 mb-4 lg:mb-8"
  >
    <div className="w-12 h-[2px] bg-[#FD9A00]" />
    <span className="text-sm lg:text-base uppercase tracking-widest font-bold text-[#FD9A00] font-teko">
      {text}
    </span>
  </motion.div>
);

const AboutPage = () => {
  const { language } = useLanguage();
  const isBN = language === 'bn';
  const containerRef = useRef(null);

  // Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <div ref={containerRef} className="relative bg-white dark:bg-[#0A0A0A] selection:bg-[#FD9A00] selection:text-black font-poppins text-gray-900 dark:text-white overflow-hidden">

      {/* Background Grid - Same as Home Page */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      {/* ==================== HERO SECTION (REDESIGNED) ==================== */}
      <section className="relative min-h-[85vh] flex items-center pt-12 pb-20 overflow-hidden">
        {/* Blob Element */}
        <motion.div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] bg-[#FD9A00]/10 rounded-full blur-[100px] pointer-events-none"
          animate={{ x: [0, 50, 0], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 15, repeat: Infinity }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10 h-full flex flex-col justify-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={{
                animate: { transition: { staggerChildren: 0.1 } }
              }}
            >
              <SectionLabel text={isBN ? "আমাদের সম্পর্কে" : "ABOUT US"} />

              <div className="relative mb-6">
                <motion.h1
                  variants={fadeInUp}
                  className="text-[10vw] lg:text-[5rem] leading-[0.85] font-black uppercase font-teko text-gray-950 dark:text-white"
                >
                  WE ARE <br />
                  <span className="text-[#FD9A00]">EXTRAIN.</span>
                </motion.h1>

                {/* Play Button / Concept */}
                <motion.div
                  variants={fadeInUp}
                  className="absolute bottom-4 right-0 lg:right-20 hidden lg:flex items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black hover:scale-110 transition-transform cursor-pointer shadow-xl">
                    <FiPlay size={24} className="ml-1" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-60 w-20 leading-tight">Watch Our Story</span>
                </motion.div>
              </div>

              <motion.p
                variants={fadeInUp}
                className="text-xl lg:text-2xl font-light leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl mb-10 border-l-4 border-[#FD9A00] pl-6 py-1"
              >
                {isBN
                  ? "আমরা ডিজিটাল যুগের কারিগর। আধুনিক প্রযুক্তি এবং শৈল্পিক ডিজাইনের সমন্বয়ে আমরা তৈরি করি অসাধারণ ডিজিটাল অভিজ্ঞতা।"
                  : "We are the architects of the digital age. Blending cutting-edge technology with artistic vision to craft exceptional digital experiences."}
              </motion.p>

              <motion.div variants={fadeInUp} className="flex gap-6">
                <Link href="/contact" className="px-8 py-3 bg-[#FD9A00] hover:bg-[#e68a00] text-white font-bold font-teko uppercase text-xl rounded-none transition-all shadow-lg shadow-[#FD9A00]/20">
                  {isBN ? "যোগাযোগ করুন" : "Get in Touch"}
                </Link>
                <Link href="/portfolio" className="px-8 py-3 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 hover:border-[#FD9A00] text-gray-900 dark:text-white font-bold font-teko uppercase text-xl rounded-none transition-all">
                  {isBN ? "পোর্টফোলিও" : "Our Portfolio"}
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Abstract Image composition */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[600px] hidden lg:block"
            >
              <div className="absolute top-0 right-10 w-[80%] h-[90%] bg-gray-200 dark:bg-[#111] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                {/* Stats Overlay */}
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-6xl font-black font-teko leading-none text-[#FD9A00]">5+</span>
                    <span className="text-lg font-medium mb-1">Years</span>
                  </div>
                  <p className="uppercase tracking-widest text-sm opacity-80">Of Digital Excellence</p>
                </div>
              </div>

              {/* Floating Accent Image */}
              <div className="absolute bottom-0 left-0 w-[45%] h-[40%] bg-[#FD9A00] p-2 shadow-2xl">
                <div className="w-full h-full overflow-hidden bg-black relative group">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                    alt="Meeting"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ==================== MISSION SECTION ==================== */}
      <section className="py-24 lg:py-32 relative bg-white dark:bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <SectionLabel text={isBN ? "মিশন" : "OUR MISSION"} />
              <h2 className="text-4xl lg:text-6xl font-black uppercase font-teko leading-[0.9] text-gray-900 dark:text-white mb-8">
                EMPOWERING <span className="text-[#FD9A00]">NEXT-GEN</span> <br />
                DIGITAL LEADERS.
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We believe in a world where technology is accessible, beautiful, and functional. Our mission is to provide the highest quality digital assets and education to help you succeed in the modern economy.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: FiTarget, title: "Precision", desc: "Pixel-perfect execution in every project." },
                  { icon: FiZap, title: "Speed", desc: "Optimized for performance and scale." },
                  { icon: FiGlobe, title: "Global", desc: "Connecting minds across borders." },
                  { icon: FiUsers, title: "Community", desc: "Building a network of elite creators." }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5 rounded-xl hover:border-[#FD9A00] transition-colors group">
                    <item.icon className="text-[#FD9A00] text-2xl mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-lg font-teko uppercase tracking-wide mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT WE PROVIDE ==================== */}
      <WhatWeProvide />

      {/* ==================== FOUNDER SECTION ==================== */}
      <section className="py-24 bg-gray-50 dark:bg-[#111] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Founder Image */}
            <div className="relative w-full lg:w-1/2 aspect-[4/5] lg:aspect-square">
              <div className="absolute inset-0 bg-[#FD9A00] rounded-sm transform rotate-3" />
              <div className="absolute inset-0 bg-gray-900 rounded-sm overflow-hidden transform -rotate-2 hover:rotate-0 transition-transform duration-500 grayscale hover:grayscale-0">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <SectionLabel text="THE VISIONARY" />
              <h2 className="text-4xl lg:text-6xl font-black uppercase font-teko text-gray-900 dark:text-white mb-6">
                ZAYED UDDIN
              </h2>
              <h3 className="text-xl text-[#FD9A00] font-bold tracking-widest uppercase mb-8">Founder & CEO</h3>

              <blockquote className="text-2xl font-light italic text-gray-600 dark:text-gray-300 mb-8 border-l-4 border-[#FD9A00] pl-6 py-2">
                "We don't just write code or design interfaces. We craft experiences that define brands. Excellence is not an act, but a habit."
              </blockquote>


              <div className="flex gap-4">
                <Link href="/contact" className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider font-teko text-xl hover:bg-[#FD9A00] hover:text-black transition-colors">
                  Contact Me
                </Link>
                <Link href="/portfolio" className="px-8 py-3 border border-black dark:border-white text-black dark:text-white font-bold uppercase tracking-wider font-teko text-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="py-32 bg-[#FD9A00] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl lg:text-[7rem] leading-[0.8] font-black uppercase font-teko text-black mb-8">
            LET'S BUILD <br /> THE FUTURE
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto mb-12 font-medium">
            Ready to transform your digital presence? Join thousands of satisfied clients who trust Extrain Web.
          </p>
          <Link href="/contact" className="inline-block px-12 py-5 bg-black text-white text-2xl font-bold font-teko uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
            Start A Project
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
