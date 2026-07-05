"use client";

import ScrollReveal from "./ScrollReveal";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { name: "خالد العنزي", role: "مدير", company: "شركة النور العقارية، دبي", quote: "قبل كذا، كنا نخسر عملاء محتملين كل ليلة. الآن موظفنا الذكي يلتقط كل استفسار بعد الدوام ويجهّز فريق المبيعات بعملاء مؤهّلين كل صباح. حجوزات المواعيد ارتفعت ٤٠٪ في الشهر الأول.", rating: 5 },
  { name: "د. سارة المرزوقي", role: "مديرة عيادة", company: "مركز الشفاء الطبي، أبوظبي", quote: "موظفة الاستقبال كانت تقضي ٣ ساعات يوميًا تجاوب على نفس الأسئلة على واتساب. الآن تركّز على المرضى. الذكاء الاصطناعي يتولى الحجوزات والأسئلة الشائعة والمتابعة.", rating: 5 },
  { name: "رنا الحبسي", role: "مالكة", company: "لومير للتجميل، مسقط", quote: "بعد أول أسبوع، كان عندي ١٢ عميلًا مؤهّلًا ينتظرون صباح الاثنين كلهم وصلوا خلال عطلة نهاية الأسبوع والصالون كان مغلقًا. عوّض تكلفته في أول ١٠ أيام.", rating: 5 },
];

export default function TestimonialsSection() {
  return <section id="proof" className="py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-12"><p className="text-brand-600 font-semibold mb-2">نتائج حقيقية، مشاريع حقيقية</p><h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">وقفوا عن خسارة العملاء. أنت تقدر كذلك.</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((item, index) => <ScrollReveal key={item.name} delay={index * 0.15}><TestimonialCard {...item} /></ScrollReveal>)}</div></div></section>;
}
