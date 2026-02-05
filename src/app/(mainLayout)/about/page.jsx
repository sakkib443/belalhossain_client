import React from "react";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us | Extrain Web - Digital Architects",
  description: "Extrain Web is a leading digital agency specializing in custom web development, premium templates, and software solutions. Meet our founder Zayed Uddin and discover our mission.",
  keywords: "about extrain web, digital agency Bangladesh, Zayed Uddin, web development team, mission and vision, premium web solutions",
  alternates: {
    canonical: "https://extrainweb.com/about",
  },
  openGraph: {
    title: "About Extrain Web - Building the Digital Future",
    description: "We are the architects of the digital age. Blending cutting-edge technology with artistic vision to craft exceptional digital experiences.",
    url: "https://extrainweb.com/about",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "About Extrain Web",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Extrain Web",
              "alternateName": "Extra in Web",
              "url": "https://extrainweb.com",
              "logo": "https://extrainweb.com/images/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Zayed Uddin"
              },
              "description": "Leading website development company in Bangladesh specializing in custom web development, premium templates, and software solutions."
            }
          })
        }}
      />
      <AboutContent />
    </>
  );
}
