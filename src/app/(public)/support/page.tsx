"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function SupportPage() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    supportType: "tablet",
    amountOrItems: "৮,৫০০ টাকা",
    message: ""
  });

  const handleSelectTier = (type: string, amount: string) => {
    setFormData((prev) => ({
      ...prev,
      supportType: type,
      amountOrItems: amount
    }));
    const el = document.getElementById("confirm-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "সহায়তা ও অংশীদারিত্ব" : "Donate & Support"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের জন্য ট্যাবলেট ও শিক্ষা সহায়তা"
            : "Support Underprivileged Children with Tablets & Learning Kits"}
        </h1>
        <p className="text-base text-[#5B6472]">
          {locale === "bn"
            ? "এই পর্যায়ে কোনো স্বয়ংক্রিয় অনলাইন পেমেন্ট গেটওয়ে রাখা হয়নি। সম্পূর্ণ সহায়তা সরাসরি ও স্বচ্ছতার সাথে ম্যানুয়ালি গ্রহণ করা হয়।"
            : "No online payment gateway in this pilot phase — clearly labelled manual transparent process."}
        </p>
      </div>

      {/* 3 Tier Cards (Muktadar Boighor Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Tier 1 */}
        <div className="border border-[#E5E2DA] rounded-lg p-6 bg-white flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#5B6472] uppercase tracking-wide">
                {locale === "bn" ? "১ জন শিশুর শিক্ষা" : "1 Child Education"}
              </span>
              <div className="text-3xl font-bold text-[#0B2A5B] mt-1">
                {locale === "bn" ? "৳ ১,০০০" : "৳ 1,000"}
              </div>
              <p className="text-xs text-[#5B6472] mt-0.5">
                {locale === "bn" ? "৩ মাসের শিক্ষা সহায়তা" : "3 months support"}
              </p>
            </div>
            <div className="border-t border-[#E5E2DA] pt-4 space-y-2 text-sm text-[#1F2937]">
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "৩ মাসের শিক্ষা উপকরণ ও খাতা-কলম" : "3 months study materials"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "সেন্টারে ট্যাবলেটে পড়ার সম্পূর্ণ সুযোগ" : "Access to centre tablets"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "মাসিক অগ্রগতি পর্যবেক্ষণ রিপোর্ট" : "Monthly progress report"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "শিক্ষার্থীর পক্ষ থেকে ধন্যবাদ বার্তা" : "Student thank you note"}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleSelectTier("child", "১,০০০ টাকা")}
            className="w-full py-2.5 px-4 border border-[#0B2A5B] text-[#0B2A5B] hover:bg-[#0B2A5B] hover:text-white rounded-lg text-sm font-semibold transition-colors"
          >
            {locale === "bn" ? "সহায়তা করুন →" : "Support Now →"}
          </button>
        </div>

        {/* Tier 2 (Highlighted) */}
        <div className="border-2 border-[#0B2A5B] rounded-lg p-6 bg-[#FAF9F6] flex flex-col justify-between space-y-5 relative">
          <div className="space-y-4">
            <div>
              <div className="inline-block bg-[#0B2A5B] text-white text-[11px] font-bold px-2 py-0.5 rounded mb-1">
                {locale === "bn" ? "সবচেয়ে প্রয়োজন" : "Most Needed"}
              </div>
              <span className="text-xs font-semibold text-[#5B6472] uppercase tracking-wide block">
                {locale === "bn" ? "১টি লার্নিং ট্যাবলেট" : "1 Learning Tablet"}
              </span>
              <div className="text-3xl font-bold text-[#0B2A5B] mt-1">
                {locale === "bn" ? "৳ ৮,৫০০" : "৳ 8,500"}
              </div>
              <p className="text-xs text-[#5B6472] mt-0.5">
                {locale === "bn" ? "সেন্টারের জন্য স্থায়ী ট্যাবলেট" : "Permanent tablet for centre"}
              </p>
            </div>
            <div className="border-t border-[#E5E2DA] pt-4 space-y-2 text-sm text-[#1F2937]">
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "১টি স্থায়ী অ্যান্ড্রয়েড লার্নিং ট্যাবলেট" : "1 Android learning tablet"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "অফলাইন শিক্ষা অ্যাপ ও সম্পূর্ণ কনটেন্ট" : "Preloaded offline learning app"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "ট্যাবলেটে স্পন্সরের নাম / উৎসর্গকৃত লেবেল" : "Sponsor name dedication label"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "সরাসরি শিশুদের ব্যবহারের ছবি ও আপডেট" : "Photos and regular usage updates"}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleSelectTier("tablet", "৮,৫০০ টাকা")}
            className="w-full py-2.5 px-4 bg-[#0B2A5B] text-white hover:bg-[#1565D8] rounded-lg text-sm font-semibold transition-colors"
          >
            {locale === "bn" ? "ট্যাবলেট স্পন্সর করুন →" : "Sponsor Tablet →"}
          </button>
        </div>

        {/* Tier 3 */}
        <div className="border border-[#E5E2DA] rounded-lg p-6 bg-white flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-semibold text-[#5B6472] uppercase tracking-wide">
                {locale === "bn" ? "১টি লার্নিং সেন্টার" : "1 Learning Centre"}
              </span>
              <div className="text-3xl font-bold text-[#0B2A5B] mt-1">
                {locale === "bn" ? "৳ ২৫,০০০" : "৳ 25,000"}
              </div>
              <p className="text-xs text-[#5B6472] mt-0.5">
                {locale === "bn" ? "১ মাসের সম্পূর্ণ সেন্টার পরিচালনা" : "1 month centre operations"}
              </p>
            </div>
            <div className="border-t border-[#E5E2DA] pt-4 space-y-2 text-sm text-[#1F2937]">
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "৩০+ শিশুর ১ মাসের সার্বিক পাঠদান" : "30+ children full learning"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "স্বেচ্ছাসেবক শিক্ষক ও সেন্টারের রক্ষণাবেক্ষণ" : "Volunteer teachers & upkeep"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "সেন্টারের ডিজিটাল অডিট ও ইমপ্যাক্ট রিপোর্ট" : "Digital audit & impact report"}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#1E8E4F] font-bold">✓</span>
                <span>{locale === "bn" ? "প্রাতিষ্ঠানিক বা ব্যক্তিগত সম্মাননা সনদ" : "Official recognition certificate"}</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => handleSelectTier("centre", "২৫,০০০ টাকা")}
            className="w-full py-2.5 px-4 border border-[#0B2A5B] text-[#0B2A5B] hover:bg-[#0B2A5B] hover:text-white rounded-lg text-sm font-semibold transition-colors"
          >
            {locale === "bn" ? "সেন্টার স্পন্সর করুন →" : "Sponsor Centre →"}
          </button>
        </div>
      </div>

      {/* Rules / Steps Section (Muktadar Boighor Style) */}
      <div className="border-t border-[#E5E2DA] pt-8 space-y-4">
        <h2 className="text-lg font-bold text-[#0B2A5B]">
          {locale === "bn" ? "সহায়তা পেমেন্ট ও অ্যাক্টিভেশন নির্দেশিকা:" : "Payment & Activation Guidelines:"}
        </h2>
        <div className="space-y-2.5 text-sm sm:text-base text-[#1F2937] leading-relaxed">
          <p>
            <span className="font-bold text-[#0B2A5B]">১. </span>
            {locale === "bn"
              ? `আপনার পছন্দের সহায়তা নির্ধারণ করে বিকাশ (${siteConfig.bKashNumber} - Send Money / Merchant) অথবা নগদ (${siteConfig.nagadNumber} - Send Money / Merchant)-এ সেন্ড মানি করুন।`
              : `Choose your preferred support tier and send money via bKash (${siteConfig.bKashNumber}) or Nagad (${siteConfig.nagadNumber}).`}
          </p>
          <p>
            <span className="font-bold text-[#0B2A5B]">২. </span>
            {locale === "bn"
              ? "আপনার পেমেন্টের TrxID এবং রেজিস্টার্ড মোবাইল নম্বর দিয়ে নিচের কনফার্মেশন ফর্মটি পূরণ করুন অথবা সরাসরি প্রজেক্ট ডেস্কে কল করুন।"
              : "Fill the confirmation form below with your payment TrxID and phone number, or call project desk directly."}
          </p>
          <p>
            <span className="font-bold text-[#0B2A5B]">৩. </span>
            {locale === "bn"
              ? "সর্বোচ্চ ২৪ ঘণ্টার মধ্যে অ্যাডমিন যাচাই করে আপনার মোবাইল নম্বরে নিশ্চিতকরণ এসএমএস এবং সহায়তার রশিদ প্রদান করবে।"
              : "Within 24 hours our team verifies the transaction and sends an official confirmation SMS & receipt."}
          </p>
        </div>
      </div>

      {/* Manual bKash / Nagad / Tablet Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-[#E5E2DA] rounded-lg p-6 bg-white space-y-3">
          <h2 className="text-lg font-bold text-[#0B2A5B]">
            {locale === "bn" ? "বিকাশ ও নগদ সহায়তা নম্বর" : "bKash & Nagad Accounts"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "সরাসরি বাউস্ট সিএসই গবেষণা একাউন্টের অনুমোদিত নম্বরে অর্থ সহায়তা পাঠাতে পারেন:"
              : "Direct support to authorized BAUST CSE project official numbers:"}
          </p>
          <div className="space-y-1.5 pt-2 text-sm text-[#1F2937]">
            <p>
              <span className="text-[#5B6472]">বিকাশ (Personal / Merchant): </span>
              <span className="font-mono font-bold text-[#0B2A5B]">{siteConfig.bKashNumber}</span>
            </p>
            <p>
              <span className="text-[#5B6472]">নগদ (Personal / Merchant): </span>
              <span className="font-mono font-bold text-[#0B2A5B]">{siteConfig.nagadNumber}</span>
            </p>
          </div>
          <p className="text-xs text-[#5B6472] pt-1">
            {locale === "bn" ? "* টাকা পাঠানোর পর রেফারেন্সে 'EFA' লিখুন।" : "* Please write 'EFA' in reference."}
          </p>
        </div>

        <div className="border border-[#E5E2DA] rounded-lg p-6 bg-white space-y-3">
          <h2 className="text-lg font-bold text-[#0B2A5B]">
            {locale === "bn" ? "ব্যবহৃত বা নতুন ট্যাবলেট দান" : "Donate Android Tablets"}
          </h2>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? "ন্যূনতম ২জিবি র‍্যাম বিশিষ্ট যেকোনো কার্যকর অ্যান্ড্রয়েড ট্যাবলেট আমাদের সেন্টারের শিশুদের জন্য উপহার দিতে পারেন।"
              : "Any working Android tablet (minimum 2GB RAM) can be gifted to our learning centres."}
          </p>
          <div className="p-3 bg-[#FAF9F6] border border-[#E5E2DA] rounded text-xs text-[#1F2937] leading-relaxed">
            <strong>{locale === "bn" ? "প্রেরণের ঠিকানা:" : "Shipping Address:"}</strong>
            <br />
            {locale === "bn"
              ? `প্রজেক্ট ডিরেক্টর, Education for All (${siteConfig.projectCode}), সিএসই বিভাগ, বাউস্ট, সৈয়দপুর সেনানিবাস, নীলফামারী।`
              : `Project Director, Education for All (${siteConfig.projectCode}), Dept. of CSE, BAUST, Saidpur Cantonment, Nilphamari.`}
          </div>
        </div>
      </div>

      {/* Support Enquiry Form */}
      <div id="confirm-form" className="border border-[#E5E2DA] rounded-lg p-6 sm:p-8 bg-white space-y-5">
        <h2 className="text-lg font-bold text-[#0B2A5B] border-b border-[#E5E2DA] pb-3">
          {locale === "bn" ? "সহায়তা বার্তা বা তথ্য নিশ্চিতকরণ ফর্ম" : "Support Confirmation / Inquiry Form"}
        </h2>

        {submitted ? (
          <div className="p-4 bg-[#FAF9F6] border border-[#1E8E4F] rounded text-sm text-[#0B2A5B] space-y-1">
            <h3 className="font-bold">{locale === "bn" ? "ধন্যবাদ! তথ্য সংরক্ষিত হয়েছে।" : "Thank you! Details received."}</h3>
            <p className="text-xs text-[#5B6472]">{locale === "bn" ? "আমাদের টিম শীঘ্রই নিশ্চিতকরণ এসএমএস পাঠাবে।" : "We will send a confirmation SMS shortly."}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1">{locale === "bn" ? "আপনার নাম *" : "Name *"}</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1">{locale === "bn" ? "মোবাইল নম্বর *" : "Phone *"}</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1">{locale === "bn" ? "সহায়তার ধরন" : "Support Type"}</label>
                <select
                  value={formData.supportType}
                  onChange={(e) => setFormData({ ...formData, supportType: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm bg-white"
                >
                  <option value="child">{locale === "bn" ? "১ জন শিশুর শিক্ষা (৳ ১,০০০)" : "1 Child Education (৳ 1,000)"}</option>
                  <option value="tablet">{locale === "bn" ? "১টি ট্যাবলেট স্পন্সর (৳ ৮,৫০০)" : "1 Learning Tablet (৳ 8,500)"}</option>
                  <option value="centre">{locale === "bn" ? "১টি লার্নিং সেন্টার স্পন্সর (৳ ২৫,০০০)" : "1 Centre Sponsor (৳ 25,000)"}</option>
                  <option value="used-tablet">{locale === "bn" ? "ব্যবহৃত/নতুন ট্যাবলেট দান" : "Used/New Tablet Donation"}</option>
                  <option value="general">{locale === "bn" ? "সাধারণ সহায়তা / অনুদান" : "General Donation"}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1">{locale === "bn" ? "পরিমাণ / বিবরণ" : "Amount / Items"}</label>
                <input
                  type="text"
                  placeholder={locale === "bn" ? "যেমন: ৮,৫০০ টাকা বা ১টি ট্যাবলেট" : "e.g. 8,500 BDT or 1 Tablet"}
                  value={formData.amountOrItems}
                  onChange={(e) => setFormData({ ...formData, amountOrItems: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1F2937] mb-1">{locale === "bn" ? "বার্তা বা ট্রানজেকশন আইডি (TrxID)" : "Message or Transaction ID (TrxID)"}</label>
              <textarea
                rows={2}
                placeholder={locale === "bn" ? "বিকাশ বা নগদ ট্রানজেকশন আইডি লিখুন (যদি টাকা পাঠিয়ে থাকেন)" : "Enter bKash/Nagad TrxID if applicable"}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
              />
            </div>

            <button type="submit" className="btn-navy text-sm py-2 px-5">
              {locale === "bn" ? "তথ্য পাঠান" : "Submit Confirmation"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
