"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_SETTINGS } from "@/lib/data-store";
import { Heart, Tablet, Sparkles, Phone, CheckCircle2, Send, AlertCircle } from "lucide-react";

export default function SupportPage() {
  const { locale, t } = useLanguage();
  const settings = DEFAULT_SETTINGS;
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    supportType: "tablet",
    amountOrItems: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-block bg-[#E9A319]/20 text-[#0B2A5B] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "সহায়তা ও অংশীদারিত্ব" : "Donate & Support"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের জন্য ট্যাবলেট ও শিক্ষা উপকরণ সহায়তা"
            : "Support Underprivileged Children with Tablets & Learning Kits"}
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          {locale === "bn"
            ? "এই পর্যায়ে কোনো স্বয়ংক্রিয় অনলাইন পেমেন্ট গেটওয়ে রাখা হয়নি। সম্পূর্ণ সহায়তা সরাসরি ও স্বচ্ছতার সাথে ম্যানুয়ালি গ্রহণ করা হয়।"
            : "No online payment gateway in this pilot phase — clearly labelled manual transparent process."}
        </p>
      </div>

      {/* Manual bKash / Nagad / Tablet Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="efa-card p-6 sm:p-8 bg-white space-y-4 border-[#1565D8]/30">
          <div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
            bKash
          </div>
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "বিকাশ ও নগদ সহায়তা নম্বর" : "bKash & Nagad Accounts"}
          </h2>
          <p className="text-sm text-slate-600">
            {locale === "bn"
              ? "সরাসরি বাউস্ট সিএসই গবেষণা একাউন্টের অনুমোদিত নম্বরে অর্থ সহায়তা পাঠাতে পারেন (Send Money / Merchant):"
              : "Direct support to authorized BAUST CSE project official numbers:"}
          </p>
          <div className="space-y-2 pt-2">
            <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-200">
              <span className="font-semibold text-sm text-slate-700">বিকাশ (Personal / Project):</span>
              <span className="font-mono font-bold text-base text-[#1565D8]">{settings.bKashNumber}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between border border-slate-200">
              <span className="font-semibold text-sm text-slate-700">নগদ (Personal / Project):</span>
              <span className="font-mono font-bold text-base text-[#E9A319]">{settings.nagadNumber}</span>
            </div>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-2">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{locale === "bn" ? "টাকা পাঠানোর পর রেফারেন্সে 'EFA' লিখুন।" : "Please write 'EFA' in reference."}</span>
          </div>
        </div>

        <div className="efa-card p-6 sm:p-8 bg-white space-y-4 border-[#1E8E4F]/30">
          <div className="w-12 h-12 rounded-lg bg-emerald-100 text-[#1E8E4F] flex items-center justify-center font-bold">
            <Tablet className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "ব্যবহৃত বা নতুন ট্যাবলেট দান" : "Donate Android Tablets"}
          </h2>
          <p className="text-sm text-slate-600">
            {locale === "bn"
              ? "ন্যূনতম ২জিবি র‍্যাম বিশিষ্ট যেকোনো কার্যক্ষম অ্যান্ড্রয়েড ট্যাবলেট (Walton, Symphony বা অন্যান্য) আমাদের সেন্টারের শিশুদের জন্য উপহার দিতে পারেন।"
              : "Any working Android tablet (minimum 2GB RAM) can be gifted to our learning centres."}
          </p>
          <div className="p-4 bg-emerald-50 rounded-lg text-xs sm:text-sm text-emerald-900 leading-relaxed border border-emerald-100">
            <strong>{locale === "bn" ? "প্রেরণের ঠিকানা:" : "Shipping Address:"}</strong>
            <br />
            {locale === "bn"
              ? "প্রজেক্ট ডিরেক্টর, Education for All (ZRF-26-25400D), সিএসই বিভাগ, বাউস্ট, সৈয়দপুর সেনানিবাস, নীলফামারী।"
              : "Project Director, Education for All (ZRF-26-25400D), Dept. of CSE, BAUST, Saidpur Cantonment, Nilphamari."}
          </div>
        </div>
      </div>

      {/* Support Enquiry Form */}
      <div className="efa-card p-6 sm:p-10 bg-white space-y-6">
        <h2 className="text-xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "সহায়তা বার্তা বা তথ্য নিশ্চিতকরণ ফর্ম" : "Support Confirmation / Inquiry Form"}
        </h2>

        {submitted ? (
          <div className="p-6 bg-emerald-50 rounded-lg text-emerald-800 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-[#1E8E4F] mx-auto" />
            <h3 className="font-bold text-lg">{locale === "bn" ? "ধন্যবাদ! তথ্য সংরক্ষিত হয়েছে।" : "Thank you! Details received."}</h3>
            <p className="text-sm">{locale === "bn" ? "আমাদের টিম শীঘ্রই নিশ্চিতকরণ এসএমএস পাঠাবে।" : "We will send a confirmation SMS shortly."}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "আপনার নাম *" : "Name *"}</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "মোবাইল নম্বর *" : "Phone *"}</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "সহায়তার ধরন" : "Support Type"}</label>
                <select
                  value={formData.supportType}
                  onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm bg-white"
                >
                  <option value="tablet">{locale === "bn" ? "ট্যাবলেট অনুদান" : "Tablet Donation"}</option>
                  <option value="money">{locale === "bn" ? "অর্থ সহায়তা (বিকাশ/নগদ)" : "Financial Donation"}</option>
                  <option value="content">{locale === "bn" ? "ডিজিটাল কনটেন্ট / শিক্ষা উপকরণ" : "Content / Learning Material"}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "পরিমাণ / বিবরণ" : "Amount / Items"}</label>
                <input
                  type="text"
                  placeholder={locale === "bn" ? "যেমন: ২ টি ট্যাবলেট বা ৫০০ টাকা" : "e.g. 2 Tablets or 500 BDT"}
                  value={formData.amountOrItems}
                  onChange={(e) => setFormData({ ...formData, amountOrItems: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "বার্তা বা ট্রানজেকশন আইডি" : "Message or Transaction ID"}</label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm"
              />
            </div>

            <button type="submit" className="btn-navy text-sm font-semibold">
              {locale === "bn" ? "তথ্য পাঠান" : "Submit Confirmation"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
