"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<"personal" | "business" | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null);
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const renderDropdown = (
    key: "personal" | "business",
    label: string,
    items: string[][]
  ) => (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpenMenu(openMenu === key ? null : key)}
        className="inline-flex items-center gap-1 py-3 font-medium hover:text-[#002c5f]"
        aria-expanded={openMenu === key}
      >
        {label}
        <span className={`text-xs transition ${openMenu === key ? "rotate-180" : ""}`}>▾</span>
      </button>

      {openMenu === key ? (
        <div className="absolute left-0 top-full z-50 min-w-64 rounded-2xl border border-black/10 bg-white p-2 shadow-xl">
          {items.map(([title, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpenMenu(null)}
              className="block rounded-xl px-4 py-3 text-sm text-[#263847] transition hover:bg-[#edf2f7] hover:text-[#002c5f]"
            >
              {title}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Wilson Insurance of Florida home" onClick={() => setOpenMenu(null)}>
          <Image
            src="/brand/wilson-wide.webp"
            alt="Wilson Insurance of Florida"
            width={420}
            height={127}
            priority
            className="h-auto w-[220px] sm:w-[260px]"
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-[#263847] xl:flex">
          {renderDropdown("personal", "Personal", personal)}
          {renderDropdown("business", "Business", business)}
          <Link href="/pet-insurance" onClick={() => setOpenMenu(null)} className="hover:text-[#002c5f]">Pet</Link>
          <Link href="/windshield-replacement" onClick={() => setOpenMenu(null)} className="hover:text-[#002c5f]">Windshield Replacement</Link>
          <Link href="/blog" onClick={() => setOpenMenu(null)} className="hover:text-[#002c5f]">Blog</Link>
          <Link href="/about" onClick={() => setOpenMenu(null)} className="hover:text-[#002c5f]">About</Link>
          <Link href="/contact" onClick={() => setOpenMenu(null)} className="hover:text-[#002c5f]">Contact Us</Link>
        </nav>

        <Link
          href="/contact"
          onClick={() => setOpenMenu(null)}
          className="rounded-full bg-[#002c5f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b3f7a]"
        >
          Get a Quote
        </Link>
      </div>

      <div className="border-t border-black/5 px-5 py-2 xl:hidden">
        <nav className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#263847]">
          {renderDropdown("personal", "Personal", personal)}
          {renderDropdown("business", "Business", business)}
          <Link href="/pet-insurance" onClick={() => setOpenMenu(null)}>Pet</Link>
          <Link href="/windshield-replacement" onClick={() => setOpenMenu(null)}>Windshield</Link>
          <Link href="/blog" onClick={() => setOpenMenu(null)}>Blog</Link>
          <Link href="/about" onClick={() => setOpenMenu(null)}>About</Link>
          <Link href="/contact" onClick={() => setOpenMenu(null)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
