"use client";

import { AlarmClock, CalendarX, Clock, Megaphone, MessageSquare, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const problems = [
  { icon: Clock, title: "Messages arrive after hours and leads go cold", description: "A customer messages you at 10 PM. You see it at 9 AM. But they already booked with someone else at 10:30.", color: "text-rose-500", bgColor: "bg-rose-50" },
  { icon: MessageSquare, title: "Your team answers the same questions every day", description: "How much is it? Where are you located? Is it in stock? Hours of your team's time lost to repetitive questions.", color: "text-amber-500", bgColor: "bg-amber-50" },
  { icon: AlarmClock, title: "Slow replies kill your sales", description: "Every minute you wait makes it easier for a competitor to win the sale first.", color: "text-red-500", bgColor: "bg-red-50" },
  { icon: Users, title: "Your team is busy answering, not selling", description: "Your best people spend their day handling simple enquiries instead of focusing on closing deals.", color: "text-violet-500", bgColor: "bg-violet-50" },
  { icon: CalendarX, title: "Appointments get lost between messages", description: "Manual booking over WhatsApp means forgotten appointments, double bookings, and lost revenue.", color: "text-sky-500", bgColor: "bg-sky-50" },
  { icon: Megaphone, title: "You pay for ads, then lose leads in the replies", description: "You spend on ads to bring in leads, then lose them because nobody was available to respond in time.", color: "text-orange-500", bgColor: "bg-orange-50" },
];

export default function ProblemSection() {
  return (
    <section id="product" className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal><div className="text-center mb-8 md:mb-12"><p className="text-rose-500 font-semibold mb-2">The Real Problem</p><h2 className="font-heading text-2xl md:text-4xl font-bold mb-3">The Real Cost of a Slow Reply</h2><p className="text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">78% of customers buy from the first business that responds.<sup>1</sup> If a lead has to wait even a few hours, most of them have already messaged your competitor, and 67% of people who don&apos;t get a fast reply never come back.<sup>2</sup> That&apos;s not a staffing problem. It&apos;s a speed problem, and speed is exactly what AI fixes.</p></div></ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, index) => <ScrollReveal key={problem.title} delay={index * 0.06}><div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow h-full"><div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${problem.bgColor} mb-4`}><problem.icon size={24} className={problem.color} /></div><h3 className="font-bold text-base md:text-lg mb-2">{problem.title}</h3><p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{problem.description}</p></div></ScrollReveal>)}
        </div>
        <ScrollReveal><div className="mt-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-5 md:p-6 text-xs text-slate-400 dark:text-slate-500 leading-relaxed space-y-1"><p>1. Based on lead response time industry benchmarks (e.g. Harvard Business Review, InsideSales.com studies on lead response speed).</p><p>2. Based on customer service responsiveness research (e.g. Toister Performance Solutions, HubSpot customer service benchmarks).</p></div></ScrollReveal>
      </div>
    </section>
  );
}
