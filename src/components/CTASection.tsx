"use client";

import { Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import WhatsAppButton from "./WhatsAppButton";
import WhatsAppLinkButton from "./WhatsAppLinkButton";

export default function CTASection() {
  return <section className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16 text-center"><div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-cta-light text-cta mb-6"><Zap size={32} /></div><h2 className="font-heading text-2xl md:text-4xl font-bold mb-4">Right now, a customer is waiting for your reply.</h2><p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">Every day without automation is another lead lost. Your competitors are moving faster. The question isn&apos;t whether you need this — it&apos;s how many customers you&apos;ll lose before you get it.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-3"><WhatsAppButton text="Automate My Business" variant="primary" size="lg" className="w-full sm:w-auto" /><WhatsAppLinkButton text="Chat on WhatsApp" size="lg" className="w-full sm:w-auto" /></div><p className="mt-6 text-sm text-slate-500 dark:text-slate-400">⚡ Live within 7 days · ✓ Free demo · English & Arabic · Gulf market specialists</p></div></ScrollReveal></div></section>;
}
