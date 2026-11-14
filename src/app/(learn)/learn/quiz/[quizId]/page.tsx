"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Star,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Volume2,
  Award
} from "lucide-react";

export default function QuizRunnerPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = use(params);
  const { locale, formatNum, t } = useLanguage();

  const questions = [
    {
      id: "q-1",
      questionBn: "১২ + (৮ ÷ ৪) - ২ = কত?",
      questionEn: "12 + (8 ÷ 4) - 2 = ?",
      options: [
        { id: "a", textBn: "১২", textEn: "12" },
        { id: "b", textBn: "১৪", textEn: "14" },
        { id: "c", textBn: "১০", textEn: "10" },
        { id: "d", textBn: "১৬", textEn: "16" }
      ],
      correctAnswer: "a",
      explanationBn: "প্রথমে প্রথম বন্ধনীর কাজ: ৮ ÷ ৪ = ২। এরপর: ১২ + ২ - ২ = ১২।",
      explanationEn: "First evaluate brackets: 8 ÷ 4 = 2. Then: 12 + 2 - 2 = 12."
    },
    {
      id: "q-2",
      questionBn: "সরল অঙ্কে বন্ধনী না থাকলে কোনটির কাজ সবার আগে করতে হয়?",
      questionEn: "In simplification without brackets, which operation is done first?",
      options: [
        { id: "a", textBn: "যোগ (+)", textEn: "Addition (+)" },
        { id: "b", textBn: "গুণ (×)", textEn: "Multiplication (×)" },
        { id: "c", textBn: "ভাগ (÷)", textEn: "Division (÷)" },
        { id: "d", textBn: "বিয়োগ (−)", textEn: "Subtraction (−)" }
      ],
      correctAnswer: "c",
      explanationBn: "সরলের নিয়ম অনুযায়ী বন্ধনী না থাকলে ভাগের কাজ সবার আগে করতে হয়।",
      explanationEn: "According to BODMAS rules, division is performed first."
    },
    {
      id: "q-3",
      questionBn: "১টি কলমের দাম ৫ টাকা হলে, ৮টি কলমের দাম কত?",
      questionEn: "If 1 pen costs 5 BDT, what is the cost of 8 pens?",
      options: [
        { id: "a", textBn: "৩৫ টাকা", textEn: "35 BDT" },
        { id: "b", textBn: "৪০ টাকা", textEn: "40 BDT" },
        { id: "c", textBn: "৪৫ টাকা", textEn: "45 BDT" },
        { id: "d", textBn: "৩০ টাকা", textEn: "30 BDT" }
      ],
      correctAnswer: "b",
      explanationBn: "ঐকিক নিয়ম: ৮ × ৫ = ৪০ টাকা।",
      explanationEn: "Unitary calculation: 8 × 5 = 40 BDT."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelect = (optionId: string) => {
    if (showFeedback) return;
    setSelectedOption(optionId);
    setShowFeedback(true);

    const updatedAnswers = { ...userAnswers, [currentQ.id]: optionId };
    setUserAnswers(updatedAnswers);

    // Save offline attempt event
    const clientUuid = `attempt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const offlineAttempts = JSON.parse(localStorage.getItem("efa_offline_attempts") || "[]");
    offlineAttempts.push({
      clientUuid,
      quizId,
      questionId: currentQ.id,
      selectedOption: optionId,
      isCorrect: optionId === currentQ.correctAnswer,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("efa_offline_attempts", JSON.stringify(offlineAttempts));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      setIsFinished(true);
    }
  };

  // Calculate score
  const correctCount = questions.filter(
    (q) => userAnswers[q.id] === q.correctAnswer
  ).length;
  const scorePercent = Math.round((correctCount / questions.length) * 100);
  const passed = scorePercent >= 60;

  // -------------------------------------------------------------
  // Screen 8: Quiz Result Screen
  // -------------------------------------------------------------
  if (isFinished) {
    return (
      <div className="max-w-xl mx-auto px-4 py-10 space-y-6 text-center">
        <div className="efa-card p-8 bg-white shadow-xl space-y-6">
          <div className="w-20 h-20 rounded-full bg-amber-100 text-[#E9A319] flex items-center justify-center mx-auto shadow-md">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-[#0B2A5B]">
              {passed ? t("student.excellent") : t("student.needPractice")}
            </h1>
            <p className="text-sm text-slate-500">
              {locale === "bn" ? "চার প্রক্রিয়া অধ্যায় সমাপনী কুইজ" : "Four Operations Chapter Quiz"}
            </p>
          </div>

          {/* Star rating */}
          <div className="flex justify-center gap-2">
            {[1, 2, 3].map((star) => (
              <Star
                key={star}
                className={`w-10 h-10 ${
                  scorePercent >= star * 33
                    ? "text-[#E9A319] fill-current"
                    : "text-slate-300"
                }`}
              />
            ))}
          </div>

          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-4xl font-extrabold text-[#1565D8]">
              {formatNum(scorePercent)}%
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">
              {locale === "bn"
                ? `${formatNum(questions.length)} টির মধ্যে ${formatNum(correctCount)} টি সঠিক উত্তর`
                : `${correctCount} of ${questions.length} correct answers`}
            </div>
          </div>

          {passed ? (
            <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-bold">
              🎉 {locale === "bn" ? "অভিনন্দন! পরবর্তী অধ্যায় আনলক হয়েছে।" : "Congratulations! Next Chapter Unlocked."}
            </div>
          ) : (
            <div className="p-3 bg-amber-50 text-amber-800 rounded-lg text-xs font-bold">
              ⚠️ {locale === "bn" ? "৬০% নম্বর পেতে আবার চেষ্টা করো।" : "Score 60% or higher to unlock the next chapter."}
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedOption(null);
                setShowFeedback(false);
                setUserAnswers({});
                setIsFinished(false);
              }}
              className="student-tap-target w-full sm:w-auto px-6 bg-slate-100 hover:bg-slate-200 text-[#0B2A5B] font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-5 h-5" />
              <span>{t("student.tryAgain")}</span>
            </button>

            <Link
              href="/learn"
              className="student-tap-target w-full sm:w-auto px-8 btn-gold font-bold rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t("student.nextLesson")}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Screen 7: Active Question Runner (One question at a time)
  // -------------------------------------------------------------
  const isCorrect = selectedOption === currentQ.correctAnswer;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 sm:py-10 space-y-6">
      {/* Quiz Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-bold text-slate-500">
          <span>
            {locale === "bn"
              ? `প্রশ্ন ${formatNum(currentIndex + 1)} / ${formatNum(questions.length)}`
              : `Question ${currentIndex + 1} of ${questions.length}`}
          </span>
          <span className="text-[#1565D8]">★ ১০ পয়েন্ট</span>
        </div>
        <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1565D8] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="efa-card p-6 sm:p-8 bg-white shadow-md space-y-6">
        <div className="space-y-3">
          <span className="bg-blue-50 text-[#1565D8] text-xs font-bold px-2.5 py-1 rounded">
            {locale === "bn" ? "বহুনির্বাচনী প্রশ্ন" : "Multiple Choice Question"}
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2A5B] leading-snug">
            {locale === "bn" ? currentQ.questionBn : currentQ.questionEn}
          </h2>
        </div>

        {/* Big Tap Options (≥56px) */}
        <div className="space-y-3">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            const isAnswer = opt.id === currentQ.correctAnswer;

            let optionStyle =
              "border-[#E2DED5] bg-white hover:bg-slate-50 text-[#0B2A5B]";
            if (showFeedback) {
              if (isAnswer) {
                optionStyle = "border-[#1E8E4F] bg-emerald-50 text-emerald-900 font-bold";
              } else if (isSelected) {
                optionStyle = "border-rose-500 bg-rose-50 text-rose-900";
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                disabled={showFeedback}
                className={`student-tap-target w-full p-4 border-2 rounded-xl text-left font-bold text-base sm:text-lg flex items-center justify-between transition-all cursor-pointer ${optionStyle}`}
              >
                <span>{locale === "bn" ? opt.textBn : opt.textEn}</span>
                {showFeedback && isAnswer && (
                  <CheckCircle2 className="w-6 h-6 text-[#1E8E4F] shrink-0" />
                )}
                {showFeedback && isSelected && !isAnswer && (
                  <XCircle className="w-6 h-6 text-rose-500 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Immediate Right/Wrong Feedback + Explanation */}
        {showFeedback && (
          <div
            className={`p-4 rounded-xl border text-sm leading-relaxed space-y-2 ${
              isCorrect
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : "bg-rose-50 border-rose-200 text-rose-900"
            }`}
          >
            <div className="font-bold flex items-center gap-2">
              {isCorrect ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-[#1E8E4F]" />
                  <span>{locale === "bn" ? "সঠিক উত্তর হয়েছে! (+১০ পয়েন্ট)" : "Correct Answer! (+10 pts)"}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>{locale === "bn" ? "উত্তরটি ভুল হয়েছে।" : "Incorrect."}</span>
                </>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-700">
              <strong>{locale === "bn" ? "ব্যাখ্যা:" : "Explanation:"} </strong>
              {locale === "bn" ? currentQ.explanationBn : currentQ.explanationEn}
            </p>

            <div className="pt-2">
              <button
                onClick={handleNext}
                className="btn-navy w-full py-3 rounded-xl font-bold text-base flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>
                  {currentIndex < questions.length - 1
                    ? (locale === "bn" ? "পরবর্তী প্রশ্ন" : "Next Question")
                    : (locale === "bn" ? "ফলাফল দেখো" : "View Results")}
                </span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
