import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="bg-[#17343b] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1af68]">Wilson Insurance Blog</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">Insurance explained in plain English.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">Helpful articles about Florida personal and commercial insurance, coverage questions, claims, and risk management.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Home Insurance", "What Florida homeowners should understand before comparing policies."],
            ["Auto Insurance", "A plain-English look at common auto coverage terms and decisions."],
            ["Business Insurance", "Coverage questions Florida business owners should ask before renewal."],
          ].map(([title, text]) => (
            <article key={title} className="rounded-3xl border border-black/10 bg-white p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.16em] text-[#c56b38]">Coming soon</div>
              <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
              <p className="mt-3 leading-7 text-[#68797d]">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact" className="font-semibold text-[#c56b38]">Have an insurance question? Contact us →</Link>
        </div>
      </section>
    </main>
  );
}