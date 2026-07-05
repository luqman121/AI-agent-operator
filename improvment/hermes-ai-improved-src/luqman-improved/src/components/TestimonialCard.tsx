"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  isPlaceholder?: boolean;
  emoji?: string;
  country?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating,
  isPlaceholder = false,
  emoji = "😊",
  country = "🌍",
}: TestimonialCardProps) {
  return (
    <div className="relative group">
      {/* Envelope shadow behind */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[88%] h-14 bg-gradient-to-br from-brand-400 to-violet-500 rounded-b-3xl shadow-lg" />

      {/* Main Card */}
      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-lg p-7 text-center hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 shine-card overflow-hidden">

        {/* Placeholder badge */}
        {isPlaceholder && (
          <div className="absolute top-3 left-3 text-xs text-slate-300 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
            قريباً
          </div>
        )}

        {/* Country flag top right */}
        <div className="absolute top-3 right-3 text-xl">{country}</div>

        {/* Quote icon */}
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
            <Quote size={18} className="text-brand-400" />
          </div>
        </div>

        {/* Quote text */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 italic">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Rating */}
        <div className="flex items-center justify-center gap-0.5 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={15}
              className={i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"}
            />
          ))}
        </div>

        {/* Avatar with emoji */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-400 to-violet-500 flex items-center justify-center text-2xl border-2 border-white shadow-md">
            {emoji}
          </div>
          <div className="text-right">
            <p className="font-bold text-slate-900 text-sm">{name}</p>
            <p className="text-xs text-slate-500">{role} · {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
