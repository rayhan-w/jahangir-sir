import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/education_for_all?schema=public";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Starting database seeding for 'Education for All'...");

  // 1. Settings (Never hardcoded)
  const settingsData = [
    { key: "projectName", value: { bn: "Education for All", en: "Education for All" } },
    { key: "projectCode", value: "ZRF-26-25400D" },
    { key: "affiliation", value: { bn: "কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ, বাউস্ট, সৈয়দপুর", en: "Dept. of CSE, BAUST, Saidpur" } },
    { key: "pilotTargets", value: { children: 1000, centres: 10, teachers: 50, completionRate: 80, durationMonths: 12 } },
    { key: "masteryThreshold", value: 60 },
    { key: "pinLength", value: 4 },
    { key: "bKashNumber", value: "01700-000000" },
    { key: "nagadNumber", value: "01800-000000" },
    { key: "contactEmail", value: "efa.cse@baust.edu.bd" },
    { key: "contactPhone", value: "+880 1711-223344" },
    { key: "contactAddress", value: { bn: "সৈয়দপুর সেনানিবাস, সৈয়দপুর ৫৩১০, নীলফামারী", en: "Saidpur Cantonment, Saidpur 5310, Nilphamari" } },
    { key: "maintenanceMode", value: false },
    { key: "smsProvider", value: "bd_mock" }
  ];

  for (const s of settingsData) {
    await prisma.setting.upsert({
      where: { key: s.key },
      update: { value: s.value },
      create: { key: s.key, value: s.value }
    });
  }
  console.log("Settings seeded.");

  // 2. Staff Users (Bcrypt hashed password: 'password123')
  const defaultPasswordHash = await bcrypt.hash("password123", 10);

  const superAdmin = await prisma.user.upsert({
    where: { email: "admin@baust.edu.bd" },
    update: {},
    create: {
      name: "Dr. Jahangir Alam (Project Director)",
      email: "admin@baust.edu.bd",
      phone: "+8801711000001",
      passwordHash: defaultPasswordHash,
      role: "SUPER_ADMIN"
    }
  });

  const progManager = await prisma.user.upsert({
    where: { email: "manager@baust.edu.bd" },
    update: {},
    create: {
      name: "Tanzim Ahmed (Programme Coordinator)",
      email: "manager@baust.edu.bd",
      phone: "+8801711000002",
      passwordHash: defaultPasswordHash,
      role: "PROGRAMME_MANAGER"
    }
  });

  const contentEditor = await prisma.user.upsert({
    where: { email: "content@baust.edu.bd" },
    update: {},
    create: {
      name: "Farhana Yasmin (NCTB Content Lead)",
      email: "content@baust.edu.bd",
      phone: "+8801711000003",
      passwordHash: defaultPasswordHash,
      role: "CONTENT_EDITOR"
    }
  });

  // 3. Learning Centres (Saidpur & Kurigram)
  const centreSaidpur = await prisma.centre.upsert({
    where: { code: "SPD-01" },
    update: {},
    create: {
      code: "SPD-01",
      name: "সৈয়দপুর রেলওয়ে বস্তি কমিউনিটি লার্নিং সেন্টার",
      district: "Nilphamari",
      address: "রেলওয়ে কলোনি, সৈয়দপুর, নীলফামারী",
      lat: 25.7785,
      lng: 88.8974,
      tabletCount: 15,
      photoUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
      active: true
    }
  });

  const centreKurigram = await prisma.centre.upsert({
    where: { code: "KRG-01" },
    update: {},
    create: {
      code: "KRG-01",
      name: "ধরলা নদী চর লার্নিং সেন্টার",
      district: "Kurigram",
      address: "যাত্রাপুর চর, কুড়িগ্রাম সদর, কুড়িগ্রাম",
      lat: 25.8072,
      lng: 89.6295,
      tabletCount: 12,
      photoUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
      active: true
    }
  });

  // 4. Centre Teachers
  const teacher1 = await prisma.user.upsert({
    where: { email: "teacher.saidpur@baust.edu.bd" },
    update: {},
    create: {
      name: "মাহমুদুল হাসান (সৈয়দপুর শিক্ষক)",
      email: "teacher.saidpur@baust.edu.bd",
      phone: "+8801711000004",
      passwordHash: defaultPasswordHash,
      role: "CENTRE_TEACHER",
      centreId: centreSaidpur.id
    }
  });

  const teacher2 = await prisma.user.upsert({
    where: { email: "teacher.kurigram@baust.edu.bd" },
    update: {},
    create: {
      name: "সুমাইয়া আক্তার (কুড়িগ্রাম শিক্ষক)",
      email: "teacher.kurigram@baust.edu.bd",
      phone: "+8801711000005",
      passwordHash: defaultPasswordHash,
      role: "CENTRE_TEACHER",
      centreId: centreKurigram.id
    }
  });

  await prisma.centre.update({ where: { id: centreSaidpur.id }, data: { inChargeId: teacher1.id } });
  await prisma.centre.update({ where: { id: centreKurigram.id }, data: { inChargeId: teacher2.id } });

  console.log("Centres and Teachers seeded.");

  // 5. Classes 1 to 10
  const classes = [];
  for (let i = 1; i <= 10; i++) {
    const bengaliNum = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"][i] || String(i);
    const cls = await prisma.class.upsert({
      where: { level: i },
      update: {},
      create: {
        level: i,
        nameBn: `শ্রেণি ${bengaliNum}`,
        nameEn: `Class ${i}`
      }
    });
    classes.push(cls);
  }
  console.log("Classes 1-10 seeded.");

  // 6. Subjects for Class 5
  const class5 = classes.find(c => c.level === 5)!;
  const subBangla = await prisma.subject.create({
    data: {
      classId: class5.id,
      nameBn: "বাংলা",
      nameEn: "Bangla",
      colour: "#1565D8",
      icon: "book-open",
      order: 1
    }
  });

  const subMath = await prisma.subject.create({
    data: {
      classId: class5.id,
      nameBn: "প্রাথমিক গণিত",
      nameEn: "Elementary Mathematics",
      colour: "#E9A319",
      icon: "calculator",
      order: 2
    }
  });

  const subScience = await prisma.subject.create({
    data: {
      classId: class5.id,
      nameBn: "প্রাথমিক বিজ্ঞান",
      nameEn: "Elementary Science",
      colour: "#1E8E4F",
      icon: "flask",
      order: 3
    }
  });

  // 7. Chapters & Lessons for Class 5 Math
  const chMath1 = await prisma.chapter.create({
    data: {
      subjectId: subMath.id,
      titleBn: "অধ্যায় ১: চার প্রক্রিয়া সম্পর্কিত সমস্যাবলি",
      titleEn: "Chapter 1: Problems Related to Four Operations",
      order: 1
    }
  });

  const lesson1 = await prisma.lesson.create({
    data: {
      chapterId: chMath1.id,
      titleBn: "বন্ধনীর ব্যবহার ও সরল করার নিয়ম",
      titleEn: "Use of Brackets & Simplification Rules",
      type: "VIDEO",
      videoHlsUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      durationSec: 360,
      downloadable: true,
      published: true,
      order: 1
    }
  });

  const lesson2 = await prisma.lesson.create({
    data: {
      chapterId: chMath1.id,
      titleBn: "ঐকিক নিয়ম ও ব্যবহারিক হিসাব",
      titleEn: "Unitary Method and Practical Calculations",
      type: "READING",
      pdfUrl: "/uploads/math_ch1_unitary.pdf",
      durationSec: 420,
      downloadable: true,
      published: true,
      order: 2
    }
  });

  // 8. Badges
  const badgesData = [
    { code: "FIRST_LESSON", titleBn: "প্রথম পদক্ষেপ", titleEn: "First Step", descriptionBn: "প্রথম পাঠ সফলভাবে সম্পন্ন করার জন্য।", descriptionEn: "Awarded for completing the first lesson.", icon: "award" },
    { code: "STREAK_7_DAYS", titleBn: "অদম্য শিক্ষার্থী", titleEn: "Consistent Learner", descriptionBn: "টানা ৭ দিন পড়াশোনা চালিয়ে যাওয়ার পুরস্কার।", descriptionEn: "Maintained a 7-day learning streak.", icon: "flame" },
    { code: "CHAPTER_MASTER", titleBn: "অধ্যায় বিজয়ী", titleEn: "Chapter Master", descriptionBn: "একটি সম্পূর্ণ অধ্যায়ের সব পাঠ ও কুইজ সম্পন্ন।", descriptionEn: "Mastered an entire chapter.", icon: "check-circle" },
    { code: "MATH_GENIUS", titleBn: "গণিত জাদুকর", titleEn: "Math Wizard", descriptionBn: "গণিত কুইজে ১০০% নম্বর অর্জন।", descriptionEn: "Scored 100% in a math quiz.", icon: "star" }
  ];

  for (const b of badgesData) {
    await prisma.badge.upsert({
      where: { code: b.code },
      update: {},
      create: b
    });
  }

  // 9. Students (with 4-digit PIN '1234' bcrypt hashed)
  const studentPinHash = await bcrypt.hash("1234", 10);
  const sampleStudents = [
    { name: "আরিফ হোসেন", centreId: centreSaidpur.id, studentId: "EFA-SPD-01-001", guardian: "মো: রফিকুল ইসলাম", phone: "01711223301" },
    { name: "মারুফা জান্নাত", centreId: centreSaidpur.id, studentId: "EFA-SPD-01-002", guardian: "ফাতেমা বেগম", phone: "01711223302" },
    { name: "রাকিবুল হাসান", centreId: centreSaidpur.id, studentId: "EFA-SPD-01-003", guardian: "মো: জাহিদুল আলম", phone: "01711223303" },
    { name: "সুমনা আক্তার", centreId: centreKurigram.id, studentId: "EFA-KRG-01-001", guardian: "আনোয়ারা খাতুন", phone: "01711223304" },
    { name: "রিফাত ইসলাম", centreId: centreKurigram.id, studentId: "EFA-KRG-01-002", guardian: "মো: বাবুল মিয়া", phone: "01711223305" }
  ];

  for (const st of sampleStudents) {
    await prisma.student.upsert({
      where: { studentId: st.studentId },
      update: {},
      create: {
        studentId: st.studentId,
        name: st.name,
        centreId: st.centreId,
        classId: class5.id,
        pinHash: studentPinHash,
        guardianName: st.guardian,
        guardianPhone: st.phone,
        active: true
      }
    });
  }

  console.log("Database seeded successfully with BAUST EFA pilot data.");
}

main()
  .catch((e) => {
    console.error("Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
