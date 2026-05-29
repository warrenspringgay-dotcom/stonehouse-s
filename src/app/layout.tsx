import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.stonehousesfishandchips.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Stonehouse’s Village Fish & Chips | Local Fish and Chips",
    template: "%s | Stonehouse’s Village Fish & Chips",
  },
  description:
    "Stonehouse’s Village Fish & Chips. A local village fish and chip shop, family run since 1999, serving freshly cooked fish and chips with friendly service.",
  keywords: [
    "Stonehouse’s fish and chips",
    "Stonehouses fish and chips",
    "village fish and chips",
    "local fish and chips",
    "fish and chips takeaway",
    "chip shop",
    "family run fish and chips",
  ],
  openGraph: {
    title: "Stonehouse’s Village Fish & Chips",
    description:
      "A local village fish and chip shop, family run since 1999, serving freshly cooked fish and chips with friendly service.",
    url: siteUrl,
    siteName: "Stonehouse’s Village Fish & Chips",
    images: [
      {
        url: "/images/stonehouses-shop-front.jpg",
        width: 1200,
        height: 630,
        alt: "Stonehouse’s Village Fish and Chips shop front",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stonehouse’s Village Fish & Chips",
    description:
      "Local village fish and chips, family run since 1999.",
    images: ["/images/stonehouses-shop-front.jpg"],
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
      <body>{children}</body>
    </html>
  );
}
