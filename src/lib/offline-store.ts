import Dexie, { Table } from "dexie";

export interface OfflineLesson {
  id: string;
  chapterId: string;
  titleBn: string;
  titleEn: string;
  type: string;
  videoUrl?: string;
  audioUrl?: string;
  durationSec: number;
  downloadedAt: number;
}

export interface OfflineAttempt {
  id?: number;
  clientUuid: string;
  quizId: string;
  studentId: string;
  score: number;
  answers: Record<string, any>;
  startedAt: string;
  submittedAt: string;
  synced: number; // 0 = false, 1 = true
}

export interface OfflineProgress {
  id?: number;
  clientUuid: string;
  studentId: string;
  lessonId: string;
  status: string;
  lastPositionSec: number;
  understood?: boolean;
  completedAt?: string;
  synced: number;
}

export interface OfflineHelpRequest {
  id?: number;
  clientUuid: string;
  studentId: string;
  message: string;
  synced: number;
}

export class EfaOfflineDatabase extends Dexie {
  lessons!: Table<OfflineLesson>;
  attempts!: Table<OfflineAttempt>;
  progress!: Table<OfflineProgress>;
  helpRequests!: Table<OfflineHelpRequest>;

  constructor() {
    super("EfaStudentOfflineDb");
    this.version(1).stores({
      lessons: "id, chapterId",
      attempts: "++id, clientUuid, studentId, synced",
      progress: "++id, clientUuid, studentId, lessonId, synced",
      helpRequests: "++id, clientUuid, studentId, synced"
    });
  }
}

export const offlineDb = new EfaOfflineDatabase();
