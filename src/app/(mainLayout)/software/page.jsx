import React, { Suspense } from "react";
import SoftwarePageContent from "./SoftwarePageContent";

// SEO - Metadata for the software listing page
export const metadata = {
    title: "Premium Software Marketplace | Business Tools & Scripts",
    description: "Explore our software marketplace for premium scripts, plugins, and business applications. High-quality software solutions designed to simplify your workflow and boost productivity.",
    keywords: "software marketplace, buy scripts, premium plugins, business software, PHP scripts, React components, software development Bangladesh",
    alternates: {
        canonical: "https://extrainweb.com/software",
    },
    openGraph: {
        title: "Extrain Web Software - Premium Scripts & Tools",
        description: "Discover the best professional software and tools for your creative projects and business needs.",
        url: "https://extrainweb.com/software",
        images: [
            {
                url: "/images/logo.png",
                width: 1200,
                height: 630,
                alt: "Extrain Web Software Marketplace",
            },
        ],
    },
};

// Server Component
export default async function SoftwarePage() {
    let software = [];

    try {
        const response = await fetch("https://extrain-web-server.vercel.app/api/software", {
            cache: "no-store",
        });
        const result = await response.json();
        software = result.data || [];
    } catch (error) {
        console.error("Failed to fetch software for SSR:", error);
    }

    return (
        <>
            {/* JSON-LD for CollectionPage SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": "Extrain Web Software Marketplace - Premium Tools",
                        "description": "Professional software solutions and business tools.",
                        "url": "https://extrainweb.com/software",
                        "mainEntity": {
                            "@type": "ItemList",
                            "numberOfItems": software.length,
                            "itemListElement": software.slice(0, 10).map((item, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "url": `https://extrainweb.com/software/${item._id}`,
                                "name": item.title,
                                "image": item.images?.[0]
                            }))
                        }
                    })
                }}
            />

            <SoftwarePageContent initialSoftware={software} />
        </>
    );
}
