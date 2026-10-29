import Link from "next/link";

const personal = [
  ["Home", "/home-insurance"],
  ["Seasonal / Secondary", "/seasonal-secondary-home"],
  ["Renters", "/renters-insurance"],
  ["Flood", "/flood-insurance"],
  ["Boat", "/boat-insurance"],
  ["Auto", "/auto-insurance"],
  ["RV", "/rv-insurance"],
  ["Motorcycle", "/motorcycle-insurance"],
];

const business = [
  ["Commercial General Liability", "/commercial-general-liability"],
  ["Commercial Property", "/commercial-property"],
  ["Commercial Auto", "/commercial-auto"],
  ["Small Business", "/small-business-insurance"],
];

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: string[][];
}) {
  return (
    <details className="group relative">
      <summary className="cursor-pointer list-none py-3 font-medium marker:hidden">
        <span className="inline-flex items-center gap-1">
          {label}
          <span className="text-xs transition group-open:rotate-180">▾</span>
        </span>
      </summary>
      <div className="absolute left-0 top-full z-50 min-w-64 rounded-2xl border border-black/10 bg-white p-2 shadow-xl">
        {items.map(([title, href]) => (
          <Link
            key={href}
            href={href}
            className="block rounded-xl px-4 py-3 text-sm text-[#29454b] transition hover:bg-[#eef3ef] hover:text-[#c56b38]"
          >
            {title}
          </Link>
        ))}
      </div>
    </details>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-4 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Wilson Insurance of Florida home">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d7a35c] bg-[#17343b] text-lg font-bold text-white">W</div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#17343b]">Wilson Insurance</div>
            <div className="text-xs uppercase tracking-[0.22em] text-[#65777c]">of Florida</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
          <Dropdown label="Personal" items={personal} />
          <Dropdown label="Business" items={business} />
          <Link href="/pet-insurance" className="hover:text-[#c56b38]">Pet</Link>
          <Link href="/windshield-replacement" className="hover:text-[#c56b38]">Windshield Replacement</Link>
          <Link href="/blog" className="hover:text-[#c56b38]">Blog</Link>
          <Link href="/about" className="hover:text-[#c56b38]">About</Link>
          <Link href="/contact" className="hover:text-[#c56b38]">Contact Us</Link>
        </nav>

        <Link href="/contact" className="rounded-full bg-[#d8743b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#bd6130]">
          Get a Quote
        </Link>
      </div>

      <div className="border-t border-black/5 px-6 py-2 lg:hidden">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <Dropdown label="Personal" items={personal} />
          <Dropdown label="Business" items={business} />
          <Link href="/pet-insurance">Pet</Link>
          <Link href="/windshield-replacement">Windshield</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
