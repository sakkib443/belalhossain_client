"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWebsites } from "@/redux/websiteSlice";
import { fetchCategories } from "@/redux/categorySlice";
import dynamic from "next/dynamic";
import { LuGlobe, LuPlus } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageContext";

const RightWebsiteDetails = dynamic(
    () => import("@/components/websitepage/RightWebsiteDetails"),
    { ssr: false }
);

// Loading fallback component
const LoadingFallback = () => (
    <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-[#FD9A00] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const WebsiteContent = () => {
    const dispatch = useDispatch();
    const { websiteList = [], loading } = useSelector((state) => state.websites || {});
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [mounted, setMounted] = useState(false);
    const { t, language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    useEffect(() => {
        setMounted(true);
        dispatch(fetchWebsites());
        dispatch(fetchCategories({ type: 'website' }));
    }, [dispatch]);

    if (!mounted) return <LoadingFallback />;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0F172A] transition-colors duration-300 relative">
            {/* Hero Header Section - Left Aligned */}
            <section className="relative bg-white dark:bg-[#080808] overflow-hidden border-b border-gray-100 dark:border-white/5">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(196,238,24,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(196,238,24,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:opacity-5"></div>

                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#C4EE18]/5 to-transparent rounded-full blur-[100px]" />

                <div className="container mx-auto px-4 lg:px-16 py-16 lg:py-20 relative z-10">
                    <div className="max-w-4xl">
                        {/* Modern Left Header */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-[2px] bg-[#C4EE18]" />
                            <span className={`text-[10px] font-black text-[#C4EE18] uppercase tracking-[0.4em] ${bengaliClass}`}>
                                {language === 'bn' ? 'প্রিমিয়াম ওয়েবসাইট' : 'Premium Websites'}
                            </span>
                        </div>

                        <h1 className={`text-5xl lg:text-7xl font-black text-gray-950 dark:text-white mb-6 uppercase leading-[0.85] tracking-tighter font-teko ${bengaliClass}`}>
                            {language === 'bn' ? 'আমাদের' : 'Our Website '}<span className="text-[#C4EE18]">{language === 'bn' ? 'মার্কেটপ্লেস' : 'Marketplace'}</span>
                        </h1>

                        <p className={`text-gray-500 dark:text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed mb-10 ${bengaliClass}`}>
                            {language === 'bn'
                                ? 'রেডি-মেড ওয়েবসাইট সমাধান যা আপনার ব্যবসাকে দ্রুত অনলাইনে নিয়ে আসবে।'
                                : 'Fully functional, ready-to-deploy websites for startups and enterprises. Get online in minutes.'}
                        </p>

                        {/* Stats - Left Aligned & Modern */}
                        <div className="flex flex-wrap items-center gap-12">
                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-md flex items-center justify-center border border-gray-100 dark:border-white/10 group-hover:border-[#C4EE18] transition-colors">
                                    <LuGlobe className="text-gray-400 group-hover:text-[#C4EE18] transition-colors text-xl" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-gray-900 dark:text-white font-teko leading-none mb-1">{websiteList.length || '1'}+</p>
                                    <p className={`text-[11px] font-bold text-gray-400 uppercase tracking-widest ${bengaliClass}`}>{language === 'bn' ? 'ওয়েবসাইট' : 'Websites'}</p>
                                </div>
                            </div>

                            <div className="w-px h-12 bg-gray-200 dark:bg-white/10 hidden sm:block"></div>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-gray-50 dark:bg-white/5 rounded-md flex items-center justify-center border border-gray-100 dark:border-white/10 group-hover:border-[#C4EE18] transition-colors">
                                    <LuPlus className="text-gray-400 group-hover:text-[#C4EE18] transition-colors text-xl" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-gray-900 dark:text-white font-teko leading-none mb-1">24/7</p>
                                    <p className={`text-[11px] font-bold text-gray-400 uppercase tracking-widest ${bengaliClass}`}>{language === 'bn' ? 'সাপোর্ট' : 'Support'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Full Width */}
            <section className="container mx-auto px-4 lg:px-16 py-8 lg:py-12">
                <Suspense fallback={<LoadingFallback />}>
                    <RightWebsiteDetails
                        searchQuery={searchQuery}
                        selectedType={selectedType}
                    />
                </Suspense>
            </section>
        </div>
    );
};

const WebsitePage = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <WebsiteContent />
        </Suspense>
    );
};

export default WebsitePage;
