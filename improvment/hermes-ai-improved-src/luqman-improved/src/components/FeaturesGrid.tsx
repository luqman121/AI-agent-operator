"use client";

import React from "react";
import {
  MessageCircle,
  Filter,
  Link,
  ListChecks,
  Send,
  Sparkles,
} from "lucide-react";
import FeatureCard from "./FeatureCard";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: MessageCircle,
    emoji: "💬",
    title: "الرد الآلي على العملاء",
    description: "يرد على رسائل واتساب وتيليجرام والبريد الإلكتروني بذكاء. يتعلم أسلوبك ويقدم إجابات دقيقة ومناسبة لكل عميل",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
  {
    icon: Filter,
    emoji: "📊",
    title: "جمع وترتيب العملاء المحتملين",
    description: "يجمع بيانات العملاء المهتمين من جميع القنوات، ينظمها في Google Sheets أو CRM، ويرتبها حسب الأولوية",
    color: "text-brand-500",
    bgColor: "bg-brand-50",
    borderColor: "border-brand-100",
  },
  {
    icon: Link,
    emoji: "🔗",
    title: "تكامل مع الأدوات الموجودة",
    description: "يتصل بـ CRM وGoogle Sheets وn8n وغيرها. يصبح جزءاً من سير عملك الحالي دون الحاجة إلى تغييرات جوهرية",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
  {
    icon: ListChecks,
    emoji: "✅",
    title: "إدارة المهام والتذكيرات",
    description: "يذكرك بمتابعة العملاء وإرسال العروض وإنجاز المهام اليومية. مساعد شخصي ذكي ينظم يومك بفعالية",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
  },
  {
    icon: Send,
    emoji: "🎯",
    title: "متابعة العملاء تلقائياً",
    description: "يرسل رسائل متابعة للعملاء الذين لم يردوا، يذكرهم بالمواعيد، ويساعد في إتمام الصفقات بشكل أسرع",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-4 relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-violet-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-sm font-semibold mb-5">
              <Sparkles size={14} />
              <span>ما الذي يفعله Hermes AI؟</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              مبني لاحتياجك، مُخصَّص لأعمالك <span className="text-2xl">⚡</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              كل عمل تجاري مختلف، وموظف AI يتكيف مع طريقة عملك تحديداً. إليك أبرز ما يقدر على فعله
            </p>
          </div>
        </ScrollReveal>

        {/* 3-2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
          {features.slice(3, 5).map((feature, index) => (
            <ScrollReveal key={index + 3} delay={(index + 3) * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>

        {/* CTA hint */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-12">
            <p className="text-slate-400 text-sm">
              وأكثر بكثير... تحدث معنا لمعرفة ما يمكن تخصيصه لأعمالك 🛠️
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
