"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="bg-[#0B2A5B] text-[#FAF9F6] pt-14 pb-8 border-t border-[#0B2A5B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: About line */}
          <div className="space-y-3">
            <div className="text-xl font-bold text-white">
              {siteConfig.projectName}
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {locale === "bn"
                ? "বাংলাদেশের চর, হাওর, উপকূল এবং বস্তি অঞ্চলের সুবিধাবঞ্চিত শিশুদের জন্য একটি নিবেদিত অফলাইন-ফার্স্ট ডিজিটাল শিক্ষা কর্মসূচি।"
                : "A dedicated offline-first digital learning initiative for underprivileged children across char, haor, coastal and slum areas of Bangladesh."}
            </p>
            <p className="text-xs text-slate-400">
              {locale === "bn" ? siteConfig.affiliation.bn : siteConfig.affiliation.en}
            </p>
          </div>

          {/* Column 2: যোগাযোগ (Address, ফোন, ইমেইল as text labels) */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">
              {locale === "bn" ? "যোগাযোগ" : "Contact"}
            </h3>
            <div className="text-sm space-y-1.5 text-slate-300">
              <p>
                <span className="text-slate-400">{locale === "bn" ? "ঠিকানা: " : "Address: "}</span>
                {locale === "bn" ? siteConfig.contactAddress.bn : siteConfig.contactAddress.en}
              </p>
              <p>
                <span className="text-slate-400">{locale === "bn" ? "ফোন: " : "Phone: "}</span>
                <a href={`tel:${siteConfig.contactPhone}`} className="hover:underline text-white">
                  {siteConfig.contactPhone}
                </a>
              </p>
              <p>
                <span className="text-slate-400">{locale === "bn" ? "ইমেইল: " : "Email: "}</span>
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:underline text-white">
                  {siteConfig.contactEmail}
                </a>
              </p>
            </div>
          </div>

          {/* Column 3: সহায়তা (বিকাশ / নগদ as text) */}
          <div className="space-y-3">
            <h3 className="text-white font-bold text-base">
              {locale === "bn" ? "সহায়তা" : "Support"}
            </h3>
            <p className="text-sm text-slate-300">
              {locale === "bn"
                ? "সুবিধাবঞ্চিত শিশুদের ট্যাবলেট অনুদান ও শিক্ষণ কার্যক্রমে সহায়তার জন্য:"
                : "For tablet donations and student learning fund support:"}
            </p>
            <div className="text-sm space-y-1 text-slate-300">
              <p>
                <span className="text-slate-400">বিকাশ: </span>
                <span className="font-mono font-semibold text-white">{siteConfig.bKashNumber}</span>
              </p>
              <p>
                <span className="text-slate-400">নগদ: </span>
                <span className="font-mono font-semibold text-white">{siteConfig.nagadNumber}</span>
              </p>
            </div>
            <div className="pt-1">
              <Link href="/admin/login" className="text-xs text-slate-400 hover:text-white underline">
                {locale === "bn" ? "শিক্ষক ও কর্মকর্তা পোর্টাল" : "Staff Portal"}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom hairline + Copyright + Project credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {siteConfig.projectName} — Dept. of CSE, BAUST
          </div>
          <div>
            Project No: {siteConfig.projectCode}
          </div>
        </div>
      </div>
    </footer>
  );
}
