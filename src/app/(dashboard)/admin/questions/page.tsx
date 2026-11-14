"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FileQuestion, Plus, CheckCircle2, Award, ArrowRight } from "lucide-react";

export default function AdminQuestionsPage() {
  const { locale, formatNum, t } = useLanguage();

  const questions = [
    {
      id: "q-1",
      questionBn: "১২ + (৮ ÷ ৪) - ২ = কত?",
      chapter: "অধ্যায় ১: চার প্রক্রিয়া",
      difficulty: 1,
      type: "MCQ",
      correct: "১২"
    },
    {
      id: "q-2",
      questionBn: "সরল অঙ্কে বন্ধনী না থাকলে কোনটির কাজ সবার আগে করতে হয়?",
      chapter: "অধ্যায় ১: চার প্রক্রিয়া",
      difficulty: 2,
      type: "MCQ",
      correct: "ভাগ (÷)"
    },
    {
      id: "q-3",
      questionBn: "১টি কলমের দাম ৫ টাকা হলে, ৮টি কলমের দাম কত?",
      chapter: "অধ্যায় ১: চার প্রক্রিয়া",
      difficulty: 1,
      type: "MCQ",
      correct: "৪০ টাকা"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.questionBank")}
          </h1>
          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "শ্রেণি ও অধ্যায়ভিত্তিক প্রশ্নব্যাংক ও কুইজ সংযোজন।"
              : "Question bank with difficulty levels and automatic quiz assembly."}
          </p>
        </div>

        <button
          onClick={() => alert("নতুন প্রশ্ন যোগ করার উইন্ডো চালু হচ্ছে...")}
          className="btn-navy text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>নতুন প্রশ্ন তৈরি</span>
        </button>
      </div>

      <div className="efa-card overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-700 text-xs font-bold border-b uppercase">
            <tr>
              <th className="p-4">প্রশ্ন</th>
              <th className="p-4">অধ্যায়</th>
              <th className="p-4">ধরন ও জটিলতা</th>
              <th className="p-4">সঠিক উত্তর</th>
              <th className="p-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {questions.map((q) => (
              <tr key={q.id} className="hover:bg-slate-50">
                <td className="p-4 font-bold text-[#0B2A5B] max-w-xs">{q.questionBn}</td>
                <td className="p-4 text-xs text-slate-600">{q.chapter}</td>
                <td className="p-4">
                  <span className="text-xs font-bold bg-amber-50 text-amber-800 px-2 py-0.5 rounded">
                    লেভেল {formatNum(q.difficulty)}
                  </span>
                </td>
                <td className="p-4 text-xs font-bold text-[#1E8E4F]">{q.correct}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => alert("প্রশ্ন সম্পাদনা")}
                    className="text-xs text-[#1565D8] font-semibold hover:underline"
                  >
                    সম্পাদনা
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
