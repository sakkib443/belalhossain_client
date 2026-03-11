"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
    LuHighlighter,
    LuPencilLine,
    LuSun,
    LuType,
    LuTimer,
    LuMonitor,
    LuShield,
    LuUsers,
    LuChartBar,
    LuBrain,
    LuClipboardCheck,
    LuUserCog,
    LuGraduationCap,
    LuBookOpen,
    LuHistory,
    LuTrendingUp,
    LuRefreshCw,
    LuHeadphones,
    LuBuilding2,
    LuCheck
} from "react-icons/lu";

const IeltsFeatures = () => {
    const { language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    const featureCategories = [
        {
            title: language === 'bn' ? "BC এক্সাম ইন্টারফেস" : "BC Exam Interface",
            subtitle: language === 'bn' ? "আসল পরীক্ষার হুবহু অভিজ্ঞতা" : "Exact Real Exam Experience",
            icon: LuMonitor,
            color: "#FD9A00",
            features: [
                { icon: LuHighlighter, title: language === 'bn' ? "টেক্সট হাইলাইট" : "Text Highlighting" },
                { icon: LuPencilLine, title: language === 'bn' ? "নোট নেওয়া" : "Take Notes" },
                { icon: LuSun, title: language === 'bn' ? "Light/Dark Mode" : "Light/Dark Mode" },
                { icon: LuType, title: language === 'bn' ? "ফন্ট সাইজ কন্ট্রোল" : "Font Size Control" },
                { icon: LuTimer, title: language === 'bn' ? "রিয়েল টাইমার" : "Real Timer System" },
                { icon: LuMonitor, title: language === 'bn' ? "হুবহু BC লেআউট" : "Exact BC Layout" },
            ]
        },
        {
            title: language === 'bn' ? "Admin Panel" : "Admin Panel",
            subtitle: language === 'bn' ? "ইনস্টিটিউট ম্যানেজমেন্ট" : "Institute Management",
            icon: LuShield,
            color: "#C4EE18",
            features: [
                { icon: LuChartBar, title: language === 'bn' ? "সব রেজাল্ট দেখুন" : "View All Results" },
                { icon: LuClipboardCheck, title: language === 'bn' ? "অটো মার্কিং" : "Auto Marking" },
                { icon: LuBrain, title: language === 'bn' ? "AI Speaking Check" : "AI Speaking Check" },
                { icon: LuUserCog, title: language === 'bn' ? "স্টুডেন্ট ম্যানেজমেন্ট" : "Student Management" },
                { icon: LuTrendingUp, title: language === 'bn' ? "Progress Reports" : "Progress Reports" },
                { icon: LuUsers, title: language === 'bn' ? "ব্যাচ ম্যানেজমেন্ট" : "Batch Management" },
            ]
        },
        {
            title: language === 'bn' ? "Student Panel" : "Student Panel",
            subtitle: language === 'bn' ? "স্টুডেন্টদের জন্য" : "For Students",
            icon: LuGraduationCap,
            color: "#3B82F6",
            features: [
                { icon: LuBookOpen, title: language === 'bn' ? "উত্তর ও ব্যাখ্যা" : "Answers & Explanations" },
                { icon: LuHeadphones, title: language === 'bn' ? "সব মডিউল প্র্যাক্টিস" : "All Module Practice" },
                { icon: LuHistory, title: language === 'bn' ? "রেজাল্ট হিস্ট্রি" : "Result History" },
                { icon: LuTrendingUp, title: language === 'bn' ? "Performance Analytics" : "Performance Analytics" },
                { icon: LuRefreshCw, title: language === 'bn' ? "আনলিমিটেড Retakes" : "Unlimited Retakes" },
                { icon: LuChartBar, title: language === 'bn' ? "Band Score Calculator" : "Band Score Calculator" },
            ]
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-14"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FD9A00]/10 text-[#FD9A00] text-sm font-semibold mb-4">
                        <LuBuilding2 size={16} />
                        {language === 'bn' ? 'কোচিং সেন্টারের জন্য সম্পূর্ণ সমাধান' : 'Complete Solution for Coaching Centers'}
                    </span>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 ${bengaliClass}`}>
                        {language === 'bn' ? (
                            <>
                                আমাদের সফটওয়্যারে যা যা{" "}
                                <span className="text-[#FD9A00]">আছে</span>
                            </>
                        ) : (
                            <>
                                Everything In Our{" "}
                                <span className="text-[#FD9A00]">Software</span>
                            </>
                        )}
                    </h2>
                    <p className={`text-lg text-gray-600 dark:text-gray-400 ${bengaliClass}`}>
                        {language === 'bn'
                            ? 'British Council এর এক্সাম ইন্টারফেস, Admin Panel এবং Student Dashboard - সব একসাথে।'
                            : 'British Council exam interface, Admin Panel and Student Dashboard - all in one package.'}
                    </p>
                </motion.div>

                {/* 3 Column Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {featureCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative bg-gray-50 dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5"
                        >
                            {/* Card Header */}
                            <div 
                                className="p-6 pb-5"
                                style={{ 
                                    background: `linear-gradient(135deg, ${category.color}12 0%, transparent 100%)`
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div 
                                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0"
                                        style={{ backgroundColor: category.color }}
                                    >
                                        <category.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold text-gray-900 dark:text-white ${bengaliClass}`}>
                                            {category.title}
                                        </h3>
                                        <p className={`text-sm text-gray-500 dark:text-gray-400 ${bengaliClass}`}>
                                            {category.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-200 dark:bg-white/5 mx-6" />

                            {/* Features List */}
                            <div className="p-6 pt-5">
                                <ul className="space-y-3.5">
                                    {category.features.map((feature, fIndex) => (
                                        <motion.li
                                            key={fIndex}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.2 + fIndex * 0.05 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div 
                                                className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                                                style={{ 
                                                    backgroundColor: `${category.color}15`,
                                                    color: category.color
                                                }}
                                            >
                                                <LuCheck size={14} strokeWidth={3} />
                                            </div>
                                            <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${bengaliClass}`}>
                                                {feature.title}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-xl bg-[#FD9A00] flex items-center justify-center text-white">
                                <LuBuilding2 size={22} />
                            </div>
                            <div className="text-left">
                                <p className={`font-bold text-gray-900 dark:text-white text-sm ${bengaliClass}`}>
                                    {language === 'bn' ? 'আপনার ব্র্যান্ডিং যোগ করুন' : 'Add Your Branding'}
                                </p>
                                <p className={`text-xs text-gray-500 dark:text-gray-400 ${bengaliClass}`}>
                                    {language === 'bn' ? 'লোগো, কালার কাস্টমাইজ' : 'Logo, colors customization'}
                                </p>
                            </div>
                        </div>
                        <a
                            href="#pricing"
                            className={`px-5 py-2.5 bg-[#FD9A00] hover:bg-[#e68a00] text-white font-bold text-sm rounded-xl transition-colors ${bengaliClass}`}
                        >
                            {language === 'bn' ? 'প্রাইসিং দেখুন' : 'View Pricing'}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IeltsFeatures;
