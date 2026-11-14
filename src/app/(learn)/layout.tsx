"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  BookOpen,
  WifiOff,
  Wifi,
  RefreshCw,
  User,
  Home,
  Award,
  Download,
  HelpCircle,
  LogOut,
  Sparkles
} from "lucide-react";

export default function StudentAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, formatNum, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  const [isOnline, setIsOnline] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [textSize, setTextSize] = useState<"normal" | "large" | "xlarge">("normal");
  const [loggedInStudent, setLoggedInStudent] = useState<any>(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    setIsOnline(navigator.onLine);

    // Check student session in localStorage
    const saved = localStorage.getItem("efa_student_session");
    if (saved) {
      try {
        setLoggedInStudent(JSON.parse(saved));
      } catch (e) {}
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [pathname]);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      alert(locale === "bn" ? "সব কুইজ ও অগ্রগতি সফলভাবে সিঙ্ক হয়েছে!" : "Learning progress successfully synced!");
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("efa_student_session");
    setLoggedInStudent(null);
    router.push("/learn");
  };

  // Text scaling class
  const textSizeClass =
    textSize === "xlarge" ? "text-xl leading-relaxed" : textSize === "large" ? "text-lg leading-relaxed" : "text-base";

  return (
    <div className={`min-h-screen flex flex-col bg-[#F7F5F0] text-[#1A202C] select-none ${textSizeClass}`}>
      {/* Tablet-First Top Bar */}
      <header className="sticky top-0 z-40 bg-[#0B2A5B] text-white px-4 sm:px-6 py-3 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/learn" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#E9A319] text-[#0B2A5B] flex items-center justify-center font-bold">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl text-white block leading-tight">
                {locale === "bn" ? "সবার জন্য শিক্ষা" : "Education for All"}
              </span>
              <span className="text-[11px] text-blue-200">
                {locale === "bn" ? "শিক্ষার্থী লার্নিং অ্যাপ (ট্যাবলেট সংস্করণ)" : "Student Tablet App"}
              </span>
            </div>
          </Link>
        </div>

        {/* Status Chips & Accessibility Controls */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Text Size Toggle (A / A+ / A++) */}
          <div className="hidden sm:flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10 text-xs font-bold">
            <button
              onClick={() => setTextSize("normal")}
              className={`px-2.5 py-1 rounded ${textSize === "normal" ? "bg-[#E9A319] text-[#0B2A5B]" : "text-white"}`}
            >
              A
            </button>
            <button
              onClick={() => setTextSize("large")}
              className={`px-2.5 py-1 rounded ${textSize === "large" ? "bg-[#E9A319] text-[#0B2A5B]" : "text-white"}`}
            >
              A+
            </button>
            <button
              onClick={() => setTextSize("xlarge")}
              className={`px-2.5 py-1 rounded ${textSize === "xlarge" ? "bg-[#E9A319] text-[#0B2A5B]" : "text-white"}`}
            >
              A++
            </button>
          </div>

          {/* Offline / Online Indicator */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
              isOnline ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40" : "bg-amber-600/30 text-amber-300 border border-amber-500/40"
            }`}
          >
            {isOnline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
            <span>{isOnline ? (locale === "bn" ? "অনলাইন" : "Online") : (locale === "bn" ? "অফলাইন" : "Offline")}</span>
          </div>

          {/* Sync Button */}
          <button
            onClick={handleSync}
            disabled={syncing}
            className="flex items-center gap-1.5 bg-[#1565D8] hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
            <span className="hidden sm:inline">{t("common.syncNow")}</span>
          </button>

          {/* Logged in Student Quick Profile or Logout */}
          {loggedInStudent && (
            <div className="flex items-center gap-2 pl-2 border-l border-white/15">
              <Link href="/learn/profile" className="flex items-center gap-2">
                <img
                  src={loggedInStudent.avatar || "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=100"}
                  alt={loggedInStudent.nameBn}
                  className="w-8 h-8 rounded-full border border-amber-400 object-cover"
                />
                <span className="hidden md:inline text-xs font-bold text-amber-300">
                  {locale === "bn" ? loggedInStudent.nameBn : loggedInStudent.nameEn}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-slate-300 hover:text-white p-1 rounded"
                title="লগআউট"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-24 md:pb-8">{children}</main>

      {/* Bottom Sticky Tablet Navigation (When logged in) */}
      {loggedInStudent && (
        <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2DED5] px-4 py-2 shadow-lg flex items-center justify-around md:hidden">
          <Link
            href="/learn"
            className={`flex flex-col items-center p-2 rounded-lg ${pathname === "/learn" ? "text-[#1565D8] font-bold" : "text-slate-500"}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-[11px] mt-0.5">{locale === "bn" ? "আজকের পাঠ" : "Today"}</span>
          </Link>

          <Link
            href="/learn/subjects"
            className={`flex flex-col items-center p-2 rounded-lg ${pathname.startsWith("/learn/subjects") ? "text-[#1565D8] font-bold" : "text-slate-500"}`}
          >
            <BookOpen className="w-6 h-6" />
            <span className="text-[11px] mt-0.5">{locale === "bn" ? "বিষয়" : "Subjects"}</span>
          </Link>

          <Link
            href="/learn/progress"
            className={`flex flex-col items-center p-2 rounded-lg ${pathname === "/learn/progress" ? "text-[#1565D8] font-bold" : "text-slate-500"}`}
          >
            <Award className="w-6 h-6" />
            <span className="text-[11px] mt-0.5">{locale === "bn" ? "অগ্রগতি" : "Progress"}</span>
          </Link>

          <Link
            href="/learn/downloads"
            className={`flex flex-col items-center p-2 rounded-lg ${pathname === "/learn/downloads" ? "text-[#1565D8] font-bold" : "text-slate-500"}`}
          >
            <Download className="w-6 h-6" />
            <span className="text-[11px] mt-0.5">{locale === "bn" ? "অফলাইন" : "Offline"}</span>
          </Link>

          <Link
            href="/learn/help"
            className={`flex flex-col items-center p-2 rounded-lg ${pathname === "/learn/help" ? "text-[#1565D8] font-bold" : "text-slate-500"}`}
          >
            <HelpCircle className="w-6 h-6" />
            <span className="text-[11px] mt-0.5">{locale === "bn" ? "সাহায্য" : "Help"}</span>
          </Link>
        </nav>
      )}
    </div>
  );
}
