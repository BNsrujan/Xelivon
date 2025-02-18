"use client";
import React from "react";
import { useTheme } from "next-themes";
import { MagicCard } from "@/components/magicui/magic-card";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
function Project() {
  const { theme } = useTheme();
  const words = `Discover innovation. Redefine the future. 
  `;
  const subtext = `AI-driven marketing automation, predictive analytics, and personalized ad targeting`;
  return (
    <div className="  w-full h-screen bg-white rounded-2xl  gap-7 px-12 py-32">
      <motion.h2
        initial={{ opacity: 0, y: +20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:text-7xl py-3 text-3xl lg:text-6xl font-bold text-black relative z-20"
      >
        AI-driven solutions powered by Axearc
      </motion.h2>
      <div className="grid gap-10 md:mt-10">
        <div
          className={
            "flex h-[500px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"
          }
        >
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center whitespace-nowrap"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <TextGenerateEffect words={words} className="text-black" />
            <TextGenerateEffect words={subtext} className="text-black font-thin" />
          </MagicCard>
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            Card
          </MagicCard>
        </div>
        <MagicCard
          className="cursor-pointer h-96 flex-col items-center justify-center whitespace-nowrap text-4xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          Card
        </MagicCard>
      </div>
    </div>
  );
}

export default Project;
