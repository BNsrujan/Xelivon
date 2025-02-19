"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Founder() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex  bg-white w-full justify-center content-center  rounded-2xl p-6 text-center h-[800px]"
    >
      <div className="max-w-7xl flex py-16">
      <div className="relative   mx-auto w-1/2">
        <Image
          src="/profile.jpg"
          alt="Paresh Talekar"
          layout="fill"
          className="object-cover bg-red-500 rounded-xl"
        />
      </div>
      <div className="w-1/2 flex p-9 flex-col justify-center text-start">
        <h2 className="text-2xl font-semibold mt-4">Paresh Talekar</h2>
        <p className="text-gray-600 text-md mt-2">
          Founder & CEO of Axearc, specializing in marketing, animation,
          business consulting, and AI-powered solutions.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          With expertise in brand strategy, digital transformation, and sales
          optimization, he helps businesses scale through cutting-edge
          technology-driven solutions.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      </div>
    </motion.div>
  );
}
