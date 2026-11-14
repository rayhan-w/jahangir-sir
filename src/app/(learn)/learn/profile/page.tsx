"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STUDENTS } from "@/lib/data-store";
import { User, QrCode, LogOut, ArrowLeft, Shield, Sparkles } from "lucide-react";

export default function StudentProfilePage() {
  const { locale, formatNum, t } = useLanguage();
  const router = useRouter();
  const [student, setStudent] = useState<any>(INITIAL_STUDENTS[0]);

  useEffect(() => {
    const saved = localStorage.getItem("efa_student_session");
    if (saved) {
      try {
        setStudent(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("efa_student_session");
    router.push("/learn");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1565D8] hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{locale === "bn" ? "ফিরে যান" : "Back"}</span>
        </Link>
      </div>

      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
          {locale === "bn" ? "আমার প্রোফাইল ও আইডি কার্ড" : "My Profile & Student ID"}
        </h1>
        <p className="text-sm text-slate-600">
          {locale === "bn" ? "তোমার প্রাতিষ্ঠানিক পরিচয়পত্র ও তথ্য।" : "Your digital student identity card."}
        </p>
      </div>

      {/* Official Student ID Card (Printable style) */}
      <div className="efa-card overflow-hidden bg-white shadow-xl border-2 border-[#0B2A5B]">
        {/* Top Header of Card */}
        <div className="bg-[#0B2A5B] text-white p-4 text-center">
          <div className="text-xs uppercase tracking-widest text-[#E9A319] font-bold">
            Education for All • BAUST CSE
          </div>
          <div className="text-base font-bold">
            {locale === "bn" ? "শিক্ষার্থী পরিচয়পত্র" : "Student Digital Identity Card"}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-[#0B2A5B] shrink-0 shadow-sm">
            <img
              src={student.avatar}
              alt={student.nameBn}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-2 text-center sm:text-left flex-1">
            <h2 className="text-2xl font-bold text-[#0B2A5B]">
              {locale === "bn" ? student.nameBn : student.nameEn}
            </h2>
            <div className="text-sm font-bold text-[#1565D8] font-mono">
              ID: {student.studentId}
            </div>
            <div className="text-xs text-slate-600 space-y-0.5">
              <p><strong>{locale === "bn" ? "শ্রেণি:" : "Class:"}</strong> {formatNum(student.classLevel)}</p>
              <p><strong>{locale === "bn" ? "অভিভাবক:" : "Guardian:"}</strong> {student.guardianName}</p>
              <p><strong>{locale === "bn" ? "সেন্টার কোড:" : "Centre:"}</strong> {student.centreCode}</p>
            </div>
          </div>

          {/* QR Code Graphic Box */}
          <div className="p-3 bg-slate-50 border rounded-lg text-center shrink-0">
            <QrCode className="w-20 h-20 text-[#0B2A5B] mx-auto" />
            <span className="text-[10px] text-slate-400 font-mono block mt-1">EFA VERIFIED</span>
          </div>
        </div>

        <div className="bg-slate-50 p-3 text-center border-t border-slate-200 text-xs text-slate-500 font-medium">
          Project No: ZRF-26-25400D • Dept. of CSE, BAUST, Saidpur
        </div>
      </div>

      <div className="pt-4">
        <button
          onClick={handleLogout}
          className="student-tap-target w-full bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          <span>{locale === "bn" ? "ট্যাবলেট থেকে লগআউট করো" : "Log out from Tablet"}</span>
        </button>
      </div>
    </div>
  );
}
