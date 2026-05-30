import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ExternalLink,
  Fish,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Utensils,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.stonehouseschipshop.co.uk";
const pageUrl = `${siteUrl}/fish-and-chips-lingdale`;
const phoneDisplay = "01287 658777";
const phoneHref = "tel:+441287658777";
const googleReviewUrl = "https://g.page/r/CXD-f1GqG3NPEBM/review";
const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Stonehouse%27s%20Fish%20and%20Chips%2C%201%20High%20Street%2C%20Lingdale%2C%20Saltburn%2C%20TS12%203DZ";

const localAreas = [
  "Lingdale",
  "Boosbeck",
  "Moorsholm",
  "Skelton",
  "Brotton",
  "Loftus",
  "Saltburn",
  "Guisborough",
];

export const metadata: Metadata = {
  title: "Fish and Chips Lingdale, Boosbeck & Skelton | Stonehouse’s",
  description:
    "Stonehouse’s Fish & Chips is a local village chip shop in Lingdale, serving freshly cooked fish and chips for Lingdale, Boosbeck, Moorsholm, Skelton, Brotton, Loftus, Saltburn and Guisborough.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Fish and Chips Lingdale, Boosbeck & Skelton | Stonehouse’s",
    description:
      "Stonehouse’s Fish & Chips on High Street, Lingdale. Freshly cooked fish and chips for Lingdale, Boosbeck, Skelton, Brotton, Loftus, Saltburn and nearby villages.",
    url: pageUrl,
    siteName: "Stonehouse’s Fish & Chips",
    images: [
      {
        url: "/images/stonehouses-fish-and-chips-branded.png",
        width: 1200,
        height: 630,
        alt: "Stonehouse’s fish and chips in Lingdale",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where is Stonehouse’s Fish & Chips in Lingdale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stonehouse’s Fish & Chips is at 1 High Street, Lingdale, Saltburn, TS12 3DZ.",
      },
    },
    {
      "@type": "Question",
      name: "Can I call Stonehouse’s to order for collection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can call Stonehouse’s Fish & Chips on 01287 658777 for collection orders and enquiries.",
      },
    },
    {
      "@type": "Question",
      name: "What food does Stonehouse’s serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stonehouse’s serves traditional fish and chips, cod and chips, hake and chips, sausages, chicken, chips, sides, sauces, drinks, kids meals and meal deals.",
      },
    },
    {
      "@type": "Question",
      name: "What nearby areas does Stonehouse’s serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stonehouse’s Fish & Chips is based in Lingdale and serves local customers from nearby areas including Boosbeck, Moorsholm, Skelton, Brotton, Loftus, Saltburn and Guisborough.",
      },
    },
    {
      "@type": "Question",
      name: "Is Stonehouse’s open on Sunday or Monday?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stonehouse’s is usually closed on Sunday and Monday. Opening times can vary on bank holidays, so call before travelling if unsure.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fish and Chips Lingdale",
      item: pageUrl,
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FastFoodRestaurant",
  name: "Stonehouse’s Fish & Chips",
  image: `${siteUrl}/images/stonehouses-fish-and-chips-branded.png`,
  url: pageUrl,
  telephone: "+441287658777",
  servesCuisine: ["Fish and chips", "British", "Takeaway"],
  priceRange: "£",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 High Street",
    addressLocality: "Lingdale",
    addressRegion: "Saltburn",
    postalCode: "TS12 3DZ",
    addressCountry: "GB",
  },
  areaServed: localAreas.map((area) => ({
    "@type": "Place",
    name: area,
  })),
};

