'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyOrders } from '@/redux/orderSlice';
import Link from 'next/link';
import {
    FiCode, FiClock, FiShield, FiRefreshCw, FiSearch,
    FiPackage, FiCheckCircle, FiAlertCircle, FiChevronDown, FiChevronUp,
    FiCpu, FiLayers, FiInfo, FiSettings, FiExternalLink, FiMessageSquare,
    FiMonitor, FiSmartphone
} from 'react-icons/fi';
import { useTheme } from '@/providers/ThemeProvider';
import { API_BASE_URL } from '@/config/api';

export default function MySoftwaresPage() {
    const { isDark } = useTheme();
    const dispatch = useDispatch();
    const { orders, loading } = useSelector((state) => state.order);
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedCard, setExpandedCard] = useState(null);
    const [softwareProducts, setSoftwareProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchMyOrders());
    }, [dispatch]);

    // Extract software items from orders and fetch full product details
    useEffect(() => {
        const fetchProductDetails = async () => {
            if (!orders || orders.length === 0) {
                setProductsLoading(false);
                return;
            }

            const softwareItems = [];
            orders.forEach(order => {
                order.items?.forEach(item => {
                    if (item.productType === 'software') {
                        softwareItems.push({
                            ...item,
                            orderId: order._id,
                            orderNumber: order.orderNumber,
                            orderDate: order.orderDate,
                            paymentStatus: order.paymentStatus,
                            paymentMethod: order.paymentMethod,
                            totalAmount: order.totalAmount,
                            isInstallment: order.isInstallment,
                            installments: order.installments
                        });
                    }
                });
            });

            // Fetch full product details for each software
            const productsWithDetails = await Promise.all(
                softwareItems.map(async (item) => {
                    try {
                        const res = await fetch(`${API_BASE_URL}/softwares/${item.product}`);
                        const data = await res.json();
                        if (data.success && data.data) {
                            return { ...item, productDetails: data.data };
                        }
                    } catch (error) {
                        console.error('Failed to fetch product details:', error);
                    }
                    return item;
                })
            );

            setSoftwareProducts(productsWithDetails);
            setProductsLoading(false);
        };

        fetchProductDetails();
    }, [orders]);

    const handleRefresh = () => {
        dispatch(fetchMyOrders());
    };

    // Filter by search
    const filteredSoftwares = softwareProducts.filter(s =>
        s.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.productDetails?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Stats
    const stats = {
        total: softwareProducts.length,
        completed: softwareProducts.filter(s => s.paymentStatus === 'completed').length,
        pending: softwareProducts.filter(s => s.paymentStatus === 'pending').length,
    };

    const cardClass = `rounded-2xl border transition-all duration-300 ${isDark
        ? 'bg-slate-800/50 border-white/5'
        : 'bg-white border-slate-200/60 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]'
        }`;

    const getStatusBadge = (status) => {
        switch (status) {
            case 'completed':
                return (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <FiCheckCircle size={10} /> Payment Complete
                    </span>
                );
            case 'pending':
                return (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400">
                        <FiAlertCircle size={10} /> Payment Pending
                    </span>
                );
            default:
                return (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                        {status}
                    </span>
                );
        }
    };

    const getDeliveryStatus = (paymentStatus) => {
        switch (paymentStatus) {
            case 'completed':
                return (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                        <FiSettings size={10} className="animate-spin" /> Processing
                    </span>
                );
            case 'pending':
                return (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                        Awaiting Payment
                    </span>
                );
            default:
                return null;
        }
    };

    if (loading || productsLoading) {
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
                <div className="grid grid-cols-1 gap-4">
                    {[1, 2].map((i) => (
                        <div key={i} className={cardClass}>
                            <div className={`h-48 ${isDark ? 'bg-slate-700' : 'bg-slate-100'} animate-pulse`}></div>
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
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FD9A00] to-[#fb923c] flex items-center justify-center text-white shadow-md shadow-[#FD9A00]/10">
                        <FiCode size={24} />
                    </div>
                    <div>
                        <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                            My Softwares
                        </h1>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            View all your purchased software and their details
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
                        href="/software"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FD9A00] to-[#fb923c] text-white rounded-xl text-sm font-bold shadow-md shadow-[#FD9A00]/10 hover:scale-105 transition-all"
                    >
                        <FiPackage size={16} />
                        Browse More
                    </Link>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className={`${cardClass} p-5 relative group overflow-hidden`}>
                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Total Software
                            </p>
                            <h3 className={`text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                {stats.total.toString().padStart(2, '0')}
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FD9A00] to-[#fb923c] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                            <FiCode size={20} />
                        </div>
                    </div>
                </div>

                <div className={`${cardClass} p-5 relative group overflow-hidden`}>
                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Payment Complete
                            </p>
                            <h3 className={`text-3xl font-bold mt-1 text-emerald-500`}>
                                {stats.completed.toString().padStart(2, '0')}
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                            <FiCheckCircle size={20} />
                        </div>
                    </div>
                </div>

                <div className={`${cardClass} p-5 relative group overflow-hidden`}>
                    <div className="relative z-10 flex items-start justify-between">
                        <div>
                            <p className={`text-[10px] font-bold uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                Pending
                            </p>
                            <h3 className={`text-3xl font-bold mt-1 text-amber-500`}>
                                {stats.pending.toString().padStart(2, '0')}
                            </h3>
                        </div>
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                            <FiAlertCircle size={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Search Bar */}
            <div className={`flex flex-col md:flex-row md:items-center gap-4 p-4 ${cardClass}`}>
                <div className="relative flex-1">
                    <FiSearch className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                    <input
                        placeholder="Search software..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full pl-11 pr-4 py-2.5 rounded-xl text-sm transition-all focus:outline-none focus:ring-2 ${isDark
                            ? 'bg-slate-800/50 border-white/5 text-slate-200 focus:ring-[#FD9A00]/30'
                            : 'bg-slate-50 border-slate-200 text-slate-700 focus:ring-[#FD9A00]/20'
                            }`}
                    />
                </div>
            </div>

            {/* Content */}
            {filteredSoftwares.length === 0 ? (
                <div className={`py-20 text-center rounded-2xl border-2 border-dashed ${isDark
                    ? 'border-slate-700 bg-slate-900/20'
                    : 'border-slate-200 bg-slate-50/50'
                    }`}>
                    <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-4 ${isDark ? 'bg-slate-800' : 'bg-slate-100'
                        }`}>
                        <FiCode size={36} className={isDark ? 'text-slate-600' : 'text-slate-300'} />
                    </div>
                    <h2 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                        {searchTerm ? 'No Software Found' : 'No Software Purchased Yet'}
                    </h2>
                    <p className={`text-sm mt-3 max-w-sm mx-auto ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>
                        {searchTerm
                            ? `No software matching "${searchTerm}".`
                            : 'Browse our marketplace to find your perfect software.'
                        }
                    </p>
                    {!searchTerm && (
                        <Link
                            href="/software"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-[#FD9A00] to-[#fb923c] text-white rounded-xl font-bold text-sm shadow-md shadow-[#FD9A00]/10 hover:scale-105 transition-all"
                        >
                            Browse Software <FiExternalLink />
                        </Link>
                    )}
                </div>
            ) : (
                <div className="space-y-4">
                    {filteredSoftwares.map((item) => {
                        const isExpanded = expandedCard === item.orderId + item.product;
                        const product = item.productDetails;

                        return (
                            <div
                                key={item.orderId + item.product}
                                className={`${cardClass} overflow-hidden`}
                            >
                                {/* Main Card Header */}
                                <div className="p-5">
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        {/* Thumbnail */}
                                        <div className="lg:w-48 h-32 lg:h-auto rounded-xl overflow-hidden shrink-0">
                                            <img
                                                src={item.image || product?.images?.[0] || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400'}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Info */}
                                        <div className="flex-1 space-y-4">
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                                                <div>
                                                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                        {product?.title || item.title}
                                                    </h3>
                                                    <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                                        Order: #{item.orderNumber} • {new Date(item.orderDate).toLocaleDateString('en-US')}
                                                    </p>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {getStatusBadge(item.paymentStatus)}
                                                    {getDeliveryStatus(item.paymentStatus)}
                                                </div>
                                            </div>

                                            {/* Quick Info Grid */}
                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                                <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                                                    <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Price</p>
                                                    <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>৳{item.price?.toLocaleString()}</p>
                                                </div>
                                                <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                                                    <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Payment</p>
                                                    <p className={`text-sm font-bold capitalize ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.paymentMethod}</p>
                                                </div>
                                                <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                                                    <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Platform</p>
                                                    <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{product?.platform || 'N/A'}</p>
                                                </div>
                                                <div className={`p-3 rounded-xl ${isDark ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                                                    <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Installment</p>
                                                    <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.isInstallment ? 'Yes' : 'No'}</p>
                                                </div>
                                            </div>

                                            {/* Expand Button */}
                                            <button
                                                onClick={() => setExpandedCard(isExpanded ? null : item.orderId + item.product)}
                                                className={`flex items-center gap-2 text-sm font-bold transition-all ${isDark ? 'text-[#FD9A00] hover:text-[#fb923c]' : 'text-[#FD9A00] hover:text-[#e68a00]'
                                                    }`}
                                            >
                                                {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                                                {isExpanded ? 'Show Less' : 'View Details'}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                {isExpanded && product && (
                                    <div className={`border-t ${isDark ? 'border-slate-700' : 'border-slate-100'}`}>
                                        <div className="p-5 space-y-6">
                                            {/* Features Section */}
                                            <div>
                                                <h4 className={`flex items-center gap-2 text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                    <FiLayers size={16} className="text-[#FD9A00]" />
                                                    Features
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                                    {product.features?.map((feature, idx) => (
                                                        <div key={idx} className={`flex items-center gap-2 p-2 rounded-lg ${isDark ? 'bg-slate-700/30' : 'bg-slate-50'}`}>
                                                            <FiCheckCircle className="text-emerald-500 shrink-0" size={14} />
                                                            <span className={`text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
                                                        </div>
                                                    )) || (
                                                            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>No features listed</p>
                                                        )}
                                                </div>
                                            </div>

                                            {/* Supported Platforms */}
                                            {product.supportedPlatforms && (
                                                <div>
                                                    <h4 className={`flex items-center gap-2 text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                        <FiMonitor size={16} className="text-[#FD9A00]" />
                                                        Supported Platforms
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {product.supportedPlatforms.map((plat, idx) => (
                                                            <span key={idx} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                                                                {plat.toLowerCase().includes('win') && <FiMonitor size={12} />}
                                                                {plat.toLowerCase().includes('mac') && <FiMonitor size={12} />}
                                                                {plat.toLowerCase().includes('android') && <FiSmartphone size={12} />}
                                                                {plat.toLowerCase().includes('ios') && <FiSmartphone size={12} />}
                                                                {plat}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Technologies Section */}
                                            <div>
                                                <h4 className={`flex items-center gap-2 text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                    <FiCpu size={16} className="text-[#FD9A00]" />
                                                    Technology Stack
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {product.technologies?.map((tech, idx) => (
                                                        <span key={idx} className={`px-3 py-1.5 rounded-lg text-xs font-bold ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                                                            {tech}
                                                        </span>
                                                    )) || (
                                                            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>No technologies listed</p>
                                                        )}
                                                </div>
                                            </div>

                                            {/* Description Section */}
                                            {product.description && (
                                                <div>
                                                    <h4 className={`flex items-center gap-2 text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                        <FiInfo size={16} className="text-[#FD9A00]" />
                                                        Description
                                                    </h4>
                                                    <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                                        {product.description}
                                                    </p>
                                                </div>
                                            )}

                                            {/* Installment Details */}
                                            {item.isInstallment && item.installments && (
                                                <div>
                                                    <h4 className={`flex items-center gap-2 text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                        <FiClock size={16} className="text-[#FD9A00]" />
                                                        Installment Schedule
                                                    </h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                                        {item.installments.map((inst, idx) => (
                                                            <div key={idx} className={`p-3 rounded-xl border ${inst.status === 'completed'
                                                                ? isDark ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-emerald-200 bg-emerald-50'
                                                                : isDark ? 'border-slate-700 bg-slate-800/50' : 'border-slate-200 bg-slate-50'
                                                                }`}>
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <span className={`text-xs font-bold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                                                        Installment #{inst.installmentNumber}
                                                                    </span>
                                                                    {inst.status === 'completed' ? (
                                                                        <FiCheckCircle className="text-emerald-500" size={14} />
                                                                    ) : (
                                                                        <FiClock className="text-amber-500" size={14} />
                                                                    )}
                                                                </div>
                                                                <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>৳{inst.amount?.toLocaleString()}</p>
                                                                <p className={`text-[10px] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                                                                    {new Date(inst.dueDate).toLocaleDateString('en-US')}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Action Buttons */}
                                            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                                                {product.previewUrl && (
                                                    <a
                                                        href={product.previewUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${isDark
                                                            ? 'bg-slate-700 text-slate-200 hover:bg-slate-600'
                                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                                            }`}
                                                    >
                                                        <FiExternalLink size={16} />
                                                        View Live Demo
                                                    </a>
                                                )}
                                                <Link
                                                    href="/dashboard/user/support"
                                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FD9A00] to-[#fb923c] text-white rounded-xl text-sm font-bold shadow-md shadow-[#FD9A00]/10 hover:scale-105 transition-all"
                                                >
                                                    <FiMessageSquare size={16} />
                                                    Contact Support
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Info Notice */}
            <div className={`p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 transition-all ${isDark
                ? 'bg-gradient-to-r from-slate-800 to-slate-800/50 border-white/5'
                : 'bg-gradient-to-r from-[#FD9A00]/5 to-white border-slate-100'
                }`}>
                <div className="flex items-center gap-4 text-center md:text-left">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isDark
                        ? 'bg-[#FD9A00]/10 text-[#FD9A00]'
                        : 'bg-white text-[#FD9A00] shadow-md border border-[#FD9A00]/10'
                        }`}>
                        <FiShield size={22} />
                    </div>
                    <div>
                        <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>About Delivery</h4>
                        <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            After payment confirmation, our team will contact you for software setup.
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
                    Need Help?
                </Link>
            </div>
        </div>
    );
}
