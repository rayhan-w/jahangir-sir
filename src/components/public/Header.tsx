"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Globe, LogIn, Menu, X, Sparkles } from "lucide-react";

export default function Header() {
  const { locale, toggleLocale, t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/programmes", label: t("nav.programmes") },
    { href: "/centres", label: t("nav.centres") },
    { href: "/stories", label: t("nav.stories") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/volunteer", label: t("nav.volunteer") },
    { href: "/support", label: t("nav.support") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B2A5B] text-white shadow-md border-b border-[#1565D8]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-12 h-12 rounded-lg bg-[#E9A319] text-[#0B2A5B] flex items-center justify-center font-bold shadow-sm transition-transform group-hover:scale-105">
              <BookOpen className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
                Education for All
                <span className="text-xs bg-[#1E8E4F] text-white px-2 py-0.5 rounded font-normal">BAUST</span>
              </div>
              <div className="text-xs text-blue-200 hidden sm:block">
                {locale === "bn" ? "প্রতিটি শিশুর জন্য মানসম্মত শিক্ষা • সিএসই বিভাগ" : "Quality Education for Every Child • Dept of CSE"}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[15px] font-medium text-slate-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    isActive
                      ? "bg-[#1565D8] text-white font-semibold"
                      : "hover:bg-white/10 text-slate-200 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/20 bg-white/5 hover:bg-white/15 text-xs font-semibold text-white transition-all cursor-pointer"
              title="Switch Language / ভাষা পরিবর্তন"
            >
              <Globe className="w-4 h-4 text-[#E9A319]" />
              <span>{locale === "bn" ? "English" : "বাংলা"}</span>
            </button>

            {/* Student App Direct CTA */}
            <Link
              href="/learn"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#E9A319] hover:bg-[#d69312] text-[#0B2A5B] px-3.5 py-2 rounded-md font-bold text-sm shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t("common.startLearning")}</span>
            </Link>

            {/* Staff Login / Portal */}
            <Link
              href="/admin/login"
              className="inline-flex items-center gap-1.5 bg-[#1565D8] hover:bg-blue-700 text-white px-3.5 py-2 rounded-md font-semibold text-sm transition-all cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              <span className="hidden md:inline">{t("common.login")}</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 space-y-1">
            <Link
              href="/learn"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-md bg-[#E9A319] text-[#0B2A5B] font-bold text-base mb-2 text-center"
            >
              {t("common.startLearning")} (শিক্ষার্থী অ্যাপ)
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-100 hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
