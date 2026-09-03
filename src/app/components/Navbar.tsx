"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { useEnquiry } from "@/components/enquiry-context";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#insights", label: "Insights" },
  { href: "#booking", label: "Book a call" },
];

function Navbar() {
  const [open, setOpen] = React.useState(false);
  const { startEnquiry } = useEnquiry();

  const go = (href: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    setOpen(false);
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 rounded-2xl bg-white/90 text-black shadow-sm backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-12"
      >
        <a
          href="#top"
          onClick={go("#top")}
          className="text-lg font-bold tracking-tight"
        >
          Axearc
        </a>

        <ul className="hidden items-center gap-10 text-sm font-medium md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={go(link.href)}
                className="text-gray-600 transition hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ShinyButton className="bg-black" onClick={() => startEnquiry()}>
              Start a project
            </ShinyButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="rounded-md border border-gray-200 p-2 md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-gray-100 px-6 md:hidden",
          open ? "max-h-96 py-4" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-4 text-sm font-medium">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={go(link.href)}
                className="block text-gray-600 transition hover:text-black"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                startEnquiry();
              }}
              className="w-full rounded-md bg-black px-4 py-2 text-left text-white"
            >
              Start a project
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
