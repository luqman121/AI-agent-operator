import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoClient from "@/components/demo/DemoClient";

export const metadata: Metadata = {
  title: "جرّب موظف الواتساب الذكي | HermesAI",
  description:
    "جرب موظف واتساب ذكي مباشرة على نشاطك التجاري. عقار، مطعم، عيادة، صالون، محل ملابس، أو خدمة عامة.",
};

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <DemoClient />
      <Footer />
    </main>
  );
}
