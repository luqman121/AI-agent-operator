"use client";

import React from "react";
import { Brain, Sparkles, CheckCircle2, Rocket, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const solutionPoints = [
  { text: "يرد على عملائك تلقائياً في واتساب وتيليجرام والبريد الإلكتروني", emoji: "💬" },
  { text: "يجمع العملاء المحتملين وينظمهم في Google Sheets أو CRM", emoji: "📊" },
  { text: "يتكامل مع n8n وينفذ سير عمل مخصصاً لأعمالك تحديداً", emoji: "⚙️" },
  { text: "يذكرك بمتابعة العملاء وإرسال العروض في الوقت المناسب", emoji: "🔔" },
  { text: "يعمل 24 ساعة دون توقف أو إجازات أو أخطاء بشرية", emoji: "🏆" },
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-2xl border border-white/60 px-6 py-14 md:px-12 md:py-16 overflow-hidden">

          {/* Decorative corner sparkles */}
          <div className="absolute top-6 left-6 text-violet-200 animate-spin-slow">
            <Sparkles size={32} />
          </div>
          <div className="absolute bottom-6 right-6 text-brand-200 animate-spin-slow" style={{ animationDirection: "reverse" }}>
            <Star size={28} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Brain visual + title */}
            <ScrollReveal>
              <div className="text-center lg:text-right">

                {/* Animated brain with orbit ring */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center shadow-xl animate-pulse-glow">
                    <Brain size={44} className="text-white" />
                  </div>
                  {/* Orbit dots */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full border-2 border-dashed border-brand-200 animate-spin-slow opacity-60" />
                  </div>
                  <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-emerald-400 border-2 border-white shadow-md animate-orbit" />
                  <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-orange-400 border-2 border-white shadow-md animate-orbit-reverse" />
                </div>

                {/* Section badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-semibold mb-4">
                  <Rocket size={14} />
                  <span>الحل الذكي</span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                  <span className="shimmer-text">Hermes AI</span>
                  <br />
                  موظفك الذكي الجديد 🤖
                </h2>
                <p className="text-slate-500 mb-8 leading-relaxed">
                  يُبنى ويُضبط خصيصاً لأعمالك. يتعلم أسلوبك في التواصل، ويرد بلهجتك، ويعمل بسلاسة مع أدواتك الحالية
                </p>
                <WhatsAppButton
                  text="ابدأ مجاناً الآن 🚀"
                  variant="primary"
                  size="md"
                />
              </div>
            </ScrollReveal>

            {/* Right: Points List */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-3">
                {solutionPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100 hover:border-brand-200 hover:bg-gradient-to-r hover:from-brand-50 hover:to-white transition-all duration-300 group cursor-default shine-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-xl group-hover:animate-bounce-soft flex-shrink-0">{point.emoji}</span>
                    <div className="flex items-start gap-2 flex-1">
                      <CheckCircle2 size={18} className="text-brand-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 text-sm leading-relaxed font-medium">
                        {point.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Happy result pill */}
                <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-center">
                  <p className="text-emerald-700 font-semibold text-sm">
                    🎉 النتيجة: وفّر 80% من وقتك وضاعف مبيعاتك!
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
