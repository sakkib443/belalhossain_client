import React from "react";
import SoftwareDetailsContent from "./SoftwareDetailsContent";

// SEO - Dynamic Metadata Generation
export async function generateMetadata({ params }) {
    const { id } = await params;

    try {
        const response = await fetch(`https://extrain-web-server.vercel.app/api/software/${id}`, {
            cache: "no-store",
        });
        const result = await response.json();
        const software = result.data;

        if (!software) {
            return {
                title: "Software Not Found | Extrain Web",
                description: "The requested software solution could not be found.",
            };
        }

        return {
            title: `${software.title} - Professional Software Solution`,
            description: software.description || `Explore ${software.title} - Professional software solution by Extrain Web.`,
            keywords: `${software.title}, software development, business software, ${software.softwareType}, Extrain Web`,
            openGraph: {
                title: `${software.title} | Extrain Web`,
                description: software.description,
                url: `https://extrainweb.com/software/${id}`,
                siteName: "Extrain Web",
                images: [
                    {
                        url: software.images?.[0] || "/images/logo.png",
                        width: 1200,
                        height: 630,
                        alt: software.title,
                    },
                ],
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: software.title,
                description: software.description,
                images: [software.images?.[0] || "/images/logo.png"],
            },
        };
    } catch (error) {
        return {
            title: "Software Details | Extrain Web",
            description: "Advanced software solutions for your business.",
        };
    }
}

export default async function SoftwareDetailsPage({ params }) {
    const { id } = await params;

    let software = null;

    try {
        const response = await fetch(`https://extrain-web-server.vercel.app/api/software/${id}`, {
            cache: "no-store",
        });
        const result = await response.json();
        software = result.data;
    } catch (err) {
        console.error("Error fetching software:", err);
    }

    return (
        <>
            {software && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": software.title,
                            "description": software.description,
                            "image": software.images?.[0],
                            "applicationCategory": "BusinessApplication",
                            "operatingSystem": software.platform || "Windows, Web",
                            "author": {
                                "@type": "Organization",
                                "name": "Extrain Web"
                            },
                            "offers": {
                                "@type": "Offer",
                                "price": software.offerPrice || software.price,
                                "priceCurrency": "BDT"
                            },
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": software.rating || "5.0",
                                "reviewCount": software.reviewCount || "1"
                            }
                        })
                    }}
                />
            )}

            <SoftwareDetailsContent initialSoftware={software} />
        </>
    );
}
