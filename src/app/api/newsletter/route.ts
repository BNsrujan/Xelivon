import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { fieldErrors, newsletterSchema } from "@/lib/validation";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const parsed = newsletterSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form.", fields: fieldErrors(parsed.error) },
      { status: 422 }
    );
  }

  const email = parsed.data.email.toLowerCase();

  try {
    // Re-subscribing is idempotent and clears any previous unsubscribe.
    await prisma.newsletterSubscriber.upsert({
      where: { email },
      update: { unsubscribedAt: null },
      create: { email },
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("[api/newsletter] failed to subscribe:", error);
    return NextResponse.json(
      { error: "We could not sign you up. Please try again." },
      { status: 500 }
    );
  }
}
