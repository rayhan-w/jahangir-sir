"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, WifiOff, Award, Users, Heart, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProgrammesPage() {
  const { locale, formatNum, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      <div className="max-w-3xl space-y-4">
        <div className="inline-block bg-[#1565D8]/10 text-[#1565D8] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "আমাদের শিক্ষণ কার্যক্রম" : "Our Programmes"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "অফলাইন-ফার্স্ট শিখন পদ্ধতি ও বিশেষ সহায়তা"
            : "Offline-First Learning Model & Inclusion"}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {locale === "bn"
            ? "আমাদের কর্মসূচিটি বিশেষভাবে এমন শিশুদের জন্য তৈরি যাদের বাড়িতে কোনো বিদ্যুৎ বা ইন্টারনেট নেই। কমিউনিটি লার্নিং সেন্টারের সহায়তায় প্রত্যেকে সম্পূর্ণ আত্মবিশ্বাসের সাথে জাতীয় শিক্ষাক্রম অনুযায়ী পড়াশোনা শেষ করতে পারে।"
            : "Tailored specifically for children with zero home internet access, combining offline tablets with volunteer mentorship."}
        </p>
      </div>

      {/* 4 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="efa-card p-8 bg-white space-y-4">
          <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#1565D8] flex items-center justify-center">
            <WifiOff className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "১০০% অফলাইন-ফার্স্ট আর্কিটেকচার" : "100% Offline-First Architecture"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {locale === "bn"
              ? "সেন্টারের লোকাল ওয়াই-ফাই থেকে ভিডিও এবং কুইজ একবার ডাউনলোড হলে তা সম্পূর্ণ অফলাইনে দেখা যায়। প্রতিটি কুইজের উত্তর ও অগ্রগতি ট্যাবলেটে জমা থাকে এবং পরবর্তীতে সেন্টারে এলে এক ক্লিকে সিঙ্ক হয়ে যায়।"
              : "Lessons and interactive quizzes are cached locally. Student attempts and progress events sync seamlessly when internet returns."}
          </p>
        </div>

        <div className="efa-card p-8 bg-white space-y-4">
          <div className="w-12 h-12 rounded-lg bg-emerald-100 text-[#1E8E4F] flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "অ্যাডাপ্টিভ কুইজ ও দক্ষতা মূল্যায়ন" : "Adaptive Quizzes & Mastery"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {locale === "bn"
              ? "প্রতিটি অধ্যায়ের শেষে কমপক্ষে ৬০% নম্বর অর্জন করলে পরবর্তী অধ্যায় আনলক হয়। যারা পিছিয়ে পড়ে, তাদের জন্য স্বয়ংক্রিয়ভাবে সহজ ব্যাখ্যা ও পুনর্বার অনুশীলনের সুপারিশ তৈরি হয়।"
              : "60% mastery threshold unlocks next chapters. Intelligent recommendation rules ensure struggling students get immediate review lessons."}
          </p>
        </div>

        <div className="efa-card p-8 bg-white space-y-4">
          <div className="w-12 h-12 rounded-lg bg-amber-100 text-[#E9A319] flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "স্বেচ্ছাসেবক শিক্ষকের সরাসরি যত্ন" : "Volunteer Teacher Guidance"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {locale === "bn"
              ? "শিক্ষার্থীরা শুধু একা ট্যাবলেটে শেখে না; প্রতি সেন্টারে প্রশিক্ষিত স্বেচ্ছাসেবক শিক্ষক থাকেন যারা শিশুদের ব্যক্তিগত সমস্যা সমাধান করেন এবং উপস্থিতির হিসাব রাখেন।"
              : "Trained community mentors monitor daily progress, explain tricky concepts and maintain personal bonds with each child."}
          </p>
        </div>

        <div className="efa-card p-8 bg-white space-y-4">
          <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
            <Heart className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "বিশেষ চাহিদাসম্পন্ন শিশুদের উপযোগী" : "Inclusion & Accessibility"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            {locale === "bn"
              ? "প্রতিটি পাঠে সম্পূর্ণ অডিও বর্ণনা (Narration), বড় অক্ষরের সুবিধা (Text Resize A/A+/A++) এবং ছবি-ভিত্তিক সহজ ইন্টারফেস রয়েছে, যাতে দৃষ্টি বা শ্রবণ দুর্বল শিশুরা নির্বিঘ্নে শিখতে পারে।"
              : "Audio narrations for every lesson, high-contrast mode, multi-level text scaling, and picture-tap navigation for young or special-needs learners."}
          </p>
        </div>
      </div>

      {/* Class 1-10 NCTB Curriculum Structure */}
      <div className="efa-card p-8 bg-white space-y-6">
        <h2 className="text-2xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "শ্রেণি ও বিষয়ের বিন্যাস (NCTB সিলেবাস)" : "Class Structure (NCTB Aligned)"}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((lvl) => (
            <div
              key={lvl}
              className={`p-4 rounded-lg border text-center ${
                lvl <= 5 ? "bg-blue-50 border-[#1565D8] text-[#0B2A5B]" : "bg-slate-50 border-[#E2DED5] text-slate-500"
              }`}
            >
              <div className="text-xl font-bold">
                {locale === "bn" ? `শ্রেণি ${formatNum(lvl)}` : `Class ${lvl}`}
              </div>
              <div className="text-xs mt-1">
                {lvl <= 5
                  ? locale === "bn" ? "পাইলটে সক্রিয়" : "Active in Pilot"
                  : locale === "bn" ? "পরবর্তী ধাপ" : "Phase 2 Target"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
