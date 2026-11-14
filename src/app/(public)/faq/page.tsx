"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_FAQS } from "@/lib/data-store";
import { HelpCircle } from "lucide-react";

export default function FaqPage() {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
      <div className="space-y-4">
        <div className="inline-block bg-[#1565D8]/10 text-[#1565D8] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "জিজ্ঞাসা ও উত্তর" : "Questions & Answers"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn" ? "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী" : "Frequently Asked Questions"}
        </h1>
        <p className="text-base text-slate-600">
          {locale === "bn"
            ? "প্রকল্পের লক্ষ্য, অফলাইন প্রযুক্তি ও স্বেচ্ছাসেবা বিষয়ক সকল সাধারণ প্রশ্নের উত্তর।"
            : "Clear answers on platform architecture, offline synchronization, and volunteer onboarding."}
        </p>
      </div>

      <div className="space-y-4">
        {INITIAL_FAQS.map((faq, idx) => (
          <div key={faq.id} className="efa-card overflow-hidden bg-white">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left p-5 font-bold text-base text-[#0B2A5B] flex justify-between items-center hover:bg-slate-50"
            >
              <span>{locale === "bn" ? faq.questionBn : faq.questionEn}</span>
              <span className="text-2xl text-[#1565D8] ml-4 font-normal">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <div className="p-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                {locale === "bn" ? faq.answerBn : faq.answerEn}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
