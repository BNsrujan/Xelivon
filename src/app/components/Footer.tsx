"use client"
import React from "react";
import Image from "next/image";
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="bg-black rounded-2xl text-white py-10 px-6 md:px-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-4">
          <motion.div
            initial={{ opacity: 0, y: +20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Image
              src="/placeholder-logo.png" 
              alt="Axearc Logo"
              width={80}
              height={80}
              className="rounded-md"
            />
            <h1 className="text-xl font-bold">Axearc</h1>
           
          </motion.div>
          
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[
              { icon:<Instagram className="p-2 flex items-center justify-center  hover:border-white  " size={36}/>},
              { icon:<Twitter className="p-2 flex items-center justify-center hover " size={36}/>},
              { icon: <Linkedin className="p-2 flex items-center justify-center hover " size={36}/>},
            ].map((item, index) => (
              <div key={index} className="   rounded-lg border-gray-400 border-2 hover:border-white duration-300">
                {item.icon}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="text-center md:text-left">
          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </motion.ul>
        </div>
        <br  />

        <motion.div
          className="text-center md:text-right"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          &copy; {new Date().getFullYear()} Axearc. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
