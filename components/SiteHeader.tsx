import Image from "next/image";
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

function Dropdown({ label, items }: { label: string; items: string[][] }) {
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
            className="block rounded-xl px-4 py-3 text-sm text-[#18363c] transition hover:bg-[#eef7f7] hover:text-[#0c7079]"
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
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Wilson Insurance of Florida home">
          <Image
            src="/brand/wilson-wide.webp"
            alt="Wilson Insurance of Florida"
            width={420}
            height={127}
            priority
            className="h-auto w-[220px] sm:w-[260px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-[#182f34] xl:flex">
          <Dropdown label="Personal" items={personal} />
          <Dropdown label="Business" items={business} />
          <Link href="/pet-insurance" className="hover:text-[#0c7079]">Pet</Link>
          <Link href="/windshield-replacement" className="hover:text-[#0c7079]">Windshield Replacement</Link>
          <Link href="/blog" className="hover:text-[#0c7079]">Blog</Link>
          <Link href="/about" className="hover:text-[#0c7079]">About</Link>
          <Link href="/contact" className="hover:text-[#0c7079]">Contact Us</Link>
        </nav>

        <Link href="/contact" className="rounded-full bg-[#ff9638] px-5 py-3 text-sm font-semibold text-[#251218] transition hover:bg-[#ffad5f]">
          Get a Quote
        </Link>
      </div>

      <div className="border-t border-black/5 px-5 py-2 xl:hidden">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#18363c]">
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
