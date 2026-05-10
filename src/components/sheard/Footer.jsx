"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { LuMail, LuPhone, LuMapPin, LuArrowRight } from "react-icons/lu";

const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "Blog", href: "/blog" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Services",
        links: [
            { label: "CNC Programming", href: "/services#cnc" },
            { label: "CAM Design", href: "/services#cam" },
            { label: "Die-Mould Manufacturing", href: "/services#mould" },
            { label: "Professional Training", href: "/services#training" },
            { label: "PowerMill Consulting", href: "/services#consulting" },
        ],
    },
];

const socialLinks = [
    { icon: FaFacebookF, href: "https://facebook.com/belalhossainsunny", label: "Facebook" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/belal-hossain-sunny-6195b0119/", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://instagram.com/belalhossainsunny", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com/belalhossainsunny", label: "Twitter" },
    { icon: FaYoutube, href: "https://youtube.com/@belalhossainsunny", label: "YouTube" },
    { icon: FaWhatsapp, href: "https://wa.me/8801765001752", label: "WhatsApp" },
];

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#060606", borderTop: "1px solid rgba(255,255,255,0.06)" }}>

            {/* ── CTA Banner ── */}
            <div style={{
                background: "linear-gradient(135deg, rgba(232,52,58,0.12) 0%, rgba(10,5,5,0.95) 60%)",
                borderBottom: "1px solid rgba(232,52,58,0.12)",
            }}>
                <div className="max-w-[1400px] mx-auto px-4 md:px-10 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div>
                        <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(22px, 3vw, 38px)", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                            Ready to Start a{" "}
                            <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Project?
                            </span>
                        </h2>
                        <p style={{ color: "#9ca3af", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>
                            Let's collaborate on your next precision engineering challenge. 9+ years of expertise at your service.
                        </p>
                    </div>
                    <Link href="/contact"
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "8px", flexShrink: 0,
                            padding: "13px 28px", borderRadius: "50px",
                            background: "linear-gradient(135deg, #E8343A, #c52b31)",
                            color: "#ffffff", fontSize: "14px", fontWeight: 600,
                            textDecoration: "none", transition: "transform 0.2s",
                            whiteSpace: "nowrap",
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                    >
                        Hire Me <LuArrowRight size={15} />
                    </Link>
                </div>
            </div>

            {/* ── Main Footer ── */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-10 pt-12 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-10 mb-12">

                    {/* Brand Column */}
                    <div>
                        {/* Logo */}
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                            <div style={{
                                width: "40px", height: "40px", borderRadius: "12px", flexShrink: 0,
                                background: "linear-gradient(135deg, #E8343A 0%, #c52b31 100%)",
                                display: "flex", alignItems: "center", justifyContent: "center",
                                boxShadow: "0 0 20px rgba(232,52,58,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
                                position: "relative", overflow: "hidden",
                            }}>
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)" }} />
                                <span style={{ color: "#fff", fontWeight: 900, fontSize: "17px", fontFamily: "var(--font-teko), sans-serif", position: "relative", zIndex: 1 }}>BH</span>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
                                <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px", letterSpacing: "-0.02em", fontFamily: "var(--font-teko), sans-serif" }}>
                                    Belal Hossain{" "}
                                    <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sunny</span>
                                </span>
                                <span style={{ color: "#4b5563", fontSize: "10px", letterSpacing: "0.09em", textTransform: "uppercase" }}>CNC Specialist · Korea</span>
                            </div>
                        </div>

                        <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.8, marginBottom: "20px", maxWidth: "280px" }}>
                            Experienced CAM Programmer &amp; PowerMill Expert with 9+ years in Precision Die-Mould Manufacturing. Based in Dhaka, Bangladesh.
                        </p>

                        {/* Social Links */}
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    style={{
                                        width: "34px", height: "34px", borderRadius: "9px",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        background: "rgba(255,255,255,0.03)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "#6b7280", textDecoration: "none", transition: "all 0.3s",
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "#E8343A"; e.currentTarget.style.borderColor = "#E8343A"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.transform = "none"; }}
                                >
                                    <Icon size={12} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map(({ title, links }) => (
                        <div key={title}>
                            <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "12px", marginBottom: "18px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{title}</h4>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                                {links.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link href={href}
                                            style={{ color: "#6b7280", fontSize: "13px", textDecoration: "none", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px" }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                                            onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                                        >
                                            <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block", flexShrink: 0 }} />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div>
                        <h4 style={{ color: "#ffffff", fontWeight: 700, fontSize: "12px", marginBottom: "18px", letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                            <a href="mailto:belalhossainsunny@gmail.com"
                                style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#6b7280", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                            >
                                <LuMail size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#E8343A" }} />
                                <span style={{ wordBreak: "break-all" }}>belalhossainsunny@gmail.com</span>
                            </a>
                            <a href="tel:+8801765001752"
                                style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6b7280", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                            >
                                <LuPhone size={14} style={{ flexShrink: 0, color: "#E8343A" }} />
                                +880 1765-001752
                            </a>
                            <a href="https://wa.me/8801765001752" target="_blank" rel="noopener noreferrer"
                                style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6b7280", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#25D366"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                            >
                                <FaWhatsapp size={14} style={{ flexShrink: 0, color: "#25D366" }} />
                                WhatsApp: +880 1765-001752
                            </a>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "#6b7280", fontSize: "13px" }}>
                                <LuMapPin size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#E8343A" }} />
                                <span>Dhaka, Bangladesh<br />
                                    <span style={{ color: "#4b5563", fontSize: "12px" }}>Jo Young Engineering, Korea</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px" }}>
                    <p style={{ color: "#4b5563", fontSize: "12px", margin: 0, textAlign: "center" }}>
                        © 2025 <span style={{ color: "#E8343A" }}>Belal Hossain Sunny</span>. All rights reserved.
                    </p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        {["Privacy Policy", "Terms of Service"].map((item) => (
                            <a key={item} href="#"
                                style={{ color: "#4b5563", fontSize: "12px", textDecoration: "none", transition: "color 0.2s" }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "#4b5563"}
                            >{item}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
