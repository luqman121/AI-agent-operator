"use client";

interface Props { industry: string; outcome: string; }

export default function TestimonialCard({ industry, outcome }: Props) {
  return <div className="relative h-full"><div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-gradient-to-t from-purple-500 to-violet-400 rounded-b-2xl" /><div className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg p-6 text-center h-full flex flex-col"><p className="text-brand-600 dark:text-brand-400 font-semibold text-sm mb-3">Example outcome, {industry} client</p><p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">{outcome}</p><p className="mt-4 text-xs italic text-slate-400 dark:text-slate-500">Illustrative example based on typical results. Individual results vary.</p></div></div>;
}
