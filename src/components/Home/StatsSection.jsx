"use client";

import { motion } from "framer-motion";
import { LuCpu, LuPenTool, LuLayers, LuGraduationCap, LuArrowRight } from "react-icons/lu";

const services = [
    {
        icon: LuCpu,
        title: "CNC Programming",
        count: "200+",
        unit: "Projects",
        desc: "Autodesk PowerMill & PowerShape expert programming for precision components.",
    },
    {
        icon: LuPenTool,
        title: "CAM Design",
        count: "150+",
        unit: "Projects",
        desc: "Computer-aided manufacturing design for complex mechanical parts.",
    },
    {
        icon: LuLayers,
        title: "Die-Mould Manufacturing",
        count: "180+",
        unit: "Projects",
        desc: "9+ years of precision die-mould manufacturing experience.",
    },
    {
        icon: LuGraduationCap,
        title: "Professional Training",
        count: "500+",
        unit: "Students",
        desc: "PowerMill & CNC programming training for industry professionals.",
    },
];

const stats = [
    { value: "20k+", label: "Project Complete" },
    { value: "10k+", label: "Happy Clients" },
    { value: "200+", label: "Client Reviews" },
    { value: "1,000+", label: "Satisfied Clients" },
];

const StatsSection = () => {
    return (
        <section style={{ backgroundColor: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)" }}
            className="py-14 md:py-20">
            <div className="max-w-[1400px] mx-auto px-4 md:px-10">

                {/* ── Section Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10"
                >
                    <div>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "50px", marginBottom: "14px", background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)" }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                            <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>What I Do</span>
                        </div>
                        <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(26px, 3vw, 42px)", margin: 0, letterSpacing: "-0.02em" }}>
                            My Expertise &{" "}
                            <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Achievements
                            </span>
                        </h2>
                    </div>
                    <a href="/projects" style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "13px", textDecoration: "none", transition: "color 0.2s", flexShrink: 0 }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}>
                        View All Projects <LuArrowRight size={14} />
                    </a>
                </motion.div>

                {/* ── TOP ROW: Service Cards — 2-col mobile, 4-col desktop ── */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
                    {services.map(({ icon: Icon, title, count, unit, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
                            style={{
                                padding: "clamp(18px, 3vw, 28px) clamp(14px, 2.5vw, 24px)",
                                borderRadius: "16px",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                cursor: "pointer", transition: "all 0.3s",
                                display: "flex", flexDirection: "column", gap: "12px",
                            }}
                            whileHover={{ y: -4, borderColor: "rgba(232,52,58,0.3)", background: "rgba(232,52,58,0.03)" }}
                        >
                            {/* Icon + Count */}
                            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                    <Icon size={18} style={{ color: "#E8343A" }} />
                                </div>
                                <div style={{ textAlign: "right" }}>
                                    <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(16px, 3vw, 22px)", display: "block", lineHeight: 1 }}>{count}</span>
                                    <span style={{ color: "#6b7280", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{unit}</span>
                                </div>
                            </div>
                            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
                            <div>
                                <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "clamp(12px, 2vw, 15px)", margin: "0 0 4px" }}>{title}</h3>
                                <p className="hidden sm:block" style={{ color: "#6b7280", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── BOTTOM ROW: Bento — stack on mobile, side-by-side on desktop ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Left: Experience Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.7 }}
                        style={{
                            padding: "clamp(28px, 5vw, 44px) clamp(24px, 4vw, 40px)",
                            borderRadius: "20px",
                            background: "linear-gradient(140deg, rgba(232,52,58,0.15) 0%, rgba(10,5,5,0.98) 55%)",
                            border: "1px solid rgba(232,52,58,0.18)",
                            position: "relative", overflow: "hidden",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "24px" }}>
                            <span style={{ fontSize: "clamp(60px, 10vw, 120px)", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg, #E8343A 0%, #ff6b6b 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.04em", flexShrink: 0 }}>9+</span>
                            <div>
                                <p style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(20px, 2.5vw, 32px)", lineHeight: 1.15, margin: 0 }}>
                                    Years Of<br />Experience
                                </p>
                            </div>
                        </div>
                        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "20px" }} />
                        <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.8, margin: 0 }}>
                            Experienced CNC Programmer using Autodesk PowerMill & PowerShape for programming. Successfully finished many projects in Precision Die-Mould Manufacturing with 5+ years of team expertise.
                        </p>
                        <div style={{ position: "absolute", bottom: "-50px", right: "-50px", width: "200px", height: "200px", borderRadius: "50%", border: "1px solid rgba(232,52,58,0.08)", pointerEvents: "none" }} />
                        <div style={{ position: "absolute", bottom: "-90px", right: "-90px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid rgba(232,52,58,0.05)", pointerEvents: "none" }} />
                    </motion.div>

                    {/* Right: 2×2 Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {stats.map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                                style={{
                                    padding: "clamp(20px, 3.5vw, 32px) clamp(16px, 2.5vw, 24px)",
                                    borderRadius: "16px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    display: "flex", flexDirection: "column", justifyContent: "flex-end",
                                    minHeight: "110px",
                                    transition: "all 0.3s", cursor: "default",
                                }}
                                whileHover={{ borderColor: "rgba(232,52,58,0.25)", background: "rgba(232,52,58,0.03)" }}
                            >
                                <span style={{ display: "block", fontSize: "clamp(26px, 5vw, 46px)", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: "8px" }}>{value}</span>
                                <span style={{ color: "#6b7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 }}>{label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default StatsSection;
