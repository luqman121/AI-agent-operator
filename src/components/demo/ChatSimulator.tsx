"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Camera,
  CheckCheck,
  MoreVertical,
  Paperclip,
  Phone,
  Send,
  Smile,
  Video,
} from "lucide-react";
import type { BusinessType } from "@/app/api/demo-chat/route";
import TypingIndicator from "./TypingIndicator";

interface Message {
  id: string;
  role: "ai" | "user";
  content: string;
  timestamp: string;
  status?: "sent" | "delivered" | "read";
}

interface ChatSimulatorProps {
  businessType: BusinessType;
}

interface WebhookHistoryMessage {
  role: "ai" | "user";
  content: string;
}

const businessNames: Record<BusinessType, string> = {
  "real-estate": "عقارات الخليج",
  restaurant: "مطعم الذواق",
  clinic: "عيادة الصحة",
  clothing: "بوتيك الأناقة",
  salon: "صالون الجمال",
  general: "نشاطك التجاري",
};

const businessInitials: Record<BusinessType, string> = {
  "real-estate": "ع",
  restaurant: "م",
  clinic: "ص",
  clothing: "أ",
  salon: "ج",
  general: "ن",
};

const greetings: Record<BusinessType, string> = {
  "real-estate":
    "مرحبًا! أنا مساعدك الذكي للعقارات. كيف أقدر أساعدك اليوم؟",
  restaurant: "أهلاً وسهلاً! أنا مساعد الحجوزات. تبي تحجز طاولة أو طلب منيو؟",
  clinic:
    "مرحبًا بك في عيادة الصحة. أنا مساعد الحجوزات. وش الخدمة اللي تحتاجها؟",
  clothing: "أهلاً! أنا مساعدك في بوتيك الأناقة. تدور ملابس رجالية أو نسائية؟",
  salon: "مرحبًا! أنا مساعدة صالون الجمال. تبي تحجزين موعد اليوم؟",
  general:
    "أهلاً! أنا موظفك الذكي على واتساب. كيف أقدر أساعدك في نشاطك؟",
};

function generateId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function formatTime(date = new Date()) {
  return date.toLocaleTimeString("ar-SA", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default function ChatSimulator({ businessType }: ChatSimulatorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => generateId());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const businessName = businessNames[businessType];
  const businessInitial = businessInitials[businessType];

  useEffect(() => {
    setMessages([]);
    setInput("");
    setIsTyping(true);

    const timer = setTimeout(() => {
      setMessages([
        {
          id: generateId(),
          role: "ai",
          content: greetings[businessType],
          timestamp: formatTime(),
        },
      ]);
      setIsTyping(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [businessType]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMessage: Message = {
      id: generateId(),
      role: "user",
      content: text,
      timestamp: formatTime(),
      status: "read",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const outgoingMessages: WebhookHistoryMessage[] = [
      ...messages,
      userMessage,
    ].map(({ role, content }) => ({ role, content }));

    const requestPayload = {
      businessType,
      message: text,
      sessionId,
      language: "ar",
      messages: outgoingMessages,
    };

    try {
      const response = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestPayload),
      });

      const data = await response.json().catch(() => null);
      const replyText = typeof data?.reply === "string" ? data.reply : "";

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "ai",
            content: replyText || greetings[businessType],
            timestamp: formatTime(),
          },
        ]);
        setIsTyping(false);
      }, 1200);
    } catch {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "ai",
            content: greetings[businessType],
            timestamp: formatTime(),
          },
        ]);
        setIsTyping(false);
      }, 1200);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

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
              <button className="rounded-full p-1 hover:bg-white/10 transition-colors">
                <ArrowRight size={22} />
              </button>
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
                  {isTyping ? "يكتب..." : "متصل الآن"}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button className="rounded-full p-1.5 hover:bg-white/10 transition-colors">
                  <Video size={20} />
                </button>
                <button className="rounded-full p-1.5 hover:bg-white/10 transition-colors">
                  <Phone size={20} />
                </button>
                <button className="rounded-full p-1.5 hover:bg-white/10 transition-colors">
                  <MoreVertical size={20} />
                </button>
              </div>
            </div>

            {/* Chat area */}
            <div className="relative h-[560px] md:h-[620px] overflow-y-auto overflow-x-hidden bg-[#EFEAE2] px-3 py-4">
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
                {messages.map((msg, index) => (
                  <div
                    key={msg.id}
                    className={`flex w-full animate-message-in ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div
                      className={`relative max-w-[80%] rounded-lg px-3 py-2 text-[14px] leading-relaxed shadow-sm ${
                        msg.role === "user"
                          ? "bg-[#DCF8C6] text-slate-900 rounded-tr-none"
                          : "bg-white text-slate-900 rounded-tl-none"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.content}</p>
                      <div
                        className={`mt-1 flex items-center gap-1 text-[10px] text-slate-500 ${
                          msg.role === "user" ? "justify-start" : "justify-end"
                        }`}
                      >
                        <span>{msg.timestamp}</span>
                        {msg.role === "user" && (
                          <CheckCheck
                            size={14}
                            className={
                              msg.status === "read"
                                ? "text-[#34B7F1]"
                                : "text-slate-400"
                            }
                          />
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
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input area */}
            <div className="relative z-20 flex items-end gap-1 bg-[#F0F2F5] px-2 py-2">
              <button className="rounded-full p-2 text-slate-500 hover:bg-slate-200 transition-colors">
                <Smile size={22} />
              </button>
              <button className="rounded-full p-2 text-slate-500 hover:bg-slate-200 transition-colors">
                <Paperclip size={22} />
              </button>
              <div className="flex-1">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="اكتب رسالة..."
                  className="w-full rounded-full bg-white px-4 py-2 text-right text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50"
                  dir="rtl"
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-all hover:bg-[#128C7E] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {input.trim() ? <Send size={18} /> : <Camera size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
