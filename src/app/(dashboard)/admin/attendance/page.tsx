"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STUDENTS, INITIAL_CENTRES } from "@/lib/data-store";
import { CalendarCheck, Check, X, AlertTriangle, Save } from "lucide-react";

export default function AdminAttendancePage() {
  const { locale, formatNum, t } = useLanguage();
  const [selectedCentre, setSelectedCentre] = useState("SPD-01");
  const [attendanceDate, setAttendanceDate] = useState("2026-11-14");

  // Track present / absent status per student
  const [attendance, setAttendance] = useState<Record<string, "PRESENT" | "ABSENT">>({
    "s-001": "PRESENT",
    "s-002": "PRESENT",
    "s-003": "ABSENT",
    "s-004": "PRESENT",
    "s-005": "PRESENT"
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const students = INITIAL_STUDENTS.filter((s) => s.centreCode === selectedCentre);

  const toggleStatus = (id: string) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: prev[id] === "PRESENT" ? "ABSENT" : "PRESENT"
    }));
    setSavedSuccess(false);
  };

  const presentCount = students.filter((s) => attendance[s.id] === "PRESENT").length;
  const attendanceRate = students.length > 0 ? Math.round((presentCount / students.length) * 100) : 0;
  const isLowAttendance = attendanceRate < 70;

  const handleSave = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.attendance")}
          </h1>
          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "মাত্র ২ চাপে সেন্টারের শিশুদের দৈনিক উপস্থিতি নিশ্চিত করুন।"
              : "Mark daily centre attendance in 2 taps. Alerts trigger if below 70%."}
          </p>
        </div>

        <button
          onClick={handleSave}
          className="btn-navy text-xs px-5 py-2.5 rounded-lg font-bold flex items-center gap-2 cursor-pointer shadow-sm"
        >
          <Save className="w-4 h-4" />
          <span>{locale === "bn" ? "হাজিরা সংরক্ষণ করুন" : "Save Attendance"}</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-bold">
          ✓ আজকের উপস্থিতি ডাটাবেজে সফলভাবে সংরক্ষিত হয়েছে!
        </div>
      )}

      {/* Centre & Date Select Strip */}
      <div className="efa-card p-4 bg-white flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label className="text-xs font-bold text-slate-700">সেন্টার:</label>
          <select
            value={selectedCentre}
            onChange={(e) => setSelectedCentre(e.target.value)}
            className="px-3 py-1.5 border rounded text-xs bg-white font-bold"
          >
            {INITIAL_CENTRES.map((c) => (
              <option key={c.code} value={c.code}>{c.code} - {c.nameBn.split(" ")[0]}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label className="text-xs font-bold text-slate-700">তারিখ:</label>
          <input
            type="date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
            className="px-3 py-1 border rounded text-xs font-mono"
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">উপস্থিতি হার:</span>
          <span className={`text-sm font-bold px-2.5 py-0.5 rounded ${isLowAttendance ? "bg-rose-100 text-rose-800" : "bg-emerald-100 text-emerald-800"}`}>
            {formatNum(attendanceRate)}%
          </span>
          {isLowAttendance && (
            <span className="text-[11px] text-rose-600 font-bold flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>সতর্কতা (&lt;৭০%)</span>
            </span>
          )}
        </div>
      </div>

      {/* Attendance 2-Tap Tap Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {students.map((st) => {
          const isPresent = attendance[st.id] === "PRESENT";
          return (
            <div
              key={st.id}
              onClick={() => toggleStatus(st.id)}
              className={`efa-card p-4 flex items-center justify-between cursor-pointer transition-all border-2 ${
                isPresent ? "bg-emerald-50/50 border-[#1E8E4F]" : "bg-rose-50/40 border-rose-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={st.avatar}
                  alt={st.nameBn}
                  className="w-12 h-12 rounded-full object-cover border"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#0B2A5B]">{st.nameBn}</h4>
                  <span className="text-xs font-mono text-slate-500">{st.studentId}</span>
                </div>
              </div>

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-xs ${
                  isPresent ? "bg-[#1E8E4F]" : "bg-rose-500"
                }`}
              >
                {isPresent ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
