"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Plus, Video, Volume2, FileText, CheckCircle2, Lock } from "lucide-react";

export default function ContentManagementPage() {
  const { locale, formatNum, t } = useLanguage();

  const [selectedClass, setSelectedClass] = useState(5);
  const [selectedSubject, setSelectedSubject] = useState("math");

  const chapters = [
    {
      id: "ch-1",
      titleBn: "অধ্যায় ১: চার প্রক্রিয়া সম্পর্কিত সমস্যাবলি",
      titleEn: "Chapter 1: Problems Related to Four Operations",
      lessonsCount: 4,
      quizzesCount: 1,
      published: true
    },
    {
      id: "ch-2",
      titleBn: "অধ্যায় ২: গুণ ও ভাগের নিয়মাবলী",
      titleEn: "Chapter 2: Multiplication and Division Rules",
      lessonsCount: 3,
      quizzesCount: 1,
      published: true
    },
    {
      id: "ch-3",
      titleBn: "অধ্যায় ৩: ভগ্নাংশ ও দশমিক হিসাব",
      titleEn: "Chapter 3: Fractions and Decimals",
      lessonsCount: 5,
      quizzesCount: 2,
      published: false
    }
  ];

  const lessons = [
    {
      id: "les-1",
      titleBn: "বন্ধনীর ব্যবহার ও সরল করার নিয়ম",
      type: "VIDEO",
      duration: "৬ মি.",
      published: true
    },
    {
      id: "les-2",
      titleBn: "ঐকিক নিয়ম ও ব্যবহারিক হিসাব",
      type: "READING",
      duration: "৭ মি.",
      published: true
    },
    {
      id: "les-3",
      titleBn: "বন্ধনীর জটিল সমস্যা সমাধান",
      type: "VIDEO",
      duration: "৫ মি.",
      published: true
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.subjects")}
          </h1>
          <p className="text-xs text-slate-500">
            NCTB পাঠ্যক্রমের শ্রেণি, বিষয়, অধ্যায় ও ডিজিটাল পাঠ সম্পাদনা।
          </p>
        </div>
      </div>

      {/* Class Level Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((lvl) => (
          <button
            key={lvl}
            onClick={() => setSelectedClass(lvl)}
            className={`px-4 py-2 rounded-lg font-bold text-xs whitespace-nowrap cursor-pointer ${
              selectedClass === lvl
                ? "bg-[#0B2A5B] text-white shadow-sm"
                : "bg-white text-slate-700 border hover:bg-slate-50"
            }`}
          >
            {locale === "bn" ? `শ্রেণি ${formatNum(lvl)}` : `Class ${lvl}`}
          </button>
        ))}
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Chapters Column */}
        <div className="lg:col-span-6 efa-card p-6 bg-white space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="font-bold text-base text-[#0B2A5B]">অধ্যায় তালিকা</h2>
            <button
              onClick={() => alert("নতুন অধ্যায় যুক্ত করার মডিউল চালু হচ্ছে...")}
              className="btn-navy text-xs px-3 py-1.5 rounded flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>নতুন অধ্যায়</span>
            </button>
          </div>

          <div className="space-y-3">
            {chapters.map((ch, idx) => (
              <div
                key={ch.id}
                className="p-4 rounded-xl border border-slate-200 hover:border-[#1565D8] transition-colors cursor-pointer bg-slate-50/50"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-bold text-sm text-[#0B2A5B]">{ch.titleBn}</h3>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      ch.published ? "bg-emerald-100 text-emerald-800" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {ch.published ? "প্রকাশিত" : "খসড়া"}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 mt-2">
                  <span>{formatNum(ch.lessonsCount)} টি পাঠ</span>
                  <span>•</span>
                  <span>{formatNum(ch.quizzesCount)} টি কুইজ</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lessons Column */}
        <div className="lg:col-span-6 efa-card p-6 bg-white space-y-4">
          <div className="flex justify-between items-center border-b pb-3">
            <h2 className="font-bold text-base text-[#0B2A5B]">অধ্যায় ১ এর পাঠসমূহ</h2>
            <button
              onClick={() => alert("নতুন পাঠ আপলোড মডিউল চালু হচ্ছে...")}
              className="btn-navy text-xs px-3 py-1.5 rounded flex items-center gap-1"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>নতুন পাঠ যোগ</span>
            </button>
          </div>

          <div className="space-y-3">
            {lessons.map((les) => (
              <div
                key={les.id}
                className="p-3 rounded-lg border border-slate-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-blue-100 text-[#1565D8] flex items-center justify-center">
                    {les.type === "VIDEO" ? <Video className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#0B2A5B]">{les.titleBn}</h4>
                    <span className="text-[10px] text-slate-400">{les.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    সক্রিয়
                  </span>
                  <button
                    onClick={() => alert("পাঠ সম্পাদনা")}
                    className="text-xs text-[#1565D8] hover:underline"
                  >
                    সম্পাদনা
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
