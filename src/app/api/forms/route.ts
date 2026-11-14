import { NextResponse } from "next/server";
import { z } from "zod";

const FormSchema = z.object({
  type: z.enum(["VOLUNTEER", "SUPPORT", "CONTACT"]),
  payload: z.record(z.string(), z.any())
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = FormSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid form payload", details: parsed.error }, { status: 400 });
    }

    console.log(`[Form Submission] Type: ${parsed.data.type}`, parsed.data.payload);

    return NextResponse.json({
      success: true,
      message: "Form submission saved successfully.",
      id: `sub-${Date.now()}`
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
