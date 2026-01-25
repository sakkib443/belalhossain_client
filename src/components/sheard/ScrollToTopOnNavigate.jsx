"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// This component scrolls to top on every route change
const ScrollToTopOnNavigate = () => {
    const pathname = usePathname();

    useEffect(() => {
        // Scroll to top when pathname changes
        window.scrollTo({
            top: 0,
            behavior: "instant" // Use instant for immediate scroll on page change
        });
    }, [pathname]);

    return null; // This component doesn't render anything
};

export default ScrollToTopOnNavigate;
