import Link from "next/link";

const services = [
  { title: "Home", href: "/home-insurance", description: "Coverage for your home, condo, or manufactured home.", icon: "⌂" },
  { title: "Auto", href: "/auto-insurance", description: "Personal auto coverage built around how you actually drive.", icon: "◆" },
  { title: "Business", href: "/business-insurance", description: "Practical coverage for Florida businesses and contractors.", icon: "▦" },
  { title: "Flood", href: "/flood-insurance", description: "Flood options for homeowners, landlords, and businesses.", icon: "≈" },
  { title: "Boat", href: "/boat-insurance", description: "Protection for boats, trailers, equipment, and liability.", icon: "◒" },
  { title: "Pet", href: "/pet-insurance", description: "Help prepare for unexpected veterinary expenses.", icon: "●" },
];

const commercial = ["Contractors", "Restaurants", "Trucking", "Property Owners", "Small Businesses"];

export default function Home() {
  return (
    <main className="bg-[#f7f7f2] text-[#19333a]">
      <section className="relative overflow-hidden bg-[#17343b] text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-[#f4b85f] blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-80px] h-96 w-96 rounded-full bg-[#3e7b81] blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm">Local Florida insurance agency</div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Florida insurance with a local point of view.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">Home, auto, business, flood, boat and pet insurance with personal service from an independent Florida agency.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="rounded-full bg-[#f2a153] px-6 py-3.5 text-center font-semibold text-[#17343b] transition hover:bg-[#ffc078]">Start a Quote</Link>
              <a href="tel:8638013982" className="rounded-full border border-white/30 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-white/10">Call 863-801-3982</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/70">
              <span>Independent agency</span><span>Florida focused</span><span>Personal service</span>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-b from-[#e69a55] via-[#db7850] to-[#376e75] shadow-2xl">
            <div className="absolute left-1/2 top-16 h-24 w-24 -translate-x-1/2 rounded-full bg-[#ffe0a5] shadow-[0_0_80px_rgba(255,221,164,.75)]" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-[#183f47]" />
            <div className="absolute inset-x-0 bottom-28 h-14 rounded-[50%] bg-[#5d9898]/80" />
            <div className="absolute bottom-20 left-7 h-40 w-3 rotate-[-9deg] rounded-full bg-[#17343b]" />
            <div className="absolute bottom-48 left-2 text-7xl">⌁</div>
            <div className="absolute bottom-6 right-7 rounded-2xl bg-white/92 p-5 text-[#17343b] shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7c8b8d]">Wilson Insurance</div>
              <div className="mt-1 text-2xl font-semibold">Florida coverage.</div>
              <div className="text-2xl font-semibold text-[#d26e38]">Local service.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c56b38]">What we insure</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#17343b] sm:text-5xl">Coverage for the things you work hard for.</h2>
          <p className="mt-5 text-lg leading-8 text-[#66787c]">Start with what you need. We’ll help you work through the available coverage options from there.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-3xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:border-[#d9a46d] hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef3ef] text-2xl font-semibold text-[#17343b]">{service.icon}</div>
              <h3 className="mt-6 text-2xl font-semibold">{service.title} Insurance</h3>
              <p className="mt-3 leading-7 text-[#68797d]">{service.description}</p>
              <Link href={service.href} className="mt-6 inline-block text-sm font-semibold text-[#c56b38]">Learn more →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c56b38]">Why Wilson</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Insurance should feel personal, not like a call center.</h2>
            <Link href="/about" className="mt-6 inline-block font-semibold text-[#c56b38]">About the agency →</Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              ["Local service", "Work with a Florida agency that understands the market you live and work in."],
              ["Multiple options", "As an independent agency, we can help compare available coverage options."],
              ["Straight answers", "Clear explanations without making insurance harder than it needs to be."],
              ["One relationship", "Home, auto and business insurance can all start with the same local agency."],
            ].map(([title, copy]) => (
              <div key={title} className="border-l-2 border-[#efb16d] pl-5">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-[#68797d]">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf0ec]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c56b38]">Commercial insurance</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Coverage built around how your business actually operates.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#66787c]">From contractors to commercial auto, we’ll help identify the exposures and coverage your operation needs.</p>
            <Link href="/business-insurance" className="mt-8 inline-block rounded-full bg-[#17343b] px-6 py-3.5 font-semibold text-white">Explore Business Insurance</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {commercial.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-white p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7e2ca] font-bold text-[#b85e31]">✓</span>
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-[#17343b] px-7 py-12 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1af68]">Ready when you are</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Let’s find the right coverage.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">Tell us what you need insured and we’ll help you take the next step.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a href="tel:8638013982" className="rounded-full border border-white/30 px-6 py-3.5 text-center font-semibold">863-801-3982</a>
            <Link href="/contact" className="rounded-full bg-[#f2a153] px-6 py-3.5 text-center font-semibold text-[#17343b]">Request a Quote</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
