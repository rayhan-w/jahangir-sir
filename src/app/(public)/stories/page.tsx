"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STORIES } from "@/lib/data-store";

export default function StoriesPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "মাঠপর্যায়ের গল্প" : "Stories from the Ground"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের পরিবর্তনের গল্প"
            : "Transformative Stories of Resilience"}
        </h1>
        <p className="text-base text-[#5B6472]">
          {locale === "bn"
            ? "প্রতিটি শিশুর মধ্যে রয়েছে অফুরন্ত সম্ভাবনা। চর এবং বস্তির প্রতিকূল বাস্তবতার মাঝেও তাদের শেখার আনন্দ ও সাফল্যের সত্যিকারের কাহিনী।"
            : "Real stories of children and volunteer mentors overcoming odds with offline digital education."}
        </p>
      </div>

      <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
        {INITIAL_STORIES.map((story) => (
          <div key={story.id} className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="text-xs text-[#5B6472]">
                {story.date} • {locale === "bn" ? story.authorBn : story.authorEn}
              </div>
              <h2 className="text-xl font-bold text-[#0B2A5B]">
                {locale === "bn" ? story.titleBn : story.titleEn}
              </h2>
              <p className="text-sm text-[#5B6472] leading-relaxed">
                {locale === "bn" ? story.summaryBn : story.summaryEn}
              </p>
            </div>
            <div className="shrink-0 self-start">
              <Link
                href={`/stories/${story.slug}`}
                className="text-sm font-semibold text-[#1565D8] hover:underline"
              >
                {locale === "bn" ? "পুরো গল্প পড়ুন →" : "Read Full Story →"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
