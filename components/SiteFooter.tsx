import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm text-[#66787c] md:grid-cols-4 lg:px-8">
        <div>
          <div className="font-semibold text-[#17343b]">Wilson Insurance of Florida</div>
          <div className="mt-2">Okeechobee, Florida</div>
          <div className="mt-1">Mon–Fri · 8:30 AM–5:00 PM</div>
          <a href="tel:8638013982" className="mt-2 inline-block font-semibold text-[#17343b]">863-801-3982</a>
        </div>

        <div>
          <div className="font-semibold text-[#17343b]">Personal</div>
          <div className="mt-3 grid gap-2">
            <Link href="/home-insurance">Home</Link>
            <Link href="/seasonal-secondary-home">Seasonal / Secondary</Link>
            <Link href="/renters-insurance">Renters</Link>
            <Link href="/flood-insurance">Flood</Link>
            <Link href="/boat-insurance">Boat</Link>
            <Link href="/auto-insurance">Auto</Link>
            <Link href="/rv-insurance">RV</Link>
            <Link href="/motorcycle-insurance">Motorcycle</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-[#17343b]">Business</div>
          <div className="mt-3 grid gap-2">
            <Link href="/commercial-general-liability">Commercial General Liability</Link>
            <Link href="/commercial-property">Commercial Property</Link>
            <Link href="/commercial-auto">Commercial Auto</Link>
            <Link href="/small-business-insurance">Small Business</Link>
          </div>
        </div>

        <div>
          <div className="font-semibold text-[#17343b]">More</div>
          <div className="mt-3 grid gap-2">
            <Link href="/pet-insurance">Pet</Link>
            <Link href="/windshield-replacement">Windshield Replacement</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs leading-5 text-[#78888b] lg:px-8">
          Submitting a request does not bind, alter, or cancel coverage. Coverage is subject to underwriting, eligibility, availability, policy terms, conditions, and exclusions.
        </div>
      </div>
    </footer>
  );
}
