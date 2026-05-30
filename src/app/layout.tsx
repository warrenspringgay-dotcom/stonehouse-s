import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const siteUrl = "https://www.stonehouseschipshop.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stonehouse’s Fish & Chips | Lingdale Fish and Chips",
    template: "%s | Stonehouse’s Fish & Chips",
  },
  description:
    "Stonehouse’s Fish & Chips in Lingdale, Saltburn. A local village fish and chip shop at 1 High Street, family run since 1999, serving freshly cooked fish and chips.",
  keywords: [
    "Stonehouse’s fish and chips",
    "Stonehouses fish and chips",
    "fish and chips Lingdale",
    "chip shop Lingdale",
    "Lingdale takeaway",
    "fish and chips Saltburn",
    "village fish and chips",
    "local fish and chips",
    "family run fish and chips",
  ],
  openGraph: {
    title: "Stonehouse’s Fish & Chips | Lingdale",
    description:
      "A local village fish and chip shop in Lingdale, Saltburn. Family run since 1999.",
    url: siteUrl,
    siteName: "Stonehouse’s Fish & Chips",
    images: [
      {
        url: "/images/stonehouses-fish-and-chips-branded.png",
        width: 1200,
        height: 630,
        alt: "Stonehouse’s fish and chips",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stonehouse’s Fish & Chips | Lingdale",
    description:
      "Local village fish and chips in Lingdale, family run since 1999.",
    images: ["/images/stonehouses-fish-and-chips-branded.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}