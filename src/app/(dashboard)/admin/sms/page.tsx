"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_CENTRES } from "@/lib/data-store";
import { Send, CheckCircle2, MessageSquare, AlertCircle } from "lucide-react";

export default function AdminSmsPage() {
  const { locale, formatNum, t } = useLanguage();
  const [recipientGroup, setRecipientGroup] = useState("all_guardians");
  const [message, setMessage] = useState("প্রিয় অভিভাবক, আগামী শনিবার সৈয়দপুর লার্নিং সেন্টারে মাসিক মূল্যায়ন অনুষ্ঠিত হবে। আপনার সন্তানকে সময়মতো পাঠাবেন। - Education for All, BAUST");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSendSms = (e: React.FormEvent) => {
    e.preventDefault();
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.sms")}
          </h1>
          <p className="text-xs text-slate-500">
            অভিভাবক ও শিক্ষকদের মোবাইলে জরুরি নোটিশ, উপস্থিতি সতর্কতা ও অগ্রগতি বার্তা প্রেরণ।
          </p>
        </div>
      </div>

      {sentSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#1E8E4F]" />
          <span>এসএমএস কিউতে সফলভাবে জমা হয়েছে এবং পাঠানো হচ্ছে!</span>
        </div>
      )}

      <form onSubmit={handleSendSms} className="efa-card p-6 bg-white space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
            প্রাপক গ্রুপ নির্বাচন
          </label>
          <select
            value={recipientGroup}
            onChange={(e) => setRecipientGroup(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm bg-white font-semibold"
          >
            <option value="all_guardians">সকল অভিভাবক (২৯৫ জন)</option>
            <option value="saidpur_guardians">সৈয়দপুর সেন্টারের অভিভাবক (১২০ জন)</option>
            <option value="kurigram_guardians">কুড়িগ্রাম চর সেন্টারের অভিভাবক (৯৫ জন)</option>
            <option value="teachers">সকল স্বেচ্ছাসেবক শিক্ষক (৫০ জন)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
            বার্তার টেক্সট (বাংলা ইউনিকোড / ইংরেজি)
          </label>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 border rounded-lg text-sm font-sans"
          />
          <div className="flex justify-between text-[11px] text-slate-400 mt-1">
            <span>অক্ষর সংখ্যা: {formatNum(message.length)}</span>
            <span>১টি এসএমএস অংশ (১৬০ ক্যারেক্টার)</span>
          </div>
        </div>

        <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-900 border border-amber-200">
          ⚠️ প্রজেক্ট গেটওয়ে: BD Teletalk / Grameenphone SMS API (মাসিক বরাদ্দ ৫,০০০ এসএমএস)।
        </div>

        <button
          type="submit"
          className="btn-navy py-2.5 px-6 rounded-lg font-bold text-sm flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <Send className="w-4 h-4" />
          <span>এসএমএস সম্প্রচার শুরু করুন</span>
        </button>
      </form>
    </div>
  );
}
