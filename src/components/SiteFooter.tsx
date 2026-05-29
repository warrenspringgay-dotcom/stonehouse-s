import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

const BUSINESS_EMAIL = "hello@stonehousesfishandchips.co.uk";
const FACEBOOK_URL = "https://www.facebook.com/";
const GOOGLE_REVIEW_URL = "https://g.page/r/REPLACE_WITH_REVIEW_LINK/review";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-sm text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.8fr_1.1fr]">
        <div>
          <h2 className="font-serif text-3xl font-black text-white">
            Stonehouse’s
          </h2>
          <p className="mt-3 max-w-md leading-7">
            A local village fish and chip shop, family run since 1999. Freshly
            cooked food, friendly service and proper village takeaway favourites.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Visit</h3>
          <div className="mt-3 space-y-2">
            <p>Stonehouse’s Village Fish & Chips</p>
            <p>Add full address here</p>
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
            For opening questions, larger orders, local enquiries or accessibility
            questions, message us on Facebook or email.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#b89757] px-4 py-3 font-black text-black hover:bg-[#d4b56b]"
            >
              <MessageCircle className="h-4 w-4" />
              Message on Facebook
            </a>

            <a
              href={`mailto:${BUSINESS_EMAIL}?subject=Stonehouse's%20enquiry`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 font-black text-white hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>

          <div className="mt-4">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4b56b] hover:text-[#ead39a]"
            >
              Leave a Google review
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-zinc-600">
        © {new Date().getFullYear()} Stonehouse’s Village Fish & Chips. All rights reserved.
      </div>
    </footer>
  );
}
