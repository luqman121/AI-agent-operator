"use client";

import React from "react";
import {
  MessageCircle,
  Send,
  Mail,
  FileSpreadsheet,
  Brain,
  Zap,
  ArrowLeft,
  Bot,
  Sparkles,
  Rocket,
  Star,
  TrendingUp,
  CheckCircle2,
  Users,
  Clock,
  Globe,
  Cpu,
  Workflow,
  BarChart3,
} from "lucide-react";
import FloatingIcon from "./FloatingIcon";
import WhatsAppButton from "./WhatsAppButton";

const floatingIcons = [
  // Top row
  { icon: MessageCircle, position: "absolute top-6 right-[6%]", animation: "animate-float", color: "text-emerald-500", bgColor: "bg-emerald-50", size: 22, delay: "0s" },
  { icon: Send, position: "absolute top-14 left-[8%]", animation: "animate-float-slow", color: "text-sky-500", bgColor: "bg-sky-50", size: 22, delay: "0.5s" },
  { icon: Rocket, position: "absolute top-4 left-[22%]", animation: "animate-float-fast", color: "text-orange-500", bgColor: "bg-orange-50", size: 20, delay: "1s" },
  { icon: Sparkles, position: "absolute top-8 right-[22%]", animation: "animate-wiggle", color: "text-violet-500", bgColor: "bg-violet-50", size: 20, delay: "0.3s" },
  { icon: Star, position: "absolute top-20 right-[38%]", animation: "animate-bounce-soft", color: "text-amber-400", bgColor: "bg-amber-50", size: 18, delay: "1.5s" },
  // Mid left
  { icon: Brain, position: "absolute top-[35%] left-[3%]", animation: "animate-float-delayed", color: "text-violet-500", bgColor: "bg-violet-50", size: 22, delay: "0.8s" },
  { icon: TrendingUp, position: "absolute top-[40%] right-[3%]", animation: "animate-float", color: "text-green-500", bgColor: "bg-green-50", size: 22, delay: "1.2s" },
  // Bottom row
  { icon: Mail, position: "absolute bottom-20 right-[7%]", animation: "animate-float-slow", color: "text-rose-500", bgColor: "bg-rose-50", size: 22, delay: "0.4s" },
  { icon: FileSpreadsheet, position: "absolute bottom-14 left-[6%]", animation: "animate-float", color: "text-amber-500", bgColor: "bg-amber-50", size: 22, delay: "1s" },
  { icon: CheckCircle2, position: "absolute bottom-10 left-[22%]", animation: "animate-bounce-soft", color: "text-emerald-500", bgColor: "bg-emerald-50", size: 20, delay: "0.7s" },
  { icon: Globe, position: "absolute bottom-8 right-[22%]", animation: "animate-float-fast", color: "text-sky-500", bgColor: "bg-sky-50", size: 20, delay: "1.8s" },
  // Extra scattered
  { icon: Cpu, position: "absolute top-[60%] left-[12%]", animation: "animate-wiggle", color: "text-indigo-500", bgColor: "bg-indigo-50", size: 18, delay: "2s" },
  { icon: Users, position: "absolute top-[55%] right-[12%]", animation: "animate-float-delayed", color: "text-pink-500", bgColor: "bg-pink-50", size: 20, delay: "1.3s" },
  { icon: BarChart3, position: "absolute top-[25%] left-[18%]", animation: "animate-float-slow", color: "text-teal-500", bgColor: "bg-teal-50", size: 20, delay: "0.6s" },
  { icon: Workflow, position: "absolute top-[28%] right-[15%]", animation: "animate-float", color: "text-fuchsia-500", bgColor: "bg-fuchsia-50", size: 20, delay: "2.2s" },
  { icon: Clock, position: "absolute bottom-[35%] right-[5%]", animation: "animate-bounce-soft", color: "text-slate-500", bgColor: "bg-slate-100", size: 18, delay: "1.6s" },
  { icon: Zap, position: "absolute top-[50%] left-[25%]", animation: "animate-float-fast", color: "text-yellow-500", bgColor: "bg-yellow-50", size: 18, delay: "0.9s" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 px-4 overflow-hidden">

      {/* Background decorative dots */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Colorful background blobs */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main White Card */}
      <div className="relative mx-auto max-w-5xl bg-white/80 backdrop-blur-sm rounded-[2.5rem] shadow-2xl border border-white/60 px-6 py-20 md:px-12 md:py-28 glow-card">

        {/* Floating Icons - Desktop Only */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className={`hidden lg:block ${item.position}`}
            style={{ animationDelay: item.delay }}
          >
            <FloatingIcon
              icon={item.icon}
              animationClass={item.animation}
              color={item.color}
              bgColor={item.bgColor}
              size={item.size}
            />
          </div>
        ))}

        {/* Colorful corner confetti dots */}
        <div className="hidden lg:block absolute top-10 right-[40%] w-3 h-3 rounded-full bg-emerald-400 animate-confetti" style={{ animationDelay: "0s" }} />
        <div className="hidden lg:block absolute top-16 right-[42%] w-2 h-2 rounded-full bg-orange-400 animate-confetti" style={{ animationDelay: "0.5s" }} />
        <div className="hidden lg:block absolute top-12 right-[44%] w-2 h-2 rounded-full bg-violet-400 animate-confetti" style={{ animationDelay: "1s" }} />
        <div className="hidden lg:block absolute bottom-20 left-[39%] w-3 h-3 rounded-full bg-sky-400 animate-confetti" style={{ animationDelay: "1.5s" }} />
        <div className="hidden lg:block absolute bottom-16 left-[41%] w-2 h-2 rounded-full bg-pink-400 animate-confetti" style={{ animationDelay: "0.8s" }} />

        {/* Center Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto">

          {/* Animated emoji + badge */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <span className="text-2xl emoji-bounce">🚀</span>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-50 to-violet-50 text-brand-700 text-sm font-semibold border border-brand-200/50 shadow-sm">
              <Sparkles size={15} className="text-violet-500" />
              <span>خدمة أتمتة AI للأعمال الخليجية</span>
            </div>
            <span className="text-2xl emoji-bounce" style={{ animationDelay: "0.3s" }}>✨</span>
          </div>

          {/* Title with shimmer accent */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 animate-fade-in-up">
            موظف{" "}
            <span className="shimmer-text">AI ذكي</span>{" "}
            يشتغل لك
            <br />
            <span className="text-slate-700">على مدار الساعة</span>
          </h1>

          {/* Happy sub-headline */}
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
            <span className="text-xl">🎯</span>
            <p className="text-lg font-semibold text-brand-600">
              بدون تعب · بدون إجازات · بدون أخطاء
            </p>
            <span className="text-xl">💪</span>
          </div>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            ردود آلية على عملائك، تجميع وترتيب للعملاء المحتملين، إدارة المهام، ومتابعة ذكية — كل هذا يعمل مع أدواتك الحالية مثل واتساب وتيليجرام وCRM
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {[
              { emoji: "✅", text: "تركيب خلال 48 ساعة" },
              { emoji: "🔒", text: "بيانات آمنة 100%" },
              { emoji: "🎁", text: "استشارة مجانية" },
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-600 font-medium shadow-sm hover:shadow-md transition-shadow">
                <span>{badge.emoji}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <WhatsAppButton
              text="احجز استشارة مجانية 🎯"
              variant="primary"
              size="lg"
            />
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900 font-semibold px-6 py-4 rounded-full border-2 border-slate-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200 cursor-pointer group"
            >
              شاهد كيف يعمل
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Social proof mini strip */}
          <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <div className="flex -space-x-1 rtl:space-x-reverse">
                {["bg-emerald-400", "bg-sky-400", "bg-violet-400", "bg-orange-400"].map((c, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                    {["م", "ع", "أ", "س"][i]}
                  </div>
                ))}
              </div>
              <span className="font-semibold text-slate-700">+20 عميل سعيد</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200" />
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="text-sm text-slate-600 mr-1 font-medium">5.0 تقييم متوسط</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
