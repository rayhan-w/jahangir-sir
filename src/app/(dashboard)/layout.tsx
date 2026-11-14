"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import {
  LayoutDashboard,
  Users,
  MapPin,
  GraduationCap,
  BookOpen,
  FileQuestion,
  BarChart3,
  CalendarCheck,
  MessageSquare,
  FileEdit,
  Inbox,
  Send,
  Settings,
  ShieldAlert,
  LogOut,
  Globe,
  Bell,
  Menu,
  X,
  Sparkles
} from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { locale, toggleLocale, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userRole, setUserRole] = useState<string>("SUPER_ADMIN");

  useEffect(() => {
    const savedUser = localStorage.getItem("efa_staff_user");
    if (savedUser) {
      try {
        const u = JSON.parse(savedUser);
        setUserRole(u.role || "SUPER_ADMIN");
      } catch (e) {}
    }
  }, []);

  // 16 screens menu items
  const menuItems = [
    { href: "/admin", label: t("dashboard.overview"), icon: LayoutDashboard, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CENTRE_TEACHER", "CONTENT_EDITOR"] },
    { href: "/admin/students", label: t("dashboard.students"), icon: Users, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CENTRE_TEACHER"] },
    { href: "/admin/centres", label: t("dashboard.centres"), icon: MapPin, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER"] },
    { href: "/admin/teachers", label: t("dashboard.teachers"), icon: GraduationCap, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER"] },
    { href: "/admin/content", label: t("dashboard.subjects"), icon: BookOpen, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CONTENT_EDITOR"] },
    { href: "/admin/questions", label: t("dashboard.questionBank"), icon: FileQuestion, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CONTENT_EDITOR"] },
    { href: "/admin/reports", label: t("dashboard.reports"), icon: BarChart3, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CENTRE_TEACHER"] },
    { href: "/admin/attendance", label: t("dashboard.attendance"), icon: CalendarCheck, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CENTRE_TEACHER"] },
    { href: "/admin/help", label: t("dashboard.helpRequests"), icon: MessageSquare, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CENTRE_TEACHER"] },
    { href: "/admin/cms", label: t("dashboard.cms"), icon: FileEdit, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER", "CONTENT_EDITOR"] },
    { href: "/admin/inbox", label: t("dashboard.inbox"), icon: Inbox, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER"] },
    { href: "/admin/sms", label: t("dashboard.sms"), icon: Send, roles: ["SUPER_ADMIN", "PROGRAMME_MANAGER"] },
    { href: "/admin/settings", label: t("dashboard.settings"), icon: Settings, roles: ["SUPER_ADMIN"] },
    { href: "/admin/system", label: t("dashboard.auditLogs"), icon: ShieldAlert, roles: ["SUPER_ADMIN"] },
  ];

  const handleLogout = () => {
    localStorage.removeItem("efa_staff_user");
    router.push("/admin/login");
  };

  // If on login page, render children directly without dashboard shell
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const visibleMenuItems = menuItems.filter((m) => m.roles.includes(userRole));

  return (
    <div className="min-h-screen flex bg-slate-50 text-slate-800">
      {/* Sidebar for Desktop */}
      <aside className="hidden lg:flex lg:flex-col w-64 bg-[#0B2A5B] text-white shrink-0 shadow-lg">
        {/* Brand Header */}
        <div className="p-5 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E9A319] text-[#0B2A5B] flex items-center justify-center font-bold">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-bold text-base text-white leading-tight">EFA Dashboard</h2>
            <span className="text-[10px] text-blue-200">BAUST CSE • ZRF-26</span>
          </div>
        </div>

        {/* Navigation items */}
        <nav className="flex-1 overflow-y-auto p-3 space-y-1 text-sm font-medium">
          {visibleMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#1565D8] text-white font-bold shadow-xs"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#E9A319]" : "text-slate-300"}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Role & User Footer */}
        <div className="p-4 border-t border-white/10 bg-[#082046] flex items-center justify-between text-xs">
          <div>
            <span className="font-bold block text-white">Dr. Jahangir Alam</span>
            <span className="text-[#E9A319]">{userRole}</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-slate-300 hover:text-white p-1"
            title="লগআউট"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </aside>

      {/* Main Body */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#E2DED5] px-4 sm:px-6 py-3 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded text-slate-700 hover:bg-slate-100"
            >
              {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <h1 className="text-lg sm:text-xl font-bold text-[#0B2A5B]">
              {t("dashboard.title")}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick public site view link */}
            <Link
              href="/"
              target="_blank"
              className="hidden sm:inline-flex text-xs font-semibold text-[#1565D8] hover:underline"
            >
              {locale === "bn" ? "পাবলিক ওয়েবসাইট দেখুন ↗" : "View Public Site ↗"}
            </Link>

            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#1565D8]" />
              <span>{locale === "bn" ? "English" : "বাংলা"}</span>
            </button>

            {/* Role indicator pill */}
            <span className="bg-[#1565D8]/10 text-[#1565D8] text-xs font-bold px-2.5 py-1 rounded">
              {userRole}
            </span>
          </div>
        </header>

        {/* Mobile Sidebar overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/50 flex">
            <div className="w-64 bg-[#0B2A5B] text-white flex flex-col p-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/10">
                <span className="font-bold text-lg">EFA Dashboard</span>
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-4 space-y-1 text-sm">
                {visibleMenuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded text-slate-200 hover:bg-white/10"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Content View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
