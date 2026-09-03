import { prisma } from "@/lib/prisma";

/**
 * Shapes the page actually renders. Kept separate from the Prisma models so a
 * schema change does not ripple straight into every component.
 */
export type ServiceSummary = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: string;
  accent: string;
};

export type PostSummary = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  readMinutes: number;
  serviceTitle: string | null;
};

/**
 * The marketing page must render even when the database is unreachable — a
 * dead Postgres should not take the whole site down mid-campaign. Both getters
 * fall back to the same copy the seed inserts.
 */
const FALLBACK_SERVICES: ServiceSummary[] = [
  {
    id: "fallback-ai-automation",
    slug: "ai-automation",
    title: "AI Automation",
    summary: "Put the repetitive work on rails.",
    description:
      "We map the workflows that eat your team's week — intake, triage, reporting, follow-up — and rebuild them as AI-assisted pipelines.",
    icon: "Cog",
    accent: "bg-teal-50 text-teal-600",
  },
  {
    id: "fallback-strategic-consulting",
    slug: "strategic-consulting",
    title: "Strategic Consulting",
    summary: "Decide what to build before you build it.",
    description:
      "A short, structured engagement that pressure-tests your objectives against your market, your margins, and your team's real capacity.",
    icon: "Lightbulb",
    accent: "bg-blue-50 text-blue-600",
  },
  {
    id: "fallback-brand-marketing",
    slug: "brand-marketing",
    title: "Brand & Marketing",
    summary: "Positioning that survives contact with customers.",
    description:
      "Messaging, identity, and campaign systems built from what your buyers actually respond to, instrumented from day one.",
    icon: "Megaphone",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    id: "fallback-web-development",
    slug: "web-development",
    title: "Web Development",
    summary: "Sites and products that hold up under load.",
    description:
      "Modern, fast, accessible builds on a stack your team can maintain after we leave.",
    icon: "Code2",
    accent: "bg-amber-50 text-amber-600",
  },
];

export async function getServices(): Promise<ServiceSummary[]> {
  try {
    const services = await prisma.service.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
      select: {
        id: true,
        slug: true,
        title: true,
        summary: true,
        description: true,
        icon: true,
        accent: true,
      },
    });

    return services.length > 0 ? services : FALLBACK_SERVICES;
  } catch (error) {
    console.error("[content] falling back to static services:", error);
    return FALLBACK_SERVICES;
  }
}

export async function getPosts(limit = 3): Promise<PostSummary[]> {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: limit,
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        readMinutes: true,
        service: { select: { title: true } },
      },
    });

    return posts.map(({ service, ...post }) => ({
      ...post,
      serviceTitle: service?.title ?? null,
    }));
  } catch (error) {
    console.error("[content] falling back to no posts:", error);
    return [];
  }
}
