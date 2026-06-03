import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  ExternalLink,
  Fish,
  Heart,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Utensils,
  Users,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const BUSINESS_NAME = "Stonehouse’s Fish & Chips";
const SITE_URL = "https://www.stonehousesfishandchips.co.uk";
const BUSINESS_EMAIL = "info@fishandchipsredcar.co.uk";
const PHONE_DISPLAY = "01287 658777";
const PHONE_HREF = "tel:+441287658777";
const FACEBOOK_URL = "https://www.facebook.com/";
const GOOGLE_REVIEW_URL = "https://g.page/r/CXD-f1GqG3NPEBM/review";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Stonehouse%27s%20Fish%20and%20Chips%2C%201%20High%20Street%2C%20Lingdale%2C%20Saltburn%2C%20TS12%203DZ";

const galleryImages = [
  {
    src: "/images/stonehouses-fish-and-chips-branded.png",
    alt: "Stonehouse’s fish and chips with sides",
    title: "Proper fish and chips",
  },
  {
    src: "/images/stonehouses-menu-board-fish-chips.jpg",
    alt: "Stonehouse’s fish and chips menu board",
    title: "Fish, chips and meal deals",
  },
  {
    src: "/images/stonehouses-menu-board-chicken-sides.jpg",
    alt: "Stonehouse’s chicken, sides and sauces menu board",
    title: "Chicken, sides and sauces",
  },
  {
    src: "/images/stonehouses-shop-interior.jpg",
    alt: "Inside Stonehouse’s Fish and Chips in Lingdale",
    title: "Modern village shop",
  },
  {
    src: "/images/stonehouses-fish-lift.jpg",
    alt: "Freshly battered fish being lifted from the fryer",
    title: "Fresh from the fryer",
  },
  {
    src: "/images/stonehouses-fish-and-chips-box.png",
    alt: "Fish and chips served with mushy peas and sauce",
    title: "Chip-shop favourites",
  },
  {
    src: "/images/stonehouses-chicken-burger-and-chips.png",
    alt: "Chicken burger and chips from Stonehouse’s",
    title: "Burgers and chips",
  },
  {
    src: "/images/stonehouses-spicy-chips.png",
    alt: "Spicy chips with sliced chilli",
    title: "Loaded favourites",
  },
];

