"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function PrivacyPage() {
  const { locale } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      <div className="space-y-2">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "নীতিমালা ও সুরক্ষা" : "Policy & Safety"}
        </span>
        <h1 className="text-3xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "গোপনীয়তা ও শিশু সুরক্ষা নীতি" : "Privacy & Child Protection Policy"}
        </h1>
      </div>

      <div className="border border-[#E5E2DA] rounded-lg p-6 sm:p-8 bg-white space-y-5 text-[#1F2937] leading-relaxed text-sm sm:text-base">
        <p>
          {locale === "bn"
            ? `Education for All (বাউস্ট সিএসই গবেষণা প্রকল্প নং: ${siteConfig.projectCode}) শিশুদের গোপনীয়তা ও ব্যক্তিগত তথ্যের নিরাপত্তাকে সর্বোচ্চ গুরুত্ব প্রদান করে।`
            : `Education for All (BAUST CSE Research Project No: ${siteConfig.projectCode}) prioritizes child privacy and safety above all.`}
        </p>

        <div className="border-t border-[#E5E2DA] pt-4 space-y-2">
          <h2 className="text-base font-bold text-[#0B2A5B]">
            {locale === "bn" ? "১. তথ্যের সংরক্ষণ ও ব্যবহার" : "1. Data Collection & Use"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "শিশুদের শুধুমাত্র শিক্ষণ অগ্রগতি, কুইজের স্কোর এবং দৈনিক উপস্থিতি রেকর্ড করা হয়। কোনো প্রকার বাণিজ্যিক বা তৃতীয় পক্ষের ট্র্যাকিং ব্যবহৃত হয় না।"
              : "Only educational progress, quiz scores and attendance are recorded for academic evaluation."}
          </p>
        </div>

        <div className="border-t border-[#E5E2DA] pt-4 space-y-2">
          <h2 className="text-base font-bold text-[#0B2A5B]">
            {locale === "bn" ? "২. ছবি ও পরিচয় সুরক্ষা" : "2. Photo & Identity Safeguarding"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "ওয়েবসাইটে প্রকাশিত প্রতিটি শিশুর গল্প ও ছবি অভিভাবকের লিখিত সম্মতির ভিত্তিতে প্রকাশ করা হয়। শিক্ষার্থীর সম্পূর্ণ ব্যক্তিগত তথ্য জনসম্মুখে উন্মুক্ত করা হয় না।"
              : "Stories and photographs are published exclusively with written guardian consent."}
          </p>
        </div>

        <div className="border-t border-[#E5E2DA] pt-4 space-y-2">
          <h2 className="text-base font-bold text-[#0B2A5B]">
            {locale === "bn" ? "৩. অফলাইন ডেটা সুরক্ষা" : "3. Offline Data Protection"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "ট্যাবলেটের লোকাল স্টোরেজে থাকা শিক্ষার্থীদের ডেটা এনক্রিপ্ট করা থাকে এবং সেন্টারের বাইরে কোনো তথ্য স্থানান্তরিত হয় না।"
              : "Student data stored locally on tablets is secured and only synced with the research database."}
          </p>
        </div>
      </div>
    </div>
  );
}
