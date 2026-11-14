"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_SETTINGS, INITIAL_CENTRES, INITIAL_STORIES, INITIAL_FAQS, INITIAL_PARTNERS } from "@/lib/data-store";
import {
  BookOpen,
  Sparkles,
  MapPin,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Compass,
  HeartHandshake,
  HelpCircle,
  Laptop
} from "lucide-react";

export default function HomePage() {
  const { locale, formatNum, t } = useLanguage();
  const settings = DEFAULT_SETTINGS;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const subjects = [
    {
      nameBn: "বাংলা",
      nameEn: "Bangla",
      descBn: "বর্ণমালা, ব্যাকরণ ও পাঠ্যবইয়ের সুন্দর গল্প",
      descEn: "Alphabets, grammar and literature stories",
      icon: BookOpen,
      color: "bg-[#1565D8]"
    },
    {
      nameBn: "প্রাথমিক গণিত",
      nameEn: "Elementary Mathematics",
      descBn: "সংখ্যার খেলা, চার প্রক্রিয়া ও ব্যবহারিক হিসাব",
      descEn: "Numbers, four basic operations and arithmetic",
      icon: Calculator,
      color: "bg-[#E9A319]"
    },
    {
      nameBn: "ইংরেজি",
      nameEn: "English for Today",
      descBn: "সহজ কথোপকথন, শব্দভাণ্ডার ও বাক্য গঠন",
      descEn: "Conversations, vocabulary and sentence skills",
      icon: Compass,
      color: "bg-[#0B2A5B]"
    },
    {
      nameBn: "প্রাথমিক বিজ্ঞান",
      nameEn: "Elementary Science",
      descBn: "প্রকৃতি, পরিবেশ, মানবদেহ ও বিজ্ঞানের বিস্ময়",
      descEn: "Nature, environment, human body and wonders",
      icon: Laptop,
      color: "bg-[#1E8E4F]"
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-[#0B2A5B] to-[#0d3470] text-white pt-12 pb-20 sm:pb-24 border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#E9A319]/20 border border-[#E9A319]/40 text-[#E9A319] px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>{settings.projectCode} • BAUST CSE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {t("home.heroTitle")}
              </h1>

              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
                {t("home.heroSubtitle")}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/learn"
                  className="btn-gold text-lg px-7 py-3.5 shadow-md flex items-center justify-center gap-2.5 rounded-lg"
                >
                  <Sparkles className="w-5 h-5 text-[#0B2A5B]" />
                  <span>{t("home.ctaLearn")}</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/centres"
                  className="bg-white/10 hover:bg-white/20 border border-white/25 text-white text-base px-6 py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <MapPin className="w-5 h-5 text-[#E9A319]" />
                  <span>{t("home.ctaCentres")}</span>
                </Link>
              </div>

              <div className="pt-2 text-xs text-blue-200">
                {locale === "bn"
                  ? "✓ ১০০% অফলাইন সুবিধা • কোনো সার্বক্ষণিক ইন্টারনেট বা ফি লাগে না"
                  : "✓ 100% Offline Ready • Zero internet needed during lessons • Completely Free"}
              </div>
            </div>

            {/* Right Column: Classroom Photograph */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 bg-[#0B2A5B]">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80"
                  alt="Rural classroom in Bangladesh with shared tablets"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs sm:text-sm">
                    <p className="font-semibold text-[#E9A319]">
                      {locale === "bn" ? "সৈয়দপুর পাইলট সেন্টার" : "Saidpur Pilot Learning Centre"}
                    </p>
                    <p className="text-slate-200 text-xs mt-0.5">
                      {locale === "bn"
                        ? "ট্যাবলেটে আনন্দময় পাঠ নিচ্ছে রেলওয়ে বস্তির শিশুরা"
                        : "Children in community centre joyfully exploring math lessons"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Live Stats Strip (Values from Settings - Never hardcoded) */}
      <section className="-mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg border border-[#E2DED5] p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {/* Stat 1: Children */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B2A5B] tracking-tight">
                {formatNum(settings.pilotTargets.children)}+
              </div>
              <div className="text-sm font-semibold text-slate-600 mt-1">
                {t("home.stats.children")}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {locale === "bn" ? "পাইলট পর্যায়" : "Pilot Phase Target"}
              </div>
            </div>

            {/* Stat 2: Centres */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1565D8] tracking-tight">
                {formatNum(settings.pilotTargets.centres)}
              </div>
              <div className="text-sm font-semibold text-slate-600 mt-1">
                {t("home.stats.centres")}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {locale === "bn" ? "চর ও বস্তি এলাকা" : "Char & Slum Clusters"}
              </div>
            </div>

            {/* Stat 3: Teachers */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#E9A319] tracking-tight">
                {formatNum(settings.pilotTargets.teachers)}
              </div>
              <div className="text-sm font-semibold text-slate-600 mt-1">
                {t("home.stats.teachers")}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {locale === "bn" ? "নিবেদিত মেন্টর" : "Dedicated Mentors"}
              </div>
            </div>

            {/* Stat 4: Completion */}
            <div className="pt-4 lg:pt-0 lg:px-4 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#1E8E4F] tracking-tight">
                {formatNum(settings.pilotTargets.completionRate)}%
              </div>
              <div className="text-sm font-semibold text-slate-600 mt-1">
                {t("home.stats.completion")}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {locale === "bn" ? "১২ মাসের লক্ষ্যমাত্রা" : "In 12-Month Target"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How It Works - 3 Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.howItWorks.title")}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            {t("home.howItWorks.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="efa-card p-6 relative">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-[#1565D8] flex items-center justify-center font-bold text-xl mb-4">
              {formatNum(1)}
            </div>
            <h3 className="text-lg font-bold text-[#0B2A5B] mb-2">
              {t("home.howItWorks.step1Title")}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t("home.howItWorks.step1Desc")}
            </p>
          </div>

          {/* Step 2 */}
          <div className="efa-card p-6 relative border-[#1E8E4F]/40 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-[#1E8E4F] flex items-center justify-center font-bold text-xl mb-4">
              {formatNum(2)}
            </div>
            <h3 className="text-lg font-bold text-[#0B2A5B] mb-2">
              {t("home.howItWorks.step2Title")}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t("home.howItWorks.step2Desc")}
            </p>
          </div>

          {/* Step 3 */}
          <div className="efa-card p-6 relative">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-[#E9A319] flex items-center justify-center font-bold text-xl mb-4">
              {formatNum(3)}
            </div>
            <h3 className="text-lg font-bold text-[#0B2A5B] mb-2">
              {t("home.howItWorks.step3Title")}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t("home.howItWorks.step3Desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Curriculum / Subjects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.subjectsTitle")}
          </h2>
          <p className="text-base text-slate-600 mt-2">
            {t("home.subjectsSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {subjects.map((sub, idx) => {
            const Icon = sub.icon;
            return (
              <div key={idx} className="efa-card p-6 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-lg ${sub.color} text-white flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0B2A5B] mb-1">
                  {locale === "bn" ? sub.nameBn : sub.nameEn}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {locale === "bn" ? sub.descBn : sub.descEn}
                </p>
                <Link
                  href="/learn"
                  className="text-sm font-semibold text-[#1565D8] hover:underline inline-flex items-center gap-1"
                >
                  <span>{locale === "bn" ? "পাঠ দেখুন" : "Explore Lessons"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Featured Story of the Week */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="efa-card overflow-hidden bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[300px]">
              <img
                src={INITIAL_STORIES[0].photoUrl}
                alt="Story thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#E9A319] text-[#0B2A5B] font-bold text-xs px-3 py-1 rounded">
                {t("home.storyOfWeek")}
              </div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center space-y-4">
              <div className="text-xs text-slate-500 font-medium">
                {INITIAL_STORIES[0].date} • {locale === "bn" ? INITIAL_STORIES[0].authorBn : INITIAL_STORIES[0].authorEn}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B] leading-snug">
                {locale === "bn" ? INITIAL_STORIES[0].titleBn : INITIAL_STORIES[0].titleEn}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {locale === "bn" ? INITIAL_STORIES[0].summaryBn : INITIAL_STORIES[0].summaryEn}
              </p>
              <div className="pt-2">
                <Link
                  href={`/stories/${INITIAL_STORIES[0].slug}`}
                  className="btn-navy text-sm font-semibold inline-flex items-center gap-2"
                >
                  <span>{locale === "bn" ? "পুরো গল্পটি পড়ুন" : "Read Full Story"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Priority Areas Band */}
      <section className="bg-slate-100 py-16 border-y border-[#E2DED5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#1565D8] uppercase tracking-wider block mb-1">
              {locale === "bn" ? "ভৌগোলিক পরিধি" : "Geographic Scope"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
              {t("home.priorityAreasTitle")}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              {t("home.priorityAreasSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { key: "rangpur", label: t("home.areas.rangpur"), sub: "নদী চর এলাকা" },
              { key: "sunamganj", label: t("home.areas.sunamganj"), sub: "হাওর ও জলমহাল" },
              { key: "bandarban", label: t("home.areas.bandarban"), sub: "দুর্গম পাহাড়ি গ্রাম" },
              { key: "patuakhali", label: t("home.areas.patuakhali"), sub: "উপকূলীয় চরাঞ্চল" },
              { key: "dhaka", label: t("home.areas.dhaka"), sub: "শহুরে শ্রমজীবী বস্তি" },
            ].map((area, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-[#E2DED5] text-center shadow-xs">
                <MapPin className="w-6 h-6 text-[#1565D8] mx-auto mb-2" />
                <h4 className="font-bold text-[#0B2A5B] text-sm mb-1">{area.label}</h4>
                <span className="text-xs text-slate-500">{area.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Partners Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">
          {t("home.partnersTitle")}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {INITIAL_PARTNERS.map((p) => (
            <div key={p.id} className="bg-white p-6 rounded-lg border border-[#E2DED5] flex flex-col items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-blue-50 text-[#0B2A5B] flex items-center justify-center font-bold text-sm mb-3">
                {p.logoText}
              </div>
              <h4 className="font-bold text-[#0B2A5B] text-base mb-1">
                {locale === "bn" ? p.nameBn : p.nameEn}
              </h4>
              <p className="text-xs text-slate-500">
                {locale === "bn" ? p.roleBn : p.roleEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Volunteer CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2A5B] rounded-2xl p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
              {t("home.volunteerCtaTitle")}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg">
              {t("home.volunteerCtaSubtitle")}
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/volunteer"
                className="btn-gold text-base px-8 py-3 rounded-lg font-bold shadow-md"
              >
                {t("home.volunteerCtaBtn")}
              </Link>
              <Link
                href="/support"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base px-6 py-3 rounded-lg font-semibold"
              >
                {locale === "bn" ? "ট্যাবলেট সহায়তা প্রদান" : "Donate Tablets"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ Teaser */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
            {t("home.faqTitle")}
          </h2>
        </div>

        <div className="space-y-3">
          {INITIAL_FAQS.map((faq, idx) => (
            <div key={faq.id} className="efa-card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-4 sm:p-5 font-bold text-base text-[#0B2A5B] flex justify-between items-center hover:bg-slate-50"
              >
                <span>{locale === "bn" ? faq.questionBn : faq.questionEn}</span>
                <span className="text-[#1565D8] text-xl ml-4 font-normal">
                  {openFaq === idx ? "−" : "+"}
                </span>
              </button>
              {openFaq === idx && (
                <div className="p-4 sm:p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {locale === "bn" ? faq.answerBn : faq.answerEn}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/faq" className="text-sm font-semibold text-[#1565D8] hover:underline">
            {locale === "bn" ? "সবগুলো প্রশ্নোত্তর দেখুন →" : "View all FAQs →"}
          </Link>
        </div>
      </section>
    </div>
  );
}
