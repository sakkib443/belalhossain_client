"use client";

import React from "react";
import { LuMail, LuPhone, LuMapPin } from "react-icons/lu";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="hidden md:block" style={{ width: "100%", backgroundColor: "#111111", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "36px", overflow: "hidden" }}>

          {/* Left — Contact Info */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="mailto:belalhossainsunny@gmail.com"
              style={{ display: "flex", alignItems: "center", gap: "5px", color: "#9ca3af", fontSize: "12px", textDecoration: "none", transition: "color 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#9ca3af"}
            >
              <LuMail size={12} />
              <span className="hidden lg:inline">belalhossainsunny@gmail.com</span>
              <span className="lg:hidden">Email</span>
            </a>

            <span style={{ color: "#2d2d2d" }}>|</span>

            <a
              href="tel:+8801765001752"
              style={{ display: "flex", alignItems: "center", gap: "5px", color: "#9ca3af", fontSize: "12px", textDecoration: "none", transition: "color 0.2s", whiteSpace: "nowrap" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#ffffff"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#9ca3af"}
            >
              <LuPhone size={12} />
              <span>+880 1765-001752</span>
            </a>
          </div>

          {/* Right — Socials + Location */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {[
              { Icon: FaFacebookF, href: "https://facebook.com/belalhossainsunny", label: "Facebook" },
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/in/belal-hossain-sunny-6195b0119/", label: "LinkedIn" },
              { Icon: FaYoutube, href: "https://youtube.com/@belalhossainsunny", label: "YouTube" },
              { Icon: FaWhatsapp, href: "https://wa.me/8801765001752", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: "#6b7280", transition: "color 0.2s", display: "flex" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#E8343A"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
              >
                <Icon size={12} />
              </a>
            ))}

            <span style={{ color: "#2d2d2d" }}>|</span>

            <div className="hidden lg:flex" style={{ alignItems: "center", gap: "4px", color: "#6b7280", fontSize: "12px" }}>
              <LuMapPin size={12} />
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopHeader;
