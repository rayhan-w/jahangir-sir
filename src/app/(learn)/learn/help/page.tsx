"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { HelpCircle, Send, CheckCircle2, ArrowLeft, Volume2, BookOpen } from "lucide-react";

export default function StudentHelpPage() {
  const { locale, t } = useLanguage();
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    setSubmitted(true);
    // Offline queue
    const queue = JSON.parse(localStorage.getItem("efa_offline_help") || "[]");
    queue.push({
      message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("efa_offline_help", JSON.stringify(queue));
    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1565D8] hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{locale === "bn" ? "ফিরে যান" : "Back"}</span>
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
          {locale === "bn" ? "শিক্ষকের সাহায্য চাও" : "Ask Teacher for Help"}
        </h1>
        <p className="text-sm text-slate-600">
          {locale === "bn"
            ? "কোনো অঙ্ক বা পড়া বুঝতে না পারলে এখানে লিখে পাঠাও। শিক্ষক সেন্টারে সমাধান করে দেবেন।"
            : "Send a message or doubt to your centre teacher. Answers sync directly to your tablet."}
        </p>
      </div>

      {submitted ? (
        <div className="efa-card p-6 bg-emerald-50 border-emerald-200 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#1E8E4F] mx-auto" />
          <h3 className="font-bold text-lg text-emerald-900">
            {locale === "bn" ? "বার্তা শিক্ষকের কাছে পাঠানো হয়েছে!" : "Message Sent to Teacher!"}
          </h3>
          <p className="text-xs text-slate-600">
            {locale === "bn"
              ? "শিক্ষক উত্তর দিলে পরবর্তী সিঙ্কের সময় তুমি দেখতে পাবে।"
              : "Your teacher will respond to your query on next sync."}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-navy text-xs mt-2"
          >
            {locale === "bn" ? "আরেকটি প্রশ্ন করো" : "Ask Another Question"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="efa-card p-6 bg-white space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              {locale === "bn" ? "তোমার প্রশ্নটি লিখো:" : "Type your question:"}
            </label>
            <textarea
              required
              rows={4}
              placeholder={locale === "bn" ? "যেমন: স্যার, ঐকিক নিয়মের ৩ নম্বর অঙ্কটা বুঝতে পারছি না..." : "e.g. Teacher, I have a doubt in chapter 1 math problem..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 border border-[#E2DED5] rounded-xl text-base focus:border-[#1565D8] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="student-tap-target w-full btn-gold font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span>{locale === "bn" ? "শিক্ষককে পাঠাও" : "Send to Teacher"}</span>
          </button>
        </form>
      )}

      {/* Picture Guide on How to Use */}
      <div className="efa-card p-6 bg-white space-y-4">
        <h3 className="font-bold text-base text-[#0B2A5B]">
          {locale === "bn" ? "ট্যাবলেট ব্যবহারের সহজ নিয়মাবলী" : "How to Use This Tablet"}
        </h3>
        <div className="space-y-3 text-sm text-slate-600">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-[#1565D8] font-bold flex items-center justify-center shrink-0">১</span>
            <p>{locale === "bn" ? "ভিডিও দেখতে নীল বাটনে চাপ দাও।" : "Tap blue button to watch video lesson."}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-amber-100 text-[#E9A319] font-bold flex items-center justify-center shrink-0">২</span>
            <p>{locale === "bn" ? "না বুঝলে লাল 'বুঝিনি' বাটনে চাপ দাও, যাতে শিক্ষক সাহায্য করতে পারেন।" : "Tap 'Did not understand' if you need extra explanation."}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#1E8E4F] font-bold flex items-center justify-center shrink-0">৩</span>
            <p>{locale === "bn" ? "কুইজে কমপক্ষে ৬০% নম্বর পেয়ে পরবর্তী পাঠের দরজা খুলে নাও।" : "Score 60%+ to unlock new exciting chapters."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
