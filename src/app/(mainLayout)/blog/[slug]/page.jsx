"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuArrowLeft, LuCalendar, LuClock } from "react-icons/lu";

const posts = {
    "powermill-5-axis-machining-guide": {
        title: "Complete Guide to 5-Axis Machining in PowerMill",
        category: "CNC Programming", date: "May 5, 2025", readTime: "8 min read", emoji: "⚙️",
        content: [
            { type: "p", text: "5-axis simultaneous machining is one of the most powerful capabilities in Autodesk PowerMill. It allows cutting tools to approach a workpiece from virtually any direction, enabling complex geometries to be machined in a single setup." },
            { type: "h2", text: "Setting Up Your Machine" },
            { type: "p", text: "Before programming, ensure your machine definition is correctly configured in PowerMill. This includes the kinematic model, axis limits, and tool center point (TCP) settings. Incorrect machine setup is the leading cause of collisions." },
            { type: "h2", text: "Choosing the Right Strategy" },
            { type: "p", text: "For die-mould components, 3+2 (positional 5-axis) is often more efficient than full simultaneous. Use simultaneous only when undercuts or complex curved surfaces genuinely require continuous axis motion." },
            { type: "h2", text: "Toolpath Verification" },
            { type: "p", text: "Always simulate with the full machine model before sending to the machine. Use PowerMill's ViewMill for material removal simulation and check for collisions using the machine simulation tool." },
        ],
    },
    "die-mould-manufacturing-tips": {
        title: "Top 10 Tips for Precision Die-Mould Manufacturing",
        category: "Die-Mould", date: "Apr 20, 2025", readTime: "6 min read", emoji: "🔧",
        content: [
            { type: "p", text: "After 9+ years in precision die-mould manufacturing, these tips consistently deliver better results across automotive, electronics, and industrial projects." },
            { type: "h2", text: "1. Material Selection Matters" },
            { type: "p", text: "Choose the correct steel grade for your application. P20 is great for general injection moulds, while H13 excels in high-temperature die casting applications." },
            { type: "h2", text: "2. Plan Your Machining Sequence" },
            { type: "p", text: "Always rough first, semi-finish, then finish. Never skip the semi-finishing stage for critical surfaces. This removes heat-induced stress and ensures consistent stock for the finishing pass." },
            { type: "h2", text: "3. Tolerance Stack-up Awareness" },
            { type: "p", text: "Consider how individual tolerances combine in an assembly. A ±0.01mm tolerance on each of 5 components can result in a ±0.05mm variation at the final assembly." },
        ],
    },
    "powermill-toolpath-optimization": {
        title: "How to Optimize Toolpaths for Faster Cycle Times",
        category: "CAM Design", date: "Apr 10, 2025", readTime: "7 min read", emoji: "🏭",
        content: [
            { type: "p", text: "Reducing cycle time without sacrificing quality is the holy grail of CNC programming. Here are strategies to achieve 30-40% faster cycle times in PowerMill." },
            { type: "h2", text: "Step-Down Optimization" },
            { type: "p", text: "With the right tooling and material, you can often increase step-down by 20-30% during roughing without affecting tool life. Always verify with cutting data charts." },
            { type: "h2", text: "High-Speed Machining (HSM)" },
            { type: "p", text: "HSM strategies in PowerMill — especially Optimized Constant Z and Steep and Shallow — dramatically reduce air-cutting time by maintaining consistent chip load." },
        ],
    },
    "cnc-programming-career-bangladesh": {
        title: "CNC Programming Career Path in Bangladesh",
        category: "Career", date: "Mar 28, 2025", readTime: "10 min read", emoji: "🎓",
        content: [
            { type: "p", text: "CNC programming is one of the most in-demand technical skills in Bangladesh's growing manufacturing sector. Here's everything you need to start and advance your career." },
            { type: "h2", text: "Required Skills" },
            { type: "p", text: "Start with technical drawing and basic machining fundamentals. Then learn a CAM software — PowerMill is the most valued in precision manufacturing." },
            { type: "h2", text: "Career Progression" },
            { type: "p", text: "Typical path: CNC Operator → CNC Programmer → Senior Programmer → CAM Engineer → Department Lead. Each step takes 2-3 years with dedicated practice." },
        ],
    },
    "powermill-vs-mastercam": {
        title: "PowerMill vs Mastercam: Which is Better for Die-Mould?",
        category: "Tools", date: "Mar 15, 2025", readTime: "9 min read", emoji: "📊",
        content: [
            { type: "p", text: "Both PowerMill and Mastercam are industry-leading CAM solutions, but they excel in different areas. Here's an honest comparison based on real-world experience." },
            { type: "h2", text: "PowerMill Strengths" },
            { type: "p", text: "PowerMill dominates in high-speed 5-axis machining of complex mould surfaces. Its toolpath strategies for steep and shallow areas and barrel cutters are unmatched." },
            { type: "h2", text: "Mastercam Strengths" },
            { type: "p", text: "Mastercam has broader general machining capabilities and is widely used in North America. Its Dynamic Motion toolpaths are excellent for roughing." },
        ],
    },
    "surface-finish-cnc-machining": {
        title: "Achieving Perfect Surface Finish in CNC Machining",
        category: "CNC Programming", date: "Feb 28, 2025", readTime: "7 min read", emoji: "✨",
        content: [
            { type: "p", text: "Achieving Ra 0.4μm or better surface finish in CNC milling requires the right combination of tooling, cutting parameters, and toolpath strategies." },
            { type: "h2", text: "Tool Selection" },
            { type: "p", text: "Use solid carbide ball-nose end mills with TiAlN coating for finishing passes. Smaller diameter tools (6-10mm) with 4 flutes produce better surface finish on complex 3D surfaces." },
            { type: "h2", text: "Cutting Parameters" },
            { type: "p", text: "High spindle speed with low feed rate is the key. For steel at Ra 0.4μm target: 12,000-15,000 RPM, 800-1200mm/min feed, 0.01-0.05mm step-over." },
        ],
    },
};

