import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#001f3f] to-[#002c5f] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Windshield replacement</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">Need help with a damaged windshield?</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">We can help you review your auto policy and understand the next steps for a windshield or auto-glass claim.</p>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-white px-6 py-3.5 font-semibold text-[#002c5f]">Contact the Agency</Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-6 px-6 py-16 md:grid-cols-2 lg:px-8">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-[#002c5f]" />
          <h2 className="text-2xl font-semibold">Before replacing the glass</h2>
          <p className="mt-4 leading-7 text-[#68747e]">Contact us or your insurer so we can confirm the coverage, deductible, claim process, and any carrier-specific requirements that apply to your policy.</p>
        </div>
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <div className="mb-4 h-1.5 w-10 rounded-full bg-[#002c5f]" />
          <h2 className="text-2xl font-semibold">Have this ready</h2>
          <p className="mt-4 leading-7 text-[#68747e]">Your policy information, vehicle year/make/model, location of the damage, and a brief description of how the glass was damaged can help move the conversation along.</p>
        </div>
      </section>
    </main>
  );
}