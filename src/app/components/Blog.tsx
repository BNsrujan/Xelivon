"use client"; // Needed if you're using the Next.js App Router (app/ directory)

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Eye, Cog } from "lucide-react";
import { RippleButton } from "@/components/magicui/ripple-button";
import { MagicCard } from "@/components/magicui/magic-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useTheme } from "next-themes";

const CARD_DATA = [
  {
    icon: Lightbulb,
    iconBg: "bg-blue-50 text-blue-600",
    title: "Strategic Consultation",
    description:
      "We analyze your business objectives and provide tailored solutions in marketing, branding, web development, and automation to optimize operations and enhance market positioning.",
    buttonLabel: "Learn More",
  },
  {
    icon: Eye,
    iconBg: "bg-green-50 text-green-600",
    title: "Results-Driven Approach",
    description:
      "Our strategies improve customer engagement, streamline workflows, and deliver measurable business impact, ensuring long-term success.",
    buttonLabel: "Learn More",
  },
  {
    icon: Cog,
    iconBg: "bg-teal-50 text-teal-600",
    title: "Expert-Led Innovation",
    description:
      "With a team of professionals in AI-driven development, animation, and digital transformation, we provide cutting-edge solutions to keep your business ahead in an evolving marketplace.",
    buttonLabel: "Learn More",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const subheadingVariants = {
  hidden: { opacity: 0, y: -10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Blog() {
  const { theme } = useTheme();

  return (
    <section className="bg-white text-black py-16 rounded-xl">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <TextGenerateEffect
                      words={"Leverage AI to Elevate Your Business"}
                      className="text-black text-4xl text-center "/>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-center mb-10"
          variants={subheadingVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Streamline operations, enhance branding, and drive growth with AI-powered
          automation, strategic marketing, and cutting-edge digital solutions from Axearc.
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-1 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {CARD_DATA.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <MagicCard
                          key={index}
                          className="p-6 rounded-lg shadow-md flex flex-col bg-opacity-50"
                          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                        >
                <div className="mb-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-md ${card.iconBg}`}
                  >
                    <IconComponent size={24} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2 text-gray-900">{card.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>

                <div className="mt-4">
                  <RippleButton rippleColor="#ADD8E6" className="flex-wrap">
                    {card.buttonLabel}
                  </RippleButton>
                </div>
              </MagicCard>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
