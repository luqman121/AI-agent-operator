"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggle, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className="relative w-24 h-12 md:w-32 md:h-14 rounded-full overflow-hidden bg-[#7dd3fc] scale-[0.8]"
        aria-hidden="true"
      >
        {/* Light mode fallback: soft clouds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-2 -left-4 w-20 h-12 bg-white/40 rounded-full" />
          <div className="absolute bottom-0 left-8 w-16 h-10 bg-white/30 rounded-full" />
          <div className="absolute -bottom-1 right-4 w-24 h-14 bg-white/30 rounded-full" />
        </div>
        {/* Sun knob */}
        <div
          className="absolute top-1.5 right-[10px] h-8 w-8 md:h-10 md:w-10 rounded-full shadow-lg bg-[#fcd34d]"
        />
      </div>
    );
  }

  const duration = "1100ms";
  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";
  const delayStars = "150ms";
  const delayIcon = "180ms";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن"}
      className="relative w-24 h-12 md:w-32 md:h-14 rounded-full overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:shadow-[0_0_28px_rgba(56,189,248,0.16)] ring-1 ring-slate-300/50 dark:ring-sky-300/30 scale-[0.8]"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Background track */}
      <div
        className="theme-toggle-bg absolute inset-0"
        style={{
          transition: `background-color ${duration} ${easing}`,
          backgroundColor: isDark ? "#1e293b" : "#7dd3fc",
        }}
      >
        {/* Light mode: soft clouds */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: isDark ? 0 : 1,
            transition: `opacity ${duration} ${easing} ${delayStars}`,
          }}
        >
          <div className="absolute -bottom-2 -left-4 w-20 h-12 bg-white/40 rounded-full" />
          <div className="absolute bottom-0 left-8 w-16 h-10 bg-white/30 rounded-full" />
          <div className="absolute -bottom-1 right-4 w-24 h-14 bg-white/30 rounded-full" />
        </div>

        {/* Dark mode: stars */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: isDark ? 1 : 0,
            transition: `opacity ${duration} ${easing} ${delayStars}`,
          }}
        >
          <span className="absolute top-2 left-4 text-white text-[10px] animate-pulse">★</span>
          <span className="absolute top-4 left-10 text-white/80 text-[8px] animate-pulse" style={{ animationDelay: "0.5s" }}>★</span>
          <span className="absolute top-3 right-8 text-white/60 text-[6px] animate-pulse" style={{ animationDelay: "1s" }}>•</span>
          <span className="absolute bottom-3 left-6 text-white/70 text-[8px] animate-pulse" style={{ animationDelay: "0.3s" }}>★</span>
          <span className="absolute bottom-2 right-6 text-white/50 text-[6px] animate-pulse" style={{ animationDelay: "0.7s" }}>•</span>
          <span className="absolute top-1/2 right-3 text-white/80 text-[7px] animate-pulse" style={{ animationDelay: "1.2s" }}>★</span>
        </div>
      </div>

      {/* Sliding knob / Sun-Moon */}
      <div
        className="theme-toggle-knob absolute top-1.5 h-8 w-8 md:top-1.5 md:h-10 md:w-10 rounded-full shadow-lg flex items-center justify-center"
        style={{
          backgroundColor: isDark ? "#cbd5e1" : "#fcd34d",
          transition: `transform ${duration} ${easing}, left ${duration} ${easing}, right ${duration} ${easing}, background-color ${duration} ${easing}`,
          right: isDark ? "auto" : "10px",
          left: isDark ? "10px" : "auto",
          transform: isDark ? "scale(0.92) rotate(-12deg)" : "scale(1) rotate(0deg)",
        }}
      >
        {/* Sun icon (light mode) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark ? "scale(0.6) rotate(45deg)" : "scale(1) rotate(0deg)",
            transition: `opacity ${duration} ${easing} ${delayIcon}, transform ${duration} ${easing} ${delayIcon}`,
          }}
        >
          <div className="absolute inset-0 rounded-full animate-spin-slow">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="absolute w-0.5 h-1.5 bg-amber-400/60 rounded-full left-1/2 -translate-x-1/2"
                style={{
                  top: "-3px",
                  transformOrigin: "50% 20px",
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Moon icon (dark mode) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: isDark ? 1 : 0,
            transform: isDark ? "scale(1) rotate(0deg)" : "scale(0.6) rotate(-45deg)",
            transition: `opacity ${duration} ${easing} ${delayIcon}, transform ${duration} ${easing} ${delayIcon}`,
          }}
        >
          <div className="absolute inset-0 rounded-full">
            <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-slate-400/40 rounded-full" />
            <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-slate-400/30 rounded-full" />
            <div className="absolute top-1/2 right-1 w-1 h-1 bg-slate-400/25 rounded-full" />
          </div>
        </div>
      </div>
    </button>
  );
}
