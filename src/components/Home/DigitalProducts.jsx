"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSoftware } from '@/redux/softwareSlice';
import { fetchWebsites } from '@/redux/websiteSlice';
import { fetchCategories } from '@/redux/categorySlice';
import ProductCard from '@/components/sheard/ProductCard';
import { useLanguage } from '@/context/LanguageContext';
import { LuGlobe, LuArrowRight, LuLayoutList, LuCode, LuLayers } from 'react-icons/lu';
import Link from 'next/link';

const DigitalProducts = () => {
    const dispatch = useDispatch();
    const { softwareList = [], loading: softwareLoading } = useSelector((state) => state.software || {});
    const { websiteList = [], loading: websiteLoading } = useSelector((state) => state.websites || {});
    const { items: allCategories = [], status: categoryStatus } = useSelector((state) => state.categories || {});
    const { language } = useLanguage();

    const [activeType, setActiveType] = useState('website');
    const [selectedSubCategory, setSelectedSubCategory] = useState('all');

    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    useEffect(() => {
        dispatch(fetchSoftware());
        dispatch(fetchWebsites());
        dispatch(fetchCategories());
    }, [dispatch]);

    const subCategories = useMemo(() => {
        const parentCat = allCategories.find(cat =>
            cat.slug.toLowerCase() === activeType.toLowerCase() && cat.isParent === true
        );
        if (!parentCat) return [];
        return allCategories.filter(cat => cat.parentCategory === parentCat._id || cat.parentCategory?._id === parentCat._id);
    }, [allCategories, activeType]);

    useEffect(() => {
        setSelectedSubCategory('all');
    }, [activeType]);

    const displayList = useMemo(() => {
        let baseList = activeType === 'software' ? softwareList : websiteList;
        if (selectedSubCategory !== 'all') {
            return baseList.filter(item =>
                item.category === selectedSubCategory ||
                item.category?._id === selectedSubCategory ||
                item.subcategory === selectedSubCategory ||
                item.subcategory?._id === selectedSubCategory
            ).slice(0, 8);
        }
        return baseList.slice(0, 8);
    }, [activeType, softwareList, websiteList, selectedSubCategory]);

    const isLoading = activeType === 'software' ? softwareLoading : websiteLoading;

    return (
        <section className="py-24 bg-[#FAFAFA] dark:bg-[#0A0A0A] relative overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-amber-500/5 dark:bg-amber-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 lg:px-16 relative z-10">

                {/* Header Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm text-[#ED1C3E] text-xs font-bold uppercase tracking-widest mb-6">
                        <LuLayers className="w-4 h-4" />
                        <span>{language === 'bn' ? 'আওয়ার কালেকশন' : 'Our Collection'}</span>
                    </div>

                    <h2 className={`text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight ${bengaliClass}`}>
                        {language === 'bn' ? 'জনপ্রিয়' : 'Premium'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED1C3E] to-[#FD9A00]">{language === 'bn' ? 'ডিজিটাল প্রোডাক্ট' : 'Digital Products'}</span>
                    </h2>

                    <p className={`text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed ${bengaliClass}`}>
                        {language === 'bn'
                            ? 'আমাদের প্রিমিয়াম সফটওয়্যার এবং রেডিমেড ওয়েবসাইট কালেকশন এক্সপ্লোর করুন যা আপনার ব্যবসা বাড়াতে সাহায্য করবে।'
                            : 'Explore our collection of premium software and ready-made websites designed to scale your business.'}
                    </p>
                </div>

                {/* Main Tabs Selection */}
                <div className="flex flex-col items-center gap-8 mb-16">
                    <div className="flex p-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
                        <button
                            onClick={() => setActiveType('website')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${activeType === 'website'
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            <LuLayoutList className="w-5 h-5" />
                            <span className={bengaliClass}>{language === 'bn' ? 'ওয়েবসাইট' : 'Websites'}</span>
                        </button>

                        <button
                            onClick={() => setActiveType('software')}
                            className={`flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 ${activeType === 'software'
                                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            <LuCode className="w-5 h-5" />
                            <span className={bengaliClass}>{language === 'bn' ? 'সফটওয়্যার' : 'Software'}</span>
                        </button>
                    </div>

                    {/* Sub-Category Filters */}
                    {subCategories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3">
                            <button
                                onClick={() => setSelectedSubCategory('all')}
                                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${selectedSubCategory === 'all'
                                    ? 'bg-[#ED1C3E] border-[#ED1C3E] text-white shadow-md shadow-red-500/20'
                                    : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-[#ED1C3E] hover:text-[#ED1C3E]'
                                    }`}
                            >
                                {language === 'bn' ? 'সবগুলো' : 'All Items'}
                            </button>
                            {subCategories.map((sub) => (
                                <button
                                    key={sub._id}
                                    onClick={() => setSelectedSubCategory(sub._id)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${selectedSubCategory === sub._id
                                        ? 'bg-[#ED1C3E] border-[#ED1C3E] text-white shadow-md shadow-red-500/20'
                                        : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-[#ED1C3E] hover:text-[#ED1C3E]'
                                        }`}
                                >
                                    <span className={bengaliClass}>{sub.name}</span>
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {isLoading ? (
                        [...Array(4)].map((_, i) => (
                            <div key={i} className="bg-white dark:bg-gray-900 rounded-3xl p-4 border border-gray-100 dark:border-gray-800 h-[420px] shadow-sm animate-pulse">
                                <div className="w-full h-56 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-6" />
                                <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded-lg w-3/4 mb-4" />
                                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded-lg w-1/2" />
                            </div>
                        ))
                    ) : (
                        displayList.length > 0 ? (
                            displayList.map((item) => (
                                <div key={item._id}>
                                    <ProductCard product={item} type={activeType} />
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 bg-white dark:bg-gray-900 rounded-[2.5rem] border-2 border-dashed border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center text-center px-6">
                                <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                                    <LuLayers className="w-8 h-8 text-gray-300 dark:text-gray-600" />
                                </div>
                                <h3 className={`text-xl font-bold text-gray-900 dark:text-white mb-2 ${bengaliClass}`}>
                                    {language === 'bn' ? 'কোনো পণ্য খুঁজে পাওয়া যায়নি' : 'No Products Found'}
                                </h3>
                                <p className={`text-gray-500 dark:text-gray-400 ${bengaliClass}`}>
                                    {language === 'bn' ? 'দুঃখিত, এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।' : 'Sorry, there are no products matching your criteria currently.'}
                                </p>
                            </div>
                        )
                    )}
                </div>

                {/* Footer Link */}
                <div className="text-center">
                    <Link
                        href={activeType === 'website' ? '/website' : '/software'}
                        className="inline-flex items-center gap-3 px-10 py-5 bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-bold rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-[#ED1C3E] hover:text-[#ED1C3E] transition-all shadow-sm hover:shadow-xl group"
                    >
                        <span className={bengaliClass}>
                            {language === 'bn' ? 'সবগুলো প্রোডাক্ট দেখুন' : 'Explore Full Collection'}
                        </span>
                        <div className="w-8 h-8 bg-gray-50 dark:bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-[#ED1C3E] group-hover:text-white transition-all">
                            <LuArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DigitalProducts;
