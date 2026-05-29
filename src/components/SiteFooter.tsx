import Link from "next/link";
import { ExternalLink, Mail, MessageCircle, Phone, Star } from "lucide-react";

const BUSINESS_EMAIL = "hello@stonehousesfishandchips.co.uk";
const FACEBOOK_URL = "https://www.facebook.com/";
const GOOGLE_REVIEW_URL = "https://g.page/r/CXD-f1GqG3NPEBM/review";
const PHONE_DISPLAY = "01287 658777";
const PHONE_HREF = "tel:+441287658777";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-sm text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.8fr_1.1fr]">
        <div>
          <h2 className="font-serif text-3xl font-black text-white">
            Stonehouse’s
          </h2>
          <p className="mt-3 max-w-md leading-7">
            A local village fish and chip shop in Lingdale, family run since
            1999. Freshly cooked food, friendly service and proper village
            takeaway favourites.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Visit</h3>
          <div className="mt-3 space-y-2">
            <p>Stonehouse’s Fish & Chips</p>
            <p>1 High Street</p>
            <p>Lingdale, Saltburn</p>
            <p>TS12 3DZ</p>
            <Link href="#menu" className="block text-[#d4b56b] hover:text-[#ead39a]">
              View Menu
            </Link>
            <Link href="#contact" className="block text-[#d4b56b] hover:text-[#ead39a]">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Orders & enquiries</h3>
          <p className="mt-3 leading-7">
            For opening questions, larger orders, local enquiries or
            accessibility questions, call the shop, message us on Facebook or
            email.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-4 py-3 font-black text-black hover:bg-[#d4b56b]"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 font-black text-white hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4" />
              Facebook
            </a>

            <a
              href={`mailto:${BUSINESS_EMAIL}?subject=Stonehouse's%20enquiry`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 font-black text-white hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-[#b89757]/25 bg-white/[0.04] p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-[#d4b56b]">
              <Star className="h-4 w-4" />
              Enjoyed your food?
            </p>
            <h3 className="mt-2 font-serif text-2xl font-black text-white">
              Leave Stonehouse’s a Google review
            </h3>
            <p className="mt-2 max-w-2xl leading-7">
              Reviews help local customers find us when searching for fish and
              chips in Lingdale and the surrounding villages.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#b89757] px-6 py-3 font-black text-black hover:bg-[#d4b56b]"
          >
            Leave a Google Review
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-zinc-600">
        © {new Date().getFullYear()} Stonehouse’s Fish & Chips. All rights reserved.
      </div>
    </footer>
  );
}
