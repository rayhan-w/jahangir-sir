import { NextResponse } from "next/server";

export async function GET() {
  const manifest = {
    version: "2026.11.14.1",
    updatedAt: new Date().toISOString(),
    packs: [
      {
        id: "pack-math-ch1",
        classLevel: 5,
        subject: "Mathematics",
        chapter: "Chapter 1: Four Operations",
        totalSizeMb: 120,
        lessons: [
          {
            id: "les-1",
            titleBn: "বন্ধনীর ব্যবহার ও সরল করার নিয়ম",
            titleEn: "Rules of Brackets & Simplification",
            type: "VIDEO",
            url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            durationSec: 360
          },
          {
            id: "les-2",
            titleBn: "ঐকিক নিয়ম ও ব্যবহারিক হিসাব",
            titleEn: "Unitary Method",
            type: "READING",
            url: "/uploads/math_ch1.pdf",
            durationSec: 420
          }
        ],
        quizId: "quiz-1"
      }
    ]
  };

  return NextResponse.json(manifest);
}
