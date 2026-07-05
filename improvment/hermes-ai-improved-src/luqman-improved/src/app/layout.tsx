import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hermes AI — موظف AI ذكي لأعمالك",
  description: "نبني لك موظف AI ذكي يخدم عملاءك، يرد تلقائياً، يجمع العملاء المحتملين، ويتابع المبيعات. يعمل مع واتساب وتيليجرام والبريد الإلكتروني وGoogle Sheets وCRM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root { --font-cairo: 'Cairo', sans-serif; }
          body { font-family: 'Cairo', system-ui, -apple-system, sans-serif; }
        `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
