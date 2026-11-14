"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Calculator, Compass, Laptop, ArrowRight, ArrowLeft } from "lucide-react";

export default function SubjectsPage() {
  const { locale, formatNum, t } = useLanguage();

  const subjects = [
    {
      id: "sub-bangla",
      nameBn: "বাংলা",
      nameEn: "Bangla",
      descBn: "গল্প, কবিতা ও ব্যাকরণ",
      descEn: "Stories, poems, grammar",
      color: "bg-[#1565D8]",
      icon: BookOpen,
      progress: 85,
      chaptersCount: 12
    },
    {
      id: "sub-math",
      nameBn: "প্রাথমিক গণিত",
      nameEn: "Mathematics",
      descBn: "সংখ্যার হিসাব, জ্যামিতি ও ঐকিক নিয়ম",
      descEn: "Numbers, geometry, arithmetic",
      color: "bg-[#E9A319]",
      icon: Calculator,
      progress: 60,
      chaptersCount: 14
    },
    {
      id: "sub-english",
      nameBn: "ইংরেজি",
      nameEn: "English",
      descBn: "সহজ কথোপকথন ও শব্দভাণ্ডার",
      descEn: "Conversations & vocabulary",
      color: "bg-[#0B2A5B]",
      icon: Compass,
      progress: 40,
      chaptersCount: 10
    },
    {
      id: "sub-science",
      nameBn: "প্রাথমিক বিজ্ঞান",
      nameEn: "Science",
      descBn: "পরিবেশ, জীব ও প্রযুক্তির বিস্ময়",
      descEn: "Nature, organisms & wonders",
      color: "bg-[#1E8E4F]",
      icon: Laptop,
      progress: 70,
      chaptersCount: 11
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1565D8] hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{locale === "bn" ? "নীড়পাতায় ফিরে যান" : "Back to Home"}</span>
        </Link>
        <span className="text-xs font-bold text-slate-500">
          {locale === "bn" ? "শ্রেণি ৫ এর পাঠ্যক্রম" : "Class 5 Curriculum"}
        </span>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
          {locale === "bn" ? "সকল বিষয় ও অগ্রগতি" : "Subjects & Mastery"}
        </h1>
        <p className="text-sm text-slate-600">
          {locale === "bn" ? "যে বিষয়টি পড়তে চাও তাতে চাপ দাও।" : "Tap any subject to view its chapter list."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {subjects.map((sub) => {
          const Icon = sub.icon;
          return (
            <div key={sub.id} className="efa-card p-6 bg-white hover:shadow-md transition-all flex flex-col justify-between space-y-4">
              <div className="flex items-start justify-between">
                <div className={`w-14 h-14 rounded-2xl ${sub.color} text-white flex items-center justify-center shadow-sm`}>
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-[#0B2A5B]">
                    {formatNum(sub.progress)}%
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {locale === "bn" ? "দক্ষতা" : "Mastery"}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0B2A5B]">
                  {locale === "bn" ? sub.nameBn : sub.nameEn}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {locale === "bn" ? sub.descBn : sub.descEn}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-1">
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1E8E4F]"
                    style={{ width: `${sub.progress}%` }}
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>{formatNum(sub.chaptersCount)} {locale === "bn" ? "টি অধ্যায়" : "chapters"}</span>
                  <span>{formatNum(Math.round((sub.chaptersCount * sub.progress) / 100))} {locale === "bn" ? "টি সম্পন্ন" : "completed"}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/learn/lesson/lesson-1"
                  className="btn-navy w-full py-2.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2"
                >
                  <span>{locale === "bn" ? "পাঠ তালিকায় যান" : "Open Chapters"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
