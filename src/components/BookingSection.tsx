"use client";

import { CalendarDays, CheckCircle2, Eye, Rocket, Shapes } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const steps = [
  { icon: CalendarDays, title: "الخطوة ١ احجز وقتك", text: "اختر أي وقت يناسبك نحن نتكيّف مع جدولك." },
  { icon: Eye, title: "الخطوة ٢ نريك عرضًا مباشرًا", text: "شوف بالضبط كيف يردّ موظفك الذكي على عملائك الفعليين، في قطاعك." },
  { icon: Shapes, title: "الخطوة ٣ احصل على عرض مخصص", text: "نوضّح لك بالضبط ما سنبنيه لك، والنتائج اللي تتوقعها بدون تخمين." },
  { icon: Rocket, title: "الخطوة ٤ اشتغل خلال ٧ أيام", text: "إذا كنت مستعدًا، نبدأ فورًا. موظفك الذكي يمكن يكون يشتغل لك الأسبوع الجاي." },
];

export default function BookingSection() {
  return <section id="booking" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16"><div className="text-center max-w-3xl mx-auto mb-10"><p className="text-brand-600 font-semibold mb-2">عرض مجاني لمدة ١٥ دقيقة</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">شوف مشروعك وهو يشتغل على الطيّار الأوتوماتيكي.</h2><p className="text-slate-500 dark:text-slate-400 leading-relaxed">في ١٥ دقيقة، نريك بالضبط كيف يشتغل موظفك الذكي مبني خصيصًا لمشروعك، عملائك، وقطاعك. ما تحتاج أي معرفة تقنية. ما في أي التزام.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">{steps.map(step => <article key={step.title} className="rounded-2xl bg-slate-50 dark:bg-slate-700/50 p-5 flex gap-4"><step.icon className="text-brand-500 shrink-0" /><div><h3 className="font-bold mb-1">{step.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400">{step.text}</p></div></article>)}</div><div className="text-center"><WhatsAppButton text="اختر وقتك الآن ←" size="lg" /><p className="mt-5 text-sm text-slate-500 dark:text-slate-400"><CheckCircle2 size={16} className="inline ml-1" />استشارة مجانية · بدون التزام · عرض مباشر · إعداد ممكن في نفس الأسبوع</p></div></div></ScrollReveal></div></section>;
}
