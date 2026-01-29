"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiPlay, FiArrowDown } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";
import { API_BASE_URL } from "@/config/api";

const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100"
];

const tickerItems = [
    { en: "DESIGN", bn: "ডিজাইন" },
    { en: "DEVELOPMENT", bn: "ডেভেলপমেন্ট" },
    { en: "STRATEGY", bn: "স্ট্র্যাটেজি" },
    { en: "SOLUTIONS", bn: "সল্যুশন" },
];

const Hero = () => {
    const { language } = useLanguage();
    const isBn = language === 'bn';
    const bengaliClass = isBn ? "hind-siliguri" : "";

    const [softwareCount, setSoftwareCount] = useState(0);
    const [websiteCount, setWebsiteCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [softRes, webRes] = await Promise.all([
                    fetch(`${API_BASE_URL}/software`),
                    fetch(`${API_BASE_URL}/websites`)
                ]);
                const softData = await softRes.json();
                const webData = await webRes.json();
                setSoftwareCount(softData.meta?.total || (Array.isArray(softData.data) ? softData.data.length : 0));
                setWebsiteCount(webData.meta?.total || (Array.isArray(webData.data) ? webData.data.length : 0));
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        };
        fetchCounts();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const floatingVariants = {
        animate: {
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
    };

    const translations = {
        description: isBn ? "আমরা এক্সট্রেন ওয়েব, আপনার ব্যবসার জন্য ক্রিয়েটিভ এবং ইউজার-কেন্দ্রিক ডিজিটাল সমাধান তৈরি করি।" : "We're Extrain Web, to build creative & user-centric designs also develop for customer.",
        line1: isBn ? "ওয়েবসাইট ও" : "WEBSITE &",
        line2Part1: isBn ? "সফটওয়্যার" : "SOFTWARE",
        line2Part2: isBn ? "সল্যুশন" : "SOLUTION",
        line3: isBn ? "সাথে এক্সট্রেন ওয়েব" : "WITH EXTRAIN WEB.",
        statsCount: `${websiteCount + softwareCount}+`,
        statsText: isBn ? "সন্তুষ্ট গ্রাহক বিশ্বজুড়ে।" : "customers in world-wide.",
        agencyType: isBn ? "গ্লোবাল ডিজিটাল মার্কেটপ্লেস।" : "Global Digital Marketplace."
    };

    return (
        <section className="relative min-h-[90vh] flex flex-col pt-24 lg:pt-32 pb-12 overflow-hidden bg-white dark:bg-[#0A0A0A]">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <motion.div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#FD9A00]/5 rounded-full blur-[120px]"
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }} transition={{ duration: 15, repeat: Infinity }} />

            <div className="container relative z-10 px-6 lg:px-12 max-w-[1400px] mx-auto flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

                    {/* Left Content Area */}
                    <div className="flex-1">
                        <motion.div variants={containerVariants} initial="hidden" animate="visible">

                            {/* Row 1: Desc + Line 1 + Bird */}
                            <div className="flex items-start gap-6 lg:gap-12 mb-2 lg:mb-4">
                                <motion.div variants={itemVariants} className="w-32 lg:w-48 pt-4 hidden md:block">
                                    <div className="w-12 lg:w-16 h-[1.5px] bg-black dark:bg-white mb-3" />
                                    <p className={`text-[10px] lg:text-[11px] leading-relaxed text-gray-500 font-medium ${bengaliClass}`}>
                                        {translations.description}
                                    </p>
                                </motion.div>

                                <motion.h1 className={`text-5xl lg:text-[85px] font-black text-gray-950 dark:text-white uppercase font-teko leading-[0.95] tracking-tight ${bengaliClass}`}>
                                    {translations.line1}
                                </motion.h1>

                                <motion.div variants={floatingVariants} animate="animate" className="mt-2 hidden lg:block">
                                    <svg width="60" height="40" viewBox="0 0 112 60" fill="none" className="text-gray-900 dark:text-white">
                                        <path d="M0 1C30.8503 1 34.8743 21.4865 34.8743 42.3801C46.3872 37.2924 68.8096 33.4936 66.3952 59C71.3134 46.6764 81.1497 11.5146 112 11.5146" stroke="currentColor" strokeWidth="1.5" />
                                        <path d="M40.5749 20.3333C41.1337 22.4815 42.1844 27.5918 41.9162 30.848C43.7046 29.039 48.4216 25.8281 52.982 27.4561" stroke="currentColor" strokeWidth="1.5" />
                                    </svg>
                                </motion.div>
                            </div>

                            {/* Row 2: SOFTWARE + Arrow + SOLUTION */}
                            <motion.div variants={itemVariants} className="flex items-center gap-4 lg:gap-6 ml-0 lg:ml-48 mb-2 lg:mb-4">
                                <h1
                                    className={`text-5xl lg:text-[85px] font-black uppercase font-teko leading-[0.95] tracking-tight ${bengaliClass}`}
                                    style={{ color: '#FD9A00' }}
                                >
                                    {translations.line2Part1}
                                </h1>

                                <div className="h-10 lg:h-14 px-5 lg:px-8 bg-[#C4EE18] rounded-full flex items-center justify-center shadow-lg group cursor-pointer hover:scale-105 transition-transform">
                                    <svg className="w-8 lg:w-10 text-black" viewBox="0 0 40 16" fill="currentColor">
                                        <path d="M29.88 15.8569L39.552 9.01379C39.6896 8.90372 39.8026 8.75338 39.8808 8.57638C39.959 8.39937 40 8.20127 40 8C40 7.79873 39.959 7.60063 39.8808 7.42363C39.8026 7.24662 39.6896 7.09628 39.552 6.98621L29.88 0.143139C29.6915 0.0179054 29.4743 -0.0269382 29.2628 0.0156776C29.0512 0.0582934 28.8572 0.185945 28.7114 0.378507C28.5656 0.571069 28.4763 0.817589 28.4575 1.0792C28.4387 1.34081 28.4916 1.60264 28.6077 1.8234L31.4128 6.82663L0.958012 6.82663C0.70393 6.82663 0.460255 6.95026 0.280594 7.1703C0.100933 7.39035 0 7.6888 0 8C0 8.3112 0.100933 8.60965 0.280594 8.8297C0.460255 9.04975 0.70393 9.17337 0.958012 9.17337L31.4128 9.17337L28.6077 14.1766C28.4916 14.3974 28.4387 14.6592 28.4575 14.9208C28.4763 15.1824 28.5656 15.4289 28.7114 15.6215C28.8572 15.8141 29.0512 15.9417 29.2628 15.9843C29.4743 16.0269 29.6915 15.9821 29.88 15.8569Z" />
                                    </svg>
                                </div>

                                <h1 className={`text-5xl lg:text-[85px] font-black text-gray-950 dark:text-white uppercase font-teko leading-[0.95] tracking-tight ${bengaliClass}`}>
                                    {translations.line2Part2}
                                </h1>
                            </motion.div>

                            {/* Row 3: SOLUTIONS. + Shape */}
                            <motion.div variants={itemVariants} className="flex items-center gap-6 ml-0 lg:ml-30 mb-12 relative">
                                <span className={`absolute -top-1 -left-12 lg:-left-16 text-2xl lg:text-4xl text-[#FD9A00] font-normal lowercase tracking-wide z-10 caveat ${bengaliClass}`}>
                                    {isBn ? "সাথে" : "with"}
                                </span>
                                <h1 className={`text-5xl lg:text-[85px] font-black text-gray-950 dark:text-white uppercase font-teko leading-[0.95] tracking-tight ${bengaliClass}`}>
                                    {isBn ? "এক্সট্রেন ওয়েব" : "EXTRA IN WEB."}
                                </h1>
                                <div className="w-10 lg:w-12 h-10 lg:h-12 border-4 border-[#C4EE18] rounded-full hidden lg:block" />
                            </motion.div>

                            {/* Bottom Row: Stats & Play */}
                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-10 lg:gap-16 ml-0 lg:ml-20">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {avatars.map((url, i) => (
                                            <img key={i} src={url} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#0A0A0A] object-cover shadow-sm" alt="User" />
                                        ))}
                                    </div>
                                    <p className={`text-[12px] leading-tight text-gray-400 font-medium ${bengaliClass}`}>
                                        We have <span className="font-bold text-gray-900 dark:text-white text-base">{translations.statsCount}</span><br />
                                        {translations.statsText}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 -ml-2.5">
                                    <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black cursor-pointer hover:scale-110 transition-transform shadow-lg">
                                        <FiPlay className="ml-1" size={18} />
                                    </div>
                                    <p className={`text-[12px] leading-tight text-gray-400 font-medium ${bengaliClass}`}>
                                        {isBn ? "আমরা গ্লোবাল" : "We're Global"}<br />
                                        <span className="font-bold text-gray-900 dark:text-white">{translations.agencyType}</span>
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Card Panel */}
                    <Link href="/websites" className="block w-full lg:w-[360px]">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-white/5 rounded-md p-8 lg:mt-40 shadow-xl cursor-pointer overflow-hidden group"
                        >
                            <div className="flex items-center gap-4 mb-14">
                                <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center text-white dark:text-black font-black text-xl">
                                    E.
                                </div>
                                <div className="w-12 h-12 bg-[#C4EE18] rounded-full flex items-center justify-center text-black shadow-inner transition-transform group-hover:rotate-45">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M7 17l10-10M17 17V7H7" />
                                    </svg>
                                </div>
                            </div>

                            <h3 className={`text-xl font-black text-gray-900 dark:text-white mb-2 uppercase font-teko ${bengaliClass}`}>
                                {isBn ? "এক্সট্রেন প্রোভাইডার" : "Extrain Provider"}
                            </h3>
                            <p className={`text-[12px] text-gray-500 leading-relaxed mb-6 ${bengaliClass}`}>
                                {isBn ? "২০১৯ থেকে আপনার বিশ্বস্ত ডিজিটাল পার্টনার।" : "Helping businesses scale with expert solutions since 2019."}
                            </p>

                            {/* Project Info Stats */}
                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100 dark:border-white/10">
                                <div className="p-3 bg-white dark:bg-black/40 rounded-md border border-gray-100 dark:border-white/5 shadow-sm">
                                    <h4 className="text-xl font-black text-gray-900 dark:text-white font-teko leading-none">{websiteCount}+</h4>
                                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-1">
                                        {isBn ? "ওয়েবসাইট" : "Websites"}
                                    </p>
                                </div>
                                <div className="p-3 bg-white dark:bg-black/40 rounded-md border border-gray-100 dark:border-white/5 shadow-sm">
                                    <h4 className="text-xl font-black text-gray-900 dark:text-white font-teko leading-none">{softwareCount}+</h4>
                                    <p className="text-[9px] text-gray-500 uppercase font-bold tracking-wider mt-1">
                                        {isBn ? "সফটওয়্যার" : "Software"}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>

            {/* Infinite Text Marquee (Ticker) - As requested */}
            <div className="absolute bottom-4 lg:bottom-8 left-0 w-full bg-[#C4EE18] py-3 lg:py-5 overflow-hidden border-t-2 border-black/5">
                <motion.div
                    className="flex whitespace-nowrap items-center"
                    animate={{ x: [0, "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {/* Duplicate contents for seamless loop */}
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="flex items-center">
                            {tickerItems.map((item, idx) => (
                                <React.Fragment key={idx}>
                                    <span className={`text-xl lg:text-3xl font-black text-black uppercase tracking-tighter mx-8 lg:mx-12 font-teko`}>
                                        {isBn ? item.bn : item.en}
                                    </span>
                                    {idx % 2 === 0 ? (
                                        <span className="text-black text-2xl lg:text-4xl">●</span>
                                    ) : (
                                        <div className="flex items-center">
                                            <svg className="w-8 lg:w-12 h-6 lg:h-8 text-black" viewBox="0 0 40 16" fill="currentColor">
                                                <path d="M29.88 15.8569L39.552 9.01379C39.6896 8.90372 39.8026 8.75338 39.8808 8.57638C39.959 8.39937 40 8.20127 40 8C40 7.79873 39.959 7.60063 39.8808 7.42363C39.8026 7.24662 39.6896 7.09628 39.552 6.98621L29.88 0.143139C29.6915 0.0179054 29.4743 -0.0269382 29.2628 0.0156776C29.0512 0.0582934 28.8572 0.185945 28.7114 0.378507C28.5656 0.571069 28.4763 0.817589 28.4575 1.0792C28.4387 1.34081 28.4916 1.60264 28.6077 1.8234L31.4128 6.82663L0.958012 6.82663C0.70393 6.82663 0.460255 6.95026 0.280594 7.1703C0.100933 7.39035 0 7.6888 0 8C0 8.3112 0.100933 8.60965 0.280594 8.8297C0.460255 9.04975 0.70393 9.17337 0.958012 9.17337L31.4128 9.17337L28.6077 14.1766C28.4916 14.3974 28.4387 14.6592 28.4575 14.9208C28.4763 15.1824 28.5656 15.4289 28.7114 15.6215C28.8572 15.8141 29.0512 15.9417 29.2628 15.9843C29.4743 16.0269 29.6915 15.9821 29.88 15.8569Z" />
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Down Indication - Positioned above ticker */}
            <div className="absolute left-6 lg:left-12 bottom-20 lg:bottom-28 hidden lg:flex flex-col items-center gap-4 opacity-30">
                <FiArrowDown size={20} className="animate-bounce" />
                <div className="w-[1px] h-12 bg-black dark:bg-white" />
            </div>

            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
                .caveat { font-family: 'Caveat', cursive; }
            `}</style>
        </section>
    );
};

export default Hero;
