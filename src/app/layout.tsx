import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Axearc — Business & technology consulting",
    template: "%s | Axearc",
  },
  description:
    "Axearc pairs strategy, marketing, and engineering into one accountable engagement: AI automation, brand, web, and the analytics that prove it worked.",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Axearc",
    title: "Axearc — Business & technology consulting",
    description:
      "Strategy, marketing, and engineering from one accountable team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axearc — Business & technology consulting",
    description:
      "Strategy, marketing, and engineering from one accountable team.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative bg-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
