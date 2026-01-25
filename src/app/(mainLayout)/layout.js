'use client';

import Footer from '@/components/sheard/Footer';
import Navbar from '@/components/sheard/Navbar';
import TopHeader from '@/components/sheard/TopHeader';
import ScrollToTopOnNavigate from '@/components/sheard/ScrollToTopOnNavigate';
import Preloader from '@/components/sheard/Preloader';

import AdminEditToggle from '@/components/shared/AdminEditToggle';
import { AdminEditProvider } from '@/providers/AdminEditProvider';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <AdminEditProvider>
            <Preloader />
            <div>
                <ScrollToTopOnNavigate />
                <TopHeader />
                <Navbar />
                {children}
                <Footer />

                <AdminEditToggle />
            </div>
        </AdminEditProvider>
    );
};

export default MainLayout;
