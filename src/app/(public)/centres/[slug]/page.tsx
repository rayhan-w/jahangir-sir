"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_CENTRES } from "@/lib/data-store";
import { MapPin, Users, Tablet, Phone, ArrowLeft, CheckCircle2, Calendar } from "lucide-react";

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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <Link
        href="/centres"
        className="text-sm font-semibold text-[#1565D8] inline-flex items-center gap-1 hover:underline mb-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{locale === "bn" ? "সকল সেন্টার তালিকায় ফিরে যান" : "Back to All Centres"}</span>
      </Link>

      <div className="efa-card overflow-hidden bg-white">
        <div className="relative h-72 sm:h-96">
          <img
            src={centre.photoUrl}
            alt={centre.nameEn}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white space-y-2">
              <span className="bg-[#E9A319] text-[#0B2A5B] font-mono font-bold text-xs px-2.5 py-1 rounded inline-block">
                {centre.code}
              </span>
              <h1 className="text-2xl sm:text-4xl font-bold">
                {locale === "bn" ? centre.nameBn : centre.nameEn}
              </h1>
              <p className="text-sm text-slate-200 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E9A319]" />
                {locale === "bn" ? centre.addressBn : centre.addressEn}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Key Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-center">
              <Users className="w-6 h-6 text-[#1565D8] mx-auto mb-1" />
              <div className="text-2xl font-bold text-[#0B2A5B]">{formatNum(centre.studentCount)}</div>
              <div className="text-xs text-slate-500">{locale === "bn" ? "ভর্তি শিশু" : "Students"}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-center">
              <Tablet className="w-6 h-6 text-[#1E8E4F] mx-auto mb-1" />
              <div className="text-2xl font-bold text-[#0B2A5B]">{formatNum(centre.tabletCount)}</div>
              <div className="text-xs text-slate-500">{locale === "bn" ? "ট্যাবলেট সংখ্যা" : "Tablets"}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-center">
              <Calendar className="w-6 h-6 text-[#E9A319] mx-auto mb-1" />
              <div className="text-2xl font-bold text-[#0B2A5B]">{locale === "bn" ? "৬ দিন" : "6 Days"}</div>
              <div className="text-xs text-slate-500">{locale === "bn" ? "সাপ্তাহিক সেশন" : "Weekly Sessions"}</div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-center">
              <Phone className="w-6 h-6 text-[#0B2A5B] mx-auto mb-1" />
              <div className="text-sm font-bold text-[#0B2A5B] mt-1">{centre.phone}</div>
              <div className="text-xs text-slate-500">{centre.teacherName}</div>
            </div>
          </div>

          {/* About this Centre */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#0B2A5B]">
              {locale === "bn" ? "সেন্টার পরিচিতি ও শিখন পরিবেশ" : "Centre Overview & Facilities"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {locale === "bn"
                ? "এই সেন্টারটি স্থানীয় কমিউনিটির অংশীদারিত্বে পরিচালিত। প্রতিদিন সকাল ও বিকেলে দুইটি শিফটে ৫ম শ্রেণি পর্যন্ত শিক্ষার্থীরা সমবেত হয়। প্রতিটি ট্যাবলেট নিরাপদ ক্লাউড সিঙ্ক এবং শিশুদের উপযোগী চাইল্ড-লক সফটওয়্যারে সজ্জিত।"
                : "Operated in partnership with local community elders. Two shifts are run daily for young learners with child-safe offline tablets and charging facilities."}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-4">
            <Link
              href="/volunteer"
              className="btn-navy text-sm font-semibold"
            >
              {locale === "bn" ? "এই সেন্টারে স্বেচ্ছাসেবক হন" : "Volunteer at This Centre"}
            </Link>
            <Link
              href="/support"
              className="btn-gold text-sm font-semibold"
            >
              {locale === "bn" ? "ট্যাবলেট অনুদান দিন" : "Donate Tablets to This Centre"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
