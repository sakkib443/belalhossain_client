'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import {
    LuShoppingCart,
    LuEye,
    LuCheck,
    LuClock,
    LuUsers,
    LuLayoutGrid,
    LuLayers,
    LuList,
    LuHeart
} from 'react-icons/lu';
import { FaStar } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/providers/ThemeProvider";

const ProductCard = ({ product, type, view = "grid" }) => {
    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);
    const { isDark } = useTheme();
    const { language } = useLanguage();
    const bengaliClass = language === "bn" ? "hind-siliguri" : "";

    const detailUrl = `/${type}/${product._id}`;

    // Get first image from images array or fallback
    const productImage = product.images?.[0] || product.image || "/images/placeholder.png";

    // Calculate discount percentage
    const hasDiscount = product.offerPrice && product.offerPrice > 0 && product.offerPrice < product.price;

    // Display Price logic
    const displayPrice = hasDiscount ? product.offerPrice : product.price;
    const originalPrice = product.price;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(addToCart({
            id: product._id,
            title: product.title || product.name,
            price: displayPrice,
            image: productImage,
            type: type
        }));
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    // Fields
    const title = product.title || product.name || "Untitled Product";
    const categoryName = product.category?.name || (type === 'website' ? 'Website' : 'Software');
    const version = product.version || 'v1.0';
    const sales = product.salesCount || product.totalSales || 10;
    const rating = product.rating || 5;
    const reviewsCount = product.reviews?.length || 0;
    const lastUpdated = product.updatedAt ? new Date(product.updatedAt).toLocaleDateString() : "Recently Updated";

    // List View Rendering
    if (view === "list") {
        return (
            <div className="group w-full flex flex-col md:flex-row bg-white dark:bg-[#0d0d0d] rounded-md border border-gray-100 dark:border-white/10 overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Left: Image (35%) */}
                <div className="relative w-full md:w-[35%] h-56 md:h-auto shrink-0 overflow-hidden p-3">
                    <Link href={detailUrl} className="block h-full w-full">
                        <img
                            src={productImage}
                            alt={title}
                            className="h-full w-full object-cover rounded-lg transition-transform duration-700 group-hover:scale-105"
                        />
                    </Link>
                    {/* Eye Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
                        <Link href={detailUrl} className="w-12 h-12 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50 hover:bg-[#ED1C3E] hover:border-[#ED1C3E] transition-colors">
                            <LuEye className="ml-1" size={20} />
                        </Link>
                    </div>
                </div>

                {/* Middle: Content (40%) */}
                <div className="flex-1 p-6 border-r border-gray-50 flex flex-col justify-center">
                    <Link href={detailUrl}>
                        <h3 className={`text-xl font-bold text-slate-800 leading-tight mb-2 hover:text-[#ED1C3E] transition-colors ${bengaliClass}`}>
                            {title}
                        </h3>
                    </Link>
                    <div className="flex items-center gap-2 mb-4 text-sm text-slate-500">
                        <span className="italic">in</span>
                        <span className="font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded text-xs uppercase tracking-wide">
                            {categoryName}
                        </span>
                    </div>

                    <ul className="space-y-2 mb-4">
                        <li className="flex items-start gap-2 text-sm text-slate-600">
                            <LuLayers className="text-[#ED1C3E] mt-0.5 shrink-0" size={16} />
                            <span>Version: {version}</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-600">
                            <LuUsers className="text-[#ED1C3E] mt-0.5 shrink-0" size={16} />
                            <span>{sales}+ Sales</span>
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-600">
                            <LuCheck className="text-[#ED1C3E] mt-0.5 shrink-0" size={16} />
                            <span>Lifetime Updates</span>
                        </li>
                    </ul>
                </div>

                {/* Right: Actions (25%) */}
                <div className="w-full md:w-[25%] p-6 bg-gray-50/50 flex flex-col items-center justify-center text-center gap-1 border-l border-gray-100">
                    {/* Icons Top Right */}
                    <div className="flex w-full justify-end gap-2 mb-2 text-slate-400">
                        <button className="hover:text-[#ED1C3E]"><LuList size={18} /></button>
                        <button className="hover:text-amber-500"><LuHeart size={18} /></button>
                    </div>

                    <div className="text-3xl font-bold text-[#ED1C3E] font-outfit mb-1">
                        ৳{displayPrice?.toLocaleString()}
                    </div>

                    <div className="flex text-amber-500 gap-0.5 text-xs mb-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.round(rating) ? "fill-current" : "text-slate-200"} />
                        ))}
                        <span className="text-slate-400 ml-1">({reviewsCount})</span>
                    </div>

                    <p className="text-xs text-slate-500 mb-1">{sales}+ Sales</p>
                    <p className="text-[10px] text-slate-400 mb-4">Last updated: {lastUpdated}</p>

                    <div className="flex items-center gap-3 w-full">
                        <button
                            onClick={handleAddToCart}
                            disabled={isAdded}
                            className={`p-2.5 border rounded-md transition-colors shadow-sm ${isAdded ? 'bg-emerald-500 border-emerald-500 text-white' : 'bg-white border-slate-200 text-slate-600 hover:text-[#ED1C3E] hover:border-[#ED1C3E]'}`}
                        >
                            {isAdded ? <LuCheck size={20} /> : <LuShoppingCart size={20} />}
                        </button>
                        <Link
                            href={detailUrl}
                            className="flex-1 py-2.5 bg-white border border-[#ED1C3E] text-[#ED1C3E] rounded-md text-sm font-normal hover:bg-[#ED1C3E] hover:text-white transition-all shadow-sm flex items-center justify-center gap-2"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Grid View Rendering
    return (
        <div className="group w-full h-full flex flex-col">
            <div className={`relative h-full bg-white dark:bg-[#0d0d0d] rounded-xl border border-gray-100 dark:border-white/10 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col`}>

                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden shrink-0">
                    <Link href={detailUrl} className="block h-full w-full">
                        <img
                            src={productImage}
                            alt={title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </Link>

                    {/* Type Badge (Top Left) */}
                    <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                            {type}
                        </span>
                    </div>

                    {/* Rating Badge (Top Right) */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded px-1.5 py-0.5 flex items-center gap-1 shadow-sm">
                        <FaStar className="text-amber-500 text-[10px]" />
                        <span className="text-[10px] font-bold text-slate-800">{rating}</span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-1">
                    {/* Category */}
                    <span className={`text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1 ${bengaliClass}`}>
                        {categoryName}
                    </span>

                    {/* Title */}
                    <Link href={detailUrl} className="mb-3 block">
                        <h3 className={`text-sm font-bold text-slate-800 dark:text-white leading-tight line-clamp-2 hover:text-slate-600 transition-colors ${bengaliClass}`}>
                            {title}
                        </h3>
                    </Link>

                    {/* Metadata (Sales) */}
                    <div className="flex items-center gap-3 mb-4 text-[10px] text-slate-500 font-medium">
                        <div className="flex items-center gap-1">
                            <LuUsers size={12} className="text-slate-400" />
                            <span>{sales}+ Sales</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <LuLayers size={12} className="text-slate-400" />
                            <span>{version}</span>
                        </div>
                    </div>

                    {/* Price & Actions */}
                    <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50 dark:border-white/5">
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-400 font-medium">{language === 'bn' ? 'মূল্য' : 'Price'}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-lg font-bold text-slate-900 dark:text-white outfit">
                                    ৳{displayPrice?.toLocaleString()}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleAddToCart}
                                disabled={isAdded}
                                className={`p-2.5 rounded-lg transition-all ${isAdded
                                        ? 'bg-emerald-500 text-white'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700'
                                    }`}
                                title="Add to Cart"
                            >
                                {isAdded ? <LuCheck size={18} /> : <LuShoppingCart size={18} />}
                            </button>
                            <Link
                                href={detailUrl}
                                className="p-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-200 transition-all"
                                title="View Details"
                            >
                                <LuEye size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
