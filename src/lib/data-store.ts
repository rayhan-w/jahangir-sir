import prisma from "./prisma";

export interface PilotTargets {
  children: number;
  centres: number;
  teachers: number;
  completionRate: number;
  durationMonths: number;
}

export interface SystemSettings {
  projectName: { bn: string; en: string };
  projectCode: string;
  affiliation: { bn: string; en: string };
  pilotTargets: PilotTargets;
  masteryThreshold: number;
  pinLength: number;
  bKashNumber: string;
  nagadNumber: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: { bn: string; en: string };
  maintenanceMode: boolean;
}

export const DEFAULT_SETTINGS: SystemSettings = {
  projectName: {
    bn: "Education for All",
    en: "Education for All"
  },
  projectCode: "ZRF-26-25400D",
  affiliation: {
    bn: "বাস্তবায়নে: কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং বিভাগ, বাউস্ট, সৈয়দপুর",
    en: "Implemented by: Department of Computer Science & Engineering, BAUST, Saidpur"
  },
  pilotTargets: {
    children: 1000,
    centres: 10,
    teachers: 50,
    completionRate: 80,
    durationMonths: 12
  },
  masteryThreshold: 60,
  pinLength: 4,
  bKashNumber: "01711-223344",
  nagadNumber: "01811-223344",
  contactEmail: "efa.cse@baust.edu.bd",
  contactPhone: "+880 1711-223344",
  contactAddress: {
    bn: "সৈয়দপুর সেনানিবাস, সৈয়দপুর ৫৩১০, নীলফামারী",
    en: "Saidpur Cantonment, Saidpur 5310, Nilphamari"
  },
  maintenanceMode: false
};

export const INITIAL_CENTRES = [
  {
    id: "c-spd-01",
    code: "SPD-01",
    nameBn: "সৈয়দপুর রেলওয়ে বস্তি কমিউনিটি লার্নিং সেন্টার",
    nameEn: "Saidpur Railway Colony Learning Centre",
    districtBn: "নীলফামারী",
    districtEn: "Nilphamari",
    addressBn: "রেলওয়ে কলোনি, সৈয়দপুর, নীলফামারী",
    addressEn: "Railway Colony, Saidpur, Nilphamari",
    lat: 25.7785,
    lng: 88.8974,
    tabletCount: 15,
    studentCount: 120,
    teacherName: "মাহমুদুল হাসান",
    phone: "01711000004",
    photoUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
    active: true
  },
  {
    id: "c-krg-01",
    code: "KRG-01",
    nameBn: "ধরলা নদী চর লার্নিং সেন্টার",
    nameEn: "Dharla River Char Learning Centre",
    districtBn: "কুড়িগ্রাম",
    districtEn: "Kurigram",
    addressBn: "যাত্রাপুর চর, কুড়িগ্রাম সদর, কুড়িগ্রাম",
    addressEn: "Jatrapur Char, Kurigram Sadar, Kurigram",
    lat: 25.8072,
    lng: 89.6295,
    tabletCount: 12,
    studentCount: 95,
    teacherName: "সুমাইয়া আক্তার",
    phone: "01711000005",
    photoUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    active: true
  },
  {
    id: "c-snm-01",
    code: "SNM-01",
    nameBn: "তাহিরপুর হাওর লার্নিং সেন্টার",
    nameEn: "Tahirpur Haor Learning Centre",
    districtBn: "সুনামগঞ্জ",
    districtEn: "Sunamganj",
    addressBn: "বালিজুড়ী গ্রাম, তাহিরপুর, সুনামগঞ্জ",
    addressEn: "Balijuri Village, Tahirpur, Sunamganj",
    lat: 25.0864,
    lng: 91.1762,
    tabletCount: 10,
    studentCount: 80,
    teacherName: "আরিফুল হক",
    phone: "01711000006",
    photoUrl: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80",
    active: true
  }
];

export const INITIAL_STUDENTS = [
  {
    id: "s-001",
    studentId: "EFA-SPD-01-001",
    centreCode: "SPD-01",
    nameBn: "আরিফ হোসেন",
    nameEn: "Arif Hossain",
    classLevel: 5,
    guardianName: "মো: রফিকুল ইসলাম",
    guardianPhone: "01711223301",
    pin: "1234",
    avatar: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?w=200&auto=format&fit=crop&q=80",
    points: 240,
    streak: 6,
    masteryPercent: 78
  },
  {
    id: "s-002",
    studentId: "EFA-SPD-01-002",
    centreCode: "SPD-01",
    nameBn: "মারুফা জান্নাত",
    nameEn: "Marufa Jannat",
    classLevel: 5,
    guardianName: "ফাতেমা বেগম",
    guardianPhone: "01711223302",
    pin: "1234",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    points: 310,
    streak: 9,
    masteryPercent: 88
  },
  {
    id: "s-003",
    studentId: "EFA-SPD-01-003",
    centreCode: "SPD-01",
    nameBn: "রাকিবুল হাসান",
    nameEn: "Rakibul Hasan",
    classLevel: 5,
    guardianName: "মো: জাহিদুল আলম",
    guardianPhone: "01711223303",
    pin: "1234",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop&q=80",
    points: 150,
    streak: 3,
    masteryPercent: 55
  },
  {
    id: "s-004",
    studentId: "EFA-KRG-01-001",
    centreCode: "KRG-01",
    nameBn: "সুমনা আক্তার",
    nameEn: "Sumona Akter",
    classLevel: 5,
    guardianName: "আনোয়ারা খাতুন",
    guardianPhone: "01711223304",
    pin: "1234",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    points: 280,
    streak: 7,
    masteryPercent: 82
  },
  {
    id: "s-005",
    studentId: "EFA-KRG-01-002",
    centreCode: "KRG-01",
    nameBn: "রিফাত ইসলাম",
    nameEn: "Rifat Islam",
    classLevel: 5,
    guardianName: "মো: বাবুল মিয়া",
    guardianPhone: "01711223305",
    pin: "1234",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    points: 190,
    streak: 4,
    masteryPercent: 64
  }
];

