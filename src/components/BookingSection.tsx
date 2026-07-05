"use client";

import { CalendarDays, CheckCircle2, Eye, Rocket, Shapes } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const steps = [
  { icon: CalendarDays, title: "Step 1: Book your time", text: "Pick any time that suits you. We work around your schedule." },
  { icon: Eye, title: "Step 2: Watch a live demo", text: "See exactly how your AI agent responds to real customers in your industry." },
  { icon: Shapes, title: "Step 3: Get a custom proposal", text: "We show you exactly what we'll build for you and the results to expect. No guesswork." },
  { icon: Rocket, title: "Step 4: Go live within 7 days", text: "If you're ready, we start right away. Your AI system could be working for you next week." },
];

export default function BookingSection() {
  return <section id="booking" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16"><div className="text-center max-w-3xl mx-auto mb-10"><p className="text-brand-600 font-semibold mb-2">Free 30-Minute Consultation</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">See your business running on autopilot.</h2><p className="text-slate-500 dark:text-slate-400 leading-relaxed">In 30 minutes, we&apos;ll show you exactly how your AI automation system works, built around your business, your customers, and your industry. No technical knowledge needed. No commitment.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">{steps.map(step => <article key={step.title} className="rounded-2xl bg-slate-50 dark:bg-slate-700/50 p-5 flex gap-4"><step.icon className="text-brand-500 shrink-0" /><div><h3 className="font-bold mb-1">{step.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400">{step.text}</p></div></article>)}</div><div className="text-center"><WhatsAppButton text="Book a Free Consultation" size="lg" /><p className="mt-5 text-sm text-slate-500 dark:text-slate-400"><CheckCircle2 size={16} className="inline mr-1" />No commitment · No sales pressure · Tailored to your business · Live within a week</p></div></div></ScrollReveal></div></section>;
}
