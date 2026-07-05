"use client";

import { CalendarCheck, Clock3, Star, Target, Timer, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  { icon: Zap, metric: "أقل من ٣ ثوانٍ", title: "رد فوري في كل وقت", text: "ما في عميل ينتظر. كل رسالة تحصل على رد احترافي في ثوانٍ يبني الثقة من أول تواصل." },
  { icon: Clock3, metric: "٢٤/٧", title: "ما تخسر عميلًا بعد الآن", text: "الليل، عطلة نهاية الأسبوع، الإجازات الرسمية موظفك الذكي دايمًا موجود." },
  { icon: CalendarCheck, metric: "+٤٠٪", title: "حجوزات أكثر", text: "يحجز مباشرة في تقويمك. العملاء يؤكدون فورًا. الغيابات تقل. الإيراد يرتفع." },
  { icon: Target, metric: "٣×", title: "عملاء محتملون أفضل جودة", text: "يؤهّل كل عميل قبل ما يوصل لك ويوصّل لك بس اللي جاهزين للشراء." },
  { icon: Timer, metric: "+١٥ ساعة", title: "توفير أسبوعي", text: "حرّر فريقك من الأسئلة المتكررة. خلّيهم يركّزون على البيع وتنمية المشروع." },
  { icon: Star, metric: "٥ نجوم", title: "تجربة عميل من الدرجة الأولى", text: "سريع، احترافي، دايمًا متاح. عملاءك يحسون بالاهتمام من أول رسالة." },
];

export default function BenefitsSection() {
  return <section id="benefits" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-10"><p className="text-brand-600 font-semibold mb-2">ما تحصل عليه فعلًا</p><h2 className="font-heading text-2xl md:text-4xl font-bold">المزيد من العملاء. المزيد من الحجوزات. شغل أقل.</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{benefits.map((item, index) => <ScrollReveal key={item.title} delay={index * 0.06}><article className="h-full text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow"><item.icon className="mx-auto text-brand-500 mb-4" size={28} /><strong className="block text-2xl text-brand-600 mb-2">{item.metric}</strong><h3 className="font-bold mb-2">{item.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p></article></ScrollReveal>)}</div></div></section>;
}
