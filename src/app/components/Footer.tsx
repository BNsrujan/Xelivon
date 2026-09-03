"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Loader2, Twitter } from "lucide-react";
import { newsletterSchema } from "@/lib/validation";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@axearc.com";

const SOCIALS = [
  { icon: Linkedin, label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL },
  { icon: Twitter, label: "X", href: process.env.NEXT_PUBLIC_TWITTER_URL },
  { icon: Instagram, label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
];

const SECTION_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "How we work" },
  { href: "#insights", label: "Insights" },
  { href: "#booking", label: "Book a call" },
  { href: "#contact", label: "Contact" },
];

function NewsletterForm() {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = React.useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setStatus("error");
      setMessage(parsed.error.issues[0]?.message ?? "Enter a valid email.");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        setStatus("error");
        setMessage(body.error ?? "Something went wrong. Please try again.");
        return;
      }

      setEmail("");
      setStatus("success");
      setMessage("You are on the list.");
    } catch {
      setStatus("error");
      setMessage("We could not reach the server. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4" noValidate>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@company.com"
          className="h-10 min-w-0 flex-1 rounded-md border border-gray-700 bg-gray-900 px-3 text-sm text-white placeholder:text-gray-500 focus:border-gray-400 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-10 items-center gap-2 rounded-md bg-white px-4 text-sm font-medium text-black transition hover:bg-gray-200 disabled:opacity-60"
        >
          {status === "submitting" && (
            <Loader2 size={14} className="animate-spin" />
          )}
          Subscribe
        </button>
      </div>

      {message && (
        <p
          role="status"
          className={`mt-2 text-xs ${
            status === "error" ? "text-red-400" : "text-green-400"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

export default function Footer() {
  const scrollTo = (href: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const socials = SOCIALS.filter((social) => Boolean(social.href));

  return (
    <footer className="rounded-xl bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white">Axearc</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
              Business and technology consulting — strategy, marketing, and
              engineering from one accountable team.
            </p>

            {socials.length > 0 && (
              <motion.div
                className="mt-6 flex gap-3"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-lg border border-gray-700 p-2.5 transition hover:border-white hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </motion.div>
            )}
          </div>

          <div>
            <h3 className="font-semibold text-white">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SECTION_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={scrollTo(link.href)}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Notes from the work</h3>
            <p className="mt-4 text-sm text-gray-400">
              Occasional writing on automation, positioning, and delivery. No
              more than once a month.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 md:flex-row">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm transition hover:text-white"
          >
            {CONTACT_EMAIL}
          </a>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Axearc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
