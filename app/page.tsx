import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Home", href: "/home-insurance", description: "Primary, seasonal, secondary and renters coverage options." },
  { title: "Auto", href: "/auto-insurance", description: "Personal auto coverage for Florida drivers and vehicles." },
  { title: "Flood", href: "/flood-insurance", description: "NFIP and private flood options for eligible properties." },
  { title: "Boat", href: "/boat-insurance", description: "Protection for boats, equipment, trailers and liability." },
  { title: "Business", href: "/small-business-insurance", description: "Coverage solutions for Florida businesses and contractors." },
  { title: "Pet", href: "/pet-insurance", description: "Help prepare for unexpected veterinary expenses." },
];

const commercial = ["General Liability", "Commercial Property", "Commercial Auto", "Small Business"];

export default function Home() {
  return (
    <main className="bg-[#fffaf4] text-[#172d32]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#075d67] via-[#0b7079] to-[#0f7f87] text-white">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#ff9638]/25 blur-3xl" />
        <div className="absolute -right-12 bottom-0 h-80 w-80 rounded-full bg-[#ff4f6f]/18 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium">
              Your local Florida insurance agency
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Insurance for Florida life.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Personal and business insurance with local service, straightforward explanations, and coverage options built around how you actually live and work.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-[#ff9638] px-6 py-3.5 text-center font-semibold text-[#27131a] transition hover:bg-[#ffad5f]">
                Start a Quote
              </Link>
              <a href="tel:8638013982" className="rounded-full border border-white/35 px-6 py-3.5 text-center font-semibold transition hover:bg-white/10">
                Call 863-801-3982
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75">
              <span>Independent agency</span>
              <span>Florida focused</span>
              <span>Personal service</span>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[520px] items-center justify-center">
            <div className="absolute h-[88%] w-[88%] rounded-full bg-[#ff9638]/20 blur-3xl" />
            <Image
              src="/brand/wilson-circle.webp"
              alt="Wilson Insurance of Florida logo"
              width={520}
              height={520}
              priority
              className="relative h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b7079]">What can we help you insure?</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Personal coverage and business protection in one local agency.</h2>
          <p className="mt-5 text-lg leading-8 text-[#62767a]">Choose a starting point and we’ll walk you through the available options.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-3xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#ff9638] hover:shadow-xl">
              <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-[#0b7079] to-[#ff9638]" />
              <h3 className="mt-6 text-2xl font-semibold">{service.title} Insurance</h3>
              <p className="mt-3 leading-7 text-[#68797d]">{service.description}</p>
              <Link href={service.href} className="mt-6 inline-block text-sm font-semibold text-[#0b7079]">Learn more →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ff8730]">Why Wilson</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Local service without the call-center feel.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#68797d]">
              We focus on understanding the risk, explaining the options in plain language, and helping you make an informed decision.
            </p>
            <Link href="/about" className="mt-6 inline-block font-semibold text-[#0b7079]">About the agency →</Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["Florida focused", "A local agency built around Florida personal and commercial insurance."],
              ["Independent options", "Access to multiple markets instead of being tied to one carrier."],
              ["Straight answers", "Coverage explained clearly without making insurance harder than it needs to be."],
              ["One relationship", "Personal and business insurance can start with the same local agency."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl bg-[#fff7ee] p-6">
                <div className="mb-4 h-1.5 w-10 rounded-full bg-[#ff9638]" />
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-[#68797d]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf6f6]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0b7079]">Business insurance</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Coverage built around how your business actually operates.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#66787c]">From contractors to commercial auto, we help identify the exposures first and then the coverage options.</p>
            <Link href="/small-business-insurance" className="mt-8 inline-block rounded-full bg-[#0b7079] px-6 py-3.5 font-semibold text-white">Explore Business Insurance</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {commercial.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0df] font-bold text-[#ff8730]">✓</span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#0b6771] px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#ffad5f]">Ready when you are</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Let’s find the right coverage.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">Tell us what you need insured and we’ll help you take the next step.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a href="tel:8638013982" className="rounded-full border border-white/30 px-6 py-3.5 text-center font-semibold">863-801-3982</a>
            <Link href="/contact" className="rounded-full bg-[#ff9638] px-6 py-3.5 text-center font-semibold text-[#27131a]">Request a Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
