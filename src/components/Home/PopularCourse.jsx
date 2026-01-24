"use client";

import React, { useEffect, useState } from 'react';
import PopularCourseCard from './PopularCourseCard';
import { LuGraduationCap, LuUsers, LuTrendingUp, LuPlay, LuArrowRight } from 'react-icons/lu';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { API_BASE_URL } from '@/config/api';

const PopularCourse = () => {
  const [stats, setStats] = useState(null);
  const [content, setContent] = useState(null);
  const { language } = useLanguage();
  const bengaliClass = language === "bn" ? "hind-siliguri" : "";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/stats/dashboard`);
        const data = await res.json();
        if (data.success && data.data) setStats(data.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    const fetchContent = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/design/popularCourse`);
        const data = await res.json();
        if (data.success && data.data?.popularCourseContent) {
          setContent(data.data.popularCourseContent);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchStats();
    fetchContent();
  }, []);

  const getBadge = () => {
    if (content?.badge) {
      return language === 'bn' ? (content.badge.textBn || 'জনপ্রিয় কোর্স') : (content.badge.text || 'Popular Courses');
    }
    return language === 'bn' ? 'জনপ্রিয় কোর্স' : 'Popular Courses';
  };

  const getHeading = () => {
    if (content?.heading) {
      const text1 = language === 'bn' ? content.heading.text1Bn : content.heading.text1;
      const highlight = language === 'bn' ? content.heading.highlightBn : content.heading.highlight;
      const text2 = language === 'bn' ? content.heading.text2Bn : content.heading.text2;
      return { text1: text1 || '', highlight: highlight || '', text2: text2 || '' };
    }
    return language === 'bn'
      ? { text1: 'আমাদের ', highlight: 'সেরা কোর্স', text2: ' সমূহ' }
      : { text1: 'Explore Our ', highlight: 'Top Courses', text2: '' };
  };

  const getDescription = () => {
    if (content?.description) {
      return language === 'bn'
        ? (content.description.textBn || 'বিশেষজ্ঞ মেন্টরদের দ্বারা তৈরি প্রিমিয়াম কোর্স।')
        : (content.description.text || 'Premium courses crafted by industry experts.');
    }
    return language === 'bn' ? 'বিশেষজ্ঞ মেন্টরদের দ্বারা তৈরি প্রিমিয়াম কোর্স।' : 'Premium courses crafted by industry experts.';
  };

  const getButtonText = () => {
    if (content?.cta) {
      return language === 'bn' ? (content.cta.buttonTextBn || 'সব কোর্স দেখুন') : (content.cta.buttonText || 'View All Courses');
    }
    return language === 'bn' ? 'সব কোর্স দেখুন' : 'View All Courses';
  };

  const getFooterText = () => {
    if (content?.cta) {
      return language === 'bn' ? (content.cta.footerTextBn || 'হাজার হাজার শিক্ষার্থী যোগ দিয়েছেন') : (content.cta.footerText || 'Thousands of learners joined');
    }
    return language === 'bn' ? 'হাজার হাজার শিক্ষার্থী যোগ দিয়েছেন' : 'Thousands of learners joined';
  };

  const heading = getHeading();

  const statsData = [
    { icon: LuGraduationCap, value: stats?.breakdown?.courses || 0, label: language === 'bn' ? 'কোর্স সমূহ' : 'Courses', suffix: '+', color: 'teal' },
    { icon: LuUsers, value: stats?.activeUsers || 0, label: language === 'bn' ? 'শিক্ষার্থী' : 'Students', suffix: '+', color: 'orange' },
    { icon: LuTrendingUp, value: '95', label: language === 'bn' ? 'সফলতার হার' : 'Success Rate', suffix: '%', color: 'teal' }
  ];

  const getColorClasses = (color) => color === 'teal'
    ? { gradient: 'from-[#ED1C3E] to-[#2dd4bf]', light: 'bg-[#ED1C3E]/10', text: 'text-[#ED1C3E]' }
    : { gradient: 'from-[#FD9A00] to-[#fb923c]', light: 'bg-[#FD9A00]/10', text: 'text-[#FD9A00]' };

  return (
    <section className='relative py-24 overflow-hidden'>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-[#ED1C3E]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-gradient-to-br from-[#FD9A00]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5 px-5 py-2.5 rounded-full bg-white dark:bg-black/50 border border-rose-600/30 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-rose-600/20 to-cyan-500/20 flex items-center justify-center">
              <LuPlay className="text-[#ED1C3E]" size={14} />
            </div>
            <span className={`text-xs font-black text-rose-700 dark:text-rose-500 uppercase tracking-[0.2em] ${bengaliClass}`}>
              {getBadge()}
            </span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-5 ${bengaliClass}`}>
            {heading.text1}<span className="text-primary">{heading.highlight}</span>{heading.text2}
          </h2>
          <p className={`text-gray-500 dark:text-gray-400 text-base lg:text-lg max-w-2xl mx-auto ${bengaliClass}`}>
            {getDescription()}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 mb-14">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            const colors = getColorClasses(stat.color);
            return (
              <div key={index} className="group relative bg-white dark:bg-[#0d0d0d] rounded-md px-8 py-6 border border-gray-200 dark:border-white/10 hover:shadow-lg transition-shadow">
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${colors.gradient} opacity-5`} />
                <div className="relative z-10 flex items-center gap-5">
                  <div className={`w-14 h-14 ${colors.light} rounded-2xl flex items-center justify-center`}>
                    <Icon size={26} className={colors.text} />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-gray-900 dark:text-white">{stat.value}</span>
                      <span className={`text-xl font-black ${colors.text}`}>{stat.suffix}</span>
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-widest text-gray-400 mt-1 ${bengaliClass}`}>{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div>
          <PopularCourseCard />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
          <Link href="/courses" className={`group relative bg-white dark:bg-[#0d0d0d] rounded-2xl px-8 py-4 border border-gray-200 dark:border-white/10 hover:shadow-lg flex items-center gap-4 transition-shadow ${bengaliClass}`}>
            <span className="font-bold text-gray-900 dark:text-white">{getButtonText()}</span>
            <div className="w-10 h-10 rounded-xl bg-[#ED1C3E]/10 flex items-center justify-center group-hover:bg-[#ED1C3E] transition-colors">
              <LuArrowRight size={18} className="text-[#ED1C3E] group-hover:text-white" />
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className={`text-sm font-medium text-gray-500 ${bengaliClass}`}>
              {getFooterText()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourse;
