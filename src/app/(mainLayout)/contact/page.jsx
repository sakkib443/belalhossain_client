"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LuMail, LuPhone, LuMapPin, LuSend, LuCheck, LuArrowRight } from "react-icons/lu";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const contactInfo = [
    {
        icon: LuMail,
        label: "Email",
        value: "belalhossainsunny@gmail.com",
        href: "mailto:belalhossainsunny@gmail.com",
        desc: "Best way to reach me for project inquiries",
    },
    {
        icon: LuPhone,
        label: "Phone / WhatsApp",
        value: "+880 1765-001752",
        href: "tel:+8801765001752",
        desc: "Available on WhatsApp for quick messages",
    },
    {
        icon: LuMapPin,
        label: "Location",
        value: "Dhaka, Bangladesh",
        href: null,
        desc: "Currently working at Jo Young Engineering, Korea",
    },
];

const socials = [
    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/belal-hossain-sunny-6195b0119/", label: "LinkedIn" },
    { Icon: FaFacebookF, href: "https://facebook.com/belalhossainsunny", label: "Facebook" },
    { Icon: FaWhatsapp, href: "https://wa.me/8801765001752", label: "WhatsApp" },
    { Icon: FaInstagram, href: "https://instagram.com/belalhossainsunny", label: "Instagram" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1500));
        setLoading(false);
        setSubmitted(true);
    };

    const inputStyle = {
        width: "100%", padding: "14px 16px", borderRadius: "12px", fontSize: "14px",
        background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
        color: "#ffffff", outline: "none", transition: "border-color 0.2s",
        boxSizing: "border-box",
    };

    return (
        <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

            {/* ── HERO ── */}
            <section className="px-4 md:px-8 pt-10 pb-8 md:pt-14 md:pb-10 relative overflow-hidden">
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: "center" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "50px", marginBottom: "20px", background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)" }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                            <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Get In Touch</span>
                        </div>
                        <h1 style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "20px" }}>
                            Let's Work <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Together</span>
                        </h1>
                        <p style={{ color: "#9ca3af", fontSize: "16px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8 }}>
                            Have a CNC programming or die-mould project in mind? I'd love to hear about it. Reach out and let's discuss how I can help.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 md:px-8 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-10 items-start" style={{ maxWidth: "1400px", margin: "0 auto" }}>

                    {/* Left: Info */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
                        style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                        {/* Contact Cards */}
                        {contactInfo.map(({ icon: Icon, label, value, href, desc }, i) => (
                            <motion.div key={label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                style={{ padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "16px", transition: "all 0.3s" }}
                                whileHover={{ borderColor: "rgba(232,52,58,0.25)" }}
                            >
                                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <Icon size={20} style={{ color: "#E8343A" }} />
                                </div>
                                <div>
                                    <p style={{ color: "#6b7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>{label}</p>
                                    {href ? (
                                        <a href={href} style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, textDecoration: "none", display: "block", marginBottom: "4px" }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                                            onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                                        >{value}</a>
                                    ) : (
                                        <p style={{ color: "#ffffff", fontSize: "14px", fontWeight: 600, margin: "0 0 4px" }}>{value}</p>
                                    )}
                                    <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>{desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social */}
                        <div style={{ padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                            <p style={{ color: "#6b7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Follow Me</p>
                            <div style={{ display: "flex", gap: "10px" }}>
                                {socials.map(({ Icon, href, label }) => (
                                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                                        style={{ width: "42px", height: "42px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", textDecoration: "none", transition: "all 0.3s" }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = "#E8343A"; e.currentTarget.style.borderColor = "#E8343A"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.transform = "none"; }}
                                    ><Icon size={15} /></a>
                                ))}
                            </div>
                        </div>

                        {/* Availability */}
                        <div style={{ padding: "20px 24px", borderRadius: "16px", background: "rgba(232,52,58,0.05)", border: "1px solid rgba(232,52,58,0.15)", display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#22c55e", display: "inline-block", flexShrink: 0, boxShadow: "0 0 8px rgba(34,197,94,0.5)" }} />
                            <div>
                                <p style={{ color: "#ffffff", fontSize: "13px", fontWeight: 600, margin: 0 }}>Available for New Projects</p>
                                <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>Response time: within 24 hours</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
                        style={{ padding: "40px", borderRadius: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>

                        {submitted ? (
                            <div style={{ textAlign: "center", padding: "60px 0" }}>
                                <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                                    <LuCheck size={28} style={{ color: "#22c55e" }} />
                                </div>
                                <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "22px", marginBottom: "10px" }}>Message Sent!</h3>
                                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.7, maxWidth: "320px", margin: "0 auto" }}>Thank you for reaching out. I'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <>
                                <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "24px", marginBottom: "8px" }}>Send a Message</h2>
                                <p style={{ color: "#6b7280", fontSize: "14px", marginBottom: "32px" }}>Fill out the form below and I'll respond as soon as possible.</p>

                                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label style={{ display: "block", color: "#9ca3af", fontSize: "12px", fontWeight: 500, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Name *</label>
                                            <input name="name" value={form.name} onChange={handleChange} required placeholder="Md. Rahman" style={inputStyle}
                                                onFocus={(e) => e.currentTarget.style.borderColor = "rgba(232,52,58,0.5)"}
                                                onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                                            />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", color: "#9ca3af", fontSize: "12px", fontWeight: 500, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Email Address *</label>
                                            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputStyle}
                                                onFocus={(e) => e.currentTarget.style.borderColor = "rgba(232,52,58,0.5)"}
                                                onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label style={{ display: "block", color: "#9ca3af", fontSize: "12px", fontWeight: 500, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Subject *</label>
                                        <input name="subject" value={form.subject} onChange={handleChange} required placeholder="CNC Programming Project Inquiry" style={inputStyle}
                                            onFocus={(e) => e.currentTarget.style.borderColor = "rgba(232,52,58,0.5)"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: "block", color: "#9ca3af", fontSize: "12px", fontWeight: 500, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Message *</label>
                                        <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Tell me about your project requirements, timeline, and any specific machining needs..." style={{ ...inputStyle, resize: "vertical", minHeight: "150px", fontFamily: "inherit" }}
                                            onFocus={(e) => e.currentTarget.style.borderColor = "rgba(232,52,58,0.5)"}
                                            onBlur={(e) => e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"}
                                        />
                                    </div>

                                    <button type="submit" disabled={loading}
                                        style={{
                                            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                            padding: "14px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
                                            background: loading ? "rgba(232,52,58,0.5)" : "linear-gradient(135deg, #E8343A, #c52b31)",
                                            color: "#ffffff", border: "none", cursor: loading ? "not-allowed" : "pointer",
                                            transition: "transform 0.2s", width: "100%",
                                        }}
                                        onMouseEnter={(e) => { if (!loading) e.currentTarget.style.transform = "translateY(-2px)"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}
                                    >
                                        {loading ? (
                                            <>Sending...</>
                                        ) : (
                                            <><LuSend size={15} /> Send Message <LuArrowRight size={14} /></>
                                        )}
                                    </button>

                                    {/* WhatsApp Direct */}
                                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                                        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
                                        <span style={{ color: "#4b5563", fontSize: "12px" }}>or chat directly</span>
                                        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
                                    </div>
                                    <a
                                        href="https://wa.me/8801765001752?text=Hello%20Belal%20Hossain%20Sunny!%20I%20want%20to%20discuss%20a%20project%20with%20you."
                                        target="_blank" rel="noopener noreferrer"
                                        style={{
                                            display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
                                            padding: "14px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: 600,
                                            background: "rgba(37,211,102,0.08)", border: "1px solid rgba(37,211,102,0.25)",
                                            color: "#25D366", textDecoration: "none", transition: "all 0.2s", width: "100%",
                                            boxSizing: "border-box",
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = "#25D366"; e.currentTarget.style.color = "#fff"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(37,211,102,0.08)"; e.currentTarget.style.color = "#25D366"; }}
                                    >
                                        <FaWhatsapp size={18} /> Chat on WhatsApp · +880 1765-001752
                                    </a>
                                </form>

                            </>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}






