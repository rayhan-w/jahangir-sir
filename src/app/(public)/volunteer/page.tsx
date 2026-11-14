"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { CheckCircle2, HeartHandshake, Shield, Sparkles, Send } from "lucide-react";

export default function VolunteerPage() {
  const { locale, t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "Nilphamari",
    skills: "",
    availability: "weekend",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-block bg-[#E9A319]/20 text-[#0B2A5B] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "স্বেচ্ছাসেবক শিক্ষক হিসেবে যুক্ত হোন" : "Join as a Volunteer Teacher"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "একটি শিশুর ভবিষ্যৎ বদলে দিতে আপনার সামান্য সময় যথেষ্ট"
            : "A Few Hours of Your Time Can Change a Child's Future"}
        </h1>
        <p className="text-base text-slate-600">
          {locale === "bn"
            ? "আপনি যদি শিক্ষার্থী, তরুণ শিক্ষক বা সমাজের সচেতন মানুষ হন, তবে চর ও বস্তির লার্নিং সেন্টারে শিশুদের মেন্টরিং করতে আমাদের সাথে যুক্ত হতে পারেন।"
            : "University students, young graduates and educators can mentor children at community learning centres."}
        </p>
      </div>

      {submitted ? (
        <div className="efa-card p-8 bg-emerald-50 border-emerald-200 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#1E8E4F] text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "আবেদন সফলভাবে গৃহীত হয়েছে!" : "Application Received Successfully!"}
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
            {locale === "bn"
              ? "ধন্যবাদ! আমাদের সেন্টারের সমন্বয়কারী দল খুব শীঘ্রই আপনার প্রদত্ত মোবাইল নম্বরে যোগাযোগ করবে।"
              : "Thank you! Our programme coordination team will contact your phone shortly."}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-navy text-sm mt-4"
          >
            {locale === "bn" ? "নতুন আবেদন করুন" : "Submit Another Application"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="efa-card p-6 sm:p-10 bg-white space-y-6">
          <h2 className="text-xl font-bold text-[#0B2A5B] border-b border-slate-100 pb-3">
            {locale === "bn" ? "আবেদন ফর্ম" : "Volunteer Application Form"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {locale === "bn" ? "আপনার পূর্ণ নাম *" : "Full Name *"}
              </label>
              <input
                required
                type="text"
                placeholder={locale === "bn" ? "যেমন: তানভীর আহমেদ" : "e.g. Tanvir Ahmed"}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {locale === "bn" ? "মোবাইল নম্বর *" : "Phone Number *"}
              </label>
              <input
                required
                type="tel"
                placeholder="017XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {locale === "bn" ? "ইমেইল (যদি থাকে)" : "Email Address"}
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {locale === "bn" ? "পছন্দের জেলা / এলাকা *" : "Preferred District *"}
              </label>
              <select
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none bg-white"
              >
                <option value="Nilphamari">{locale === "bn" ? "নীলফামারী (সৈয়দপুর)" : "Nilphamari (Saidpur)"}</option>
                <option value="Kurigram">{locale === "bn" ? "কুড়িগ্রাম (ধরলা চর)" : "Kurigram (Char Area)"}</option>
                <option value="Sunamganj">{locale === "bn" ? "সুনামগঞ্জ (হাওর)" : "Sunamganj (Haor)"}</option>
                <option value="Dhaka">{locale === "bn" ? "ঢাকা (বস্তি এলাকা)" : "Dhaka (Urban Slum)"}</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {locale === "bn" ? "কোন বিষয়ের প্রতি আগ্রহ?" : "Subject Expertise"}
              </label>
              <input
                type="text"
                placeholder={locale === "bn" ? "গণিত / ইংরেজি / বিজ্ঞান" : "Math / English / Science"}
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                {locale === "bn" ? "সাপ্তাহিক সময় দেওয়ার সুযোগ *" : "Availability *"}
              </label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none bg-white"
              >
                <option value="weekend">{locale === "bn" ? "শুক্রবার ও শনিবার (সাপ্তাহিক ছুটি)" : "Weekends (Fri / Sat)"}</option>
                <option value="weekday_afternoon">{locale === "bn" ? "কর্মদিবসে বিকেলে (সপ্তাহে ২-৩ দিন)" : "Weekday Afternoons"}</option>
                <option value="full_time">{locale === "bn" ? "ফুল-টাইম স্বেচ্ছাসেবা" : "Full-time Volunteer"}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              {locale === "bn" ? "অতিরিক্ত কোনো বার্তা বা মন্তব্য" : "Additional Notes"}
            </label>
            <textarea
              rows={3}
              placeholder={locale === "bn" ? "আপনার অভিজ্ঞতা বা বিশেষ কোনো ভাবনা..." : "Share your motivation..."}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-navy w-full text-base py-3 rounded-lg font-bold flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{loading ? t("common.loading") : (locale === "bn" ? "আবেদন জমা দিন" : "Submit Volunteer Application")}</span>
          </button>
        </form>
      )}
    </div>
  );
}
