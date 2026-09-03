"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@axearc.com";
const LINKEDIN_URL = process.env.NEXT_PUBLIC_FOUNDER_LINKEDIN;

/**
 * Opt-in headshot. Drop a file in /public and set NEXT_PUBLIC_FOUNDER_PHOTO
 * (e.g. "/founder.jpg"); until then we render a monogram rather than pointing
 * next/image at a file that does not exist.
 */
const PHOTO = process.env.NEXT_PUBLIC_FOUNDER_PHOTO;

export default function Founder() {
  const [photoFailed, setPhotoFailed] = React.useState(false);
  const showPhoto = Boolean(PHOTO) && !photoFailed;

  return (
    <section className="rounded-2xl bg-white px-6 py-20 text-black md:px-12 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-100">
          {showPhoto ? (
            <Image
              src={PHOTO!}
              alt="Paresh Talekar"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-900 text-6xl font-bold text-white">
              PT
            </div>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Who you will work with
          </p>
          <h2 className="mt-3 text-3xl font-bold">Paresh Talekar</h2>
          <p className="mt-1 text-gray-500">Founder &amp; CEO, Axearc</p>

          <p className="mt-6 leading-relaxed text-gray-600">
            Paresh works across brand strategy, digital transformation, and
            sales optimisation, with a background spanning marketing,
            animation, and AI-driven product work.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600">
            He leads every engagement personally through the diagnosis and
            roadmap stages — so the person who tells you what to do is the
            person accountable for it working.
          </p>

          <div className="mt-8 flex gap-4">
            {LINKEDIN_URL && (
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Paresh Talekar on LinkedIn"
                className="rounded-lg border border-gray-300 p-3 text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
              >
                <FaLinkedin size={20} />
              </a>
            )}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={`Email ${CONTACT_EMAIL}`}
              className="rounded-lg border border-gray-300 p-3 text-gray-600 transition hover:border-gray-900 hover:text-gray-900"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
