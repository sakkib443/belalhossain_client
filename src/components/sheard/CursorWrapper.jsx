"use client";

import dynamic from 'next/dynamic';

// Dynamically import CustomCursor to avoid SSR issues
const CustomCursor = dynamic(() => import('@/components/sheard/CustomCursor'), {
    ssr: false,
});

const CursorWrapper = () => {
    return <CustomCursor />;
};

export default CursorWrapper;
