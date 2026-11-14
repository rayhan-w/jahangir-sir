"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
      <h1 className="text-3xl font-bold text-[#0B2A5B]">
        {locale === "bn" ? "গোপনীয়তা ও শিশু সুরক্ষা নীতি" : "Privacy & Child Protection Policy"}
      </h1>
      <div className="efa-card p-6 sm:p-8 bg-white space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p>
          {locale === "bn"
            ? "Education for All (বাউস্ট সিএসই গবেষণা প্রকল্প নং: ZRF-26-25400D) শিশুদের গোপনীয়তা ও ব্যক্তিগত তথ্যের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব প্রদান করে।"
            : "Education for All (BAUST CSE Research Project No: ZRF-26-25400D) prioritizes child privacy and safety above all."}
        </p>
        <h2 className="text-lg font-bold text-[#0B2A5B] pt-2">
          {locale === "bn" ? "১. তথ্যের সংরক্ষণ ও ব্যবহার" : "1. Data Collection & Use"}
        </h2>
        <p>
          {locale === "bn"
            ? "শিশুদের শুধুমাত্র শিক্ষণ অগ্রগতি, কুইজের স্কোর এবং দৈনিক উপস্থিতি রেকর্ড করা হয়। কোনো প্রকার বাণিজ্যিক বা তৃতীয় পক্ষের ট্র্যাকিং ব্যবহৃত হয় না।"
            : "Only educational progress, quiz scores and attendance are recorded for academic evaluation."}
        </p>
        <h2 className="text-lg font-bold text-[#0B2A5B] pt-2">
          {locale === "bn" ? "২. ছবি ও পরিচয় সুরক্ষা" : "2. Photo & Identity Safeguarding"}
        </h2>
        <p>
          {locale === "bn"
            ? "ওয়েবসাইটে প্রকাশিত প্রতিটি শিশুর গল্প ও ছবি অভিভাবকের লিখিত সম্মতির ভিত্তিতে প্রকাশ করা হয়। শিক্ষার্থীর সম্পূর্ণ ব্যক্তিগত তথ্য জনসম্মুখে উন্মুক্ত করা হয় না।"
            : "Stories and photographs are published exclusively with written guardian consent."}
        </p>
      </div>
    </div>
  );
}
