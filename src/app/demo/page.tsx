import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DemoClient from "@/components/demo/DemoClient";

export const metadata: Metadata = {
  title: "Try the AI Agent Demo | HermesAI",
  description:
    "Try a live AI agent on your type of business: real estate, restaurant, clinic, salon, clothing store, or general service.",
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
