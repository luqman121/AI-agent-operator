"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="الرجوع إلى أعلى الصفحة"
      className={`fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-100 shadow-lg dark:shadow-[0_0_24px_rgba(56,189,248,0.14)] hover:bg-sky-50 dark:hover:bg-slate-700 hover:text-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 flex items-center justify-center cursor-pointer transition-all duration-400 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
      style={{ transitionDuration: "400ms" }}
    >
      <ArrowUp
        size={20}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}
