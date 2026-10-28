import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 text-sm text-[#66787c] md:grid-cols-3 lg:px-8">
        <div>
          <div className="font-semibold text-[#17343b]">Wilson Insurance of Florida</div>
          <div className="mt-2">Okeechobee, Florida</div>
          <div className="mt-1">Mon–Fri · 8:30 AM–5:00 PM</div>
          <a href="tel:8638013982" className="mt-2 inline-block font-semibold text-[#17343b]">863-801-3982</a>
        </div>
        <div className="space-y-2 md:text-center">
          <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 md:justify-center">
            <Link href="/home-insurance">Home</Link>
            <Link href="/auto-insurance">Auto</Link>
            <Link href="/business-insurance">Business</Link>
            <Link href="/flood-insurance">Flood</Link>
            <Link href="/boat-insurance">Boat</Link>
            <Link href="/pet-insurance">Pet</Link>
          </div>
          <div className="flex flex-wrap justify-start gap-x-4 gap-y-2 md:justify-center">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
          <div>WilsonIF.com</div>
        </div>
        <div className="md:text-right">
          <div>Submitting a request does not bind, alter, or cancel coverage.</div>
          <div className="mt-2">Coverage is subject to underwriting, eligibility, availability, policy terms, conditions, and exclusions.</div>
        </div>
      </div>
    </footer>
  );
}