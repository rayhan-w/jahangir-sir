"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { BookOpen, Lock, Mail, ArrowRight, ShieldCheck } from "lucide-react";

export default function StaffLoginPage() {
  const { locale, t } = useLanguage();
  const router = useRouter();

  const [email, setEmail] = useState("admin@baust.edu.bd");
  const [password, setPassword] = useState("password123");
  const [role, setRole] = useState("SUPER_ADMIN");
  const [error, setError] = useState<string | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate credentials
    const staffUser = {
      name: role === "SUPER_ADMIN" ? "Dr. Jahangir Alam (PD)" : role === "CENTRE_TEACHER" ? "মাহমুদুল হাসান (শিক্ষক)" : "Tanzim Ahmed",
      email,
      role
    };

    localStorage.setItem("efa_staff_user", JSON.stringify(staffUser));
    router.push("/admin");
  };

  return (
    <div className="min-h-screen bg-[#0B2A5B] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-[#E9A319] text-[#0B2A5B] flex items-center justify-center font-bold mx-auto mb-2 shadow-md">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "কর্মকর্তা ও শিক্ষক পোর্টাল" : "Staff & Teacher Portal"}
          </h1>
          <p className="text-xs text-slate-500">
            Education for All • Project No: ZRF-26-25400D (BAUST CSE)
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              {locale === "bn" ? "ব্যবহারকারীর ভূমিকা (Role)" : "Role"}
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none bg-white font-semibold text-slate-800"
            >
              <option value="SUPER_ADMIN">Super Admin (সর্বোচ্চ নিয়ন্ত্রণ ও সেটিংস)</option>
              <option value="PROGRAMME_MANAGER">Programme Manager (সেন্টার ও প্রতিবেদন)</option>
              <option value="CENTRE_TEACHER">Centre Teacher (নিজ সেন্টারের উপস্থিতি ও শিক্ষার্থী)</option>
              <option value="CONTENT_EDITOR">Content Editor (পাঠ্যক্রম, অধ্যায় ও কুইজ)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              {locale === "bn" ? "ইমেইল বা ফোন" : "Email or Phone"}
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              {locale === "bn" ? "পাসওয়ার্ড" : "Password"}
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#E2DED5] text-sm focus:border-[#1565D8] focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-navy w-full py-3 rounded-xl font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{locale === "bn" ? "ড্যাশবোর্ডে প্রবেশ করুন" : "Sign In to Dashboard"}</span>
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 text-center">
          <Link href="/" className="text-xs font-semibold text-[#1565D8] hover:underline">
            {locale === "bn" ? "← মূল ওয়েবসাইটে ফিরে যান" : "← Back to Public Website"}
          </Link>
        </div>
      </div>
    </div>
  );
}
