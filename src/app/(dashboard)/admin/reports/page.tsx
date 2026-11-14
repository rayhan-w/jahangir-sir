"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STUDENTS, INITIAL_CENTRES } from "@/lib/data-store";
import { BarChart3, Download, Printer, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function AdminReportsPage() {
  const { locale, formatNum, t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.reports")}
          </h1>
          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "সেন্টার ও শিক্ষার্থীবাইজ শিখন অগ্রগতি, ঘাটতি বিশ্লেষণ ও সাপ্তাহিক প্রিন্ট প্রতিবেদন।"
              : "Centre-wise mastery tracking, gap analysis and printable weekly progress."}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => window.print()}
            className="px-3 py-1.5 border rounded-lg text-xs font-semibold flex items-center gap-1.5 bg-white hover:bg-slate-50"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>প্রিন্ট রিপোর্ট</span>
          </button>
          <button
            onClick={() => alert("CSV ডাউনলোড হচ্ছে...")}
            className="btn-navy text-xs px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CSV এক্সপোর্ট</span>
          </button>
        </div>
      </div>

      {/* Mastery Grid per Student */}
      <div className="efa-card p-6 bg-white space-y-4">
        <h2 className="text-base font-bold text-[#0B2A5B]">
          {locale === "bn" ? "শিক্ষার্থী অনুযায়ী বিষয়ভিত্তিক দক্ষতা সূচক" : "Student Mastery Grid"}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-700 font-bold border-b">
              <tr>
                <th className="p-3">শিক্ষার্থী</th>
                <th className="p-3">আইডি</th>
                <th className="p-3">বাংলা</th>
                <th className="p-3">গণিত</th>
                <th className="p-3">ইংরেজি</th>
                <th className="p-3">বিজ্ঞান</th>
                <th className="p-3">গড় দক্ষতা</th>
                <th className="p-3">অবস্থা</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {INITIAL_STUDENTS.map((st) => {
                const isBehind = st.masteryPercent < 60;
                return (
                  <tr key={st.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-[#0B2A5B]">{st.nameBn}</td>
                    <td className="p-3 font-mono text-slate-500">{st.studentId}</td>
                    <td className="p-3 font-bold text-emerald-700">৮৫%</td>
                    <td className="p-3 font-bold text-amber-700">{formatNum(st.masteryPercent)}%</td>
                    <td className="p-3 font-bold text-blue-700">৭০%</td>
                    <td className="p-3 font-bold text-emerald-700">৭৫%</td>
                    <td className="p-3 font-bold text-[#0B2A5B]">{formatNum(st.masteryPercent)}%</td>
                    <td className="p-3">
                      {isBehind ? (
                        <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                          পিছিয়ে রয়েছে
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          অগ্রসর
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
