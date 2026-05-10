"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowRight, LuCalendar, LuClock } from "react-icons/lu";

const posts = [
    {
        slug: "powermill-5-axis-machining-guide",
        title: "Complete Guide to 5-Axis Machining in PowerMill",
        excerpt: "A comprehensive walkthrough of 5-axis simultaneous machining strategies in Autodesk PowerMill — from setup to final toolpath verification.",
        category: "CNC Programming",
        date: "May 5, 2025",
        readTime: "8 min read",
        emoji: "⚙️",
    },
    {
        slug: "die-mould-manufacturing-tips",
        title: "Top 10 Tips for Precision Die-Mould Manufacturing",
        excerpt: "Practical tips from 9+ years of hands-on die-mould experience — covering material selection, tolerances, and surface finish optimization.",
        category: "Die-Mould",
        date: "Apr 20, 2025",
        readTime: "6 min read",
        emoji: "🔧",
    },
    {
        slug: "powermill-toolpath-optimization",
        title: "How to Optimize Toolpaths for Faster Cycle Times",
        excerpt: "Learn how to reduce machining cycle time by 30-40% using advanced toolpath strategies, step-down optimization, and HSM settings in PowerMill.",
        category: "CAM Design",
        date: "Apr 10, 2025",
        readTime: "7 min read",
        emoji: "🏭",
    },
    {
        slug: "cnc-programming-career-bangladesh",
        title: "CNC Programming Career Path in Bangladesh",
        excerpt: "A detailed guide on how to start and grow a CNC programming career in Bangladesh — required skills, tools, salary expectations, and opportunities abroad.",
        category: "Career",
        date: "Mar 28, 2025",
        readTime: "10 min read",
        emoji: "🎓",
    },
    {
        slug: "powermill-vs-mastercam",
        title: "PowerMill vs Mastercam: Which is Better for Die-Mould?",
        excerpt: "An honest comparison of Autodesk PowerMill and Mastercam for precision die-mould manufacturing — features, learning curve, and industry adoption.",
        category: "Tools",
        date: "Mar 15, 2025",
        readTime: "9 min read",
        emoji: "📊",
    },
    {
        slug: "surface-finish-cnc-machining",
        title: "Achieving Perfect Surface Finish in CNC Machining",
        excerpt: "Step-by-step techniques to achieve Ra 0.4μm surface finish in CNC milling — tool selection, cutting parameters, and finishing strategies.",
        category: "CNC Programming",
        date: "Feb 28, 2025",
        readTime: "7 min read",
        emoji: "✨",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

export default function BlogPage() {
    return (
        <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>

            {/* ── HERO ── */}
            <section className="px-4 md:px-8 pt-10 pb-8 md:pt-14 md:pb-10 relative overflow-hidden">
                <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1, textAlign: "center" }}>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: "center" }}>
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "50px", marginBottom: "20px", background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)" }}>
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                            <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Blog</span>
                        </div>
                        <h1 style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 48px)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "20px" }}>
                            Insights & <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Articles</span>
                        </h1>
                        <p style={{ color: "#9ca3af", fontSize: "16px", maxWidth: "480px", lineHeight: 1.8, margin: "0 auto" }}>
                            Practical knowledge on CNC programming, PowerMill, die-mould manufacturing, and precision engineering — straight from the workshop.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── POSTS GRID ── */}
            <section style={{ padding: "0 32px 100px" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map(({ slug, title, excerpt, category, date, readTime, emoji }, i) => (
                            <motion.div
                                key={slug}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                style={{ borderRadius: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "border-color 0.3s" }}
                                whileHover={{ borderColor: "rgba(232,52,58,0.25)", y: -4 }}
                            >
                                {/* Card top */}
                                <div style={{ padding: "28px 28px 20px", background: "linear-gradient(135deg, rgba(232,52,58,0.07) 0%, transparent 60%)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                                        <span style={{ fontSize: "32px" }}>{emoji}</span>
                                        <span style={{ padding: "4px 12px", borderRadius: "50px", fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.2)", color: "#E8343A" }}>{category}</span>
                                    </div>
                                    <h2 style={{ color: "#ffffff", fontWeight: 700, fontSize: "17px", lineHeight: 1.4, margin: 0 }}>{title}</h2>
                                </div>

                                {/* Card body */}
                                <div style={{ padding: "20px 28px 24px", flex: 1, display: "flex", flexDirection: "column", gap: "14px" }}>
                                    <p style={{ color: "#9ca3af", fontSize: "13px", lineHeight: 1.75, margin: 0 }}>{excerpt}</p>
                                    <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "auto" }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#6b7280", fontSize: "12px" }}>
                                            <LuCalendar size={11} style={{ color: "#E8343A" }} />
                                            {date}
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "5px", color: "#6b7280", fontSize: "12px" }}>
                                            <LuClock size={11} style={{ color: "#E8343A" }} />
                                            {readTime}
                                        </div>
                                    </div>
                                    <Link href={`/blog/${slug}`}
                                        style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#E8343A", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "gap 0.2s" }}
                                        onMouseEnter={(e) => e.currentTarget.style.gap = "10px"}
                                        onMouseLeave={(e) => e.currentTarget.style.gap = "6px"}
                                    >
                                        Read Article <LuArrowRight size={13} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}







