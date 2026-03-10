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
    LuBuilding2
} from "react-icons/lu";

const IeltsFeatures = () => {
    const { language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    const featureCategories = [
        {
            title: language === 'bn' ? "British Council এক্সাম ইন্টারফেস" : "British Council Exam Interface",
            subtitle: language === 'bn' ? "আসল পরীক্ষার হুবহু অভিজ্ঞতা" : "Exact Real Exam Experience",
            icon: LuMonitor,
            color: "primary",
            features: [
                {
                    icon: LuHighlighter,
                    title: language === 'bn' ? "টেক্সট হাইলাইট" : "Text Highlighting",
                    description: language === 'bn'
                        ? "Reading passage-এ গুরুত্বপূর্ণ অংশ হাইলাইট করুন। আসল পরীক্ষার মতোই।"
                        : "Highlight important parts in reading passages. Just like the real exam."
                },
                {
                    icon: LuPencilLine,
                    title: language === 'bn' ? "নোট নেওয়া" : "Take Notes",
                    description: language === 'bn'
                        ? "পরীক্ষার সময় নোট রাখুন। Listening-এ কী পয়েন্ট লিখে রাখুন।"
                        : "Take notes during exam. Write down key points while listening."
                },
                {
                    icon: LuSun,
                    title: language === 'bn' ? "থিম/কন্ট্রাস্ট পরিবর্তন" : "Theme/Contrast Change",
                    description: language === 'bn'
                        ? "Light/Dark mode, High contrast option। চোখের আরামে পড়ুন।"
                        : "Light/Dark mode, High contrast option. Read comfortably."
                },
                {
                    icon: LuType,
                    title: language === 'bn' ? "ফন্ট সাইজ পরিবর্তন" : "Font Size Control",
                    description: language === 'bn'
                        ? "টেক্সট ছোট-বড় করুন যেমন ইচ্ছা। BC interface-এর মতোই।"
                        : "Increase/decrease text size as needed. Just like BC interface."
                },
                {
                    icon: LuTimer,
                    title: language === 'bn' ? "রিয়েল টাইমার সিস্টেম" : "Real Timer System",
                    description: language === 'bn'
                        ? "আসল পরীক্ষার মতো টাইমার। সেকশন অনুযায়ী সময় বিভাজন।"
                        : "Authentic exam timer with section-wise time allocation."
                },
                {
                    icon: LuMonitor,
                    title: language === 'bn' ? "হুবহু BC ইন্টারফেস" : "Exact BC Interface",
                    description: language === 'bn'
                        ? "Button, layout, navigation সব কিছু British Council এর মতো।"
                        : "Buttons, layout, navigation - everything like British Council."
                },
            ]
        },
        {
            title: language === 'bn' ? "Admin Panel ফিচারস" : "Admin Panel Features",
            subtitle: language === 'bn' ? "আপনার ইনস্টিটিউট ম্যানেজ করুন" : "Manage Your Institute",
            icon: LuShield,
            color: "secondary",
            features: [
                {
                    icon: LuChartBar,
                    title: language === 'bn' ? "সব রেজাল্ট দেখুন" : "View All Results",
                    description: language === 'bn'
                        ? "সব স্টুডেন্টের রেজাল্ট এক জায়গায়। ফিল্টার করে দেখুন।"
                        : "All student results in one place. Filter and analyze easily."
                },
                {
                    icon: LuClipboardCheck,
                    title: language === 'bn' ? "অটো রেজাল্ট/মার্কিং" : "Auto Result/Marking",
                    description: language === 'bn'
                        ? "Listening, Reading-এ অটোমেটিক মার্কিং। তাৎক্ষণিক Band Score।"
                        : "Automatic marking for Listening, Reading. Instant Band Score."
                },
                {
                    icon: LuBrain,
                    title: language === 'bn' ? "AI Speaking Assessment" : "AI Speaking Assessment",
                    description: language === 'bn'
                        ? "AI দিয়ে Speaking assessment। Pronunciation, fluency সব চেক।"
                        : "AI-powered Speaking assessment. Check pronunciation, fluency, grammar."
                },
                {
                    icon: LuUserCog,
                    title: language === 'bn' ? "স্টুডেন্ট ম্যানেজমেন্ট" : "Student Management",
                    description: language === 'bn'
                        ? "স্টুডেন্ট অ্যাড, রিমুভ, এডিট। ব্যাচ অনুযায়ী ভাগ করুন।"
                        : "Add, remove, edit students. Organize by batches."
                },
                {
                    icon: LuTrendingUp,
                    title: language === 'bn' ? "Progress Reports" : "Progress Reports",
                    description: language === 'bn'
                        ? "প্রতিটি স্টুডেন্টের progress track করুন। Weak areas চিহ্নিত করুন।"
                        : "Track each student's progress. Identify weak areas."
                },
                {
                    icon: LuUsers,
                    title: language === 'bn' ? "ব্যাচ ম্যানেজমেন্ট" : "Batch Management",
                    description: language === 'bn'
                        ? "একাধিক ব্যাচ তৈরি করুন। ব্যাচ অনুযায়ী অ্যাসাইনমেন্ট দিন।"
                        : "Create multiple batches. Assign tasks by batch."
                },
            ]
        },
        {
            title: language === 'bn' ? "Student Dashboard" : "Student Dashboard",
            subtitle: language === 'bn' ? "স্টুডেন্টদের জন্য সব সুবিধা" : "Everything for Students",
            icon: LuGraduationCap,
            color: "tertiary",
            features: [
                {
                    icon: LuBookOpen,
                    title: language === 'bn' ? "উত্তর দেখুন ব্যাখ্যা সহ" : "View Answers with Explanation",
                    description: language === 'bn'
                        ? "প্রতিটি প্রশ্নের সঠিক উত্তর ও বিস্তারিত ব্যাখ্যা দেখুন।"
                        : "See correct answers with detailed explanations for every question."
                },
                {
                    icon: LuHeadphones,
                    title: language === 'bn' ? "সব মডিউল প্র্যাক্টিস" : "Practice All Modules",
                    description: language === 'bn'
                        ? "Listening, Reading, Writing, Speaking - সব প্র্যাক্টিস করুন।"
                        : "Practice Listening, Reading, Writing, Speaking - all modules."
                },
                {
                    icon: LuHistory,
                    title: language === 'bn' ? "রেজাল্ট হিস্ট্রি" : "Result History",
                    description: language === 'bn'
                        ? "আগের সব টেস্টের রেজাল্ট দেখুন। Progress track করুন।"
                        : "View all previous test results. Track your progress."
                },
                {
                    icon: LuTrendingUp,
                    title: language === 'bn' ? "Module-wise Performance" : "Module-wise Performance",
                    description: language === 'bn'
                        ? "কোন মডিউলে কেমন করছেন দেখুন। দুর্বল দিক চিহ্নিত করুন।"
                        : "See performance by module. Identify and improve weak areas."
                },
                {
                    icon: LuRefreshCw,
                    title: language === 'bn' ? "আনলিমিটেড Retakes" : "Unlimited Retakes",
                    description: language === 'bn'
                        ? "যতবার ইচ্ছা ততবার প্র্যাক্টিস করুন। কোনো সীমা নেই।"
                        : "Practice as many times as you want. No limits."
                },
                {
                    icon: LuChartBar,
                    title: language === 'bn' ? "Band Score Calculator" : "Band Score Calculator",
                    description: language === 'bn'
                        ? "প্রতিটি টেস্টের পর তাৎক্ষণিক Band Score দেখুন।"
                        : "Instant Band Score calculation after each test."
                },
            ]
        }
    ];

    const categoryColors = {
        primary: {
            bg: "bg-[#FD9A00]/10",
            border: "border-[#FD9A00]/30",
            text: "text-[#FD9A00]",
            iconBg: "bg-[#FD9A00]"
        },
        secondary: {
            bg: "bg-[#C4EE18]/10",
            border: "border-[#C4EE18]/30",
            text: "text-[#C4EE18]",
            iconBg: "bg-[#C4EE18]"
        },
        tertiary: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/30",
            text: "text-blue-500",
            iconBg: "bg-blue-500"
        }
    };

    return (
        <section className="py-20 lg:py-28 bg-white dark:bg-[#0A0A0A]">
            <div className="container mx-auto px-4 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
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

                {/* Feature Categories */}
                <div className="space-y-16">
                    {featureCategories.map((category, categoryIndex) => {
                        const colors = categoryColors[category.color];
                        return (
                            <motion.div
                                key={categoryIndex}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            >
                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center text-white`}>
                                        <category.icon size={28} />
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white ${bengaliClass}`}>
                                            {category.title}
                                        </h3>
                                        <p className={`text-sm ${colors.text} ${bengaliClass}`}>
                                            {category.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Features Grid */}
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {category.features.map((feature, featureIndex) => (
                                        <motion.div
                                            key={featureIndex}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: featureIndex * 0.05 }}
                                            whileHover={{ y: -5 }}
                                            className={`group relative bg-gray-50 dark:bg-[#111] rounded-2xl p-6 border ${colors.border} hover:shadow-xl hover:shadow-black/5 transition-all duration-300`}
                                        >
                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                                <feature.icon size={24} className={colors.text} />
                                            </div>

                                            {/* Content */}
                                            <h4 className={`text-lg font-bold text-gray-900 dark:text-white mb-2 ${bengaliClass}`}>
                                                {feature.title}
                                            </h4>
                                            <p className={`text-sm text-gray-600 dark:text-gray-400 leading-relaxed ${bengaliClass}`}>
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-xl bg-[#FD9A00] flex items-center justify-center text-white">
                                <LuBuilding2 size={24} />
                            </div>
                            <div className="text-left">
                                <p className={`font-bold text-gray-900 dark:text-white ${bengaliClass}`}>
                                    {language === 'bn' ? 'আপনার ইনস্টিটিউটের জন্য কাস্টমাইজ করুন' : 'Customize for Your Institute'}
                                </p>
                                <p className={`text-sm text-gray-600 dark:text-gray-400 ${bengaliClass}`}>
                                    {language === 'bn' ? 'আপনার লোগো, ব্র্যান্ডিং যোগ করুন' : 'Add your logo, branding and more'}
                                </p>
                            </div>
                        </div>
                        <a
                            href="#pricing"
                            className={`px-6 py-3 bg-[#FD9A00] hover:bg-[#e68a00] text-white font-bold rounded-xl transition-colors ${bengaliClass}`}
                        >
                            {language === 'bn' ? 'লাইসেন্স নিন' : 'Get License'}
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IeltsFeatures;
