import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#001f3f] to-[#002c5f] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">About Wilson Insurance</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">Local service. Clear conversations. Florida insurance.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">Wilson Insurance of Florida is an independent insurance agency focused on helping individuals, families, and businesses understand their options and make informed coverage decisions.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-6 py-18 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-[#002c5f]" />
            <h2 className="text-3xl font-semibold">What we believe</h2>
            <p className="mt-4 leading-8 text-[#68747e]">Insurance should be explained in plain language. Our job is to understand the risk, explain the available options, and help the customer make a decision—not overwhelm them with jargon.</p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="mb-4 h-1.5 w-10 rounded-full bg-[#002c5f]" />
            <h2 className="text-3xl font-semibold">What we handle</h2>
            <p className="mt-4 leading-8 text-[#68747e]">We work with personal and commercial insurance needs including home, auto, flood, boat, pet, contractors, commercial property, commercial auto, and other business exposures.</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact" className="inline-block rounded-full bg-[#002c5f] px-6 py-3.5 font-semibold text-white">Talk With Us</Link>
        </div>
      </section>
    </main>
  );
}