export default function BlogDetailPage({ params }) {
    const post = posts[params.slug];

    if (!post) {
        return (
            <div style={{ backgroundColor: "#080808", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ color: "#ffffff", fontSize: "48px", fontWeight: 900, marginBottom: "16px" }}>404</h1>
                    <p style={{ color: "#6b7280", marginBottom: "24px" }}>Article not found.</p>
                    <Link href="/blog" style={{ color: "#E8343A", textDecoration: "none", fontWeight: 600 }}>← Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: "#080808", minHeight: "100vh" }}>
            <section style={{ padding: "80px 32px 60px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
                    <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#6b7280", fontSize: "13px", textDecoration: "none", marginBottom: "32px", transition: "color 0.2s" }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                    >
                        <LuArrowLeft size={14} /> Back to Blog
                    </Link>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ maxWidth: "760px" }}>
                        <span style={{ padding: "4px 12px", borderRadius: "50px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", background: "rgba(232,52,58,0.1)", border: "1px solid rgba(232,52,58,0.2)", color: "#E8343A", display: "inline-block", marginBottom: "16px" }}>{post.category}</span>
                        <div style={{ fontSize: "48px", marginBottom: "16px" }}>{post.emoji}</div>
                        <h1 style={{ color: "#ffffff", fontWeight: 900, fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "16px" }}>{post.title}</h1>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "13px" }}><LuCalendar size={13} style={{ color: "#E8343A" }} /> {post.date}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6b7280", fontSize: "13px" }}><LuClock size={13} style={{ color: "#E8343A" }} /> {post.readTime}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section style={{ padding: "60px 32px 100px" }}>
                <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 32px" }}>
                    <div style={{ maxWidth: "760px" }}>
                        {post.content.map((block, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.5 }}>
                                {block.type === "h2"
                                    ? <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "22px", marginTop: "36px", marginBottom: "14px" }}>{block.text}</h2>
                                    : <p style={{ color: "#9ca3af", fontSize: "16px", lineHeight: 1.85, marginBottom: "18px" }}>{block.text}</p>
                                }
                            </motion.div>
                        ))}
                        <div style={{ marginTop: "56px", paddingTop: "28px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                            <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "50px", background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)", color: "#E8343A", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "all 0.2s" }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = "#E8343A"; e.currentTarget.style.color = "#fff"; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(232,52,58,0.08)"; e.currentTarget.style.color = "#E8343A"; }}
                            >
                                <LuArrowLeft size={14} /> All Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
