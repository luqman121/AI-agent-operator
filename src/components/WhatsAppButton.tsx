"use client";

import { MessageCircle } from "lucide-react";

interface Props { text?: string; phoneNumber?: string; variant?: "primary" | "secondary" | "outline"; size?: "sm" | "md" | "lg"; className?: string; }

export default function WhatsAppButton({ text = "احجز عرضًا مجانيًا", phoneNumber = "https://calendly.com/luqmanalhinai700/15-min-meeting", variant = "primary", size = "md", className = "" }: Props) {
  const variants = { primary: "bg-cta text-white hover:bg-cta-hover shadow-lg hover:shadow-xl hover:scale-[1.02]", secondary: "bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700", outline: "bg-transparent border-2 border-slate-900 dark:border-slate-300" };
  const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg" };
  return <a href={phoneNumber} className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}><MessageCircle size={size === "lg" ? 24 : size === "md" ? 20 : 16} />{text}</a>;
}
