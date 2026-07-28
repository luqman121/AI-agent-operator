import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-cairo", display: "swap" });
export const metadata: Metadata = { title: "Opsivo | Personal AI Agent for Your Day", description: "A private AI agent configured around your needs to organize tasks, remember appointments, draft messages, summarize information, and follow up through Telegram or your workflow." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" dir="ltr" className={cairo.variable}><body className={`${cairo.className} antialiased`}><ThemeProvider>{children}</ThemeProvider></body></html>; }
