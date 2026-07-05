import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-cairo", display: "swap" });
export const metadata: Metadata = { title: "HermesAI — AI Agency Automation for Your Business", description: "We build custom AI agents and smart workflows that answer your customers instantly, qualify leads, and book appointments — around the clock." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" dir="ltr" className={cairo.variable}><body className={`${cairo.className} antialiased`}><ThemeProvider>{children}</ThemeProvider></body></html>; }
