'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyDownloads } from '@/redux/downloadSlice';
import { fetchMyEnrollments, fetchMyStats } from '@/redux/enrollmentSlice';
import { fetchMyOrders } from '@/redux/orderSlice';
import {
    FiBook, FiArrowRight, FiRefreshCw, FiDownload,
    FiCode, FiGlobe, FiZap, FiShoppingBag, FiCreditCard,
    FiUser, FiCalendar, FiChevronRight, FiPackage, FiLayers
} from 'react-icons/fi';
import { useTheme } from '@/providers/ThemeProvider';

export default function UserDashboard() {
    const { isDark } = useTheme();
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [isSyncing, setIsSyncing] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    const { enrollments, loading: enrollLoading } = useSelector((state) => state.enrollment);
    const { downloads, loading: downloadLoading } = useSelector((state) => state.download);
    const { orders, loading: orderLoading } = useSelector((state) => state.order);

    useEffect(() => {
        setHasMounted(true);
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) { }
        }

        dispatch(fetchMyEnrollments());
        dispatch(fetchMyStats());
        dispatch(fetchMyDownloads());
        dispatch(fetchMyOrders());
    }, [dispatch]);

    const handleSync = () => {
        setIsSyncing(true);
        dispatch(fetchMyEnrollments());
        dispatch(fetchMyStats());
        dispatch(fetchMyDownloads());
        dispatch(fetchMyOrders());
        setTimeout(() => setIsSyncing(false), 800);
    };

    const cardClass = `rounded-md border transition-all ${isDark
        ? 'bg-[#111827] border-slate-800 shadow-lg shadow-black/20'
        : 'bg-white border-slate-200 shadow-sm'
        }`;

    if (!hasMounted || enrollLoading || downloadLoading || orderLoading) {
        return (
            <div className="p-6 space-y-6">
                <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded-md animate-pulse"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="h-24 bg-slate-100 dark:bg-slate-800 rounded-md animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }

    const softwareCount = downloads.filter(d => d.productType === 'software').length;
    const websiteCount = downloads.filter(d => d.productType === 'website').length;

    return (
        <div className="p-6 space-y-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div>
                    <h1 className={`text-2xl font-normal tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Hi, {user?.firstName || 'User'} 👋
                    </h1>
                    <p className="text-sm font-normal text-slate-500 mt-1">
                        Here's what's happening with your account today.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleSync}
                        className={`flex items-center gap-2 px-4 py-2 text-xs font-normal rounded-md border transition-all ${isDark
                            ? 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                            }`}
                    >
                        <FiRefreshCw className={isSyncing ? 'animate-spin' : ''} />
                        Sync Now
                    </button>
                    <Link
                        href="/courses"
                        className="px-5 py-2.5 bg-slate-900 dark:bg-white dark:text-slate-900 text-white text-xs font-normal rounded-md hover:opacity-90 transition-all uppercase tracking-wider"
                    >
                        Store
                    </Link>
                </div>
            </div>

            {/* Main Section: Digital Assets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className={`lg:col-span-2 ${cardClass} overflow-hidden p-6 relative group`}>
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <FiLayers size={140} />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                        <div className="space-y-4">
                            <div>
                                <h2 className={`text-xl font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>Digital Assets</h2>
                                <Link href="/dashboard/user/downloads" className="text-xs font-normal text-slate-500 hover:text-[#FD9A00] hover:underline flex items-center gap-1 mt-1">
                                    Browse All Assets <FiArrowRight size={12} />
                                </Link>
                            </div>

                            <div className="flex gap-8">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-normal text-slate-400 uppercase tracking-widest">Total</p>
                                    <p className={`text-4xl font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {downloads.length.toString().padStart(2, '0')}
                                    </p>
                                </div>
                                <div className="w-px h-12 bg-slate-200 dark:bg-slate-800 my-auto"></div>
                                <div className="flex gap-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            <FiCode size={20} />
                                        </div>
                                        <div>
                                            <p className={`text-lg font-normal ${isDark ? 'text-white' : 'text-slate-800'}`}>{softwareCount}</p>
                                            <p className="text-[10px] font-normal text-slate-400 uppercase">Softwares</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-500">
                                            <FiGlobe size={20} />
                                        </div>
                                        <div>
                                            <p className={`text-lg font-normal ${isDark ? 'text-white' : 'text-slate-800'}`}>{websiteCount}</p>
                                            <p className="text-[10px] font-normal text-slate-400 uppercase">Websites</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <Link
                                href="/dashboard/user/downloads"
                                className="px-6 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-md font-normal text-sm shadow-md hover:scale-[1.02] transition-all block text-center"
                            >
                                Download Center
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Secondary Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                    <div className={`${cardClass} p-5 flex items-center gap-4`}>
                        <div className="w-12 h-12 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <FiShoppingBag size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-normal text-slate-400 uppercase">Orders</p>
                            <h3 className={`text-xl font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>{orders?.length || 0}</h3>
                        </div>
                    </div>
                    <div className={`${cardClass} p-5 flex items-center gap-4`}>
                        <div className="w-12 h-12 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
                            <FiZap size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-normal text-slate-400 uppercase">Reward Points</p>
                            <h3 className={`text-xl font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>1,250</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Lists */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Recent Assets */}
                    <div className={cardClass}>
                        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/10">
                            <h3 className={`font-normal text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Private Asset Vault</h3>
                            <Link href="/dashboard/user/downloads" className="text-[10px] font-normal text-slate-400 uppercase tracking-widest hover:text-[#FD9A00]">Manage All</Link>
                        </div>
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {downloads.length === 0 ? (
                                <div className="p-12 text-center text-slate-400 text-xs font-normal uppercase tracking-widest">No assets in vault</div>
                            ) : (
                                downloads.slice(0, 5).map((asset, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-all">
                                        <div className="w-12 h-12 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 border border-slate-200 dark:border-slate-700">
                                            {asset.productType === 'software' ? <FiCode size={20} /> : <FiGlobe size={20} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-sm font-normal truncate ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{asset.title}</p>
                                            <p className="text-[10px] font-normal text-slate-400 uppercase mt-0.5">{asset.productType} License</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <button className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-[10px] font-normal uppercase hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className={cardClass}>
                        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/10">
                            <h3 className={`font-normal text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>Recent Transactions</h3>
                        </div>
                        <div className="p-2">
                            {orders.length === 0 ? (
                                <div className="p-10 text-center text-slate-400 text-[10px] font-normal uppercase">Transaction history empty</div>
                            ) : (
                                orders.slice(0, 3).map((order, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/20">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-200 dark:border-slate-700">
                                                <FiCreditCard size={18} />
                                            </div>
                                            <div>
                                                <p className={`text-xs font-normal ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                                                    ORD-{order.orderNumber || order._id?.slice(-6).toUpperCase()}
                                                </p>
                                                <p className="text-[10px] text-slate-500">{new Date(order.orderDate).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className={`text-sm font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>৳{order.totalAmount?.toLocaleString()}</p>
                                            <div className="text-[8px] font-normal uppercase px-2 py-0.5 border border-slate-200 dark:border-slate-700 rounded-md inline-block">
                                                {order.paymentStatus}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* Profile */}
                    <div className={`${cardClass} p-8 text-center`}>
                        <div className="w-20 h-20 mx-auto rounded-md bg-slate-900 flex items-center justify-center text-2xl font-normal text-white border-2 border-slate-200 dark:border-slate-800 mb-4 shadow-sm">
                            {user?.firstName?.[0] || 'U'}
                        </div>
                        <h4 className={`text-lg font-normal ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {user?.firstName} {user?.lastName}
                        </h4>
                        <p className="text-xs font-normal text-slate-500 mb-6">{user?.email}</p>

                        <Link
                            href="/dashboard/user/profile"
                            className={`w-full py-2.5 rounded-md border text-[10px] font-normal uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${isDark ? 'border-slate-700 text-slate-300 hover:bg-slate-700' : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                        >
                            Account Settings <FiChevronRight size={14} />
                        </Link>
                    </div>

                    {/* Quick Hub */}
                    <div className={`${cardClass} p-3`}>
                        <p className="px-4 py-3 text-[10px] font-normal text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 mb-2">Workspace Hub</p>
                        <div className="space-y-0.5">
                            {[
                                { label: 'Asset Vault', href: '/dashboard/user/downloads', icon: FiPackage },
                                { label: 'Order History', href: '/dashboard/user/purchases', icon: FiShoppingBag },
                                { label: 'My Courses', href: '/dashboard/user/courses', icon: FiBook },
                                { label: 'Support Ticket', href: '/dashboard/user/support', icon: FiUser }
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className="flex items-center justify-between p-3 rounded-md hover:bg-slate-50 dark:hover:bg-slate-800/50 group transition-all"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-md flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                            <item.icon size={16} />
                                        </div>
                                        <span className={`text-[11px] font-normal uppercase tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{item.label}</span>
                                    </div>
                                    <FiChevronRight size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
