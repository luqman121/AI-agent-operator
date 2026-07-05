"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  CheckCheck,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import type { BusinessType } from "@/app/api/demo-chat/route";
import TypingIndicator from "./TypingIndicator";

interface ScriptMessage {
  sender: "customer" | "agent";
  text: string;
  delay?: number;
}

interface DisplayMessage extends ScriptMessage {
  id: string;
  timestamp: string;
}

interface ChatSimulatorProps {
  businessType: BusinessType;
}

const businessNames: Record<BusinessType, string> = {
  "real-estate": "Prime Properties",
  restaurant: "Taste Restaurant",
  clinic: "Health Clinic",
  clothing: "Elegance Boutique",
  salon: "Beauty Salon",
  general: "Your Business",
};

const businessInitials: Record<BusinessType, string> = {
  "real-estate": "P",
  restaurant: "T",
  clinic: "H",
  clothing: "E",
  salon: "B",
  general: "Y",
};

const demoConversations: Record<BusinessType, ScriptMessage[]> = {
  "real-estate": [
    { sender: "customer", text: "Hi, I'm looking for a 2-bedroom apartment." },
    { sender: "agent", text: "Sure. What location and monthly budget do you prefer?" },
    { sender: "customer", text: "Downtown, around $2,000." },
    { sender: "agent", text: "I found a few matching options. Would you like me to send the best available listings?" },
    { sender: "customer", text: "Yes." },
    { sender: "agent", text: "Great. I'll send the top matches and help you book a viewing." },
  ],
  restaurant: [
    { sender: "customer", text: "Hi, do you have a table for two tonight?" },
    { sender: "agent", text: "Yes, we have availability at 7:30 PM and 8:15 PM. Which time works best?" },
    { sender: "customer", text: "7:30 PM." },
    { sender: "agent", text: "Perfect. Can I have your name for the booking?" },
    { sender: "customer", text: "Sarah." },
    { sender: "agent", text: "Done. Your table for two is booked tonight at 7:30 PM." },
  ],
  clinic: [
    { sender: "customer", text: "Hi, I want to book an appointment." },
    { sender: "agent", text: "Of course. Which service do you need?" },
    { sender: "customer", text: "Dental checkup." },
    { sender: "agent", text: "We have openings tomorrow at 10:00 AM and 4:30 PM." },
    { sender: "customer", text: "4:30 PM works." },
    { sender: "agent", text: "Confirmed. Your dental checkup is booked for tomorrow at 4:30 PM." },
  ],
  clothing: [
    { sender: "customer", text: "Hi, do you have women's dresses?" },
    { sender: "agent", text: "Yes, we do. Are you looking for casual, evening, or workwear dresses?" },
    { sender: "customer", text: "Evening dresses." },
    { sender: "agent", text: "Great. What size are you looking for?" },
    { sender: "customer", text: "Medium." },
    { sender: "agent", text: "We have several medium evening dresses available. I can show you the best options now." },
  ],
  salon: [
    { sender: "customer", text: "Hi, can I book a haircut?" },
    { sender: "agent", text: "Yes. Would you like a haircut only or haircut with styling?" },
    { sender: "customer", text: "Haircut with styling." },
    { sender: "agent", text: "Available slots today are 3:00 PM and 6:00 PM." },
    { sender: "customer", text: "6:00 PM please." },
    { sender: "agent", text: "Confirmed. Your haircut with styling is booked for 6:00 PM today." },
  ],
  general: [
    { sender: "customer", text: "Hi, I need help with your service." },
    { sender: "agent", text: "Sure. What type of service are you looking for?" },
    { sender: "customer", text: "I want to know the pricing." },
    { sender: "agent", text: "I can help with that. Pricing depends on the service type and urgency." },
    { sender: "customer", text: "Can someone contact me?" },
    { sender: "agent", text: "Absolutely. I'll collect your details and have the team contact you shortly." },
  ],
};

const MESSAGE_DELAY = 1000;
const TYPING_DURATION = 1300;
const REPLAY_PAUSE = 7000;

