"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BiMenu, BiX } from "react-icons/bi";
import { LuArrowRight } from "react-icons/lu";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: FaInstagram, href: "https://instagram.com/belalhossainsunny", label: "Instagram" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/belal-hossain-sunny-6195b0119/", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://facebook.com/belalhossainsunny", label: "Facebook" },
  ];

  return (
    <>
      {/* ===== MOBILE DRAWER ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              style={{
                position: "fixed", top: 0, left: 0, width: "80%", maxWidth: "320px",
                height: "100%", backgroundColor: "#0a0a0a", zIndex: 70,
                boxShadow: "4px 0 40px rgba(0,0,0,0.8)",
                borderRight: "1px solid rgba(255,255,255,0.08)",
                display: "flex", flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "linear-gradient(135deg, #E8343A, #c52b31)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 14px rgba(232,52,58,0.4)", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontWeight: 900, fontSize: "15px", fontFamily: "var(--font-teko), sans-serif" }}>BH</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                    <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "14px", fontFamily: "var(--font-teko), sans-serif" }}>
                      Belal Hossain <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sunny</span>
                    </span>
                    <span style={{ color: "#4b5563", fontSize: "9px", letterSpacing: "0.08em", textTransform: "uppercase" }}>CNC Specialist</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  <BiX size={20} />
                </button>
              </div>

              {/* Drawer Nav Links */}
              <nav style={{ flex: 1, overflowY: "auto", padding: "12px" }}>
                {menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "13px 16px", borderRadius: "10px", marginBottom: "4px",
                      textDecoration: "none", fontSize: "15px", fontWeight: 500, transition: "all 0.2s",
                      color: pathname === item.href ? "#ffffff" : "#9ca3af",
                      backgroundColor: pathname === item.href ? "rgba(232,52,58,0.1)" : "transparent",
                      borderLeft: pathname === item.href ? "2px solid #E8343A" : "2px solid transparent",
                    }}
                  >
                    {item.label}
                    <LuArrowRight size={14} style={{ color: "#E8343A", opacity: pathname === item.href ? 1 : 0.3 }} />
                  </Link>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div style={{ padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      style={{ width: "34px", height: "34px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", textDecoration: "none" }}>
                      <Icon size={13} />
                    </a>
                  ))}
                </div>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "12px", borderRadius: "50px", backgroundColor: "#E8343A", color: "#ffffff", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                  Hire Me <LuArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ===== MAIN NAVBAR ===== */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: isSticky ? "rgba(8,8,8,0.96)" : "#080808",
        backdropFilter: isSticky ? "blur(20px)" : "none",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        transition: "all 0.3s",
        boxShadow: isSticky ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      }}>
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

            {/* ── LOGO ── */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", flexShrink: 0 }}>
              {/* Monogram Badge */}
              <div style={{
                width: "38px", height: "38px", borderRadius: "12px", flexShrink: 0,
                background: "linear-gradient(135deg, #E8343A 0%, #c52b31 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 0 20px rgba(232,52,58,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
                position: "relative", overflow: "hidden",
              }}>
                {/* shine */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to bottom, rgba(255,255,255,0.12), transparent)", borderRadius: "12px 12px 0 0" }} />
                <span style={{ color: "#fff", fontWeight: 900, fontSize: "17px", fontFamily: "var(--font-teko), sans-serif", letterSpacing: "-0.02em", position: "relative", zIndex: 1 }}>BH</span>
              </div>
              {/* Name */}
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
                <span style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px", letterSpacing: "-0.02em", fontFamily: "var(--font-teko), sans-serif" }}>
                  Belal Hossain{" "}
                  <span style={{ background: "linear-gradient(135deg, #E8343A, #ff6b6b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Sunny</span>
                </span>
                <span style={{ color: "#4b5563", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>CNC Specialist</span>
              </div>
            </Link>

            {/* ── CENTER NAV (Desktop only) ── */}
            <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px" }}>
              {menu.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    position: "relative", padding: "8px 14px", borderRadius: "8px",
                    fontSize: "14px", fontWeight: 500, textDecoration: "none", transition: "all 0.2s",
                    color: pathname === item.href ? "#ffffff" : "#9ca3af",
                    backgroundColor: pathname === item.href ? "rgba(255,255,255,0.07)" : "transparent",
                  }}
                  onMouseEnter={(e) => { if (pathname !== item.href) { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.04)"; } }}
                  onMouseLeave={(e) => { if (pathname !== item.href) { e.currentTarget.style.color = "#9ca3af"; e.currentTarget.style.backgroundColor = "transparent"; } }}
                >
                  {item.label}
                  {pathname === item.href && (
                    <span style={{ position: "absolute", bottom: "4px", left: "50%", transform: "translateX(-50%)", width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#E8343A" }} />
                  )}
                </Link>
              ))}
            </div>

            {/* ── RIGHT ── */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>

              {/* Social Icons (Desktop only) */}
              <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px", marginRight: "8px" }}>
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    style={{ width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#6b7280", textDecoration: "none", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.backgroundColor = "transparent"; }}>
                    <Icon size={13} />
                  </a>
                ))}
              </div>

              {/* Hire Me Button (hidden on smallest screens) */}
              <Link href="/contact"
                className="hidden sm:flex"
                style={{ alignItems: "center", gap: "6px", padding: "8px 18px", borderRadius: "50px", background: "linear-gradient(135deg, #E8343A, #c52b31)", color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none", transition: "transform 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
              >
                Hire Me
              </Link>

              {/* Hamburger (Mobile only) */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden"
                style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#E8343A", border: "none", color: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 14px rgba(232,52,58,0.35)" }}
                aria-label="Open menu"
              >
                {isMobileMenuOpen ? <BiX size={18} /> : <BiMenu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
