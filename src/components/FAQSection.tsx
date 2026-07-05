"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  ["هل يبدو آليًا على عملائي؟", "لا. نحن ندرّب موظفك الذكي تحديدًا على مشروعك أسلوبك، منتجاتك، لغتك. أغلب العملاء ما يعرفون إنهم يتكلمون مع ذكاء اصطناعي. وإذا جاء سؤال معقد، يحوّل المحادثة بسلاسة لفريقك."],
  ["كم يستغرق الإعداد؟", "أغلب المشاريع تشتغل خلال ٥ إلى ٧ أيام عمل. نحن نتولى كل شيء الإعداد، التدريب، الاختبار، والتكامل. ما تحتاج أي معرفة تقنية."],
  ["هل يشتغل مع حساب واتساب بزنس الحالي؟", "نعم. نتكامل مباشرة مع واجهة برمجة واتساب بزنس. رقمك يفضل نفسه، هويتك تفضل نفسها بس تكسب مساعدًا يشتغل ٢٤ ساعة معك."],
  ["إيش يصير لو سأل العميل سؤالًا ما يعرف الجواب؟", "يتعامل معه بلباقة يخبر العميل إن أحد أفراد الفريق سيتابع معه، ويُشعرك فورًا. ما في إحراج، ما في خسارة عملاء."],
  ["يقدر يحجز في تقويمي الفعلي؟", "نعم. نربطه بجوجل كالندر أو كالندلي أو نظام الحجز الحالي. المواعيد تُؤكَّد في الوقت الفعلي."],
  ["هل أحتاج أكون تقنيًا لإدارة هذا؟", "إطلاقًا. نحن ندير كل شيء لك. إذا أردت تحديث منتج، تغيير سعر، أو إضافة سؤال شائع جديد، تخبرنا ونتولى الأمر."],
  ["كم يكلّف؟", "الاستثمار يبدأ من ٢٩٩ دولار شهرياً حسب حجم مشروعك وعدد المحادثات. أغلب مشاريعنا تعوّض التكلفة خلال أول شهرين من توفير الصفقات الضائعة. احجز عرضاً مجانياً ونحضّر لك عرض سعر مخصص خلال ٢٤ ساعة."],
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faq" className="py-10 md:py-16 px-4"><div className="max-w-3xl mx-auto"><ScrollReveal><div className="text-center mb-10"><p className="text-brand-600 font-semibold mb-2">أسئلة شائعة</p><h2 className="font-heading text-2xl md:text-4xl font-bold">كل شيء تبي تعرفه</h2></div></ScrollReveal><div className="space-y-3">{faqs.map(([question, answer], index) => <article key={question} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden"><button className="w-full p-5 flex items-center justify-between gap-4 text-right font-bold" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span>{open === index ? <Minus size={20} /> : <Plus size={20} />}</button>{open === index && <p className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{answer}</p>}</article>)}</div></div></section>;
}
