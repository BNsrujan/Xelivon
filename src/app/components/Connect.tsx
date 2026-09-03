"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Mail, MapPin } from "lucide-react";
import { Contact } from "./Contact";
import type { ServiceSummary } from "@/lib/content";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@axearc.com";

export default function Connect({ services }: { services: ServiceSummary[] }) {
  return (
    <section
      id="contact"
      className="rounded-2xl bg-white px-6 py-20 text-black md:px-12 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Start with the problem, not the solution
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Tell us what is actually blocking you — a workflow that keeps
            breaking, a launch that keeps slipping, a channel that stopped
            converting. We will tell you honestly whether it is something we can
            help with.
          </p>

          <dl className="mt-10 space-y-5">
            <div className="flex items-center gap-3">
              <Mail size={20} className="flex-none text-gray-400" />
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-blue-600 hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays size={20} className="flex-none text-gray-400" />
              <dd className="text-gray-700">
                Or{" "}
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("booking")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="font-medium underline underline-offset-4"
                >
                  book a 30-minute call
                </button>{" "}
                straight away
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="flex-none text-gray-400" />
              <dd className="text-gray-700">
                Remote-first — we work across IST and CET hours
              </dd>
            </div>
          </dl>
        </motion.div>

        <div className="flex justify-center lg:justify-end">
          <Contact services={services} />
        </div>
      </div>
    </section>
  );
}
