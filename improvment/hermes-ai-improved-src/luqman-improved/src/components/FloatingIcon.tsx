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
  size = 22,
  color = "text-slate-700",
  bgColor = "bg-white",
}: FloatingIconProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl shadow-lg border border-white/80 ${bgColor} ${animationClass} ${className} transition-transform hover:scale-110 cursor-default`}
      style={{ width: 54, height: 54, backdropFilter: "blur(8px)" }}
    >
      <Icon size={size} className={color} />
    </div>
  );
}
