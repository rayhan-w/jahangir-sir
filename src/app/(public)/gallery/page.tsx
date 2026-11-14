"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Image as ImageIcon, X } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-block bg-[#1565D8]/10 text-[#1565D8] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "ছবির অ্যালবাম" : "Photo Gallery"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn"
            ? "কমিউনিটি সেন্টারের জীবন্ত মুহূর্তসমূহ"
            : "Vibrant Moments from the Learning Centres"}
        </h1>
        <p className="text-base sm:text-lg text-slate-600">
          {locale === "bn"
            ? "সুবিধাবঞ্চিত শিশুদের চোখে আশার ঝিলিক এবং মাঠপর্যায়ে আমাদের কার্যক্রমের বাস্তব চিত্র।"
            : "Real photographs reflecting the dignity, joy, and curiosity of children in rural Bangladesh."}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {photos.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(item.url)}
            className="efa-card overflow-hidden cursor-pointer group bg-white hover:shadow-lg transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={item.url}
                alt={item.captionEn}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <ImageIcon className="w-8 h-8" />
              </div>
            </div>
            <div className="p-4 text-sm font-medium text-slate-800">
              {locale === "bn" ? item.captionBn : item.captionEn}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-slate-300"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
