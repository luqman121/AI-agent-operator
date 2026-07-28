import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  FileText,
  Lock,
  Mail,
  MessageCircle,
  MessagesSquare,
  Moon,
  PlayCircle,
  Send,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Sun,
  UserRound,
  UsersRound,
  Zap,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const whatsappHref = `https://wa.link/0xrd3x?text=${encodeURIComponent(
  "Hi, I want to try the Opsivo personal AI agent.",
)}`;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Use cases", href: "#use-cases" },
  { label: "Plans", href: "#plans" },
  { label: "FAQ", href: "#faq" },
  { label: "WhatsApp", href: whatsappHref },
];

const painCards = [
  {
    title: "Too many appointments",
    copy: "Work, family, and personal tasks all need clear follow-up.",
    Icon: CalendarDays,
  },
  {
    title: "Messages and follow-ups",
    copy: "Small details can steal focus and time throughout the day.",
    Icon: MessagesSquare,
  },
  {
    title: "Scattered information",
    copy: "Notes and postponed tasks are hard to keep in one place.",
    Icon: FileText,
  },
];

const comparison = [
  {
    title: "A regular AI chat",
    tone: "muted",
    Icon: MessageCircle,
    points: [
      "You explain your situation again every time.",
      "You usually receive one answer and then continue alone.",
      "You must open the app and ask for help manually.",
      "It is not fully tailored to the way your day or work runs.",
    ],
  },
  {
    title: "Your private Opsivo agent",
    tone: "brand",
    Icon: Bot,
    points: [
      "Configured around your real needs.",
      "Can use approved information and preferences, depending on the service setup.",
      "Helps you plan, follow up, write, summarize, and remember.",
      "Works with you through Telegram or your preferred workflow.",
      "Can include advanced integrations when your plan requires them.",
    ],
  },
];

const dayFlow = [
  {
    title: "Morning",
    copy: "Prepares a clear brief of your schedule, tasks, and the key items you need to handle.",
    Icon: Sun,
  },
  {
    title: "During work",
    copy: "Helps prioritize tasks, draft messages, summarize information, and prepare replies.",
    Icon: BriefcaseBusiness,
  },
  {
    title: "After work",
    copy: "Reminds you about family appointments, shopping, personal tasks, and anything you do not want to forget.",
    Icon: ShoppingBag,
  },
  {
    title: "End of day",
    copy: "Reviews what was completed and organizes what needs follow-up tomorrow.",
    Icon: Moon,
  },
];

const useCases = [
  {
    title: "For busy professionals",
    Icon: UserRound,
    points: [
      "Organize work tasks.",
      "Draft professional messages.",
      "Summarize files and information.",
      "Track appointments and postponed tasks.",
      "Prepare clear plans for the day or week.",
    ],
  },
  {
    title: "For parents",
    Icon: UsersRound,
    points: [
      "Organize family and children’s appointments.",
      "Manage shopping lists.",
      "Plan trips and occasions.",
      "Remember household needs and tasks.",
      "Balance home and work responsibilities.",
    ],
  },
  {
    title: "For business owners",
    Icon: BriefcaseBusiness,
    points: [
      "Track tasks and customers.",
      "Prepare replies and summaries.",
      "Assist with research and content.",
      "Organize business information.",
      "Connect with email, calendars, and work tools depending on the plan.",
    ],
  },
];

const setupSteps = [
  {
    title: "Tell us what you need",
    copy: "We identify the tasks you want the agent to help with and how you work day to day.",
    Icon: Send,
  },
  {
    title: "We configure the agent for you",
    copy: "Its style, tasks, instructions, and permission limits are prepared around your needs.",
    Icon: Bot,
  },
  {
    title: "We connect the right tools",
    copy: "Telegram, calendars, email, files, and other tools can be connected depending on your plan and requirements.",
    Icon: Zap,
  },
  {
    title: "You test it before relying on it",
    copy: "You try how it works, then we refine its tone, behavior, and details until it feels right.",
    Icon: CircleCheck,
  },
  {
    title: "You start using it every day",
    copy: "You speak to it naturally and add the tasks or information you want help with.",
    Icon: CalendarDays,
  },
];

