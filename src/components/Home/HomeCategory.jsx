"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LuGraduationCap, LuCode, LuGlobe, LuWrench, LuArrowRight } from 'react-icons/lu';
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
        { id: 'courses', icon: LuGraduationCap, title: language === 'bn' ? 'কোর্স সমূহ' : 'Courses', subtitle: language === 'bn' ? 'প্রফেশনাল স্কিল শিখুন' : 'Professional Skills', itemLabel: language === 'bn' ? 'কোর্স' : 'Courses', color: 'teal', href: '/courses' },
        { id: 'software', icon: LuCode, title: language === 'bn' ? 'সফটওয়্যার' : 'Software', subtitle: language === 'bn' ? 'প্রিমিয়াম স্ক্রিপ্ট' : 'Premium Scripts', itemLabel: language === 'bn' ? 'আইটেম' : 'Items', color: 'orange', href: '/software' },
        { id: 'websites', icon: LuGlobe, title: language === 'bn' ? 'ওয়েবসাইট' : 'Websites', subtitle: language === 'bn' ? 'প্রিমিয়াম টেমপ্লেট' : 'Premium Templates', itemLabel: language === 'bn' ? 'টেমপ্লেট' : 'Templates', color: 'teal', href: '/website' },
        { id: 'tools', icon: LuWrench, title: language === 'bn' ? 'টুলস' : 'Tools', subtitle: language === 'bn' ? 'প্রোডাক্টিভিটি টুলস' : 'Productivity Tools', itemLabel: language === 'bn' ? 'টুলস' : 'Tools', color: 'orange', href: '/tools' }
    ];

    const getColorClasses = (color) => {
        if (color === 'teal') {
            return { gradient: 'from-[#ED1C3E] to-[#2dd4bf]', light: 'bg-[#ED1C3E]/5', text: 'text-[#ED1C3E]', border: 'border-[#ED1C3E]/15', shadow: 'shadow-[#ED1C3E]/10' };
        }
        return { gradient: 'from-[#FD9A00] to-[#fb923c]', light: 'bg-[#FD9A00]/5', text: 'text-[#FD9A00]', border: 'border-[#FD9A00]/15', shadow: 'shadow-[#FD9A00]/10' };
    };

    return (
        <section className='relative py-24 overflow-hidden'>
            {/* Background Elements - Static */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-[#ED1C3E]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-gradient-to-br from-[#FD9A00]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#ED1C3E]/3 to-[#FD9A00]/3 rounded-full blur-3xl"></div>
                <div className="absolute top-32 right-[15%] w-16 h-16 border-2 border-[#ED1C3E]/20 rounded-xl"></div>
                <div className="absolute top-1/4 left-[8%] w-12 h-12 border-2 border-[#FD9A00]/20 rounded-full"></div>
                <div className="absolute bottom-1/4 right-[8%] w-20 h-20 border-2 border-[#ED1C3E]/15 rounded-2xl"></div>
                <div className="absolute bottom-32 left-[20%] w-8 h-8 bg-[#FD9A00]/10 rounded-lg"></div>
                <div className="absolute top-40 left-[5%] flex flex-col gap-2 opacity-30">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex gap-2">
                            {[...Array(3)].map((_, j) => (<div key={j} className="w-1.5 h-1.5 bg-[#ED1C3E] rounded-full"></div>))}
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
                <div className="text-center mb-14">
                    <div className="inline-flex items-center gap-3 mb-5 px-5 py-2.5 rounded-full bg-white dark:bg-black/50 border border-rose-600/30 dark:border-rose-600/20 shadow-sm backdrop-blur-md">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-rose-600/20 to-cyan-500/20 flex items-center justify-center">
                            <span className="w-2.5 h-2.5 bg-rose-600 rounded-full"></span>
                        </div>
                        <span className={`text-xs font-black text-rose-700 dark:text-rose-500 uppercase tracking-[0.2em] ${bengaliClass}`}>
                            {language === 'bn' ? 'আমাদের প্রোডাক্ট' : 'Our Products'}
                        </span>
                    </div>

                    <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-5 tracking-tight ${bengaliClass}`}>
                        {language === 'bn' ? <>ক্যাটাগরি <span className="text-primary">অনুযায়ী</span> খুঁজুন</> : <>Browse by <span className="text-primary">Category</span></>}
                    </h2>

                    <p className={`text-gray-500 dark:text-gray-400 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed ${bengaliClass}`}>
                        {language === 'bn'
                            ? 'আমাদের বিভিন্ন ক্যাটাগরি থেকে আপনার প্রয়োজনীয় প্রোডাক্ট খুঁজে নিন। কোর্স, সফটওয়্যার, ওয়েবসাইট টেমপ্লেট এবং প্রোডাক্টিভিটি টুলস - সবই এক জায়গায়।'
                            : 'Explore our diverse categories to find exactly what you need. Courses, software, website templates, and productivity tools - all in one place.'}
                    </p>
                </div>

                {/* Categories Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        const colors = getColorClasses(cat.color);
                        const count = getCategoryCount(cat.id);

                        return (
                            <div key={cat.id}>
                                <Link
                                    href={cat.href}
                                    className="group relative bg-white dark:bg-[#0d0d0d] rounded-md p-8 border border-gray-200 dark:border-white/10 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden block"
                                >
                                    <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                                    <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>
                                    <div className="relative z-10">
                                        <div className="relative mb-5">
                                            <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                                                <Icon size={28} className={`${colors.text}`} />
                                            </div>
                                            <div className={`absolute inset-0 w-16 h-16 rounded-2xl border-2 ${colors.border} scale-100 opacity-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500`}></div>
                                        </div>
                                        <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${bengaliClass}`}>{cat.title}</h3>
                                        <p className={`text-sm text-gray-500 dark:text-gray-400 mb-4 ${bengaliClass}`}>{cat.subtitle}</p>
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                                            <span className={`text-sm font-semibold ${colors.text} ${bengaliClass}`}>{count}+ {cat.itemLabel}</span>
                                            <div className={`w-8 h-8 rounded-lg ${colors.light} flex items-center justify-center transition-colors duration-300`}>
                                                <LuArrowRight size={16} className={`${colors.text}`} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${colors.gradient} rounded-b-md group-hover:w-full transition-all duration-500`}></div>
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
