"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  const { locale, formatNum, t } = useLanguage();

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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      {/* Title & Introduction */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "আমাদের পরিচিতি ও লক্ষ্য" : "About the Project"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের জন্য প্রযুক্তিভিত্তিক মুক্তির পথ"
            : "Empowering Underprivileged Children Through Digital Learning"}
        </h1>
        <p className="text-base sm:text-lg text-[#5B6472] leading-relaxed">
          {locale === "bn"
            ? "বাংলাদেশ আর্মি ইউনিভার্সিটি অব ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি (বাউস্ট), সৈয়দপুর-এর কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (সিএসই) বিভাগের প্রত্যক্ষ গবেষণায় পরিচালিত একটি বিশেষ প্রকল্প।"
            : "An institutional research and field project led by the Department of Computer Science & Engineering at BAUST, Saidpur (Project No: ZRF-26-25400D)."}
        </p>
      </div>

      {/* The Problem in Numbers */}
      <div className="p-6 bg-[#FAF9F6] border border-[#E5E2DA] rounded-lg">
        <h2 className="text-lg font-bold text-[#0B2A5B] mb-4">
          {locale === "bn" ? "পরিস্থিতির বাস্তবতা ও সমস্যা (সংখ্যায়)" : "The Reality in Numbers"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border-l-2 border-[#0B2A5B] pl-4">
            <div className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
              {formatNum("৪০")}%+
            </div>
            <p className="text-sm text-[#5B6472] mt-1">
              {locale === "bn"
                ? "চর ও দূরবর্তী উপকূলীয় অঞ্চলে শিশুদের প্রাথমিক শিক্ষা সমাপ্ত করার আগেই ঝরে পড়ার হার।"
                : "Primary school dropout rate in riverine char and coastal regions before Class 5."}
            </p>
          </div>
          <div className="border-l-2 border-[#0B2A5B] pl-4">
            <div className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
              {formatNum("৮৫")}%
            </div>
            <p className="text-sm text-[#5B6472] mt-1">
              {locale === "bn"
                ? "সুবিধাবঞ্চিত পরিবারে কোনো সার্বক্ষণিক ইন্টারনেট বা নিজস্ব স্মার্ট ডিভাইস নেই।"
                : "Underprivileged rural households lack home internet or personal smart devices."}
            </p>
          </div>
          <div className="border-l-2 border-[#0B2A5B] pl-4">
            <div className="text-2xl sm:text-3xl font-bold text-[#0B2A5B]">
              {formatNum(100)}%
            </div>
            <p className="text-sm text-[#5B6472] mt-1">
              {locale === "bn"
                ? "আমাদের প্ল্যাটফর্ম অফলাইনে কাজ করে এবং সম্পূর্ণ বিনামূল্যে শিশুদের হাতে পৌঁছে দেওয়া হয়।"
                : "Our platform operates 100% offline at zero cost to the student and guardian."}
            </p>
          </div>
        </div>
      </div>

      {/* Team Leadership */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "প্রকল্প পরিচালনা ও নেতৃত্ব" : "Project Leadership"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 border border-[#E5E2DA] rounded-lg bg-white">
            <h3 className="font-bold text-[#0B2A5B] text-base">Dr. Jahangir Alam</h3>
            <p className="text-xs text-[#1E8E4F] font-semibold mt-0.5">
              {locale === "bn" ? "প্রকল্প পরিচালক ও প্রধান গবেষক" : "Project Director & Principal Investigator"}
            </p>
            <p className="text-xs text-[#5B6472] mt-1">
              {locale === "bn" ? "সিএসই বিভাগ, বাউস্ট, সৈয়দপুর" : "Dept. of CSE, BAUST, Saidpur"}
            </p>
          </div>

          <div className="p-5 border border-[#E5E2DA] rounded-lg bg-white">
            <h3 className="font-bold text-[#0B2A5B] text-base">Tanzim Ahmed</h3>
            <p className="text-xs text-[#1E8E4F] font-semibold mt-0.5">
              {locale === "bn" ? "প্রোগ্রাম কো-অর্ডিনেটর" : "Programme Coordinator"}
            </p>
            <p className="text-xs text-[#5B6472] mt-1">
              {locale === "bn" ? "মাঠপর্যায়ে সেন্টার বাস্তবায়ন" : "Field Implementation & Operations"}
            </p>
          </div>

          <div className="p-5 border border-[#E5E2DA] rounded-lg bg-white">
            <h3 className="font-bold text-[#0B2A5B] text-base">Farhana Yasmin</h3>
            <p className="text-xs text-[#1E8E4F] font-semibold mt-0.5">
              {locale === "bn" ? "শিক্ষাক্রম ও কনটেন্ট প্রধান" : "Curriculum & Content Lead"}
            </p>
            <p className="text-xs text-[#5B6472] mt-1">
              {locale === "bn" ? "NCTB ডিজিটাল অভিযোজন" : "NCTB Digital Adaptation"}
            </p>
          </div>
        </div>
      </div>

      {/* 12-Month Pilot Timeline */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? "১২ মাসের পাইলট কর্মপরিকল্পনা" : "12-Month Pilot Roadmap"}
        </h2>
        <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
          {timelineSteps.map((step, idx) => (
            <div key={idx} className="py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
              <span className="font-bold text-xs text-[#1E8E4F] w-28 shrink-0">
                {step.month}
              </span>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#0B2A5B]">
                  {locale === "bn" ? step.titleBn : step.titleEn}
                </h3>
                <p className="text-sm text-[#5B6472] mt-0.5">
                  {locale === "bn" ? step.descBn : step.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Downloadable Proposal Summary */}
      <div className="border-t border-[#E5E2DA] pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-[#0B2A5B]">
            {locale === "bn" ? "প্রকল্প প্রস্তাবনা ও গবেষণা সারসংক্ষেপ" : "Download Proposal Summary (PDF)"}
          </h3>
          <p className="text-sm text-[#5B6472]">
            {locale === "bn"
              ? `প্রকল্প নং: ${siteConfig.projectCode} এর বিস্তারিত সারসংক্ষেপ ও বাজেট ফ্রেমওয়ার্ক।`
              : "Complete research grant documentation and methodology."}
          </p>
        </div>
        <a
          href="/downloads/EFA-BAUST-Proposal-Summary.pdf"
          download
          className="text-sm font-semibold text-[#1565D8] hover:underline"
          onClick={(e) => {
            alert(locale === "bn" ? "প্রকল্প সারসংক্ষেপ ফাইল প্রস্তুত রয়েছে।" : "Proposal document ready.");
          }}
        >
          {locale === "bn" ? "পিডিএফ ডাউনলোড →" : "Download PDF →"}
        </a>
      </div>
    </div>
  );
}
