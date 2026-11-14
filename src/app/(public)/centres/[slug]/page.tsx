"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_CENTRES } from "@/lib/data-store";

export default function CentreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { locale, formatNum } = useLanguage();

  const centre = INITIAL_CENTRES.find(
    (c) => c.code.toLowerCase() === slug.toLowerCase() || c.id === slug
  );

  if (!centre) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      <Link
        href="/centres"
        className="text-sm font-semibold text-[#1565D8] hover:underline"
      >
        ← {locale === "bn" ? "সকল সেন্টার তালিকায় ফিরে যান" : "Back to All Centres"}
      </Link>

      <div className="space-y-3 border-b border-[#E5E2DA] pb-6">
        <span className="font-mono text-xs font-bold text-[#1E8E4F]">
          [{centre.code}]
        </span>
        <h1 className="text-3xl font-bold text-[#0B2A5B]">
          {locale === "bn" ? centre.nameBn : centre.nameEn}
        </h1>
        <p className="text-sm text-[#5B6472]">
          {locale === "bn" ? centre.addressBn : centre.addressEn}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-b border-[#E5E2DA]">
        <div>
          <span className="text-xs text-[#5B6472] block">{locale === "bn" ? "ভর্তি শিশু" : "Students"}</span>
          <span className="text-xl font-bold text-[#0B2A5B]">{formatNum(centre.studentCount)}</span>
        </div>
        <div>
          <span className="text-xs text-[#5B6472] block">{locale === "bn" ? "ট্যাবলেট সংখ্যা" : "Tablets"}</span>
          <span className="text-xl font-bold text-[#0B2A5B]">{formatNum(centre.tabletCount)}</span>
        </div>
        <div>
          <span className="text-xs text-[#5B6472] block">{locale === "bn" ? "সাপ্তাহিক সেশন" : "Weekly Sessions"}</span>
          <span className="text-xl font-bold text-[#0B2A5B]">{locale === "bn" ? "৬ দিন" : "6 Days"}</span>
        </div>
        <div>
          <span className="text-xs text-[#5B6472] block">{locale === "bn" ? "শিক্ষক ও ফোন" : "Mentor"}</span>
          <span className="text-sm font-bold text-[#0B2A5B] block">{centre.teacherName}</span>
          <span className="text-xs font-mono text-[#5B6472]">{centre.phone}</span>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-bold text-[#0B2A5B]">
          {locale === "bn" ? "সেন্টার পরিচিতি ও শিখন পরিবেশ" : "Centre Overview & Facilities"}
        </h2>
        <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
          {locale === "bn"
            ? "এই সেন্টারটি স্থানীয় কমিউনিটির অংশীদারিত্বে পরিচালিত। প্রতিদিন সকাল ও বিকেলে দুইটি শিফটে ৫ম শ্রেণি পর্যন্ত শিক্ষার্থীরা সমবেত হয়। প্রতিটি ট্যাবলেট নিরাপদ ক্লাউড সিঙ্ক এবং শিশুদের উপযোগী চাইল্ড-লক সফটওয়্যারে সজ্জিত।"
            : "Operated in partnership with local community elders. Two shifts are run daily for young learners with child-safe offline tablets and charging facilities."}
        </p>
      </div>

      <div className="pt-6 border-t border-[#E5E2DA] flex flex-wrap gap-6 text-sm">
        <Link href="/volunteer" className="text-[#1565D8] font-semibold hover:underline">
          {locale === "bn" ? "এই সেন্টারে স্বেচ্ছাসেবক হন →" : "Volunteer at This Centre →"}
        </Link>
        <Link href="/support" className="text-[#1565D8] font-semibold hover:underline">
          {locale === "bn" ? "ট্যাবলেট অনুদান দিন →" : "Donate Tablets to This Centre →"}
        </Link>
      </div>
    </div>
  );
}
