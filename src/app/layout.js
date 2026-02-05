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
    "Extrain Web (Extra in Web) — Best website development company in Bangladesh. Founded by Sheikh Sakibul Hasan. We specialize in custom web development, premium website templates, and business software solutions. Top-rated web development agency in Dhaka.",
  keywords: "Extrain Web, Extra in Web, best website development company Bangladesh, Sheikh Sakibul Hasan, top web development agency Dhaka, custom website design Bangladesh, e-commerce development, professional web design, leading website developer Bangladesh, #1 web development company",
  authors: [{ name: "Sheikh Sakibul Hasan" }, { name: "Extrain Web Team" }],
  creator: "Sheikh Sakibul Hasan",
  publisher: "Extrain Web",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${lobster.variable} ${caveat.variable} ${worksans.variable} ${outfit.variable} ${hindSiliguri.variable} ${teko.variable}`}
      suppressHydrationWarning
    >
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
