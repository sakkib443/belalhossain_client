"use client";

import React from 'react';
import { LuQuote } from 'react-icons/lu';
import { useLanguage } from '@/context/LanguageContext';

const TestimonialSection = () => {
    const { language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    const testimonials = [
        {
            name: "David Miller",
            role: "CEO",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop",
            content: "We bought the 'E-commerce Pro' script and it saved us months of development time. The code quality is top-notch and the support team is incredible.",
            company: "TechRetail Inc."
        },
        {
            name: "Sarah Jenkins",
            role: "Marketing Director",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
            content: "Extrain Web designed a custom portfolio site that perfectly captures our brand identity. Our conversion rates have doubled since the launch!",
            company: "Creative Pulse"
        },
        {
            name: "James Wilson",
            role: "Startup Founder",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
            content: "Professional, fast, and highly skilled. They delivered a complex SaaS dashboard much faster than we anticipated. Highly recommended.",
            company: "NextGen Solutions"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#0A0A0A] overflow-hidden relative border-t border-gray-100 dark:border-white/5">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
                style={{ backgroundImage: 'linear-gradient(#C4EE18 0.5px, transparent 0.5px), linear-gradient(90deg, #C4EE18 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                {/* Section Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className={`inline-block py-1 px-3 rounded-full bg-[#C4EE18]/10 text-[#C4EE18] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-[#C4EE18]/20 ${bengaliClass}`}>
                        {language === 'bn' ? 'গ্রাহকদের মতামত' : 'Client Feedback'}
                    </span>
                    <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white capitalize leading-tight mb-4 ${bengaliClass}`}>
                        Trusted by <span className="text-[#C4EE18]">Businesses</span> Worldwide
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm lg:text-base">
                        See how our premium scripts and custom web solutions are helping businesses grow.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="group relative h-full">
                            {/* Card Body */}
                            <div className="h-full bg-white dark:bg-[#111] p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-[#C4EE18]/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#C4EE18]/5 flex flex-col relative overflow-hidden">

                                {/* Top Gradient highlight on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C4EE18] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="mb-6 flex items-center justify-between">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-4 h-4 text-[#C4EE18]" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <LuQuote className="text-gray-200 dark:text-gray-800 text-3xl group-hover:text-[#C4EE18]/20 transition-colors" />
                                </div>

                                <p className={`text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-8 flex-1 ${bengaliClass}`}>
                                    &quot;{item.content}&quot;
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-800" />
                                    <div>
                                        <h4 className={`text-base font-bold text-gray-900 dark:text-white ${bengaliClass}`}>
                                            {item.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                                            {item.role} @ {item.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
