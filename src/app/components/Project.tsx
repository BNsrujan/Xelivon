"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function Project() {
  const { theme } = useTheme();

  const sections = [
    {
      title: "AI-Driven Automation & Digital Excellence",
      content:
        "Axearc integrates AI and automation to transform business automation, intelligent workflows, and data-driven transformation. Our AI-powered solutions optimize operations, enhance efficiency, and drive scalable, tech-enabled growth. From smart automation to AI-integrated web solutions, we empower businesses to streamline processes, improve decision-making, and stay ahead in an evolving digital landscape.",
    },
    {
      title: "Strategic Marketing, Branding & Digital Transformation",
      content:
        "Axearc crafts data-driven marketing strategies, powerful brand identities, and next-generation digital solutions that drive business success. Our expertise in AI-enhanced marketing, advanced web development, and compelling storytelling ensures brands achieve maximum visibility, engagement, and growth. With cutting-edge web design, immersive motion graphics, and high-impact video production, we create dynamic brand experiences that capture attention, inspire action, and accelerate business expansion.",
    },
    {
      title: "AI-Powered Creativity & Digital Transformation",
      content:
        "At Axearc, we specialize in intelligent marketing, automation, and digital solutions that drive business growth and efficiency. Our expertise spans Marketing, Editing, Animation, Business Consulting, Web Development, and AI-Powered Services, ensuring innovation at every step. Our AI-driven solutions help businesses optimize processes, reduce inefficiencies, and achieve sustainable growth.",
    },
  ];

  return (
    <div className="w-full min-h-screen  bg-white dark:bg-gray-900 rounded-2xl px-6 md:px-12 py-16 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:text-6xl py-3 text-3xl  font-bold text-black dark:text-white text-center"
      >
        AI-Powered Creativity. Strategy-Driven Success.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {sections.map((section, index) => (
          <MagicCard
            key={index}
            className="p-6 rounded-lg shadow-md flex flex-col bg-opacity-50"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <TextGenerateEffect className="text-2xl font-bold text-black dark:text-white mb-4"
              words={section.title}
            />
            <TextGenerateEffect
              words={section.content}
              className="text-gray-600 dark:text-gray-300 text-base font-medium leading-relaxed break-words whitespace-normal"
            />
          </MagicCard>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Project;
