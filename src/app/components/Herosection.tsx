"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import React from "react";

const words = `Discover innovation. Redefine the future. 
`;

function Herosection() {
  return (
    <div className=" px-12 rounded-2xl bg-black text-white h-screen">
      <div className=" h-96 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <div className="flex flex-col justify-center items-center">
          <motion.h2
            initial={{ opacity: 0, y: +20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:text-7xl py-3 text-3xl lg:text-6xl font-bold text-center text-white relative z-20"
          >
            AI-driven solutions powered by Axearc
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: +20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-gray-400 text-center "
          >
            Marketing, business consulting, and automation designed to
            revolutionize operations.
            <br />
            Tech-powered insights for data-driven performance and efficiency.
          </motion.p>
          <motion.div
           initial={{ opacity: 0, y: +20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.14 }}>
          <Button className="m-4">Get Started with a Free Consultation</Button>
          </motion.div>
        </div>
        <div className="flex md:pt-52 flex-col justify-center items-center">
          <div className="md:text-7xl py-3 text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
            <TextGenerateEffect words={words} className="" />
          </div>
          <motion.p
            initial={{ opacity: 0, y: +20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-gray-400 text-center "
          >
          Axearc is a Business and Technology Consulting firm, driving growth through AI-powered solutions,
            cutting-edge marketing, advanced web development, animation, and business automation.
            </motion.p></div>
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(360px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export default Herosection;
