"use client";

import React from "react";
import { Instagram, Twitter, Music2, Heart, MessageCircle, Sparkles } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    {
      title: "المنتج",
      links: [
        { label: "الرد الآلي", href: "#features" },
        { label: "جمع العملاء المحتملين", href: "#features" },
        { label: "إدارة المهام", href: "#features" },
      ],
    },
    {
      title: "المميزات",
      links: [
        { label: "واتساب", href: "#features" },
        { label: "تيليجرام", href: "#features" },
        { label: "Google Sheets", href: "#features" },
      ],
    },
    {
      title: "التواصل",
      links: [
        { label: "استشارة مجانية", href: "#" },
        { label: "كيف يعمل", href: "#how-it-works" },
        { label: "الأسئلة الشائعة", href: "#faq" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Instagram, label: "إنستجرام", href: "#", color: "hover:bg-pink-50 hover:text-pink-600" },
    { icon: Twitter, label: "X (تويتر)", href: "#", color: "hover:bg-sky-50 hover:text-sky-600" },
    { icon: Music2, label: "تيك توك", href: "#", color: "hover:bg-slate-100 hover:text-slate-900" },
  ];

  return (
    <footer id="faq" className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Main Footer Card */}
        <div className="relative bg-white rounded-[2.5rem] shadow-2xl border border-white/60 px-6 py-12 md:px-12 md:py-16 overflow-hidden">

          {/* Subtle decorative bg */}
          <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-transparent via-brand-300 to-transparent" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl text-slate-900 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white text-sm font-bold shadow-md animate-float">
                  H
                </span>
                <span>Hermes AI</span>
                <Sparkles size={16} className="text-violet-400" />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-5">
                نبني لك نظام أتمتة ذكي يخدم عملاءك ويوفر وقتك. موظف AI عملي يُبنى خصيصاً لأعمالك.
              </p>
              {/* WhatsApp mini CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg"
              >
                <MessageCircle size={16} />
                ابدأ الآن
              </a>
            </div>

            {/* Links */}
            {footerLinks.map((column, index) => (
              <div key={index}>
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  {column.title}
                </h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-brand-600 transition-colors duration-200 hover:translate-x-[-2px] inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="relative border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400 flex items-center gap-1.5">
              © 2026 Hermes AI. صُنع بـ
              <Heart size={13} className="text-rose-400 fill-rose-400 animate-bounce-soft" />
              للأعمال الخليجية
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-400 ml-2">تابعنا</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-slate-100 text-slate-600 transition-all duration-200 hover:scale-110 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Giant Watermark */}
        <div className="mt-8 text-center overflow-hidden select-none pointer-events-none">
          <span
            className="inline-block font-heading font-black text-7xl md:text-9xl text-brand-500/10"
            style={{ letterSpacing: "-0.02em" }}
          >
            HERMES AI
          </span>
        </div>
      </div>
    </footer>
  );
}
