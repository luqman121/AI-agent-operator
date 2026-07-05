"use client";

import { Building2, Car, HeartPulse, Scissors, ShoppingBag, Utensils } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const industries = [
  { icon: Building2, title: "العقارات", text: "التقط وأهّل عملاء العقارات المحتملين ٢٤ ساعة قبل ما ينتبه منافسيك.", points: ["يؤهّل المشترين حسب الميزانية والموقع", "يحجز جولات العرض تلقائيًا", "يتابع العملاء الفاترين"] },
  { icon: HeartPulse, title: "العيادات الطبية", text: "قلّل المواعيد الضائعة وخفّف الضغط عن فريق الاستقبال.", points: ["يحجز ويؤكد المواعيد", "يرسل تذكيرات المواعيد", "يدير جدولة المتابعة"] },
  { icon: Scissors, title: "الصالونات ومراكز التجميل", text: "امتلئ تقويمك تلقائيًا حتى وأنت في منتصف جلسة.", points: ["يحجز الخدمات والمختصين", "يجاوب على أسئلة التسعير", "يتعامل مع إعادة الحجز"] },
  { icon: Car, title: "معارض السيارات", text: "حوّل أكثر الاستفسارات إلى تجارب قيادة.", points: ["يؤهّل المشترين حسب الموديل والميزانية", "يحجز تجارب القيادة", "يتابع المشترين المهتمين"] },
  { icon: Utensils, title: "المطاعم", text: "ما تفوّتك حجز طاولة أو استفسار ضيافة حتى في ذروة الخدمة.", points: ["يأخذ حجوزات الطاولات ٢٤ ساعة", "يشارك القائمة والأسعار", "يؤكد الحجوزات تلقائيًا"] },
  { icon: ShoppingBag, title: "التجارة الإلكترونية والتجزئة", text: "ادعم مئات العملاء في نفس الوقت بدون إضافة موظف واحد.", points: ["يتعامل مع تتبع الطلبات", "يوصي بالمنتجات", "يدير المرتجعات والشكاوى"] },
];

export default function IndustriesSection() {
  return <section id="industries" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-10"><p className="text-brand-600 font-semibold mb-2">مبني لقطاعك</p><h2 className="font-heading text-2xl md:text-4xl font-bold">بنيناه لمشاريع مثل مشروعك</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{industries.map((item, index) => <ScrollReveal key={item.title} delay={index * 0.06}><article className="h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm"><item.icon className="text-brand-500 mb-4" size={28} /><h3 className="font-bold text-lg mb-2">{item.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{item.text}</p><ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">{item.points.map(point => <li key={point}>← {point}</li>)}</ul></article></ScrollReveal>)}</div></div></section>;
}
