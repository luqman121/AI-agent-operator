"use client";

import { Brain, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";

const points = [
  "Replies in under 3 seconds, day or night, workdays or holidays",
  "Qualifies your leads automatically and collects name, needs, and budget",
  "Books appointments straight into your calendar with zero manual coordination",
  "Answers your most common questions instantly: pricing, hours, location, policies",
  "Connects with WhatsApp, Telegram, email, your CRM, and Google Sheets",
  "Runs on n8n workflows built and managed for you, with no technical skills needed",
];

export default function SolutionSection() {
  return (
    <section id="how-it-works" className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <ScrollReveal><div className="text-center lg:text-left"><div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 mb-6"><Brain size={32} /></div><p className="text-brand-600 font-semibold mb-2">The Solution</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-4 leading-tight">Meet your AI automation system, working 24/7 inside your tools</h2><p className="text-slate-500 dark:text-slate-400 mb-3 leading-relaxed">We build custom AI agents trained specifically on your business: your products, prices, services, and tone of voice. They plug into the tools you already use and handle every conversation and workflow automatically.</p><p className="font-semibold mb-7">No sleep. No holidays. No customer left waiting.</p><WhatsAppButton text="Book a Free Consultation" /></div></ScrollReveal>
          <ScrollReveal delay={0.2}><div className="space-y-3">{points.map((point) => <div key={point} className="flex items-start gap-3 p-3 md:p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-500 text-white flex items-center justify-center mt-0.5"><Check size={14} /></span><p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{point}</p></div>)}</div></ScrollReveal>
        </div>
      </div>
    </section>
  );
}
