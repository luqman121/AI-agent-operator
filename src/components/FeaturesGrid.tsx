"use client";

import { BarChart3, CalendarCheck, Filter, Languages, Link, MessageCircle, ShoppingBag, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ScrollReveal from "./ScrollReveal";

const features = [
  { icon: MessageCircle, title: "Instant customer replies", description: "Responds to every WhatsApp message within seconds, in natural, professional language that matches your brand.", color: "text-emerald-500", bgColor: "bg-emerald-50" },
  { icon: Filter, title: "Smart lead qualification", description: "Asks the right questions up front — budget, timeline, and needs — so you only spend time on serious buyers.", color: "text-brand-500", bgColor: "bg-brand-50" },
  { icon: CalendarCheck, title: "Automated appointment booking", description: "Connects to your calendar and books viewings, consultations, or service appointments without you stepping in.", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: Sparkles, title: "Automatic FAQ answers", description: "Handles your 20+ most common questions instantly — pricing, hours, location, and policies.", color: "text-violet-500", bgColor: "bg-violet-50" },
  { icon: Link, title: "Works with your systems", description: "Syncs automatically with your CRM, Google Sheets, or internal databases.", color: "text-sky-500", bgColor: "bg-sky-50" },
  { icon: Languages, title: "Fluent English & Arabic", description: "Communicates professionally in both languages and adapts to each customer.", color: "text-rose-500", bgColor: "bg-rose-50" },
  { icon: ShoppingBag, title: "Product & service recommendations", description: "Understands what each customer needs and suggests the right product or service — lifting average order value.", color: "text-orange-500", bgColor: "bg-orange-50" },
  { icon: BarChart3, title: "Monthly performance reports", description: "See how many leads were captured, questions answered, and appointments booked.", color: "text-teal-500", bgColor: "bg-teal-50" },
];

export default function FeaturesGrid() {
  return <section id="features" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-8 md:mb-12"><p className="text-brand-600 font-semibold mb-2">Everything It Does</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">One system. Endless capabilities.</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">{features.map((feature, index) => <ScrollReveal key={feature.title} delay={index * 0.05}><FeatureCard {...feature} /></ScrollReveal>)}</div></div></section>;
}
