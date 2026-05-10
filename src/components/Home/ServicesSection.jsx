"use client";

import { motion } from "framer-motion";
import { LuCpu, LuSettings, LuWrench, LuGraduationCap, LuArrowRight, LuCheck } from "react-icons/lu";

const services = [
    {
        icon: LuCpu,
        number: "01",
        title: "CNC Programming",
        description: "Expert CNC programming using Autodesk PowerMill for precision machining of complex components in die-mould manufacturing.",
        features: ["PowerMill Programming", "5-Axis Machining", "Toolpath Optimization", "Post Processing"],
    },
    {
        icon: LuSettings,
        number: "02",
        title: "CAM Design & Engineering",
        description: "Computer-Aided Manufacturing design for intricate mechanical parts ensuring highest precision and efficiency.",
        features: ["CAM Strategy Planning", "PowerShape Modeling", "Surface Machining", "Quality Control"],
    },
    {
        icon: LuWrench,
        number: "03",
        title: "Die-Mould Manufacturing",
        description: "9+ years of hands-on precision die-mould manufacturing experience across automotive, aerospace, and industrial sectors.",
        features: ["Precision Die Making", "Mould Design", "High Tolerance Work", "Complex Geometries"],
    },
    {
        icon: LuGraduationCap,
        number: "04",
        title: "Professional Training",
        description: "Comprehensive PowerMill & CNC programming training programs designed to upskill manufacturing professionals.",
        features: ["PowerMill Basics to Advanced", "Hands-on Practice", "Industry Projects", "Certification Support"],
    },
];

const ServicesSection = () => {
    return (
        <section style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)" }}
            className="py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-4 md:px-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "48px" }}
                >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "50px", marginBottom: "16px", background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)" }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                        <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Services</span>
                    </div>
                    <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(28px, 4vw, 48px)", margin: "0 0 16px", letterSpacing: "-0.02em" }}>
                        What I{" "}
                        <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Offer</span>
                    </h2>
                    <p style={{ color: "#6b7280", fontSize: "15px", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
                        Precision engineering services backed by 9+ years of industry experience in CNC programming and die-mould manufacturing.
                    </p>
                </motion.div>

                {/* Services Grid — 2-col desktop, 1-col mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {services.map(({ icon: Icon, number, title, description, features }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                            style={{
                                padding: "clamp(24px, 4vw, 36px)",
                                borderRadius: "20px",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                transition: "all 0.3s", cursor: "default",
                                position: "relative", overflow: "hidden",
                            }}
                            whileHover={{ borderColor: "rgba(232,52,58,0.25)", background: "rgba(232,52,58,0.03)" }}
                        >
                            {/* Ghost Number */}
                            <span style={{ position: "absolute", top: "24px", right: "28px", fontSize: "48px", fontWeight: 900, color: "rgba(255,255,255,0.04)", letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none" }}>{number}</span>

                            {/* Icon */}
                            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                                <Icon size={24} style={{ color: "#E8343A" }} />
                            </div>

                            <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "20px", marginBottom: "12px" }}>{title}</h3>
                            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.75, marginBottom: "24px" }}>{description}</p>

                            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "20px" }} />

                            {/* Features — 2-col on md+, 1-col on mobile */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {features.map((feat) => (
                                    <li key={feat} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                        <LuCheck size={13} style={{ color: "#E8343A", flexShrink: 0 }} />
                                        <span style={{ color: "#6b7280", fontSize: "12px" }}>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}
                    style={{ textAlign: "center", marginTop: "40px" }}>
                    <a href="/contact"
                        style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "50px", background: "linear-gradient(135deg, #E8343A, #c52b31)", color: "#ffffff", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "all 0.3s" }}
                        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; }}>
                        Get in Touch <LuArrowRight size={15} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
