import HomeContent from "./HomeContent";
import { generateOrganizationSchema } from "@/lib/seo";

// ==================== SEO METADATA ====================
export const metadata = {
  title: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
  description:
    "Belal Hossain Sunny — Experienced CNC Programmer & CAM Specialist with 9+ years in Precision Die-Mould Manufacturing. Expert in Autodesk PowerMill & PowerShape. Currently working at Jo Young Engineering, Korea.",
  keywords:
    "Belal Hossain Sunny, CNC Programmer, PowerMill Expert, CAM Specialist, Die-Mould Manufacturing, 5-Axis CNC, Autodesk PowerMill, PowerShape, Jo Young Engineering Korea, Dhaka Bangladesh",
  openGraph: {
    type: "website",
    url: "https://belalhossainsunny.com",
    siteName: "Belal Hossain Sunny",
    title: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
    description:
      "9+ years of precision CNC programming and die-mould manufacturing expertise. Expert in Autodesk PowerMill & PowerShape. Currently at Jo Young Engineering, Korea.",
    images: [
      {
        url: "https://i.ibb.co.com/wr3m0xgW/Gemini-Generated-Image-1r5yvc1r5yvc1r5y.png",
        width: 1200,
        height: 630,
        alt: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
    description:
      "9+ years of precision CNC programming and die-mould manufacturing expertise. Expert in Autodesk PowerMill & PowerShape. Currently at Jo Young Engineering, Korea.",
    images: ["https://i.ibb.co.com/wr3m0xgW/Gemini-Generated-Image-1r5yvc1r5yvc1r5y.png"],
    creator: "@belalhossainsunny",
  },
};

// ==================== HOME PAGE ====================
export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Home Content Component */}
      <HomeContent />
    </>
  );
}
