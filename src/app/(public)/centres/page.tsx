"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_CENTRES } from "@/lib/data-store";
import { MapPin, Users, Tablet, Phone, Search, ArrowRight } from "lucide-react";

export default function CentresPage() {
  const { locale, formatNum, t } = useLanguage();
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-block bg-[#1565D8]/10 text-[#1565D8] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "মাঠপর্যায়ের লার্নিং সেন্টার" : "Community Learning Centres"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "চর ও বস্তি এলাকার সক্রিয় লার্নিং সেন্টারসমূহ"
            : "Active Learning Centres in Char & Slum Areas"}
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          {locale === "bn"
            ? "প্রতিটি সেন্টারে স্থানীয় সুবিধাবঞ্চিত শিশুদের জন্য রয়েছে চার্জিং ডক, ট্যাবলেট ব্যাংক এবং প্রশিক্ষিত স্বেচ্ছাসেবক শিক্ষক।"
            : "Each centre is equipped with shared Android tablets, local charging docks, and dedicated mentors."}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="efa-card p-4 bg-white flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={locale === "bn" ? "সেন্টারের নাম বা কোড দিয়ে খুঁজুন..." : "Search by centre name or code..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:outline-none focus:border-[#1565D8]"
          />
        </div>
        <div className="w-full sm:w-auto">
          <select
            value={districtFilter}
            onChange={(e) => setDistrictFilter(e.target.value)}
            className="w-full sm:w-48 px-3 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:outline-none focus:border-[#1565D8] bg-white text-slate-700"
          >
            <option value="all">{locale === "bn" ? "সকল জেলা" : "All Districts"}</option>
            <option value="Nilphamari">{locale === "bn" ? "নীলফামারী" : "Nilphamari"}</option>
            <option value="Kurigram">{locale === "bn" ? "কুড়িগ্রাম" : "Kurigram"}</option>
            <option value="Sunamganj">{locale === "bn" ? "সুনামগঞ্জ" : "Sunamganj"}</option>
          </select>
        </div>
      </div>

      {/* Centre Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCentres.map((centre) => (
          <div key={centre.id} className="efa-card overflow-hidden bg-white hover:shadow-lg transition-shadow">
            <div className="relative h-48">
              <img
                src={centre.photoUrl}
                alt={centre.nameEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#0B2A5B] text-white font-mono text-xs px-2.5 py-1 rounded font-bold">
                {centre.code}
              </div>
              <div className="absolute top-3 right-3 bg-[#1E8E4F] text-white text-xs px-2.5 py-1 rounded font-semibold">
                {locale === "bn" ? "সক্রিয়" : "Active"}
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-[#0B2A5B] leading-snug">
                {locale === "bn" ? centre.nameBn : centre.nameEn}
              </h3>

              <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#E9A319] shrink-0 mt-0.5" />
                  <span>{locale === "bn" ? centre.addressBn : centre.addressEn}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#1565D8] shrink-0" />
                  <span>
                    {locale === "bn"
                      ? `${formatNum(centre.studentCount)} জন শিক্ষার্থী`
                      : `${centre.studentCount} enrolled students`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Tablet className="w-4 h-4 text-[#1E8E4F] shrink-0" />
                  <span>
                    {locale === "bn"
                      ? `${formatNum(centre.tabletCount)} টি ডিজিটাল ট্যাবলেট`
                      : `${centre.tabletCount} learning tablets`}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {locale === "bn" ? `শিক্ষক: ${centre.teacherName}` : `Lead: ${centre.teacherName}`}
                </span>
                <Link
                  href={`/centres/${centre.code.toLowerCase()}`}
                  className="text-sm font-semibold text-[#1565D8] hover:underline inline-flex items-center gap-1"
                >
                  <span>{locale === "bn" ? "বিস্তারিত" : "Details"}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
