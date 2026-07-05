"use client";

import { AlarmClock, CalendarX, Clock, Megaphone, MessageSquare, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: Clock, title: "الرسائل تجي بعد الدوام والعميل يختفي", description: "العميل يراسلك الساعة ١٠ الليل. أنت تشوف الرسالة الساعة ٩ الصبح. بس هو حجز مع غيرك الساعة ١٠ والنص.", color: "text-rose-500", bgColor: "bg-rose-50" },
  { icon: MessageSquare, title: "فريقك يجاوب على نفس الأسئلة كل يوم", description: "كم السعر؟ وين الموقع؟ هل عندكم؟ ساعات من وقت فريقك تضيع على أسئلة متكررة.", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: AlarmClock, title: "التأخر في الرد يقتل مبيعاتك", description: "٧٨٪ من العملاء يشترون من أول مشروع يردّ عليهم. كل دقيقة تأخير تقلّل فرصتك.", color: "text-red-500", bgColor: "bg-red-50" },
  { icon: Users, title: "فريقك مشغول مو بالبيع، بالإجابة", description: "أفضل موظفيك يقضون وقتهم في الرد على استفسارات بسيطة بدل ما يركّزون على إغلاق الصفقات.", color: "text-violet-500", bgColor: "bg-violet-50" },
  { icon: CalendarX, title: "مواعيدك تضيع بين الرسائل", description: "الحجز اليدوي عبر واتساب يعني مواعيد منسية، ازدواجية في الحجز، وخسارة في الإيراد.", color: "text-sky-500", bgColor: "bg-sky-50" },
  { icon: Megaphone, title: "تدفع على الإعلانات وتخسر العملاء في الرد", description: "تصرف على الإعلانات لتجيب عملاء محتملين ثم تخسرهم لأن ما كان أحد متاح للرد في الوقت المناسب.", color: "text-orange-500", bgColor: "bg-orange-50" },
];

export default function ProblemSection() {
  return (
    <section id="product" className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><div className="text-center mb-8 md:mb-12"><p className="text-rose-500 font-semibold mb-2">المشكلة الحقيقية</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">شغلك يخسر عملاء كل يوم وأنت ما تعرف</h2><p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">الحقيقة المرّة: العميل اللي يراسلك على واتساب وما يرد عليه أحد خلال دقائق، يروح. ما ينتظر. يبحث عن الخيار الثاني ويحجز معه.</p></div></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, index) => <ScrollReveal key={problem.title} delay={index * 0.06}><div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow h-full"><div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bgColor} mb-4`}><problem.icon size={24} className={problem.color} /></div><h3 className="font-bold text-base md:text-lg mb-2">{problem.title}</h3><p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{problem.description}</p></div></ScrollReveal>)}
        </div>
        <ScrollReveal><div className="mt-6 rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50 dark:bg-rose-950/20 p-6 md:p-8 flex flex-col md:flex-row gap-5 items-center"><strong className="text-5xl md:text-6xl text-rose-500">٦٧٪</strong><p className="text-slate-700 dark:text-slate-300 leading-relaxed">من العملاء اللي ما يحصلون على رد سريع لن يتواصلوا مع هذا المشروع مرة ثانية. <strong>كم عميلًا خسرته هذا الأسبوع؟</strong></p></div></ScrollReveal>
      </div>
    </section>
  );
}
