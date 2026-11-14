"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { HardDrive, Download, Trash2, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function DownloadsPage() {
  const { locale, formatNum, t } = useLanguage();

  const [packs, setPacks] = useState([
    {
      id: "pack-1",
      subject: "প্রাথমিক গণিত",
      chapter: "অধ্যায় ১: চার প্রক্রিয়া সম্পর্কিত সমস্যাবলি",
      sizeMb: 120,
      downloaded: true
    },
    {
      id: "pack-2",
      subject: "বাংলা",
      chapter: "অধ্যায় ১: এই দেশ এই মানুষ",
      sizeMb: 85,
      downloaded: true
    },
    {
      id: "pack-3",
      subject: "প্রাথমিক বিজ্ঞান",
      chapter: "অধ্যায় ১: আমাদের পরিবেশ",
      sizeMb: 115,
      downloaded: true
    },
    {
      id: "pack-4",
      subject: "প্রাথমিক গণিত",
      chapter: "অধ্যায় ২: গুণ ও ভাগের নিয়মাবলী",
      sizeMb: 95,
      downloaded: false
    }
  ]);

  const handleDelete = (id: string) => {
    setPacks(packs.map((p) => (p.id === id ? { ...p, downloaded: false } : p)));
  };

  const handleDownload = (id: string) => {
    setPacks(packs.map((p) => (p.id === id ? { ...p, downloaded: true } : p)));
  };

  const totalUsedMb = packs
    .filter((p) => p.downloaded)
    .reduce((sum, p) => sum + p.sizeMb, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1565D8] hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{locale === "bn" ? "ফিরে যান" : "Back"}</span>
        </Link>
        <span className="text-xs font-bold text-slate-500">
          {locale === "bn" ? "অফলাইন মেমরি নিয়ন্ত্রণ" : "Offline Storage Manager"}
        </span>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
          {locale === "bn" ? "ডাউনলোড করা পাঠ ও মেমরি" : "Downloaded Packs & Storage"}
        </h1>
        <p className="text-sm text-slate-600">
          {locale === "bn"
            ? "ট্যাবলেটের মেমরি খালি করতে বা নতুন পাঠ অফলাইনে নামাতে এখানে পরিচালনা করো।"
            : "Manage cached lesson packs on this tablet to save device memory."}
        </p>
      </div>

      {/* Storage Meter Bar */}
      <div className="efa-card p-6 bg-white space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-[#1E8E4F]" />
            <span className="font-bold text-base text-[#0B2A5B]">
              {locale === "bn" ? "ব্যবহৃত মেমরি" : "Device Storage Usage"}
            </span>
          </div>
          <span className="font-bold text-sm text-[#1E8E4F]">
            {formatNum(totalUsedMb)} MB / {formatNum(2048)} MB
          </span>
        </div>

        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1E8E4F] transition-all"
            style={{ width: `${(totalUsedMb / 2048) * 100}%` }}
          />
        </div>
        <p className="text-xs text-slate-400">
          {locale === "bn" ? "ট্যাবলেটে এখনো ১.৭ জিবি জায়গা খালি রয়েছে।" : "1.7 GB available free space on this tablet."}
        </p>
      </div>

      {/* Packs List */}
      <div className="space-y-3">
        {packs.map((p) => (
          <div
            key={p.id}
            className="efa-card p-4 sm:p-5 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <span className="text-xs font-bold text-[#1565D8]">{p.subject}</span>
              <h3 className="font-bold text-base text-[#0B2A5B]">{p.chapter}</h3>
              <span className="text-xs text-slate-400 font-mono">
                {formatNum(p.sizeMb)} MB
              </span>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center">
              {p.downloaded ? (
                <>
                  <span className="text-xs font-bold text-[#1E8E4F] bg-emerald-50 px-2.5 py-1 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {locale === "bn" ? "সংরক্ষিত" : "Downloaded"}
                  </span>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                    title="মুছে ফেলুন"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleDownload(p.id)}
                  className="btn-navy text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>{locale === "bn" ? "ডাউনলোড করো" : "Download Pack"}</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
