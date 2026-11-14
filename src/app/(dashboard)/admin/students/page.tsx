"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STUDENTS, INITIAL_CENTRES } from "@/lib/data-store";
import {
  Users,
  Search,
  Plus,
  KeyRound,
  FileSpreadsheet,
  QrCode,
  Edit,
  Trash2,
  CheckCircle2,
  X
} from "lucide-react";

export default function StudentsManagementPage() {
  const { locale, formatNum, t } = useLanguage();
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [search, setSearch] = useState("");
  const [centreFilter, setCentreFilter] = useState("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [resetPinModal, setResetPinModal] = useState<any>(null);
  const [newPin, setNewPin] = useState("1234");
  const [selectedStudentForCard, setSelectedStudentForCard] = useState<any>(null);

  const [newStudent, setNewStudent] = useState({
    nameBn: "",
    nameEn: "",
    centreCode: "SPD-01",
    classLevel: 5,
    guardianName: "",
    guardianPhone: "",
    supportNeeds: ""
  });

  const filtered = students.filter((s) => {
    const matchesSearch =
      s.nameBn.includes(search) ||
      s.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      s.studentId.toLowerCase().includes(search.toLowerCase());
    const matchesCentre = centreFilter === "all" || s.centreCode === centreFilter;
    return matchesSearch && matchesCentre;
  });

  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    const serial = String(students.length + 1).padStart(3, "0");
    const autoId = `EFA-${newStudent.centreCode}-${serial}`;

    const created = {
      id: `s-${Date.now()}`,
      studentId: autoId,
      centreCode: newStudent.centreCode,
      nameBn: newStudent.nameBn,
      nameEn: newStudent.nameEn,
      classLevel: Number(newStudent.classLevel),
      guardianName: newStudent.guardianName,
      guardianPhone: newStudent.guardianPhone,
      pin: "1234",
      avatar: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=200",
      points: 0,
      streak: 0,
      masteryPercent: 0
    };

    setStudents([created, ...students]);
    setShowAddModal(false);
    alert(locale === "bn" ? `শিক্ষার্থী যুক্ত হয়েছে! আইডি: ${autoId}` : `Student added! ID: ${autoId}`);
  };

  const handleResetPin = () => {
    if (!resetPinModal) return;
    setStudents(
      students.map((s) =>
        s.id === resetPinModal.id ? { ...s, pin: newPin } : s
      )
    );
    alert(locale === "bn" ? `পিন রিসেট সফল হয়েছে! নতুন পিন: ${newPin}` : `PIN reset successful! New PIN: ${newPin}`);
    setResetPinModal(null);
  };

  return (
    <div className="space-y-6">
      {/* Top action header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.students")}
          </h1>
          <p className="text-xs text-slate-500">
            {locale === "bn"
              ? "শিক্ষার্থী প্রোফাইল, ৪-সংখ্যার পিন রিসেট ও ডিজিটাল আইডি কার্ড ব্যবস্থাপনা।"
              : "Student profiles, 4-digit PIN reset and official ID card issuance."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddModal(true)}
            className="btn-navy text-xs px-4 py-2 rounded-lg font-bold flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{locale === "bn" ? "নতুন শিক্ষার্থী ভর্তি" : "Add Student"}</span>
          </button>
        </div>
      </div>

      {/* Filter / Search Bar */}
      <div className="efa-card p-4 bg-white flex flex-col sm:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder={locale === "bn" ? "নাম বা আইডি দিয়ে খুঁজুন..." : "Search by name or student ID..."}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 border border-[#E2DED5] rounded-lg text-sm"
          />
        </div>
        <select
          value={centreFilter}
          onChange={(e) => setCentreFilter(e.target.value)}
          className="w-full sm:w-48 px-3 py-2 border border-[#E2DED5] rounded-lg text-sm bg-white"
        >
          <option value="all">{locale === "bn" ? "সকল সেন্টার" : "All Centres"}</option>
          {INITIAL_CENTRES.map((c) => (
            <option key={c.code} value={c.code}>{c.code} - {c.nameBn.split(" ")[0]}</option>
          ))}
        </select>
      </div>

      {/* Students Table */}
      <div className="efa-card overflow-hidden bg-white shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-700 text-xs font-bold border-b border-slate-200 uppercase">
              <tr>
                <th className="p-4">{locale === "bn" ? "শিক্ষার্থী" : "Student"}</th>
                <th className="p-4">{locale === "bn" ? "আইডি নম্বর" : "Student ID"}</th>
                <th className="p-4">{locale === "bn" ? "সেন্টার" : "Centre"}</th>
                <th className="p-4">{locale === "bn" ? "অভিভাবক ও ফোন" : "Guardian"}</th>
                <th className="p-4">{locale === "bn" ? "পয়েন্ট ও দক্ষতা" : "Mastery"}</th>
                <th className="p-4 text-right">{locale === "bn" ? "অ্যাকশন" : "Actions"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((st) => (
                <tr key={st.id} className="hover:bg-slate-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={st.avatar}
                        alt={st.nameBn}
                        className="w-10 h-10 rounded-full object-cover border"
                      />
                      <div>
                        <div className="font-bold text-[#0B2A5B]">
                          {locale === "bn" ? st.nameBn : st.nameEn}
                        </div>
                        <div className="text-xs text-slate-400">
                          {locale === "bn" ? `শ্রেণি ${formatNum(st.classLevel)}` : `Class ${st.classLevel}`}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 font-mono font-bold text-xs text-[#1565D8]">
                    {st.studentId}
                  </td>
                  <td className="p-4">
                    <span className="bg-blue-50 text-blue-900 text-xs font-bold px-2 py-0.5 rounded">
                      {st.centreCode}
                    </span>
                  </td>
                  <td className="p-4 text-xs">
                    <div className="font-semibold text-slate-800">{st.guardianName}</div>
                    <div className="text-slate-500 font-mono">{st.guardianPhone}</div>
                  </td>
                  <td className="p-4">
                    <div className="text-xs font-bold text-slate-700">
                      {formatNum(st.points)} {locale === "bn" ? "পয়েন্ট" : "pts"}
                    </div>
                    <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full bg-[#1E8E4F]"
                        style={{ width: `${st.masteryPercent}%` }}
                      />
                    </div>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setResetPinModal(st)}
                      className="px-2.5 py-1 text-xs font-bold bg-amber-50 text-amber-800 rounded border border-amber-200 hover:bg-amber-100 cursor-pointer"
                      title="পিন রিসেট"
                    >
                      <KeyRound className="w-3.5 h-3.5 inline mr-1" />
                      {locale === "bn" ? "পিন রিসেট" : "Reset PIN"}
                    </button>
                    <button
                      onClick={() => setSelectedStudentForCard(st)}
                      className="px-2.5 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded hover:bg-slate-200 cursor-pointer"
                      title="আইডি কার্ড প্রিন্ট"
                    >
                      <QrCode className="w-3.5 h-3.5 inline mr-1" />
                      {locale === "bn" ? "কার্ড" : "ID Card"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Student Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b pb-3">
              <h2 className="text-lg font-bold text-[#0B2A5B]">
                {locale === "bn" ? "নতুন শিক্ষার্থী ভর্তি ফর্ম" : "Add New Student"}
              </h2>
              <button onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    {locale === "bn" ? "নাম (বাংলা) *" : "Name (Bangla) *"}
                  </label>
                  <input
                    required
                    type="text"
                    value={newStudent.nameBn}
                    onChange={(e) => setNewStudent({ ...newStudent, nameBn: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    {locale === "bn" ? "নাম (ইংরেজি) *" : "Name (English) *"}
                  </label>
                  <input
                    required
                    type="text"
                    value={newStudent.nameEn}
                    onChange={(e) => setNewStudent({ ...newStudent, nameEn: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    {locale === "bn" ? "সেন্টার কোড *" : "Centre *"}
                  </label>
                  <select
                    value={newStudent.centreCode}
                    onChange={(e) => setNewStudent({ ...newStudent, centreCode: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm bg-white"
                  >
                    {INITIAL_CENTRES.map((c) => (
                      <option key={c.code} value={c.code}>{c.code} - {c.nameBn.split(" ")[0]}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    {locale === "bn" ? "শ্রেণি *" : "Class Level *"}
                  </label>
                  <select
                    value={newStudent.classLevel}
                    onChange={(e) => setNewStudent({ ...newStudent, classLevel: Number(e.target.value) })}
                    className="w-full px-3 py-2 border rounded text-sm bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((lvl) => (
                      <option key={lvl} value={lvl}>{lvl}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    {locale === "bn" ? "অভিভাবকের নাম *" : "Guardian Name *"}
                  </label>
                  <input
                    required
                    type="text"
                    value={newStudent.guardianName}
                    onChange={(e) => setNewStudent({ ...newStudent, guardianName: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    {locale === "bn" ? "অভিভাবকের ফোন নম্বর *" : "Guardian Phone *"}
                  </label>
                  <input
                    required
                    type="tel"
                    value={newStudent.guardianPhone}
                    onChange={(e) => setNewStudent({ ...newStudent, guardianPhone: e.target.value })}
                    className="w-full px-3 py-2 border rounded text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  {locale === "bn" ? "বিশেষ চাহিদাসম্পন্ন / সাপোর্ট প্রয়োজন?" : "Disability / Support Needs"}
                </label>
                <input
                  type="text"
                  placeholder={locale === "bn" ? "দৃষ্টি দুর্বলতা, শ্রবণ দুর্বলতা ইত্যাদি (ঐচ্ছিক)" : "Optional"}
                  value={newStudent.supportNeeds}
                  onChange={(e) => setNewStudent({ ...newStudent, supportNeeds: e.target.value })}
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>

              <div className="p-3 bg-blue-50 text-blue-900 rounded-lg text-xs">
                ℹ️ শিক্ষার্থী আইডি স্বয়ংক্রিয়ভাবে জেনারেট হবে (যেমন: EFA-SPD-01-XXX) এবং প্রাথমিক পিন '1234' সেট হবে।
              </div>

              <button
                type="submit"
                className="btn-navy w-full py-2.5 rounded-lg font-bold"
              >
                {locale === "bn" ? "ভর্তি সম্পন্ন করুন" : "Enrol Student"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reset PIN Modal */}
      {resetPinModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl text-center">
            <KeyRound className="w-12 h-12 text-[#E9A319] mx-auto" />
            <h3 className="font-bold text-lg text-[#0B2A5B]">
              {locale === "bn" ? `${resetPinModal.nameBn} এর পিন রিসেট` : `Reset PIN for ${resetPinModal.nameEn}`}
            </h3>
            <p className="text-xs text-slate-500">
              শিক্ষার্থী ভুলে গেলে বা ডিভাইস লক হলে ৪-সংখ্যার নতুন পিন দিন:
            </p>
            <input
              type="text"
              maxLength={4}
              value={newPin}
              onChange={(e) => setNewPin(e.target.value)}
              className="text-center font-mono font-bold text-2xl w-32 mx-auto tracking-widest px-3 py-2 border-2 border-[#1565D8] rounded-lg"
            />
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setResetPinModal(null)}
                className="w-1/2 py-2 border rounded-lg text-xs font-semibold"
              >
                {locale === "bn" ? "বাতিল" : "Cancel"}
              </button>
              <button
                onClick={handleResetPin}
                className="w-1/2 py-2 btn-navy rounded-lg text-xs font-bold"
              >
                {locale === "bn" ? "রিসেট নিশ্চিত করুন" : "Confirm Reset"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Printable ID Card Modal */}
      {selectedStudentForCard && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex justify-between items-center border-b pb-2">
              <h3 className="font-bold text-sm text-[#0B2A5B]">Digital Student Card</h3>
              <button onClick={() => setSelectedStudentForCard(null)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="border-2 border-[#0B2A5B] rounded-xl overflow-hidden text-center bg-white">
              <div className="bg-[#0B2A5B] text-white p-3 text-xs font-bold">
                Education for All • BAUST CSE
              </div>
              <div className="p-6 space-y-3">
                <img
                  src={selectedStudentForCard.avatar}
                  alt="avatar"
                  className="w-24 h-24 rounded-full mx-auto border-2 border-[#0B2A5B] object-cover"
                />
                <h4 className="text-xl font-bold text-[#0B2A5B]">{selectedStudentForCard.nameBn}</h4>
                <div className="font-mono text-xs font-bold text-[#1565D8]">{selectedStudentForCard.studentId}</div>
                <div className="text-xs text-slate-600">
                  সেন্টার: {selectedStudentForCard.centreCode} | শ্রেণি: {selectedStudentForCard.classLevel}
                </div>
                <QrCode className="w-16 h-16 text-[#0B2A5B] mx-auto mt-2" />
              </div>
            </div>

            <button
              onClick={() => {
                window.print();
              }}
              className="btn-navy w-full text-xs font-bold py-2 rounded-lg"
            >
              প্রিন্ট আইডি কার্ড (Print)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
