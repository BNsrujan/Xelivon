"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { PostSummary } from "@/lib/content";

export default function Insights({ posts }: { posts: PostSummary[] }) {
  // Nothing published yet — better to drop the section than show an empty grid.
  if (posts.length === 0) return null;

  return (
    <section
      id="insights"
      className="rounded-2xl bg-white px-6 py-20 text-black md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Insights
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            What we have learned doing the work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Notes from live engagements — the parts that generalise.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col rounded-xl border border-gray-200 p-6 transition hover:border-gray-400"
            >
              {post.serviceTitle && (
                <span className="self-start rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {post.serviceTitle}
                </span>
              )}

              <h3 className="mt-4 text-lg font-semibold leading-snug">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                {post.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-1.5 text-xs text-gray-500">
                <Clock size={14} />
                {post.readMinutes} min read
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
