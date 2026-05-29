import Link from "next/link";

const PHONE_HREF = "tel:+441287658777";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0b]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="shrink-0 font-serif text-xl font-black tracking-wide md:text-2xl">
          Stonehouse’s
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-300 md:flex">
          <Link className="hover:text-white" href="#menu">
            Menu
          </Link>
          <Link className="hover:text-white" href="#gallery">
            Food
          </Link>
          <Link className="hover:text-white" href="#visit">
            Visit
          </Link>
          <Link className="hover:text-white" href="#contact">
            Contact
          </Link>
          <Link className="hover:text-white" href="#reviews">
            Reviews
          </Link>
        </nav>

        <a
          href={PHONE_HREF}
          className="shrink-0 rounded-xl bg-[#b89757] px-4 py-2 text-sm font-black text-black hover:bg-[#d4b56b]"
        >
          Call Now
        </a>
      </div>

      <nav className="border-t border-white/10 px-3 py-2 md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2 text-center text-xs font-black text-zinc-300">
          <Link href="#menu" className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 hover:text-white">
            Menu
          </Link>
          <Link href="#gallery" className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 hover:text-white">
            Food
          </Link>
          <Link href="#visit" className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 hover:text-white">
            Visit
          </Link>
          <a href={PHONE_HREF} className="rounded-xl border border-[#b89757]/40 bg-[#b89757]/10 px-2 py-2 text-[#ead39a] hover:text-white">
            Call
          </a>
        </div>
      </nav>
    </header>
  );
}
