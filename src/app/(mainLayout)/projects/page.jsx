"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

const projects = [
    {
        id: 1,
        title: "Precision CNC Machining — Die Component",
        category: "CNC Programming",
        client: "Jo Young Engineering, Korea",
        duration: "45 Days",
        tools: ["PowerMill", "5-Axis CNC", "CMM Inspection"],
        description: "High-precision CNC machining of complex die components using Autodesk PowerMill. Multi-axis toolpath strategies applied for optimal surface finish and dimensional accuracy.",
        results: ["±0.005mm precision", "Mirror finish", "On-time delivery"],
        photo: "https://media.licdn.com/dms/image/v2/D5622AQEB28O5drfYmA/feedshare-shrink_800/B56Z2v2hB5HgAc-/0/1776771797362?e=1779926400&v=beta&t=f4O77gv9WacOVPoMTNz1RoYE_SHq0JtHfBvZt5X4iuE",
    },
    {
        id: 2,
        title: "PowerMill CAM Programming — Mould Core",
        category: "CAM Design",
        client: "Jo Young Engineering, Korea",
        duration: "30 Days",
        tools: ["PowerMill", "PowerShape", "3D Inspection"],
        description: "Advanced CAM programming for mould core machining. Complex 3D surface strategies with collision-free toolpaths, high-speed finishing, and post-processor optimization.",
        results: ["Zero collision", "Ra 0.4μm finish", "35% faster cycle"],
        photo: "https://media.licdn.com/dms/image/v2/D4D22AQHtC5q2AkEaeA/feedshare-image-high-res/B4DZx1ois8GUAU-/0/1771500088480?e=1779926400&v=beta&t=cTIQe4A9JLfsR55L2xL0_LUKzFNsBcKjlS3krTEDiUA",
    },
    {
        id: 3,
        title: "Die-Mould Manufacturing — Automotive Part",
        category: "Die-Mould",
        client: "Automotive OEM — Korea",
        duration: "60 Days",
        tools: ["PowerMill", "Wire Cut EDM", "5-Axis CNC"],
        description: "Complete die-mould manufacturing for automotive stamped component. From raw material to finished mould including all precision machining, EDM, and assembly stages.",
        results: ["500K+ strokes", "±0.01mm flatness", "100% QC pass"],
        photo: "https://media.licdn.com/dms/image/v2/D5622AQFM3v27sZ6wEg/feedshare-shrink_1280/B56ZuoBTi1GsAc-/0/1768050473322?e=1779926400&v=beta&t=qhRBbXnDD4blafOtPQV-WUM937j8JeD6jgQdVP3v7fE",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function ProjectsPage() {
    return (
        <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

            {/* ── HERO ── */}
            <section className="px-4 md:px-8 pt-10 pb-8 md:pt-14 md:pb-10 relative overflow-hidden">
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }} />
                <div className="max-w-[1400px] mx-auto relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: "center" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "4px 14px", borderRadius: "50px", marginBottom: "20px",
                            background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)",
                        }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                            <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Portfolio</span>
                        </div>

                        <h1 style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "20px" }}>
                            Featured <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span>
                        </h1>
                        <p style={{ color: "#9ca3af", fontSize: "16px", maxWidth: "480px", lineHeight: 1.8, margin: "0 auto" }}>
                            Real precision engineering projects from die-mould manufacturing and CNC machining — delivered at Jo Young Engineering, Korea.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-3 justify-center mt-8">
                            {[
                                { value: "9+", label: "Years Exp." },
                                { value: "200+", label: "Projects Done" },
                                { value: "100%", label: "Client Sat." },
                            ].map(({ value, label }) => (
                                <div key={label} style={{ padding: "20px 24px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center" }}>
                                    <span style={{ display: "block", color: "#ffffff", fontWeight: 800, fontSize: "28px", letterSpacing: "-0.02em" }}>{value}</span>
                                    <span style={{ color: "#6b7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 md:px-8 pb-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map(({ id, title, category, client, duration, tools, description, results, photo }, i) => (
                            <motion.div
                                key={id}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                style={{
                                    borderRadius: "20px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    overflow: "hidden",
                                    display: "flex", flexDirection: "column",
                                    transition: "border-color 0.3s",
                                }}
                                whileHover={{ borderColor: "rgba(232,52,58,0.3)", y: -4 }}
                            >
                                {/* ── Photo ── */}
                                <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                                    <img
                                        src={photo}
                                        alt={title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.06)"}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                    />
                                    {/* Overlay gradient */}
                                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.1) 60%, transparent 100%)" }} />
                                    {/* Category badge */}
                                    <span style={{
                                        position: "absolute", bottom: "14px", left: "16px",
                                        padding: "4px 12px", borderRadius: "50px",
                                        fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                                        background: "rgba(232,52,58,0.9)", color: "#ffffff",
                                        backdropFilter: "blur(8px)",
                                    }}>{category}</span>
                                </div>

                                {/* ── Content ── */}
                                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
                                    <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "17px", lineHeight: 1.3, margin: 0 }}>{title}</h3>
                                    <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.75, margin: 0 }}>{description}</p>

                                    {/* Meta */}
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                                        <div style={{ padding: "10px 12px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                            <p style={{ color: "#4b5563", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 3px" }}>Client</p>
                                            <p style={{ color: "#d1d5db", fontSize: "12px", fontWeight: 500, margin: 0, lineHeight: 1.3 }}>{client}</p>
                                        </div>
                                        <div style={{ padding: "10px 12px", borderRadius: "8px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                            <p style={{ color: "#4b5563", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 3px" }}>Duration</p>
                                            <p style={{ color: "#d1d5db", fontSize: "12px", fontWeight: 500, margin: 0 }}>{duration}</p>
                                        </div>
                                    </div>

                                    {/* Tools */}
                                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                        {tools.map((tool) => (
                                            <span key={tool} style={{
                                                padding: "4px 10px", borderRadius: "50px", fontSize: "11px", fontWeight: 500,
                                                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#6b7280",
                                            }}>{tool}</span>
                                        ))}
                                    </div>

                                    {/* Results */}
                                    <div style={{ marginTop: "auto", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                                        <p style={{ color: "#4b5563", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>Key Results</p>
                                        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                                            {results.map((r) => (
                                                <span key={r} style={{
                                                    padding: "4px 10px", borderRadius: "50px", fontSize: "11px", fontWeight: 500,
                                                    background: "rgba(232,52,58,0.07)", border: "1px solid rgba(232,52,58,0.15)", color: "#E8343A",
                                                }}>{r}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section style={{ padding: "0 40px 80px" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        style={{
                            padding: "56px", borderRadius: "24px", textAlign: "center",
                            background: "linear-gradient(140deg, rgba(232,52,58,0.12) 0%, rgba(10,5,5,0.98) 55%)",
                            border: "1px solid rgba(232,52,58,0.15)",
                        }}
                    >
                        <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(24px, 3vw, 40px)", margin: "0 0 14px", letterSpacing: "-0.02em" }}>
                            Have a Similar{" "}
                            <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Project?</span>
                        </h2>
                        <p style={{ color: "#9ca3af", fontSize: "15px", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7 }}>
                            Let's discuss your precision engineering requirements and deliver exceptional results together.
                        </p>
                        <Link href="/contact" style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "14px 32px", borderRadius: "50px",
                            background: "linear-gradient(135deg, #E8343A, #c52b31)",
                            color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "transform 0.2s",
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                        >
                            Start a Project <LuArrowRight size={15} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}






