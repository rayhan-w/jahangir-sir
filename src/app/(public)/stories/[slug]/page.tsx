"use client";

import React, { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { INITIAL_STORIES } from "@/lib/data-store";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";

export default function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { locale } = useLanguage();

  const story = INITIAL_STORIES.find((s) => s.slug === slug || s.id === slug);

  if (!story) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      <Link
        href="/stories"
        className="text-sm font-semibold text-[#1565D8] inline-flex items-center gap-1 hover:underline mb-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{locale === "bn" ? "সকল গল্প তালিকায় ফিরে যান" : "Back to All Stories"}</span>
      </Link>

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] leading-tight">
          {locale === "bn" ? story.titleBn : story.titleEn}
        </h1>

        <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 pb-4 border-b border-slate-200">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-slate-400" />
            {story.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4 text-slate-400" />
            {locale === "bn" ? story.authorBn : story.authorEn}
          </span>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden shadow-md max-h-[460px]">
        <img
          src={story.photoUrl}
          alt={story.titleEn}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-slate max-w-none text-base sm:text-lg text-slate-700 leading-relaxed space-y-6">
        <p className="font-semibold text-slate-900 text-lg sm:text-xl">
          {locale === "bn" ? story.summaryBn : story.summaryEn}
        </p>
        <p>
          {locale === "bn"
            ? "প্রতিদিন সকাল ৮টায় যখন সেন্টারটি খোলে, শিশুরা দল বেঁধে ছুটে আসে। তারা প্রত্যেকে নিজ নিজ সেন্টারের কোড চেপে ডিজিটাল ট্যাবলেটে নিজেদের ছবি স্পর্শ করে প্রবেশ করে। ঘরে বিদ্যুৎ না থাকলেও সেন্টারের সৌর চার্জিং স্টেশনের কারণে ট্যাবলেটগুলো সবসময় প্রস্তুত থাকে।"
            : "Every morning when the centre opens, children rush in eagerly. They tap their centre code, touch their photo and enter their 4-digit PIN. Powered by the solar charging station, the tablets are always ready even without grid electricity."}
        </p>
        <p>
          {locale === "bn"
            ? "স্বেচ্ছাসেবক শিক্ষক সুমাইয়া আক্তার জানান, 'আগে শিশুরা স্কুলে যেতে ভয় পেত কারণ শ্রেণিকক্ষে বুঝতে না পারলে তিরস্কার শুনতে হতো। এখানে তারা যতবার ইচ্ছা অডিও শুনতে পারে, না বুঝলে লাল বাটনে চাপ দেয়। শিক্ষকের কাছে সাহায্য চাওয়ার পর তাদের দ্বিধা কেটে যায়।'"
            : "Volunteer mentor Sumaiya shares: 'Children used to fear classroom embarrassment. Here they can listen to audio narrations repeatedly without hesitation. When they tap the not-understood button, we sit beside them with a smile.'"}
        </p>
      </div>

      <div className="pt-8 border-t border-slate-200 flex items-center justify-between">
        <Link href="/stories" className="btn-navy text-sm">
          {locale === "bn" ? "অন্যান্য গল্প দেখুন" : "Read More Stories"}
        </Link>
        <Link href="/support" className="btn-gold text-sm font-bold">
          {locale === "bn" ? "শিশুদের পাশে দাঁড়ান" : "Support Our Mission"}
        </Link>
      </div>
    </article>
  );
}
