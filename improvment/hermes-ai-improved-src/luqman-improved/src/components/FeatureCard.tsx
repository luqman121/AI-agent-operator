"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  emoji?: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor?: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  emoji = "✨",
  title,
  description,
  color,
  bgColor,
  borderColor = "border-slate-100",
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border ${borderColor} p-7 hover:shadow-xl transition-all duration-300 group glow-card shine-card ${className}`}
    >
      <div className="flex items-center justify-between mb-5">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bgColor} group-hover:scale-110 transition-transform duration-300`}>
          <Icon size={24} className={color} />
        </div>
        <span className="text-2xl group-hover:animate-bounce-soft">{emoji}</span>
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
