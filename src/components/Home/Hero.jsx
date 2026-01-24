"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuArrowRight, LuPlay, LuArrowDown, LuSparkles, LuCode, LuGlobe, LuSearch, LuSmile, LuHeadphones } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageContext";
import { API_BASE_URL } from "@/config/api";

const Hero = () => {
    const { language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

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

    return (
        <section className="relative min-h-screen flex items-center bg-[#FAFAFA] dark:bg-[#0A0A0A] overflow-hidden">

            {/* Modern Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Static Gradient Blobs */}
                <div className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] bg-gradient-to-br from-[#ED1C3E]/10 via-[#FD9A00]/10 to-transparent rounded-full blur-[100px] dark:opacity-30" />
                <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-gradient-to-bl from-[#FD9A00]/10 via-[#ED1C3E]/5 to-transparent rounded-full blur-[80px] dark:opacity-20" />
                <div className="absolute -bottom-[20%] left-[20%] w-[50vw] h-[50vw] bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent rounded-full blur-[100px] dark:opacity-20" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,transparent,white)] dark:bg-[radial-gradient(circle_800px_at_50%_50%,transparent,#0A0A0A)]"></div>
            </div>

            <div className="container mx-auto px-4 lg:px-16 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Top Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
                            <LuSparkles className="w-4 h-4 text-[#ED1C3E]" />
                            <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${bengaliClass}`}>
                                {language === 'bn' ? 'বাংলাদেশের #১ ডিজিটাল মার্কেটপ্লেস' : '#1 Digital Marketplace in Bangladesh'}
                            </span>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="text-center mb-6">
                        <h1 className={`font-bold leading-[1.1] tracking-tight ${language === 'bn' ? 'hind-siliguri text-4xl sm:text-5xl lg:text-6xl' : 'text-4xl sm:text-5xl lg:text-6xl'}`}>
                            <span className="block mb-2 text-gray-900 dark:text-white">
                                {language === 'bn' ? 'প্রিমিয়াম' : 'Premium'}
                            </span>
                            <span className="block">
                                <span className="text-[#ED1C3E]">
                                    {language === 'bn' ? 'ওয়েবসাইট' : 'Website'}
                                </span>
                                <span className="text-gray-900 dark:text-white">
                                    {language === 'bn' ? ' ও ' : ' & '}
                                </span>
                                <span className="text-[#FD9A00]">
                                    {language === 'bn' ? 'সফটওয়্যার' : 'Software'}
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <p className={`text-center text-gray-500 dark:text-gray-400 text-sm lg:text-base max-w-xl mx-auto mb-8 ${bengaliClass}`}>
                        {language === 'bn'
                            ? 'হাই-কোয়ালিটি টেমপ্লেট এবং রেডিমেড সফটওয়্যার দিয়ে আপনার বিজনেস শুরু করুন'
                            : 'Get high-quality templates and ready-made software to kickstart your business'}
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl mx-auto mb-10 relative z-20">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ED1C3E] to-[#FD9A00] rounded-full opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
                            <div className="relative flex items-center bg-white dark:bg-gray-900 rounded-full shadow-lg p-1.5 border border-gray-100 dark:border-gray-800">
                                <div className="pl-4 text-gray-400">
                                    <LuSearch className="w-5 h-5" />
                                </div>
                                <input
                                    type="text"
                                    placeholder={language === 'bn' ? 'কি খুঁজছেন? (যেমন: ই-কমার্স, স্কুল ম্যানেজমেন্ট...)' : 'What are you looking for? (e.g. e-commerce, school...)'}
                                    className={`flex-1 w-full px-4 py-2.5 bg-transparent text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none text-sm ${bengaliClass}`}
                                />
                                <button className="px-6 py-2.5 bg-[#ED1C3E] hover:bg-[#C91633] text-white font-medium rounded-full transition-all shadow-md shadow-red-500/20 text-sm">
                                    {language === 'bn' ? 'খুঁজুন' : 'Search'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <Link
                            href="/website"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-lg shadow-gray-900/10"
                        >
                            <span className={bengaliClass}>
                                {language === 'bn' ? 'টেমপ্লেট দেখুন' : 'Browse Templates'}
                            </span>
                            <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/software"
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#ED1C3E] hover:text-[#ED1C3E] transition-all"
                        >
                            <span className={bengaliClass}>
                                {language === 'bn' ? 'সফটওয়্যার দেখুন' : 'Browse Software'}
                            </span>
                        </Link>
                    </div>

                    {/* Compact Stats Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                { icon: LuGlobe, value: `${websiteCount}+`, label: language === 'bn' ? 'টেমপ্লেট' : 'Templates', color: 'text-rose-500' },
                                { icon: LuCode, value: `${softwareCount}+`, label: language === 'bn' ? 'সফটওয়্যার' : 'Software', color: 'text-amber-500' },
                                { icon: LuSmile, value: '500+', label: language === 'bn' ? 'সন্তুষ্ট গ্রাহক' : 'Happy Clients', color: 'text-emerald-500' },
                                { icon: LuHeadphones, value: '24/7', label: language === 'bn' ? 'সাপোর্ট' : 'Support', color: 'text-blue-500' },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow"
                                >
                                    <stat.icon className={`w-8 h-8 mb-3 ${stat.color}`} />
                                    <div className="text-2xl font-bold text-gray-900 dark:text-white leading-none mb-1">
                                        {stat.value}
                                    </div>
                                    <div className={`text-sm text-gray-500 dark:text-gray-400 ${bengaliClass}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-8 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-950 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"
                                    />
                                ))}
                            </div>
                            <span className={`text-sm text-gray-600 dark:text-gray-400 ${bengaliClass}`}>
                                {language === 'bn' ? '৫০০+ সন্তুষ্ট গ্রাহক' : '500+ Happy Customers'}
                            </span>
                        </div>
                        <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block" />
                        <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <svg key={i} className="w-4 h-4 text-[#FD9A00]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <span className={`text-sm text-gray-600 dark:text-gray-400 ${bengaliClass}`}>
                                {language === 'bn' ? '৪.৯/৫ রেটিং' : '4.9/5 Rating'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
