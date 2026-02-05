'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    FiArrowLeft, FiSave, FiLoader, FiImage, FiGlobe,
    FiPlus, FiTrash2, FiDollarSign, FiUpload, FiFile, FiVideo
} from 'react-icons/fi';
import Link from 'next/link';
import { API_BASE_URL } from '@/config/api';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const websiteSchema = z.object({
    title: z.string().min(1, "Title is required"),
    platform: z.string().min(1, "Platform is required"),
    category: z.string().min(1, "Category is required"),
    subCategory: z.string().optional(),
    accessType: z.enum(['free', 'paid']),
    price: z.coerce.number().min(0),
    offerPrice: z.coerce.number().min(0).optional(),
    description: z.string().min(1, "Description is required").max(1000),
    longDescription: z.string().optional(),
    images: z.array(z.string()).min(1, "At least one image URL required"),
    previewUrl: z.string().url("Must be a valid URL (include http:// or https://)").optional().or(z.literal('')),
    videoUrl: z.string().url("Must be a valid YouTube URL").optional().or(z.literal('')),
    downloadFile: z.string().min(1, "Download file URL/Path is required"),
    features: z.array(z.string()).optional(),
    technologies: z.array(z.string()).optional(),
    status: z.enum(['pending', 'approved', 'rejected', 'draft']),
    isFeatured: z.boolean(),
    isBookingAllowed: z.boolean().optional(),
    bookingAmount: z.coerce.number().min(0).optional(),
});

const PLATFORM_OPTIONS = [
    'WordPress', 'React', 'Next.js', 'PHP', 'HTML/CSS', 'Vue.js', 'Angular', 'Laravel', 'Other'
];

