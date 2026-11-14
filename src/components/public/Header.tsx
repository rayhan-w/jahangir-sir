"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Header() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E2DA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3.5 gap-3">
          {/* Left: Site Brand & Tagline (Text-only, no icon) */}
          <Link href="/" className="inline-block group text-decoration-none">
            <span className="text-xl sm:text-2xl font-bold text-[#0B2A5B] block leading-tight">
              {siteConfig.projectName}
            </span>
            <span className="text-xs text-[#5B6472] block mt-0.5">
              {locale === "bn" ? siteConfig.tagline.bn : siteConfig.tagline.en}
            </span>
          </Link>

          {/* Right: Plain text navigation + 1 Navy Contact Button */}
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-medium text-[#1F2937]">
            <Link href="/#how-it-works" className="hover:text-[#1565D8] transition-colors">
              {locale === "bn" ? "কীভাবে কাজ করে" : "How It Works"}
            </Link>
            <Link href="/#curriculum" className="hover:text-[#1565D8] transition-colors">
              {locale === "bn" ? "পাঠ্যক্রম" : "Curriculum"}
            </Link>
            <Link href="/#priority-areas" className="hover:text-[#1565D8] transition-colors">
              {locale === "bn" ? "এলাকা" : "Areas"}
            </Link>
            <Link href="/#partners" className="hover:text-[#1565D8] transition-colors">
              {locale === "bn" ? "সহযোগী" : "Partners"}
            </Link>
            <Link href="/#faq" className="hover:text-[#1565D8] transition-colors">
              {locale === "bn" ? "প্রশ্নোত্তর" : "FAQ"}
            </Link>
            <Link href="/learn" className="hover:text-[#1565D8] transition-colors">
              {locale === "bn" ? "শিক্ষার্থী অ্যাপ" : "Student App"}
            </Link>

            {/* Language toggle text link */}
            <button
              onClick={toggleLocale}
              className="text-xs font-semibold text-[#5B6472] hover:text-[#0B2A5B] border border-[#E5E2DA] px-2 py-1 rounded cursor-pointer"
            >
              {locale === "bn" ? "EN" : "বাং"}
            </button>

            {/* The ONLY styled button on Header: যোগাযোগ */}
            <Link
              href="/contact"
              className="btn-navy text-sm py-1.5 px-4"
            >
              {locale === "bn" ? "যোগাযোগ" : "Contact"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
