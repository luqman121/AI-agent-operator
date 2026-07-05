"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  text?: string;
  phoneNumber?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function WhatsAppButton({
  text = "احجز استشارة مجانية",
  phoneNumber = "#",
  variant = "primary",
  size = "md",
  className = "",
}: WhatsAppButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer";

  const variantClasses = {
    primary:
      "bg-cta text-white hover:bg-cta-hover shadow-lg hover:shadow-xl hover:scale-[1.02]",
    secondary:
      "bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:scale-[1.02]",
    outline:
      "bg-transparent text-slate-900 border-2 border-slate-900 hover:bg-slate-900 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={phoneNumber}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={size === "lg" ? 24 : size === "md" ? 20 : 16} />
      {text}
    </a>
  );
}
