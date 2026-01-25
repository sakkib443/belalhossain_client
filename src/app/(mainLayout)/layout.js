'use client';

import Footer from '@/components/sheard/Footer';
import Navbar from '@/components/sheard/Navbar';
import TopHeader from '@/components/sheard/TopHeader';


import AdminEditToggle from '@/components/shared/AdminEditToggle';
import { AdminEditProvider } from '@/providers/AdminEditProvider';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <AdminEditProvider>
            <div>
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
