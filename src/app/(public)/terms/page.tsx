"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
  const { locale } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-6">
      <h1 className="text-3xl font-bold text-[#0B2A5B]">
        {locale === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
      </h1>
      <div className="efa-card p-6 sm:p-8 bg-white space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p>
          {locale === "bn"
            ? "এই প্ল্যাটফর্মের সমস্ত ডিজিটাল পাঠ্যক্রম, কুইজ এবং সফ্টওয়্যার অলাভজনক ও জনহিতকর উদ্দেশ্যে উন্মুক্ত।"
            : "All digital curriculum materials, quizzes and software in this platform are open for non-profit humanitarian education."}
        </p>
        <p>
          {locale === "bn"
            ? "কমিউনিটি লার্নিং সেন্টারের সকল ট্যাবলেট ও শিক্ষা উপকরণ কেবলমাত্র শিক্ষার্থীদের জ্ঞানার্জনে ব্যবহৃত হতে হবে।"
            : "All community learning centre hardware and resources are strictly dedicated to child development."}
        </p>
      </div>
    </div>
  );
}
