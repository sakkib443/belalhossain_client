"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { LuStar } from "react-icons/lu";

const testimonials = [
    {
        name: "Rahman Al-Farsi",
        role: "Production Manager",
        company: "Jo Young Engineering, Korea",
        avatar: "R",
        rating: 5,
        text: "Belal is an exceptional CNC programmer. His expertise in PowerMill is unmatched. He consistently delivers precision work on complex die-mould components ahead of schedule.",
    },
    {
        name: "Md. Karim Hossain",
        role: "Senior Engineer",
        company: "Dhaka Manufacturing Ltd.",
        avatar: "K",
        rating: 5,
        text: "Working with Belal on our precision machining projects was outstanding. His deep knowledge of Autodesk PowerMill and PowerShape helped us achieve tolerances we thought impossible.",
    },
    {
        name: "Ahmed Reza",
        role: "Workshop Owner",
        company: "Reza CNC Workshop",
        avatar: "A",
        rating: 5,
        text: "Took Belal's PowerMill training course — absolutely transformative. His teaching style is practical, hands-on, and perfectly suited for industry professionals.",
    },
    {
        name: "Sanjida Akter",
        role: "CAM Designer",
        company: "TechMold Bangladesh",
        avatar: "S",
        rating: 5,
        text: "Belal helped our team transition from basic CNC work to advanced die-mould manufacturing. His mentorship and technical guidance have been invaluable to our growth.",
    },
    {
        name: "Tariq Mahmud",
        role: "Factory Director",
        company: "Precision Tools BD",
        avatar: "T",
        rating: 5,
        text: "We've collaborated with Belal on several high-precision mould projects. His attention to detail, programming accuracy and professional approach sets him apart from others.",
    },
    {
        name: "Nasrin Sultana",
        role: "CNC Operator",
        company: "MechPro Industries",
        avatar: "N",
        rating: 5,
        text: "The PowerMill training by Belal sir completely changed my career trajectory. I went from a basic operator to a senior CNC programmer in just 6 months.",
    },
];

const TestimonialSection = () => {
    return (
        <section style={{ backgroundColor: "#080808", padding: "100px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: "64px" }}
                >
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: "8px",
                        padding: "4px 14px", borderRadius: "50px", marginBottom: "16px",
                        background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)",
                    }}>
                        <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                        <span style={{ color: "#E8343A", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Testimonials</span>
                    </div>
                    <h2 style={{ color: "#ffffff", fontWeight: 800, fontSize: "clamp(30px, 4vw, 48px)", margin: "0 0 16px", letterSpacing: "-0.02em" }}>
                        What Clients{" "}
                        <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Say
                        </span>
                    </h2>
                    <p style={{ color: "#6b7280", fontSize: "15px", maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                        Real feedback from clients, students, and industry partners who have experienced my work firsthand.
                    </p>
                </motion.div>

                {/* Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                    {testimonials.map(({ name, role, company, avatar, rating, text }, i) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6 }}
                            style={{
                                padding: "32px",
                                borderRadius: "20px",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                display: "flex", flexDirection: "column", gap: "20px",
                                transition: "all 0.3s",
                            }}
                            whileHover={{ borderColor: "rgba(232,52,58,0.2)", background: "rgba(232,52,58,0.02)" }}
                        >
                            {/* Quote Icon */}
                            <FaQuoteLeft size={20} style={{ color: "#E8343A", opacity: 0.6 }} />

                            {/* Stars */}
                            <div style={{ display: "flex", gap: "3px" }}>
                                {[...Array(rating)].map((_, s) => (
                                    <LuStar key={s} size={13} style={{ color: "#E8343A", fill: "#E8343A" }} />
                                ))}
                            </div>

                            {/* Text */}
                            <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: 1.8, margin: 0, flex: 1 }}>{text}</p>

                            {/* Divider */}
                            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

                            {/* Profile */}
                            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                <div style={{
                                    width: "44px", height: "44px", borderRadius: "50%",
                                    background: "linear-gradient(135deg, #E8343A, #c52b31)",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    flexShrink: 0,
                                }}>
                                    <span style={{ color: "#ffffff", fontWeight: 800, fontSize: "16px" }}>{avatar}</span>
                                </div>
                                <div>
                                    <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "14px", margin: 0 }}>{name}</p>
                                    <p style={{ color: "#6b7280", fontSize: "12px", margin: 0 }}>{role} · {company}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
