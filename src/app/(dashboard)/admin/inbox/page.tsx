"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Inbox, CheckCircle2, Phone, Mail, Clock } from "lucide-react";

export default function AdminInboxPage() {
  const { locale, t } = useLanguage();

  const [submissions, setSubmissions] = useState([
    {
      id: "sub-1",
      type: "VOLUNTEER",
      name: "তানভীর আহমেদ",
      phone: "01711223399",
      email: "tanvir@gmail.com",
      district: "নীলফামারী",
      skills: "গণিত ও বিজ্ঞান",
      availability: "সাপ্তাহিক ছুটি",
      status: "NEW",
      date: "১২ নভেম্বর ২০২৬"
    },
    {
      id: "sub-2",
      type: "SUPPORT",
      name: "মো: রফিকুল আলম",
      phone: "01811223388",
      email: "rafiq@corp.bd",
      district: "ঢাকা",
      skills: "২টি সিম্ফনি ট্যাবলেট উপহার",
      availability: "কুরিয়ার প্রেরণ",
      status: "CONTACTED",
      date: "১০ নভেম্বর ২০২৬"
    }
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setSubmissions(submissions.map((s) => (s.id === id ? { ...s, status: newStatus } : s)));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.inbox")}
          </h1>
          <p className="text-xs text-slate-500">
            ওয়েবসাইট থেকে প্রাপ্ত স্বেচ্ছাসেবক ও সহায়তা আবেদনপত্র।
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {submissions.map((sub) => (
          <div key={sub.id} className="efa-card p-5 bg-white space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-3">
              <div>
                <span className="font-bold text-base text-[#0B2A5B]">{sub.name}</span>
                <span className={`ml-2 text-xs font-bold px-2 py-0.5 rounded ${
                  sub.type === "VOLUNTEER" ? "bg-blue-100 text-[#1565D8]" : "bg-emerald-100 text-[#1E8E4F]"
                }`}>
                  {sub.type === "VOLUNTEER" ? "স্বেচ্ছাসেবক আবেদন" : "সহায়তা প্রস্তাব"}
                </span>
              </div>
              <span className="text-xs text-slate-400">{sub.date}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
              <p className="flex items-center gap-1.5 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#1E8E4F]" />
                <span>{sub.phone}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#1565D8]" />
                <span>{sub.email}</span>
              </p>
              <p>
                <strong>এলাকা: </strong>
                <span>{sub.district}</span>
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700">
              <strong>বিবরণ: </strong>
              <span>{sub.skills} • সময়: {sub.availability}</span>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500">অবস্থা পরিবর্তন:</span>
                <select
                  value={sub.status}
                  onChange={(e) => updateStatus(sub.id, e.target.value)}
                  className="text-xs px-2 py-1 border rounded bg-white font-bold"
                >
                  <option value="NEW">নতুন (New)</option>
                  <option value="CONTACTED">যোগাযোগ সম্পন্ন (Contacted)</option>
                  <option value="JOINED">যুক্ত হয়েছেন (Joined)</option>
                </select>
              </div>

              <a
                href={`tel:${sub.phone}`}
                className="btn-navy text-xs px-3 py-1.5 rounded flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>কল করুন</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
