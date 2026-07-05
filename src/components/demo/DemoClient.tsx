"use client";

import { useState } from "react";
import { BusinessType } from "@/app/api/demo-chat/route";
import DemoHero from "./DemoHero";
import ChatSimulator from "./ChatSimulator";
import ScrollReveal from "@/components/ScrollReveal";

export default function DemoClient() {
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType | null>(
    null
  );

  return (
    <>
      <DemoHero
        selected={selectedBusiness}
        onSelect={(business) => setSelectedBusiness(business)}
      />

      {selectedBusiness && (
        <ScrollReveal>
          <ChatSimulator businessType={selectedBusiness} />
        </ScrollReveal>
      )}

      {!selectedBusiness && (
        <section className="pb-16 px-4 text-center">
          <p className="text-slate-500 dark:text-slate-400">
            اختر نوع النشاط أعلاه لتبدأ تجربة المحادثة
          </p>
        </section>
      )}
    </>
  );
}
