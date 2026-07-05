"use client";
import { Brain, CalendarDays, Database, FileSpreadsheet, MessageCircle, Workflow } from "lucide-react";
import IntegrationCard from "./IntegrationCard";
import ScrollReveal from "./ScrollReveal";
const items = [
  { icon: MessageCircle, name: "WhatsApp Business", description: "Automated replies & follow-ups", color: "text-emerald-500", bgColor: "bg-emerald-50" },
  { icon: CalendarDays, name: "Google Calendar", description: "Appointment booking", color: "text-sky-500", bgColor: "bg-sky-50" },
  { icon: FileSpreadsheet, name: "Google Sheets", description: "Data logging", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: Database, name: "CRM", description: "Lead management", color: "text-violet-500", bgColor: "bg-violet-50" },
  { icon: Workflow, name: "n8n Workflows", description: "Custom process automation", color: "text-orange-500", bgColor: "bg-orange-50" },
  { icon: Brain, name: "Custom AI", description: "Trained on your business", color: "text-rose-500", bgColor: "bg-rose-50" },
];
export default function IntegrationsSection() { return <section className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16"><div className="text-center mb-8"><h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">Works with the tools you already use</h2><p className="text-slate-500 dark:text-slate-400">No need to change how you work. Your AI system plugs into the tools your team uses every day.</p></div><div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">{items.map(item => <IntegrationCard key={item.name} {...item} />)}</div></div></ScrollReveal></div></section>; }
