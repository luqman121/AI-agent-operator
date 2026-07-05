"use client";

import React from "react";
import { MessageSquare, Users, Clock, AlertTriangle, TrendingDown, Frown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    icon: MessageSquare,
    emoji: "😫",
    title: "ردود يدوية تستنزف وقتك",
    description: "عملاؤك يتواصلون عبر واتساب وتيليجرام والبريد الإلكتروني، ويحتاجون ردوداً سريعة على مدار الساعة — لكن طاقتك محدودة",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    stat: "4+ ساعات يومياً تضيع",
    statColor: "text-rose-600 bg-rose-50",
  },
  {
    icon: Users,
    emoji: "💸",
    title: "العملاء المحتملون يضيعون",
    description: "عملاء مهتمون يتواصلون معك ثم يختفون — بسبب التأخر في الرد أو عدم وجود متابعة منظمة ومنتظمة",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    stat: "60% من العملاء لا يُتابَعون",
    statColor: "text-amber-600 bg-amber-50",
  },
  {
    icon: Clock,
    emoji: "🔄",
    title: "مهام متكررة تُرهق فريقك",
    description: "نفس الأعمال كل يوم: ترتيب البيانات، إرسال التذكيرات، متابعة العملاء — فريقك يستحق التفرغ للأهم",
    color: "text-slate-500",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-100",
    stat: "3× تكلفة أعلى بدون أتمتة",
    statColor: "text-slate-600 bg-slate-100",
  },
];

export default function ProblemSection() {
  return (
    <section id="product" className="py-20 px-4 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-600 text-sm font-semibold mb-5">
              <AlertTriangle size={14} />
              <span>المشكلة التي يعاني منها أصحاب الأعمال</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              هل تضيع وقتك في الردود اليدوية؟ <span className="text-2xl">😩</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-base leading-relaxed">
              أصحاب الأعمال في الخليج يواجهون نفس التحديات يومياً — والحل أبسط وأذكى مما تتخيل
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.12}>
              <div className={`bg-white rounded-2xl border ${problem.borderColor} p-7 hover:shadow-xl transition-all duration-300 glow-card shine-card group`}>
                {/* Emoji + icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bgColor}`}>
                    <problem.icon size={24} className={problem.color} />
                  </div>
                  <span className="text-3xl group-hover:animate-wiggle">{problem.emoji}</span>
                </div>

                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {problem.description}
                </p>

                {/* Stat pill */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${problem.statColor} border border-current/10`}>
                  <TrendingDown size={12} />
                  {problem.stat}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Transition arrow */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-14">
            <div className="inline-flex flex-col items-center gap-2 text-slate-400">
              <span className="text-sm font-medium">الحل موجود 👇</span>
              <div className="flex flex-col items-center gap-1">
                <div className="w-0.5 h-6 bg-gradient-to-b from-slate-200 to-brand-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-brand-400 animate-bounce-soft" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
