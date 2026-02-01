'use client';

import Footer from '@/components/sheard/Footer';
import Navbar from '@/components/sheard/Navbar';
import TopHeader from '@/components/sheard/TopHeader';
import Preloader from '@/components/sheard/Preloader';

import AdminEditToggle from '@/components/shared/AdminEditToggle';
import { AdminEditProvider } from '@/providers/AdminEditProvider';
import React from 'react';
import WhatsAppButton from '@/components/sheard/WhatsAppButton';

const MainLayout = ({ children }) => {
    return (
        <AdminEditProvider>
            <Preloader />
            <div>
                <TopHeader />
                <Navbar />
                {children}
                <Footer />

                <WhatsAppButton />
                <AdminEditToggle />
            </div>
        </AdminEditProvider>
    );
};

export default MainLayout;

