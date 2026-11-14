"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FileEdit, Save, CheckCircle2 } from "lucide-react";

export default function AdminCmsPage() {
  const { locale, t } = useLanguage();

  const [heroTitleBn, setHeroTitleBn] = useState("প্রতিটি শিশুর জন্য মানসম্মত শিক্ষা");
  const [heroSubtitleBn, setHeroSubtitleBn] = useState("চর, হাওর, উপকূলীয় এবং প্রত্যন্ত অঞ্চলের সুবিধাবঞ্চিত শিশুদের জন্য অফলাইন-ফার্স্ট ডিজিটাল শিক্ষা।");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.cms")}
          </h1>
          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "পাবলিক ওয়েবসাইটের টেক্সট, ফটো, হেডলাইন ও সেকশন সরাসরি পরিবর্তন করুন (কোনো কোড পরিবর্তনের প্রয়োজন নেই)।"
              : "Manage public website copy, hero texts, stories and gallery without redeployment."}
          </p>
        </div>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#1E8E4F]" />
          <span>ওয়েবসাইট কনটেন্ট সফলভাবে আপডেট হয়েছে!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div className="efa-card p-6 bg-white space-y-4">
          <h2 className="text-lg font-bold text-[#0B2A5B] border-b pb-2">
            নীড়পাতা হিরো সেকশন (Home Hero)
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                প্রধান শিরোনাম (বাংলা)
              </label>
              <input
                type="text"
                value={heroTitleBn}
                onChange={(e) => setHeroTitleBn(e.target.value)}
                className="w-full px-3 py-2 border rounded text-sm font-bold text-[#0B2A5B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                সাব-টাইটেল বর্ণনা (বাংলা)
              </label>
              <textarea
                rows={3}
                value={heroSubtitleBn}
                onChange={(e) => setHeroSubtitleBn(e.target.value)}
                className="w-full px-3 py-2 border rounded text-sm"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn-navy py-2.5 px-6 rounded-lg font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>কনটেন্ট পরিবর্তন সংরক্ষণ করুন</span>
        </button>
      </form>
    </div>
  );
}
