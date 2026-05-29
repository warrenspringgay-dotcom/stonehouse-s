import Image from "next/image";
import {
  Clock,
  ExternalLink,
  Fish,
  Heart,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const BUSINESS_NAME = "Stonehouse’s Village Fish & Chips";
const SITE_URL = "https://www.stonehousesfishandchips.co.uk";
const BUSINESS_EMAIL = "hello@stonehousesfishandchips.co.uk";
const FACEBOOK_URL = "https://www.facebook.com/";
const GOOGLE_REVIEW_URL = "https://g.page/r/REPLACE_WITH_REVIEW_LINK/review";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Stonehouse%27s%20Village%20Fish%20and%20Chips";

const menuSections = [
  {
    title: "Fish & Chips",
    items: [
      ["Fish & Chips", "£—"],
      ["Fish", "£—"],
      ["Chips", "£—"],
      ["Chip Buttie", "£—"],
    ],
  },
  {
    title: "Favourites",
    items: [
      ["Sausage", "£—"],
      ["Fish Cake", "£—"],
      ["Spam Fritter", "£—"],
      ["Chicken Nuggets", "£—"],
    ],
  },
  {
    title: "Sides & Sauces",
    items: [
      ["Mushy Peas", "£—"],
      ["Curry Sauce", "£—"],
      ["Gravy", "£—"],
      ["Garlic / Sauce Pots", "£—"],
    ],
  },
  {
    title: "Drinks & Specials",
    items: [
      ["Cans", "£—"],
      ["Bottles", "£—"],
      ["Kids Meal", "£—"],
      ["Meal Deals", "£—"],
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS_NAME,
  url: SITE_URL,
  email: BUSINESS_EMAIL,
  image: [`${SITE_URL}/images/stonehouses-shop-front.jpg`],
  priceRange: "£",
  servesCuisine: ["Fish and chips", "British", "Takeaway"],
  foundingDate: "1999",
  acceptsReservations: false,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Add full address here",
    addressCountry: "GB",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer enquiries",
      email: BUSINESS_EMAIL,
      availableLanguage: "en-GB",
    },
  ],
  description:
    "Stonehouse’s Village Fish & Chips is a local village fish and chip shop, family run since 1999, serving freshly cooked fish and chips with friendly service.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0b0d0b] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <SiteHeader />
      <HeroSection />
      <TrustStrip />
      <IntroSection />
      <MenuSection />
      <VisitSection />
      <ContactSection />
      <ReviewSection />
      <SiteFooter />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#b89757]/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(184,151,87,0.2),transparent_35%),linear-gradient(to_bottom,rgba(11,13,11,0.3),#0b0d0b)]" />
      <WarmPattern />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_.95fr] md:px-8 lg:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#b89757]/50 bg-[#b89757]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-[#ead39a]">
            <Home className="h-4 w-4" />
            Local village fish & chips
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Traditional Fish & Chips in the Village
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Stonehouse’s is a local village fish and chip shop, family run since
            1999. Freshly cooked food, proper chip-shop favourites and friendly
            service from a shop at the heart of the community.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black shadow-lg shadow-[#b89757]/20 transition hover:bg-[#d4b56b]"
            >
              <Utensils className="h-5 w-5" />
              View Menu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Order / Enquire
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Family run since 1999", "Freshly cooked", "Local favourite"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-zinc-200"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-[#b89757]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
            <Image
              src="/images/stonehouses-shop-front.jpg"
              alt="Stonehouse’s Village Fish and Chips shop front"
              width={1200}
              height={900}
              className="aspect-[4/3] rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    { icon: Fish, title: "Traditional & Delicious", text: "Proper chip-shop favourites cooked fresh." },
    { icon: Sparkles, title: "Freshly Cooked", text: "Made to order with care and consistency." },
    { icon: Heart, title: "Local Favourite", text: "A village shop with loyal local support." },
    { icon: Users, title: "Friendly Service", text: "Straightforward food and friendly faces." },
  ];

  return (
    <section className="border-b border-white/10 bg-[#f5efe3] px-5 py-5 text-[#161814] md:px-8">
      <div className="mx-auto grid max-w-7xl gap-3 md:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <Icon className="mb-3 h-8 w-8 text-[#4d5a33]" />
            <h2 className="font-serif text-xl font-black">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-black/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
            Family Run Since 1999
          </p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
            A proper local village chippy.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-300">
            <p>
              Stonehouse’s is built around simple things done properly: fresh
              fish, good chips, friendly service and a menu locals can rely on.
            </p>
            <p>
              Whether you are calling in for tea, collecting a family order or
              grabbing something quick, the aim is the same every time: proper
              fish and chips without fuss.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#b89757]/20 bg-white/[0.04] p-8">
          <h3 className="font-serif text-3xl font-black">Why people come back</h3>
          <div className="mt-6 grid gap-4">
            {[
              "Freshly cooked chip-shop favourites",
              "Local village service",
              "Family-friendly food",
              "Easy ordering and enquiries",
              "Simple menu with proper classics",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-4 font-bold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="border-y border-white/10 bg-zinc-950/80 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
            Our Menu
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
            Freshly cooked favourites
          </h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Add your exact prices and menu items here once we have a clear photo
            of the current board.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {menuSections.map((section) => (
            <div key={section.title} className="rounded-3xl border border-[#b89757]/30 bg-[#0b0d0b] p-5 shadow-xl">
              <h3 className="rounded-2xl bg-[#b89757]/10 px-4 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-[#ead39a]">
                {section.title}
              </h3>

              <div className="mt-5 space-y-3">
                {section.items.map(([name, price]) => (
                  <div key={name} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0">
                    <span className="text-sm font-medium text-zinc-100">{name}</span>
                    <span className="shrink-0 font-black text-white">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-zinc-500">
          Prices and availability can vary. Please check in-store or message us
          for the latest menu information.
        </p>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
          <MapPin className="mb-4 h-8 w-8 text-[#d4b56b]" />
          <h2 className="font-serif text-4xl font-black">Visit Stonehouse’s</h2>
          <div className="mt-5 space-y-3 text-zinc-300">
            <p>{BUSINESS_NAME}</p>
            <p>Add full address here</p>
            <p>Add postcode here</p>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black transition hover:bg-[#d4b56b]"
          >
            Open in Google Maps
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
          <Clock className="mb-4 h-8 w-8 text-[#d4b56b]" />
          <h2 className="font-serif text-4xl font-black">Opening Hours</h2>
          <div className="mt-6 space-y-3 text-zinc-300">
            <OpeningRow day="Monday" time="Add hours" />
            <OpeningRow day="Tuesday" time="Add hours" />
            <OpeningRow day="Wednesday" time="Add hours" />
            <OpeningRow day="Thursday" time="Add hours" />
            <OpeningRow day="Friday" time="Add hours" />
            <OpeningRow day="Saturday" time="Add hours" />
            <OpeningRow day="Sunday" time="Add hours" />
          </div>
          <p className="mt-6 text-sm leading-6 text-zinc-500">
            Opening times can vary on bank holidays. Message us before travelling
            if you are unsure.
          </p>
        </div>
      </div>
    </section>
  );
}

function OpeningRow({ day, time }: { day: string; time: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
      <span className="font-bold text-white">{day}</span>
      <span>{time}</span>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="border-y border-white/10 bg-zinc-950/80 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
            Contact Stonehouse’s
          </p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
            Orders, enquiries and local questions.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            For opening questions, larger orders or anything else, message us on
            Facebook or email. Add your preferred contact route once confirmed.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black transition hover:bg-[#d4b56b]"
            >
              <MessageCircle className="h-5 w-5" />
              Message on Facebook
            </a>
            <a
              href={`mailto:${BUSINESS_EMAIL}?subject=Stonehouse's%20enquiry`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <ShieldCheck className="mb-4 h-8 w-8 text-[#d4b56b]" />
          <h3 className="font-serif text-3xl font-black">Useful to include</h3>
          <div className="mt-6 grid gap-3">
            {[
              "Collection time",
              "Approximate order size",
              "Any allergies or dietary questions",
              "Whether it is a larger local order",
            ].map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#b89757] font-black text-black">
                  {index + 1}
                </div>
                <span className="self-center font-bold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewSection() {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="rounded-[2rem] border border-[#b89757]/25 bg-white/[0.04] p-8 text-center shadow-2xl">
        <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
          <Star className="h-4 w-4" />
          Google Reviews
        </p>
        <h2 className="mt-3 font-serif text-4xl font-black">
          Enjoyed your food?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-300">
          Reviews help other local customers find Stonehouse’s. If you enjoyed
          your order, a quick Google review makes a real difference.
        </p>
        <a
          href={GOOGLE_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black transition hover:bg-[#d4b56b]"
        >
          Leave a Google Review
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function WarmPattern() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 100%, transparent 12px, rgba(255,255,255,.6) 13px, rgba(255,255,255,.6) 14px, transparent 15px)",
        backgroundSize: "44px 28px",
      }}
    />
  );
}
