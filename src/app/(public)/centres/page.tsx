"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_CENTRES } from "@/lib/data-store";

export default function CentresPage() {
  const { locale, formatNum } = useLanguage();
  const [search, setSearch] = useState("");
  const [districtFilter, setDistrictFilter] = useState("all");

  const filteredCentres = INITIAL_CENTRES.filter((c) => {
    const matchesSearch =
      c.nameBn.toLowerCase().includes(search.toLowerCase()) ||
      c.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase());
    const matchesDistrict =
      districtFilter === "all" ||
      c.districtEn.toLowerCase() === districtFilter.toLowerCase();
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "মাঠপর্যায়ের লার্নিং সেন্টার" : "Community Learning Centres"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "চর ও বস্তি এলাকার সক্রিয় লার্নিং সেন্টারসমূহ"
            : "Active Learning Centres in Char & Slum Areas"}
        </h1>
        <p className="text-base text-[#5B6472]">
          {locale === "bn"
            ? "প্রতিটি সেন্টারে স্থানীয় সুবিধাবঞ্চিত শিশুদের জন্য রয়েছে চার্জিং ডক, ট্যাবলেট ব্যাংক এবং প্রশিক্ষিত স্বেচ্ছাসেবক শিক্ষক।"
            : "Each centre is equipped with shared Android tablets, local charging docks, and dedicated mentors."}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 py-4 border-y border-[#E5E2DA]">
        <input
          type="text"
          placeholder={locale === "bn" ? "সেন্টারের নাম বা কোড দিয়ে খুঁজুন..." : "Search by centre name or code..."}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:flex-1 px-3 py-2 border border-[#E5E2DA] rounded text-sm focus:outline-none focus:border-[#0B2A5B]"
        />
        <select
          value={districtFilter}
          onChange={(e) => setDistrictFilter(e.target.value)}
          className="w-full sm:w-48 px-3 py-2 border border-[#E5E2DA] rounded text-sm bg-white text-[#1F2937]"
        >
          <option value="all">{locale === "bn" ? "সকল জেলা" : "All Districts"}</option>
          <option value="Nilphamari">{locale === "bn" ? "নীলফামারী" : "Nilphamari"}</option>
          <option value="Kurigram">{locale === "bn" ? "কুড়িগ্রাম" : "Kurigram"}</option>
          <option value="Sunamganj">{locale === "bn" ? "সুনামগঞ্জ" : "Sunamganj"}</option>
        </select>
      </div>

      {/* Centre Hairline List */}
      <div className="border-t border-[#E5E2DA] divide-y divide-[#E5E2DA]">
        {filteredCentres.map((centre) => (
          <div key={centre.id} className="py-6 flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-2 flex-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#1E8E4F]">
                  [{centre.code}]
                </span>
                <span className="text-xs text-[#5B6472]">
                  {locale === "bn" ? centre.districtBn : centre.districtEn}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0B2A5B]">
                {locale === "bn" ? centre.nameBn : centre.nameEn}
              </h3>
              <p className="text-sm text-[#5B6472]">
                {locale === "bn" ? centre.addressBn : centre.addressEn}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#5B6472] pt-1">
                <span>
                  {locale === "bn" ? `শিক্ষার্থী: ${formatNum(centre.studentCount)} জন` : `Students: ${centre.studentCount}`}
                </span>
                <span>
                  {locale === "bn" ? `ট্যাবলেট: ${formatNum(centre.tabletCount)} টি` : `Tablets: ${centre.tabletCount}`}
                </span>
                <span>
                  {locale === "bn" ? `শিক্ষক: ${centre.teacherName}` : `Lead: ${centre.teacherName}`}
                </span>
              </div>
            </div>

            <div className="shrink-0 self-start">
              <Link
                href={`/centres/${centre.code.toLowerCase()}`}
                className="text-sm font-semibold text-[#1565D8] hover:underline"
              >
                {locale === "bn" ? "বিস্তারিত দেখুন →" : "View Details →"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
