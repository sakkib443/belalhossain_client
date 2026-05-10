"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    LuCpu, LuSettings, LuWrench, LuGraduationCap,
    LuArrowRight, LuCheck, LuZap, LuShield,
    LuTarget, LuTrendingUp, LuPhone, LuMail
} from "react-icons/lu";

const services = [
    {
        id: "cnc",
        icon: LuCpu,
        number: "01",
        title: "CNC Programming",
        subtitle: "Precision Machining Solutions",
        description: "Expert CNC programming using Autodesk PowerMill for high-precision machining of complex components. From simple 2D profiles to complex 5-axis simultaneous machining strategies.",
        features: [
            "PowerMill 2D/3D Programming",
            "5-Axis Simultaneous Machining",
            "Toolpath Optimization",
            "Post Processor Configuration",
            "Cycle Time Reduction",
            "Collision Detection & Avoidance",
            "High Speed Machining (HSM)",
            "DNC Communication Setup",
        ],
        stats: [{ value: "200+", label: "Projects" }, { value: "9+", label: "Years" }, { value: "99%", label: "Accuracy" }],
    },
    {
        id: "cam",
        icon: LuSettings,
        number: "02",
        title: "CAM Design & Engineering",
        subtitle: "Computer-Aided Manufacturing",
        description: "Comprehensive CAM design services using Autodesk PowerShape for intricate mechanical parts. Ensuring highest precision, optimal material removal, and superior surface finish.",
        features: [
            "PowerShape 3D Modeling",
            "Surface & Solid Modeling",
            "Complex Geometry Handling",
            "Manufacturing Strategy Planning",
            "Material & Tool Selection",
            "Fixture & Jig Design",
            "Surface Quality Analysis",
            "CAM Documentation",
        ],
        stats: [{ value: "150+", label: "Designs" }, { value: "0.01mm", label: "Tolerance" }, { value: "100%", label: "Quality" }],
    },
    {
        id: "mould",
        icon: LuWrench,
        number: "03",
        title: "Die-Mould Manufacturing",
        subtitle: "Precision Engineering Excellence",
        description: "9+ years of hands-on precision die-mould manufacturing. Specializing in injection moulds, die casting dies, and progressive stamping dies across automotive, electronics, and industrial sectors.",
        features: [
            "Injection Mould Design",
            "Die Casting Dies",
            "Progressive Stamping Dies",
            "Core & Cavity Machining",
            "EDM & Wire Cut Operations",
            "Mould Fitting & Assembly",
            "Trial & Modification",
            "Production Support",
        ],
        stats: [{ value: "180+", label: "Moulds" }, { value: "±0.005mm", label: "Precision" }, { value: "100%", label: "Delivery" }],
    },
    {
        id: "training",
        icon: LuGraduationCap,
        number: "04",
        title: "Professional Training",
        subtitle: "PowerMill & CNC Upskilling",
        description: "Industry-focused PowerMill and CNC programming training designed for operators, programmers, and engineers. Practical, hands-on curriculum with real industry projects.",
        features: [
            "PowerMill Basic to Advanced",
            "CNC Machine Operation",
            "G-Code Programming",
            "Toolpath Strategy Training",
            "Hands-on Practical Sessions",
            "Industry Project Training",
            "Online & On-site Options",
            "Certification Support",
        ],
        stats: [{ value: "500+", label: "Students" }, { value: "4.9★", label: "Rating" }, { value: "95%", label: "Job Placed" }],
    },
];

