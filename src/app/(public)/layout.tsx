import React from "react";
import Header from "@/components/public/Header";
import Footer from "@/components/public/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
