import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

/**
 * Placeholder roster. Swap for real client names and logo files in /public
 * before launch — see README → Known MVP limitations.
 */
const CLIENTS = [
  { name: "Northwind Retail", sector: "E-commerce" },
  { name: "Kestrel Labs", sector: "Biotech" },
  { name: "Vantage Freight", sector: "Logistics" },
  { name: "Halden & Co", sector: "Professional services" },
  { name: "Meridian Health", sector: "Healthcare" },
  { name: "Orbit Studio", sector: "Media" },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter((part) => /[a-z]/i.test(part))
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

function ClientCard({ name, sector }: { name: string; sector: string }) {
  return (
    <figure
      className={cn(
        "mx-2 flex w-60 items-center gap-3 rounded-xl border px-4 py-3",
        "border-gray-950/[.08] bg-gray-950/[.01] hover:bg-gray-950/[.04]"
      )}
    >
      <span
        aria-hidden
        className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white"
      >
        {initials(name)}
      </span>
      <figcaption className="min-w-0">
        <div className="truncate text-sm font-semibold text-gray-900">
          {name}
        </div>
        <div className="truncate text-xs text-gray-500">{sector}</div>
      </figcaption>
    </figure>
  );
}

export default function TrustedBy() {
  return (
    <section className="rounded-2xl bg-white px-6 py-12 md:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-gray-500">
          Teams we have delivered for
        </p>

        <div className="relative mt-8 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:28s]">
            {CLIENTS.map((client) => (
              <ClientCard key={client.name} {...client} />
            ))}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white" />
        </div>
      </div>
    </section>
  );
}
