"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// This component scrolls to top on every route change
const ScrollToTopOnNavigate = () => {
    const pathname = usePathname();

    useEffect(() => {
        // 1. Store the current path as a redirect target if the user navigates to login
        // This helps the login page know where to return the user
        if (pathname === '/login' || pathname === '/register') {
            // We don't want to store the login/register paths themselves
        } else {
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('redirectPath', pathname + window.location.search);
            }
        }

        // 2. Scroll to top when pathname changes
        // Using multiple approaches to ensure scroll always reaches top
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        const scroll = () => {
            window.scrollTo({ top: 0, behavior: "instant" });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        requestAnimationFrame(scroll);
        const t1 = setTimeout(scroll, 50);
        const t2 = setTimeout(scroll, 150);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [pathname]);

    return null; // This component doesn't render anything
};

export default ScrollToTopOnNavigate;
