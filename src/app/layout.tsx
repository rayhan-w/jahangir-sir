import type { Metadata } from "next";
import { Hind_Siliguri, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Education for All | প্রতিটি শিশুর জন্য মানসম্মত শিক্ষা",
  description: "বাস্তবায়নে: কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ, বাউস্ট, সৈয়দপুর (Project No: ZRF-26-25400D)",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-[#1F2937] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
