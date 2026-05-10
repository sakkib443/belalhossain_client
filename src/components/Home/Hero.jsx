"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { LuArrowRight, LuMapPin, LuBriefcase } from "react-icons/lu";

const Hero = () => {
    const [displayText, setDisplayText] = useState("");
    const roles = ["CNC Programmer", "PowerMill Expert", "CAM Specialist", "Die-Mould Expert"];
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = roles[roleIndex];
        const speed = isDeleting ? 50 : 90;
        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < current.length) {
                setDisplayText(current.slice(0, charIndex + 1));
                setCharIndex((c) => c + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(current.slice(0, charIndex - 1));
                setCharIndex((c) => c - 1);
            } else if (!isDeleting && charIndex === current.length) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setRoleIndex((r) => (r + 1) % roles.length);
            }
        }, speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    const socialLinks = [
        { icon: FaInstagram, href: "https://instagram.com/belalhossainsunny", label: "Instagram" },
        { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/belal-hossain-sunny-6195b0119/", label: "LinkedIn" },
        { icon: FaTwitter, href: "https://twitter.com/belalhossainsunny", label: "Twitter" },
        { icon: FaFacebookF, href: "https://facebook.com/belalhossainsunny", label: "Facebook" },
    ];

    const stats = [
        { value: "9+", label: "Years Exp." },
        { value: "200+", label: "Projects" },
        { value: "2.5K+", label: "Followers" },
        { value: "100%", label: "Precision" },
    ];

    return (
        <section style={{ position: "relative", backgroundColor: "#080808", overflow: "hidden" }}
            className="min-h-[100svh] lg:h-[85vh] lg:min-h-0">

            {/* Background grid */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
            }} />

            {/* ══════════════════════════════════════
                DESKTOP LAYOUT (lg and above)
                3-col: Left | Center Image | Right
            ══════════════════════════════════════ */}
            <div className="hidden lg:flex" style={{
                height: "100%", maxWidth: "1400px", margin: "0 auto",
                padding: "0 40px", alignItems: "center", position: "relative", zIndex: 10,
            }}>
                {/* ═══ LEFT PANEL ═══ */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}
                >
                    {/* Badge */}
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "50px", marginBottom: "20px", width: "fit-content", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.25)" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block", animation: "pulse 2s infinite" }} />
                        <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Available for Work</span>
                    </motion.div>
                    <p style={{ color: "#6b7280", fontSize: "13px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "10px" }}>HELLO, I'M</p>
                    <h1 style={{ color: "#ffffff", fontWeight: 900, lineHeight: 0.88, marginBottom: "24px", letterSpacing: "-0.02em" }}>
                        <span style={{ display: "block", fontSize: "clamp(50px, 4.5vw, 78px)" }}>Belal</span>
                        <span style={{ display: "block", fontSize: "clamp(50px, 4.5vw, 78px)" }}>Hossain</span>
                        <span style={{ display: "block", fontSize: "clamp(50px, 4.5vw, 78px)", background: "linear-gradient(135deg, #E8343A 0%, #ff6b6b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sunny</span>
                    </h1>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                        <div style={{ width: "28px", height: "2px", backgroundColor: "#E8343A", borderRadius: "2px" }} />
                        <span style={{ color: "#d1d5db", fontSize: "14px", fontWeight: 500, minHeight: "22px" }}>
                            {displayText}<span style={{ color: "#E8343A" }}>|</span>
                        </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "28px", color: "#6b7280" }}>
                        <LuMapPin size={13} />
                        <span style={{ fontSize: "12px" }}>Dhaka, Bangladesh</span>
                        <span style={{ margin: "0 4px", color: "#2d2d2d" }}>·</span>
                        <LuBriefcase size={13} />
                        <span style={{ fontSize: "12px" }}>Jo Young Engineering Korea</span>
                    </div>
                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                        <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 24px", borderRadius: "50px", background: "linear-gradient(135deg, #E8343A, #c52b31)", color: "#ffffff", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.3s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
                            View Projects <LuArrowRight size={14} />
                        </Link>
                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 24px", borderRadius: "50px", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", color: "#d1d5db", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.3s" }}
                            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)"; e.currentTarget.style.color = "#fff"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#d1d5db"; }}>
                            Hire Me
                        </Link>
                    </div>
                </motion.div>

                {/* ═══ CENTER: IMAGE ═══ */}
                <div style={{ flex: 1, position: "relative", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                    <motion.img src="/heroimage.png" alt="Belal Hossain Sunny — CNC Programmer"
                        initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        style={{ position: "relative", zIndex: 10, height: "92%", maxHeight: "650px", width: "auto", objectFit: "contain", objectPosition: "bottom", display: "block" }}
                    />
                    {/* Floating skill badge */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}
                        style={{ position: "absolute", left: "4%", top: "20%", padding: "10px 14px", borderRadius: "12px", background: "rgba(15,15,15,0.9)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                        <p style={{ color: "#6b7280", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Expertise</p>
                        <p style={{ color: "#ffffff", fontSize: "13px", fontWeight: 700 }}>Autodesk PowerMill</p>
                        <p style={{ color: "#E8343A", fontSize: "11px", fontWeight: 500 }}>& PowerShape</p>
                    </motion.div>
                    {/* Floating company badge */}
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }}
                        style={{ position: "absolute", right: "4%", top: "25%", padding: "10px 14px", borderRadius: "12px", background: "rgba(15,15,15,0.9)", border: "1px solid rgba(232,52,58,0.2)", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                        <p style={{ color: "#6b7280", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>Currently at</p>
                        <p style={{ color: "#ffffff", fontSize: "12px", fontWeight: 700, lineHeight: 1.3 }}>Jo Young Engineering</p>
                        <p style={{ color: "#E8343A", fontSize: "11px", fontWeight: 500 }}>Korea 🇰🇷</p>
                    </motion.div>
                </div>

                {/* ═══ RIGHT PANEL ═══ */}
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "280px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center", gap: "28px" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                            <div style={{ width: "20px", height: "2px", backgroundColor: "#E8343A", borderRadius: "2px" }} />
                            <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px", margin: 0 }}>About Me</h3>
                        </div>
                        <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.8, margin: 0 }}>
                            Strong experienced <span style={{ color: "#E8343A", fontWeight: 600 }}>CNC Programmer</span> using Autodesk PowerMill & PowerShape. Successfully finished many projects in <span style={{ color: "#E8343A", fontWeight: 600 }}>Precision Die-Mould Manufacturing</span>.
                        </p>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                        {stats.map(({ value, label }) => (
                            <div key={label} style={{ padding: "14px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.3s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(232,52,58,0.3)"; e.currentTarget.style.background = "rgba(232,52,58,0.05)"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}>
                                <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "22px", display: "block" }}>{value}</span>
                                <span style={{ color: "#6b7280", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                            <div style={{ width: "20px", height: "2px", backgroundColor: "#E8343A", borderRadius: "2px" }} />
                            <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px", margin: 0 }}>Find Me On</h3>
                        </div>
                        <div style={{ display: "flex", gap: "10px" }}>
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                    style={{ width: "38px", height: "38px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none", transition: "all 0.3s" }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "#E8343A"; e.currentTarget.style.borderColor = "#E8343A"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; e.currentTarget.style.transform = "none"; }}>
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div style={{ padding: "12px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "12px" }}>
                        <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "rgba(232,52,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span style={{ fontSize: "18px" }}>🎓</span>
                        </div>
                        <div>
                            <p style={{ color: "#ffffff", fontSize: "12px", fontWeight: 600, margin: 0 }}>Dhaka Polytechnic Institute</p>
                            <p style={{ color: "#6b7280", fontSize: "11px", margin: 0 }}>Education Background</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ══════════════════════════════════════
                MOBILE LAYOUT (below lg)
            ══════════════════════════════════════ */}
            <div className="flex lg:hidden flex-col relative z-10">

                {/* Top: Content */}
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="px-5 pt-10 pb-4 flex flex-col items-center text-center">

                    {/* Badge */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", borderRadius: "50px", marginBottom: "16px", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.25)" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block", animation: "pulse 2s infinite" }} />
                        <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Available for Work</span>
                    </div>

                    <p style={{ color: "#6b7280", fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>HELLO, I'M</p>

                    <h1 style={{ color: "#ffffff", fontWeight: 900, lineHeight: 0.9, marginBottom: "16px", letterSpacing: "-0.02em" }}>
                        <span style={{ display: "block", fontSize: "clamp(52px, 16vw, 80px)" }}>Belal</span>
                        <span style={{ display: "block", fontSize: "clamp(38px, 11vw, 60px)", whiteSpace: "nowrap" }}>
                            Hossain{" "}
                            <span style={{ background: "linear-gradient(135deg, #E8343A 0%, #ff6b6b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sunny</span>
                        </span>
                    </h1>

                    {/* Typewriter */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", justifyContent: "center" }}>
                        <div style={{ width: "22px", height: "2px", backgroundColor: "#E8343A", borderRadius: "2px" }} />
                        <span style={{ color: "#d1d5db", fontSize: "14px", fontWeight: 500, minHeight: "22px" }}>
                            {displayText}<span style={{ color: "#E8343A" }}>|</span>
                        </span>
                    </div>

                    {/* Location */}
                    <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "20px", color: "#6b7280", flexWrap: "wrap", justifyContent: "center" }}>
                        <LuMapPin size={12} />
                        <span style={{ fontSize: "12px" }}>Dhaka, Bangladesh</span>
                        <span style={{ color: "#2d2d2d" }}>·</span>
                        <LuBriefcase size={12} />
                        <span style={{ fontSize: "12px" }}>Jo Young Engineering, Korea</span>
                    </div>

                    {/* CTA Buttons */}
                    <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                        <Link href="/projects" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", borderRadius: "50px", background: "linear-gradient(135deg, #E8343A, #c52b31)", color: "#ffffff", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                            View Projects <LuArrowRight size={14} />
                        </Link>
                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "11px 22px", borderRadius: "50px", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#d1d5db", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                            Hire Me
                        </Link>
                    </div>
                </motion.div>

                {/* Center: Hero Image */}
                <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center overflow-hidden"
                    style={{ maxHeight: "55vw", minHeight: "240px" }}>
                    <img src="/heroimage.png" alt="Belal Hossain Sunny"
                        style={{ height: "100%", maxHeight: "340px", width: "auto", objectFit: "contain", objectPosition: "bottom", display: "block", position: "relative", zIndex: 10 }}
                    />
                    {/* Subtle bottom fade */}
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: "linear-gradient(to top, #080808, transparent)", zIndex: 11 }} />
                </motion.div>

                {/* Bottom: Stats + Socials */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="px-5 pb-8">

                    {/* Stats Row */}
                    <div className="grid grid-cols-4 gap-3 mb-5">
                        {stats.map(({ value, label }) => (
                            <div key={label} style={{ padding: "12px 8px", borderRadius: "12px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
                                <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "18px", display: "block", lineHeight: 1 }}>{value}</span>
                                <span style={{ color: "#6b7280", fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                style={{ width: "40px", height: "40px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none" }}>
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* ══ BOTTOM BIG TEXT (both layouts) ══ */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", pointerEvents: "none", overflow: "hidden" }}>
                <div style={{ textAlign: "center", fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(55px, 12vw, 160px)", letterSpacing: "0.02em", lineHeight: 0.82, WebkitTextStroke: "1px rgba(255,255,255,0.06)", color: "transparent" }}>
                    CNC EXPERT
                </div>
                <div style={{ textAlign: "center", fontWeight: 900, textTransform: "uppercase", fontSize: "clamp(55px, 12vw, 160px)", letterSpacing: "0.02em", lineHeight: 0.82, color: "#E8343A", marginTop: "-0.82em", clipPath: "inset(58% 0 0 0)", WebkitTextStroke: "1px rgba(232,52,58,0.3)" }}>
                    CNC EXPERT
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
