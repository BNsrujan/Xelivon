"use client"; // If you're using the Next.js App Router and need client-side code

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 rounded-xl">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <h2 className="text-white text-2xl font-bold">Ganttly</h2>

          <motion.div
            className="flex space-x-4 mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {[
              {
                icon: (
                  <Instagram
                    className="p-2 flex items-center justify-center hover:border-white"
                    size={36}
                  />
                ),
                link: "https://instagram.com",
              },
              {
                icon: (
                  <Twitter
                    className="p-2 flex items-center justify-center hover:border-white"
                    size={36}
                  />
                ),
                link: "https://twitter.com",
              },
              {
                icon: (
                  <Linkedin
                    className="p-2 flex items-center justify-center hover:border-white"
                    size={36}
                  />
                ),
                link: "https://linkedin.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-gray-400 hover:border-white duration-300"
              >
                {item.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/project-management" className="hover:text-white transition">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/goal-management" className="hover:text-white transition">
                  Goal Management
                </Link>
              </li>
              <li>
                <Link href="/agile-management" className="hover:text-white transition">
                  Agile Management
                </Link>
              </li>
              <li>
                <Link href="/task-management" className="hover:text-white transition">
                  Task Management
                </Link>
              </li>
              <li>
                <Link href="/productivity" className="hover:text-white transition">
                  Productivity
                </Link>
              </li>
              <li>
                <Link href="/work-management" className="hover:text-white transition">
                  Work Management
                </Link>
              </li>
              <li>
                <Link href="/project-planning" className="hover:text-white transition">
                  Project Planning
                </Link>
              </li>
              <li>
                <Link href="/to-do-lists" className="hover:text-white transition">
                  To Do Lists
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">About Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/company" className="hover:text-white transition">
                  Company
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-white transition">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/customers" className="hover:text-white transition">
                  Customers
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/changing" className="hover:text-white transition">
                  Changing
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-white">Helpful Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal" className="hover:text-white transition">
                  Legal Center
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-white transition">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 mt-8 pt-4">
          <button className="flex items-center space-x-2 bg-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-700 transition">
            Contact
          </button>

          <p className="text-sm text-gray-500 mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} Ganttly. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
