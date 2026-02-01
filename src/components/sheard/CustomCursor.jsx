"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    // Mouse position with motion values for smooth animation
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the main cursor
    const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Slower spring for the trailing dot
    const trailConfig = { damping: 30, stiffness: 200, mass: 0.8 };
    const trailXSpring = useSpring(cursorX, trailConfig);
    const trailYSpring = useSpring(cursorY, trailConfig);

    useEffect(() => {
        // Check if device has touch (mobile/tablet)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleMouseMove = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        const handleMouseDown = () => {
            setIsClicking(true);
        };

        const handleMouseUp = () => {
            setIsClicking(false);
        };

        // Add hover detection for interactive elements
        const handleElementHover = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"], .cursor-pointer'
            );

            interactiveElements.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    setIsHovering(true);
                    setCursorVariant("hover");
                });
                el.addEventListener("mouseleave", () => {
                    setIsHovering(false);
                    setCursorVariant("default");
                    setCursorText("");
                });
            });

            // Special cursor for links with data-cursor-text
            const textElements = document.querySelectorAll('[data-cursor-text]');
            textElements.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    setCursorText(el.getAttribute('data-cursor-text'));
                    setCursorVariant("text");
                });
                el.addEventListener("mouseleave", () => {
                    setCursorText("");
                    setCursorVariant("default");
                });
            });

            // Magnetic effect elements
            const magneticElements = document.querySelectorAll('[data-cursor-magnetic]');
            magneticElements.forEach((el) => {
                el.addEventListener("mouseenter", () => {
                    setCursorVariant("magnetic");
                });
                el.addEventListener("mouseleave", () => {
                    setCursorVariant("default");
                });
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.body.addEventListener("mouseleave", handleMouseLeave);
        document.body.addEventListener("mouseenter", handleMouseEnter);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Delay to ensure DOM is ready
        const timer = setTimeout(handleElementHover, 100);

        // Re-run hover detection on DOM changes
        const observer = new MutationObserver(() => {
            handleElementHover();
        });
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    // Cursor size variants
    const getMainCursorSize = () => {
        if (cursorVariant === "text") return 80;
        if (cursorVariant === "hover") return 50;
        if (cursorVariant === "magnetic") return 60;
        if (isClicking) return 30;
        return 40;
    };

    const getDotSize = () => {
        if (cursorVariant === "hover" || cursorVariant === "text") return 0;
        if (isClicking) return 4;
        return 6;
    };

    // Don't render on touch devices
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
        return null;
    }

    return (
        <>
            {/* Hide default cursor globally */}
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
                
                @media (hover: none) and (pointer: coarse) {
                    * {
                        cursor: auto !important;
                    }
                }
            `}</style>

            {/* Main cursor ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    width: getMainCursorSize(),
                    height: getMainCursorSize(),
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    width: { type: "spring", stiffness: 300, damping: 20 },
                    height: { type: "spring", stiffness: 300, damping: 20 },
                    opacity: { duration: 0.2 }
                }}
            >
                <motion.div
                    className="absolute rounded-full flex items-center justify-center"
                    style={{
                        width: "100%",
                        height: "100%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    animate={{
                        backgroundColor: cursorVariant === "text" || cursorVariant === "hover"
                            ? "rgba(255, 255, 255, 0.9)"
                            : "transparent",
                        borderWidth: cursorVariant === "text" || cursorVariant === "hover" ? 0 : 2,
                        borderColor: "rgba(255, 255, 255, 0.8)",
                        scale: isClicking ? 0.8 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                    {/* Cursor text */}
                    {cursorText && (
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="text-black text-[10px] font-bold uppercase tracking-wider"
                        >
                            {cursorText}
                        </motion.span>
                    )}
                </motion.div>
            </motion.div>

            {/* Trailing dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: trailXSpring,
                    y: trailYSpring,
                }}
                animate={{
                    width: getDotSize(),
                    height: getDotSize(),
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{
                    width: { type: "spring", stiffness: 400, damping: 25 },
                    height: { type: "spring", stiffness: 400, damping: 25 },
                    opacity: { duration: 0.2 }
                }}
            >
                <div
                    className="absolute bg-white rounded-full"
                    style={{
                        width: "100%",
                        height: "100%",
                        transform: "translate(-50%, -50%)",
                    }}
                />
            </motion.div>

            {/* Glow effect on hover */}
            {(cursorVariant === "hover" || cursorVariant === "text") && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[9997]"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.15,
                        scale: 1,
                        width: 100,
                        height: 100,
                    }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate(-50%, -50%)",
                            background: "radial-gradient(circle, rgba(253, 154, 0, 0.6) 0%, transparent 70%)",
                        }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default CustomCursor;
