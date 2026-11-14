"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STUDENTS } from "@/lib/data-store";
import { Award, Flame, Star, CheckCircle2, Trophy, Clock, ArrowLeft } from "lucide-react";

export default function StudentProgressPage() {
  const { locale, formatNum, t } = useLanguage();

  const badges = [
    { id: "b1", titleBn: "প্রথম পদক্ষেপ", titleEn: "First Step", descBn: "প্রথম পাঠ সম্পন্ন", descEn: "First lesson completed", icon: "⭐", earned: true },
    { id: "b2", titleBn: "অদম্য শিক্ষার্থী", titleEn: "Consistent Learner", descBn: "টানা ৭ দিন পড়াশোনা", descEn: "7-day streak maintained", icon: "🔥", earned: true },
    { id: "b3", titleBn: "অধ্যায় বিজয়ী", titleEn: "Chapter Master", descBn: "একটি সম্পূর্ণ অধ্যায় সমাপ্ত", descEn: "Completed entire chapter", icon: "🏆", earned: true },
    { id: "b4", titleBn: "গণিত জাদুকর", titleEn: "Math Wizard", descBn: "কুইজে ১০০% স্কোর", descEn: "Scored 100% in quiz", icon: "🎯", earned: false },
    { id: "b5", titleBn: "সহায়তাকারী", titleEn: "Helpful Peer", descBn: "শিক্ষককে ৩টি ভালো প্রশ্ন", descEn: "Asked 3 great questions", icon: "🤝", earned: false }
  ];

  const leaderboard = [...INITIAL_STUDENTS].sort((a, b) => b.points - a.points);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1565D8] hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{locale === "bn" ? "ফিরে যান" : "Back"}</span>
        </Link>
        <span className="text-xs font-bold text-slate-500">
          {locale === "bn" ? "শিখন ড্যাশবোর্ড" : "Learning Statistics"}
        </span>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
          {locale === "bn" ? "আমার অগ্রগতি ও অর্জন" : "My Progress & Achievements"}
        </h1>
        <p className="text-sm text-slate-600">
          {locale === "bn" ? "তোমার অর্জিত পয়েন্ট, ব্যাজ ও সেন্টারের অবস্থান।" : "Your learning streak, badges and centre ranking."}
        </p>
      </div>

      {/* Top 3 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="efa-card p-6 bg-white flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-[#E9A319] flex items-center justify-center font-bold text-2xl">
            <Trophy className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#0B2A5B]">{formatNum(280)}</div>
            <div className="text-xs text-slate-500">{locale === "bn" ? "মোট পয়েন্ট" : "Total Points"}</div>
          </div>
        </div>

        <div className="efa-card p-6 bg-white flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-2xl">
            <Flame className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#0B2A5B]">{formatNum(7)} দিন</div>
            <div className="text-xs text-slate-500">{locale === "bn" ? "টানা পড়াশোনা (Streak)" : "Day Streak"}</div>
          </div>
        </div>

        <div className="efa-card p-6 bg-white flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-blue-100 text-[#1565D8] flex items-center justify-center font-bold text-2xl">
            <Clock className="w-7 h-7" />
          </div>
          <div>
            <div className="text-2xl font-black text-[#0B2A5B]">{formatNum(18)} ঘণ্টা</div>
            <div className="text-xs text-slate-500">{locale === "bn" ? "মোট শিখন সময়" : "Total Study Time"}</div>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="efa-card p-6 sm:p-8 bg-white space-y-4">
        <h2 className="text-xl font-bold text-[#0B2A5B] flex items-center gap-2">
          <Award className="w-6 h-6 text-[#E9A319]" />
          <span>{locale === "bn" ? "অর্জিত ব্যাজসমূহ" : "Earned Badges"}</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {badges.map((b) => (
            <div
              key={b.id}
              className={`p-4 rounded-xl border text-center space-y-2 transition-all ${
                b.earned
                  ? "bg-amber-50/50 border-amber-300 shadow-xs"
                  : "bg-slate-50 border-slate-200 opacity-50 grayscale"
              }`}
            >
              <div className="text-3xl">{b.icon}</div>
              <h4 className="font-bold text-xs text-[#0B2A5B]">
                {locale === "bn" ? b.titleBn : b.titleEn}
              </h4>
              <p className="text-[10px] text-slate-500">
                {locale === "bn" ? b.descBn : b.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy-Safe Leaderboard (Own centre only, first name + points) */}
      <div className="efa-card p-6 sm:p-8 bg-white space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#0B2A5B] flex items-center gap-2">
            <Trophy className="w-6 h-6 text-[#1565D8]" />
            <span>{locale === "bn" ? "নিজের সেন্টারের লিডারবোর্ড" : "Centre Leaderboard"}</span>
          </h2>
          <span className="text-xs text-slate-400">
            {locale === "bn" ? "সৈয়দপুর পাইলট সেন্টার" : "Saidpur Pilot Centre"}
          </span>
        </div>

        <div className="space-y-2">
          {leaderboard.map((st, idx) => (
            <div
              key={st.id}
              className={`p-3 rounded-xl border flex items-center justify-between ${
                idx === 0
                  ? "bg-amber-50 border-amber-300 font-bold"
                  : "bg-slate-50 border-slate-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 font-bold text-sm text-[#0B2A5B] text-center">
                  {idx + 1 === 1 ? "🥇" : idx + 1 === 2 ? "🥈" : idx + 1 === 3 ? "🥉" : formatNum(idx + 1)}
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {locale === "bn" ? st.nameBn : st.nameEn}
                </span>
              </div>
              <div className="text-sm font-bold text-[#1565D8]">
                {formatNum(st.points)} {locale === "bn" ? "পয়েন্ট" : "pts"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
