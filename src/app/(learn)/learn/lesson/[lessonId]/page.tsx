"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  Volume2,
  Video,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  RotateCcw
} from "lucide-react";

export default function LessonPlayerPage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = use(params);
  const { locale, t } = useLanguage();

  const [audioOnly, setAudioOnly] = useState(false);
  const [feedback, setFeedback] = useState<"understood" | "not_understood" | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  const lesson = {
    id: lessonId,
    titleBn: "বন্ধনীর ব্যবহার ও সরল করার নিয়ম",
    titleEn: "Rules of Brackets & Simplification",
    subjectBn: "প্রাথমিক গণিত",
    subjectEn: "Elementary Mathematics",
    chapterBn: "অধ্যায় ১: চার প্রক্রিয়া",
    chapterEn: "Chapter 1: Four Operations",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    narrationTextBn: "প্রথমে প্রথম বন্ধনীর কাজ করতে হয়, তারপর দ্বিতীয় বন্ধনী এবং সবশেষে তৃতীয় বন্ধনীর কাজ করতে হয়। সরল করার ক্ষেত্রে ভাগের কাজ আগে, তারপর গুণের কাজ, তারপর যোগ ও বিয়োগের কাজ করতে হয়।",
    narrationTextEn: "First evaluate brackets: parentheses first, then curly brackets, then square brackets. For operations: Division first, then Multiplication, Addition, and Subtraction."
  };

  const handleFeedback = (type: "understood" | "not_understood") => {
    setFeedback(type);
    // Save to offline db or localStorage
    const savedFeedback = JSON.parse(localStorage.getItem("efa_offline_progress") || "[]");
    savedFeedback.push({
      lessonId,
      understood: type === "understood",
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("efa_offline_progress", JSON.stringify(savedFeedback));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 space-y-6">
      {/* Top back & Chapter Breadcrumb */}
      <div className="flex items-center justify-between">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1565D8] hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{locale === "bn" ? "ফিরে যান" : "Back to Lessons"}</span>
        </Link>
        <span className="text-xs font-semibold text-slate-500">
          {locale === "bn" ? `${lesson.subjectBn} • ${lesson.chapterBn}` : `${lesson.subjectEn} • ${lesson.chapterEn}`}
        </span>
      </div>

      {/* Lesson Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A5B]">
          {locale === "bn" ? lesson.titleBn : lesson.titleEn}
        </h1>
      </div>

      {/* Media Player Box (Video or Audio Mode) */}
      <div className="efa-card overflow-hidden bg-black rounded-2xl shadow-xl">
        {!audioOnly ? (
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <video
              src={lesson.videoUrl}
              controls
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#0B2A5B] to-[#1565D8] text-white text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-[#E9A319] text-[#0B2A5B] flex items-center justify-center mx-auto shadow-lg animate-pulse">
              <Volume2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                {locale === "bn" ? "অডিও বর্ণনা শুনছো" : "Audio-Only Narration Playing"}
              </h3>
              <p className="text-xs text-blue-200 mt-1">
                {locale === "bn" ? "কম চার্জ ও চোখের আরামের জন্য অডিও মোড চালু রয়েছে" : "Saving tablet battery with lightweight audio"}
              </p>
            </div>
            <audio src={lesson.audioUrl} controls className="w-full max-w-md mx-auto" />
          </div>
        )}

        {/* Player Controls Strip (Audio-only toggle, Speed 0.75 / 1 / 1.25) */}
        <div className="bg-[#0B2A5B] text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <button
            onClick={() => setAudioOnly(!audioOnly)}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer"
          >
            {audioOnly ? <Video className="w-4 h-4 text-[#E9A319]" /> : <Volume2 className="w-4 h-4 text-[#E9A319]" />}
            <span>{audioOnly ? t("student.videoMode") : t("student.audioMode")}</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-slate-300">{locale === "bn" ? "গতি:" : "Speed:"}</span>
            {[0.75, 1, 1.25].map((speed) => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`px-2.5 py-1 rounded font-bold ${
                  playbackSpeed === speed ? "bg-[#E9A319] text-[#0B2A5B]" : "bg-white/10 text-white"
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lesson Reading Narration Summary */}
      <div className="efa-card p-6 bg-white space-y-3">
        <h3 className="font-bold text-base text-[#0B2A5B] flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#E9A319]" />
          <span>{locale === "bn" ? "পাঠের মূল কথা" : "Key Concept Explanation"}</span>
        </h3>
        <p className="text-slate-700 text-base leading-relaxed">
          {locale === "bn" ? lesson.narrationTextBn : lesson.narrationTextEn}
        </p>
      </div>

      {/* FEEDBACK BUTTONS: "বুঝেছি / বুঝিনি" (Feeds Teacher Dashboard) */}
      <div className="efa-card p-6 bg-white text-center space-y-4 border-2 border-slate-200">
        <h3 className="font-bold text-lg text-[#0B2A5B]">
          {locale === "bn" ? "পাঠটি কি ভালোভাবে বুঝতে পেরেছো?" : "Did you understand this lesson?"}
        </h3>

        {feedback === null ? (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleFeedback("understood")}
              className="student-tap-target w-full sm:w-56 bg-[#1E8E4F] hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <CheckCircle2 className="w-6 h-6" />
              <span>{t("student.understood")}</span>
            </button>

            <button
              onClick={() => handleFeedback("not_understood")}
              className="student-tap-target w-full sm:w-56 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95"
            >
              <HelpCircle className="w-6 h-6" />
              <span>{t("student.notUnderstood")}</span>
            </button>
          </div>
        ) : feedback === "understood" ? (
          <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl space-y-3">
            <CheckCircle2 className="w-10 h-10 text-[#1E8E4F] mx-auto" />
            <p className="font-bold text-base">
              {locale === "bn" ? "চমৎকার! তোমার মতামত সংরক্ষিত হয়েছে।" : "Awesome! Your response is recorded."}
            </p>
            <Link
              href="/learn/quiz/quiz-1"
              className="btn-gold text-sm px-6 py-2.5 rounded-lg font-bold inline-flex items-center gap-2 shadow-sm"
            >
              <span>{locale === "bn" ? "কুইজে অংশ নাও" : "Take the Chapter Quiz"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="p-4 bg-rose-50 text-rose-800 rounded-xl space-y-3">
            <HelpCircle className="w-10 h-10 text-rose-600 mx-auto" />
            <p className="font-bold text-base">
              {locale === "bn"
                ? "কোনো সমস্যা নেই! তোমার শিক্ষকের ড্যাশবোর্ডে এটি জানিয়ে দেওয়া হয়েছে। শিক্ষক ক্লাসে বুঝিয়ে দেবেন।"
                : "No worries! This is flagged for your teacher to help you in class."}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setFeedback(null)}
                className="btn-navy text-xs px-4 py-2 rounded-lg flex items-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{locale === "bn" ? "আবার ভিডিও দেখো" : "Rewatch Lesson"}</span>
              </button>
              <Link
                href="/learn/help"
                className="btn-gold text-xs px-4 py-2 rounded-lg font-bold"
              >
                {t("student.askTeacher")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
