"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { useEnquiry } from "@/components/enquiry-context";
import { iconFor } from "@/lib/icons";
import type { ServiceSummary } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services({ services }: { services: ServiceSummary[] }) {
  const { theme } = useTheme();
  const { startEnquiry } = useEnquiry();

  return (
    <section
      id="services"
      className="rounded-2xl bg-white px-6 py-20 text-black md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            What we do
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Six practices, one accountable team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Engagements usually start in one of these and grow into two or
            three. You keep the same lead throughout — nothing gets re-explained
            to a new account manager.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = iconFor(service.icon);

            return (
              <motion.div key={service.id} variants={item}>
                <MagicCard
                  className="h-full rounded-xl shadow-sm"
                  contentClassName="flex flex-col p-6"
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-md ${service.accent}`}
                  >
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-500">
                    {service.summary}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => startEnquiry(service.slug)}
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-black transition hover:gap-2.5"
                  >
                    Enquire about {service.title}
                    <ArrowRight size={16} />
                  </button>
                </MagicCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