const whyChoose = [
    { icon: LuShield, title: "9+ Years Experience", desc: "Over a decade of precision engineering expertise in die-mould manufacturing." },
    { icon: LuTarget, title: "High Precision Work", desc: "Tolerances as tight as ±0.005mm with consistent quality across all projects." },
    { icon: LuZap, title: "Fast Turnaround", desc: "Optimized workflows ensure timely delivery without compromising on quality." },
    { icon: LuTrendingUp, title: "Industry Expertise", desc: "Automotive, aerospace, electronics — experience across diverse industries." },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function ServicesPage() {
    return (
        <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

            {/* ── HERO ── */}
            <section className="px-4 md:px-8 pt-10 pb-8 md:pt-14 md:pb-10 relative overflow-hidden">
                <div style={{
                    position: "absolute", inset: 0, pointerEvents: "none",
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }} />
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: "center" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "8px",
                            padding: "4px 14px", borderRadius: "50px", marginBottom: "20px",
                            background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)",
                        }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                            <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>What I Do</span>
                        </div>
                        <h1 style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "24px" }}>
                            Professional <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                Services
                            </span>
                        </h1>
                        <p style={{ color: "#9ca3af", fontSize: "16px", maxWidth: "520px", lineHeight: 1.8, marginBottom: "36px", margin: "0 auto 36px" }}>
                            Precision engineering solutions backed by 9+ years of industry experience in CNC programming, CAM design, and die-mould manufacturing.
                        </p>
                        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
                            <Link href="/contact" style={{
                                display: "inline-flex", alignItems: "center", gap: "8px",
                                padding: "13px 28px", borderRadius: "50px",
                                background: "linear-gradient(135deg, #E8343A, #c52b31)",
                                color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "transform 0.2s",
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                            >
                                Get a Quote <LuArrowRight size={15} />
                            </Link>
                            <Link href="/projects" style={{
                                display: "inline-flex", alignItems: "center", gap: "8px",
                                padding: "13px 28px", borderRadius: "50px",
                                border: "1px solid rgba(255,255,255,0.15)",
                                color: "#d1d5db", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#d1d5db"; }}
                            >
                                View Projects
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="px-4 md:px-8 pb-20">
                <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
                    {services.map(({ id, icon: Icon, number, title, subtitle, description, features, stats }, i) => (
                        <motion.div
                            key={id}
                            id={id}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
                            style={{
                                padding: "clamp(24px, 4vw, 48px)",
                                borderRadius: "24px",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                transition: "border-color 0.3s",
                                position: "relative", overflow: "hidden",
                            }}
                            whileHover={{ borderColor: "rgba(232,52,58,0.2)" }}
                        >
                            {/* Ghost number */}
                            <span style={{
                                position: "absolute", top: "20px", right: "32px",
                                fontSize: "80px", fontWeight: 900, color: "rgba(255,255,255,0.03)",
                                letterSpacing: "-0.04em", lineHeight: 1, userSelect: "none",
                            }}>{number}</span>

                            {/* Left */}
                            <div>
                                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                                    <div style={{
                                        width: "56px", height: "56px", borderRadius: "16px",
                                        background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.15)",
                                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                                    }}>
                                        <Icon size={26} style={{ color: "#E8343A" }} />
                                    </div>
                                    <div>
                                        <p style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 4px" }}>{subtitle}</p>
                                        <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "24px", margin: 0 }}>{title}</h2>
                                    </div>
                                </div>

                                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.8, marginBottom: "28px" }}>{description}</p>

                                {/* Stats */}
                                <div style={{ display: "flex", gap: "24px" }}>
                                    {stats.map(({ value, label }) => (
                                        <div key={label} style={{ padding: "16px 20px", borderRadius: "12px", background: "rgba(232,52,58,0.06)", border: "1px solid rgba(232,52,58,0.12)", textAlign: "center" }}>
                                            <span style={{ display: "block", color: "#ffffff", fontWeight: 800, fontSize: "22px", letterSpacing: "-0.02em" }}>{value}</span>
                                            <span style={{ color: "#6b7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Features */}
                            <div>
                                <p style={{ color: "#6b7280", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>What's Included</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {features.map((feat) => (
                                        <div key={feat} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", borderRadius: "10px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                            <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: "rgba(232,52,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                                <LuCheck size={11} style={{ color: "#E8343A" }} />
                                            </div>
                                            <span style={{ color: "#d1d5db", fontSize: "13px" }}>{feat}</span>
                                        </div>
                                    ))}
                                </div>
                                <Link href="/contact" style={{
                                    display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "24px",
                                    padding: "11px 22px", borderRadius: "50px",
                                    border: "1px solid rgba(232,52,58,0.3)", background: "rgba(232,52,58,0.06)",
                                    color: "#E8343A", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.3s",
                                }}
                                    onMouseEnter={(e) => { e.currentTarget.style.background = "#E8343A"; e.currentTarget.style.color = "#fff"; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(232,52,58,0.06)"; e.currentTarget.style.color = "#E8343A"; }}
                                >
                                    Request This Service <LuArrowRight size={13} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="px-4 md:px-8 py-14 md:py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: "48px" }}>
                        <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(28px, 3vw, 42px)", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                            Why Choose{" "}
                            <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Me?</span>
                        </h2>
                        <p style={{ color: "#6b7280", fontSize: "15px", maxWidth: "440px", margin: "0 auto", lineHeight: 1.7 }}>Delivering precision, reliability, and expertise in every project.</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {whyChoose.map(({ icon: Icon, title, desc }, i) => (
                            <motion.div key={title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                style={{ padding: "32px 24px", borderRadius: "16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", textAlign: "center", transition: "all 0.3s" }}
                                whileHover={{ borderColor: "rgba(232,52,58,0.25)", background: "rgba(232,52,58,0.03)" }}
                            >
                                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                                    <Icon size={24} style={{ color: "#E8343A" }} />
                                </div>
                                <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "16px", marginBottom: "8px" }}>{title}</h3>
                                <p style={{ color: "#6b7280", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-4 md:px-8 py-14 md:py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
                        style={{
                            padding: "clamp(28px, 5vw, 60px)",
                            borderRadius: "24px",
                            background: "linear-gradient(140deg, rgba(232,52,58,0.14) 0%, rgba(10,5,5,0.98) 55%)",
                            border: "1px solid rgba(232,52,58,0.18)",
                            position: "relative", overflow: "hidden",
                        }}
                    >
                        <div>
                            <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(24px, 3vw, 40px)", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                                Ready to Start <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                                    Your Project?
                                </span>
                            </h2>
                            <p style={{ color: "#9ca3af", fontSize: "15px", margin: 0, lineHeight: 1.7 }}>
                                Let's work together. Contact me for a free consultation and project quote.
                            </p>
                        </div>
                        <div style={{ display: "flex", gap: "14px", flexShrink: 0, flexWrap: "wrap" }}>
                            <a href="tel:+8801765001752" style={{
                                display: "inline-flex", alignItems: "center", gap: "8px",
                                padding: "13px 24px", borderRadius: "50px",
                                border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)",
                                color: "#d1d5db", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s",
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "#d1d5db"; }}
                            >
                                <LuPhone size={14} /> Call Now
                            </a>
                            <Link href="/contact" style={{
                                display: "inline-flex", alignItems: "center", gap: "8px",
                                padding: "13px 28px", borderRadius: "50px",
                                background: "linear-gradient(135deg, #E8343A, #c52b31)",
                                color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "transform 0.2s",
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                                onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                            >
                                <LuMail size={14} /> Send Message <LuArrowRight size={13} />
                            </Link>
                        </div>
                        <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", border: "1px solid rgba(232,52,58,0.08)", pointerEvents: "none" }} />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}






