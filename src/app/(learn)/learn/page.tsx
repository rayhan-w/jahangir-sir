"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_CENTRES, INITIAL_STUDENTS } from "@/lib/data-store";
import {
  Sparkles,
  BookOpen,
  Play,
  CheckCircle2,
  Lock,
  ArrowRight,
  Flame,
  Award,
  HardDrive,
  Download,
  AlertCircle
} from "lucide-react";

export default function StudentAppHomePage() {
  const { locale, formatNum, t } = useLanguage();

  // Login flow state
  const [student, setStudent] = useState<any>(null);
  const [selectedCentre, setSelectedCentre] = useState<string>("SPD-01");
  const [selectedStudentForPin, setSelectedStudentForPin] = useState<any>(null);
  const [enteredPin, setEnteredPin] = useState<string>("");
  const [pinError, setPinError] = useState<string | null>(null);
  const [failedAttempts, setFailedAttempts] = useState<number>(0);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem("efa_student_session");
    if (saved) {
      try {
        setStudent(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  const centreStudents = INITIAL_STUDENTS.filter(
    (s) => s.centreCode === selectedCentre
  );

  const handlePinKey = (num: string) => {
    if (enteredPin.length < 4) {
      const newPin = enteredPin + num;
      setEnteredPin(newPin);

      if (newPin.length === 4) {
        verifyPin(newPin);
      }
    }
  };

  const handleBackspace = () => {
    setEnteredPin(enteredPin.slice(0, -1));
    setPinError(null);
  };

  const verifyPin = (pinToTest: string) => {
    if (isLocked) return;

    if (pinToTest === selectedStudentForPin.pin) {
      // Success
      localStorage.setItem("efa_student_session", JSON.stringify(selectedStudentForPin));
      setStudent(selectedStudentForPin);
      setSelectedStudentForPin(null);
      setEnteredPin("");
      setPinError(null);
      setFailedAttempts(0);
    } else {
      const attempts = failedAttempts + 1;
      setFailedAttempts(attempts);
      setEnteredPin("");
      if (attempts >= 5) {
        setIsLocked(true);
        setPinError(t("student.accountLocked"));
      } else {
        setPinError(`${t("student.wrongPin")} (${formatNum(5 - attempts)} বার সুযোগ বাকি)`);
      }
    }
  };

  // -------------------------------------------------------------
  // If NOT logged in: Show 1. Centre Select -> 2. Photo Grid -> 3. PIN Pad
  // -------------------------------------------------------------
  if (!student) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-2xl bg-[#E9A319] text-[#0B2A5B] flex items-center justify-center font-bold mx-auto mb-3 shadow-md">
            <BookOpen className="w-9 h-9" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
            {t("student.centreSelection")}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            {locale === "bn"
              ? "প্রথমে তোমার সেন্টার নির্বাচন করো এবং নিজের ছবিতে চাপ দাও।"
              : "Select your centre, tap your photo, and enter your 4-digit PIN."}
          </p>
        </div>

        {/* 1. Centre Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {INITIAL_CENTRES.map((c) => (
            <button
              key={c.code}
              onClick={() => {
                setSelectedCentre(c.code);
                setSelectedStudentForPin(null);
                setEnteredPin("");
              }}
              className={`px-5 py-3 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                selectedCentre === c.code
                  ? "bg-[#0B2A5B] text-white shadow-md scale-102"
                  : "bg-white text-slate-700 border border-[#E2DED5] hover:bg-slate-50"
              }`}
            >
              <span className="block text-xs font-mono opacity-80">{c.code}</span>
              {locale === "bn" ? c.nameBn.split(" ")[0] + " " + c.nameBn.split(" ")[1] : c.nameEn.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* 2. Photo-Tap Grid (Young Child Friendly) */}
        {!selectedStudentForPin ? (
          <div className="space-y-4">
            <h2 className="text-center font-bold text-lg text-[#0B2A5B]">
              👇 {t("student.selectYourPhoto")}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {centreStudents.map((st) => (
                <button
                  key={st.id}
                  onClick={() => {
                    setSelectedStudentForPin(st);
                    setEnteredPin("");
                    setPinError(null);
                  }}
                  className="efa-card p-3 bg-white text-center hover:border-[#1565D8] hover:shadow-lg transition-all group flex flex-col items-center cursor-pointer"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-[#E2DED5] group-hover:border-[#1565D8] mb-3">
                    <img
                      src={st.avatar}
                      alt={st.nameBn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-bold text-base sm:text-lg text-[#0B2A5B] group-hover:text-[#1565D8]">
                    {locale === "bn" ? st.nameBn : st.nameEn}
                  </span>
                  <span className="text-xs text-slate-500 font-mono mt-0.5">
                    {st.studentId}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* 3. 4-Digit Big Button PIN Pad */
          <div className="max-w-md mx-auto efa-card p-6 sm:p-8 bg-white shadow-xl text-center space-y-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-3 text-left">
                <img
                  src={selectedStudentForPin.avatar}
                  alt={selectedStudentForPin.nameBn}
                  className="w-12 h-12 rounded-full border-2 border-[#1565D8] object-cover"
                />
                <div>
                  <h3 className="font-bold text-base text-[#0B2A5B]">
                    {locale === "bn" ? selectedStudentForPin.nameBn : selectedStudentForPin.nameEn}
                  </h3>
                  <span className="text-xs text-slate-500">{selectedStudentForPin.studentId}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedStudentForPin(null)}
                className="text-xs text-[#1565D8] font-bold hover:underline"
              >
                {locale === "bn" ? "পরিবর্তন" : "Change"}
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="font-bold text-lg text-[#0B2A5B]">{t("student.enterPin")}</h3>
              {/* PIN Dots */}
              <div className="flex justify-center gap-3 py-2">
                {[0, 1, 2, 3].map((idx) => (
                  <div
                    key={idx}
                    className={`w-6 h-6 rounded-full border-2 transition-all ${
                      enteredPin.length > idx
                        ? "bg-[#1565D8] border-[#1565D8] scale-110"
                        : "border-slate-300 bg-slate-100"
                    }`}
                  />
                ))}
              </div>
              {pinError && (
                <p className="text-xs text-rose-600 font-semibold">{pinError}</p>
              )}
            </div>

            {/* Numeric Keypad (≥56px Tap Target) */}
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                <button
                  key={digit}
                  onClick={() => handlePinKey(String(digit))}
                  disabled={isLocked}
                  className="student-tap-target bg-slate-100 hover:bg-[#1565D8] hover:text-white text-[#0B2A5B] font-bold text-2xl rounded-xl transition-all active:scale-95 cursor-pointer"
                >
                  {formatNum(digit)}
                </button>
              ))}
              <button
                onClick={() => setEnteredPin("")}
                className="student-tap-target bg-slate-200 text-slate-700 font-bold text-sm rounded-xl cursor-pointer"
              >
                C
              </button>
              <button
                onClick={() => handlePinKey("0")}
                disabled={isLocked}
                className="student-tap-target bg-slate-100 hover:bg-[#1565D8] hover:text-white text-[#0B2A5B] font-bold text-2xl rounded-xl transition-all cursor-pointer"
              >
                {formatNum(0)}
              </button>
              <button
                onClick={handleBackspace}
                className="student-tap-target bg-slate-200 text-slate-700 font-bold text-lg rounded-xl cursor-pointer"
              >
                ⌫
              </button>
            </div>

            <div className="text-xs text-slate-400">
              {locale === "bn" ? "ডেমো পিন: ১২৩৪" : "Demo PIN: 1234"}
            </div>
          </div>
        )}
      </div>
    );
  }

  // -------------------------------------------------------------
  // If LOGGED IN: Screen 2 - Home / আজকের পাঠ
  // -------------------------------------------------------------
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* 1. Student Greeting & Rewards Bar */}
      <div className="efa-card p-6 bg-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src={student.avatar}
            alt={student.nameBn}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#E9A319] object-cover shadow-sm"
          />
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
              {locale === "bn" ? `স্বাগতম, ${student.nameBn}!` : `Welcome, ${student.nameEn}!`}
            </h1>
            <p className="text-sm text-slate-600 mt-0.5">
              {locale === "bn"
                ? `শ্রেণি ${formatNum(student.classLevel)} • ${student.studentId}`
                : `Class ${student.classLevel} • ${student.studentId}`}
            </p>
          </div>
        </div>

        {/* Chips */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-4 py-2 rounded-xl">
            <Sparkles className="w-5 h-5 text-[#E9A319]" />
            <div>
              <div className="text-lg font-bold leading-none">{formatNum(student.points)}</div>
              <div className="text-[11px] text-amber-700">{t("student.points")}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-rose-50 border border-rose-200 text-rose-800 px-4 py-2 rounded-xl">
            <Flame className="w-5 h-5 text-rose-500" />
            <div>
              <div className="text-lg font-bold leading-none">{formatNum(student.streak)} দিন</div>
              <div className="text-[11px] text-rose-700">{t("student.streak")}</div>
            </div>
          </div>

          {/* Big Green Offline Storage Chip */}
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-2 rounded-xl">
            <HardDrive className="w-5 h-5 text-[#1E8E4F]" />
            <div>
              <div className="text-lg font-bold leading-none text-[#1E8E4F]">
                {formatNum(320)} MB
              </div>
              <div className="text-[11px] text-emerald-700">{t("student.offlineReady")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Continue Where You Left Off (Card) */}
      <div className="bg-gradient-to-r from-[#0B2A5B] to-[#1565D8] rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <span className="bg-[#E9A319] text-[#0B2A5B] font-bold text-xs px-2.5 py-1 rounded">
            {t("student.continueLearning")}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            {locale === "bn"
              ? "অধ্যায় ১: বন্ধনীর ব্যবহার ও সরল করার নিয়ম"
              : "Chapter 1: Rules of Brackets & Simplification"}
          </h2>
          <p className="text-slate-200 text-sm">
            {locale === "bn"
              ? "প্রাথমিক গণিত • ৬ মিনিটের ভিডিও পাঠ (অফলাইন সংরক্ষিত)"
              : "Elementary Mathematics • 6 min video lesson (Offline Ready)"}
          </p>
        </div>

        <Link
          href="/learn/lesson/lesson-1"
          className="btn-gold px-6 py-3.5 rounded-xl font-bold text-base shadow-md shrink-0 flex items-center gap-2"
        >
          <Play className="w-5 h-5 fill-current" />
          <span>{locale === "bn" ? "পাঠ শুরু করো" : "Continue Lesson"}</span>
        </Link>
      </div>

      {/* 3. Today's Lessons / আজকের পাঠ (Rule-based recommendations) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2A5B] flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#1565D8]" />
            <span>{t("student.todayLessons")}</span>
          </h2>
          <Link href="/learn/subjects" className="text-sm font-semibold text-[#1565D8] hover:underline">
            {locale === "bn" ? "সব বিষয় দেখুন →" : "View All Subjects →"}
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recommendation 1 */}
          <div className="efa-card p-5 bg-white space-y-3 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-[#1565D8] bg-blue-50 px-2.5 py-1 rounded">
                {locale === "bn" ? "গণিত" : "Math"}
              </span>
              <span className="text-xs text-slate-400">১০ পয়েন্ট</span>
            </div>
            <h3 className="font-bold text-lg text-[#0B2A5B]">
              {locale === "bn" ? "ঐকিক নিয়ম ও ব্যবহারিক হিসাব" : "Unitary Method Basics"}
            </h3>
            <p className="text-xs text-slate-500">
              {locale === "bn" ? "পড়ার পাঠ্য ও রঙিন উদাহরণ" : "Interactive reading lesson"}
            </p>
            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/learn/lesson/lesson-2"
                className="btn-blue text-xs px-4 py-2 rounded-lg font-bold"
              >
                {locale === "bn" ? "পড়তে শুরু করো" : "Start Reading"}
              </Link>
            </div>
          </div>

          {/* Recommendation 2: Quiz */}
          <div className="efa-card p-5 bg-white space-y-3 hover:shadow-md transition-shadow border-[#E9A319]/40">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                {locale === "bn" ? "কুইজ পরীক্ষা" : "Quiz Challenge"}
              </span>
              <span className="text-xs text-[#E9A319] font-bold">★ ১০০ পয়েন্ট</span>
            </div>
            <h3 className="font-bold text-lg text-[#0B2A5B]">
              {locale === "bn" ? "চার প্রক্রিয়া অধ্যায় সমাপনী কুইজ" : "Chapter 1 Mastery Quiz"}
            </h3>
            <p className="text-xs text-slate-500">
              {locale === "bn" ? "১০টি সহজ প্রশ্ন • ৬০% পেলে পরের অধ্যায় খুলবে" : "10 Questions • 60% unlocks Chapter 2"}
            </p>
            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/learn/quiz/quiz-1"
                className="btn-gold text-xs px-4 py-2 rounded-lg font-bold"
              >
                {locale === "bn" ? "কুইজ দাও" : "Start Quiz"}
              </Link>
            </div>
          </div>

          {/* Recommendation 3 */}
          <div className="efa-card p-5 bg-white space-y-3 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                {locale === "bn" ? "বিজ্ঞান" : "Science"}
              </span>
              <span className="text-xs text-slate-400">১০ পয়েন্ট</span>
            </div>
            <h3 className="font-bold text-lg text-[#0B2A5B]">
              {locale === "bn" ? "আমাদের পরিবেশ ও খাদ্য শৃঙ্খল" : "Environment & Food Chain"}
            </h3>
            <p className="text-xs text-slate-500">
              {locale === "bn" ? "অডিও সহ ব্যাখ্যা" : "Audio narrated lesson"}
            </p>
            <div className="pt-2 flex items-center justify-between">
              <Link
                href="/learn/lesson/lesson-1"
                className="btn-navy text-xs px-4 py-2 rounded-lg font-bold"
              >
                {locale === "bn" ? "শুরু করো" : "Start Lesson"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
