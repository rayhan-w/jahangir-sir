"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";
import { INITIAL_FAQS, INITIAL_PARTNERS } from "@/lib/data-store";

export default function HomePage() {
  const { locale, formatNum, t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const subjects = [
    {
      nameBn: "বাংলা",
      nameEn: "Bangla",
      descBn: "বর্ণমালা, ব্যাকরণ ও পাঠ্যবইয়ের সুন্দর গল্প",
      descEn: "Alphabets, grammar and literature stories",
    },
    {
      nameBn: "প্রাথমিক গণিত",
      nameEn: "Elementary Mathematics",
      descBn: "সংখ্যার খেলা, চার প্রক্রিয়া ও ব্যবহারিক হিসাব",
      descEn: "Numbers, four basic operations and arithmetic",
    },
    {
      nameBn: "ইংরেজি",
      nameEn: "English for Today",
      descBn: "সহজ কথোপকথন, শব্দভাণ্ডার ও বাক্য গঠন",
      descEn: "Conversations, vocabulary and sentence skills",
    },
    {
      nameBn: "প্রাথমিক বিজ্ঞান",
      nameEn: "Elementary Science",
      descBn: "প্রকৃতি, পরিবেশ, মানবদেহ ও বিজ্ঞানের বিস্ময়",
      descEn: "Nature, environment, human body and wonders",
    },
  ];

  const priorityAreas = [
    { name: t("home.areas.rangpur"), desc: "নদী চর এলাকা — প্রতিবছর বন্যায় যোগাযোগ বিচ্ছিন্ন অঞ্চলে অফলাইন শিক্ষা" },
    { name: t("home.areas.sunamganj"), desc: "হাওর ও জলমহাল — বর্ষাকালে যোগাযোগহীন প্রত্যন্ত জনপদের শিশুদের জন্য" },
    { name: t("home.areas.bandarban"), desc: "দুর্গম পাহাড়ি গ্রাম — বিদ্যুৎ ও মোবাইল নেটওয়ার্কবিহীন এলাকায় শিখন সহায়তা" },
    { name: t("home.areas.patuakhali"), desc: "উপকূলীয় চরাঞ্চল — প্রাকৃতিক দুর্যোগপ্রবণ দূরবর্তী উপকূলীয় জনপদ" },
    { name: t("home.areas.dhaka"), desc: "শহুরে শ্রমজীবী বস্তি — সুবিধাবঞ্চিত ও স্কুলছুট শিশুদের ডিজিটাল ক্লাসরুম" },
  ];

  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* 2. Hero Section */}
      <section className="pt-8 sm:pt-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div className="md:col-span-7 space-y-4">
              <div className="text-xs sm:text-sm font-semibold text-[#1E8E4F]">
                {locale === "bn"
                  ? `প্রকল্প নং: ${siteConfig.projectCode} • বাউস্ট, সিএসই বিভাগ`
                  : `Project No: ${siteConfig.projectCode} • Dept. of CSE, BAUST`}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-[#0B2A5B] tracking-tight leading-tight">
                {t("home.heroTitle")}
              </h1>

              <p className="text-base sm:text-lg text-[#5B6472] leading-relaxed">
                {t("home.heroSubtitle")}
              </p>

              {/* Action: ONE navy button + ONE plain text link */}
              <div className="pt-2 flex flex-wrap items-center gap-6">
                <a href="#how-it-works" className="btn-navy">
                  {locale === "bn" ? "কীভাবে কাজ করে" : "How It Works"}
                </a>
                <a
                  href="#curriculum"
                  className="text-base font-semibold text-[#1565D8] hover:underline"
                >
                  {locale === "bn" ? "পাঠ্যক্রম দেখুন →" : "View Curriculum →"}
                </a>
              </div>
            </div>

            {/* Right: One Real Classroom Photograph (Radius 8px, NO shadow, NO floating cards) */}
            <div className="md:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80"
                alt="Classroom in Bangladesh"
                className="w-full h-72 sm:h-84 object-cover rounded-lg border border-[#E5E2DA]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats Strip (Hairline top and bottom, NO boxes, NO cards, NO icons) */}
      <section className="border-y border-[#E5E2DA] py-8 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#0B2A5B]">
                {formatNum(siteConfig.stats.children)}+
              </div>
              <div className="text-sm text-[#5B6472] mt-1">
                {t("home.stats.children")}
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#0B2A5B]">
                {formatNum(siteConfig.stats.centres)}
              </div>
              <div className="text-sm text-[#5B6472] mt-1">
                {t("home.stats.centres")}
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#0B2A5B]">
                {formatNum(siteConfig.stats.teachers)}
              </div>
              <div className="text-sm text-[#5B6472] mt-1">
                {t("home.stats.teachers")}
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-bold text-[#0B2A5B]">
                {formatNum(siteConfig.stats.completionRate)}%
              </div>
              <div className="text-sm text-[#5B6472] mt-1">
                {t("home.stats.completion")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. কীভাবে কাজ করে (3 plain columns, 3px navy top border, NO circles, NO icons, NO cards) */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.howItWorks.title")}
          </h2>
          <p className="text-base text-[#5B6472] mt-1">
            {t("home.howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="border-t-[3px] border-[#0B2A5B] pt-4 space-y-2">
            <span className="text-xs font-bold text-[#1E8E4F] uppercase tracking-wider block">
              {locale === "bn" ? "ধাপ ১" : "Step 1"}
            </span>
            <h3 className="text-lg font-bold text-[#0B2A5B]">
              {t("home.howItWorks.step1Title")}
            </h3>
            <p className="text-sm text-[#5B6472] leading-relaxed">
              {t("home.howItWorks.step1Desc")}
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-t-[3px] border-[#0B2A5B] pt-4 space-y-2">
            <span className="text-xs font-bold text-[#1E8E4F] uppercase tracking-wider block">
              {locale === "bn" ? "ধাপ ২" : "Step 2"}
            </span>
            <h3 className="text-lg font-bold text-[#0B2A5B]">
              {t("home.howItWorks.step2Title")}
            </h3>
            <p className="text-sm text-[#5B6472] leading-relaxed">
              {t("home.howItWorks.step2Desc")}
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-t-[3px] border-[#0B2A5B] pt-4 space-y-2">
            <span className="text-xs font-bold text-[#1E8E4F] uppercase tracking-wider block">
              {locale === "bn" ? "ধাপ ৩" : "Step 3"}
            </span>
            <h3 className="text-lg font-bold text-[#0B2A5B]">
              {t("home.howItWorks.step3Title")}
            </h3>
            <p className="text-sm text-[#5B6472] leading-relaxed">
              {t("home.howItWorks.step3Desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 5. পাঠ্যক্রম (Hairline list — subject bold navy on left, description grey on right, NO cards, NO buttons) */}
      <section id="curriculum" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.subjectsTitle")}
          </h2>
          <p className="text-base text-[#5B6472] mt-1">
            {t("home.subjectsSubtitle")}
          </p>
        </div>

        <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
          {subjects.map((sub, idx) => (
            <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-base sm:text-lg font-bold text-[#0B2A5B] sm:w-1/3">
                {locale === "bn" ? sub.nameBn : sub.nameEn}
              </span>
              <span className="text-sm sm:text-base text-[#5B6472] sm:w-2/3">
                {locale === "bn" ? sub.descBn : sub.descEn}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. অগ্রাধিকার এলাকার উদাহরণ (Hairline list style — area name bold + short description, NO cards, NO icons) */}
      <section id="priority-areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.priorityAreasTitle")}
          </h2>
          <p className="text-base text-[#5B6472] mt-1">
            {t("home.priorityAreasSubtitle")}
          </p>
        </div>

        <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
          {priorityAreas.map((area, idx) => (
            <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-base sm:text-lg font-bold text-[#0B2A5B] sm:w-1/3">
                {area.name}
              </span>
              <span className="text-sm sm:text-base text-[#5B6472] sm:w-2/3">
                {area.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. সহযোগী সংস্থাসমূহ (Hairline list — full names and roles as plain text, NO logo boxes/cards) */}
      <section id="partners" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.partnersTitle")}
          </h2>
        </div>

        <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
          {INITIAL_PARTNERS.map((p) => (
            <div key={p.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-base sm:text-lg font-bold text-[#0B2A5B] sm:w-1/2">
                {locale === "bn" ? p.nameBn : p.nameEn}
              </span>
              <span className="text-sm sm:text-base text-[#5B6472] sm:w-1/2">
                {locale === "bn" ? p.roleBn : p.roleEn}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. যুক্ত হোন (CTA band — light #FAF9F6 background, centred heading, existing text, ONE navy button) */}
      <section className="bg-[#FAF9F6] border-y border-[#E5E2DA] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.volunteerCtaTitle")}
          </h2>
          <p className="text-base text-[#5B6472] max-w-2xl mx-auto">
            {t("home.volunteerCtaSubtitle")}
          </p>
          <div className="pt-2">
            <Link href="/contact" className="btn-navy">
              {locale === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ (Plain accordion with hairlines, NO boxes, simple +/- text sign) */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.faqTitle")}
          </h2>
        </div>

        <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
          {INITIAL_FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={faq.id} className="py-4">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left font-bold text-base sm:text-lg text-[#0B2A5B] flex justify-between items-center cursor-pointer"
                >
                  <span>{locale === "bn" ? faq.questionBn : faq.questionEn}</span>
                  <span className="text-lg font-mono text-[#5B6472] ml-4 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-2 text-sm sm:text-base text-[#5B6472] leading-relaxed">
                    {locale === "bn" ? faq.answerBn : faq.answerEn}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
