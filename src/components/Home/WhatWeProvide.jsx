"use client";

import { LuLayoutGrid, LuCode, LuHeadphones, LuArrowRight } from "react-icons/lu";
import { HiOutlineSparkles } from "react-icons/hi2";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const WhatWeProvide = () => {
  const { t, language } = useLanguage();
  const bengaliClass = language === "bn" ? "hind-siliguri" : "";

  const features = [
    { icon: LuLayoutGrid, titleKey: "premiumDesign", descKey: "premiumDesignDesc", emoji: "✨", color: "orange" },
    { icon: LuCode, titleKey: "readyScripts", descKey: "readyScriptsDesc", emoji: "🚀", color: "teal" },
    { icon: LuHeadphones, titleKey: "lifetimeSupport", descKey: "lifetimeSupportDesc", emoji: "🛠️", color: "orange" }
  ];

  const getColorClasses = (color) => color === 'teal'
    ? { gradient: 'from-[#ED1C3E] to-[#2dd4bf]', light: 'bg-[#ED1C3E]/10', text: 'text-[#ED1C3E]', border: 'border-[#ED1C3E]/20' }
    : { gradient: 'from-[#FD9A00] to-[#fb923c]', light: 'bg-[#FD9A00]/10', text: 'text-[#FD9A00]', border: 'border-[#FD9A00]/20' };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-[#ED1C3E]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-gradient-to-br from-[#FD9A00]/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5 px-5 py-2.5 rounded-full bg-white dark:bg-black/50 border border-rose-600/30 shadow-sm">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-rose-600/20 to-cyan-500/20 flex items-center justify-center">
              <HiOutlineSparkles className="text-[#ED1C3E]" size={14} />
            </div>
            <span className={`text-xs font-black text-gray-700 dark:text-gray-300 uppercase tracking-[0.2em] ${bengaliClass}`}>{t("whatWeProvide.badge")}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-5 ${bengaliClass}`}>
            {t("whatWeProvide.title1")}<span className="text-primary">{t("whatWeProvide.title2")}</span>
          </h2>
          <p className={`text-gray-500 dark:text-gray-400 text-base lg:text-lg max-w-2xl mx-auto ${bengaliClass}`}>{t("whatWeProvide.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div key={index} className="group relative bg-white dark:bg-[#0d0d0d] rounded-[2rem] p-8 border border-gray-200 dark:border-white/10 transition-shadow duration-300 hover:shadow-lg overflow-hidden">
                <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${colors.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="relative mb-5">
                    <div className={`w-16 h-16 ${colors.light} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <feature.icon size={28} className={colors.text} />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2 ${bengaliClass}`}>{t(`whatWeProvide.features.${feature.titleKey}`)} <span>{feature.emoji}</span></h3>
                  <p className={`text-sm text-gray-500 dark:text-gray-400 mb-6 ${bengaliClass}`}>{t(`whatWeProvide.features.${feature.descKey}`)}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/10">
                    <span className={`text-xs font-semibold ${colors.text} uppercase tracking-widest ${bengaliClass}`}>{t("whatWeProvide.learnMore")}</span>
                    <div className={`w-8 h-8 rounded-lg ${colors.light} flex items-center justify-center`}><LuArrowRight size={16} className={colors.text} /></div>
                  </div>
                </div>
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${colors.gradient} rounded-b-2xl group-hover:w-full transition-all duration-500`} />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-14">
          <Link href="/website" className={`group relative bg-white dark:bg-[#0d0d0d] rounded-2xl px-8 py-4 border border-gray-200 dark:border-white/10 hover:shadow-lg flex items-center gap-4 transition-shadow ${bengaliClass}`}>
            <span className="font-bold text-gray-900 dark:text-white">{t("whatWeProvide.learnMoreAboutUs")}</span>
            <div className="w-10 h-10 rounded-xl bg-[#ED1C3E]/10 flex items-center justify-center group-hover:bg-[#ED1C3E] transition-colors"><LuArrowRight size={18} className="text-[#ED1C3E] group-hover:text-white" /></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
