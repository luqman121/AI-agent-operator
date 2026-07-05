"use client";

import { Brain, FileSpreadsheet, Mail, MessageCircle, Send, Zap } from "lucide-react";
import FloatingIcon from "./FloatingIcon";
import ThemeToggle from "./ThemeToggle";
import WhatsAppButton from "./WhatsAppButton";
import WhatsAppLinkButton from "./WhatsAppLinkButton";

export default function HeroSection() {
  const floatingIcons = [
    { icon: MessageCircle, position: "top-[12%] left-[8%]", animation: "animate-float-slow", color: "text-emerald-500", bgColor: "bg-emerald-50", size: 22 },
    { icon: Send, position: "top-[18%] right-[10%]", animation: "animate-float", color: "text-sky-500", bgColor: "bg-sky-50", size: 22 },
    { icon: Mail, position: "top-[42%] right-[6%]", animation: "animate-float-delayed", color: "text-rose-500", bgColor: "bg-rose-50", size: 22 },
    { icon: FileSpreadsheet, position: "top-[38%] left-[5%]", animation: "animate-float-slow", color: "text-amber-500", bgColor: "bg-amber-50", size: 22 },
    { icon: Brain, position: "bottom-[18%] left-[12%]", animation: "animate-float-delayed", color: "text-violet-500", bgColor: "bg-violet-50", size: 22 },
    { icon: Zap, position: "bottom-[20%] right-[11%]", animation: "animate-float", color: "text-orange-500", bgColor: "bg-orange-50", size: 22 },
  ];

  return (
    <section className="relative pt-24 md:pt-28 pb-10 md:pb-16 px-4 overflow-hidden">
      <div className="relative mx-auto max-w-5xl bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-12 md:px-12 md:py-24">
        {floatingIcons.map((item, index) => (
          <div key={index} className={`hidden lg:block absolute z-10 opacity-85 ${item.position}`}>
            <FloatingIcon icon={item.icon} animationClass={item.animation} color={item.color} bgColor={item.bgColor} size={item.size} />
          </div>
        ))}
        <div className="relative z-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6 animate-fade-in">
            <Zap size={16} /><span>Now onboarding businesses worldwide</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-5 animate-fade-in-up">
            Stop losing customers to slow replies. Let AI answer first.
          </h1>
          <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Your AI agent replies in seconds, qualifies the lead, and books the call, 24/7, even while you sleep.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up">
            <WhatsAppButton text="Book Your Free Demo" variant="primary" size="md" className="w-full sm:w-auto" />
            <WhatsAppLinkButton text="Chat on WhatsApp" size="md" className="w-full sm:w-auto" />
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400"><span className="font-semibold text-slate-700 dark:text-slate-300">Serving businesses worldwide</span> · Replies in under 3 seconds</p>
          <div className="flex justify-center mt-6"><ThemeToggle /></div>
        </div>
      </div>
    </section>
  );
}
