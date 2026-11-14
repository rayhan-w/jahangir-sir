"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_CENTRES } from "@/lib/data-store";
import { MapPin, Plus, Tablet, Users, Edit, Trash2, CheckCircle2 } from "lucide-react";

export default function AdminCentresPage() {
  const { locale, formatNum, t } = useLanguage();
  const [centres, setCentres] = useState(INITIAL_CENTRES);
  const [showAdd, setShowAdd] = useState(false);

  const [newC, setNewC] = useState({
    code: "",
    nameBn: "",
    districtBn: "নীলফামারী",
    districtEn: "Nilphamari",
    addressBn: "",
    tabletCount: 10,
    teacherName: ""
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `c-${Date.now()}`,
      code: newC.code.toUpperCase(),
      nameBn: newC.nameBn,
      nameEn: newC.nameBn,
      districtBn: newC.districtBn,
      districtEn: newC.districtEn,
      addressBn: newC.addressBn,
      addressEn: newC.addressBn,
      lat: 25.77,
      lng: 88.89,
      tabletCount: Number(newC.tabletCount),
      studentCount: 0,
      teacherName: newC.teacherName,
      phone: "017XXXXXXXX",
      photoUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
      active: true
    };
    setCentres([...centres, created]);
    setShowAdd(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.centres")}
          </h1>
          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "মাঠপর্যায়ের কমিউনিটি লার্নিং সেন্টার ও ট্যাবলেট বরাদ্দ ব্যবস্থাপনা।"
              : "Field community learning centre provisioning and tablet inventory."}
          </p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="btn-navy text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>{locale === "bn" ? "নতুন সেন্টার যোগ করুন" : "Add Learning Centre"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centres.map((c) => (
          <div key={c.id} className="efa-card p-6 bg-white space-y-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-mono font-bold text-xs bg-blue-50 text-[#1565D8] px-2.5 py-0.5 rounded">
                  {c.code}
                </span>
                <h3 className="font-bold text-lg text-[#0B2A5B] mt-1">
                  {locale === "bn" ? c.nameBn : c.nameEn}
                </h3>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" title="Active" />
            </div>

            <div className="space-y-1.5 text-xs text-slate-600">
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#E9A319]" />
                <span>{locale === "bn" ? c.addressBn : c.addressEn}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Tablet className="w-3.5 h-3.5 text-[#1E8E4F]" />
                <span>{formatNum(c.tabletCount)} {locale === "bn" ? "টি ট্যাবলেট কার্যকর" : "tablets assigned"}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#1565D8]" />
                <span>{formatNum(c.studentCount)} {locale === "bn" ? "জন শিক্ষার্থী" : "students"}</span>
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500">
                {locale === "bn" ? `শিক্ষক: ${c.teacherName}` : `Mentor: ${c.teacherName}`}
              </span>
              <button
                onClick={() => alert("সেন্টার তথ্য সম্পাদনা মোড সক্রিয়।")}
                className="text-[#1565D8] font-semibold hover:underline"
              >
                {locale === "bn" ? "সম্পাদনা" : "Edit"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAdd && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h2 className="text-lg font-bold text-[#0B2A5B]">
              {locale === "bn" ? "নতুন সেন্টার যুক্তকরণ ফর্ম" : "Add Centre"}
            </h2>
            <form onSubmit={handleAdd} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700">সেন্টার কোড *</label>
                <input
                  required
                  placeholder="যেমন: BND-01"
                  value={newC.code}
                  onChange={(e) => setNewC({ ...newC, code: e.target.value })}
                  className="w-full px-3 py-1.5 border rounded text-sm uppercase"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700">সেন্টারের নাম *</label>
                <input
                  required
                  value={newC.nameBn}
                  onChange={(e) => setNewC({ ...newC, nameBn: e.target.value })}
                  className="w-full px-3 py-1.5 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700">ঠিকানা *</label>
                <input
                  required
                  value={newC.addressBn}
                  onChange={(e) => setNewC({ ...newC, addressBn: e.target.value })}
                  className="w-full px-3 py-1.5 border rounded text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700">ট্যাবলেট সংখ্যা</label>
                  <input
                    type="number"
                    value={newC.tabletCount}
                    onChange={(e) => setNewC({ ...newC, tabletCount: Number(e.target.value) })}
                    className="w-full px-3 py-1.5 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700">দায়িত্বপ্রাপ্ত শিক্ষক</label>
                  <input
                    value={newC.teacherName}
                    onChange={(e) => setNewC({ ...newC, teacherName: e.target.value })}
                    className="w-full px-3 py-1.5 border rounded text-sm"
                  />
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAdd(false)}
                  className="w-1/2 py-2 border rounded text-xs"
                >
                  বাতিল
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-2 btn-navy rounded text-xs font-bold"
                >
                  সংরক্ষণ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
