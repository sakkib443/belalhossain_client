"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LuCode, LuGlobe, LuPuzzle, LuComponent, LuArrowRight } from 'react-icons/lu';
import { API_BASE_URL } from '@/config/api';

const HomeCategory = () => {
    const [stats, setStats] = useState(null);
    const { language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/stats/dashboard`);
                const data = await res.json();
                if (data.success && data.data) {
                    setStats(data.data);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };
        fetchStats();
    }, []);

    const getCategoryCount = (id) => {
        if (!stats?.breakdown) return '0';
        switch (id) {
            case 'courses': return stats.breakdown.courses || 0;
            case 'software': return stats.breakdown.software || 0;
            case 'websites': return stats.breakdown.websites || 0;
            case 'tools': return stats.breakdown.software || 0;
            default: return 0;
        }
    };

    const categories = [
        { id: 'websites', icon: LuGlobe, title: language === 'bn' ? 'ওয়েবসাইট' : 'Websites', subtitle: language === 'bn' ? 'প্রিমিয়াম টেমপ্লেট' : 'Premium Templates', itemLabel: language === 'bn' ? 'টেমপ্লেট' : 'Templates', color: 'teal', href: '/website' },
        { id: 'software', icon: LuCode, title: language === 'bn' ? 'সফটওয়্যার' : 'Software', subtitle: language === 'bn' ? 'প্রিমিয়াম স্ক্রিপ্ট' : 'Premium Scripts', itemLabel: language === 'bn' ? 'স্ক্রিপ্ট' : 'Scripts', color: 'orange', href: '/software' },
        { id: 'extensions', icon: LuPuzzle, title: language === 'bn' ? 'এক্সটেনশন' : 'Extensions', subtitle: language === 'bn' ? 'ব্রাউজার এক্সটেনশন' : 'Browser Extensions', itemLabel: language === 'bn' ? 'আইটেম' : 'Items', color: 'teal', href: '/extensions' },
        { id: 'plugins', icon: LuComponent, title: language === 'bn' ? 'প্লাগইনস' : 'Plugins', subtitle: language === 'bn' ? 'প্রিমিয়াম প্লাগইন' : 'Premium Plugins', itemLabel: language === 'bn' ? 'প্লাগইন' : 'Plugins', color: 'orange', href: '/plugins' }
    ];

    const getColorClasses = (color) => {
        if (color === 'teal') {
            return { gradient: 'from-[#FD9A00] to-[#2dd4bf]', light: 'bg-[#FD9A00]/5', text: 'text-[#FD9A00]', border: 'border-[#FD9A00]/15', shadow: 'shadow-[#FD9A00]/10' };
        }
        return { gradient: 'from-[#FD9A00] to-[#fb923c]', light: 'bg-[#FD9A00]/5', text: 'text-[#FD9A00]', border: 'border-[#FD9A00]/15', shadow: 'shadow-[#FD9A00]/10' };
    };

    return (
        <section className='relative py-24 overflow-hidden'>
            {/* Background Elements - Static */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-[#FD9A00]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-gradient-to-br from-[#FD9A00]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#FD9A00]/3 to-[#FD9A00]/3 rounded-full blur-3xl"></div>
                <div className="absolute top-32 right-[15%] w-16 h-16 border-2 border-[#FD9A00]/20 rounded-xl"></div>
                <div className="absolute top-1/4 left-[8%] w-12 h-12 border-2 border-[#FD9A00]/20 rounded-full"></div>
                <div className="absolute bottom-1/4 right-[8%] w-20 h-20 border-2 border-[#FD9A00]/15 rounded-2xl"></div>
                <div className="absolute bottom-32 left-[20%] w-8 h-8 bg-[#FD9A00]/10 rounded-lg"></div>
                <div className="absolute top-40 left-[5%] flex flex-col gap-2 opacity-30">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-2">
                            {[...Array(3)].map((_, j) => (<div key={j} className="w-1.5 h-1.5 bg-[#FD9A00] rounded-full"></div>))}
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-40 right-[5%] flex flex-col gap-2 opacity-30">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-2">
                            {[...Array(3)].map((_, j) => (<div key={j} className="w-1.5 h-1.5 bg-[#FD9A00] rounded-full"></div>))}
                        </div>
                    ))}
                </div>
            </div>

            <div className='container mx-auto px-4 lg:px-16 relative z-10'>
                {/* Section Header */}
                {/* Left-Aligned Modern Header */}
                <div className="text-left mb-10 px-2">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-[2px] bg-[#C4EE18]" />
                        <span className={`text-[10px] font-black text-[#C4EE18] uppercase tracking-[0.4em] ${bengaliClass}`}>
                            {language === 'bn' ? 'আমাদের প্রোডাক্ট' : 'Our Products'}
                        </span>
                    </div>

                    <h2 className={`text-5xl lg:text-7xl font-black text-gray-950 dark:text-white mb-2 uppercase leading-[0.85] tracking-tighter max-w-3xl font-teko ${bengaliClass}`}>
                        {language === 'bn' ? <>ক্যাটাগরি <br /><span className="text-[#C4EE18]">অনুয়ায়ী</span> খুঁজুন</> : <>Browse by <br /><span className="text-[#C4EE18]">Category</span></>}
                    </h2>

                    <div className="w-20 h-1 bg-gray-100 dark:bg-white/10 mb-4" />

                    <p className={`text-gray-500 dark:text-gray-400 text-sm lg:text-base max-w-2xl leading-relaxed ${bengaliClass}`}>
                        {language === 'bn'
                            ? 'আমাদের বিভিন্ন ক্যাটাগরি থেকে আপনার প্রয়োজনীয় প্রোডাক্ট খুঁজে নিন। কোর্স, সফটওয়্যার, ওয়েবসাইট টেমপ্লেট এবং প্রোডাক্টিভিটি টুলস - সবই এক জায়গায়।'
                            : 'Explore our diverse categories to find exactly what you need. Courses, software, website templates, and productivity tools - all in one place.'}
                    </p>
                </div>

                {/* Categories Grid - 4 Columns */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {categories.map((cat, index) => {
                        const Icon = cat.icon;
                        const count = getCategoryCount(cat.id);

                        return (
                            <div key={cat.id}>
                                <Link
                                    href={cat.href}
                                    className="group relative bg-white dark:bg-[#0d0d0d] rounded-md p-6 border border-gray-100 dark:border-white/5 transition-all duration-500 hover:border-[#C4EE18]/40 hover:shadow-2xl hover:shadow-[#C4EE18]/5 block overflow-hidden"
                                >
                                    {/* Number Indicator */}
                                    <div className="absolute top-4 right-6 text-4xl font-black text-slate-50 dark:text-white/5 group-hover:text-[#C4EE18]/10 transition-colors pointer-events-none font-teko">
                                        0{index + 1}
                                    </div>

                                    <div className="relative z-10">
                                        {/* Icon Box */}
                                        <div className="mb-6">
                                            <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-md flex items-center justify-center transition-all duration-500 group-hover:bg-[#C4EE18] group-hover:scale-110">
                                                <Icon size={22} className="text-gray-700 dark:text-gray-400 group-hover:text-black transition-colors" />
                                            </div>
                                        </div>

                                        {/* Text Content */}
                                        <div className="mb-4">
                                            <h3 className={`text-2xl font-black text-gray-950 dark:text-white mb-1 uppercase tracking-tight font-teko leading-tight ${bengaliClass}`}>
                                                {cat.title}
                                            </h3>
                                            <p className={`text-xs text-gray-500 dark:text-gray-400 font-poppins ${bengaliClass}`}>
                                                {cat.subtitle}
                                            </p>
                                        </div>

                                        {/* Bottom Info */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-white/5">
                                            <span className={`text-xs font-bold text-gray-400 group-hover:text-gray-950 dark:group-hover:text-[#C4EE18] transition-colors font-poppins uppercase tracking-wider ${bengaliClass}`}>
                                                {count}+ {cat.itemLabel}
                                            </span>
                                            <div className="w-8 h-8 rounded bg-slate-50 dark:bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#C4EE18] transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                                                <LuArrowRight size={16} className="text-black" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle Hover Reveal line */}
                                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C4EE18] group-hover:w-full transition-all duration-700" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HomeCategory;
