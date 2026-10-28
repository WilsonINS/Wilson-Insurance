import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Wilson Insurance of Florida home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7a35c] bg-[#17343b] text-lg font-bold text-white">W</div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#17343b]">Wilson Insurance</div>
            <div className="text-xs uppercase tracking-[0.22em] text-[#65777c]">of Florida</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <Link href="/home-insurance">Home</Link>
          <Link href="/auto-insurance">Auto</Link>
          <Link href="/business-insurance">Business</Link>
          <Link href="/flood-insurance">Flood</Link>
          <Link href="/boat-insurance">Boat</Link>
          <Link href="/pet-insurance">Pet</Link>
          <Link href="/about">About</Link>
        </nav>
        <Link href="/contact" className="rounded-full bg-[#d8743b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#bd6130]">Get a Quote</Link>
      </div>
    </header>
  );
}