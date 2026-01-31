'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyOrders } from '@/redux/orderSlice';
import Link from 'next/link';
import {
    FiCode, FiGlobe, FiSearch, FiRefreshCw,
    FiGrid, FiList, FiPackage, FiArrowRight,
    FiCheckCircle, FiAlertCircle, FiClock, FiMessageSquare, FiLayers
} from 'react-icons/fi';
import { useTheme } from '@/providers/ThemeProvider';

export default function AllAssetsPage() {
    const { isDark } = useTheme();
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.order);
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');
    const [filterType, setFilterType] = useState('all');

    useEffect(() => {
        dispatch(fetchMyOrders());
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchMyOrders());
    };

    // Extract all products from orders
    const allProducts = orders?.flatMap(order =>
        order.items?.map(item => ({
            ...item,
            orderId: order._id,
            orderNumber: order.orderNumber,
            orderDate: order.orderDate,
            paymentStatus: order.paymentStatus
        })) || []
    ) || [];

    // Filter downloads
    const filteredProducts = allProducts.filter(d => {
        const matchesSearch = d.title?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === 'all' || d.productType === filterType;
        return matchesSearch && matchesType;
    });

    // Stats
    const stats = {
        total: allProducts.length,
        softwares: allProducts.filter(d => d.productType === 'software').length,
        websites: allProducts.filter(d => d.productType === 'website').length,
    };

    // Card class based on theme
    const cardClass = `rounded-2xl border transition-all duration-300 ${isDark
        ? 'bg-slate-800/50 border-white/5 hover:border-[#FD9A00]/20'
        : 'bg-white border-slate-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md'
        }`;

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <FiCheckCircle size={8} /> Complete
                    </span>
                );
            case 'pending':
                return (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                        <FiAlertCircle size={8} /> Pending
                    </span>
                );
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <div className="space-y-6">
                <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 ${cardClass}`}>
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl ${isDark ? 'bg-slate-700' : 'bg-slate-100'} animate-pulse`}></div>
                        <div className="space-y-2">
                            <div className={`h-4 w-32 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'} animate-pulse`}></div>
                            <div className={`h-3 w-48 rounded ${isDark ? 'bg-slate-700' : 'bg-slate-100'} animate-pulse`}></div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={cardClass}>
                            <div className={`h-40 ${isDark ? 'bg-slate-700' : 'bg-slate-100'} animate-pulse`}></div>
                            <div className="p-5 space-y-3">
                                <div className={`h-4 rounded w-3/4 ${isDark ? 'bg-slate-700' : 'bg-slate-100'} animate-pulse`}></div>
                                <div className={`h-3 rounded w-1/2 ${isDark ? 'bg-slate-700' : 'bg-slate-100'} animate-pulse`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 ${cardClass}`}>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FD9A00] to-[#2dd4bf] flex items-center justify-center text-white shadow-md shadow-[#FD9A00]/10">
                        <FiLayers size={24} />
                    </div>
                    <div>
                        <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                            Digital Assets
                        </h1>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            All your purchased websites and software
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleRefresh}
                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${isDark
                            ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                    >
                        <FiRefreshCw size={16} />
                        Refresh
                    </button>
                    <Link
                        href="/website"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FD9A00] to-[#2dd4bf] text-white rounded-xl text-sm font-bold shadow-md shadow-[#FD9A00]/10 hover:scale-105 transition-all"
                    >
                        <FiPackage size={16} />
                        Browse More
                    </Link>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Total */}
                <div className={`${cardClass} p-5 relative group overflow-hidden`}>
                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Total Products
                            </p>
                            <h3 className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                {stats.total.toString().padStart(2, '0')}
                            </h3>
                            <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                All Products
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FD9A00] to-[#2dd4bf] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                            <FiLayers size={20} />
                        </div>
                    </div>
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FD9A00] to-[#2dd4bf] transition-all duration-300 group-hover:w-full w-0`} />
                </div>

                {/* Softwares */}
                <Link href="/dashboard/user/assets/softwares" className={`${cardClass} p-5 relative group overflow-hidden cursor-pointer`}>
                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Software
                            </p>
                            <h3 className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                {stats.softwares.toString().padStart(2, '0')}
                            </h3>
                            <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Applications & Tools
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FD9A00] to-[#fb923c] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                            <FiCode size={20} />
                        </div>
                    </div>
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#FD9A00] to-[#fb923c] transition-all duration-300 group-hover:w-full w-0`} />
                </Link>

                {/* Websites */}
                <Link href="/dashboard/user/assets/websites" className={`${cardClass} p-5 relative group overflow-hidden cursor-pointer`}>
                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Websites
                            </p>
                            <h3 className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                {stats.websites.toString().padStart(2, '0')}
                            </h3>
                            <p className={`text-[10px] mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Templates & Themes
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2dd4bf] to-[#FD9A00] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                            <FiGlobe size={20} />
                        </div>
                    </div>
                    <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2dd4bf] to-[#FD9A00] transition-all duration-300 group-hover:w-full w-0`} />
                </Link>
            </div>

            {/* Filters Bar */}
            <div className={`flex flex-col md:flex-row md:items-center gap-4 p-4 ${cardClass}`}>
                <div className="relative flex-1">
                    <FiSearch className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full pl-11 pr-4 py-2.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 ${isDark
                            ? 'bg-slate-800/50 border-white/5 text-slate-200 focus:ring-[#FD9A00]/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 focus:ring-[#FD9A00]/20'
                            }`}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setFilterType('all')}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${filterType === 'all'
                            ? isDark ? 'bg-[#FD9A00]/20 text-[#FD9A00] border border-[#FD9A00]/30' : 'bg-[#FD9A00]/10 text-[#FD9A00] border border-[#FD9A00]/20'
                            : isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                            }`}>
                        All
                    </button>
                    <button
                        onClick={() => setFilterType('software')}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${filterType === 'software'
                            ? isDark ? 'bg-[#FD9A00]/20 text-[#FD9A00] border border-[#FD9A00]/30' : 'bg-[#FD9A00]/10 text-[#FD9A00] border border-[#FD9A00]/20'
                            : isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                            }`}>
                        Software
                    </button>
                    <button
                        onClick={() => setFilterType('website')}
                        className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${filterType === 'website'
                            ? isDark ? 'bg-[#FD9A00]/20 text-[#FD9A00] border border-[#FD9A00]/30' : 'bg-[#FD9A00]/10 text-[#FD9A00] border border-[#FD9A00]/20'
                            : isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                            }`}>
                        Websites
                    </button>
                </div>
                <div className={`flex items-center gap-1 p-1 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-slate-100'}`}>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'grid'
                            ? isDark ? 'bg-slate-700 text-white shadow-sm' : 'bg-white shadow-sm text-slate-800'
                            : isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}
                    >
                        <FiGrid size={18} />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'list'
                            ? isDark ? 'bg-slate-700 text-white shadow-sm' : 'bg-white shadow-sm text-slate-800'
                            : isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}
                    >
                        <FiList size={18} />
                    </button>
                </div>
            </div>

            {/* Content */}
            {filteredProducts.length === 0 ? (
                <div className={`py-20 text-center rounded-2xl border-2 border-dashed ${isDark
                    ? 'border-slate-700 bg-slate-900/20'
                    : 'border-slate-200 bg-slate-50/50'
                    }`}>
                    <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 ${isDark ? 'bg-slate-800' : 'bg-slate-100'
                        }`}>
                        <FiLayers size={36} className={isDark ? 'text-slate-600' : 'text-slate-300'} />
                    </div>
                    <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                        No Products Found
                    </h2>
                    <p className={`text-sm mt-3 max-w-sm mx-auto ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        {searchTerm
                            ? `No products matching "${searchTerm}".`
                            : "You haven't purchased any products yet. Browse our marketplace!"}
                    </p>
                    {!searchTerm && (
                        <Link
                            href="/website"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-[#FD9A00] to-[#2dd4bf] text-white rounded-xl font-bold text-sm shadow-md shadow-[#FD9A00]/10 hover:scale-105 transition-all"
                        >
                            Browse Marketplace <FiArrowRight />
                        </Link>
                    )}
                </div>
            ) : viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredProducts.map((item, idx) => (
                        <Link
                            href={item.productType === 'website' ? '/dashboard/user/assets/websites' : '/dashboard/user/assets/softwares'}
                            key={idx}
                            className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 ${isDark
                                ? 'bg-slate-800/50 border-white/5 hover:border-[#FD9A00]/20'
                                : 'bg-white border-slate-200 hover:shadow-lg'
                                }`}
                        >
                            {/* Thumbnail */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={item.image || (item.productType === 'software'
                                        ? 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400'
                                        : 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400')}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                {/* Type Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white ${item.productType === 'software'
                                        ? 'bg-gradient-to-r from-[#FD9A00] to-[#fb923c]'
                                        : 'bg-gradient-to-r from-[#2dd4bf] to-[#FD9A00]'
                                        }`}>
                                        {item.productType === 'software' ? <FiCode size={10} /> : <FiGlobe size={10} />}
                                        {item.productType === 'software' ? 'Software' : 'Website'}
                                    </span>
                                </div>

                                <div className="absolute bottom-3 left-3 right-3">
                                    <h3 className="text-white font-bold text-sm line-clamp-2 leading-snug">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-4 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                        #{item.orderNumber}
                                    </span>
                                    {getStatusBadge(item.paymentStatus)}
                                </div>

                                <div className="flex items-center justify-between text-[10px] font-bold">
                                    <span className={`uppercase tracking-widest flex items-center gap-1.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                        <FiClock size={10} /> Order Date
                                    </span>
                                    <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                                        {new Date(item.orderDate).toLocaleDateString('en-US')}
                                    </span>
                                </div>

                                {/* View Details */}
                                <div className="flex items-center gap-2 pt-2">
                                    <span className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#FD9A00] to-[#2dd4bf] text-white rounded-xl font-bold text-xs shadow-md shadow-[#FD9A00]/10 group-hover:shadow-lg group-hover:-translate-y-0.5 transition-all">
                                        View Details <FiArrowRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={`rounded-2xl border overflow-hidden divide-y ${isDark ? 'bg-slate-800/50 border-white/5 divide-white/5' : 'bg-white border-slate-200 divide-slate-100'}`}>
                    {filteredProducts.map((item, idx) => (
                        <Link
                            href={item.productType === 'website' ? '/dashboard/user/assets/websites' : '/dashboard/user/assets/softwares'}
                            key={idx}
                            className={`flex items-center gap-4 p-4 transition-colors ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-50'}`}
                        >
                            <div className="w-16 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-100 dark:border-white/5">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className={`text-sm font-bold truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{item.title}</h3>
                                <div className="flex items-center gap-3 mt-1">
                                    <span className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded tracking-wider ${item.productType === 'software'
                                        ? 'bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400'
                                        : 'bg-teal-100 text-teal-700 dark:bg-teal-600/10 dark:text-teal-500'
                                        }`}>
                                        {item.productType === 'software' ? 'Software' : 'Website'}
                                    </span>
                                    <span className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                        {new Date(item.orderDate).toLocaleDateString('en-US')}
                                    </span>
                                    {getStatusBadge(item.paymentStatus)}
                                </div>
                            </div>
                            <FiArrowRight className={`${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                        </Link>
                    ))}
                </div>
            )}

            {/* Info Notice */}
            <div className={`p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 transition-all ${isDark
                ? 'bg-slate-800/50 border-white/5'
                : 'bg-gradient-to-br from-slate-50 to-white border-slate-100'
                }`}>
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark
                        ? 'bg-slate-700 text-[#FD9A00]'
                        : 'bg-white text-[#FD9A00] shadow-md border border-slate-100'
                        }`}>
                        <FiMessageSquare size={22} />
                    </div>
                    <div>
                        <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Need Help?</h4>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            If you have any questions about your purchased products, contact our support team.
                        </p>
                    </div>
                </div>
                <Link
                    href="/dashboard/user/support"
                    className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${isDark
                        ? 'bg-slate-700 text-white hover:bg-slate-600'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                        }`}
                >
                    Contact Support
                </Link>
            </div>
        </div>
    );
}