const menuSections = [
  {
    title: "Fish & Chips",
    items: [
      ["Small Cod & Chips", "£8.80"],
      ["Large Cod & Chips", "£10.00"],
      ["Large Hake & Chips", "£7.80"],
      ["Small Cod", "£6.40"],
      ["Large Cod", "£7.30"],
      ["Fish Bites", "£6.10"],
    ],
  },
  {
    title: "Meal Deals",
    items: [
      ["Small Cod Meal Deal", "£11.00"],
      ["Large Cod Meal Deal", "£12.00"],
      ["Sausage Meal Deal", "£6.00"],
      ["Kids Meal", "£4.20"],
      ["Kids Fish & Chips", "£4.70"],
      ["Scampi, Chips & Peas", "£8.10"],
    ],
  },
  {
    title: "Chips & Classics",
    items: [
      ["Small Chips", "£2.50"],
      ["Large Chips", "£3.00"],
      ["Salt n Pepper Chips", "£2.90"],
      ["Cheesy Chips", "£3.50"],
      ["Small Sausage", "£1.60"],
      ["Large Sausage", "£2.20"],
      ["Footlong Sausage", "£3.20"],
      ["Spam Fritter", "£1.80"],
      ["Battered Beef Burger", "£2.00"],
      ["Chip Buttie", "£3.00"],
    ],
  },
  {
    title: "Chicken & Extras",
    items: [
      ["Southern Fried Chicken Goujons (4)", "£4.00"],
      ["Chicken Burger in a Bun", "£3.50"],
      ["Chicken Nuggets (6)", "£2.50"],
      ["Popcorn Chicken", "£3.50"],
      ["Shredded Chilli Chicken", "£3.50"],
      ["Mozzarella Dipperz & Dip", "£2.90"],
      ["Fish Pattie", "£2.50"],
    ],
  },
  {
    title: "Sides & Sauces",
    items: [
      ["Curry", "£1.50"],
      ["Mushy Peas", "£1.50"],
      ["Gravy", "£1.50"],
      ["Homemade Garlic Sauce", "£1.10"],
      ["Homemade Tartare", "£1.10"],
      ["Heinz Tomato Sauce", "50p"],
      ["Breadbun", "60p"],
      ["Onion Rings (4)", "£1.50"],
      ["Pineapple Ring", "£1.00"],
      ["Pickled Egg", "90p"],
    ],
  },
  {
    title: "Drinks",
    items: [
      ["Cans & Water", "£1.20"],
      ["Hot Drinks", "£1.10"],
      ["Kids Cup Drinks", "60p"],
      ["Vinegar Bottle", "£1.50"],
    ],
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS_NAME,
  url: SITE_URL,
  email: BUSINESS_EMAIL,
  telephone: "+44 1287 658777",
  image: [
    `${SITE_URL}/images/stonehouses-shop-front.jpg`,
    `${SITE_URL}/images/stonehouses-fish-and-chips-branded.png`,
    `${SITE_URL}/images/stonehouses-shop-interior.jpg`,
  ],
  priceRange: "£",
  servesCuisine: ["Fish and chips", "British", "Takeaway"],
  foundingDate: "1999",
  acceptsReservations: false,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 High Street",
    addressLocality: "Lingdale",
    addressRegion: "Saltburn",
    postalCode: "TS12 3DZ",
    addressCountry: "GB",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer enquiries",
      telephone: "+44 1287 658777",
      email: BUSINESS_EMAIL,
      availableLanguage: "en-GB",
    },
  ],
  description:
    "Stonehouse’s Fish & Chips is a local village fish and chip shop in Lingdale, family run since 1999, serving freshly cooked fish and chips with friendly service.",
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
      <GallerySection />
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
            1 High Street, Lingdale
          </p>

          <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Traditional Fish & Chips in Lingdale
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Stonehouse’s is a local village fish and chip shop, family run since
            1999. Freshly cooked food, proper chip-shop favourites and friendly
            service from a shop at the heart of Lingdale.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/fish-and-chips-lingdale"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              Fish & Chips Lingdale
            </Link>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black shadow-lg shadow-[#b89757]/20 transition hover:bg-[#d4b56b]"
            >
              <Utensils className="h-5 w-5" />
              View Menu
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Family run since 1999", "Freshly cooked", "Local village favourite"].map(
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
              src="/images/stonehouses-fish-and-chips-branded.png"
              alt="Stonehouse’s fish and chips"
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
    { icon: Fish, title: "Traditional Fish & Chips", text: "Proper chip-shop favourites cooked fresh." },
    { icon: Sparkles, title: "Freshly Cooked", text: "Made with care and served hot." },
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
              Stonehouse’s is built around simple things done properly: freshly
              cooked fish, good chips, friendly service and a menu locals can
              rely on.
            </p>
            <p>
              Whether you are calling in for tea, collecting a family order or
              grabbing something quick, the aim is the same every time: proper
              fish and chips without fuss.
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[#b89757]/20 bg-white/[0.04] shadow-2xl">
          <Image
            src="/images/stonehouses-shop-interior.jpg"
            alt="Inside Stonehouse’s Fish and Chips"
            width={1200}
            height={900}
            className="aspect-[4/3] object-cover"
          />
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
            Fish and chips, chip-shop classics, sides, sauces and family
            favourites from Stonehouse’s in Lingdale.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
          Menu prices shown from the current board. Prices and availability can vary. Please check in-store or call the shop
          for the latest menu information.
        </p>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
          Fresh From Stonehouse’s
        </p>
        <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
          See what we serve
        </h2>
        <p className="mt-4 leading-7 text-zinc-300">
          A mix of real shop photos and polished food imagery to show the range:
          fish and chips, burgers, sauces, specials and freshly cooked battered
          fish.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((photo) => (
          <div
            key={photo.src}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={900}
              height={700}
              className="aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="border-t border-white/10 p-4">
              <p className="font-bold text-white">{photo.title}</p>
            </div>
          </div>
        ))}
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
            <p>1 High Street, Lingdale</p>
            <p>Saltburn, TS12 3DZ</p>
            <p>
              <a href={PHONE_HREF} className="font-bold text-[#d4b56b] hover:text-[#ead39a]">
                {PHONE_DISPLAY}
              </a>
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black transition hover:bg-[#d4b56b]"
            >
              Open in Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call the Shop
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
          <Image
            src="/images/stonehouses-shop-front.jpg"
            alt="Stonehouse’s shop front on High Street in Lingdale"
            width={1200}
            height={900}
            className="aspect-[4/3] object-cover"
          />
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
        <Clock className="mb-4 h-8 w-8 text-[#d4b56b]" />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
              Opening Times
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black">
              Open for lunch and evening service
            </h2>
            <p className="mt-4 leading-7 text-zinc-300">
              Stonehouse’s opens for traditional lunch and teatime chip-shop
              service through the week, with extended weekend hours on Friday and
              Saturday. Closed Sunday and Monday.
            </p>
          </div>

          <div className="space-y-3 text-zinc-300">
            <OpeningRow day="Monday" time="Closed" />
            <OpeningRow day="Tuesday" time="11:30am–1pm / 4:30pm–8pm" />
            <OpeningRow day="Wednesday" time="11:30am–1pm / 4:30pm–8pm" />
            <OpeningRow day="Thursday" time="11:30am–1pm / 4:30pm–8pm" />
            <OpeningRow day="Friday" time="11am–1pm / 4pm–8pm" />
            <OpeningRow day="Saturday" time="11:30am–1pm / 4pm–8pm" />
            <OpeningRow day="Sunday" time="Closed" />
            <p className="pt-3 text-sm leading-6 text-zinc-500">
              Opening times can vary on bank holidays. Call before travelling if
              you are unsure.
            </p>
          </div>
        </div>
      </div>
    </section>
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

function ContactSection() {
  return (
    <section id="contact" className="border-y border-white/10 bg-zinc-950/80 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-[#d4b56b]">
            Contact Stonehouse’s
          </p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
            Call ahead, order for collection or ask us a question.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            For collection orders, larger family orders, local group orders,
            opening questions or allergy enquiries, call the shop directly. You
            can also message us on Facebook or email.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black transition hover:bg-[#d4b56b]"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-5 w-5" />
              Facebook
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
          <h3 className="font-serif text-3xl font-black">When contacting us</h3>
          <p className="mt-3 leading-7 text-zinc-300">
            A few details help us deal with orders and enquiries quicker,
            especially at busy service times.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "Preferred collection time",
              "Name for the order",
              "What you would like to order",
              "Any allergy or dietary questions",
              "Whether it is a larger family, school or local group order",
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
