"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { DEFAULT_SETTINGS } from "@/lib/data-store";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const { locale } = useLanguage();
  const settings = DEFAULT_SETTINGS;
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <div className="max-w-3xl space-y-4">
        <div className="inline-block bg-[#1565D8]/10 text-[#1565D8] px-3 py-1 rounded text-sm font-semibold">
          {locale === "bn" ? "যোগাযোগ" : "Contact Us"}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0B2A5B] tracking-tight">
          {locale === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Get in Touch with the Research Team"}
        </h1>
        <p className="text-base text-slate-600">
          {locale === "bn"
            ? "প্রকল্প সংশ্লিষ্ট যেকোনো তথ্য, পরামর্শ বা অংশীদারিত্বের জন্য সরাসরি আমাদের সাথে কথা বলুন।"
            : "Reach out to the BAUST CSE project coordination desk for queries, collaboration, or feedback."}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 efa-card p-6 sm:p-8 bg-white space-y-6">
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "অফিস ঠিকানা ও ডেস্ক" : "Office Address & Helpdesk"}
          </h2>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#E9A319] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 mb-0.5">{locale === "bn" ? settings.affiliation.bn : settings.affiliation.en}</strong>
                <span>{locale === "bn" ? settings.contactAddress.bn : settings.contactAddress.en}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#1E8E4F] shrink-0" />
              <a href={`tel:${settings.contactPhone}`} className="hover:text-[#1565D8]">
                {settings.contactPhone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#1565D8] shrink-0" />
              <a href={`mailto:${settings.contactEmail}`} className="hover:text-[#1565D8]">
                {settings.contactEmail}
              </a>
            </div>
          </div>

          {/* Map Preview placeholder box */}
          <div className="rounded-lg overflow-hidden border border-[#E2DED5] bg-slate-100 p-6 text-center text-xs text-slate-500">
            <MapPin className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <span className="font-semibold block text-slate-700">Saidpur Cantonment, Saidpur, Nilphamari</span>
            <span>GPS: 25.7785° N, 88.8974° E</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 efa-card p-6 sm:p-8 bg-white space-y-6">
          <h2 className="text-xl font-bold text-[#0B2A5B]">
            {locale === "bn" ? "বার্তা পাঠান" : "Send a Message"}
          </h2>

          {submitted ? (
            <div className="p-6 bg-emerald-50 rounded-lg text-emerald-800 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-[#1E8E4F] mx-auto" />
              <h3 className="font-bold text-lg">{locale === "bn" ? "বার্তা সফলভাবে পাঠানো হয়েছে!" : "Message Sent Successfully!"}</h3>
              <p className="text-sm">{locale === "bn" ? "আমাদের প্রতিনিধি দ্রুততম সময়ে উত্তর প্রদান করবেন।" : "We will reply to your message as soon as possible."}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "নাম *" : "Name *"}</label>
                  <input required type="text" className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "মোবাইল *" : "Phone *"}</label>
                  <input required type="tel" className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "বিষয় *" : "Subject *"}</label>
                <input required type="text" className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">{locale === "bn" ? "আপনার বার্তা *" : "Message *"}</label>
                <textarea required rows={4} className="w-full px-3 py-2 border border-[#E2DED5] rounded text-sm" />
              </div>
              <button type="submit" className="btn-navy text-sm font-semibold flex items-center gap-2">
                <Send className="w-4 h-4" />
                <span>{locale === "bn" ? "বার্তা পাঠান" : "Submit Message"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
