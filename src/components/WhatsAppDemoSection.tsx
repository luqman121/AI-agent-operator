"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCheck, MessageCircle } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import TypingIndicator from "./demo/TypingIndicator";

interface ScriptMessage {
  sender: "customer" | "agent";
  text: string;
}

interface DisplayMessage extends ScriptMessage {
  id: string;
  timestamp: string;
}

const script: ScriptMessage[] = [
  { sender: "customer", text: "Hi, I want to know your pricing." },
  { sender: "agent", text: "Of course. I can help you with that. What type of business do you run?" },
  { sender: "customer", text: "I run a real estate agency." },
  { sender: "agent", text: "Great. Our AI agent can reply to leads, qualify customers, book appointments, and send follow-ups automatically." },
  { sender: "customer", text: "Can I see how it works?" },
  { sender: "agent", text: "Yes. You can book a free demo and see the AI agent handling real customer conversations." },
];

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

export default function WhatsAppDemoSection() {
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatAreaRef = useRef<HTMLDivElement>(null);

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

        for (let i = 0; i < script.length; i++) {
          const msg = script[i];
          await sleep(MESSAGE_DELAY);
          if (cancelled) return;

          if (msg.sender === "agent") {
            setIsTyping(true);
            await sleep(TYPING_DURATION);
            if (cancelled) return;
            setIsTyping(false);
          }

          setMessages((prev) => [
            ...prev,
            { ...msg, id: `demo-${i}`, timestamp: formatTime() },
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
  }, []);

  useEffect(() => {
    const area = chatAreaRef.current;
    if (area) {
      area.scrollTo({ top: area.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isTyping]);

  return (
    <section id="live-demo" className="py-10 md:py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-xl border border-slate-100 dark:border-slate-700 px-5 py-10 md:px-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          <ScrollReveal>
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 mb-6">
                <MessageCircle size={32} />
              </div>
              <p className="text-brand-600 font-semibold mb-2">See the AI Agent in Action</p>
              <h2 className="font-heading text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Your AI agent, working in real time.
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                A live WhatsApp-style demo showing how your AI employee replies, qualifies leads, and handles customer messages automatically.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex justify-center">
              <div className="relative mx-auto w-full max-w-[250px] md:max-w-[270px] animate-float-slow">
                {/* Soft floating shadow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[75%] h-6 rounded-full bg-slate-900/20 dark:bg-black/40 blur-xl animate-pulse" />

                {/* Phone frame */}
                <div className="relative rounded-[2.5rem] bg-[#1a1a1a] p-2 shadow-2xl ring-1 ring-white/10">
                  {/* Side buttons (decorative) */}
                  <div className="absolute -right-1 top-20 h-6 w-1 rounded-r bg-[#2a2a2a]" />
                  <div className="absolute -right-1 top-28 h-9 w-1 rounded-r bg-[#2a2a2a]" />
                  <div className="absolute -left-1 top-24 h-12 w-1 rounded-l bg-[#2a2a2a]" />

                  {/* Screen */}
                  <div className="relative overflow-hidden rounded-[2rem] bg-[#EFEAE2]">
                    {/* Dynamic island / notch */}
                    <div className="absolute left-1/2 top-1.5 z-30 -translate-x-1/2">
                      <div className="h-4 w-16 rounded-full bg-[#1a1a1a]" />
                    </div>

                    {/* WhatsApp header */}
                    <div className="relative z-20 flex items-center gap-2 bg-[#25D366] px-3 pb-2 pt-7 text-white shadow-sm">
                      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#128C7E] ring-2 ring-white/30">
                        <div className="flex h-full w-full items-center justify-center text-xs font-bold">
                          AI
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-[13px] font-semibold leading-tight">
                          Your AI Agent
                        </h3>
                        <p className="text-[11px] text-white/90">
                          {isTyping ? "typing…" : "online"}
                        </p>
                      </div>
                    </div>

                    {/* Chat area */}
                    <div
                      ref={chatAreaRef}
                      className="relative h-[340px] md:h-[380px] overflow-y-auto overflow-x-hidden bg-[#EFEAE2] px-2.5 py-3"
                    >
                      {/* WhatsApp wallpaper doodle pattern */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.06]"
                        style={{
                          backgroundImage: `url("/whatsapp-bg.svg")`,
                          backgroundSize: "220px 220px",
                        }}
                      />

                      {/* Messages */}
                      <div className="relative z-10 flex flex-col gap-1.5">
                        {messages.map((msg) => (
                          <div
                            key={msg.id}
                            className={`flex w-full animate-message-in ${
                              msg.sender === "customer" ? "justify-end" : "justify-start"
                            }`}
                          >
                            <div
                              className={`relative max-w-[85%] rounded-lg px-2.5 py-1.5 text-[12px] leading-relaxed shadow-sm ${
                                msg.sender === "customer"
                                  ? "bg-[#DCF8C6] text-slate-900 rounded-tr-none"
                                  : "bg-white text-slate-900 rounded-tl-none"
                              }`}
                            >
                              <p className="whitespace-pre-wrap">{msg.text}</p>
                              <div
                                className={`mt-0.5 flex items-center gap-1 text-[9px] text-slate-500 ${
                                  msg.sender === "customer" ? "justify-start" : "justify-end"
                                }`}
                              >
                                <span>{msg.timestamp}</span>
                                {msg.sender === "customer" && (
                                  <CheckCheck size={11} className="text-[#34B7F1]" />
                                )}
                              </div>
                            </div>
                          </div>
                        ))}

                        {isTyping && (
                          <div className="flex w-full justify-start">
                            <div className="max-w-[70%] rounded-lg rounded-tl-none bg-white px-1.5 py-1 shadow-sm">
                              <TypingIndicator />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