export default function FishAndChipsLingdalePage() {
  return (
    <main className="min-h-screen bg-[#0b0d0b] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-[#b89757]/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(184,151,87,0.2),transparent_35%),linear-gradient(to_bottom,rgba(11,13,11,0.2),#0b0d0b)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_.95fr] md:px-8 lg:py-24">
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-zinc-300 hover:text-white"
            >
              ← Back to Stonehouse’s
            </Link>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b89757]/50 bg-[#b89757]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-[#ead39a]">
              <MapPin className="h-4 w-4" />
              1 High Street, Lingdale
            </p>

            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Fish and Chips in Lingdale
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Stonehouse’s Fish & Chips is a local village chip shop on High
              Street in Lingdale, serving freshly cooked fish and chips for
              Lingdale, Boosbeck, Moorsholm, Skelton, Brotton, Loftus, Saltburn,
              Guisborough and nearby villages.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={phoneHref}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black shadow-lg shadow-[#b89757]/20 transition hover:bg-[#d4b56b]"
              >
                <Phone className="h-5 w-5" />
                Call {phoneDisplay}
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
              >
                Get Directions
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#b89757]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <Image
                src="/images/stonehouses-fish-and-chips-branded.png"
                alt="Fish and chips from Stonehouse’s in Lingdale"
                width={1200}
                height={900}
                className="aspect-[4/3] rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
              Local Village Chippy
            </p>
            <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
              A proper chip shop for Lingdale and nearby villages.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                If you are searching for a chip shop in Lingdale, Stonehouse’s is
                on the village High Street and easy to call ahead for collection.
                The menu covers the essentials: cod and chips, hake and chips,
                sausages, chips, chicken, sides, sauces, kids meals and meal
                deals.
              </p>
              <p>
                The shop is family run, local, and built around simple food done
                properly — freshly cooked, served hot and made for regulars,
                families, workers and anyone passing through the village.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
            <Image
              src="/images/stonehouses-shop-interior.jpg"
              alt="Inside Stonehouse’s Fish and Chips shop in Lingdale"
              width={1200}
              height={900}
              className="aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/80 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
              <MapPin className="h-4 w-4" />
              Local Area
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
              Serving Lingdale, Boosbeck, Skelton and nearby villages
            </h2>
            <p className="mt-5 leading-8 text-zinc-300">
              Stonehouse’s Fish & Chips is based on High Street in Lingdale,
              making it a convenient village chip shop for local customers from
              Boosbeck, Moorsholm, Skelton, Brotton, Loftus, Saltburn and
              Guisborough. Whether you are picking up tea for the family, calling
              in after work or travelling through the area, you can call ahead
              and collect freshly cooked chip-shop favourites.
            </p>
            <p className="mt-4 leading-7 text-zinc-400">
              We are also useful for people travelling through East Cleveland or
              heading towards the coast from the Whitby direction.
              </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {localAreas.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-[#b89757]/25 bg-[#0b0d0b] px-5 py-4 text-center font-bold text-zinc-100 shadow-lg shadow-black/10"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
              What We Serve
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
              Fish, chips, meal deals and favourites
            </h2>
            <p className="mt-4 leading-7 text-zinc-300">
              A straightforward village chip-shop menu with traditional fish and
              chips, proper classics and family-friendly options.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Fish,
                title: "Fish & Chips",
                text: "Small cod and chips, large cod and chips, hake and chips, fish bites and more.",
              },
              {
                icon: Utensils,
                title: "Meal Deals",
                text: "Cod meal deals, sausage meal deals, kids meals and easy collection options.",
              },
              {
                icon: Star,
                title: "Sides & Sauces",
                text: "Curry, mushy peas, gravy, garlic sauce, tartare, onion rings and extras.",
              },
              {
                icon: MessageCircle,
                title: "Call Ahead",
                text: "Phone ahead for collection orders, larger orders or allergy questions.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[2rem] border border-[#b89757]/25 bg-[#0b0d0b] p-6"
              >
                <Icon className="mb-4 h-8 w-8 text-[#d4b56b]" />
                <h3 className="font-serif text-2xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/#menu"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black transition hover:bg-[#d4b56b]"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <Clock className="mb-4 h-8 w-8 text-[#d4b56b]" />
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
              Opening Times
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black">
              Lunch and evening service
            </h2>
            <div className="mt-6 space-y-3 text-zinc-300">
              <OpeningRow day="Monday" time="Closed" />
              <OpeningRow day="Tuesday" time="11:30am–1pm / 4:30pm–8pm" />
              <OpeningRow day="Wednesday" time="11:30am–1pm / 4:30pm–8pm" />
              <OpeningRow day="Thursday" time="11:30am–1pm / 4:30pm–8pm" />
              <OpeningRow day="Friday" time="11am–1pm / 4pm–8pm" />
              <OpeningRow day="Saturday" time="11:30am–1pm / 4pm–8pm" />
              <OpeningRow day="Sunday" time="Closed" />
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
            <Image
              src="/images/stonehouses-shop-front.jpg"
              alt="Stonehouse’s Fish and Chips on High Street in Lingdale"
              width={1200}
              height={900}
              className="h-full min-h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/80 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
              <Star className="h-4 w-4" />
              Reviews
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black">
              Had a good order from Stonehouse’s?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-300">
              Reviews help local customers find us when searching for fish and
              chips in Lingdale, chip shops near Saltburn and local takeaways.
            </p>
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black transition hover:bg-[#d4b56b]"
            >
              Leave a Google Review
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

function OpeningRow({ day, time }: { day: string; time: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-white/10 pb-3 sm:flex-row sm:items-center sm:justify-between">
      <span className="font-bold text-white">{day}</span>
      <span>{time}</span>
    </div>
  );
}
