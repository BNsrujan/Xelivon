"use client"
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/app/style"; 
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  return (
    <div className="relative pt-4 sm:pt-28 md:pt-40 flex flex-wrap lg:h-screen">
 

      <div className="md:w-3/4 lg:w-1/2 h-full text-white px-6 md:px-20 lg:px-40 flex items-center z-10">
        <div>
          <motion.div variants={textVariant()}>
            <h3 className={`${styles.heroHeadText} mt-20 sm:m-auto`}>
              Hello wrold
            </h3>
            <p className={`${styles.heroSubText}`}>
              yo!
            </p>
          </motion.div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 pt-4 pb-5 md:pt-5">

            {showVideo && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
                <div className="relative w-3/4 h-3/4">
                  <button
                    
                    className="font-extrabold text-1xl absolute -top-5 -right-5 border-red-800 p-3 w-10 h-10 flex justify-center items-center bg-red-500 rounded-full"
                  >
                    x
                  </button>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/6RDz_bV2yXs?si=WdftR-KjFaPiMFFM"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Demo Video"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
