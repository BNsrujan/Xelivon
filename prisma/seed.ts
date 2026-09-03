import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set. Copy .env.example to .env.");

const prisma = new PrismaClient({
  adapter: new PrismaPg({ connectionString: url }),
});

const services = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    summary: "Put the repetitive work on rails.",
    description:
      "We map the workflows that eat your team's week — intake, triage, reporting, follow-up — and rebuild them as AI-assisted pipelines. Fewer handoffs, fewer dropped balls, and a decision trail you can actually audit.",
    icon: "Cog",
    accent: "bg-teal-50 text-teal-600",
    order: 1,
  },
  {
    slug: "strategic-consulting",
    title: "Strategic Consulting",
    summary: "Decide what to build before you build it.",
    description:
      "A short, structured engagement that pressure-tests your objectives against your market, your margins, and your team's real capacity. You leave with a sequenced roadmap, not a slide deck.",
    icon: "Lightbulb",
    accent: "bg-blue-50 text-blue-600",
    order: 2,
  },
  {
    slug: "brand-marketing",
    title: "Brand & Marketing",
    summary: "Positioning that survives contact with customers.",
    description:
      "Messaging, identity, and campaign systems built from what your buyers actually respond to. We instrument everything we ship, so the next round of spend is informed rather than hopeful.",
    icon: "Megaphone",
    accent: "bg-violet-50 text-violet-600",
    order: 3,
  },
  {
    slug: "web-development",
    title: "Web Development",
    summary: "Sites and products that hold up under load.",
    description:
      "Modern, fast, accessible builds on a stack your team can maintain after we leave. Performance budgets and analytics are part of the delivery, not an afterthought.",
    icon: "Code2",
    accent: "bg-amber-50 text-amber-600",
    order: 4,
  },
  {
    slug: "motion-video",
    title: "Motion & Video",
    summary: "Explain the hard part in ninety seconds.",
    description:
      "Animation, product walkthroughs, and video production for the moments where text stalls — onboarding, complex products, and pitches that need to land in one sitting.",
    icon: "Clapperboard",
    accent: "bg-rose-50 text-rose-600",
    order: 5,
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    summary: "Know which half of the budget worked.",
    description:
      "Tracking design, warehousing, and dashboards that answer the questions leadership keeps asking. We start from the decisions you need to make and work backwards to the metrics.",
    icon: "Eye",
    accent: "bg-emerald-50 text-emerald-600",
    order: 6,
  },
];

const posts = [
  {
    slug: "automation-audit-before-agents",
    title: "Run the automation audit before you buy the agents",
    excerpt:
      "Most teams shop for AI tooling before they can name the workflow it should replace. Here is the two-week audit we run first.",
    serviceSlug: "ai-automation",
    readMinutes: 6,
  },
  {
    slug: "positioning-is-a-research-problem",
    title: "Positioning is a research problem, not a writing problem",
    excerpt:
      "The tagline is the last five percent. The other ninety-five is customer interviews, win/loss data, and being honest about who you lose to.",
    serviceSlug: "brand-marketing",
    readMinutes: 5,
  },
  {
    slug: "performance-budget-day-one",
    title: "Set the performance budget on day one",
    excerpt:
      "Speed is cheap to protect and expensive to retrofit. A budget agreed at kickoff prevents the rebuild eighteen months later.",
    serviceSlug: "web-development",
    readMinutes: 4,
  },
];

async function main() {
  console.log("Seeding services...");
  const serviceIdBySlug = new Map<string, string>();

  for (const service of services) {
    const record = await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
    serviceIdBySlug.set(record.slug, record.id);
  }

  console.log("Seeding posts...");
  for (const { serviceSlug, ...post } of posts) {
    const data = {
      ...post,
      content: `${post.excerpt}\n\nFull article coming soon.`,
      published: true,
      publishedAt: new Date(),
      serviceId: serviceIdBySlug.get(serviceSlug) ?? null,
    };

    await prisma.post.upsert({
      where: { slug: post.slug },
      update: data,
      create: data,
    });
  }

  const [serviceCount, postCount] = await Promise.all([
    prisma.service.count(),
    prisma.post.count(),
  ]);

  console.log(`Done. ${serviceCount} services, ${postCount} posts.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
