import type { Metadata } from "next";
import Script from "next/script";
import { Cairo } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";
const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-cairo", display: "swap" });
export const metadata: Metadata = { title: "Opsivo | Personal AI Agent for Your Day", description: "A private AI agent configured around your needs to organize tasks, remember appointments, draft messages, summarize information, and follow up through Telegram or your workflow." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" className={cairo.variable}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1427293712787112');
fbq('track', 'PageView');`}
        </Script>
      </head>
      <body className={`${cairo.className} antialiased`}>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1427293712787112&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
