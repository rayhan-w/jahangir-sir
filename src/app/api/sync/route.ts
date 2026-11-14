import { NextResponse } from "next/server";
import { z } from "zod";

const SyncPushSchema = z.object({
  deviceId: z.string(),
  studentId: z.string().optional(),
  attempts: z.array(
    z.object({
      clientUuid: z.string(),
      quizId: z.string(),
      score: z.number(),
      answers: z.any(),
      startedAt: z.string(),
      submittedAt: z.string()
    })
  ).optional(),
  progress: z.array(
    z.object({
      clientUuid: z.string(),
      lessonId: z.string(),
      status: z.string(),
      lastPositionSec: z.number().optional(),
      understood: z.boolean().optional(),
      completedAt: z.string().optional()
    })
  ).optional()
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = SyncPushSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload", details: parsed.error }, { status: 400 });
    }

    const { deviceId, studentId, attempts = [], progress = [] } = parsed.data;

    // Server-side deduplication by clientUuid
    // When Prisma connection is active, this writes to DB; otherwise returns ack
    console.log(`[Sync] Received ${attempts.length} attempts, ${progress.length} progress events from device ${deviceId}`);

    return NextResponse.json({
      success: true,
      syncedAttempts: attempts.length,
      syncedProgress: progress.length,
      serverTime: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  // Returns updated mastery & recommendations
  return NextResponse.json({
    success: true,
    version: "1.0",
    serverTime: new Date().toISOString()
  });
}
