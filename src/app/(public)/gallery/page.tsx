"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { locale } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&auto=format&fit=crop&q=80",
      captionBn: "সৈয়দপুর বস্তি সেন্টারে ট্যাবলেটে কুইজ অনুশীলন",
      captionEn: "Students practicing mathematics quiz on tablets in Saidpur"
    },
    {
      url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1000&auto=format&fit=crop&q=80",
      captionBn: "ধরলা নদীর চরে ডিজিটাল লার্নিং সেশন",
      captionEn: "Digital learning session at riverine char in Kurigram"
    },
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&auto=format&fit=crop&q=80",
      captionBn: "স্বেচ্ছাসেবক শিক্ষকের নিবিড় সহায়তা ও মেন্টরিং",
      captionEn: "Volunteer teacher providing individual care to young learners"
    },
    {
      url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1000&auto=format&fit=crop&q=80",
      captionBn: "শ্রেণিকক্ষে উপস্থিতির দৈনিক ও সাপ্তাহিক পুরস্কার",
      captionEn: "Daily attendance rewards and celebration of badges"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&auto=format&fit=crop&q=80",
      captionBn: "শিক্ষার্থীদের হাতে প্রথম ডিজিটাল শিক্ষা সনদ বিতরণ",
      captionEn: "Distribution of certificate upon completing elementary course"
    },
    {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1000&auto=format&fit=crop&q=80",
      captionBn: "সৈয়দপুর বাউস্ট সিএসই গবেষণা দলের ফিল্ড ভিজিট",
      captionEn: "BAUST CSE research team field inspection and monitoring"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold text-[#1E8E4F] uppercase tracking-wider block">
          {locale === "bn" ? "ছবির অ্যালবাম" : "Photo Gallery"}
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "কমিউনিটি সেন্টারের জীবন্ত মুহূর্তসমূহ"
            : "Vibrant Moments from the Learning Centres"}
        </h1>
        <p className="text-base text-[#5B6472]">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের চোখে আশার ঝিলিক এবং মাঠপর্যায়ে আমাদের কার্যক্রমের বাস্তব চিত্র।"
            : "Real photographs reflecting the dignity, joy, and curiosity of children in rural Bangladesh."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(item.url)}
            className="border border-[#E5E2DA] rounded-lg overflow-hidden bg-white cursor-pointer"
          >
            <img
              src={item.url}
              alt={item.captionEn}
              className="w-full h-56 object-cover"
            />
            <div className="p-3 text-sm text-[#1F2937]">
              {locale === "bn" ? item.captionBn : item.captionEn}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-9 right-0 text-white text-sm font-bold"
            >
              [বন্ধ করুন ✕]
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full max-h-[85vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
