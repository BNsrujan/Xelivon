"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Diagnose",
    body: "A week of interviews, data pulls, and workflow mapping. We write down what is actually slowing you down before anyone proposes a fix.",
  },
  {
    step: "02",
    title: "Sequence",
    body: "A costed roadmap ordered by payback, not by what is fun to build. You can stop after this step and take the plan elsewhere.",
  },
  {
    step: "03",
    title: "Build",
    body: "Small releases, every one instrumented. You see working software and moving numbers rather than status decks.",
  },
  {
    step: "04",
    title: "Hand over",
    body: "Documentation, training, and access. The engagement ends with your team able to run it without us.",
  },
];

const PRINCIPLES = [
  "One senior lead owns your account start to finish",
  "Fixed scope and fixed price for the first engagement",
  "Every deliverable ships with the metric it is meant to move",
  "You own the code, the accounts, and the data — always",
];

export default function About() {
  return (
    <section
      id="about"
      className="rounded-2xl bg-white px-6 py-20 text-black md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              About Axearc
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              A consultancy that ships, not just advises
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Most firms hand you a strategy and leave the build to someone
              else — then nobody owns the gap between them. Axearc was set up to
              close it. We are a small senior team that does the thinking and
              the implementation, which means the roadmap is written by the
              people who have to deliver it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We work with founders and operators at companies past the
              experiment stage: the product works, the market is real, and the
              constraint is now execution.
            </p>

            <ul className="mt-8 space-y-3">
              {PRINCIPLES.map((principle) => (
                <li key={principle} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-black text-white">
                    <Check size={13} />
                  </span>
                  <span className="text-gray-700">{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {STEPS.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-xl border border-gray-200 p-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-mono font-semibold text-gray-400">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
