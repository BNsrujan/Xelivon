"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cog, Eye, Lightbulb, type LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";

const CARDS: {
  icon: LucideIcon;
  iconBg: string;
  title: string;
  description: string;
}[] = [
  {
    icon: Lightbulb,
    iconBg: "bg-blue-50 text-blue-600",
    title: "Strategy grounded in your numbers",
    description:
      "We start from your margins, pipeline, and capacity — not from a template. The recommendation you get is the one we would act on if it were our balance sheet.",
  },
  {
    icon: Eye,
    iconBg: "bg-green-50 text-green-600",
    title: "Measured, not asserted",
    description:
      "Every workstream ships with the metric it is meant to move and the tracking to prove it. If something is not working, you will see it in weeks rather than quarters.",
  },
  {
    icon: Cog,
    iconBg: "bg-teal-50 text-teal-600",
    title: "Senior people on the tools",
    description:
      "The person who scoped your project is the person who builds it. No handoff to a junior bench once the contract is signed.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function WhyAxearc() {
  const { theme } = useTheme();

  return (
    <section className="rounded-2xl bg-white px-6 py-20 text-black md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-5xl">
            Why teams bring us in
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Three things clients tell us are different about working with
            Axearc.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {CARDS.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div key={card.title} variants={item}>
                <MagicCard
                  className="h-full rounded-xl shadow-sm"
                  contentClassName="flex flex-col p-6"
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-md ${card.iconBg}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {card.description}
                  </p>
                </MagicCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
