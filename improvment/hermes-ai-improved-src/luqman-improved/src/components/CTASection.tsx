"use client";

import React from "react";
import { ArrowLeft, Zap, Rocket, Star, Sparkles, Gift, Clock } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

export default function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative bg-gradient-to-br from-white to-brand-50/50 rounded-[2.5rem] shadow-2xl border border-brand-100/50 px-6 py-16 md:px-12 md:py-20 text-center overflow-hidden">

            {/* Top decorative confetti */}
            <div className="absolute top-6 left-8 text-2xl animate-confetti">🎉</div>
            <div className="absolute top-8 right-10 text-xl animate-confetti" style={{ animationDelay: "0.7s" }}>✨</div>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-2xl animate-bounce-soft">🚀</div>

            {/* Stars decoration */}
            <div className="flex justify-center gap-1 mb-6">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400 animate-bounce-soft" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 text-white text-sm font-bold mb-8 shadow-lg shadow-brand-200">
              <Sparkles size={15} />
              <span>ابدأ مجاناً — بدون أي التزام</span>
              <Gift size={15} />
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cta to-orange-400 text-white shadow-xl animate-pulse-glow">
                <Rocket size={36} />
              </div>
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              جاهز تطلّع بزنسك <br />
              <span className="shimmer-text">للمستوى القادم؟</span>
              <span className="text-3xl mr-2">🎯</span>
            </h2>

            {/* Subtitle */}
            <p className="text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed text-lg">
              استشارة مجانية — نبني لك الموظف الذكي المناسب لأعمالك. نناقش احتياجاتك، نصمم سير العمل، ونبدأ التركيب فوراً
            </p>

            {/* Urgency badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {[
                { icon: Clock, text: "تركيب خلال 48 ساعة", color: "text-amber-600 bg-amber-50 border-amber-200" },
                { icon: Gift, text: "استشارة مجانية 100%", color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
                { icon: Zap, text: "نتائج فورية", color: "text-brand-600 bg-brand-50 border-brand-200" },
              ].map((badge, i) => (
                <div key={i} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${badge.color} shadow-sm`}>
                  <badge.icon size={14} />
                  {badge.text}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WhatsAppButton
                text="تواصل عبر واتساب الآن 💬"
                variant="primary"
                size="lg"
              />
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-brand-600 font-semibold px-6 py-4 rounded-full border-2 border-slate-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 cursor-pointer group"
              >
                شاهد كيف يعمل
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              </a>
            </div>

            {/* Reassurance */}
            <p className="mt-8 text-slate-400 text-sm">
              بدون عقود طويلة · بدون رسوم خفية · بدون متاعب 😊
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
