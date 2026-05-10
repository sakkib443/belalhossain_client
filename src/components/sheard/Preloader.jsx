"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState(1);

    useEffect(() => {
        const hasVisited = sessionStorage.getItem("preloaderDone");
        if (hasVisited) {
            setLoading(false);
            return;
        }

        let current = 0;
        const interval = setInterval(() => {
            current += 4;
            if (current >= 100) {
                current = 100;
                clearInterval(interval);
            }
            setProgress(current);
        }, 20);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const t1 = setTimeout(() => setPhase(2), 300);
            const t2 = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem("preloaderDone", "true");
            }, 1400);
            return () => { clearTimeout(t1); clearTimeout(t2); };
        }
    }, [progress]);

    const letterVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: (i) => ({
            opacity: 1, y: 0,
            transition: { delay: i * 0.04, duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        }),
    };

    const name = "BELAL HOSSAIN SUNNY";

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    style={{
                        position: "fixed", inset: 0, zIndex: 9999,
                        backgroundColor: "#080808", overflow: "hidden",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                    }}
                    animate={phase === 2 ? { y: "-100%" } : { y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Grid bg */}
                    <div style={{
                        position: "absolute", inset: 0, pointerEvents: "none",
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }} />

                    {/* Red glow orb */}
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        style={{
                            position: "absolute", width: "500px", height: "500px",
                            borderRadius: "50%", background: "radial-gradient(circle, rgba(232,52,58,0.3) 0%, transparent 70%)",
                            top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                            pointerEvents: "none",
                        }}
                    />

                    {/* Content */}
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: "6px",
                                padding: "4px 14px", borderRadius: "50px", marginBottom: "28px",
                                background: "rgba(232,52,58,0.08)", border: "1px solid rgba(232,52,58,0.2)",
                            }}
                        >
                            <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#E8343A", display: "inline-block" }} />
                            <span style={{ color: "#E8343A", fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                                CNC Programmer & CAM Specialist
                            </span>
                        </motion.div>

                        {/* Animated Name */}
                        <div style={{ overflow: "hidden", marginBottom: "12px" }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0px" }}
                            >
                                {name.split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        custom={i}
                                        variants={letterVariants}
                                        style={{
                                            color: i >= 6 && i <= 12 ? "#E8343A" : "#ffffff",
                                            fontSize: "clamp(28px, 5vw, 64px)",
                                            fontWeight: 900,
                                            letterSpacing: "-0.02em",
                                            lineHeight: 1,
                                            whiteSpace: char === " " ? "pre" : "normal",
                                            marginRight: char === " " ? "14px" : "0",
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            style={{ color: "#4b5563", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "48px" }}
                        >
                            Jo Young Engineering · Korea
                        </motion.p>

                        {/* Progress number */}
                        <div style={{ position: "relative", marginBottom: "24px" }}>
                            <span style={{
                                fontSize: "clamp(64px, 10vw, 120px)",
                                fontWeight: 900, lineHeight: 1,
                                background: "linear-gradient(135deg, #E8343A, #ff6b6b)",
                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                letterSpacing: "-0.04em",
                            }}>
                                {progress.toString().padStart(2, "0")}
                            </span>
                            <span style={{ color: "#E8343A", fontSize: "28px", fontWeight: 700, verticalAlign: "top", marginTop: "16px", display: "inline-block" }}>%</span>
                        </div>

                        {/* Progress bar */}
                        <div style={{ width: "240px", height: "2px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", overflow: "hidden", margin: "0 auto 16px" }}>
                            <motion.div
                                style={{
                                    height: "100%", borderRadius: "2px",
                                    background: "linear-gradient(90deg, #E8343A, #ff6b6b)",
                                    width: `${progress}%`,
                                    transition: "width 0.02s linear",
                                }}
                            />
                        </div>

                        {/* Loading label */}
                        <motion.p
                            animate={{ opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ color: "#374151", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase" }}
                        >
                            Loading
                        </motion.p>
                    </div>

                    {/* Slide-out overlay */}
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={phase === 2 ? { y: 0 } : { y: "100%" }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        style={{ position: "absolute", inset: 0, background: "#E8343A" }}
                    />
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={phase === 2 ? { y: 0 } : { y: "100%" }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
                        style={{ position: "absolute", inset: 0, background: "#080808" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
