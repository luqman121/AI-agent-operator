"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import ScrollReveal from "./ScrollReveal";
import { Star, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "[اسم العميل]",
    role: "صاحب شركة",
    company: "[اسم الشركة]",
    quote: "منذ أن طبقنا Hermes AI، انخفض وقتنا في الردود بأكثر من 70%، وزادت نسبة إتمام الصفقات بشكل ملحوظ",
    rating: 5,
    isPlaceholder: true,
    emoji: "😍",
    country: "🇸🇦",
  },
  {
    name: "[اسم العميل]",
    role: "مدير العمليات",
    company: "[اسم الشركة]",
    quote: "الآن فريقنا يركز على ما يهم فعلاً. الموظف الذكي يتولى الردود والمتابعة ونحن نغلق الصفقات",
    rating: 5,
    isPlaceholder: true,
    emoji: "🚀",
    country: "🇦🇪",
  },
  {
    name: "[اسم العميل]",
    role: "مستشار أعمال",
    company: "[اسم الشركة]",
    quote: "لا أصدق أنني كنت أضيع ساعات كل يوم في الردود. الآن كل شيء يعمل تلقائياً بشكل احترافي",
    rating: 5,
    isPlaceholder: true,
    emoji: "💯",
    country: "🇰🇼",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute right-1/4 top-0 w-72 h-72 bg-violet-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-5">
              <Star size={14} className="fill-amber-400 text-amber-400" />
              <span>آراء عملاء حقيقيين</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              أعمال تثق في Hermes AI <span className="text-2xl">🏆</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              شركات ووكالات وأعمال حرة استفادت من الموظف الذكي في منطقة الخليج
            </p>

            {/* Rating summary */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-slate-700 font-bold">5.0</span>
              <span className="text-slate-400 text-sm">من أكثر من 20 عميل</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>

        {/* Trust strip */}
        <ScrollReveal delay={0.5}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            {[
              { emoji: "🇸🇦", label: "السعودية" },
              { emoji: "🇦🇪", label: "الإمارات" },
              { emoji: "🇰🇼", label: "الكويت" },
              { emoji: "🇴🇲", label: "عُمان" },
              { emoji: "🇶🇦", label: "قطر" },
            ].map((country, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm text-slate-600 font-medium hover:shadow-md transition-shadow">
                <span>{country.emoji}</span>
                <span>{country.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-4">نخدم أصحاب الأعمال في منطقة الخليج العربي</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
