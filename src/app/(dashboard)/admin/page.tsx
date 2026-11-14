"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_SETTINGS, INITIAL_CENTRES } from "@/lib/data-store";
import {
  Users,
  BookOpen,
  MapPin,
  Award,
  AlertTriangle,
  RefreshCw,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Tablet
} from "lucide-react";

export default function AdminOverviewPage() {
  const { locale, formatNum, t } = useLanguage();
  const settings = DEFAULT_SETTINGS;

  const gapAlerts = [
    {
      id: "alert-1",
      centre: "ধরলা নদী চর লার্নিং সেন্টার (KRG-01)",
      chapter: "অধ্যায় ১: চার প্রক্রিয়া (প্রাথমিক গণিত)",
      belowMasteryPercent: 48,
      affectedStudents: 22,
      recommendation: "শিক্ষকের নিবিড় সেশন ও অডিও পাঠ পুনরায় প্রদান প্রয়োজন"
    },
    {
      id: "alert-2",
      centre: "সৈয়দপুর রেলওয়ে বস্তি সেন্টার (SPD-01)",
      chapter: "অধ্যায় ৩: ভগ্নাংশের ধারণা",
      belowMasteryPercent: 42,
      affectedStudents: 18,
      recommendation: "বাস্তব উপকরণ দিয়ে ভগ্নাংশ অনুশীলনের পরামর্শ"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Top Banner with Pilot Progress */}
      <div className="bg-[#0B2A5B] text-white p-6 rounded-2xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#E9A319] uppercase tracking-wider">
            {settings.projectCode} • BAUST CSE
          </span>
          <h1 className="text-2xl font-bold mt-1">
            {locale === "bn" ? "শিক্ষা ব্যবস্থাপনা ওভারভিউ" : "Executive Learning Dashboard"}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            {locale === "bn" ? settings.affiliation.bn : settings.affiliation.en}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/admin/reports"
            className="btn-gold text-xs px-4 py-2 rounded-lg font-bold"
          >
            {locale === "bn" ? "পূর্ণাঙ্গ রিপোর্ট দেখুন" : "View Full Report"}
          </Link>
        </div>
      </div>

      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Enrolled Children */}
        <div className="efa-card p-6 bg-white space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-500 uppercase">
              {t("dashboard.totalStudents")}
            </span>
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#1565D8] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#0B2A5B]">
            {formatNum(295)}
          </div>
          <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+১২% এই মাসে ভর্তি</span>
          </div>
        </div>

        {/* Card 2: Lessons Completed Today */}
        <div className="efa-card p-6 bg-white space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-500 uppercase">
              {t("dashboard.completedToday")}
            </span>
            <div className="w-9 h-9 rounded-lg bg-amber-100 text-[#E9A319] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#0B2A5B]">
            {formatNum(142)}
          </div>
          <div className="text-xs text-slate-500">
            {locale === "bn" ? "অফলাইন ট্যাবলেট থেকে সিঙ্কড" : "Synced from offline tablets"}
          </div>
        </div>

        {/* Card 3: Average Mastery */}
        <div className="efa-card p-6 bg-white space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-500 uppercase">
              {t("dashboard.avgMastery")}
            </span>
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-[#1E8E4F] flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#1E8E4F]">
            {formatNum(76.4)}%
          </div>
          <div className="text-xs text-slate-500">
            {locale === "bn" ? `ন্যূনতম থ্রেশহোল্ড ${formatNum(settings.masteryThreshold)}%` : `Threshold ${settings.masteryThreshold}%`}
          </div>
        </div>

        {/* Card 4: Active Centres */}
        <div className="efa-card p-6 bg-white space-y-2">
          <div className="flex justify-between items-start">
            <span className="text-xs font-bold text-slate-500 uppercase">
              {t("dashboard.activeCentres")}
            </span>
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
          <div className="text-3xl font-extrabold text-[#0B2A5B]">
            {formatNum(INITIAL_CENTRES.length)}
          </div>
          <div className="text-xs text-slate-500">
            {locale === "bn" ? `${formatNum(37)} টি ট্যাবলেট সক্রিয়` : "37 active tablets"}
          </div>
        </div>
      </div>

      {/* Sync Health & Gap Alerts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: GAP ALERTS (>40% below 60% threshold) */}
        <div className="lg:col-span-7 efa-card p-6 bg-white space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h2 className="font-bold text-lg text-[#0B2A5B] flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span>{t("dashboard.gapAlerts")}</span>
            </h2>
            <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-0.5 rounded">
              {formatNum(gapAlerts.length)} টি সতর্কতা
            </span>
          </div>

          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "যেসব সেন্টারে একটি অধ্যায়ে ৪০% এর বেশি শিশু ৬০% দক্ষতার নিচে অবস্থান করছে:"
              : "Centres where >40% of enrolled students are below 60% chapter mastery:"}
          </p>

          <div className="space-y-3">
            {gapAlerts.map((alert) => (
              <div
                key={alert.id}
                className="p-4 rounded-xl border border-amber-200 bg-amber-50/50 space-y-2"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-bold text-sm text-[#0B2A5B]">{alert.centre}</h4>
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                    {formatNum(alert.belowMasteryPercent)}% পিছিয়ে
                  </span>
                </div>
                <p className="text-xs text-slate-700 font-semibold">{alert.chapter}</p>
                <p className="text-xs text-slate-500">
                  {locale === "bn" ? `প্রস্তাবিত পদক্ষেপ: ${alert.recommendation}` : `Recommended: ${alert.recommendation}`}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sync Health & Tablet status */}
        <div className="lg:col-span-5 efa-card p-6 bg-white space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <h2 className="font-bold text-lg text-[#0B2A5B] flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-[#1565D8]" />
              <span>{locale === "bn" ? "অফলাইন সিঙ্ক স্বাস্থ্য" : "Offline Sync Health"}</span>
            </h2>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-0.5 rounded">
              {locale === "bn" ? "স্বাভাবিক" : "Healthy"}
            </span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
              <span className="text-slate-600">{locale === "bn" ? "সর্বশেষ সিঙ্ক রুটিন" : "Last Global Sync"}</span>
              <span className="font-mono font-bold text-slate-800">আজ ১২:১৫ PM</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
              <span className="text-slate-600">{locale === "bn" ? "অপেক্ষমান অগ্রগতি ইভেন্ট" : "Pending Events"}</span>
              <span className="font-mono font-bold text-emerald-700">০ টি (সব আপ-টু-ডেট)</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex justify-between items-center">
              <span className="text-slate-600">{locale === "bn" ? "স্বয়ংক্রিয় ব্যাকআপ স্থিতি" : "Automated Backup"}</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                সফল (১৪ দিনের হিস্টোরি)
              </span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/admin/students"
              className="btn-navy w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>{locale === "bn" ? "শিক্ষার্থী তালিকা ও পিন রিসেট" : "Manage Students & PINs"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
