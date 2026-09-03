import { NextResponse } from "next/server";
import { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";
import { contactSchema, fieldErrors } from "@/lib/validation";

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

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the form.", fields: fieldErrors(parsed.error) },
      { status: 422 }
    );
  }

  const { firstName, lastName, email, company, message, serviceSlug } =
    parsed.data;

  try {
    const lead = await prisma.lead.create({
      data: {
        firstName,
        lastName,
        email: email.toLowerCase(),
        company: company || null,
        message,
        // connect-if-exists: an unknown slug should not lose us the lead.
        service: serviceSlug
          ? { connect: { slug: serviceSlug } }
          : undefined,
      },
      select: { id: true },
    });

    return NextResponse.json({ id: lead.id }, { status: 201 });
  } catch (error) {
    // The slug did not match a Service row — save the lead without one.
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      const lead = await prisma.lead.create({
        data: {
          firstName,
          lastName,
          email: email.toLowerCase(),
          company: company || null,
          message,
        },
        select: { id: true },
      });

      return NextResponse.json({ id: lead.id }, { status: 201 });
    }

    console.error("[api/contact] failed to save lead:", error);
    return NextResponse.json(
      { error: "We could not save your message. Please try again." },
      { status: 500 }
    );
  }
}
