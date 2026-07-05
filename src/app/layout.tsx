import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-cairo", display: "swap" });
export const metadata: Metadata = { title: "HermesAI موظف واتساب ذكي لمشروعك", description: "موظف ذكي يرد على عملائك في واتساب، يؤهّل العملاء المحتملين، ويحجز المواعيد على مدار الساعة." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl" className={cairo.variable}><body className={`${cairo.className} antialiased`}><ThemeProvider>{children}</ThemeProvider></body></html>; }
