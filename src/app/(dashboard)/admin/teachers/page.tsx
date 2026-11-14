"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Plus, Mail, Phone, Shield } from "lucide-react";

export default function AdminTeachersPage() {
  const { locale, t } = useLanguage();

  const [staffList, setStaffList] = useState([
    {
      id: "u-1",
      name: "Dr. Jahangir Alam",
      role: "SUPER_ADMIN",
      email: "admin@baust.edu.bd",
      phone: "+8801711000001",
      centre: "BAUST CSE HQ"
    },
    {
      id: "u-2",
      name: "Tanzim Ahmed",
      role: "PROGRAMME_MANAGER",
      email: "manager@baust.edu.bd",
      phone: "+8801711000002",
      centre: "সকল সেন্টার"
    },
    {
      id: "u-3",
      name: "মাহমুদুল হাসান",
      role: "CENTRE_TEACHER",
      email: "teacher.saidpur@baust.edu.bd",
      phone: "+8801711000004",
      centre: "সৈয়দপুর রেলওয়ে বস্তি সেন্টার (SPD-01)"
    },
    {
      id: "u-4",
      name: "সুমাইয়া আক্তার",
      role: "CENTRE_TEACHER",
      email: "teacher.kurigram@baust.edu.bd",
      phone: "+8801711000005",
      centre: "ধরলা নদী চর সেন্টার (KRG-01)"
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.teachers")}
          </h1>
          <p className="text-xs text-slate-500">
            শিক্ষক ও প্রশাসনিক কর্মকর্তাদের ভূমিকা ও সেন্টার বণ্টন।
          </p>
        </div>
      </div>

      <div className="efa-card overflow-hidden bg-white shadow-xs">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-700 text-xs font-bold border-b uppercase">
            <tr>
              <th className="p-4">নাম ও ইমেইল</th>
              <th className="p-4">ভূমিকা (Role)</th>
              <th className="p-4">বরাদ্দকৃত সেন্টার</th>
              <th className="p-4">ফোন নম্বর</th>
              <th className="p-4 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {staffList.map((st) => (
              <tr key={st.id} className="hover:bg-slate-50">
                <td className="p-4">
                  <div className="font-bold text-[#0B2A5B]">{st.name}</div>
                  <div className="text-xs text-slate-400">{st.email}</div>
                </td>
                <td className="p-4">
                  <span className="text-xs font-bold bg-blue-50 text-[#1565D8] px-2.5 py-0.5 rounded">
                    {st.role}
                  </span>
                </td>
                <td className="p-4 text-xs font-medium text-slate-700">{st.centre}</td>
                <td className="p-4 text-xs font-mono text-slate-600">{st.phone}</td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => alert("ভূমিকা সম্পাদনা")}
                    className="text-xs text-[#1565D8] font-semibold hover:underline"
                  >
                    সম্পাদনা
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