export default function EditWebsitePage() {
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [categories, setCategories] = useState([]);
    const [websiteData, setWebsiteData] = useState(null);
    const [uploadingImages, setUploadingImages] = useState(false);
    const [uploadingFile, setUploadingFile] = useState(false);
    const imageInputRef = useRef(null);
    const fileInputRef = useRef(null);
    const router = useRouter();
    const { id } = useParams();

    const { register, control, handleSubmit, reset, setValue, watch, setError, formState: { errors } } = useForm({
        resolver: zodResolver(websiteSchema),
        defaultValues: {
            status: 'approved',
            accessType: 'paid',
            isFeatured: false,
            images: [''],
            features: [''],
            technologies: [''],
            platform: 'WordPress',
            isBookingAllowed: false,
            bookingAmount: 0
        }
    });

    const imageFields = useFieldArray({ control, name: 'images' });
    const featureFields = useFieldArray({ control, name: 'features' });
    const techFields = useFieldArray({ control, name: 'technologies' });

    const watchImages = watch('images');
    const watchDownloadFile = watch('downloadFile');

    const fetchData = useCallback(async () => {
        const token = localStorage.getItem('token');
        try {
            setFetching(true);
            const [catRes, assetRes] = await Promise.all([
                fetch(`${API_BASE_URL}/categories?type=website`),
                fetch(`${API_BASE_URL}/websites/${id}`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                })
            ]);
            const catData = await catRes.json();
            const assetData = await assetRes.json();

            setCategories(catData.data || []);

            const asset = assetData.data;
            if (asset) {
                setWebsiteData(asset);
                reset({
                    title: asset.title || '',
                    slug: asset.slug || '',
                    platform: asset.platform || 'WordPress',
                    category: asset.category?._id || asset.category || '',
                    accessType: asset.accessType || 'paid',
                    price: asset.price || 0,
                    offerPrice: asset.offerPrice || 0,
                    description: asset.description || '',
                    longDescription: asset.longDescription || '',
                    subCategory: asset.subCategory || '',
                    images: asset.images?.length ? asset.images : [''],
                    previewUrl: asset.previewUrl || '',
                    videoUrl: asset.videoUrl || '',
                    downloadFile: asset.downloadFile || '',
                    features: asset.features?.length ? asset.features : [''],
                    technologies: asset.technologies?.length ? asset.technologies : [''],
                    status: asset.status || 'approved',
                    isFeatured: asset.isFeatured || false,
                    isBookingAllowed: asset.isBookingAllowed || false,
                    bookingAmount: asset.bookingAmount || 0,
                });
            }
        } catch (err) { console.error(err); }
        finally { setFetching(false); }
    }, [id, reset]);

    useEffect(() => { fetchData(); }, [fetchData]);

    // ==================== Image Upload Handler ====================
    const handleImageUpload = async (e) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const token = localStorage.getItem('token');
        setUploadingImages(true);

        try {
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i]);
            }

            const response = await fetch(`${API_BASE_URL}/upload/multiple`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            const data = await response.json();

            if (data.success && data.data) {
                const uploadedUrls = data.data.map(item => item.url);
                const currentImages = watchImages.filter(img => img && img.trim() !== '');
                const newImages = [...currentImages, ...uploadedUrls];

                imageFields.remove();
                newImages.forEach((url) => {
                    imageFields.append(url);
                });

                toast.success(`✅ ${uploadedUrls.length} image(s) uploaded successfully!`);
            } else {
                toast.error(`❌ Upload failed: ${data.message}`);
            }
        } catch (error) {
            console.error(error);
            toast.error('Network error during upload');
        } finally {
            setUploadingImages(false);
            if (imageInputRef.current) imageInputRef.current.value = '';
        }
    };

    // ==================== File Upload Handler ====================
    const handleFileUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const token = localStorage.getItem('token');
        setUploadingFile(true);

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch(`${API_BASE_URL}/upload/file`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData
            });

            const data = await response.json();

            if (data.success && data.data) {
                setValue('downloadFile', data.data.url);
                toast.success(`✅ File uploaded: ${data.data.originalName}`);
            } else {
                toast.error(`❌ Upload failed: ${data.message}`);
            }
        } catch (error) {
            console.error(error);
            toast.error('❌ Network error during file upload');
        } finally {
            setUploadingFile(false);
            if (fileInputRef.current) fileInputRef.current.value = '';
        }
    };

    const onSubmit = async (values) => {
        setLoading(true);
        const token = localStorage.getItem('token');

        const cleanArray = (arr) => arr?.filter(item => item && item.trim() !== '') || [];
        const payload = {
            ...values,
            features: cleanArray(values.features),
            technologies: cleanArray(values.technologies),
            images: cleanArray(values.images),
        };

        try {
            const response = await fetch(`${API_BASE_URL}/websites/admin/managed/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                toast.success('Website updated successfully! ✅');
                router.push('/dashboard/admin/website');
            } else {
                const err = await response.json();
                toast.error(err.message || 'Update failed');

                if (err.errorMessages && Array.isArray(err.errorMessages)) {
                    err.errorMessages.forEach((error) => {
                        // Backend might prefix with "body."
                        const fieldName = error.path.replace('body.', '');
                        setError(fieldName, {
                            type: 'server',
                            message: error.message
                        });
                    });
                }
            }
        } catch (error) {
            toast.error('Network error');
        }
        finally { setLoading(false); }
    };

    const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none text-sm transition-all bg-white text-slate-700 placeholder:text-slate-400";
    const labelClass = "block text-sm font-medium text-slate-700 mb-2";
    const cardClass = "bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-5";

    if (fetching) return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <FiLoader className="animate-spin text-emerald-500" size={40} />
                <p className="text-sm font-medium text-slate-500">Loading website data...</p>
            </div>
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Hidden file inputs */}
            <input type="file" ref={imageInputRef} onChange={handleImageUpload} multiple accept="image/*" className="hidden" />
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".zip,.rar,.7z" className="hidden" />

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-2xl border border-slate-200/60 p-5 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/dashboard/admin/website" className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all">
                        <FiArrowLeft size={18} />
                    </Link>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <FiGlobe className="text-white text-lg" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-slate-800">Edit Website</h1>
                        <p className="text-sm text-slate-500">{websiteData?.title || 'Loading...'}</p>
                    </div>
                </div>
                <button
                    onClick={handleSubmit(onSubmit)}
                    disabled={loading}
                    className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-emerald-500/25 transition-all disabled:opacity-50"
                >
                    {loading ? <><FiLoader className="animate-spin" /> Updating...</> : <><FiSave size={16} /> Update Website</>}
                </button>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left: General Info */}
                <div className="md:col-span-2 space-y-6">
                    <div className={cardClass}>
                        <h2 className="text-sm font-semibold text-slate-700 border-b pb-3 mb-2">Basic Metadata</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Asset Title</label>
                                <input {...register('title')} placeholder="e.g. Agency Pro - Next.js Business Template" className={inputClass} />
                                {errors.title && <p className="text-rose-500 text-xs mt-1">{errors.title.message}</p>}
                            </div>
                            <div>
                                <label className={labelClass}>URL Slug (SEO-friendly URL)</label>
                                <input {...register('slug')} placeholder="e.g. agency-pro-nextjs-template" className={inputClass} />
                                <p className="text-xs text-slate-400 mt-1">Current: <span className="text-emerald-600 font-medium">{websiteData?.slug || 'Not set'}</span></p>
                                {errors.slug && <p className="text-rose-500 text-xs mt-1">{errors.slug.message}</p>}
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Platform *</label>
                                    <select {...register('platform')} className={inputClass}>
                                        {PLATFORM_OPTIONS.map(p => <option key={p} value={p}>{p}</option>)}
                                    </select>
                                    {errors.platform && <p className="text-rose-500 text-xs mt-1">{errors.platform.message}</p>}
                                </div>
                                <div>
                                    <label className={labelClass}>Category *</label>
                                    <select {...register('category')} className={inputClass}>
                                        <option value="">Select category...</option>
                                        {categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
                                    </select>
                                    {errors.category && <p className="text-rose-500 text-xs mt-1">{errors.category.message}</p>}
                                </div>
                            </div>
                            <div>
                                <label className={labelClass}>Sub Category (Optional)</label>
                                <input {...register('subCategory')} placeholder="e.g. Business, Portfolio, E-commerce" className={inputClass} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Status</label>
                                    <select {...register('status')} className={inputClass}>
                                        <option value="approved">Approved</option>
                                        <option value="pending">Pending</option>
                                        <option value="draft">Draft</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>Access Type</label>
                                    <select {...register('accessType')} className={inputClass}>
                                        <option value="paid">Paid</option>
                                        <option value="free">Free</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cardClass}>
                        <h2 className="text-sm font-semibold text-slate-700 border-b pb-3 mb-4">Dynamic Properties</h2>
                        <div className="space-y-5">
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className={labelClass}>Tech Stack</label>
                                    <button type="button" onClick={() => techFields.append('')} className="text-xs font-medium text-emerald-600 hover:text-emerald-700">+ Add</button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {techFields.fields.map((field, idx) => (
                                        <div key={field.id} className="group relative">
                                            <input {...register(`technologies.${idx}`)} className="px-3 py-2 bg-slate-50 rounded-lg text-sm border border-slate-200 outline-none focus:bg-white focus:border-emerald-300 w-28" placeholder="React" />
                                            <button type="button" onClick={() => techFields.remove(idx)} className="absolute -top-1 -right-1 bg-rose-500 text-white rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-all"><FiTrash2 size={10} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className={labelClass}>Features</label>
                                    <button type="button" onClick={() => featureFields.append('')} className="text-xs font-medium text-emerald-600 hover:text-emerald-700">+ Add</button>
                                </div>
                                <div className="space-y-2">
                                    {featureFields.fields.map((field, idx) => (
                                        <div key={field.id} className="flex gap-2">
                                            <input {...register(`features.${idx}`)} className={inputClass} placeholder="e.g. Responsive design" />
                                            <button type="button" onClick={() => featureFields.remove(idx)} className="text-rose-400 hover:text-rose-500 p-2"><FiTrash2 size={16} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cardClass}>
                        <h2 className="text-sm font-semibold text-slate-700 border-b pb-3 mb-4">Media & Links</h2>
                        <div className="space-y-5">
                            {/* Gallery Images with Upload */}
                            <div>
                                <div className="flex justify-between items-center mb-3">
                                    <label className={labelClass}>Gallery Images</label>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => imageInputRef.current?.click()}
                                            disabled={uploadingImages}
                                            className="flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg disabled:opacity-50"
                                        >
                                            {uploadingImages ? <FiLoader className="animate-spin" size={12} /> : <FiUpload size={12} />}
                                            {uploadingImages ? 'Uploading...' : 'Upload'}
                                        </button>
                                        <button type="button" onClick={() => imageFields.append('')} className="text-xs font-medium text-slate-500 hover:text-slate-700">+ URL</button>
                                    </div>
                                </div>

                                {/* Image Preview Grid */}
                                {watchImages && watchImages.filter(img => img && img.trim() !== '').length > 0 && (
                                    <div className="grid grid-cols-4 gap-2 mb-3">
                                        {watchImages.filter(img => img && img.trim() !== '').map((img, idx) => (
                                            <div key={idx} className="relative group aspect-video bg-slate-100 rounded-lg overflow-hidden">
                                                <img src={img} alt="" className="w-full h-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        const realIdx = watchImages.findIndex(i => i === img);
                                                        if (realIdx !== -1) imageFields.remove(realIdx);
                                                    }}
                                                    className="absolute top-1 right-1 bg-rose-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all"
                                                >
                                                    <FiTrash2 size={10} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="space-y-2">
                                    {imageFields.fields.map((field, idx) => (
                                        <div key={field.id} className="flex gap-2">
                                            <div className="relative flex-1">
                                                <FiImage className="absolute left-3 top-3.5 text-slate-400" size={16} />
                                                <input {...register(`images.${idx}`)} className={`${inputClass} pl-10`} placeholder="https://example.com/image.jpg" />
                                            </div>
                                            <button type="button" onClick={() => imageFields.remove(idx)} className="text-rose-400 hover:text-rose-500 p-2"><FiTrash2 size={16} /></button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className={labelClass}>Preview URL</label>
                                    <input {...register('previewUrl')} className={inputClass} placeholder="https://demo.example.com" />
                                </div>
                                <div>
                                    <label className={labelClass}>YouTube Video URL</label>
                                    <div className="relative">
                                        <FiVideo className="absolute left-3 top-3 text-slate-400" />
                                        <input {...register('videoUrl')} className={`${inputClass} pl-10`} placeholder="https://youtube.com/watch?v=..." />
                                    </div>
                                    <p className="text-xs text-slate-400 mt-1">Video preview for product details page</p>
                                </div>
                                <div>
                                    <label className={labelClass}>Download File *</label>
                                    <div className="flex gap-2">
                                        <div className="relative flex-1">
                                            <FiFile className="absolute left-3 top-3 text-slate-400" />
                                            <input {...register('downloadFile')} className={`${inputClass} pl-10`} placeholder="Upload or paste URL" />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            disabled={uploadingFile}
                                            className="flex items-center gap-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-sm font-medium disabled:opacity-50"
                                        >
                                            {uploadingFile ? <FiLoader className="animate-spin" size={14} /> : <FiUpload size={14} />}
                                        </button>
                                    </div>
                                    {watchDownloadFile && (
                                        <p className="text-xs text-emerald-600 mt-1 truncate">✓ {watchDownloadFile.split('/').pop()}</p>
                                    )}
                                    {errors.downloadFile && <p className="text-rose-500 text-xs mt-1">{errors.downloadFile.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cardClass}>
                        <h2 className="text-sm font-semibold text-slate-700 border-b pb-3 mb-4">Description</h2>
                        <div className="space-y-4">
                            <div>
                                <label className={labelClass}>Short Description *</label>
                                <textarea {...register('description')} rows={4} className={`${inputClass} resize-none`} placeholder="Write a brief description (max 1000 chars)..."></textarea>
                                {errors.description && <p className="text-rose-500 text-xs mt-1">{errors.description.message}</p>}
                            </div>
                            <div>
                                <label className={labelClass}>Long Description (Optional)</label>
                                <textarea {...register('longDescription')} rows={8} className={`${inputClass} resize-none`} placeholder="Write a detailed description with features, usage instructions... (Supports Markdown)"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Pricing */}
                <div className="space-y-6">
                    <div className="bg-slate-800 p-6 rounded-2xl text-white shadow-lg space-y-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-3 opacity-10"><FiDollarSign size={60} /></div>
                        <h2 className="text-sm font-semibold text-slate-300 border-b border-slate-700 pb-3 relative z-10">Pricing</h2>
                        <div className="space-y-4 relative z-10">
                            <div>
                                <label className="text-xs font-medium text-slate-400 block mb-2">Regular Price (৳)</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3 font-semibold text-slate-500">৳</span>
                                    <input type="number" {...register('price')} placeholder="0" className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-10 px-4 text-white text-lg font-bold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-medium text-slate-400 block mb-2">Offer Price (৳)</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3 font-semibold text-slate-500">৳</span>
                                    <input type="number" {...register('offerPrice')} placeholder="0" className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-10 px-4 text-white text-lg font-bold focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" />
                                </div>
                            </div>
                            <label className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl cursor-pointer hover:bg-slate-700 transition-colors">
                                <input type="checkbox" {...register('isFeatured')} className="w-5 h-5 rounded accent-emerald-500" />
                                <span className="text-sm text-slate-300">Mark as Featured</span>
                            </label>

                            <div className="pt-4 border-t border-slate-700 space-y-4">
                                <label className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-xl cursor-pointer hover:bg-slate-700 transition-colors">
                                    <input type="checkbox" {...register('isBookingAllowed')} className="w-5 h-5 rounded accent-rose-500" />
                                    <span className="text-sm text-slate-300">Allow Booking</span>
                                </label>

                                {watch('isBookingAllowed') && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        className="space-y-2"
                                    >
                                        <label className="text-xs font-medium text-slate-400 block mb-2">Booking Amount (৳)</label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-3 font-semibold text-slate-500">৳</span>
                                            <input type="number" {...register('bookingAmount')} placeholder="0" className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-3 pl-10 px-4 text-white text-lg font-bold focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all" />
                                        </div>
                                        <p className="text-[10px] text-slate-500 italic">This amount will be paid during booking.</p>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
