"use client";

import { CalendarCheck, Clock3, Star, Target, Timer, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const benefits = [
  { icon: Zap, metric: "< 3 sec", title: "Instant replies, every time", text: "No customer waits. Every message gets a professional response within seconds, building trust from the very first touch." },
  { icon: Clock3, metric: "24/7", title: "Never lose a lead again", text: "Nights, weekends, public holidays. Your AI system is always on." },
  { icon: CalendarCheck, metric: "+40%", title: "More bookings", text: "Appointments go straight into your calendar. Customers confirm instantly. No-shows drop. Revenue grows." },
  { icon: Target, metric: "3×", title: "Better-qualified leads", text: "Every lead is qualified before it reaches you, so you only talk to people who are ready to buy." },
  { icon: Timer, metric: "15+ hrs", title: "Saved every week", text: "Free your team from repetitive questions so they can focus on selling and growing the business." },
  { icon: Star, metric: "5-star", title: "A first-class customer experience", text: "Fast, professional, always available. Your customers feel looked after from the first message." },
];

export default function BenefitsSection() {
  return <section id="benefits" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-10"><p className="text-brand-600 font-semibold mb-2">How Your AI Agent Works</p><h2 className="font-heading text-2xl md:text-4xl font-bold">More leads. More bookings. Less manual work.</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{benefits.map((item, index) => <ScrollReveal key={item.title} delay={index * 0.06}><article className="h-full text-center bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow"><item.icon className="mx-auto text-brand-500 mb-4" size={28} /><strong className="block text-2xl text-brand-600 mb-2">{item.metric}</strong><h3 className="font-bold mb-2">{item.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.text}</p></article></ScrollReveal>)}</div></div></section>;
}
