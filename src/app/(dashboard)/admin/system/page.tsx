"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ShieldAlert, Database, History, RefreshCw, CheckCircle2 } from "lucide-react";

export default function AdminSystemPage() {
  const { locale, formatNum, t } = useLanguage();
  const [backingUp, setBackingUp] = useState(false);

  const logs = [
    {
      id: "log-1",
      user: "Dr. Jahangir Alam (Super Admin)",
      action: "SETTINGS_UPDATE",
      entity: "Settings",
      time: "আজ ১২:২০ PM",
      ip: "103.114.98.12"
    },
    {
      id: "log-2",
      user: "মাহমুদুল হাসান (Teacher)",
      action: "PIN_RESET",
      entity: "Student: EFA-SPD-01-003",
      time: "আজ ১১:০৫ AM",
      ip: "103.114.98.15"
    },
    {
      id: "log-3",
      user: "Farhana Yasmin (Content Editor)",
      action: "LESSON_PUBLISH",
      entity: "Lesson: বন্ধনীর ব্যবহার",
      time: "গতকাল ০৪:৩০ PM",
      ip: "103.114.98.20"
    }
  ];

  const handleManualBackup = () => {
    setBackingUp(true);
    setTimeout(() => {
      setBackingUp(false);
      alert("ডাটাবেজ ব্যাকআপ সম্পন্ন হয়েছে: efa_db_20261114_backup.sql.gz (আর্কাইভ সংরক্ষিত)।");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.auditLogs")}
          </h1>
          <p className="text-xs text-slate-500">
            নিরাপত্তা অডিট লগ, স্বয়ংক্রিয় ব্যাকআপ স্বাস্থ্য ও সিস্টেম সংস্করণ।
          </p>
        </div>

        <button
          onClick={handleManualBackup}
          disabled={backingUp}
          className="btn-navy text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <Database className={`w-4 h-4 ${backingUp ? "animate-spin" : ""}`} />
          <span>{backingUp ? "ব্যাকআপ তৈরি হচ্ছে..." : "এখনই ম্যানুয়াল ব্যাকআপ নিন"}</span>
        </button>
      </div>

      {/* Backup Status Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="efa-card p-4 bg-white space-y-1">
          <span className="text-xs text-slate-500 font-bold uppercase">সর্বশেষ ব্যাকআপ</span>
          <div className="text-sm font-bold text-emerald-700 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" />
            <span>আজ সকাল ০৪:০০ AM (স্বয়ংক্রিয়)</span>
          </div>
        </div>

        <div className="efa-card p-4 bg-white space-y-1">
          <span className="text-xs text-slate-500 font-bold uppercase">রিটেনশন নীতি</span>
          <div className="text-sm font-bold text-[#0B2A5B]">১৪ দিন সংরক্ষণ (pg_dump gz)</div>
        </div>

        <div className="efa-card p-4 bg-white space-y-1">
          <span className="text-xs text-slate-500 font-bold uppercase">সফ্টওয়্যার ভার্সন</span>
          <div className="text-sm font-mono font-bold text-[#1565D8]">v1.0.0-PROD (BAUST CSE)</div>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className="efa-card overflow-hidden bg-white shadow-xs">
        <div className="p-4 border-b font-bold text-sm text-[#0B2A5B] flex items-center gap-2">
          <History className="w-4 h-4 text-[#1565D8]" />
          <span>অডিট অ্যাক্টিভিটি লগ (Audit Log)</span>
        </div>

        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-700 font-bold border-b">
            <tr>
              <th className="p-3">অ্যাকশন</th>
              <th className="p-3">ব্যবহারকারী</th>
              <th className="p-3">টার্গেট এন্টিটি</th>
              <th className="p-3">আইপি অ্যাড্রেস</th>
              <th className="p-3">সময়</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.map((l) => (
              <tr key={l.id} className="hover:bg-slate-50">
                <td className="p-3 font-mono font-bold text-[#1565D8]">{l.action}</td>
                <td className="p-3 font-semibold text-slate-800">{l.user}</td>
                <td className="p-3 text-slate-600">{l.entity}</td>
                <td className="p-3 font-mono text-slate-500">{l.ip}</td>
                <td className="p-3 text-slate-400">{l.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
