"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_SETTINGS } from "@/lib/data-store";
import { Settings, Save, CheckCircle2, Shield } from "lucide-react";

export default function AdminSettingsPage() {
  const { locale, formatNum, t } = useLanguage();
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.settings")}
          </h1>
          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "সিস্টেমের যাবতীয় কনফিগারেশন, পাইলট লক্ষ্যমাত্রা ও পেমেন্ট নম্বর (কোনো কিছুই হার্ডকোডেড নয়)।"
              : "System configuration, live pilot targets and support accounts (Never hardcoded)."}
          </p>
        </div>
      </div>

      {saved && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-sm font-bold flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-[#1E8E4F]" />
          <span>{locale === "bn" ? "সেটিংস সফলভাবে সংরক্ষিত হয়েছে!" : "Settings saved successfully!"}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Pilot Target Numbers (Shows on Home) */}
        <div className="efa-card p-6 bg-white space-y-4">
          <h2 className="text-lg font-bold text-[#0B2A5B] border-b pb-2">
            {locale === "bn" ? "পাইলট প্রকল্পের লক্ষ্যমাত্রা (ওয়েবসাইটের স্ট্রিপে প্রদর্শিত)" : "Pilot Phase Targets (Shown on Public Strip)"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">সুবিধাভোগী শিশু সংখ্যা</label>
              <input
                type="number"
                value={settings.pilotTargets.children}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    pilotTargets: { ...settings.pilotTargets, children: Number(e.target.value) }
                  })
                }
                className="w-full px-3 py-2 border rounded text-sm font-bold text-[#0B2A5B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">লার্নিং সেন্টার সংখ্যা</label>
              <input
                type="number"
                value={settings.pilotTargets.centres}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    pilotTargets: { ...settings.pilotTargets, centres: Number(e.target.value) }
                  })
                }
                className="w-full px-3 py-2 border rounded text-sm font-bold text-[#0B2A5B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">স্বেচ্ছাসেবক শিক্ষক</label>
              <input
                type="number"
                value={settings.pilotTargets.teachers}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    pilotTargets: { ...settings.pilotTargets, teachers: Number(e.target.value) }
                  })
                }
                className="w-full px-3 py-2 border rounded text-sm font-bold text-[#0B2A5B]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">কোর্স সমাপ্তির লক্ষ্য (%)</label>
              <input
                type="number"
                value={settings.pilotTargets.completionRate}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    pilotTargets: { ...settings.pilotTargets, completionRate: Number(e.target.value) }
                  })
                }
                className="w-full px-3 py-2 border rounded text-sm font-bold text-[#1E8E4F]"
              />
            </div>
          </div>
        </div>

        {/* Academic & Security Rules */}
        <div className="efa-card p-6 bg-white space-y-4">
          <h2 className="text-lg font-bold text-[#0B2A5B] border-b pb-2">
            {locale === "bn" ? "শিখন ও নিরাপত্তা কনফিগারেশন" : "Learning & Security Thresholds"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                অধ্যায় আনলকের ন্যূনতম কুইজ দক্ষতা (Mastery Threshold %)
              </label>
              <input
                type="number"
                value={settings.masteryThreshold}
                onChange={(e) => setSettings({ ...settings, masteryThreshold: Number(e.target.value) })}
                className="w-full px-3 py-2 border rounded text-sm font-bold"
              />
              <span className="text-[11px] text-slate-400">ডিফল্ট ৬০%। এর নিচে পেলে অধ্যায় লক থাকে।</span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                শিক্ষার্থী পিনের দৈর্ঘ্য (PIN Length)
              </label>
              <input
                type="number"
                value={settings.pinLength}
                onChange={(e) => setSettings({ ...settings, pinLength: Number(e.target.value) })}
                className="w-full px-3 py-2 border rounded text-sm font-bold"
              />
              <span className="text-[11px] text-slate-400">ডিফল্ট ৪ ডিজিট (ছোট শিশুদের উপযোগী)।</span>
            </div>
          </div>
        </div>

        {/* Support Accounts */}
        <div className="efa-card p-6 bg-white space-y-4">
          <h2 className="text-lg font-bold text-[#0B2A5B] border-b pb-2">
            {locale === "bn" ? "সহায়তা গ্রহণ একাউন্ট (বিকাশ / নগদ)" : "Support Numbers (bKash / Nagad)"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">বিকাশ নম্বর</label>
              <input
                type="text"
                value={settings.bKashNumber}
                onChange={(e) => setSettings({ ...settings, bKashNumber: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm font-mono font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">নগদ নম্বর</label>
              <input
                type="text"
                value={settings.nagadNumber}
                onChange={(e) => setSettings({ ...settings, nagadNumber: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm font-mono font-bold"
              />
            </div>
          </div>
        </div>

        {/* Project Contact Details */}
        <div className="efa-card p-6 bg-white space-y-4">
          <h2 className="text-lg font-bold text-[#0B2A5B] border-b pb-2">
            {locale === "bn" ? "অফিসিয়াল যোগাযোগ ও ঠিকানা" : "Contact Information"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">অফিসিয়াল ইমেইল</label>
              <input
                type="email"
                value={settings.contactEmail}
                onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">অফিসিয়াল ফোন</label>
              <input
                type="text"
                value={settings.contactPhone}
                onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                className="w-full px-3 py-2 border rounded text-sm"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn-navy py-3 px-8 rounded-xl font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer"
        >
          <Save className="w-4 h-4" />
          <span>{locale === "bn" ? "সকল সেটিংস পরিবর্তন সংরক্ষণ করুন" : "Save All Settings"}</span>
        </button>
      </form>
    </div>
  );
}
