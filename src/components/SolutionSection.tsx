"use client";

import { Brain, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const points = [
  "يردّ في أقل من ٣ ثوانٍ، ليل أو نهار، أيام العمل أو الإجازات",
  "يؤهّل عملاءك المحتملين تلقائيًا يجمع الاسم والاحتياج والميزانية",
  "يحجز المواعيد مباشرة في تقويمك بدون أي تنسيق يدوي",
  "يجاوب على أكثر الأسئلة تكرارًا فورًا الأسعار، المواعيد، الموقع، السياسات",
  "يتكامل مع نظام إدارة علاقات العملاء أو جوجل شيتس أو تقويمك",
  "يتكلم مع عملائك بالعربي والإنجليزي باحترافية",
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <ScrollReveal><div className="text-center lg:text-right"><div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 mb-6"><Brain size={32} /></div><p className="text-brand-600 font-semibold mb-2">الحل</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-4 leading-tight">تعرّف على موظفك الجديد يشتغل ٢٤ ساعة على واتساب</h2><p className="text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">نبني لك موظفًا ذكيًا مدرّبًا على شغلك تحديدًا منتجاتك، أسعارك، خدماتك، وأسلوبك في الكلام. يشتغل مباشرة من حساب واتساب بزنس الخاص بك ويتعامل مع كل محادثة تلقائيًا.</p><p className="font-semibold mb-7">ما ينام. ما يأخذ إجازة. وما يخلّي عميل ينتظر.</p><WhatsAppButton text="احجز عرضًا مجانيًا" /></div></ScrollReveal>
          <ScrollReveal delay={0.2}><div className="space-y-3">{points.map((point) => <div key={point} className="flex items-start gap-3 p-3 md:p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center mt-0.5"><Check size={14} /></span><p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{point}</p></div>)}</div></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
