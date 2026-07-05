"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface IntegrationCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
  bgColor: string;
  rotation?: number;
  animationDelay?: number;
  emoji?: string;
}

export default function IntegrationCard({
  icon: Icon,
  name,
  description,
  color,
  bgColor,
  rotation = 0,
  animationDelay = 0,
  emoji = "✨",
}: IntegrationCardProps) {
  return (
    <div
      className={`relative flex flex-col items-center text-center p-4 rounded-2xl ${bgColor} border border-white/80 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-default group`}
      style={{
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-3 group-hover:scale-110 transition-transform`}>
        <Icon size={24} className={color} />
      </div>
      <span className="text-xs font-bold text-slate-800 leading-tight mb-1">{name}</span>
      <span className="text-xs text-slate-500">{description}</span>
      <span className="absolute -top-1.5 -right-1.5 text-sm opacity-0 group-hover:opacity-100 transition-opacity">{emoji}</span>
    </div>
  );
}
