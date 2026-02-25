import Link from "next/link";
import Image from "next/image";
import SanityImage from "@/components/SanityImage";
import { getHomeContent } from "@/lib/content";

export default async function Home() {
  const content = await getHomeContent();

  return (
    <main>
      {/* ── Hero ── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden bg-gradient-to-b from-brand-purple-light/50 to-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight"
              >
                {content.hero.heading.split("PERFECTED!")[0]}
                <span className="text-brand-purple">PERFECTED!</span>
              </h1>
              <p className="mt-6 text-gray-500 text-lg leading-relaxed max-w-lg">
                {content.hero.subheading}
              </p>
              <Link
                href="/booking"
                className="inline-block mt-8 px-8 py-3 bg-brand-gold text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                {content.hero.ctaText}
              </Link>
            </div>
            <SanityImage
              image={content.hero.image}
              alt="Prerna applying makeup to a client"
              width={480}
              height={600}
              className="w-full max-w-md mx-auto md:mx-0 md:ml-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            id="services-heading"
            className="font-script text-4xl md:text-5xl text-brand-gold text-center"
          >
            Services
          </h2>
          <p className="text-center text-gray-400 text-sm tracking-wide mt-3 uppercase">
            Expert services for every stunning look you desire.
          </p>

          {/* Tabs */}
          <div
            role="tablist"
            aria-label="Service categories"
            className="flex justify-center gap-8 mt-10 mb-12"
          >
            {content.serviceCategories.map((tab, i) => (
              <button
                key={tab}
                role="tab"
                aria-selected={i === 0}
                className={`text-sm font-medium pb-2 border-b-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple ${
                  i === 0
                    ? "border-brand-purple text-brand-purple"
                    : "border-transparent text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.map((service) => (
              <div
                key={service._key}
                className="bg-brand-card/60 rounded-2xl p-5 flex flex-col items-center text-center"
              >
                <SanityImage
                  image={service.image}
                  alt={`${service.name} service`}
                  width={400}
                  height={400}
                  className="w-full rounded-xl"
                />
                <h3 className="mt-4 font-semibold text-gray-800">
                  {service.name}
                </h3>
                <p className="text-brand-purple font-bold mt-1">
                  {service.price}
                </p>
                <button className="mt-3 text-xs text-brand-purple border border-brand-purple rounded-full px-5 py-1.5 hover:bg-brand-purple hover:text-white transition-colors">
                  view more
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Book Your Look ── */}
      <section
        aria-labelledby="book-heading"
        className="py-16 md:py-20 bg-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-56 md:w-72 shrink-0" aria-hidden="true">
            <Image
              src="/images/orchid.png"
              alt=""
              width={600}
              height={800}
              className="w-full h-auto"
            />
          </div>

          <div className="text-center md:text-left flex-1">
            <h2
              id="book-heading"
              className="font-script text-4xl md:text-5xl text-brand-gold"
            >
              Book your Look
            </h2>
            <p className="mt-4 text-gray-400 uppercase text-sm tracking-wide max-w-xl">
              Schedule your session today and let us create your perfect look.
            </p>
            <Link
              href="/booking"
              className="inline-block mt-8 px-10 py-3 border-2 border-gray-800 text-gray-800 font-semibold tracking-wide hover:bg-gray-800 hover:text-white transition-colors"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-16 md:py-24 relative overflow-hidden"
      >
        <div
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/3 opacity-25 pointer-events-none"
          aria-hidden="true"
        >
          <Image
            src="/images/lily.png"
            alt=""
            width={500}
            height={350}
            className="w-[420px] h-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h2
            id="contact-heading"
            className="font-script text-4xl md:text-5xl text-brand-gold text-center"
          >
            Contact
          </h2>
          <p className="text-center text-gray-400 text-sm tracking-wide mt-3 uppercase mb-14">
            Let us know your requirements and we&apos;ll get back to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-brand-purple-light rounded-3xl p-12 md:p-16 flex items-center justify-center aspect-square max-w-sm mx-auto w-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <svg
                  className="w-16 h-16 text-brand-purple"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
                </svg>
              </div>
            </div>

            <form aria-label="Contact form" className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">
                    Name (First/Last)
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Name (First/Last)"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-budget" className="sr-only">
                  Total Budget
                </label>
                <input
                  id="contact-budget"
                  type="text"
                  placeholder="Total Budget"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple/30 focus:border-brand-purple transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-brand-purple text-white font-semibold px-8 py-3 rounded-lg hover:brightness-110 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-purple"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Features (purple bg) ── */}
      <section aria-label="Additional services" className="bg-brand-purple py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-purple-dark/80 rounded-2xl p-8 text-white">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">1 on 1 Makeup Lessons</h3>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Learn professional techniques with personalized one-on-one
              sessions tailored to your skill level and style goals.
            </p>
          </div>

          <div className="bg-brand-purple-dark/80 rounded-2xl p-8 text-white">
            <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Event</h3>
            <p className="mt-3 text-white/70 text-sm leading-relaxed">
              Group bookings and event makeup services for weddings, parties,
              and corporate events. We bring the studio to you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        aria-labelledby="testimonials-heading"
        className="py-16 md:py-24"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2
            id="testimonials-heading"
            className="text-2xl md:text-3xl font-bold text-center"
          >
            Trusted By Many Satisfied Customers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {content.testimonials.map((t) => (
              <div
                key={t._key}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <SanityImage
                    image={t.avatar}
                    alt={`${t.name} avatar`}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full shrink-0"
                  />
                  <span className="font-semibold text-sm">{t.name}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