const plans = [
  {
    title: "Free trial",
    copy: "A guided preview of how the agent works.",
    cta: "Try it for free",
    highlighted: false,
    points: [
      "Examples for planning, writing, and organization.",
      "No payment card required.",
      "Your private tools are not connected during the trial.",
    ],
  },
  {
    title: "Personal agent",
    copy: "Your own agent through Telegram.",
    cta: "Request your personal agent",
    highlighted: true,
    points: [
      "Configured around your needs.",
      "Task and appointment organization.",
      "Writing, summarization, and research.",
      "Custom response style and behavior.",
      "Reminder and follow-up options depending on setup.",
    ],
  },
  {
    title: "Advanced agent",
    copy: "Everything in the personal agent, with more integrations.",
    cta: "Discuss your needs",
    highlighted: false,
    points: [
      "Calendar, email, and file connections.",
      "Daily or weekly summaries.",
      "Custom actions and integrations.",
      "User approval before sensitive actions.",
    ],
  },
  {
    title: "Business agent",
    copy: "A custom setup for your company.",
    cta: "Request a custom quote",
    highlighted: false,
    points: [
      "Private business knowledge base.",
      "Operations or customer support assistance.",
      "Integrations with the tools your team uses.",
      "Clear permissions and approval flows.",
      "Optional reports and recurring follow-up.",
    ],
  },
];

const safetyPoints = [
  "You decide which tasks the agent can help with.",
  "Sensitive actions are not executed without your approval.",
  "Any permission or integration can be limited or removed depending on the service setup.",
  "The agent only needs access to the tools you approve, not everything you use.",
  "Each customer and configuration is handled separately.",
];

const demoSteps = [
  {
    title: "The user sends a realistic request",
    copy: "For example, organizing a workday with a family appointment and shopping errands.",
    Icon: Send,
  },
  {
    title: "The agent organizes the details",
    copy: "It separates appointments, priorities, and next steps.",
    Icon: CalendarDays,
  },
  {
    title: "It prepares a useful result",
    copy: "A plan, message, or clear summary that can be used immediately.",
    Icon: Mail,
  },
  {
    title: "It follows up within permissions",
    copy: "Reminders and follow-ups can be configured while sensitive approvals stay with you.",
    Icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What is an intelligent agent?",
    answer:
      "It is a personal assistant configured around your needs. You can talk to it through Telegram or the agreed workflow so it can help you organize tasks, plan, write, summarize, and follow up.",
  },
  {
    question: "Is it the same as ChatGPT?",
    answer:
      "No. A general chat gives answers. An Opsivo agent is configured for your specific tasks, tone, permissions, and workflows so it can support you repeatedly in a more practical way.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "No. We prepare the setup with you. You only need to explain what you want the agent to help with, then use it naturally.",
  },
  {
    question: "Can it remind me about appointments?",
    answer:
      "Yes, reminders and follow-ups can be configured depending on your plan, tools, and the permissions you approve.",
  },
  {
    question: "Can it connect to my calendar or email?",
    answer:
      "Yes. Calendar, email, files, and other integrations can be added in advanced or business setups after approval and configuration.",
  },
  {
    question: "Will it take actions without my approval?",
    answer:
      "No sensitive actions should be automated without your approval. Permission boundaries are defined during setup.",
  },
  {
    question: "Does it store my information?",
    answer:
      "Only the information required for the agreed service setup should be used, and permissions can be limited. Sensitive details are handled according to the configuration approved with you.",
  },
  {
    question: "Is the free trial a complete private agent?",
    answer:
      "No. The free trial is a guided demonstration of how the agent works. Private tools and integrations are not connected during the trial.",
  },
  {
    question: "How do I start?",
    answer:
      "Start with the free trial or contact us on WhatsApp. We will understand your needs and recommend the right setup.",
  },
];

