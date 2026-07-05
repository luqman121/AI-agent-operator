"use client";

import React from "react";
import {
  MessageCircle,
  Send,
  Mail,
  FileSpreadsheet,
  Database,
  Workflow,
  Brain,
  Zap,
  Link2,
} from "lucide-react";
import IntegrationCard from "./IntegrationCard";
import ScrollReveal from "./ScrollReveal";

const integrations = [
  {
    icon: MessageCircle,
    name: "واتساب",
    description: "ردود تلقائية",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    rotation: -8,
    animationDelay: 0,
    emoji: "💚",
  },
  {
    icon: Send,
    name: "تيليجرام",
    description: "بوت ذكي",
    color: "text-sky-500",
    bgColor: "bg-sky-50",
    rotation: 5,
    animationDelay: 0.5,
    emoji: "✈️",
  },
  {
    icon: Mail,
    name: "البريد الإلكتروني",
    description: "ردود مخصصة",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    rotation: -4,
    animationDelay: 1,
    emoji: "📧",
  },
  {
    icon: FileSpreadsheet,
    name: "Google Sheets",
    description: "حفظ البيانات",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    rotation: 6,
    animationDelay: 1.5,
    emoji: "📊",
  },
  {
    icon: Database,
    name: "CRM",
    description: "إدارة العملاء",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    rotation: -6,
    animationDelay: 2,
    emoji: "🗄️",
  },
  {
    icon: Workflow,
    name: "n8n",
    description: "أتمتة متقدمة",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    rotation: 4,
    animationDelay: 2.5,
    emoji: "⚙️",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />
      <div className="absolute left-1/4 top-1/2 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-2xl border border-white/60 px-6 py-14 md:px-12 md:py-16 overflow-hidden">

            {/* Decorative background grid lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: "linear-gradient(#0ea5e9 1px, transparent 1px), linear-gradient(to right, #0ea5e9 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-semibold mb-5">
                <Link2 size={14} />
                <span>تكاملات بدون تعقيد</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                يعمل مع أدواتك الحالية <span className="text-2xl">🔌</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                لا تحتاج إلى تغيير برامجك أو تعلم أدوات جديدة. يتصل مباشرةً بالأدوات التي تستخدمها يومياً
              </p>
            </div>

            {/* Center Hero AI Brain */}
            <div className="flex justify-center mb-12 relative">
              <div className="relative">
                <div className="flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-brand-500 to-violet-600 text-white shadow-2xl animate-pulse-glow">
                  <Brain size={42} />
                </div>
                {/* Radiating rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-36 h-36 rounded-full border-2 border-brand-200/50 animate-ping" style={{ animationDuration: "3s" }} />
                </div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-28 h-28 rounded-full border border-brand-300/30 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.5s" }} />
                </div>
                {/* Zap badge */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center shadow-md">
                  <Zap size={14} className="text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Integration Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {integrations.map((integration, index) => (
                <ScrollReveal key={index} delay={index * 0.08}>
                  <IntegrationCard {...integration} />
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom note */}
            <div className="text-center mt-10">
              <p className="text-sm text-slate-400">
                🔧 وإمكانية تكامل مع أي أداة أخرى بناءً على احتياجك
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