export const INITIAL_STORIES = [
  {
    id: "story-1",
    slug: "char-shishuder-shopno",
    titleBn: "ধরলার বুকে আলো ছড়াচ্ছে যাত্রাপুর চর লার্নিং সেন্টার",
    titleEn: "Illuminating Riverine Chars of Dharla River",
    summaryBn: "বন্যার পানিতে প্রতিবছর স্কুল বিচ্ছিন্ন হয়ে পড়া কুড়িগ্রামের শিশুদের এখন ডিজিটাল ট্যাবলেটে পড়াশোনায় নতুন আনন্দ।",
    summaryEn: "Children in flood-prone Kurigram river char find joyful offline learning through shared digital tablets.",
    authorBn: "সুমাইয়া আক্তার (স্বেচ্ছাসেবক শিক্ষক)",
    authorEn: "Sumaiya Akter (Volunteer Teacher)",
    date: "১২ নভেম্বর ২০২৬",
    photoUrl: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&auto=format&fit=crop&q=80",
    featured: true
  },
  {
    id: "story-2",
    slug: "saidpur-railway-slum-success",
    titleBn: "সৈয়দপুর বস্তির মারুফার গণিত জয়ের গল্প",
    titleEn: "Marufa's Journey to Mastering Mathematics in Saidpur Slum",
    summaryBn: "যে মেয়েটি একসময় যোগ-বিয়োগের ভয়ে স্কুলে যেত না, আজ সে অফলাইন কুইজে সেন্টারের প্রথম স্থানাধিকারী।",
    summaryEn: "Once fearful of basic arithmetic, Marufa now tops chapter quizzes at her community centre.",
    authorBn: "মাহমুদুল হাসান (সেন্টার ইন-চার্জ)",
    authorEn: "Mahmudul Hasan (Centre In-Charge)",
    date: "০৫ নভেম্বর ২০২৬",
    photoUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
    featured: false
  }
];

export const INITIAL_FAQS = [
  {
    id: "faq-1",
    questionBn: "বাচ্চাদের বাড়িতে ইন্টারনেট না থাকলে কীভাবে পড়াশোনা করবে?",
    questionEn: "How do children learn without internet access at home?",
    answerBn: "আমাদের প্ল্যাটফর্মটি শতভাগ 'অফলাইন-ফার্স্ট'। সেন্টারের ওয়াই-ফাই থেকে একবার পাঠ ও কুইজ ট্যাবলেটে ডাউনলোড করে নিলে পরবর্তীতে কোনো ইন্টারনেট সংযোগ ছাড়াই সবকিছু চলে।",
    answerEn: "Our platform is 100% offline-first. Lesson packs and quizzes are downloaded once at the centre and work fully offline.",
    category: "learning"
  },
  {
    id: "faq-2",
    questionBn: "এই প্রকল্পের মূল অর্থায়ন ও কারিগরি সহায়তা কারা করছে?",
    questionEn: "Who is sponsoring and technically supporting this project?",
    answerBn: "বাংলাদেশ আর্মি ইউনিভার্সিটি অব ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি (বাউস্ট), সৈয়দপুর-এর সিএসই বিভাগ গবেষণা অনুদান (Project No: ZRF-26-25400D) এর অধীনে এটি সরাসরি তত্ত্বাবধান করছে।",
    answerEn: "Department of CSE at Bangladesh Army University of Science & Technology (BAUST), Saidpur under Research Grant No. ZRF-26-25400D.",
    category: "general"
  },
  {
    id: "faq-3",
    questionBn: "স্বেচ্ছাসেবক শিক্ষক হিসেবে কারা আবেদন করতে পারবেন?",
    questionEn: "Who can apply as a volunteer teacher?",
    answerBn: "বিশ্ববিদ্যালয় বা কলেজের যেকোনো শিক্ষার্থী, তরুণ শিক্ষক বা উদ্যমী মানুষ স্থানীয় সুবিধাবঞ্চিত শিশুদের সপ্তাহে কয়েক ঘণ্টা সময় দিয়ে সহায়তা করতে আবেদন করতে পারেন।",
    answerEn: "University/college students, young educators, or community volunteers who can dedicate a few hours weekly to guide children.",
    category: "volunteer"
  }
];

export const INITIAL_PARTNERS = [
  {
    id: "p-1",
    nameBn: "বাংলাদেশ আর্মি ইউনিভার্সিটি অব ইঞ্জিনিয়ারিং অ্যান্ড টেকনোলজি (বাউস্ট)",
    nameEn: "BAUST, Saidpur Cantonment",
    roleBn: "প্রধান বাস্তবায়ন ও গবেষণা সংস্থা",
    roleEn: "Lead Implementing & Research Institution",
    logoText: "BAUST CSE"
  },
  {
    id: "p-2",
    nameBn: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB)",
    nameEn: "National Curriculum & Textbook Board (NCTB)",
    roleBn: "পাঠ্যক্রম ও বইয়ের রূপরেখা সহায়তা",
    roleEn: "Curriculum & Text Alignment",
    logoText: "NCTB"
  },
  {
    id: "p-3",
    nameBn: "কমিউনিটি শিক্ষা উন্নয়ন ট্রাস্ট, নীলফামারী",
    nameEn: "Community Education Development Trust",
    roleBn: "মাঠপর্যায়ে সেন্টার ব্যবস্থাপনা পার্টনার",
    roleEn: "Field Centre Management Partner",
    logoText: "CEDT"
  }
];