function SectionHeader({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-brand-500">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{copy}</p> : null}
    </div>
  );
}

function PrimaryButton({ children, href = whatsappHref }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-black text-white shadow-xl shadow-orange-500/25 transition hover:-translate-y-0.5 hover:bg-orange-600 md:px-7 md:py-4 md:text-base"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <MessageCircle size={18} />
      {children}
    </a>
  );
}

function SecondaryButton({ children, href = whatsappHref }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-black text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-emerald-600 md:px-7 md:py-4 md:text-base"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <MessageCircle size={18} />
      {children}
    </a>
  );
}

function ChatPreview() {
  const schedule = [
    "8:00 AM — Start work and review priorities.",
    "11:30 AM — Finish the most important task before the workday ends.",
    "2:00 PM — End of work.",
    "4:15 PM — Get ready for your child’s appointment.",
    "5:00 PM — Appointment time.",
    "After the appointment — Stop by the grocery store.",
  ];

  return (
    <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-700">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/25">
            <Bot size={23} />
          </div>
          <div>
            <p className="font-black text-slate-950 dark:text-white">Opsivo Agent</p>
            <p className="text-xs font-semibold text-emerald-500">Connected through Telegram</p>
          </div>
        </div>
        <Sparkles className="text-brand-400" size={20} />
      </div>
      <div className="space-y-4 bg-gradient-to-br from-white via-sky-50/30 to-orange-50/40 p-5 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-brand-500 p-4 text-sm font-semibold leading-7 text-white shadow-lg shadow-brand-500/20">
          Plan my day for tomorrow. I work until 2 PM, my child has an appointment at 5 PM, and I need to stop by the grocery store.
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
          <div className="mb-2 flex items-center gap-2 font-black text-brand-600">
            <MessageCircle size={15} /> Opsivo Agent
          </div>
          <p className="mb-3 font-bold text-slate-950 dark:text-white">Your day is organized:</p>
          <ul className="space-y-2">
            {schedule.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Clock3 className="mt-1 shrink-0 text-brand-500" size={15} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 border-t border-slate-100 pt-3 text-slate-500 dark:border-slate-700 dark:text-slate-400">
            I will remind you about the important tasks at the right time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <nav className="fixed left-4 right-4 top-4 z-50 mx-auto max-w-5xl rounded-full border border-white/80 bg-white/90 px-4 py-3 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/90">
        <div className="flex items-center justify-between gap-4">
          <Link href="#home" className="flex items-center gap-2" aria-label="Opsivo home">
            <Image src="/logo-light.webp" alt="Opsivo logo" width={835} height={160} priority className="h-8 w-auto dark:hidden" />
            <Image src="/logo-dark.webp" alt="Opsivo logo" width={780} height={160} priority className="hidden h-8 w-auto dark:block" />
          </Link>
          <div className="hidden items-center gap-6 text-sm font-bold text-slate-500 md:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="transition hover:text-brand-600" target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                {link.label}
              </a>
            ))}
          </div>
          <PrimaryButton>Try it for free</PrimaryButton>
        </div>
      </nav>

      <section className="px-5 pb-28 pt-28 md:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-10 rounded-[2.5rem] border border-white bg-white p-6 shadow-2xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900 md:grid-cols-2 md:p-10">
          <div className="order-2 md:order-1">
            <ChatPreview />
          </div>
          <div className="order-1 text-center md:order-2 md:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-sm font-black text-brand-600 dark:bg-sky-500/10">
              <Send size={16} /> Your personal assistant through Telegram
            </div>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-slate-950 dark:text-white md:text-7xl">
              A smart personal assistant that keeps up with your day.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Talk to it through Telegram and let it help you organize tasks, remember appointments, write messages, summarize information, and plan your day.
            </p>
            <p className="mt-5 text-base font-bold leading-8 text-slate-700 dark:text-slate-200">
              A private AI agent configured around your needs and the way you work.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <PrimaryButton>Try your Opsivo agent for free</PrimaryButton>
              <SecondaryButton>Talk to us on WhatsApp</SecondaryButton>
            </div>
            <div className="mt-7 flex flex-wrap justify-center gap-4 text-sm font-bold text-slate-500 md:justify-start">
              {[
                "Works in English",
                "No technical experience needed",
                "Trial without a payment card",
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={16} className="text-emerald-500" /> {item}
                </span>
              ))}
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/5 dark:bg-slate-900 md:p-10">
          <SectionHeader
            eyebrow="Because your day has too many details"
            title="Your day is busy. You should not have to remember everything alone."
            copy="Between work, family appointments, messages, postponed tasks, and scattered information, it is normal to forget details or feel that your day is not organized."
          />
          <p className="mx-auto mb-8 max-w-3xl text-center text-lg leading-8 text-slate-600 dark:text-slate-300">
            Opsivo helps collect those details in one place, arrange them clearly, and follow up with you step by step.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {painCards.map(({ title, copy, Icon }) => (
              <article key={title} className="rounded-[1.5rem] bg-slate-50 p-6 text-center dark:bg-slate-800/70">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-brand-600 dark:bg-sky-500/10">
                  <Icon size={23} />
                </div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Prepared for you" title="Not just AI that answers you — an agent that follows up with you." />
          <div className="grid gap-5 md:grid-cols-2">
            {comparison.map(({ title, points, Icon, tone }) => (
              <article key={title} className={`rounded-[2rem] border p-7 shadow-xl shadow-slate-900/5 ${tone === "brand" ? "border-brand-200 bg-sky-50 dark:border-brand-500/30 dark:bg-sky-500/10" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`}>
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                      <Check className="mt-1 shrink-0 text-emerald-500" size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="With you from morning to night" title="How can it help throughout your day?" />
          <div className="grid gap-4 md:grid-cols-4">
            {dayFlow.map(({ title, copy, Icon }) => (
              <article key={title} className="rounded-[1.75rem] bg-white p-6 shadow-xl shadow-slate-900/5 dark:bg-slate-900">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-brand-600 dark:bg-sky-500/10">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="use-cases" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Fits your day" title="One assistant, configured around your needs." />
          <div className="grid gap-5 md:grid-cols-3">
            {useCases.map(({ title, points, Icon }) => (
              <article key={title} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-slate-900/5 dark:bg-slate-900">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                      <Check className="mt-1 shrink-0 text-emerald-500" size={17} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Simple steps, no technical complexity" title="How do you get your Opsivo agent?" />
          <div className="grid gap-4 md:grid-cols-5">
            {setupSteps.map(({ title, copy, Icon }, index) => (
              <article key={title} className="relative rounded-[1.75rem] bg-white p-6 shadow-xl shadow-slate-900/5 dark:bg-slate-900">
                <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-brand-700 dark:bg-sky-500/10">{index + 1}</span>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-black text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Choose the service level that fits"
            title="From a simple trial to a custom agent for your work."
            copy="Capabilities and integrations vary depending on the plan and your needs. Contact us to choose the right setup."
          />
          <div className="grid gap-5 lg:grid-cols-4">
            {plans.map(({ title, copy, cta, points, highlighted }) => (
              <article key={title} className={`flex rounded-[2rem] border p-6 shadow-xl shadow-slate-900/5 ${highlighted ? "border-brand-300 bg-brand-500 text-white" : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"}`}>
                <div className="flex w-full flex-col">
                  <Sparkles className={highlighted ? "text-white" : "text-brand-500"} size={24} />
                  <h3 className={`mt-5 text-2xl font-black ${highlighted ? "text-white" : "text-slate-950 dark:text-white"}`}>{title}</h3>
                  <p className={`mt-3 leading-7 ${highlighted ? "text-white/85" : "text-slate-600 dark:text-slate-300"}`}>{copy}</p>
                  <ul className="mt-5 flex-1 space-y-3">
                    {points.map((point) => (
                      <li key={point} className={`flex items-start gap-2 text-sm ${highlighted ? "text-white/90" : "text-slate-600 dark:text-slate-300"}`}>
                        <Check className="mt-0.5 shrink-0" size={16} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black transition ${highlighted ? "bg-white text-brand-700 hover:bg-sky-50" : "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950"}`}>
                    {cta} <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-slate-900/5 dark:bg-slate-900 md:grid-cols-[1.35fr_1fr]">
          <div className="space-y-4 p-6 md:p-10">
            {safetyPoints.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <Lock className="shrink-0 text-brand-500" size={18} />
                <span className="font-semibold">{point}</span>
              </div>
            ))}
          </div>
          <div className="flex min-h-[320px] flex-col items-center justify-center bg-slate-950 p-10 text-center text-white">
            <ShieldCheck className="mb-6 text-brand-300" size={42} />
            <h2 className="text-4xl font-black">You are always in control.</h2>
            <p className="mt-5 leading-8 text-slate-300">
              We apply suitable procedures to protect your information and define permissions based on the service setup you approve.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto grid max-w-6xl gap-5 rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-900/5 dark:bg-slate-900 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="flex min-h-[310px] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-brand-500 to-sky-700 p-8 text-center text-white">
            <PlayCircle size={58} />
            <h2 className="mt-6 text-3xl font-black">Telegram conversation preview</h2>
            <p className="mt-4 leading-8 text-white/85">
              A real video is not available yet. You can try the interactive simulation now and see how the agent responds.
            </p>
            <PrimaryButton href="/demo">Try your Opsivo agent for free</PrimaryButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {demoSteps.map(({ title, copy, Icon }, index) => (
              <article key={title} className="rounded-[1.5rem] bg-slate-50 p-6 dark:bg-slate-800">
                <span className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-sky-100 text-sm font-black text-brand-700 dark:bg-sky-500/10">{index + 1}</span>
                <Icon className="mb-4 text-brand-500" size={24} />
                <h3 className="font-black text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently asked questions" title="Everything you need to know before getting started." />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group rounded-2xl bg-white p-5 shadow-lg shadow-slate-900/5 open:ring-1 open:ring-brand-100 dark:bg-slate-900 dark:open:ring-brand-500/20" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-slate-950 dark:text-white">
                  {faq.question}
                  <ChevronDown className="shrink-0 text-brand-500 transition group-open:rotate-180" size={20} />
                </summary>
                <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] bg-gradient-to-br from-brand-500 to-sky-700 p-8 text-center text-white shadow-2xl shadow-brand-500/25 md:p-14">
          <h2 className="text-4xl font-black tracking-tight md:text-6xl">Reduce task pressure and start your day with more clarity.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85">
            See how a private AI agent can help with work, appointments, messages, and daily tasks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="/demo" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-brand-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-sky-50">
              <MessageCircle size={18} /> Try your Opsivo agent for free
            </a>
            <SecondaryButton>Talk to us on WhatsApp</SecondaryButton>
          </div>
          <p className="mt-6 text-sm font-semibold text-white/75">Guided demo • No payment card • Built for practical daily use</p>
        </div>
      </section>

      <footer className="px-5 pb-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 text-center shadow-xl shadow-slate-900/5 dark:bg-slate-900">
          <Link href="#home" className="inline-flex justify-center">
            <Image src="/logo-light.webp" alt="Opsivo logo" width={835} height={160} className="h-9 w-auto dark:hidden" />
            <Image src="/logo-dark.webp" alt="Opsivo logo" width={780} height={160} className="hidden h-9 w-auto dark:block" />
          </Link>
          <p className="mt-4 text-slate-500 dark:text-slate-400">A personal AI agent that helps you organize your day and complete tasks with less friction.</p>
          <p className="mt-6 border-t border-slate-100 pt-6 text-sm text-slate-400 dark:border-slate-800">© 2026 Opsivo. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
