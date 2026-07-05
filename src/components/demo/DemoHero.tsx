"use client";

import {
  Building2,
  ChefHat,
  Scissors,
  Shirt,
  Sparkles,
  Stethoscope,
  Store,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BusinessType } from "@/app/api/demo-chat/route";

export interface BusinessOption {
  id: BusinessType;
  label: string;
  icon: React.ElementType;
}

const businesses: BusinessOption[] = [
  { id: "real-estate", label: "Real Estate", icon: Building2 },
  { id: "restaurant", label: "Restaurant", icon: ChefHat },
  { id: "clinic", label: "Clinic", icon: Stethoscope },
  { id: "clothing", label: "Clothing Store", icon: Shirt },
  { id: "salon", label: "Salon", icon: Scissors },
  { id: "general", label: "General Service", icon: Store },
];

interface DemoHeroProps {
  selected?: BusinessType | null;
  onSelect: (business: BusinessType) => void;
}

export default function DemoHero({ selected, onSelect }: DemoHeroProps) {
  return (
    <section className="relative pt-28 md:pt-32 pb-10 md:pb-16 px-4 overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Interactive demo</span>
            </div>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-5">
              Try the AI agent on your business
            </h1>
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Pick the business type that matches yours and watch the AI agent
              reply to customers instantly, book appointments, and qualify
              leads, right inside WhatsApp.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {businesses.map((business) => {
              const isActive = selected === business.id;
              return (
                <button
                  key={business.id}
                  onClick={() => onSelect(business.id)}
                  className={`group relative flex flex-col items-center justify-center gap-3 rounded-2xl border p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    isActive
                      ? "bg-cta text-white border-cta shadow-lg scale-[1.02]"
                      : "bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-cta/40 dark:hover:border-cta/40"
                  }`}
                >
                  <div
                    className={`rounded-2xl p-3 transition-colors ${
                      isActive
                        ? "bg-white/20"
                        : "bg-brand-50 dark:bg-brand-900/30 group-hover:bg-cta/10"
                    }`}
                  >
                    <business.icon
                      size={28}
                      className={
                        isActive
                          ? "text-white"
                          : "text-brand-500 group-hover:text-cta"
                      }
                    />
                  </div>
                  <span className="font-semibold text-sm md:text-base">
                    {business.label}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export { businesses };
