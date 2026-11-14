"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_SETTINGS } from "@/lib/data-store";
import { BookOpen, Mail, Phone, MapPin, Heart, Shield } from "lucide-react";

export default function Footer() {
  const { locale, formatNum, t } = useLanguage();
  const settings = DEFAULT_SETTINGS;

  return (
    <footer className="bg-[#0B2A5B] text-slate-300 pt-16 pb-8 border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Project Identity & Mandate */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#E9A319] text-[#0B2A5B] flex items-center justify-center font-bold">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-white block">Education for All</span>
                <span className="text-xs text-[#E9A319] font-medium">{settings.projectCode}</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {locale === "bn"
                ? "বাংলাদেশের চর, হাওর, উপকূল এবং বস্তি অঞ্চলের সুবিধাবঞ্চিত শিশুদের জন্য একটি নিবেদিত অফলাইন-ফার্স্ট ডিজিটাল শিক্ষা কর্মসূচি।"
                : "A dedicated offline-first digital learning initiative for underprivileged children across char, haor, coastal and slum areas of Bangladesh."}
            </p>
            <div className="text-xs text-blue-200 bg-white/5 p-3 rounded-lg border border-white/10">
              <span className="font-semibold block text-white mb-0.5">
                {locale === "bn" ? "গবেষণা ও বাস্তবায়ন:" : "Research & Implementation:"}
              </span>
              {locale === "bn" ? settings.affiliation.bn : settings.affiliation.en}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-l-3 border-[#E9A319] pl-2.5">
              {locale === "bn" ? "প্রয়োজনীয় পাতা" : "Quick Links"}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/programmes" className="hover:text-white transition-colors">
                  {t("nav.programmes")}
                </Link>
              </li>
              <li>
                <Link href="/centres" className="hover:text-white transition-colors">
                  {t("nav.centres")}
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-white transition-colors">
                  {t("nav.stories")}
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-white transition-colors">
                  {t("nav.volunteer")}
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  {t("nav.support")}
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  {t("nav.faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pilot Goals (Never hardcoded) */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-l-3 border-[#1E8E4F] pl-2.5">
              {locale === "bn" ? "পাইলট প্রকল্পের লক্ষ্যমাত্রা" : "Pilot Phase Targets"}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white/5 p-3 rounded-lg border border-white/5">
                <div className="text-xl font-bold text-[#E9A319]">
                  {formatNum(settings.pilotTargets.children)}+
                </div>
                <div className="text-xs text-slate-300">
                  {locale === "bn" ? "সুবিধাবঞ্চিত শিশু ভর্তি" : "Underprivileged Children Enrolled"}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <div className="text-lg font-bold text-white">{formatNum(settings.pilotTargets.centres)}</div>
                  <div className="text-xs text-slate-300">{locale === "bn" ? "লার্নিং সেন্টার" : "Centres"}</div>
                </div>
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                  <div className="text-lg font-bold text-white">{formatNum(settings.pilotTargets.teachers)}</div>
                  <div className="text-xs text-slate-300">{locale === "bn" ? "স্বেচ্ছাসেবক শিক্ষক" : "Teachers"}</div>
                </div>
              </div>
              <div className="text-xs text-slate-400">
                {locale === "bn" ? "১২ মাসের মধ্যে ৮০% কোর্স সমাপ্তি নিশ্চিতকরণ" : "80% completion target within 12 months"}
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Support */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 tracking-wide border-l-3 border-[#1565D8] pl-2.5">
              {locale === "bn" ? "যোগাযোগ ও সহায়তা" : "Contact & Support"}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#E9A319] shrink-0 mt-0.5" />
                <span>{locale === "bn" ? settings.contactAddress.bn : settings.contactAddress.en}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1E8E4F] shrink-0" />
                <a href={`tel:${settings.contactPhone}`} className="hover:text-white">
                  {settings.contactPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1565D8] shrink-0" />
                <a href={`mailto:${settings.contactEmail}`} className="hover:text-white">
                  {settings.contactEmail}
                </a>
              </li>
              <li className="pt-2">
                <div className="text-xs text-slate-300 mb-1">
                  {locale === "bn" ? "ট্যাবলেট ও অনুদান সহায়তা (বিকাশ/নগদ):" : "Donation & Tablet Support (bKash/Nagad):"}
                </div>
                <div className="font-mono text-sm bg-white/10 px-2.5 py-1.5 rounded text-[#E9A319] font-bold inline-block">
                  {settings.bKashNumber}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © ২০২৬ Education for All. {locale === "bn" ? "সর্বস্বত্ব সংরক্ষিত।" : "All rights reserved."}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              {locale === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
            </Link>
            <Link href="/terms" className="hover:text-white">
              {locale === "bn" ? "ব্যবহারের শর্তাবলী" : "Terms of Service"}
            </Link>
            <Link href="/admin/login" className="hover:text-white flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-blue-300" />
              <span>{locale === "bn" ? "অফিসিয়াল পোর্টাল" : "Staff Portal"}</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
