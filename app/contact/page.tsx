export default function Page() {
  return (
    <main>
      <section className="bg-[#17343b] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f1af68]">Contact</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">Let’s talk about what you need insured.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">Call the agency or use the intake checklist below to prepare for a quote conversation.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-18 md:grid-cols-2 lg:px-8">
        <div className="rounded-3xl bg-white p-8">
          <h2 className="text-2xl font-semibold">Wilson Insurance of Florida</h2>
          <div className="mt-6 space-y-4 text-[#68797d]">
            <p><strong className="text-[#17343b]">Phone:</strong> <a href="tel:8638013982">863-801-3982</a></p>
            <p><strong className="text-[#17343b]">Hours:</strong> Monday–Friday, 8:30 AM–5:00 PM</p>
            <p><strong className="text-[#17343b]">Location:</strong> Okeechobee, Florida</p>
            <p><strong className="text-[#17343b]">Website:</strong> WilsonIF.com</p>
          </div>
          <a href="tel:8638013982" className="mt-8 inline-block rounded-full bg-[#d8743b] px-6 py-3.5 font-semibold text-white">Call Now</a>
        </div>
        <div className="rounded-3xl bg-[#eaf0ec] p-8">
          <h2 className="text-2xl font-semibold">Helpful information to have ready</h2>
          <ul className="mt-5 space-y-3 text-[#5e7377]">
            <li>• Current policy or declarations page, if available</li>
            <li>• Names and contact information</li>
            <li>• Property, vehicle, driver, or business details</li>
            <li>• Desired effective date</li>
            <li>• Prior claims or loss information</li>
            <li>• Questions about coverage or limits</li>
          </ul>
          <p className="mt-6 text-sm leading-6 text-[#66787c]">Do not send sensitive information such as Social Security numbers, payment-card information, or passwords through unsecured email or web forms.</p>
        </div>
      </section>
    </main>
  );
}