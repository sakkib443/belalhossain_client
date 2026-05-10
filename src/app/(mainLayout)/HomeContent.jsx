"use client";

import { useEffect } from "react";
import Hero from "@/components/Home/Hero";
import StatsSection from "@/components/Home/StatsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import TestimonialSection from "@/components/Home/TestimonialSection";
import Lenis from "lenis";

export default function HomeContent() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
            {/* Hero */}
            <Hero />

            {/* Stats & Skills */}
            <StatsSection />

            {/* Services */}
            <ServicesSection />

            {/* Testimonials */}
            <TestimonialSection />
        </div>
    );
}
