"use client"
import { motion } from "framer-motion";
import React from 'react'
import { Contact } from './Contact'
import { Mail } from "lucide-react";

export default function Connect() {
  return (
    <div className=' flex w-full h-screen bg-white rounded-2xl  justify-center items-center gap-7 px-12'>
      <div className="flex justify-center items-center mx-auto max-w-7xl px-6 md:px-12">
        <div className='w-1/2'>
        <motion.div
          initial={{ opacity: 0, y: +20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className=" mb-10 text-start"
        >
          <h2 className="text-4xl font-bold">Get in Touch with Axearc</h2>
          <p className="text-lg text-gray-600 mt-3">
            Have a groundbreaking idea?
            Have a groundbreaking idea, a business challenge, or just curious about how we can help? We’re here to listen, collaborate, and innovate. Whether it's marketing, AI solutions, web development, or business consulting, our team is ready to craft the perfect strategy for you.
            Let’s collaborate and build something extraordinary.
          </p>
          <p className="mt-4  flex flex-col  space-x-2">
          For inquiries, support, or consultations, reach out to us at support@axearc.com. We're here to assist you!
          <div className=" flex gap-4  w-full ">
            <Mail target="_blank"
                className="rounded-lg border-2  border-gray-400 hover:border-white duration-300" /> <span className="text-blue-600">support@axearc.com</span>
            </div>
          </p>
        </motion.div>
        </div>
        <div className='w-1/2'>
            <Contact/>
        </div>
        </div>
    </div>
  )
}
