"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_SETTINGS } from "@/lib/data-store";
import { BookOpen, Users, Target, Calendar, Award, CheckCircle2, FileText, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { locale, formatNum, t } = useLanguage();
  const settings = DEFAULT_SETTINGS;

  const timelineSteps = [
    {
      month: locale === "bn" ? "মাস ১ - ২" : "Month 1 - 2",
      titleBn: "সেন্টার স্থাপন ও কারিগরি অবকাঠামো প্রস্তুত",
      titleEn: "Centre Setup & Offline Hardware Deployment",
      descBn: "সৈয়দপুর ও কুড়িগ্রামের চর ও বস্তি এলাকায় প্রথম ধাপের কমিউনিটি সেন্টার চিহ্নিতকরণ এবং ট্যাবলেট ও সার্ভার স্থাপন।",
      descEn: "Identifying pilot centre locations in Saidpur & Kurigram; deploying shared Android tablets."
    },
    {
      month: locale === "bn" ? "মাস ৩ - ৪" : "Month 3 - 4",
      titleBn: "NCTB ডিজিটাল কনটেন্ট তৈরি ও স্থানীয় শিক্ষণ",
      titleEn: "NCTB Content Digitization & Local Pilot",
      descBn: "১ম থেকে ৫ম শ্রেণির বাংলা, গণিত ও বিজ্ঞানের ভিডিও, অডিও ও কুইজ মডিউল স্থানীয় শিক্ষার্থীদের উপযোগী করে তৈরি।",
      descEn: "Digitizing Class 1-5 Bangla, Math, and Science into lightweight offline packages."
    },
    {
      month: locale === "bn" ? "মাস ৫ - ৮" : "Month 5 - 8",
      titleBn: "শিক্ষার্থী ভর্তি ও দৈনিক অফলাইন ক্লাস",
      titleEn: "Student Enrolment & Daily Learning Sessions",
      descBn: "১,০০০ সুবিধাবঞ্চিত শিশুর ভর্তি সম্পন্ন এবং ৫০ জন স্বেচ্ছাসেবক শিক্ষকের নিবিড় নির্দেশনায় নিয়মিত শিখন।",
      descEn: "Enrolling 1,000 children across 10 centres under guidance of 50 volunteer teachers."
    },
    {
      month: locale === "bn" ? "মাস ৯ - ১২" : "Month 9 - 12",
      titleBn: "দক্ষতা মূল্যায়ন, গবেষণা প্রতিবেদন ও সম্প্রসারণ",
      titleEn: "Mastery Evaluation, Research Report & Scaling",
      descBn: "৮০% কোর্স সমাপনী হার অর্জন এবং জাতীয় পর্যায়ে মডেলটি সম্প্রসারণের জন্য গবেষণা প্রতিবেদন উপস্থাপন।",
      descEn: "Achieving 80% completion and publishing comprehensive research outcomes via BAUST CSE."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Title & Introduction */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-block bg-[#1565D8]/10 text-[#1565D8] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "আমাদের পরিচিতি ও লক্ষ্য" : "About the Project"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের জন্য প্রযুক্তিভিত্তিক মুক্তির পথ"
            : "Empowering Underprivileged Children Through Digital Learning"}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {locale === "bn"
            ? "বাংলাদেশ আর্মি ইউনিভার্সিটি অব ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি (বাউস্ট), সৈয়দপুর-এর কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (সিএসই) বিভাগের প্রত্যক্ষ গবেষণায় পরিচালিত একটি বিশেষ প্রকল্প।"
            : "An institutional research and field project led by the Department of Computer Science & Engineering at BAUST, Saidpur (Project No: ZRF-26-25400D)."}
        </p>
      </div>

      {/* The Problem in Numbers */}
      <div className="efa-card p-8 bg-white border-[#E2DED5]">
        <h2 className="text-xl font-bold text-[#0B2A5B] mb-6">
          {locale === "bn" ? "পরিস্থিতির বাস্তবতা ও সমস্যা (সংখ্যায়)" : "The Reality in Numbers"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-4 border-[#E9A319] pl-4">
            <div className="text-3xl font-extrabold text-[#0B2A5B]">
              {formatNum("৪০")}%+
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {locale === "bn"
                ? "চর ও দূরবর্তী উপকূলীয় অঞ্চলে শিশুদের প্রাথমিক শিক্ষা সমাপ্ত করার আগেই ঝরে পড়ার হার।"
                : "Primary school dropout rate in riverine char and coastal regions before Class 5."}
            </p>
          </div>
          <div className="border-l-4 border-[#1565D8] pl-4">
            <div className="text-3xl font-extrabold text-[#0B2A5B]">
              {formatNum("৮৫")}%
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {locale === "bn"
                ? "সুবিধাবঞ্চিত পরিবারে কোনো সার্বক্ষণিক ইন্টারনেট বা নিজস্ব স্মার্ট ডিভাইস নেই।"
                : "Underprivileged rural households lack home internet or personal smart devices."}
            </p>
          </div>
          <div className="border-l-4 border-[#1E8E4F] pl-4">
            <div className="text-3xl font-extrabold text-[#0B2A5B]">
              {formatNum(100)}%
            </div>
            <p className="text-sm text-slate-600 mt-1">
              {locale === "bn"
                ? "আমাদের প্ল্যাটফর্ম অফলাইনে কাজ করে এবং সম্পূর্ণ বিনামূল্যে শিশুদের হাতে পৌঁছে দেওয়া হয়।"
                : "Our platform operates 100% offline at zero cost to the student and guardian."}
            </p>
          </div>
        </div>
      </div>

      {/* Team Leadership */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "প্রকল্প পরিচালনা ও নেতৃত্ব" : "Project Leadership"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="efa-card p-6 bg-white">
            <div className="w-16 h-16 rounded-full bg-blue-100 text-[#0B2A5B] flex items-center justify-center font-bold text-xl mb-4">
              JA
            </div>
            <h3 className="font-bold text-[#0B2A5B] text-lg">Dr. Jahangir Alam</h3>
            <p className="text-xs text-[#1565D8] font-semibold mb-2">
              {locale === "bn" ? "প্রকল্প পরিচালক ও প্রধান গবেষক" : "Project Director & Principal Investigator"}
            </p>
            <p className="text-xs text-slate-500">
              {locale === "bn" ? "সিএসই বিভাগ, বাউস্ট, সৈয়দপুর" : "Dept. of CSE, BAUST, Saidpur"}
            </p>
          </div>

          <div className="efa-card p-6 bg-white">
            <div className="w-16 h-16 rounded-full bg-amber-100 text-[#0B2A5B] flex items-center justify-center font-bold text-xl mb-4">
              TA
            </div>
            <h3 className="font-bold text-[#0B2A5B] text-lg">Tanzim Ahmed</h3>
            <p className="text-xs text-[#E9A319] font-semibold mb-2">
              {locale === "bn" ? "প্রোগ্রাম কো-অর্ডিনেটর" : "Programme Coordinator"}
            </p>
            <p className="text-xs text-slate-500">
              {locale === "bn" ? "মাঠপর্যায়ে সেন্টার বাস্তবায়ন" : "Field Implementation & Operations"}
            </p>
          </div>

          <div className="efa-card p-6 bg-white">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0B2A5B] flex items-center justify-center font-bold text-xl mb-4">
              FY
            </div>
            <h3 className="font-bold text-[#0B2A5B] text-lg">Farhana Yasmin</h3>
            <p className="text-xs text-[#1E8E4F] font-semibold mb-2">
              {locale === "bn" ? "শিক্ষাক্রম ও কনটেন্ট প্রধান" : "Curriculum & Content Lead"}
            </p>
            <p className="text-xs text-slate-500">
              {locale === "bn" ? "NCTB ডিজিটাল অভিযোজন" : "NCTB Digital Adaptation"}
            </p>
          </div>
        </div>
      </div>

      {/* 12-Month Pilot Timeline */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "১২ মাসের পাইলট কর্মপরিকল্পনা" : "12-Month Pilot Roadmap"}
        </h2>
        <div className="space-y-4">
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="efa-card p-6 bg-white flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="bg-[#0B2A5B] text-[#E9A319] font-bold text-sm px-4 py-2 rounded-md shrink-0">
                {step.month}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#0B2A5B] mb-1">
                  {locale === "bn" ? step.titleBn : step.titleEn}
                </h3>
                <p className="text-sm text-slate-600">
                  {locale === "bn" ? step.descBn : step.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downloadable Proposal Summary */}
      <div className="bg-[#0B2A5B] text-white p-8 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">
            {locale === "bn" ? "প্রকল্প প্রস্তাবনা ও গবেষণা সারসংক্ষেপ" : "Download Proposal Summary (PDF)"}
          </h3>
          <p className="text-sm text-slate-300">
            {locale === "bn"
              ? "প্রকল্প নং: ZRF-26-25400D এর বিস্তারিত সারসংক্ষেপ ও বাজেট ফ্রেমওয়ার্ক।"
              : "Complete research grant documentation and methodology."}
          </p>
        </div>
        <a
          href="/downloads/EFA-BAUST-Proposal-Summary.pdf"
          download
          className="btn-gold whitespace-nowrap text-sm px-5 py-3 rounded-lg inline-flex items-center gap-2"
          onClick={(e) => {
            alert(locale === "bn" ? "প্রকল্প সারসংক্ষেপ ফাইল প্রস্তুত রয়েছে।" : "Proposal document ready.");
          }}
        >
          <FileText className="w-4 h-4" />
          <span>{locale === "bn" ? "পিডিএফ ডাউনলোড" : "Download PDF"}</span>
        </a>
      </div>
    </div>
  );
}
