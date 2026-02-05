"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchWebsites, toggleWebsiteLike } from "@/redux/websiteSlice";
import { useLanguage } from "@/context/LanguageContext";
import { addToCart } from "@/redux/cartSlice";
import {
    LuDownload, LuExternalLink, LuClock, LuLayoutGrid, LuEye, LuPackage,
    LuShieldCheck, LuSettings, LuFileCode, LuGlobe, LuCheck, LuSparkles, LuZap, LuX, LuImage
} from "react-icons/lu";
import { FaHeart, FaRegHeart, FaStar, FaArrowRight } from "react-icons/fa";
import { MdVerified, MdPlayCircleOutline } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ReviewsSection from "@/components/Reviews/ReviewsSection";

// Animated Counter
const AnimatedCounter = ({ value }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!value) { setCount(0); return; }
        const duration = 1200;
        const steps = 50;
        const increment = value / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [value]);

    const formatNumber = (num) => {
        if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
        return num.toLocaleString();
    };
    return <span className="tabular-nums">{formatNumber(count)}</span>;
};

export default function WebsiteDetailsContent({ initialWebsite }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { websiteList = [] } = useSelector((state) => state.websites || {});
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState("overview");
    const [popularWebsites, setPopularWebsites] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showVideoModal, setShowVideoModal] = useState(false);
    const [isLiking, setIsLiking] = useState(false);

    // local state for real-time updates while keeping SSR data
    const [website, setWebsite] = useState(initialWebsite);

    useEffect(() => {
        if (initialWebsite) {
            setWebsite(initialWebsite);
            dispatch(fetchWebsites());
        }
    }, [initialWebsite, dispatch]);

    useEffect(() => {
        if (websiteList.length > 0 && website?._id) {
            setPopularWebsites(websiteList.filter(item => item._id !== website._id).slice(0, 3));
        }
    }, [websiteList, website?._id]);

    const handleAddToCart = () => {
        if (!website) return;
        dispatch(addToCart({
            id: website._id,
            title: website.title,
            price: website.offerPrice || website.price,
            image: website.images?.[0] || website.image || "/images/placeholder.png",
            type: 'website',
            productType: 'website',
            isBookingAllowed: website.isBookingAllowed,
            bookingAmount: website.bookingAmount
        }));
    };

    const handleBuyNow = () => {
        handleAddToCart();
        router.push('/cart');
    };

    const handleToggleLike = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login to like this website");
            router.push('/login');
            return;
        }
        if (isLiking) return;
        setIsLiking(true);
        try {
            const result = await dispatch(toggleWebsiteLike(website._id)).unwrap();
            setWebsite(prev => ({
                ...prev,
                isLiked: result.isLiked,
                likeCount: result.likeCount
            }));
        } catch (err) {
            console.error("Like error:", err);
            alert(err.message || "Failed to like. Please try again.");
        } finally {
            setIsLiking(false);
        }
    };

    if (!website) {
        return (
            <div className="min-h-screen bg-[#FAFBFC] dark:bg-slate-950 flex items-center justify-center">
                <div className="text-center p-8">
                    <div className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">Loading...</h2>
                    <p className="text-gray-500">Please wait while we fetch the website details.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAFBFC] dark:bg-slate-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#f0fffe] via-[#e8f9f8] to-[#f5f5ff] dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-12 pb-28 lg:pt-16 lg:pb-36">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none"></div>

                <div className="container mx-auto px-4 lg:px-24 relative z-10">
                    <div className="max-w-3xl">
                        {/* Breadcrumb */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 poppins">
                            <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/website" className="hover:text-teal-600 transition-colors">Website</Link>
                            <span>/</span>
                            <span className="text-gray-700 dark:text-white font-medium truncate max-w-[200px]">{website.title}</span>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-5">
                            <span className="px-3 py-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded text-white text-[11px] font-bold uppercase tracking-wider poppins">
                                {website.projectType || 'Website'}
                            </span>
                            {website.isFeatured && (
                                <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded text-white text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
                                    <LuSparkles size={10} /> Featured
                                </span>
                            )}
                        </div>

                        {/* Title */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold outfit leading-[1.2] tracking-tight text-gray-900 dark:text-white mb-4">
                            {website.title}
                        </h1>

                        {/* Description */}
                        <p className="text-[15px] lg:text-base text-gray-600 dark:text-gray-400 poppins leading-relaxed mb-6 max-w-2xl">
                            {website.description}
                        </p>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <div className="flex items-center gap-2 bg-white px-8 py-2.5 rounded-md border border-gray-200">
                                <div className="flex text-amber-400 gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => <FaStar key={s} size={12} />)}
                                </div>
                                <span className="font-bold outfit text-gray-900">{website.rating || '5.0'}</span>
                                <span className="text-gray-400 text-xs poppins">({website.reviewCount || 0})</span>
                            </div>

                            <div className="flex items-center gap-3 bg-white px-8 py-2.5 rounded-md border border-gray-200">
                                <div className="w-7 h-7 rounded bg-emerald-50 flex items-center justify-center">
                                    <LuPackage className="text-emerald-600" size={14} />
                                </div>
                                <span className="text-gray-700 font-medium text-sm poppins">
                                    <AnimatedCounter value={website.salesCount || 0} />
                                    <span className="text-gray-400 ml-1">sold</span>
                                </span>
                            </div>
                        </div>

                        {/* Platform & Like */}
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-md border border-gray-200">
                                <span className="text-gray-400 text-sm poppins">Type</span>
                                <span className="text-teal-600 font-semibold text-sm outfit">{website.projectType || 'Full Stack'}</span>
                                <MdVerified className="text-blue-500" size={16} />
                            </div>

                            <button
                                onClick={handleToggleLike}
                                disabled={isLiking}
                                className={`flex items-center gap-2 px-3 py-2 rounded-md border transition-all ${website.isLiked
                                    ? 'bg-rose-50 border-rose-200 text-rose-600'
                                    : 'bg-white border-gray-200 text-gray-600 hover:border-rose-200 hover:text-rose-500'
                                    }`}
                            >
                                {website.isLiked ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
                                <span className="font-semibold text-sm poppins">
                                    <AnimatedCounter value={website.likeCount || 0} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="bg-white dark:bg-slate-950 relative">
                <div className="container mx-auto px-4 lg:px-24 pb-20 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Side */}
                        <div className="lg:col-span-8 space-y-6">
                            <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
                                <div className="flex border-b border-gray-100 bg-gray-50/80">
                                    {[
                                        { id: "overview", label: "Overview", icon: LuLayoutGrid },
                                        { id: "gallery", label: "Gallery", icon: LuImage },
                                        { id: "features", label: "Features", icon: LuZap },
                                        { id: "technical", label: "Technical", icon: LuSettings },
                                        { id: "reviews", label: "Reviews", icon: FaStar },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-all border-b-2 -mb-[1px] poppins ${activeTab === tab.id
                                                ? "text-teal-600 border-teal-500 bg-white"
                                                : "text-gray-500 border-transparent hover:text-gray-700"
                                                }`}
                                        >
                                            <tab.icon size={16} />
                                            <span className="hidden sm:inline">{tab.label}</span>
                                        </button>
                                    ))}
                                </div>

                                <div className="p-6 lg:p-8">
                                    {activeTab === "overview" && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                            <div>
                                                <h2 className="text-lg font-bold outfit text-gray-900 mb-4 flex items-center gap-2">
                                                    <span className="w-1 h-5 bg-teal-500 rounded-full"></span>
                                                    About This Website
                                                </h2>
                                                <p className="text-gray-600 poppins text-[15px] leading-7">
                                                    {website.description}
                                                </p>
                                                {website.longDescription && (
                                                    <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-100 text-gray-600 poppins text-sm leading-7 whitespace-pre-line">
                                                        {website.longDescription}
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === "gallery" && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                {website.images?.map((img, idx) => (
                                                    <div key={idx} onClick={() => setSelectedImage(img)} className="group relative aspect-video bg-gray-100 rounded-md overflow-hidden cursor-pointer border border-gray-200">
                                                        <img src={img} alt="Screenshot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                                            <LuEye className="text-white opacity-0 group-hover:opacity-100" size={24} />
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === "features" && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {website.features?.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-100 rounded-md">
                                                    <div className="w-8 h-8 rounded bg-teal-100 flex items-center justify-center"><LuCheck className="text-teal-600" size={16} /></div>
                                                    <span className="text-gray-700 font-medium text-sm leading-relaxed poppins">{feature}</span>
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}

                                    {activeTab === "reviews" && (
                                        <ReviewsSection productId={website._id} productType="website" />
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar - Positioned to overlap hero */}
                        <div className="lg:col-span-4 lg:-mt-[450px]">
                            <div className="sticky top-24 space-y-5">
                                <div className="bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
                                    <div className="relative aspect-video group cursor-pointer" onClick={() => website.videoUrl && setShowVideoModal(true)}>
                                        <img src={website.images?.[0] || website.image || "/images/placeholder.png"} alt={website.title} className="w-full h-full object-cover" />
                                        {website.videoUrl && <div className="absolute inset-0 bg-black/40 flex items-center justify-center"><MdPlayCircleOutline className="text-white text-6xl" /></div>}
                                    </div>
                                    <div className="p-5 space-y-5">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-gray-900 outfit">৳{(website.offerPrice || website.price)?.toLocaleString()}</span>
                                            {website.offerPrice < website.price && <span className="text-gray-400 line-through text-sm">৳{website.price?.toLocaleString()}</span>}
                                        </div>
                                        <div className="space-y-2.5">
                                            <button onClick={handleBuyNow} className="w-full py-3 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition-colors">Buy Now</button>
                                            <button onClick={handleAddToCart} className="w-full py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-md hover:border-teal-400 transition-colors">Add to Cart</button>
                                            {website.previewUrl && <a href={website.previewUrl} target="_blank" className="w-full py-2.5 bg-gray-50 border border-gray-200 text-gray-600 font-medium rounded-md hover:text-teal-600 transition-colors flex items-center justify-center gap-2 text-sm"><LuExternalLink size={14} /> Live Preview</a>}
                                        </div>
                                        <ul className="space-y-2.5 pt-4 border-t border-gray-100">
                                            <li className="flex items-center gap-2.5 text-gray-600 text-sm poppins"><LuFileCode className="text-teal-500" size={15} /> Full Source Code</li>
                                            <li className="flex items-center gap-2.5 text-gray-600 text-sm poppins"><LuDownload className="text-teal-500" size={15} /> Instant Download</li>
                                            <li className="flex items-center gap-2.5 text-gray-600 text-sm poppins"><LuClock className="text-teal-500" size={15} /> 6 Months Updates</li>
                                            <li className="flex items-center gap-2.5 text-gray-600 text-sm poppins"><LuShieldCheck className="text-teal-500" size={15} /> Premium Support</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Related Websites - Below Sticky Card */}
                                {popularWebsites.length > 0 && (
                                    <div className="bg-white rounded-md border border-gray-200 p-4 mt-5">
                                        <h3 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2 poppins">
                                            <LuLayoutGrid size={14} className="text-teal-500" />
                                            Similar Websites
                                        </h3>
                                        <div className="space-y-3">
                                            {popularWebsites.slice(0, 4).map((item) => (
                                                <Link
                                                    key={item._id}
                                                    href={`/website/${item.slug || item.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`}
                                                    className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors group"
                                                >
                                                    <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0 border border-gray-100">
                                                        <img
                                                            src={item.images?.[0] || item.image || "/images/placeholder.png"}
                                                            alt={item.title}
                                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-xs font-semibold text-gray-800 truncate group-hover:text-teal-600 transition-colors poppins">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-[11px] text-gray-500 poppins">
                                                            ৳{(item.offerPrice || item.price)?.toLocaleString()}
                                                        </p>
                                                    </div>
                                                    <FaArrowRight size={10} className="text-gray-300 group-hover:text-teal-500 transition-colors" />
                                                </Link>
                                            ))}
                                        </div>
                                        <Link
                                            href="/website"
                                            className="block text-center text-xs text-teal-600 font-medium mt-3 pt-3 border-t border-gray-100 hover:text-teal-700 poppins"
                                        >
                                            View All Websites →
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for Images and Videos */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedImage(null)} className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"><img src={selectedImage} className="max-w-full max-h-[90vh] object-contain" /></motion.div>
                )}
                {showVideoModal && website.videoUrl && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowVideoModal(false)} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
                        <div className="relative w-full max-w-4xl aspect-video">
                            <iframe src={`https://www.youtube.com/embed/${website.videoUrl.split('v=')[1] || website.videoUrl.split('/').pop()}?autoplay=1`} className="w-full h-full rounded-lg" allowFullScreen />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
