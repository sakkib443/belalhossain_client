"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuMapPin, LuBriefcase, LuGraduationCap, LuCalendar, LuCheck } from "react-icons/lu";
import { FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const skills = [
    { name: "Autodesk PowerMill", level: 98 },
    { name: "Autodesk PowerShape", level: 92 },
    { name: "5-Axis CNC Programming", level: 90 },
    { name: "Die-Mould Manufacturing", level: 95 },
    { name: "CAM Strategy Planning", level: 93 },
    { name: "Post Processor Configuration", level: 85 },
];

const experience = [
    {
        role: "Senior CNC Programmer",
        company: "Jo Young Engineering",
        location: "Korea 🇰🇷",
        period: "2019 — Present",
        desc: "Leading CNC programming and CAM design for high-precision die-mould components. Responsible for PowerMill programming, toolpath optimization, and quality control of complex 5-axis machining operations.",
        current: true,
    },
    {
        role: "CNC Programmer",
        company: "Precision Manufacturing BD",
        location: "Dhaka, Bangladesh",
        period: "2015 — 2019",
        desc: "CNC programming using PowerMill for die-mould components. Managed toolpath strategies, reduced cycle times by 30%, and trained junior programmers on CAM software.",
        current: false,
    },
    {
        role: "CNC Operator",
        company: "TechMold Industries",
        location: "Dhaka, Bangladesh",
        period: "2013 — 2015",
        desc: "Started career as CNC machine operator. Learned precision machining fundamentals, G-code programming, and machine setup for mould manufacturing.",
        current: false,
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function AboutPage() {
    return (
        <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

            {/* ── HERO ── */}
            <section className="px-4 md:px-8 pt-10 pb-8 md:pt-14 md:pb-10 relative overflow-hidden">
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div className="max-w-[1400px] mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Left */}
                        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "50px", marginBottom: "20px", background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)" }}>
                                <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                                <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>About Me</span>
                            </div>
                            <h1 style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "24px" }}>
                                Belal Hossain<br />
                                <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sunny</span>
                            </h1>
                            <p style={{ color: "#9ca3af", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px", maxWidth: "440px" }}>
                                Experienced <strong style={{ color: "#ffffff" }}>CNC Programmer &amp; CAM Specialist</strong> with 9+ years in Precision Die-Mould Manufacturing. Currently at <strong style={{ color: "#E8343A" }}>Jo Young Engineering, Korea</strong> — delivering world-class machining solutions using Autodesk PowerMill &amp; PowerShape.
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                                {["PowerMill Expert", "5-Axis CNC", "Die-Mould", "CAM Design", "Korea-based"].map((tag) => (
                                    <span key={tag} style={{ padding: "5px 12px", borderRadius: "50px", fontSize: "12px", fontWeight: 500, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af" }}>{tag}</span>
                                ))}
                            </div>

                            {/* Info rows */}
                            <div className="flex flex-col gap-2 mb-6">
                                {[
                                    { Icon: LuMapPin, text: "Dhaka, Bangladesh · Jo Young Engineering, Korea" },
                                    { Icon: LuBriefcase, text: "Senior CNC Programmer · 9+ Years Experience" },
                                    { Icon: LuGraduationCap, text: "Dhaka Polytechnic Institute" },
                                ].map(({ Icon, text }) => (
                                    <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "#6b7280", fontSize: "13px" }}>
                                        <Icon size={13} style={{ color: "#E8343A", flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Mini stats */}
                            <div className="flex gap-5 mb-7">
                                {[{ v: "9+", l: "Years" }, { v: "200+", l: "Projects" }, { v: "500+", l: "Students" }, { v: "2.5K+", l: "Followers" }].map(({ v, l }) => (
                                    <div key={l} style={{ textAlign: "center" }}>
                                        <span style={{ display: "block", color: "#E8343A", fontWeight: 800, fontSize: "20px", lineHeight: 1 }}>{v}</span>
                                        <span style={{ color: "#6b7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{l}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA + Social */}
                            <div className="flex flex-wrap items-center gap-3">
                                <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 26px", borderRadius: "50px", background: "linear-gradient(135deg, #E8343A, #c52b31)", color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "transform 0.2s" }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                                >
                                    Hire Me <LuArrowRight size={14} />
                                </Link>
                                {[
                                    { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/belal-hossain-sunny-6195b0119/" },
                                    { Icon: FaFacebookF, href: "https://facebook.com/belalhossainsunny" },
                                    { Icon: FaWhatsapp, href: "https://wa.me/8801765001752" },
                                ].map(({ Icon, href }, i) => (
                                    <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                                        style={{ width: "38px", height: "38px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.12)", color: "#6b7280", textDecoration: "none", transition: "all 0.2s" }}
                                        onMouseEnter={(e) => { e.currentTarget.style.background = "#E8343A"; e.currentTarget.style.borderColor = "#E8343A"; e.currentTarget.style.color = "#fff"; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#6b7280"; }}
                                    ><Icon size={14} /></a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right: Photo */}
                        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                            <div style={{ position: "relative", borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                                <img src="/heroimage.png" alt="Belal Hossain Sunny" className="w-full object-top block" style={{ height: "clamp(320px, 50vw, 560px)", objectFit: "cover" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.6) 0%, transparent 60%)" }} />
                                <div className="absolute bottom-5 left-5 right-5 flex gap-2">
                                    {[{ v: "9+", l: "Years" }, { v: "200+", l: "Projects" }, { v: "2.5K+", l: "Followers" }].map(({ v, l }) => (
                                        <div key={l} style={{ flex: 1, padding: "12px", borderRadius: "12px", background: "rgba(10,10,10,0.85)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center", backdropFilter: "blur(10px)" }}>
                                            <span style={{ display: "block", color: "#E8343A", fontWeight: 800, fontSize: "20px" }}>{v}</span>
                                            <span style={{ color: "#9ca3af", fontSize: "11px" }}>{l}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── SKILLS ── */}
            <section className="px-4 md:px-8 py-14 md:py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
                        <div>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(28px, 3vw, 42px)", margin: "0 0 16px", letterSpacing: "-0.02em" }}>
                                    Technical <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Skills</span>
                                </h2>
                                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.8, marginBottom: "36px" }}>
                                    Deep expertise in CNC programming tools, manufacturing processes, and precision engineering across 9+ years.
                                </p>
                            </motion.div>
                            <div className="flex flex-col gap-5">
                                {skills.map(({ name, level }, i) => (
                                    <motion.div key={name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                                            <span style={{ color: "#d1d5db", fontSize: "13px", fontWeight: 500 }}>{name}</span>
                                            <span style={{ color: "#E8343A", fontSize: "12px", fontWeight: 700 }}>{level}%</span>
                                        </div>
                                        <div style={{ height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, delay: i * 0.1, ease: "easeOut" }}
                                                style={{ height: "100%", borderRadius: "3px", background: "linear-gradient(90deg, #E8343A, #ff6b6b)" }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Achievements */}
                        <div>
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(28px, 3vw, 42px)", margin: "0 0 16px", letterSpacing: "-0.02em" }}>
                                    Key <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Achievements</span>
                                </h2>
                                <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.8, marginBottom: "32px" }}>Milestones and accomplishments across a decade-long career.</p>
                            </motion.div>
                            <div className="flex flex-col gap-3">
                                {[
                                    "Successfully programmed 200+ complex die-mould components using PowerMill",
                                    "Reduced machining cycle time by 35% through optimized toolpath strategies",
                                    "Trained 500+ students in PowerMill and CNC programming",
                                    "Achieved ±0.003mm tolerance on aerospace turbine blade prototypes",
                                    "Led CNC department at Jo Young Engineering Korea",
                                    "Expert in 5-axis simultaneous machining for complex geometries",
                                    "Zero scrap rate maintained across critical precision projects",
                                    "2,500+ LinkedIn followers in manufacturing community",
                                ].map((item, i) => (
                                    <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                        style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 16px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <div style={{ width: "22px", height: "22px", borderRadius: "6px", background: "rgba(232,52,58,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                                            <LuCheck size={12} style={{ color: "#E8343A" }} />
                                        </div>
                                        <span style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.6 }}>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EXPERIENCE ── */}
            <section className="px-4 md:px-8 py-14 md:py-20" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ textAlign: "center", marginBottom: "56px" }}>
                        <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(28px, 3vw, 42px)", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                            Work <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Experience</span>
                        </h2>
                        <p style={{ color: "#6b7280", fontSize: "15px", maxWidth: "420px", margin: "0 auto" }}>A decade of progressive growth in precision CNC engineering.</p>
                    </motion.div>

                    <div className="relative max-w-[800px] mx-auto">
                        <div style={{ position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.08)" }} />
                        <div className="flex flex-col gap-8">
                            {experience.map(({ role, company, location, period, desc, current }, i) => (
                                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                                    className="flex gap-6">
                                    <div style={{ flexShrink: 0, width: "48px", display: "flex", justifyContent: "center", paddingTop: "4px" }}>
                                        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: current ? "#E8343A" : "rgba(255,255,255,0.15)", border: current ? "3px solid rgba(232,52,58,0.3)" : "2px solid rgba(255,255,255,0.1)", boxShadow: current ? "0 0 12px rgba(232,52,58,0.4)" : "none", flexShrink: 0 }} />
                                    </div>
                                    <div className="flex-1" style={{ padding: "24px 28px", borderRadius: "16px", background: current ? "rgba(232,52,58,0.04)" : "rgba(255,255,255,0.02)", border: `1px solid ${current ? "rgba(232,52,58,0.2)" : "rgba(255,255,255,0.07)"}` }}>
                                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                            <div>
                                                <h3 style={{ color: "#ffffff", fontWeight: 700, fontSize: "17px", margin: "0 0 4px" }}>{role}</h3>
                                                <p style={{ color: current ? "#E8343A" : "#6b7280", fontSize: "13px", fontWeight: 500, margin: 0 }}>{company} · {location}</p>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 12px", borderRadius: "50px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                                                <LuCalendar size={11} style={{ color: "#6b7280" }} />
                                                <span style={{ color: "#6b7280", fontSize: "11px", whiteSpace: "nowrap" }}>{period}</span>
                                            </div>
                                        </div>
                                        <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.75, margin: 0 }}>{desc}</p>
                                        {current && <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", marginTop: "12px", padding: "3px 10px", borderRadius: "50px", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.2)", color: "#E8343A", fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}><span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A" }} />Current</span>}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-4 md:px-8 py-14 md:py-20">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                        style={{ padding: "clamp(32px, 5vw, 56px)", borderRadius: "24px", textAlign: "center", background: "linear-gradient(140deg, rgba(232,52,58,0.12) 0%, rgba(10,5,5,0.98) 55%)", border: "1px solid rgba(232,52,58,0.15)" }}>
                        <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(24px, 3vw, 40px)", margin: "0 0 14px", letterSpacing: "-0.02em" }}>
                            Let's Work <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Together</span>
                        </h2>
                        <p style={{ color: "#9ca3af", fontSize: "15px", maxWidth: "420px", margin: "0 auto 32px", lineHeight: 1.7 }}>Ready to bring precision engineering expertise to your next project.</p>
                        <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "50px", background: "linear-gradient(135deg, #E8343A, #c52b31)", color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none", transition: "transform 0.2s" }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
                        >
                            Get In Touch <LuArrowRight size={15} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
