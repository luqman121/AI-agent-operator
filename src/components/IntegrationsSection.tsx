"use client";
import { Brain, CalendarDays, Database, FileSpreadsheet, MessageCircle, Workflow } from "lucide-react";
import IntegrationCard from "./IntegrationCard";
import ScrollReveal from "./ScrollReveal";
const items = [
  { icon: MessageCircle, name: "واتساب بزنس", description: "ردود ومتابعة تلقائية", color: "text-emerald-500", bgColor: "bg-emerald-50" },
  { icon: CalendarDays, name: "جوجل كالندر", description: "حجز المواعيد", color: "text-sky-500", bgColor: "bg-sky-50" },
  { icon: FileSpreadsheet, name: "جوجل شيتس", description: "تسجيل البيانات", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: Database, name: "نظام إدارة العملاء", description: "إدارة العملاء المحتملين", color: "text-violet-500", bgColor: "bg-violet-50" },
  { icon: Workflow, name: "أتمتة العمليات", description: "سير عمل مخصص", color: "text-orange-500", bgColor: "bg-orange-50" },
  { icon: Brain, name: "ذكاء مخصص", description: "مدرّب على مشروعك", color: "text-rose-500", bgColor: "bg-rose-50" },
];
export default function IntegrationsSection() { return <section className="py-10 md:py-16 px-4"><div className="max-w-5xl mx-auto"><ScrollReveal><div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16"><div className="text-center mb-8"><h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">يعمل مع أنظمتك الحالية</h2><p className="text-slate-500 dark:text-slate-400">ما تحتاج تغيّر طريقة شغلك. موظفك الذكي يتكامل مع الأدوات اللي تستخدمها كل يوم.</p></div><div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">{items.map(item => <IntegrationCard key={item.name} {...item} />)}</div></div></ScrollReveal></div></section>; }
