"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { MessageSquare, Send, CheckCircle2, Clock } from "lucide-react";

export default function AdminHelpPage() {
  const { locale, t } = useLanguage();

  const [requests, setRequests] = useState([
    {
      id: "h-1",
      studentName: "আরিফ হোসেন",
      studentId: "EFA-SPD-01-001",
      centre: "SPD-01",
      message: "স্যার, বন্ধনীর ২ নম্বর অঙ্কের ভাগটা বুঝতে পারিনি। ক্লাসে একটু বুঝিয়ে দেবেন?",
      time: "আজ সকাল ১০:২০",
      status: "OPEN",
      reply: ""
    },
    {
      id: "h-2",
      studentName: "মারুফা জান্নাত",
      studentId: "EFA-SPD-01-002",
      centre: "SPD-01",
      message: "কুইজের ৩ নম্বর প্রশ্নটির উত্তর কেন ৪০ হলো?",
      time: "গতকাল দুপুর ০৩:১৫",
      status: "RESOLVED",
      reply: "ঐকিক নিয়মের কারণে ১টি কলম ৫ টাকা হলে ৮টি কলম ৮ × ৫ = ৪০ টাকা হয়েছে।"
    }
  ]);

  const [replyText, setReplyText] = useState("");
  const [selectedReq, setSelectedReq] = useState<any>(null);

  const handleSendReply = () => {
    if (!selectedReq || !replyText) return;
    setRequests(
      requests.map((r) =>
        r.id === selectedReq.id ? { ...r, reply: replyText, status: "RESOLVED" } : r
      )
    );
    alert("উত্তর পাঠানো হয়েছে! শিক্ষার্থীর ট্যাবলেট সিঙ্ক হলে এটি প্রদর্শিত হবে।");
    setSelectedReq(null);
    setReplyText("");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0B2A5B]">
            {t("dashboard.helpRequests")}
          </h1>
          <p className="text-xs text-slate-500">
            শিক্ষার্থীদের ট্যাবলেট থেকে প্রেরিত সহায়তা বার্তা ও শিক্ষকের সরাসরি উত্তর।
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {requests.map((req) => (
          <div key={req.id} className="efa-card p-5 bg-white space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="font-bold text-sm text-[#0B2A5B]">{req.studentName}</span>
                <span className="text-xs font-mono text-slate-500 ml-2">({req.studentId} • {req.centre})</span>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  req.status === "OPEN" ? "bg-amber-100 text-amber-900" : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {req.status === "OPEN" ? "অপেক্ষমান" : "সমাধান সম্পন্ন"}
              </span>
            </div>

            <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
              "{req.message}"
            </p>

            {req.reply && (
              <div className="text-xs bg-emerald-50 text-emerald-900 p-3 rounded-lg border border-emerald-100 space-y-1">
                <strong>শিক্ষকের উত্তর: </strong>
                <span>{req.reply}</span>
              </div>
            )}

            {req.status === "OPEN" && (
              <div className="pt-2">
                <button
                  onClick={() => setSelectedReq(req)}
                  className="btn-navy text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>উত্তর দিন</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedReq && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <h3 className="font-bold text-sm text-[#0B2A5B]">
              {selectedReq.studentName} কে উত্তর পাঠান
            </h3>
            <p className="text-xs text-slate-500">{selectedReq.message}</p>
            <textarea
              rows={3}
              placeholder="সহজ ভাষায় শিক্ষার্থীর জন্য উত্তর লিখুন..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              className="w-full p-3 border rounded-lg text-sm"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedReq(null)}
                className="w-1/2 py-2 border rounded text-xs"
              >
                বাতিল
              </button>
              <button
                onClick={handleSendReply}
                className="w-1/2 py-2 btn-navy rounded text-xs font-bold"
              >
                উত্তর পাঠান
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
