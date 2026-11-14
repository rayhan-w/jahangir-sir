"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_FAQS } from "@/lib/data-store";

export default function FaqPage() {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "জিজ্ঞাসা ও উত্তর" : "Questions & Answers"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn" ? "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী" : "Frequently Asked Questions"}
        </h1>
        <p className="text-base text-[#5B6472]">
          {locale === "bn"
            ? "প্রকল্পের লক্ষ্য, অফলাইন প্রযুক্তি ও স্বেচ্ছাসেবা বিষয়ক সকল সাধারণ প্রশ্নের উত্তর।"
            : "Clear answers on platform architecture, offline synchronization, and volunteer onboarding."}
        </p>
      </div>

      <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
        {INITIAL_FAQS.map((faq, idx) => (
          <div key={faq.id} className="py-4">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left font-bold text-base text-[#0B2A5B] flex justify-between items-center py-1"
            >
              <span>{locale === "bn" ? faq.questionBn : faq.questionEn}</span>
              <span className="text-xl text-[#1565D8] ml-4 font-mono select-none">
                {openIndex === idx ? "−" : "+"}
              </span>
            </button>
            {openIndex === idx && (
              <p className="pt-2.5 pb-1 text-sm sm:text-base text-[#5B6472] leading-relaxed">
                {locale === "bn" ? faq.answerBn : faq.answerEn}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