function formatTime(date = new Date()) {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default function ChatSimulator({ businessType }: ChatSimulatorProps) {
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const businessName = businessNames[businessType];
  const businessInitial = businessInitials[businessType];

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(setTimeout(resolve, ms));
      });

    const play = async () => {
      while (!cancelled) {
        setMessages([]);
        setIsTyping(false);

        const script = demoConversations[businessType];
        for (let i = 0; i < script.length; i++) {
          const msg = script[i];
          await sleep(msg.delay ?? MESSAGE_DELAY);
          if (cancelled) return;

          if (msg.sender === "agent") {
            setIsTyping(true);
            await sleep(TYPING_DURATION);
            if (cancelled) return;
            setIsTyping(false);
          }

          setMessages((prev) => [
            ...prev,
            { ...msg, id: `${businessType}-${i}`, timestamp: formatTime() },
          ]);
        }

        await sleep(REPLAY_PAUSE);
      }
    };

    play();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [businessType]);

  useEffect(() => {
    const area = chatAreaRef.current;
    if (area) {
      area.scrollTo({ top: area.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <section className="py-6 md:py-10 px-4">
      <div className="mx-auto w-full max-w-[330px] md:max-w-[360px]">
        {/* iPhone 17 Pro Max frame (~19.5:9) */}
        <div className="relative rounded-[3rem] bg-[#1a1a1a] p-2.5 shadow-2xl ring-1 ring-white/10">
          {/* Side buttons (decorative) */}
          <div className="absolute -right-1 top-24 h-8 w-1 rounded-r bg-[#2a2a2a]" />
          <div className="absolute -right-1 top-36 h-12 w-1 rounded-r bg-[#2a2a2a]" />
          <div className="absolute -left-1 top-28 h-16 w-1 rounded-l bg-[#2a2a2a]" />

          {/* Screen */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#EFEAE2]">
            {/* Dynamic island / notch */}
            <div className="absolute left-1/2 top-2 z-30 -translate-x-1/2">
              <div className="h-6 w-24 rounded-full bg-[#1a1a1a]" />
            </div>

            {/* WhatsApp header */}
            <div className="relative z-20 flex items-center gap-2 bg-[#25D366] px-3 pb-2 pt-10 text-white shadow-sm">
              <span className="rounded-full p-1">
                <ArrowLeft size={22} />
              </span>
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-[#128C7E] ring-2 ring-white/30">
                <div className="flex h-full w-full items-center justify-center text-lg font-bold">
                  {businessInitial}
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-[15px] font-semibold leading-tight">
                  {businessName}
                </h3>
                <p className="text-[12px] text-white/90">
                  {isTyping ? "typing…" : "online"}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <span className="rounded-full p-1.5">
                  <Video size={20} />
                </span>
                <span className="rounded-full p-1.5">
                  <Phone size={20} />
                </span>
                <span className="rounded-full p-1.5">
                  <MoreVertical size={20} />
                </span>
              </div>
            </div>

            {/* Chat area */}
            <div
              ref={chatAreaRef}
              className="relative h-[616px] md:h-[676px] overflow-y-auto overflow-x-hidden bg-[#EFEAE2] px-3 py-4"
            >
              {/* WhatsApp wallpaper doodle pattern */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `url("/whatsapp-bg.svg")`,
                  backgroundSize: "280px 280px",
                }}
              />

              {/* Messages */}
              <div className="relative z-10 flex flex-col gap-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex w-full animate-message-in ${
                      msg.sender === "customer" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`relative max-w-[80%] rounded-lg px-3 py-2 text-[14px] leading-relaxed shadow-sm ${
                        msg.sender === "customer"
                          ? "bg-[#DCF8C6] text-slate-900 rounded-tr-none"
                          : "bg-white text-slate-900 rounded-tl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      <div
                        className={`mt-1 flex items-center gap-1 text-[10px] text-slate-500 ${
                          msg.sender === "customer" ? "justify-start" : "justify-end"
                        }`}
                      >
                        <span>{msg.timestamp}</span>
                        {msg.sender === "customer" && (
                          <CheckCheck size={14} className="text-[#34B7F1]" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex w-full justify-start">
                    <div className="max-w-[70%] rounded-lg rounded-tl-none bg-white px-2 py-1.5 shadow-sm">
                      <TypingIndicator />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
