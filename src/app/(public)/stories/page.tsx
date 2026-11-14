"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STORIES } from "@/lib/data-store";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function StoriesPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-block bg-[#1565D8]/10 text-[#1565D8] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "মাঠপর্যায়ের গল্প" : "Stories from the Ground"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের পরিবর্তনের গল্প"
            : "Transformative Stories of Resilience"}
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          {locale === "bn"
            ? "প্রতিটি শিশুর মধ্যে রয়েছে অফুরন্ত সম্ভাবনা। চর এবং বস্তির প্রতিকূল বাস্তবতার মাঝেও তাদের শেখার আনন্দ ও সাফল্যের সত্যিকারের কাহিনী।"
            : "Real stories of children and volunteer mentors overcoming odds with offline digital education."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {INITIAL_STORIES.map((story) => (
          <div key={story.id} className="efa-card overflow-hidden bg-white hover:shadow-lg transition-shadow flex flex-col">
            <div className="h-60 overflow-hidden relative">
              <img
                src={story.photoUrl}
                alt={story.titleEn}
                className="w-full h-full object-cover"
              />
              {story.featured && (
                <div className="absolute top-3 left-3 bg-[#E9A319] text-[#0B2A5B] text-xs font-bold px-3 py-1 rounded shadow-xs">
                  {t("home.storyOfWeek")}
                </div>
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {story.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    {locale === "bn" ? story.authorBn : story.authorEn}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0B2A5B] leading-snug">
                  {locale === "bn" ? story.titleBn : story.titleEn}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {locale === "bn" ? story.summaryBn : story.summaryEn}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/stories/${story.slug}`}
                  className="text-sm font-semibold text-[#1565D8] inline-flex items-center gap-1 hover:underline"
                >
                  <span>{locale === "bn" ? "পুরো গল্প পড়ুন" : "Read Full Story"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
