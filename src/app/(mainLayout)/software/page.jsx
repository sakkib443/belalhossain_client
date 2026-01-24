"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSoftware } from "@/redux/softwareSlice";
import { fetchCategories, setSelectedCategories } from "@/redux/categorySlice";
import dynamic from "next/dynamic";
import { LuCpu, LuFilter, LuPlus, LuDownload } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageContext";
import { IoSearchSharp } from "react-icons/io5";

const RightSoftwareDetails = dynamic(
    () => import("@/components/softwarepage/RightSoftwareDetails"),
    { ssr: false }
);

// Loading fallback component
const LoadingFallback = () => (
    <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-[#ED1C3E] border-t-transparent rounded-full animate-spin"></div>
    </div>
);

const SoftwareContent = () => {
    const dispatch = useDispatch();
    const { softwareList = [], loading } = useSelector((state) => state.software || {});
    const { items: categories = [], selectedCategories = [] } = useSelector((state) => state.categories || {});
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [mounted, setMounted] = useState(false);
    const { language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    useEffect(() => {
        setMounted(true);
        dispatch(fetchSoftware());
        dispatch(fetchCategories({ type: 'software' }));
    }, [dispatch]);

    const handleCategoryChange = (categoryName) => {
        const newSelection = selectedCategories.includes(categoryName)
            ? []
            : [categoryName];
        dispatch(setSelectedCategories(newSelection));
    };

    const softwareTypes = [
        { name: 'All', bn: 'সব' },
        { name: 'Script', bn: 'স্ক্রিপ্ট' },
        { name: 'Plugin', bn: 'প্লাগিন' },
        { name: 'Full Software', bn: 'ফুল সফটওয়্যার' }
    ];

    if (!mounted) return <LoadingFallback />;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0F172A] transition-colors duration-300">
            {/* Hero Header Section (Synced with Website Hero) */}
            <section className="relative bg-gradient-to-br from-[#e8f9f9] via-white to-[#e8f9f9] dark:from-[#020202] dark:via-[#050505] dark:to-[#020202] overflow-hidden border-b border-gray-200 dark:border-white/5">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(65,191,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(65,191,184,0.03)_1px,transparent_1px)] bg-[size:40px_40px] dark:opacity-5"></div>

                {/* Gradient Orbs */}
                <div className="absolute top-10 left-10 w-60 h-60 bg-[#ED1C3E]/10 dark:bg-[#ED1C3E]/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#FD9A00]/10 dark:bg-[#FD9A00]/5 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 lg:px-16 py-10 lg:py-12 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 bg-[#ED1C3E]/10 dark:bg-white/5 border border-[#ED1C3E]/20 dark:border-white/10 rounded-full">
                            <LuCpu className="text-[#ED1C3E] text-base" />
                            <span className={`text-xs font-medium text-gray-700 dark:text-gray-300 work ${bengaliClass}`}>
                                {language === 'bn' ? 'প্রিমিয়াম সফটওয়্যার' : 'Premium Software'}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-bold outfit text-gray-800 dark:text-white mb-2 ${bengaliClass}`}>
                            {language === 'bn' ? 'আমাদের' : 'Our Software '}<span className="text-[#ED1C3E]">{language === 'bn' ? ' সফটওয়্যার মার্কেটপ্লেস' : 'Marketplace'}</span>
                        </h1>

                        {/* Description */}
                        <p className={`text-gray-500 dark:text-gray-400 work text-sm leading-relaxed mb-6 max-w-xl mx-auto ${bengaliClass}`}>
                            {language === 'bn'
                                ? 'প্রিমিয়াম সফটওয়্যার, স্ক্রিপ্ট এবং প্লাগিন সমুহ। আপনার কাজকে করবে আরও সহজ।'
                                : 'Premium software, scripts and plugins for your creative projects. Get started in minutes.'}
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 bg-[#ED1C3E]/10 dark:bg-white/5 rounded-md flex items-center justify-center">
                                    <LuCpu className="text-[#ED1C3E] text-base" />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg font-bold text-gray-800 dark:text-white outfit">{softwareList.length || '50'}+</p>
                                    <p className={`text-xs text-gray-500 dark:text-gray-400 work ${bengaliClass}`}>{language === 'bn' ? 'সফটওয়্যার' : 'Software'}</p>
                                </div>
                            </div>
                            <div className="w-px h-10 bg-gray-200 dark:bg-white/10 hidden sm:block"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 bg-[#FD9A00]/10 dark:bg-white/5 rounded-md flex items-center justify-center">
                                    <LuPlus className="text-[#FD9A00] text-base" />
                                </div>
                                <div className="text-left">
                                    <p className="text-lg font-bold text-gray-800 dark:text-white outfit">24/7</p>
                                    <p className={`text-xs text-gray-500 dark:text-gray-400 work ${bengaliClass}`}>{language === 'bn' ? 'সাপোর্ট' : 'Support'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 lg:px-16 py-12">
                <Suspense fallback={<LoadingFallback />}>
                    <RightSoftwareDetails
                        searchQuery={searchQuery}
                        selectedType={selectedType}
                        setSelectedType={setSelectedType}
                    />
                </Suspense>
            </section>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

const SoftwarePage = () => {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <SoftwareContent />
        </Suspense>
    );
};

export default SoftwarePage;

