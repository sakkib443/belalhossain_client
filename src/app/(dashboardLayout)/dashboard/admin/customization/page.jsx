'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '@/providers/ThemeProvider';
import {
    FiCheck, FiClock, FiLoader, FiSearch, FiFilter, FiRefreshCw,
    FiUser, FiMail, FiPhone, FiImage, FiType, FiLayout, FiSettings,
    FiEdit3, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiX,
    FiChevronDown, FiChevronRight, FiExternalLink
} from 'react-icons/fi';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const editTypes = [
    { value: 'text', label: 'Text', icon: FiType, color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { value: 'image', label: 'Image', icon: FiImage, color: 'text-green-500', bg: 'bg-green-500/10' },
    { value: 'design', label: 'Design', icon: FiLayout, color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { value: 'contact', label: 'Contact', icon: FiPhone, color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { value: 'functionality', label: 'Functionality', icon: FiSettings, color: 'text-pink-500', bg: 'bg-pink-500/10' },
    { value: 'other', label: 'Other', icon: FiEdit3, color: 'text-slate-500', bg: 'bg-slate-500/10' },
];

const statusFilters = [
    { value: '', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
];

const priorityColors = {
    low: 'bg-slate-500',
    medium: 'bg-blue-500',
    high: 'bg-orange-500',
    urgent: 'bg-red-500'
};

export default function AdminCustomizationPage() {
    const { isDark } = useTheme();
    const [loading, setLoading] = useState(true);
    const [requests, setRequests] = useState([]);
    const [stats, setStats] = useState({ pending: 0, inProgress: 0, completed: 0, total: 0 });
    const [statusFilter, setStatusFilter] = useState('');
    const [search, setSearch] = useState('');
    const [expandedRequest, setExpandedRequest] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });
    const [updatingItem, setUpdatingItem] = useState(null);

    useEffect(() => {
        fetchRequests();
    }, [statusFilter, search]);

    const fetchRequests = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            const params = new URLSearchParams();
            if (statusFilter) params.append('status', statusFilter);
            if (search) params.append('search', search);

            const res = await axios.get(`${API_URL}/customization/admin/all?${params}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setRequests(res.data.data || []);
            setStats(res.data.meta?.stats || { pending: 0, inProgress: 0, completed: 0, total: 0 });
        } catch (error) {
            console.error('Error fetching requests:', error);
            setMessage({ type: 'error', text: 'Failed to load data' });
        } finally {
            setLoading(false);
        }
    };

    const toggleItemCompletion = async (requestId, itemId, currentStatus) => {
        setUpdatingItem(`${requestId}-${itemId}`);
        try {
            const token = localStorage.getItem('token');
            await axios.patch(`${API_URL}/customization/admin/${requestId}/toggle-item`, {
                itemId,
                isCompleted: !currentStatus
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            fetchRequests();
            setMessage({ type: 'success', text: currentStatus ? 'Item marked as incomplete' : 'Item marked as complete' });
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to update' });
        } finally {
            setUpdatingItem(null);
        }
    };

    const completeAllItems = async (requestId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.patch(`${API_URL}/customization/admin/${requestId}/complete-all`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchRequests();
            setMessage({ type: 'success', text: 'All items marked as complete!' });
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to update' });
        }
    };

    const getStatusBadge = (status) => {
        const styles = {
            pending: { bg: 'bg-yellow-500/10', text: 'text-yellow-500', icon: FiClock },
            'in-progress': { bg: 'bg-blue-500/10', text: 'text-blue-500', icon: FiLoader },
            completed: { bg: 'bg-green-500/10', text: 'text-green-500', icon: FiCheckCircle }
        };
        const s = styles[status] || styles.pending;
        const Icon = s.icon;
        return (
            <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${s.bg} ${s.text}`}>
                <Icon size={14} className={status === 'in-progress' ? 'animate-spin' : ''} />
                {status === 'pending' ? 'Pending' : status === 'in-progress' ? 'In Progress' : 'Completed'}
            </span>
        );
    };

    const getEditTypeInfo = (type) => editTypes.find(t => t.value === type) || editTypes[5];

    return (
        <div className={`min-h-screen p-6 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
            {/* Header */}
            <div className="mb-8">
                <h1 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                    Customization Requests
                </h1>
                <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    View and manage website customization requests from users
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Total</p>
                            <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{stats.total}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-slate-500/10 flex items-center justify-center">
                            <FiMessageSquare className="text-slate-500" size={24} />
                        </div>
                    </div>
                </div>
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Pending</p>
                            <p className={`text-2xl font-bold text-yellow-500`}>{stats.pending}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                            <FiClock className="text-yellow-500" size={24} />
                        </div>
                    </div>
                </div>
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>In Progress</p>
                            <p className={`text-2xl font-bold text-blue-500`}>{stats.inProgress}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <FiLoader className="text-blue-500" size={24} />
                        </div>
                    </div>
                </div>
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                    <div className="flex items-center justify-between">
                        <div>
                            <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>Completed</p>
                            <p className={`text-2xl font-bold text-green-500`}>{stats.completed}</p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                            <FiCheckCircle className="text-green-500" size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Message */}
            {message.text && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${message.type === 'success'
                        ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                        : 'bg-red-500/10 text-red-500 border border-red-500/20'
                    }`}>
                    {message.type === 'success' ? <FiCheckCircle size={20} /> : <FiAlertCircle size={20} />}
                    <span>{message.text}</span>
                    <button onClick={() => setMessage({ type: '', text: '' })} className="ml-auto">
                        <FiX size={18} />
                    </button>
                </div>
            )}

            {/* Filters */}
            <div className={`p-4 rounded-2xl border mb-6 flex flex-wrap gap-4 items-center ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}>
                {/* Search */}
                <div className="flex-1 min-w-[200px]">
                    <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${isDark ? 'bg-slate-900' : 'bg-slate-100'}`}>
                        <FiSearch className={isDark ? 'text-slate-400' : 'text-slate-500'} />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search websites..."
                            className={`bg-transparent border-none outline-none w-full ${isDark ? 'text-white placeholder:text-slate-500' : 'text-slate-800 placeholder:text-slate-400'}`}
                        />
                    </div>
                </div>

                {/* Status Filter */}
                <div className="flex gap-2">
                    {statusFilters.map((f) => (
                        <button
                            key={f.value}
                            onClick={() => setStatusFilter(f.value)}
                            className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${statusFilter === f.value
                                    ? 'bg-gradient-to-r from-[#FD9A00] to-[#f97316] text-white'
                                    : isDark
                                        ? 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Refresh */}
                <button
                    onClick={fetchRequests}
                    className={`p-2.5 rounded-xl transition-all ${isDark ? 'bg-slate-700 hover:bg-slate-600 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}
                >
                    <FiRefreshCw size={20} />
                </button>
            </div>

            {/* Requests List */}
            <div className="space-y-4">
                {loading ? (
                    <div className="text-center py-16">
                        <FiLoader className="animate-spin mx-auto text-[#FD9A00]" size={40} />
                        <p className={`mt-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Loading...</p>
                    </div>
                ) : requests.length === 0 ? (
                    <div className={`text-center py-16 rounded-2xl ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
                        <FiMessageSquare size={50} className={`mx-auto mb-4 ${isDark ? 'text-slate-600' : 'text-slate-300'}`} />
                        <p className={`${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            No requests found
                        </p>
                    </div>
                ) : (
                    requests.map((request) => {
                        const completedCount = request.requestItems?.filter(i => i.isCompleted).length || 0;
                        const totalCount = request.requestItems?.length || 0;
                        const progress = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

                        return (
                            <div
                                key={request._id}
                                className={`rounded-2xl border overflow-hidden ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}`}
                            >
                                {/* Request Header */}
                                <div
                                    className={`p-5 cursor-pointer ${isDark ? 'hover:bg-slate-700/30' : 'hover:bg-slate-50'}`}
                                    onClick={() => setExpandedRequest(expandedRequest === request._id ? null : request._id)}
                                >
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={request.website?.images?.[0] || '/images/placeholder.png'}
                                            alt=""
                                            className="w-16 h-16 rounded-xl object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                    {request.websiteTitle}
                                                </h4>
                                                <span className={`w-2 h-2 rounded-full ${priorityColors[request.priority]}`} title={request.priority} />
                                            </div>
                                            <div className={`flex items-center gap-3 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                                                <span className="flex items-center gap-1">
                                                    <FiUser size={14} />
                                                    {request.user?.firstName} {request.user?.lastName}
                                                </span>
                                                <span>•</span>
                                                <span>{request.user?.email}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            {/* Progress Circle */}
                                            <div className="relative w-12 h-12">
                                                <svg className="w-12 h-12 -rotate-90">
                                                    <circle
                                                        cx="24" cy="24" r="20"
                                                        fill="none"
                                                        stroke={isDark ? '#334155' : '#e2e8f0'}
                                                        strokeWidth="4"
                                                    />
                                                    <circle
                                                        cx="24" cy="24" r="20"
                                                        fill="none"
                                                        stroke="#22c55e"
                                                        strokeWidth="4"
                                                        strokeDasharray={`${progress * 1.256} 999`}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                                <span className={`absolute inset-0 flex items-center justify-center text-xs font-bold ${isDark ? 'text-white' : 'text-slate-700'}`}>
                                                    {completedCount}/{totalCount}
                                                </span>
                                            </div>
                                            {getStatusBadge(request.overallStatus)}
                                            {expandedRequest === request._id ? <FiChevronDown size={20} /> : <FiChevronRight size={20} />}
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                {expandedRequest === request._id && (
                                    <div className={`px-5 pb-5 border-t ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                                        {/* Quick Actions */}
                                        <div className={`py-4 flex flex-wrap gap-3 border-b ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                                            <button
                                                onClick={() => completeAllItems(request._id)}
                                                disabled={request.overallStatus === 'completed'}
                                                className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-medium flex items-center gap-2 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                <FiCheckCircle size={16} />
                                                Complete All
                                            </button>
                                            {request.user?.phone && (
                                                <a
                                                    href={`tel:${request.user.phone}`}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                                >
                                                    <FiPhone size={16} />
                                                    Call
                                                </a>
                                            )}
                                            <a
                                                href={`mailto:${request.user?.email}`}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 ${isDark ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                            >
                                                <FiMail size={16} />
                                                Email
                                            </a>
                                        </div>

                                        {/* Request Items */}
                                        <div className="py-4 space-y-3">
                                            <h5 className={`font-semibold mb-3 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                Request Items ({totalCount})
                                            </h5>

                                            {request.requestItems?.map((item, idx) => {
                                                const typeInfo = getEditTypeInfo(item.editType);
                                                const TypeIcon = typeInfo.icon;
                                                const isUpdating = updatingItem === `${request._id}-${item._id}`;

                                                return (
                                                    <div
                                                        key={item._id || idx}
                                                        className={`p-4 rounded-xl border-2 transition-all ${item.isCompleted
                                                                ? 'border-green-500/30 bg-green-500/5'
                                                                : isDark ? 'border-slate-700 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
                                                            }`}
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            {/* Checkbox */}
                                                            <button
                                                                onClick={() => toggleItemCompletion(request._id, item._id, item.isCompleted)}
                                                                disabled={isUpdating}
                                                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all ${item.isCompleted
                                                                        ? 'bg-green-500 text-white'
                                                                        : isDark
                                                                            ? 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white border-2 border-slate-600'
                                                                            : 'bg-white text-slate-400 hover:bg-slate-100 hover:text-slate-600 border-2 border-slate-300'
                                                                    }`}
                                                            >
                                                                {isUpdating ? (
                                                                    <FiLoader className="animate-spin" size={16} />
                                                                ) : item.isCompleted ? (
                                                                    <FiCheck size={18} />
                                                                ) : (
                                                                    <span className="text-sm font-bold">{item.itemNumber}</span>
                                                                )}
                                                            </button>

                                                            {/* Content */}
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-3 mb-2">
                                                                    <span className={`font-semibold ${item.isCompleted ? 'line-through opacity-60' : ''} ${isDark ? 'text-white' : 'text-slate-800'}`}>
                                                                        {item.sectionName}
                                                                    </span>
                                                                    <span className={`px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${typeInfo.bg} ${typeInfo.color}`}>
                                                                        <TypeIcon size={12} />
                                                                        {typeInfo.label}
                                                                    </span>
                                                                </div>

                                                                {item.newValue && (
                                                                    <div className={`mb-2 p-3 rounded-lg ${isDark ? 'bg-slate-800' : 'bg-white'}`}>
                                                                        <span className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>New Value:</span>
                                                                        <p className={`${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{item.newValue}</p>
                                                                    </div>
                                                                )}

                                                                {item.description && (
                                                                    <p className={`text-sm mb-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                                                        {item.description}
                                                                    </p>
                                                                )}

                                                                {/* Images */}
                                                                {item.images?.length > 0 && (
                                                                    <div className="flex gap-2 flex-wrap mt-2">
                                                                        {item.images.map((img, imgIdx) => (
                                                                            <a
                                                                                key={imgIdx}
                                                                                href={img}
                                                                                target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                className="relative group"
                                                                            >
                                                                                <img src={img} alt="" className="w-16 h-16 object-cover rounded-lg" />
                                                                                <div className="absolute inset-0 bg-black/50 rounded-lg opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                                                    <FiExternalLink className="text-white" size={16} />
                                                                                </div>
                                                                            </a>
                                                                        ))}
                                                                    </div>
                                                                )}

                                                                {item.completedAt && (
                                                                    <p className={`text-xs mt-2 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                                                                        ✓ Completed: {new Date(item.completedAt).toLocaleString('en-US')}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Request Info Footer */}
                                        <div className={`pt-4 border-t text-sm ${isDark ? 'border-slate-700 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
                                            <span>Created: {new Date(request.createdAt).toLocaleString('en-US')}</span>
                                            {request.updatedAt !== request.createdAt && (
                                                <span className="ml-4">Updated: {new Date(request.updatedAt).toLocaleString('en-US')}</span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}
