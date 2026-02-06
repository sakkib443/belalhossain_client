import {
  Poppins,
  Roboto,
  Lobster,
  Caveat,
  Work_Sans,
  Outfit,
  Hind_Siliguri,
  Teko,
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/sheard/Navbar";
import Footer from "@/components/sheard/Footer";
import TopHeader from "@/components/sheard/TopHeader";
import Script from "next/script";

import ReduxProviderWrapper from "@/components/ReduxProvaiderWrapper";
import { LanguageProvider } from "@/context/LanguageContext";

import { Toaster } from "react-hot-toast";
import ScrollToTopOnNavigate from "@/components/sheard/ScrollToTopOnNavigate";
import CursorWrapper from "@/components/sheard/CursorWrapper";

// Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lobster",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
});
const worksans = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work",
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});
// Hind Siliguri for Bengali text
const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
});
const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
});

export const metadata = {
  title: {
    template: "Extrain Web | %s",
    default: "Extrain Web - Best Website Development Company in Bangladesh",
  },
  description:
    "Extrain Web (Extra in Web) — The best website and software marketplace in Bangladesh. Founded by Sheikh Sakibul Hasan. Get premium website templates, ready-made software scripts, and custom web development services. Your one-stop shop for business digital solutions.",
  keywords: "Extrain Web, Extra in Web, website marketplace Bangladesh, software marketplace, buy website templates, ready-made software scripts, Sheikh Sakibul Hasan, top web development agency Dhaka, custom website design, e-commerce scripts",
  authors: [{ name: "Sheikh Sakibul Hasan" }, { name: "Extrain Web Team" }],
  creator: "Sheikh Sakibul Hasan",
  publisher: "Extrain Web",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://extrainweb.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "bn-BD": "/bn",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    url: "https://extrainweb.com",
    siteName: "Extrain Web",
    title: "Extrain Web - Best Website Development Company in Bangladesh",
    description: "Best website development company in Bangladesh. Founded by Sheikh Sakibul Hasan. Custom web development, templates & software solutions. Top-rated agency in Dhaka.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Extrain Web - Best Website Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Extrain Web - Best Website Development Company Bangladesh",
    description: "Top-rated web development agency. Custom websites, templates & software. Founded by Sheikh Sakibul Hasan.",
    images: ["/images/logo.png"],
  },
  verification: {
    google: "yxl3yWdFkrclIR7zzpyfjc5mCC0AmjTpeaii_z6yUVg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${lobster.variable} ${caveat.variable} ${worksans.variable} ${outfit.variable} ${hindSiliguri.variable} ${teko.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NDYX5VFT6W"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NDYX5VFT6W');
          `}
        </Script>
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ReduxProviderWrapper>
          <LanguageProvider>
            <CursorWrapper />
            <Toaster position="top-center" reverseOrder={false} />
            <ScrollToTopOnNavigate />
            {children}
          </LanguageProvider>
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
