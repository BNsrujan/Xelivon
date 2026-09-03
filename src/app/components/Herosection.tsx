"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { useEnquiry } from "@/components/enquiry-context";

const STATS = [
  { value: "6", label: "practice areas under one roof" },
  { value: "2 wks", label: "from first call to a costed roadmap" },
  { value: "1", label: "senior lead who stays on your account" },
];

function Herosection() {
  const { startEnquiry } = useEnquiry();

  const scrollToBooking = () => {
    document
      .getElementById("booking")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-2xl bg-black px-6 py-20 text-white md:px-12 md:py-28"
    >
      <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
      <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

      <div className="pointer-events-none absolute inset-0 h-64">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={800}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(360px_200px_at_top,transparent_20%,white)]" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-widest text-gray-300"
        >
          Business &amp; technology consulting
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold leading-tight md:text-6xl"
        >
          AI-driven solutions, delivered by people who stay accountable
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-gray-400"
        >
          Axearc pairs strategy, marketing, and engineering into a single
          engagement — so the plan, the build, and the numbers that prove it
          worked all come from the same team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <Button
            size="lg"
            onClick={scrollToBooking}
            className="bg-white text-black hover:bg-gray-200"
          >
            Book a free consultation
            <ArrowRight />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => startEnquiry()}
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            Tell us about your project
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid w-full grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-3"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-bold">{stat.value}</dt>
              <dd className="mt-1 text-sm text-gray-400">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

export default Herosection;
