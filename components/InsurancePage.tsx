import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  bullets: { title: string; text: string }[];
  note?: string;
};

export default function InsurancePage({ eyebrow, title, intro, bullets, note }: Props) {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#001f3f] to-[#002c5f] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">{intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-6 py-3.5 text-center font-semibold text-[#002c5f]">Request a Quote</Link>
            <a href="tel:8638013982" className="rounded-full border border-white/30 px-6 py-3.5 text-center font-semibold">Call 863-801-3982</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {bullets.map((item) => (
            <article key={item.title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
              <div className="mb-4 h-1.5 w-10 rounded-full bg-gradient-to-r from-[#002c5f] to-[#a2aaad]" />
              <h2 className="text-2xl font-semibold text-[#1f2f3e]">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#68747e]">{item.text}</p>
            </article>
          ))}
        </div>
        {note ? <p className="mt-8 rounded-2xl bg-[#eef2f6] p-5 text-sm leading-6 text-[#5e6a74]">{note}</p> : null}
      </section>

      <section className="bg-[#eaf0f6]">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to talk through your options?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#64717d]">Tell us what you’re trying to protect and we’ll help you take the next step.</p>
          <Link href="/contact" className="mt-7 inline-block rounded-full bg-[#002c5f] px-6 py-3.5 font-semibold text-white">Start Here</Link>
        </div>
      </section>
    </main>
  );
}
