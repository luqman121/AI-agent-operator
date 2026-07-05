"use client";

import ScrollReveal from "./ScrollReveal";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { name: "Khalid Al-Anzi", role: "Manager", company: "Al Noor Real Estate, Dubai", quote: "We used to lose leads every single night. Now our AI agent captures every after-hours enquiry and hands the sales team qualified leads each morning. Bookings went up 40% in the first month.", rating: 5 },
  { name: "Dr. Sarah Al-Marzouqi", role: "Clinic Director", company: "Al Shifa Medical Center, Abu Dhabi", quote: "Our receptionist spent 3 hours a day answering the same questions on WhatsApp. Now she focuses on patients. The AI handles bookings, FAQs, and follow-ups.", rating: 5 },
  { name: "Rana Al-Habsi", role: "Owner", company: "Lumière Beauty, Muscat", quote: "After the first week, I had 12 qualified leads waiting on Monday morning — all of them came in over the weekend while the salon was closed. It paid for itself in the first 10 days.", rating: 5 },
];

export default function TestimonialsSection() {
  return <section id="proof" className="py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-12"><p className="text-brand-600 font-semibold mb-2">Real results, real businesses</p><h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">They stopped losing customers. You can too.</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((item, index) => <ScrollReveal key={item.name} delay={index * 0.15}><TestimonialCard {...item} /></ScrollReveal>)}</div></div></section>;
}
