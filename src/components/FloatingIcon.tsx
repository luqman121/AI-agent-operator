"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface FloatingIconProps {
  icon: LucideIcon;
  className?: string;
  animationClass?: string;
  size?: number;
  color?: string;
  bgColor?: string;
}

export default function FloatingIcon({
  icon: Icon,
  className = "",
  animationClass = "animate-float",
  size = 24,
  color = "text-slate-700",
  bgColor = "bg-white",
}: FloatingIconProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 w-10 h-10 md:w-14 md:h-14 ${bgColor} ${animationClass} ${className} hover:opacity-100 hover:scale-105 transition-all duration-300`}
    >
      <Icon size={size} className={color} />
    </div>
  );
}
