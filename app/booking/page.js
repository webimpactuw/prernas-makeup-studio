import Link from "next/link";

export const metadata = {
  title: "Book an Appointment | Paddu's Glam Haven",
  description: "Submit a booking request for makeup and styling services.",
};

export default function BookingPage() {
  return (
    <main className="min-h-[70vh] py-16 md:py-24">
      <section className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-script text-5xl md:text-6xl text-brand-gold">
          Booking
        </h1>
        <p className="mt-4 text-gray-500">
          Thanks for your interest in booking with Paddu&apos;s Glam Haven.
          This page is ready and we&apos;ll add full booking details soon.
        </p>

        <div className="mt-10 rounded-2xl border border-brand-card bg-white p-8 text-left shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">
            Booking Request (Coming Soon)
          </h2>
          <p className="mt-3 text-gray-600">
            We&apos;re preparing a full booking flow. For now, please use the
            contact section and we&apos;ll follow up with availability and next
            steps.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-purple px-6 py-3 font-semibold text-white hover:brightness-110 transition-all"
            >
              Go to Contact
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
