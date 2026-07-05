"use client";

import { Building2, Car, Scissors, ShoppingBag, Stethoscope, Utensils } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const industries = [
  { icon: Building2, title: "Real Estate", text: "Capture and qualify property leads 24/7, before your competitors even notice them.", points: ["Qualifies buyers by budget and location", "Books property viewings automatically", "Follows up with cold leads"] },
  { icon: Stethoscope, title: "Medical Clinics", text: "Cut missed appointments and take the pressure off your front desk.", points: ["Books and confirms appointments", "Sends appointment reminders", "Manages follow-up scheduling"] },
  { icon: Scissors, title: "Salons & Beauty Centers", text: "Keep your calendar filling up automatically, even mid-session.", points: ["Books services and specialists", "Answers pricing questions", "Handles rebooking"] },
  { icon: Car, title: "Car Dealerships", text: "Turn more enquiries into test drives.", points: ["Qualifies buyers by model and budget", "Books test drives", "Follows up with interested buyers"] },
  { icon: Utensils, title: "Restaurants", text: "Never miss a table booking or catering enquiry, even at peak service.", points: ["Takes table reservations 24/7", "Shares menu and pricing", "Confirms bookings automatically"] },
  { icon: ShoppingBag, title: "E-commerce & Retail", text: "Support hundreds of customers at once without adding a single employee.", points: ["Handles order tracking", "Recommends products", "Manages returns and complaints"] },
];

export default function IndustriesSection() {
  return <section id="industries" className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="text-center mb-10"><p className="text-brand-600 font-semibold mb-2">Built for Your Industry</p><h2 className="font-heading text-2xl md:text-4xl font-bold">Built for businesses like yours</h2></div></ScrollReveal><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{industries.map((item, index) => <ScrollReveal key={item.title} delay={index * 0.06}><article className="h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-6 shadow-sm"><item.icon className="text-brand-500 mb-4" size={28} /><h3 className="font-bold text-lg mb-2">{item.title}</h3><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{item.text}</p><ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">{item.points.map(point => <li key={point}>→ {point}</li>)}</ul></article></ScrollReveal>)}</div></div></section>;
}
