"use client";

import { MessageCircle, Star } from "lucide-react";

interface Props { name: string; role: string; company: string; quote: string; rating: number; }

function getInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");
}

export default function TestimonialCard({ name, role, company, quote, rating }: Props) {
  return <div className="relative h-full"><div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-gradient-to-t from-purple-500 to-violet-400 rounded-b-2xl" /><div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg p-6 text-center h-full"><div className="mx-auto mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white font-semibold text-lg" aria-hidden="true">{getInitials(name)}</div><h4 className="font-bold mb-1">{name}</h4><p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{role} {company}</p><div className="flex items-center justify-center gap-1 mb-4" aria-label={`تقييم ${rating} من ٥`}>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"} />)}</div><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">“{quote}”</p><div className="mt-3 flex items-center justify-center gap-1 text-[11px] text-slate-400 dark:text-slate-500"><MessageCircle size={12} className="text-[#25D366]" /><span>تم التحقق عبر واتساب بزنس</span></div></div></div>;
}
