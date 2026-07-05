"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  ["Will it sound robotic to my customers?", "No. We train your AI agent specifically on your business — your tone, your products, your language. Most customers can't tell they're talking to AI. And when a complex question comes up, the conversation is handed to your team seamlessly."],
  ["How long does setup take?", "Most businesses are live within 5–7 working days. We handle everything — setup, training, testing, and integrations. No technical knowledge needed."],
  ["Does it work with my existing WhatsApp Business account?", "Yes. We integrate directly with the WhatsApp Business API. Your number stays the same, your brand stays the same — you just gain an assistant that works around the clock."],
  ["What happens if a customer asks something it doesn't know?", "It handles it gracefully — it tells the customer a team member will follow up, and notifies you right away. No awkward moments, no lost customers."],
  ["Can it book into my actual calendar?", "Yes. We connect it to Google Calendar, Calendly, or your existing booking system. Appointments are confirmed in real time."],
  ["Do I need to be technical to manage this?", "Not at all. We manage everything for you. Want to update a product, change a price, or add a new FAQ? Just tell us and we'll take care of it."],
  ["How much does it cost?", "Plans start from $299/month depending on your business size and conversation volume. Most clients recover the cost within the first two months from deals they would otherwise have lost. Book a free demo and we'll prepare a custom quote within 24 hours."],
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return <section id="faq" className="py-10 md:py-16 px-4"><div className="max-w-3xl mx-auto"><ScrollReveal><div className="text-center mb-10"><p className="text-brand-600 font-semibold mb-2">Frequently Asked Questions</p><h2 className="font-heading text-2xl md:text-4xl font-bold">Everything you need to know</h2></div></ScrollReveal><div className="space-y-3">{faqs.map(([question, answer], index) => <article key={question} className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl overflow-hidden"><button className="w-full p-5 flex items-center justify-between gap-4 text-left font-bold" onClick={() => setOpen(open === index ? null : index)} aria-expanded={open === index}><span>{question}</span>{open === index ? <Minus size={20} /> : <Plus size={20} />}</button>{open === index && <p className="px-5 pb-5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{answer}</p>}</article>)}</div></div></section>;
}
