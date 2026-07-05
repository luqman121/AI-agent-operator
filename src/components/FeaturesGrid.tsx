"use client";

import { BarChart3, CalendarCheck, Filter, Languages, Link, MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: MessageCircle, title: "رد فوري على العملاء", description: "يردّ على كل رسالة واتساب في ثوانٍ بلغة طبيعية واحترافية تعكس هوية مشروعك.", color: "text-emerald-500", bgColor: "bg-emerald-50" },
  { icon: Filter, title: "تأهيل ذكي للعملاء المحتملين", description: "يسأل الأسئلة الصح من البداية الميزانية، الجدول الزمني، والاحتياجات عشان ما تضيع وقتك إلا مع العملاء الجادين.", color: "text-brand-500", bgColor: "bg-brand-50" },
  { icon: CalendarCheck, title: "حجز مواعيد تلقائي", description: "يتكامل مع تقويمك ويحجز المعاينات أو الاستشارات أو مواعيد الخدمة بدونك تتدخل.", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: Sparkles, title: "إجابة تلقائية على الأسئلة الشائعة", description: "يتعامل مع أكثر ٢٠ سؤال شائع عندك فورًا الأسعار، المواعيد، الموقع، والسياسات.", color: "text-violet-500", bgColor: "bg-violet-50" },
  { icon: Link, title: "تكامل مع أنظمتك", description: "يتزامن تلقائيًا مع نظام إدارة علاقات العملاء أو جوجل شيتس أو قواعد البيانات الداخلية.", color: "text-sky-500", bgColor: "bg-sky-50" },
  { icon: Languages, title: "عربي وإنجليزي باحترافية", description: "يتواصل بطلاقة في اللغتين عربي خليجي رسمي وإنجليزي احترافي ويتكيّف مع كل عميل.", color: "text-rose-500", bgColor: "bg-rose-50" },
  { icon: ShoppingBag, title: "توصية بالمنتجات والخدمات", description: "يفهم احتياج العميل ويقترح المنتج أو الخدمة المناسبة مما يرفع متوسط قيمة الطلب.", color: "text-orange-500", bgColor: "bg-orange-50" },
  { icon: BarChart3, title: "تقارير أداء شهرية", description: "اعرف كم عميل محتمل تم تسجيله، وكم سؤال أُجيب عليه، وكم موعد حُجز.", color: "text-teal-500", bgColor: "bg-teal-50" },
];

export default function FeaturesGrid() {
  return <section id="features" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-8 md:mb-12"><p className="text-brand-600 font-semibold mb-2">كل ما يفعله</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">موظف واحد. قدرات لا نهاية لها.</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">{features.map((feature, index) => <ScrollReveal key={feature.title} delay={index * 0.05}><FeatureCard {...feature} /></ScrollReveal>)}</div></div></section>;
}
