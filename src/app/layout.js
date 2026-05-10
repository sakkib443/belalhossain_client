import {
  Poppins,
  Outfit,
  Teko,
} from "next/font/google";

import "./globals.css";
import { Toaster } from "react-hot-toast";
import ScrollToTopOnNavigate from "@/components/sheard/ScrollToTopOnNavigate";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata = {
  title: {
    template: "Belal Hossain Sunny | %s",
    default: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
  },
  description:
    "Belal Hossain Sunny — Experienced CNC Programmer & CAM Specialist with 9+ years in Precision Die-Mould Manufacturing. Expert in Autodesk PowerMill & PowerShape.",
  keywords:
    "Belal Hossain Sunny, CNC Programmer, PowerMill Expert, CAM Specialist, Die-Mould Manufacturing, 5-Axis CNC, Jo Young Engineering Korea",
  authors: [{ name: "Belal Hossain Sunny" }],
  creator: "Belal Hossain Sunny",
  metadataBase: new URL("https://belalhossainsunny.com"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://belalhossainsunny.com",
    siteName: "Belal Hossain Sunny",
    title: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
    description:
      "9+ years of precision CNC programming and die-mould manufacturing expertise. PowerMill & PowerShape specialist based in Korea.",
    images: [
      {
        url: "/heroimage.png",
        width: 1200,
        height: 630,
        alt: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belal Hossain Sunny — CNC Programmer & CAM Specialist",
    description:
      "9+ years of precision CNC programming and die-mould manufacturing expertise. PowerMill & PowerShape specialist based in Korea.",
    images: ["/heroimage.png"],
    creator: "@belalhossainsunny",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${outfit.variable} ${teko.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Toaster position="top-center" reverseOrder={false} />
        <ScrollToTopOnNavigate />
        {children}
      </body>
    </html>
  );
}
