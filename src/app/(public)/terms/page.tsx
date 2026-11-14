"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { locale } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "ব্যবহারবিধি ও নীতিমালা" : "Terms & Guidelines"}
        </span>
        <h1 className="text-3xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
        </h1>
      </div>

      <div className="border border-[#E5E2DA] rounded-lg p-6 sm:p-8 bg-white space-y-5 text-[#1F2937] leading-relaxed text-sm sm:text-base">
        <div className="space-y-2">
          <h2 className="text-base font-bold text-[#0B2A5B]">
            {locale === "bn" ? "১. অলাভজনক ও উন্মুক্ত উদ্দেশ্য" : "1. Humanitarian Purpose"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "এই প্ল্যাটফর্মের সমস্ত ডিজিটাল পাঠ্যক্রম, কুইজ এবং সফটওয়্যার অলাভজনক ও জনহিতকর উদ্দেশ্যে সম্পূর্ণ উন্মুক্ত। কোনো প্রকার বাণিজ্যিক পুনর্বিক্রয় নিষিদ্ধ।"
              : "All digital curriculum materials, quizzes and software in this platform are open for non-profit humanitarian education."}
          </p>
        </div>

        <div className="border-t border-[#E5E2DA] pt-4 space-y-2">
          <h2 className="text-base font-bold text-[#0B2A5B]">
            {locale === "bn" ? "২. সেন্টারের রিসোর্স ব্যবহার" : "2. Community Resources"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "কমিউনিটি লার্নিং সেন্টারের সকল ট্যাবলেট ও শিক্ষা উপকরণ কেবলমাত্র শিক্ষার্থীদের জ্ঞানার্জনে ব্যবহৃত হতে হবে।"
              : "All community learning centre hardware and resources are strictly dedicated to child development."}
          </p>
        </div>

        <div className="border-t border-[#E5E2DA] pt-4 space-y-2">
          <h2 className="text-base font-bold text-[#0B2A5B]">
            {locale === "bn" ? "৩. স্বেচ্ছাসেবকদের আচরণবিধি" : "3. Volunteer Conduct"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "সেন্টারে পাঠদানকালে শিশুদের প্রতি সহানুভূতিশীল, যত্নশীল এবং নিরপেক্ষ আচরণ বজায় রাখা প্রতিটি শিক্ষকের আবশ্যকীয় দায়িত্ব।"
              : "Volunteer teachers must maintain child safeguarding guidelines and compassionate care at all times."}
          </p>
        </div>
      </div>
    </div>
  );
}
