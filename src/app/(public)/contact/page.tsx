"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const { locale } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "যোগাযোগ ও তথ্য ডেস্ক" : "Contact & Helpdesk"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Get in Touch with the Research Team"}
        </h1>
        <p className="text-base text-[#5B6472]">
          {locale === "bn"
            ? "প্রকল্প সংশ্লিষ্ট যেকোনো তথ্য, পরামর্শ বা অংশীদারিত্বের জন্য সরাসরি আমাদের সাথে যোগাযোগ করতে পারেন।"
            : "Reach out to the BAUST CSE project coordination desk for queries, collaboration, or feedback."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info (Plain Text Labels, Zero Icons) */}
        <div className="lg:col-span-5 border border-[#E5E2DA] rounded-lg p-6 bg-white space-y-5">
          <h2 className="text-lg font-bold text-[#0B2A5B] border-b border-[#E5E2DA] pb-3">
            {locale === "bn" ? "অফিস ঠিকানা ও ডেস্ক" : "Office Address & Helpdesk"}
          </h2>

          <div className="space-y-4 text-sm text-[#1F2937]">
            <div>
              <span className="text-xs font-bold text-[#5B6472] uppercase block">
                {locale === "bn" ? "ঠিকানা:" : "Address:"}
              </span>
              <p className="font-semibold text-[#0B2A5B] mt-0.5">
                {locale === "bn" ? siteConfig.affiliation.bn : siteConfig.affiliation.en}
              </p>
              <p className="text-[#5B6472] text-xs mt-0.5 leading-relaxed">
                {locale === "bn" ? siteConfig.contactAddress.bn : siteConfig.contactAddress.en}
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-[#5B6472] uppercase block">
                {locale === "bn" ? "হেল্পলাইন ও মোবাইল:" : "Helpline & Phone:"}
              </span>
              <a
                href={`tel:${siteConfig.contactPhone}`}
                className="font-mono font-bold text-[#0B2A5B] hover:text-[#1565D8] block mt-0.5"
              >
                {siteConfig.contactPhone}
              </a>
              <span className="text-xs text-[#5B6472]">
                {locale === "bn" ? "(শনিবার – বৃহস্পতিবার, সকাল ৯টা – বিকাল ৫টা)" : "(Sat – Thu, 9 AM – 5 PM)"}
              </span>
            </div>

            <div>
              <span className="text-xs font-bold text-[#5B6472] uppercase block">
                {locale === "bn" ? "অফিসিয়াল ইমেইল:" : "Official Email:"}
              </span>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-mono text-[#1565D8] hover:underline block mt-0.5"
              >
                {siteConfig.contactEmail}
              </a>
            </div>

            <div>
              <span className="text-xs font-bold text-[#5B6472] uppercase block">
                {locale === "bn" ? "প্রকল্প কোড:" : "Project Code:"}
              </span>
              <span className="font-mono font-bold text-[#0B2A5B] block mt-0.5">
                {siteConfig.projectCode}
              </span>
            </div>
          </div>

          {/* Location notes */}
          <div className="p-3.5 bg-[#FAF9F6] border border-[#E5E2DA] rounded text-xs text-[#5B6472] leading-relaxed">
            <strong className="text-[#0B2A5B] block mb-1">
              {locale === "bn" ? "অবস্থান নির্দেশনা:" : "Location Notice:"}
            </strong>
            {locale === "bn"
              ? "সৈয়দপুর সেনানিবাসের ভেতরে অবস্থিত বাউস্ট একাডেমিক ক্যাম্পাস। প্রবেশের সময় ভিজিটর পাস এবং জাতীয় পরিচয়পত্র সাথে রাখুন।"
              : "Inside Saidpur Cantonment. Please bring valid national ID card at entrance."}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 border border-[#E5E2DA] rounded-lg p-6 sm:p-8 bg-white space-y-5">
          <h2 className="text-lg font-bold text-[#0B2A5B] border-b border-[#E5E2DA] pb-3">
            {locale === "bn" ? "বার্তা পাঠান" : "Send a Message"}
          </h2>

          {submitted ? (
            <div className="p-4 bg-[#FAF9F6] border border-[#1E8E4F] rounded text-sm text-[#0B2A5B] space-y-1">
              <h3 className="font-bold">{locale === "bn" ? "ধন্যবাদ! আপনার বার্তা পৌঁছেছে।" : "Thank you! Message received."}</h3>
              <p className="text-xs text-[#5B6472]">{locale === "bn" ? "আমাদের সমন্বয়কারী দ্রুত যোগাযোগ করবেন।" : "We will follow up shortly."}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1">
                    {locale === "bn" ? "আপনার পূর্ণ নাম *" : "Full Name *"}
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#1F2937] mb-1">
                    {locale === "bn" ? "মোবাইল নম্বর *" : "Phone Number *"}
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1">
                  {locale === "bn" ? "ইমেইল এড্রেস" : "Email Address"}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1">
                  {locale === "bn" ? "বিষয় *" : "Subject *"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={locale === "bn" ? "যেমন: সেন্টারে লার্নিং ভিজিট বা অনুদান" : "e.g. Centre visit or collaboration"}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1F2937] mb-1">
                  {locale === "bn" ? "আপনার বার্তা *" : "Message *"}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 border border-[#E5E2DA] rounded text-sm"
                />
              </div>

              <button type="submit" className="btn-navy text-sm py-2 px-6">
                {locale === "bn" ? "বার্তা পাঠান" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
