"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  bgColor,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 cursor-default h-full flex flex-col ${className}`}
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${bgColor} mb-4 shrink-0`}
      >
        <Icon size={24} className={color} />
      </div>
      <h3 className="font-bold text-base md:text-lg text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
