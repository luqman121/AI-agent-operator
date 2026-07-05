"use client";

import ScrollReveal from "./ScrollReveal";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  { industry: "Real Estate", outcome: "After switching to AI-first response, after-hours leads stopped going unanswered. Bookings rose 40% in the first month." },
  { industry: "Medical Clinic", outcome: "Replies to common questions dropped from hours to under a minute, freeing the front desk to focus on patients instead of repeating answers on WhatsApp." },
  { industry: "Beauty Salon", outcome: "A dozen qualified bookings came in over a single weekend, all handled automatically while the salon was closed." },
];

export default function TestimonialsSection() {
  return <section id="proof" className="py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-12"><p className="text-brand-600 font-semibold mb-2">Typical Outcomes</p><h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What automation can do for a business like yours</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((item, index) => <ScrollReveal key={item.industry} delay={index * 0.15}><TestimonialCard {...item} /></ScrollReveal>)}</div></div></section>;
}
